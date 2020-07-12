import { capitalize } from '@core'

export default class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provider from DomListener`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error(`This ${
          method
        } method is not implemented on ${
          this.name
        } Component`)
      } else {
        /** Save -> this */
        this[method] = this[method].bind(this)
        /** Binded addEventListener for $root */
        this.$root.on(listener, this[method])
      }
    })
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error(`This ${
          method
        } method is not implemented on ${
          this.name
        } Component`)
      } else {
        /** Binded addEventListener for $root */
        this.$root.off(listener, this[method])
      }
    })
  }
}

function getMethodName(eventName) {
  return `on${capitalize(eventName)}`
}
