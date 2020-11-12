import request from '@/utils/request';

export async function login(data) {
    // http://vise.hunanjs.gov.cn
    return request('/dataview/SystemController/userLogin', {
        method: 'POST',
        data,
    });
}
export async function AjaxGet(text) {
    return request(`/GetDmprojectWhere?cond=yearmonth&arg=${text}`, {
        method: 'GET',
    });
}

// 沙盘登录
export async function sendBoxLogin(data){
    return request (`/login?username=${data.userName}&password=${data.password}`)
}
// 沙盘比赛开始
export async function senBoxCreateTable(data){
    return request (`/createTable?table_num=${data}`)
}
