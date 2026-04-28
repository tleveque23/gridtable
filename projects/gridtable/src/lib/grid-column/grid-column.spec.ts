import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Component, input, viewChild, TemplateRef } from '@angular/core'
import { GridColumnComponent } from './grid-column'

@Component({
  template: `
    <lib-grid-column [attribute]="'name'" [defaultWidth]="'100px'">
      <ng-template #header>Name Header</ng-template>
      <ng-template #row let-item>Name: {{ item.name }}</ng-template>
    </lib-grid-column>
  `,
  imports: [GridColumnComponent],
})
class TestHostComponent {
  column = viewChild(GridColumnComponent)
}

describe('GridColumnComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>
  let hostComponent: TestHostComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, GridColumnComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TestHostComponent)
    hostComponent = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should capture input properties', () => {
    const col = hostComponent.column()
    expect(col).toBeTruthy()
    expect(col?.attribute()).toBe('name')
    expect(col?.defaultWidth()).toBe('100px')
  })

  it('should capture header and row templates', () => {
    const col = hostComponent.column()
    expect(col?.headerTemplate()).toBeInstanceOf(TemplateRef)
    expect(col?.rowTemplate()).toBeInstanceOf(TemplateRef)
  })
})