import { Component, input, contentChildren, computed, HostBinding } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GridColumnComponent } from '../grid-column/grid-column'

@Component({
  selector: 'grid-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-table.html',
  styleUrl: './grid-table.scss',
})
export class GridTableComponent {
  values = input<any[]>([])
  maxWidth = input<string>()
  maxHeight = input<string>()
  columns = contentChildren(GridColumnComponent)

  gridTemplateColumns = computed(() => {
    const cols = this.columns()
    return cols
      .map((col) => {
        const min = col.minWidth() || 'min-content'
        const max = col.maxWidth() || (col.defaultWidth() ? col.defaultWidth() : '1fr')
        const def = col.defaultWidth()

        if (def && !col.minWidth() && !col.maxWidth()) {
          return def
        }
        return `minmax(${min}, ${max})`
      })
      .join(' ')
  })
}