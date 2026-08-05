import { createRouter, createWebHistory } from 'vue-router'

// Main routes
import Home from '@/components/home.vue'
import Education from '@/components/education.vue'
import Experience from '@/components/experience.vue'
import Contact from '@/components/contact.vue'
import Timeline from '@/components/timeline.vue'
import Projects from '@/components/projects.vue'
import OpenSource from '@/components/opensource.vue'
import Research from '@/components/research.vue'

// Project Detail Routes
import Kisanmitra from '@/components/projects/kisanmitra.vue'
import BigQuery from '@/components/projects/bigquery.vue'
import GrabPustak from '@/components/projects/grabpustak.vue'
import RegExplore from '@/components/projects/regexplore.vue'
import ManitMoodle from '@/components/projects/manitmoodle.vue'
import Captcha from '@/components/projects/captcha.vue'
import BigQueryProject from '@/components/projects/bigquery_project.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/education', name: 'Education', component: Education },
  { path: '/experience', name: 'Experience', component: Experience },
  { path: '/timeline', name: 'Timeline', component: Timeline },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/opensource', name: 'OpenSource', component: OpenSource },
  { path: '/research', name: 'Research', component: Research },
  { path: '/projects/kisanmitra', component: Kisanmitra },
  { path: '/projects/bigquery', redirect: '/projects/bigquery/architecture' },
  { path: '/projects/bigquery/architecture', component: BigQuery },
  { path: '/projects/grabpustak', component: GrabPustak },
  { path: '/projects/regexplore', component: RegExplore },
  { path: '/projects/manitmoodle', component: ManitMoodle },
  { path: '/projects/captcha', component: Captcha },
  { path: '/projects/bigquery/project', component: BigQueryProject }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'selected'
})

export default router

