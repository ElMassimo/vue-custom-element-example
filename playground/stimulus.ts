import { Application } from '@hotwired/stimulus'
import { registerControllers } from 'stimulus-vite-helpers'

// Start Stimulus application
const application = Application.start()

// Load and register global controllers
registerControllers(
  application,
  import.meta.globEager('./*_controller.*')
)
