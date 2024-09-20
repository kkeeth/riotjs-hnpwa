import '@riotjs/hot-reload'
import { component } from 'riot'

import App from './src/app.riot'
import registerGlobalComponents from "./src/register-global-components";
import "./src/style.css";

registerGlobalComponents();

component(App)(document.getElementById('root'))
