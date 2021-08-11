[defineCustomElement]: https://v3.vuejs.org/guide/web-components.html#definecustomelement
[custom element]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
[demo]: https://vue-custom-element-example.netlify.app
[vue demo]: https://vue-custom-element-example.netlify.app/vue.html
[registered manually]: https://github.com/ElMassimo/vue-custom-element-example/blob/main/playground/main.ts#L5
[within a Vue component]: https://github.com/ElMassimo/vue-custom-element-example/blob/main/playground/App.vue#L3
[additional configuration]: https://github.com/ElMassimo/vue-custom-element-example/blob/main/playground/vite.config.ts#L18

# Using Custom Elements defined with Vue 3

This playground is an example on how to use a [custom element] that was defined using the [`defineCustomElement`][defineCustomElement] API in Vue 3.

There are two flavors:

- [`index.html`][demo] uses the custom element directly in HTML, which is [registered manually].
- [`vue.html`][vue demo] uses the custom element [within a Vue component], which requires [additional configuration].

## Demo 🚀

[Visit the live demo][demo] to see the custom element in action.
