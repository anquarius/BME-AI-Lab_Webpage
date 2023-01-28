import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PeopleView from '@/views/PeopleView.vue';
import PeopleDetailView from  '@/views/PeopleDetailView.vue';
import ResearchView from '@/views/ResearchView.vue';
import PartnershipView from '@/views/PartnershipView.vue';
import ContactView from '@/views/ContactView.vue';
import NotFound from '@/views/NotFound.vue';

import BME1D02 from '@/views/courses/BME1D02.vue'
import MaintenenceView from '@/views/MaintenenceView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // component: HomeView,
    component: MaintenenceView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/_AboutView.vue')
  // },
  {
    path: '/people',
    name: 'People',
    component: PeopleView,
    // component: MaintenenceView,
  },
  {
    path: '/people/:id',
    name: 'PeopleDetails',
    // component: PeopleDetailView,
    component: MaintenenceView,
  },
  {
    path: '/research',
    name: 'Research',
    // component: ResearchView,
    component: MaintenenceView,
  },
  {
    path: '/partnership',
    name: 'Partnership',
    // component: PartnershipView,
    component: MaintenenceView,
  }
  ,
  {
    path: '/contact',
    name: 'Contact',
    // component: ContactView,
    component: MaintenenceView,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },

  // have to build another html instead of single page web
  {
    path: '/bme1d02',
    name: 'BME1D02',
    component: BME1D02,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
