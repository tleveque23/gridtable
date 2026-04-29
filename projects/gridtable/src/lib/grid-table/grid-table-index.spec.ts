import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Component, signal } from '@angular/core'
import { GridTableComponent } from './grid-table'
import { GridColumnComponent } from '../grid-column/grid-column'

@Component({
  template: `
    <grid-table [values]="data()">
      <grid-column [attribute]="'name'">
        <ng-template #header>Name</ng-template>
        <ng-template #row let-item let-index="index">
          <div class="test-index">{{ index }}</div>
          <div class="test-name">{{ item.name }}</div>
        </ng-template>
      </grid-column>
    </grid-table>
  `,
  imports: [GridTableComponent, GridColumnComponent],
})
class TestHostComponent {
  data = signal([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ])
}

describe('GridTableComponent Index Exposure', () => {
  let fixture: ComponentFixture<TestHostComponent>
  let hostComponent: TestHostComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, GridTableComponent, GridColumnComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TestHostComponent)
    hostComponent = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should expose the row index to the column template', () => {
    const indexElements = fixture.nativeElement.querySelectorAll('.test-index')
    expect(indexElements.length).toBe(2)
    expect(indexElements[0].textContent).toContain('0')
    expect(indexElements[1].textContent).toContain('1')
  })
})
