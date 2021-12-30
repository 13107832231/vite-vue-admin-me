import axios from 'axios'
import { useCounterStore } from "@/stores/test";

console.log(import.meta.env.VITE_API_BASE_URL, 'import.meta.env.VITE_API_BASE_URL')
const baseURL = import.meta.env.VITE_API_BASE_URL

const request = axios.create({
  baseURL: baseURL,
  timeout: 5000, // request timeout
})

// 发起请求之前的拦截器
request.interceptors.request.use(
  (config: any) => {
    // 如果有token 就携带tokon
    const info = useCounterStore()
    console.log(info, 'info')
    const token = info.token;
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  (error) => Promise.reject(error)
)
// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const res = response.data
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default request
