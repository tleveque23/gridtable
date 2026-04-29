import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Component, signal } from '@angular/core'
import { GridTableComponent } from './grid-table'
import { GridColumnComponent } from '../grid-column/grid-column'
// @ts-ignore
import { GridTableFooterComponent } from './grid-table-footer'

@Component({
  template: `
    <grid-table [values]="data()" maxHeight="200px">
      <grid-column [attribute]="'name'">
        <ng-template #header>Name</ng-template>
        <ng-template #row let-item>{{ item.name }}</ng-template>
      </grid-column>
      <lib-grid-table-footer [sticky]="true">
        <div class="test-footer-content">Total: 2 items</div>
      </lib-grid-table-footer>
    </grid-table>
  `,
  imports: [GridTableComponent, GridColumnComponent, GridTableFooterComponent],
})
class TestHostComponent {
  data = signal([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ])
}

describe('GridTableFooterComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>
  let hostComponent: TestHostComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, GridTableComponent, GridColumnComponent, GridTableFooterComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TestHostComponent)
    hostComponent = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should render footer content', () => {
    const footer = fixture.nativeElement.querySelector('.test-footer-content')
    expect(footer).toBeTruthy()
    expect(footer.textContent).toContain('Total: 2 items')
  })

  it('should be sticky when sticky input is true', () => {
    const footerElement = fixture.nativeElement.querySelector('lib-grid-table-footer')
    const style = window.getComputedStyle(footerElement)
    expect(style.position).toBe('sticky')
    expect(style.bottom).toBe('0px')
  })
})
