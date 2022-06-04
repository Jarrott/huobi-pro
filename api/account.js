import request from './request.js';

export const getCaptcha = params => {
	return request({
		url: '/v1/user/captcha',
		method: 'get',
		params
	})
}

export const register = (data, header) => {
	return request({
		url: '/v1/user/register',
		method: 'post',
		data,
		header,
	})
}

export const captcha = data => {
	return request({
		url: '/v1/user/captcha',
		method: 'post',
		data,
	})
}

export const login = (data, header) => {
	return request({
		url: '/v1/user/login',
		method: 'post',
		data,
		header,
	})
}

export const getInformation = (params) => {
	return request({
		url: '/v1/user/information',
		method: 'get',
		params,
	})
}

export const getBalance = () => {
	return request({
		url: '/v1/user/balance',
		method: 'get',
	})
}

export const changePwd = (data, ) => {
	return request({
		url: '/v1/user/change_password',
		method: 'put',
		data,
	})
}


export const feedback = (data, ) => {
		return request({
			url: '/v1/feedback',
			method: 'post',
			data,
		})
}

export const addAccount = (data, ) => {
		return request({
			url: '/v1/deposit/binding',
			method: 'post',
			data,
		})
}

export const getAccount = () => {
		return request({
			url: '/v1/deposit/address',
			method: 'get',
		})
}
