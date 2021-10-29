var ENV = {
	RELEASE: 0,
	DEV: 1
}

const CUR_ENV = ENV.DEV

const DOMAIN_R = {
	host: ""
}

const DOMAIN_D = {
	host: "http://localhost:3333"
}

const DOMAIN = (CUR_ENV === ENV.RELEASE) ? DOMAIN_R : DOMAIN_D

const config = {
	api: {
		// 上传照片
		uploadImg: `${DOMAIN.host}/uploadImage`,
		// 发布论坛
		addForum: `${DOMAIN.host}/forum`
	}
}

export default config