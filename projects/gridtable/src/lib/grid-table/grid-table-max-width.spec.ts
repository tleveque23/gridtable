import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Component, signal } from '@angular/core'
import { GridTableComponent } from './grid-table'
import { GridColumnComponent } from '../grid-column/grid-column'

@Component({
  template: `
    <grid-table [values]="data()" [maxWidth]="maxWidth()">
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
  maxWidth = signal('500px')
}

describe('GridTableComponent Max Width', () => {
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

  it('should apply max-width to the table container', () => {
    const table = fixture.nativeElement.querySelector('.grid-table')
    expect(table.style.maxWidth).toBe('500px')
  })

  it('should update max-width when input changes', () => {
    hostComponent.maxWidth.set('300px')
    fixture.detectChanges()
    const table = fixture.nativeElement.querySelector('.grid-table')
    expect(table.style.maxWidth).toBe('300px')
  })
})
