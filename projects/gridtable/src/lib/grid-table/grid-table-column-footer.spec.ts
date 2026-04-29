import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Component, signal } from '@angular/core'
import { GridTableComponent } from './grid-table'
import { GridColumnComponent } from '../grid-column/grid-column'

@Component({
  template: `
    <grid-table [values]="data()" [stickyFooter]="true">
      <grid-column [attribute]="'name'" [footerColspan]="2">
        <ng-template #header>Name</ng-template>
        <ng-template #row let-item>{{ item.name }}</ng-template>
        <ng-template #footer>Combined Footer</ng-template>
      </grid-column>
      <grid-column [attribute]="'age'">
        <ng-template #header>Age</ng-template>
        <ng-template #row let-item>{{ item.age }}</ng-template>
      </grid-column>
      <grid-column [attribute]="'id'">
        <ng-template #header>ID</ng-template>
        <ng-template #row let-item>{{ item.id }}</ng-template>
        <ng-template #footer>ID Footer</ng-template>
      </grid-column>
    </grid-table>
  `,
  imports: [GridTableComponent, GridColumnComponent],
})
class TestHostComponent {
  data = signal([
    { id: 1, name: 'Alice', age: 30 },
  ])
}

describe('GridTable Column Footer', () => {
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

  it('should render column-based footers', () => {
    const footerCells = fixture.nativeElement.querySelectorAll('.grid-table-column-footer')
    expect(footerCells.length).toBe(2) // One for name (colspan 2), none for age, one for id
    expect(footerCells[0].textContent).toContain('Combined Footer')
    expect(footerCells[1].textContent).toContain('ID Footer')
  })

  it('should apply colspan to footer cells', () => {
    const footerCells = fixture.nativeElement.querySelectorAll('.grid-table-column-footer')
    expect(footerCells[0].style.gridColumn).toContain('span 2')
  })

  it('should apply sticky style when stickyFooter is true', () => {
    const footerCells = fixture.nativeElement.querySelectorAll('.grid-table-column-footer')
    const style = window.getComputedStyle(footerCells[0])
    expect(style.position).toBe('sticky')
    expect(style.bottom).toBe('0px')
  })
})
