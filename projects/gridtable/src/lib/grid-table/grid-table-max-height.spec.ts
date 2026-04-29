import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Component, signal } from '@angular/core'
import { GridTableComponent } from './grid-table'
import { GridColumnComponent } from '../grid-column/grid-column'

@Component({
  template: `
    <grid-table [values]="data()" [maxHeight]="maxHeight()">
      <grid-column [attribute]="'id'">
        <ng-template #header>ID</ng-template>
        <ng-template #row let-item>{{ item.id }}</ng-template>
      </grid-column>
    </grid-table>
  `,
  imports: [GridTableComponent, GridColumnComponent],
})
class TestHostComponent {
  data = signal([{ id: 1 }])
  maxHeight = signal('400px')
}

describe('GridTableComponent Max Height', () => {
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

  it('should apply max-height to the table container', () => {
    const table = fixture.nativeElement.querySelector('.grid-table')
    expect(table.style.maxHeight).toBe('400px')
  })

  it('should update max-height when input changes', () => {
    hostComponent.maxHeight.set('200px')
    fixture.detectChanges()
    const table = fixture.nativeElement.querySelector('.grid-table')
    expect(table.style.maxHeight).toBe('200px')
  })

  it('should have sticky headers', () => {
    const header = fixture.nativeElement.querySelector('.grid-table-header')
    const style = window.getComputedStyle(header)
    expect(style.position).toBe('sticky')
    expect(style.top).toBe('0px')
  })
})
