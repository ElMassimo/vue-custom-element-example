import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static get targets() {
    return ['currentCount', 'decrementButton', 'incrementButton']
  }

  static get values() {
    return { count: Number, min: Number, max: Number }
  }

  minValue = 1
  maxValue = 3

  increment() {
    this.countValue += 1
  }

  decrement() {
    this.countValue -= 1
  }

  countValueChanged() {
    this.currentCountTarget.textContent = this.countValue
    this.incrementButtonTarget.toggleAttribute('disabled', this.countValue >= this.maxValue)
    this.decrementButtonTarget.toggleAttribute('disabled', this.countValue <= this.minValue)
  }

  connect () {
    countValueChanged()
  }
}
