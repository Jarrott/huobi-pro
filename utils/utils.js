
export const getPrision = (value)=>{
	let bits = value.toString().split('.');
	if(bits.length===1) return 0
	return bits[1].length
}

export const Throttle = (fn,wait) => {
    var timer = null;
    return function(){
        var context = this;
        var args = arguments;
        if(!timer){
            timer = setTimeout(function(){
                fn.apply(context,args);
                timer = null;
            },wait)
        }
    }
}

export const computeDeposit = (multiplier, lever, position, price, futuresCode, futureType, exchangeRate, depositType) => {
	// futureType  数字货币	DIGICCY  外汇	FOREX  指数	SHARES  黄金	XAU  商品	OILFUT  美股	US_EQUITY  港股	HK_EQUITY  英股	UK_EQUITY  欧股	EU_EQUITY  澳股	AU_EQUITY  一篮子	BASKETS
	// multipier   没手数量
	// lever  杠杆
	//  position 手数
	// price  价格
	// futuresCode  关联的code
	//exchangeRate  关联汇率
	// deositType: deposit计算类型   0 非直盘 1 直盘（USD结尾） 2 cross 3 英镑 4 欧元 5 港币 6 USDT 7 JPY 8 AUD 9 CAD
	
	if (exchangeRate == null || exchangeRate == 0) exchangeRate = 1;
	let posit = 0
	switch (depositType) {
		case 0:
			posit = multiplier / lever * position
			break
		case 1:
			posit = price * multiplier / lever * position
			break
		case 2:
			//交叉货币
			if (futuresCode.endsWith("USD")) {
				//关联比对以USD结尾
				posit = price * multiplier / lever * position * exchangeRate
			} else {
				posit = price * multiplier / lever * position / exchangeRate
			}
			break
		case 3:
			//英镑
			posit = price * multiplier / lever * position * exchangeRate
			break
		case 4:
			//欧元
			posit = price * multiplier / lever * position * exchangeRate
			break
		case 5:
			//港币
			posit = price * multiplier / lever * position / exchangeRate
			break
		case 6:
			//USDT
			posit = price * multiplier / lever * position
			break
		case 7:
			//日元
			posit = price * multiplier / lever * position / exchangeRate
			break
		case 8:
			//澳元
			posit = price * multiplier / lever * position / exchangeRate
			break
		case 9:
			//加元
			posit = price * multiplier / lever * position / exchangeRate
			break
			
	}
	return posit
}

export const preComputeProfit = (overPrice, openPrice, multiplier, position, openSafe, futuresCode, futureType, exchangeRate, profitType) => {
	// futureType  数字货币	DIGICCY  外汇	FOREX  指数	SHARES  黄金	XAU  商品	OILFUT  美股	US_EQUITY  港股	HK_EQUITY  英股	UK_EQUITY  欧股	EU_EQUITY  澳股	AU_EQUITY  一篮子	BASKETS
	// multipier   没手数量
	//  position 手数
	// futuresCode  关联的code
	//exchangeRate  关联汇率
	//openSafe 0 多   1  空 
	// profitType: profit计算类型   0 非直盘 1 直盘（USD结尾） 2 cross 3 英镑 4 欧元 5 港币 6 USDT 7 JPY 8 AUD 9 CAD
	
	if (exchangeRate == null || exchangeRate == 0) exchangeRate = 1;
	
	//价差
	let sellClose = 0
	if (openSafe == 0) {
		sellClose = overPrice - openPrice
	} else {
		sellClose = openPrice - overPrice
	}
	//价差 * 合约规格 * 手数
	let profit = sellClose * multiplier * position
	switch (profitType) {
		case 0:
			if (overPrice == null || overPrice == 0) {
				profit = 0
				break
			} else {
				profit = profit / overPrice
			}
			break
		case 1:
			profit = profit
			break
		case 2:
			//交叉货币
			if(overPrice == null || overPrice == 0) {
				profit = 0
				break
			}
			profit = profit / overPrice
			if (futuresCode.endsWith("USD")) {
				//关联比对以USD结尾
				profit = profit  * exchangeRate
			} else {
				profit = profit  / exchangeRate
			}
			break
		case 3:
			//英镑
			profit = profit * exchangeRate
			break
		case 4:
			//欧元
			profit = profit * exchangeRate
			break
		case 5:
			//港币
			profit = profit  / exchangeRate
			break
		case 6:
			//USDT
			profit = profit
			break
		case 7:
			//日元
			profit = profit  / exchangeRate
			break
		case 8:
			//澳元
			profit = profit * exchangeRate
			break
		case 9:
			//加元
			profit = profit  / exchangeRate
			break
			
	}
	return profit
}

export const computeProfit = (overPrice, openPrice, multiplier, position, openSafe, futuresCode, futureType, exchangeRate, profitType, overNightFee, tradingFee) => {
	// futureType  数字货币	DIGICCY  外汇	FOREX  指数	SHARES  黄金	XAU  商品	OILFUT  美股	US_EQUITY  港股	HK_EQUITY  英股	UK_EQUITY  欧股	EU_EQUITY  澳股	AU_EQUITY  一篮子	BASKETS
	// multipier   没手数量
	//  position 手数
	// futuresCode  关联的code
	//exchangeRate  关联汇率
	//openSafe 0 多   1  空 
	// profitType: profit计算类型   0 非直盘 1 直盘（USD结尾） 2 cross 3 英镑 4 欧元 5 港币 6 USDT 7 JPY 8 AUD 9 CAD
	
	if (exchangeRate == null || exchangeRate == 0) exchangeRate = 1;
	
	//价差
	let sellClose = 0
	if (openSafe == 0) {
		sellClose = overPrice - openPrice
	} else {
		sellClose = openPrice - overPrice
	}
	//价差 * 合约规格 * 手数
	let profit = sellClose * multiplier * position
	switch (profitType) {
		case 0:
			if (overPrice == null || overPrice == 0) {
				profit = 0
				break
			} else {
				profit = profit / overPrice
			}
			break
		case 1:
			profit = profit
			break
		case 2:
			//交叉货币
			if(overPrice == null || overPrice == 0) {
				profit = 0
				break
			}
			profit = profit / overPrice
			if (futuresCode.endsWith("USD")) {
				//关联比对以USD结尾
				profit = profit  * exchangeRate
			} else {
				profit = profit  / exchangeRate
			}
			break
		case 3:
			//英镑
			profit = profit * exchangeRate
			break
		case 4:
			//欧元
			profit = profit * exchangeRate
			break
		case 5:
			//港币
			profit = profit  / exchangeRate
			break
		case 6:
			//USDT
			profit = profit
			break
		case 7:
			//日元
			profit = profit  / exchangeRate
			break
		case 8:
			//澳元
			profit = profit * exchangeRate
			break
		case 9:
			//加元
			profit = profit  / exchangeRate
			break
			
	}
	return profit - overNightFee - tradingFee
}