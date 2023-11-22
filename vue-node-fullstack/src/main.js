import { createApp } from 'vue';
import App from './App.vue';
import VueFroala from 'vue-froala-wysiwyg';

// Import Froala Editor CSS
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/themes/dark.min.css';

// Import Froala Editor JS and plugins
import 'froala-editor/js/plugins.pkgd.min.js';

const app = createApp(App);

// Register Froala Editor as a global component
app.use(VueFroala);

app.mount('#app');
