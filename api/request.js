import config from '../config/index.js';


const request = (options) => {
	//判断是都携带参数
	if(!options.data){
		options.data = {};
	}
	if  (options.header) {
		options.header = {
			...options.header,
			'countryType': 1,
			'Accept-Language':'zh-CN',
			// 'appType':1,
			// 'Content-Type':'application/json;charset=UTF-8',
			// 'HB-API-VERSION':1.7,
			// 'HB-KYC-TOKEN': 1,
			// 'Huobi-App-Client': 2,
			// 'Huobi-App-Version': '6.9.1',
			// 'Huobi-App-Version-Code': 691,
			// 'appVersion': 691,
			// 'User-Agent':'okhttp/3.8.0',			
			// 'Huobi-TimeZone': 'GMT+08:00',
			// terminalId: 1,
			// vop: 1,
			// 'DEVICE-V-TOKEN': '767ee99e-3bfa-4f71-a129-76e6794b6636',
			// 'Huobi-App-Channel': '11113900',
			// 'HB-COUNTRY-ID': 37,
			// 'x-b3-traceid': 'ba797ae8ae8cf6821a0831703aaa40d8'
		}
	} else  {
		options.header= {
			// 'sec-fetch-dest': 'empty',
			// 'sec-fetch-mode': 'cors',
			// 'sec-fetch-site': 'cross-site',
			// 'access-control-allow-credentials': true,
			// 'access-control-allow-origin':'http://localhost:8089',
			// 'countryType': 1,
		
		}
		// options.header= {
		// 	'countryType': 1,
		// 	'Accept-Language':'zh-CN',
		// 	'HB-API-VERSION': 1.7,
		// 	'HB-KYC-TOKEN': 1,
		// 	'Huobi-App-Client': 2,
		// 	'Huobi-App-Version': '6.9.1',
		// 	'Huobi-App-Version-Code': 691,
		// 	'appVersion': 691,		
		// 	'Huobi-TimeZone': 'GMT+08:00',
		// 	vop: 1,
		// 	'DEVICE-V-TOKEN': '767ee99e-3bfa-4f71-a129-76e6794b6636',
		// 	'Huobi-App-Channel': '11113900',
		// 	'HB-COUNTRY-ID': 37,
		// 	'x-b3-traceid': 'ba797ae8ae8cf6821a0831703aaa40d8'
			
		// }
	}
	let promise = new Promise(function(resolve, reject) {
		uni.request(options).then(response => {
			// 异常
			if (response[0]) {
				reject({message : "网络超时"});
			} else {
				if (response[1]) {
					if (response[1].statusCode !== 200 ) {
						if (response[1].statusCode === 422 || response[1].statusCode === 401) {
							uni.navigateTo({
								url: "/pages/my/login"
							})
						}
					}
				}
				response = response[1].data; // 如果返回的结果是data.data的，嫌麻烦可以用这个，return res,这样只返回一个data
				resolve(response);
			}
		}).catch(error => {
			reject(error);
		})
	})
	return promise;
};

export default request;