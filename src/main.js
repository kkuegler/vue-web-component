import { createApp, defineCustomElement, h } from "vue";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";

// traditional (light) DOM
//createApp(App).mount("#app");

// ['/* css content */']
console.log(App.styles);
console.log(HelloWorld.styles);

//const appElement = defineCustomElement(AppCE);
const appElement = defineCustomElement({
  render() {
    return h(App);
  },
  //styles: [...AppCE.styles, ...HelloWorld.styles],
  styles: [App, HelloWorld]
    .map((x) => x.styles)
    .reduce((result, current) => result.concat(current)),
});
// register
customElements.define("my-spass", appElement);
