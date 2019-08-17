import axios from 'axios';

const BASE_URL =process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://localhost:5000';

const axiosInstance =axios.create({
  baseURL : BASE_URL,
  timeout:1000,
});
// 设置拦截器/中间件
axiosInstance.interceptors.response.use(
  (response) => {
    const result = response.data;

    if (result.status === 0){
      //请求成功
      return result.data || {};
    }else{
      //请求失败
      return Promise.reject(result.msg || "请求失败");
    }
  },
  (error) => {
    console.log("请求失败",error);
    return Promise.reject("网络出现故障，请刷新试试");
  },
);

export default axiosInstance;
