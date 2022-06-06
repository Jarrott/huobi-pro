import request from './request.js';
import config from '../config/index.js';

export const getCommonSymbls = (data) => {
	return request({
		url: `${config.url}/-/x/pro/v2/beta/common/symbols`,
		method: 'get',
		data,
	})
}

export const getGriddingSymbols = (data) => {
	return request({
		url: `${config.url}/-/x/hbg/v1/quantization/gridding/symbols`,
		method: 'get',
		data,
	})
}
