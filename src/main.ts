import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router';
import { styles } from '@material/web/typography/md-typescale-styles.js';

if(styles.styleSheet){
    document.adoptedStyleSheets.push(styles.styleSheet);
}

const app = createApp(App)

app.use(router)

app.mount('#app')

