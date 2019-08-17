import axiosInstance from  "./ajax";

//定义登录方法
export const  reqLogin  = (username,password) => {
  return axiosInstance.post("/login",{username,password})
};
