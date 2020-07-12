import { ExcelComponent } from '@core'

export default class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(e) {
    console.debug('Formula: onInput', this.$root, e.target.textContent.trim())
  }

  onClick(e) {
    console.debug('Formula: onClick', this.$root, e.target)
  }
}
