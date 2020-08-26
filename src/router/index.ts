import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

const Model = () =>
  import(/* webpackChunkName: "czx" */ '_view/3dModel/3dModel.vue')

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/model',
    name: 'model',
    component: Model,
  },
];

const router = new VueRouter({
  routes,
})

export default router
