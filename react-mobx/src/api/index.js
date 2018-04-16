import axios from 'axios';

const API_URL = 'https://example';

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
});

// 添加请求拦截器
instance.interceptors.request.use(requestConfig => {
    const newRequestConfig = { ...requestConfig };
    // const user = localStorage.getItem('user');
    //
    // newRequestConfig.headers['X-Token'] = user.authorization;
    // 在发送请求之前做些什么
    return newRequestConfig;
}, error => Promise.reject(error));

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     return response;
// }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
// });

export default instance;
