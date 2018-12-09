import Vue from 'vue'
import Router from 'vue-router'

//main routes
import Home from '@/components/home'
import Education from '@/components/education'
import Experience from '@/components/experience'
import Contact from '@/components/contact'
import Timeline from '@/components/timeline'
import Projects from '@/components/projects'

//projects
import Kisanmitra from '@/components/projects/kisanmitra.vue'
import BigQuery from "@/components/projects/bigquery.vue"
import GrabPustak from "@/components/projects/grabpustak.vue"
import RegExplore from "@/components/projects/regexplore.vue"
import ManitMoodle from "@/components/projects/manitmoodle.vue"
import Captcha from "@/components/projects/captcha.vue"
import BigQueryProject from "@/components/projects/bigquery_project.vue"
let routes=[
    {
        path:"/",
        component:Home
    },
    {
        path:"/education",
        component:Education
    },
    {
        path:"/experience",
        component:Experience
    },
    {
        path:"/timeline",
        component:Timeline
    },
    {
        path:"/contact",
        component:Contact
    },
    {
        path:"/projects",
        component:Projects
    },
    {
        path:"/projects/kisanmitra",
        component:Kisanmitra
    },
    {
        path:"/projects/bigquery",
        redirect:"/projects/bigquery/architecture"
    },
    {
        path:"/projects/bigquery/architecture",
        component:BigQuery
    },
    {
        path:"/projects/grabpustak",
        component:GrabPustak
    },
   {
        path:"/projects/regexplore",
        component:RegExplore
    },
    {
        path:"/projects/manitmoodle",
        component:ManitMoodle
    },
    {
        path:"/projects/captcha",
        component:Captcha
    },
    {
        path:"/projects/bigquery/project",
        component:BigQueryProject
    },

]

export default new Router({
    routes:routes,
    mode:'history',
    linkActiveClass:'selected'
})
