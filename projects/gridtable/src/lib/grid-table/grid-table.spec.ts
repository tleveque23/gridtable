import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Component, signal } from '@angular/core'
import { GridTableComponent } from './grid-table'
import { GridColumnComponent } from '../grid-column/grid-column'

@Component({
  template: `
    <grid-table [values]="data()">
      <grid-column [attribute]="'id'">
        <ng-template #header>ID</ng-template>
        <ng-template #row let-item>{{ item.id }}</ng-template>
      </grid-column>
      <grid-column [attribute]="'name'">
        <ng-template #header>Name</ng-template>
        <ng-template #row let-item>{{ item.name }}</ng-template>
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

describe('GridTableComponent', () => {
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

  it('should render headers', () => {
    const headers = fixture.nativeElement.querySelectorAll('.grid-table-header')
    expect(headers.length).toBe(2)
    expect(headers[0].textContent).toContain('ID')
    expect(headers[1].textContent).toContain('Name')
  })

  it('should render data rows', () => {
    const cells = fixture.nativeElement.querySelectorAll('.grid-table-cell')
    expect(cells.length).toBe(4) // 2 rows * 2 columns
    expect(cells[0].textContent).toContain('1')
    expect(cells[1].textContent).toContain('Alice')
    expect(cells[2].textContent).toContain('2')
    expect(cells[3].textContent).toContain('Bob')
  })
})