import axios, { type AxiosRequestConfig } from 'axios'

const _req = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export type ResponseType<T> = {
    code: number
    data: T
    msg: string
    success: boolean
}

const request = async <T>(config: AxiosRequestConfig) => {
    try {
        // 在发送请求之前做些什么
        // let token = ''
        // if (token) {
        //     if (config.headers != null) {
        //         config['headers']['Authorization-Project'] = token
        //     } else {
        //         config['headers'] = {
        //             'Authorization-Project': token,
        //         }
        //     }
        // }
        const res = await _req(config)
        return res.data as ResponseType<T>
    } catch (err) {
        return await Promise.reject(err)
    }
}

export default request
