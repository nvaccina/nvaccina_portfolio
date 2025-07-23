import { createApp, nextTick } from 'vue';
import App from './App.vue';
import { router } from "./router";
import { createHead } from '@vueuse/head';

const app = createApp(App);
app.use(router);
app.use(createHead());
app.mount('#app');

router.isReady().then(() => {
  nextTick(() => {
    window.dispatchEvent(new Event('render-event'));
  });
});
