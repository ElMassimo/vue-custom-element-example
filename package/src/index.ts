import { defineCustomElement } from 'vue'
import DarkModeSwitchWithStyles from './DarkModeSwitch.ce.vue'
import GithubLinkWithStyles from './GithubLink.ce.vue'

export const DarkModeSwitch = defineCustomElement(DarkModeSwitchWithStyles)
export const GithubLink = defineCustomElement(GithubLinkWithStyles)

export function register (tagName: string = 'dark-mode-switch') {
  customElements.define(tagName, DarkModeSwitch)
  customElements.define('github-link', GithubLink)
}
