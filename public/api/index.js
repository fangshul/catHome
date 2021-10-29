import domain from '@/config/interface.js'
import request from '@/units/request.js'

module.exports = {
	
	'uploadImg':  (img) => {
		return new Promise((resolve, reject) => {
			uni.uploadFile({
					url: domain.api.uploadImg,
					filePath: img,
					name: 'file',
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

	},
}