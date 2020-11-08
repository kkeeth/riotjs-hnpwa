import '@riotjs/hot-reload'
import { component, register } from 'riot'
import { Router, Route } from '@riotjs/route'
import App from './components/app.riot'

register('router', Router)
register('route', Route)

component(App)(document.getElementById('app'))
