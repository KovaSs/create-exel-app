import DomListener from './DomListener'

export default class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
  }

  /** Return component HTML template */
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }
}
