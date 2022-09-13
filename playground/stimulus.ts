import './styles.css'
import './global.css'

import { Application } from '@hotwired/stimulus'
import { registerControllers } from 'stimulus-vite-helpers'

// Start Stimulus application
const application = Application.start()

let controllers

// Load and register global controllers
registerControllers(
  application,
  controllers = import.meta.globEager('./controllers/*_controller.*')
)
