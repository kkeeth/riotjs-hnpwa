import './routes/top.tag'
import './routes/news.tag'
import './routes/show.tag'
import './routes/ask.tag'
import './routes/jobs.tag'

<app-main>
  <router>
    <route path="/"><top /><route>
    <route path="news"><news /></route>
    <route path="show"><show /><route>
    <route path="ask"><ask /><route>
    <route path="jobs"><jobs /><route>
  </router>
</app-main>
