// @ts-nocheck
import { ApplyPluginsType, dynamic } from '/Users/ningmeng/Desktop/react-ant/my-app/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/user",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/Users/ningmeng/Desktop/react-ant/my-app/src/layouts/UserLayout'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "name": "login",
        "path": "/user/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'/Users/ningmeng/Desktop/react-ant/my-app/src/pages/user/login'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      }
    ]
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__SecurityLayout' */'/Users/ningmeng/Desktop/react-ant/my-app/src/layouts/SecurityLayout'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/Users/ningmeng/Desktop/react-ant/my-app/src/layouts/BasicLayout'), loading: require('@/components/PageLoading/index').default}),
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/",
            "redirect": "/index/zjxx",
            "exact": true
          },
          {
            "path": "/index",
            "name": "index",
            "icon": "SettingOutlined",
            "routes": [
              {
                "name": "demo",
                "icon": "smile",
                "path": "/index/demo",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__jcpz__Demo' */'/Users/ningmeng/Desktop/react-ant/my-app/src/pages/jcpz/Demo'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "path": "/index/zjxx",
                "name": "zjxx",
                "icon": "smile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__jcpz__Fundinformation' */'/Users/ningmeng/Desktop/react-ant/my-app/src/pages/jcpz/Fundinformation'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "path": "/index/marketdevelopment",
                "name": "marketdevelopment",
                "icon": "smile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__jcpz__MarketDeveLopment' */'/Users/ningmeng/Desktop/react-ant/my-app/src/pages/jcpz/MarketDeveLopment'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "advertisingInvestment",
                "icon": "smile",
                "path": "/index/advertisinginvestment",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__jcpz__AdvertisingInvestment' */'/Users/ningmeng/Desktop/react-ant/my-app/src/pages/jcpz/AdvertisingInvestment'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "productdevelopment",
                "icon": "smile",
                "path": "/index/productdevelopment",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__jcpz__Productdevelopment' */'/Users/ningmeng/Desktop/react-ant/my-app/src/pages/jcpz/Productdevelopment'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "orderlist",
                "icon": "smile",
                "path": "/index/orderlist",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__jcpz__OrderList' */'/Users/ningmeng/Desktop/react-ant/my-app/src/pages/jcpz/OrderList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "name": "tablepage",
            "icon": "smile",
            "path": "/tablepage",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__tabelTest__tabel' */'/Users/ningmeng/Desktop/react-ant/my-app/src/pages/tabelTest/tabel'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "list.table-list",
            "icon": "table",
            "path": "/list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ListTableList' */'/Users/ningmeng/Desktop/react-ant/my-app/src/pages/ListTableList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/ningmeng/Desktop/react-ant/my-app/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/ningmeng/Desktop/react-ant/my-app/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/ningmeng/Desktop/react-ant/my-app/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
