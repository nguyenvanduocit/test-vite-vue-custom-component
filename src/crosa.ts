import HelloWorld from './components/HelloWorld.ce.vue'
import { defineCustomElement } from 'vue'
const ExampleElement = defineCustomElement(HelloWorld)
customElements.define('hello-world', ExampleElement)
