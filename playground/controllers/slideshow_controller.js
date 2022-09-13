import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static get targets() {
    return ['slides', 'previousButton', 'nextButton']
  }

  static get values() {
    return { index: Number }
  }




  emojis = ['🐵', '🙈', '🙉', '🙊']
  
  get isPreviousDisabled () {
    return this.indexValue <= 0
  }

  get isNextDisabled () {
    return this.indexValue >= this.emojis.length - 1
  }

  showCurrentEmoji () {
    this.slidesTarget.innerText =
      this.emojis[this.indexValue] || '💥'
  }

  next () {
    this.indexValue++
  }

  previous () {
    this.indexValue--
  }

  disableButtonsOnBoundaries () {
    this.previousButtonTarget.toggleAttribute('disabled', this.isPreviousDisabled)
    this.nextButtonTarget.toggleAttribute('disabled', this.isNextDisabled)
  }

  connect () {
    this.showCurrentEmoji()
    this.indexValue = Math.min(Math.max(this.indexValue, 0), this.maxIndex)
  }

  disconnect () {
    this.previousButtonTarget.toggleAttribute('disabled', false)
    this.nextButtonTarget.toggleAttribute('disabled', false)
  }

  indexValueChanged () {
    this.showCurrentEmoji()
    this.disableButtonsOnBoundaries()
  }

  get maxIndex () {
    return this.emojis.length - 1
  }
}
