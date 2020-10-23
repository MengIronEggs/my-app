// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/index/zjxx',
            },
            {
              path: '/index',
              name: 'index',
              icon: 'SettingOutlined',
              // component: './jcpz/Index',
              routes: [
                {
                  path: '/index/zjxx',
                  name: 'zjxx',
                  icon: 'smile',
                  component: './jcpz/Fundinformation',
                },
                {
                  path: '/index/marketdevelopment',
                  name: 'marketdevelopment',
                  icon: 'smile',
                  component: './jcpz/MarketDeveLopment',
                },
                {
                  name: 'advertisingInvestment',
                  icon: 'smile',
                  path: '/index/advertisinginvestment',
                  component: './jcpz/AdvertisingInvestment',
                },
                {
                  name: 'productdevelopment',
                  icon: 'smile',
                  path: '/index/productdevelopment',
                  component: './jcpz/Productdevelopment',
                },
              ],
            },
            {
              name: 'tablepage',
              icon: 'smile',
              path: '/tablepage',
              component: './tabelTest/tabel',
            },
            {
              name: 'list.table-list',
              icon: 'table',
              path: '/list',
              component: './ListTableList',
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
