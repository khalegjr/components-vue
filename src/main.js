import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import VueRouter from "vue-router";

const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

const routes = [
    { path: "/foo", name: "foo", component: Foo },
    { path: "/bar", name: "bar", component: Bar },
];

const router = new VueRouter({
    routes,
});

createApp(App).use(router).mount("#app");
