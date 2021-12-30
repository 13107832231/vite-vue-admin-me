import Request from '@/utils/axios'
const link = (url: string) => `${url}`
export const get = (url: string) => (params: {}) =>
  Request.get(link(url), { params })
export const post = (url: string) => (params: {}) =>
  Request.post(link(url), params)
export const put = (url: string) => (params: {}) =>
  Request.put(link(url), params)
export const del = (url: string) => (params: {}) =>
  Request.delete(link(url), params)
export const patch = (url: string) => (params: {}) =>
  Request.patch(link(url), params)
