import request from './request.js';
import config from '../config/index.js';

export const getBanner = () => {
	return request({
		url: `${config.url}/x/hbg/v1/app-web-api/banner/list`,
		method: 'get',
		data: {
			channel_name: 'huobi',
			type: 52,
			lang: 'en-US',
			version: 691,
			userAgent:'M:huobiapp:phone:android',
		}
	})
}

export const getRankingList = () => {
	return request({
		url: `${config.url}/-/x/hbg/v1/app/new/rankingList`,
		method: 'get',
	})
}
export const getTopSymbolPrice = () => {
	return request({
		url: `${config.url}/-/x/hbg/v1/app/topSymbolPrice`,
		method: 'get',
	})
}

export const getHomePageInfo = (data) => {
	return request({
		url: `${config.url}/-/x/hbg/v1/spot/homepage/info`,
		method: 'get',
		data,
	})
}
export const getAppFeaturesModule = (data) => {
	return request({
		url: `${config.url}/-/x/hb/p/api/appFeatures/module/8`,
		method: 'get',
		data,
	})
}