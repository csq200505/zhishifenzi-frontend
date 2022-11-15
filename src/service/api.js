const api = ''

/**
 * 前后端交互通用逻辑方法
 *
 * @author csq
 */

/**
 * 请求后端接口：post方法
 * @param url 后端地址
 * @param data 数据，要求json
 * @returns 请按照以下案例获取返回值：
 * postMethod('/her',{...}).then((res) => {
 *     if(res.status == 200){
 *         //...执行业务逻辑
 *     }else{
 *         //...报错，等等
 *     }
 * })
 */
export function postMethod(url,data){
    return new Promise((resolve) => {
        uni.request({
            url:api+url,
            data,
            method:'POST',
            success:(res) => {
                resolve(res)
            },
            fail:(res) => {
                resolve(res)
            }
        })
    })
}


/**
 * 请求后端接口：get方法
 * @param url 后端地址
 * @param params param
 * @returns 请按照以下案例获取返回值：
 * getMethod('/her',{...}).then((res) => {
 *      if(res.status == 200){
 *         //...执行业务逻辑
 *     }else{
 *         //...报错，等等
 *     }
 * })
 */
export function getMethod(url,data){
    return new Promise((resolve) => {
        uni.request({
            url:api+url,
            data,
            method:'GET',
            success:(res) => {
                resolve(res)
            },
            fail:(res) => {
                resolve(res)
            }
        })
    })
}

