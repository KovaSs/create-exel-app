import { ExcelComponent } from '@core'
import createTable from './table.template'

export default class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: [
        // 'click',
        'mousedown',
        // 'mouseup',
        // 'mousemove',
      ]
    })
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(e) {
    if (e.target.dataset.resize) {
      console.debug(
          `${this.name}: onMousedown`,
          this.$root,
          e.target
      )
    }
  }

  onMouseup(e) {
    console.debug(
        `${this.name}: onMouseup`,
        this.$root,
        e.target
    )
  }

  onMousemove(e) {
    console.debug(
        `${this.name}: onMousemove`,
        this.$root,
        e.target
    )
  }

  onClick(e) {
    console.debug(`${this.name}: onClick`, this.$root, e.target)
  }
}
