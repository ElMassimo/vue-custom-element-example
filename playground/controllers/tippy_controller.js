import { Application, Controller } from '@hotwired/stimulus'
import tippy from 'tippy.js'

export default class TippyController extends Controller {
  static targets = ['html'];

  connect() {
    tippy(this.element, {
      allowHTML: true,
      arrow: true,
      placement: 'bottom',
      theme: 'light-border',
      animation: 'scale',
      content: (reference) => {
        const title = reference.getAttribute('title');

        if (title) {
          // Remove title from DOM element to avoid native browser tooltips
          reference.removeAttribute('title');

          return title;
        }
        if (this.hasHtmlTarget) return this.htmlTarget.innerHTML
      },
    });
  }

  disconnect() {
    this.element._tippy.destroy();
  }
}

import {  } from '@hotwired/stimulus'
