import { defineCustomElement } from 'vue'
import DarkModeSwitchWithStyles from './DarkModeSwitch.ce.vue'

export const DarkModeSwitch = defineCustomElement(DarkModeSwitchWithStyles)

export function register () {
  customElements.define('dark-mode-switch', DarkModeSwitch)
}
