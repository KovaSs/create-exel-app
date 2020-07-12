import { ExcelComponent, $ } from '@core'
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
      const $resizer = $(e.target)
      const $parent = $resizer.closest('[data-type="resizable"]')
      const coords = $parent.getCoords()
      const sells = this.$root.findAll(`[data-col="${$parent.data.col}"]`)

      document.onmousemove = (ev) => {
        console.log('onmousemove')
        const delta = ev.pageX - coords.right
        const value = coords.width + delta
        $parent.$el.style.width = `${value}px`
        sells.forEach((el) => el.style.width = `${value}px`)
      }

      document.onmouseup = () => {
        document.onmousemove = null
      }
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
