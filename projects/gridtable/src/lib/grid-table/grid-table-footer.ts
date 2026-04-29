import { Component, input, HostBinding } from '@angular/core'

@Component({
  selector: 'lib-grid-table-footer',
  standalone: true,
  templateUrl: './grid-table-footer.html',
  styleUrl: './grid-table-footer.scss',
})
export class GridTableFooterComponent {
  sticky = input<boolean>(false)

  @HostBinding('style.position') get position() {
    return this.sticky() ? 'sticky' : 'static'
  }

  @HostBinding('style.bottom') get bottom() {
    return this.sticky() ? '0' : 'auto'
  }

  @HostBinding('style.z-index') get zIndex() {
    return this.sticky() ? '10' : 'auto'
  }
}
