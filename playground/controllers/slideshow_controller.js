import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static get targets() {
    return ['slides', 'previousButton', 'nextButton']
  }

  static get values() {
    return { index: Number }
  }

  slides = [
    '🐵',
    '🙈',
    '🙉',
    '🙊',
    // 'THE END',
  ]

  next () {
    this.indexValue++
  }

  previous () {
    this.indexValue--
  }

  indexValueChanged () {
    this.showCurrentSlide()
    this.checkBoundaries()
  }

  showCurrentSlide () {
    this.slidesTarget.innerText = this.slides[this.indexValue]
  }

  checkBoundaries () {
    this.previousButtonTarget.toggleAttribute('disabled', this.indexValue <= 0)
    this.nextButtonTarget.toggleAttribute('disabled', this.indexValue >= this.maxIndex)
  }

  connect () {
    this.showCurrentSlide()
    this.indexValue = Math.min(Math.max(this.indexValue, 0), this.maxIndex)
  }

  get maxIndex () {
    return this.slides.length - 1
  }
}
