import { ExcelComponent } from '@core'

export default class Header extends ExcelComponent {
  toHTML() {
    return '<h1>Header</h1>'
  }
}
