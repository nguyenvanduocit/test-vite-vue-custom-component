import HelloWorld from './components/HelloWorld.ce.vue'
import MyButton from './components/MyButton.vue'
import { defineCustomElement } from 'vue'
customElements.define('hello-world',  defineCustomElement(HelloWorld))
customElements.define('my-button',  defineCustomElement(MyButton))

