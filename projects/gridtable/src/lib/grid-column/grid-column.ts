import { Component, input, contentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'grid-column',
  standalone: true,
  templateUrl: './grid-column.html',
  styleUrl: './grid-column.scss',
})
export class GridColumnComponent {
  attribute = input<string>()
  defaultWidth = input<string>()
  minWidth = input<string>()
  maxWidth = input<string>()

  headerTemplate = contentChild<TemplateRef<any>>('header')
  rowTemplate = contentChild<TemplateRef<any>>('row')
}