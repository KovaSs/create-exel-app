export default class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`No $root provider from DomListener`)
    }
    this.$root = $root
  }
}
