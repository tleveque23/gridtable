import { Component, signal } from '@angular/core'
import { GridTableComponent, GridColumnComponent } from 'gridtable'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridTableComponent, GridColumnComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  values = signal([
    { name: 'Doe', firstName: 'John', age: 30 },
    { name: 'Smith', firstName: 'Jane', age: 25 },
    { name: 'Brown', firstName: 'Charlie', age: 40 },
  ])

  deleteItem(item: any) {
    this.values.update((v) => v.filter((i) => i !== item))
  }
}
