import binary from 'binary';
import pako from 'pako';
import store from "@/store/index.js"

function webSocket() {
	return {
		ws: null,
		msgs: [],
		opened: false,
		lastTimes: {},
		data: [],
		uri: null,
		init(uri) {
			this.uri = 'wss://l10n-pro.heco-scan.com/-/s/pro/ws';
			return this
		},
		connect() {
			this.opened = false
			let $this = this
			this.ws = uni.connectSocket({
				url: this.uri,
				success: (e) => {
					console.log('hello', e)
				},
				fail: (e) => {
					console.log('error', e)
				},
			})
			uni.onSocketOpen((e) => {
				$this.onopen(e)
			})
			uni.onSocketError((e) => {
				$this.onerror(e)
			})
			uni.onSocketMessage((e) => {
				$this.onmessage(e)
				// onMessage(e)
			})
			this.ws.onclose = this.oncloser
		},
		onopen(e) {
			this.opened = true
			for (var m of this.msgs) {
				this.send(m)
			}
			this.msgs = []
		},
		onmessage: function(e) {
			let ae = JSON.parse(utf8ArrayToString(pako.ungzip(e.data)));
			
			if (ae.ping) {
				this.send(JSON.stringify({pong: ae.ping}));
			}
			if (this.data[ae.ch]) {
				if (ae.ch === 'market.overview') {
					this.data[ae.ch](ae.data)
				} else {
					this.data[ae.ch](ae.tick);
				}
				
			}
			function utf8ArrayToString(array) { // 数据流转化为字符串, 兼容汉字
				var out = "",
					i = 0,
					len = array.length,
					char1, char2, char3, char4;
				while (i < len) {
					char1 = array[i++];
					if (char1 >> 4 <= 7) {
						out += String.fromCharCode(char1);
					} else if (char1 >> 4 == 12 || char1 >> 4 == 13) {
						char2 = array[i++];
						out += String.fromCharCode(((char1 & 0x1F) << 6) | (char2 & 0x3F));
					} else if (char1 >> 4 == 14) {
						char2 = array[i++];
						char3 = array[i++];
						char4 = ((char1 & 0x0F) << 12) | ((char2 & 0x3F) << 6);
						out += String.fromCharCode(char4 | ((char3 & 0x3F) << 0));
					}
				}
				return out;
			}

		},
		dispatch(data) {

		},
		onclose(e) {
			console.log('close', e.toString())
		},
		onerror(e) {
			console.log('error', e)
		},
		subscribeSymbols() {
			let data = new Array()
			if (this.symbols != null)
				data = Array.from(this.symbols)
			if (data.length > 0) {
				this.subscribe(data)
			}
		},

		// 订阅数据
		subscribe(data, callback) {
			this.send(JSON.stringify(data));
			this.data[data.sub] = callback;
		},
		send(data) {
			if (this.opened) {
				var that = this
				this.ws.send({
					data: data,
					fail(e) {
						that.msgs.push(data)
						that.connect()
					}
				})
			} else {
				this.msgs.push(data)
			}
		},
		clearSubscribe() {
			this.symbols = null
		},
		clearContract() {
			this.contractList = []
		},
		addToSubscribe(symbol) {
			if (this.symbols === null) {
				this.symbols = new Set()
			}
			this.symbols.add(symbol)
		},
		
	}
}
export default webSocket();
