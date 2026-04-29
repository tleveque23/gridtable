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

  wideData = signal([
    {
      name: 'Doe',
      firstName: 'John',
      age: 30,
      phone: '555-1212',
      email: 'john@doe.com',
      address: '123 Main St',
      city: 'New York',
      country: 'USA',
      zip: '10001',
    },
    {
      name: 'Smith',
      firstName: 'Jane',
      age: 25,
      phone: '555-1313',
      email: 'jane@smith.com',
      address: '456 Elm St',
      city: 'Los Angeles',
      country: 'USA',
      zip: '90001',
    },
  ])

  deleteItem(item: any) {
    this.values.update((v) => v.filter((i) => i !== item))
  }
}
