import config from '@/config/interface.js'
export default function requset (options = {}) {
	
	// 传进来的参数
	const {
		url = '', header, method, data
	} = options
	
	let token = uni.getStorageSync('bindToken')
	
	if (token) {
		options.header['token'] = token
	}
	
	options.url = config.api[options.url]
	
	return new Promise((resolve, reject) => {
		uni.request({
		    ...options,
			success: (res) => {
				// console.log(res)
				resolve(res);
			},
			fail: (err) => {
				console.log(err)
				reject();
			}
		})
	})
	
}