import request from './request.js';
import config from '../config/index.js';

export const getHistoryKline = (data) => {
	return request({
		url: `${config.open}/market/history/kline`,
		method: 'get',
		data,
	})
}

export const getMarketDepth = (data) => {
	return request({
		url: `${config.open}/market/depth`,
		method: 'get',
		data,
	})
}
