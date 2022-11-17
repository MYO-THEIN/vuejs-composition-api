import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PostDetail from '../views/PostDetail.vue'
import CreatePost from '../views/CreatePost'
import Tag from '../views/Tag'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'detail',
    component: PostDetail,
    props: true
  },
  {
    path: '/create',
    name: 'create',
    component: CreatePost
  },
  {
	path: '/tags/:tag',
	name: 'tag',
	component: Tag,
	props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
