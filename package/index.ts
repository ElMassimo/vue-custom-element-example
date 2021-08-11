import { defineCustomElement } from 'vue'
import DarkModeSwitchWithStyles from './DarkModeSwitch.ce.vue'

export const DarkModeSwitch = defineCustomElement(DarkModeSwitchWithStyles)

export function register (tagName: string = 'dark-mode-switch') {
  customElements.define(tagName, DarkModeSwitch)
}
