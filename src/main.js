import { createApp } from 'vue';
import contentService from './services/contentService';
import App from './App.vue';
import router from './router';

const app = createApp(App);

contentService.getHomeData().then((response) => {
  localStorage.setItem('homeData', JSON.stringify(response.data));
});

app.config.globalProperties.$t = (key) => {
  const data = JSON.parse(localStorage.getItem('homeData')).filter((item) => item.key === key)[0];
  if (data) {
    return data.value;
  }
  throw Error(`Key ${key} not found in homeData`);
};

app.use(router);
app.mount('#app');
