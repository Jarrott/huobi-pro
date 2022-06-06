import request from './request.js';
import config from '../config/index.js';

export const getMarketTrade = (data) => {
	return request({
		url: `${config.open}/market/trade`,
		method: 'get',
		data,
	})
}
export const getMarketHistoryTrade = (data) => {
	return request({
		url: `${config.open}/market/history/trade`,
		method: 'get',
		data,
	})
}

export const getSummaryHistory = (data) => {
	return request({
		url: `${config.url}/-/x/qs/summary/history`,
		method: 'get',
		data,
	})
}
export const getSummaryLatest = (data) => {
	return request({
		url: `${config.url}/-/x/qs/summary/latest`,
		method: 'get',
		data,
	})
}
export const getIntroductionDetail= (data) => {
	return request({
		url: `${config.url}/-/x/hbg/v1/important/currency/introduction/detail`,
		method: 'get',
		data,
	})
}
