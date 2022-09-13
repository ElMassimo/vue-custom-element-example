import { Controller } from '@hotwired/stimulus'




  type Fruit = '🍎' | '🍊' | '🥭' | '🥝'

  interface FruitOption {
    label: string
    emoji: Fruit
  }

  const fruits: FruitOption[] = [
    { label: 'Apple', emoji: '🍎' },
    { label: 'Mango', emoji: '🥭' },
    { label: 'Kiwi', emoji: '🥝' },
    { label: 'Orange', emoji: '🍊' },
  ]


export default class extends Controller {
  static get targets() {
    return ['fruitsList']
  }

  connect () {
    this.showFruits()
  }

  showFruits () {
    this.fruitsListTarget.innerHTML = `
      <ul>
        ${fruits.map(fruit => `<li><span class="emoji">${fruit.emoji}</span><span class="label">${fruit.label}</span></li>`).join("\n")}
      </ul>
    `
  }
}
