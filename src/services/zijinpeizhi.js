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

