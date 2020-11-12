/* eslint-disable no-alert */
/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '用户没有权限',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

// 为后台随时改访问域名留下的可求改的变量，功能很简单，没有加到redux下；
const leyanHost = process.env.host || '';
let isDev: any = false;
if (leyanHost.indexOf('dev') !== -1) {
  sessionStorage.setItem('host', leyanHost);
  isDev = true;
}
/**
 * 异常处理程序
 */
const errorHandler = async (error: { response: any }): Response => {
  const { response = { clone: () => ({ json: () => {} }) } } = error;
  const data = await response.clone().json();
  const { status, url } = response;
  if (url.indexOf('userInfo') !== -1) {
    if (status === 401) {

      return response;
    }
  }
  // 超时重新登陆
  if (status === 401) {
    return response;
  }

  // 超时重新登陆
  if (status === 403) {
    alert('您是否忘记链接内部VPN了？');
  }

  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    notification.error({
      message: `${data.msg || '系统出错'}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  // credentials: 'include', // 默认请求是否带上cookie
});
request.interceptors.request.use((url: string, options: any) => {
  const token = localStorage.getItem('onToken');
  // const urlArr = ['/GetDmprojectWhere?cond=yearmonth&arg=202007']; // 排除/login接口不做token拦截
  const urlArr = ['/login?username']; // 排除/login接口不做token拦截
  if (token || urlArr.some((item: any) => url.indexOf(item) !== -1)) {
    // const host = 'http://vise.hunanjs.gov.cn';
    // const host = 'https://gtdb.csdri.com.cn/ddaily/';
    const host = 'https://gtdb.csdri.com.cn/sandboxapi';
    const data = options.data || {};
    const useroptions = { ...options, data };
    const userHeaders = useroptions.headers || {}; // 导入自配的header，方便上传文件时使用
    const headers = {
      'Content-Type': 'application/json',
      // Accept: 'application/json',
      'Authorization': 'Bearer' + token,
      // ...userHeaders,
    };
    if(urlArr.some((item: any) => url.indexOf(item) !== -1)){
      delete(headers['Authorization']);
    }
    useroptions.headers = {
      ...headers,
    };
    return {
      url: `${host}${url}`,
      options: { ...useroptions },
    };
  }
  return false;
});

// request.interceptors.response.use(async (response: any, options: any) => {
//   const EciAccessToken: any = response.headers.get('eci-access-token');
//   if (EciAccessToken) {
//     localStorage.setItem('userToken', EciAccessToken);
//   }
//   return response;
// });

export default request;
