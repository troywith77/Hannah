import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/CommonView'),
      children: [
        {
          path: '/',
          name: 'landing-page',
          component: require('@/components/LandingPage')
        }
      ],
    },
    {
      path: '/widget',
      name: 'widget-page',
      component: require('@/components/WidgetPage'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
