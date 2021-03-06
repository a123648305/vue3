import axios from 'axios'
var instance = axios.create({
    baseURL: '/api',
    timeout:10000,
    headers:{
      'Content-Type': 'application/json; charset=utf-8'
    }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
 });




var request=Object.create(null)
const methods=['GET','POST','DELETE','PUT','PATCH'];
methods.map(item=>{
    request[item.toLowerCase()]=(url,data,header)=>{
        return new Promise((resolve,reject)=>{     
            instance({
              method:item,
              url,
              data,
              header
          }).then(res=>{
            resolve(res.data)
          }).catch(err=>{
            reject(err)
          })
        }) 
    }
})


 export default request