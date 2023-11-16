import type { App } from 'vue';
import i18n from '../lib/i18n';

export default (app: App) => {
  app.use(i18n);
};