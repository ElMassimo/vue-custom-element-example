import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static get targets() {
    return ["currentCount"]
  }

  static get values() {
    return { count: Number }
  }

  increment() {
    this.countValue++
  }

  decrement() {
    this.countValue--
  }

  countValueChanged() {
    this.currentCountTarget.textContent = this.countValue
  }
}
