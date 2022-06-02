'use strict';
/**
 * @param {?} s
 * @param {!Object} e
 * @param {?} b
 * @return {undefined}
 */
function a(s, e, b) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function $(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function add(data) {
    return parseInt([~~!!data.unsub, ~~!!data.sub, ~~!!data.req].join(""), 2);
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function format(data) {
    return m[add(data)] + "." + (data.req || data.sub || data.unsub);
  }
  /**
   * @param {!Blob} file
   * @return {?}
   */
  function load(file) {
    /** @type {!FileReader} */
    var reader = new FileReader;
    return new f.default(function(callback) {
      if (w) {
        reader.addEventListener("loadend", function() {
          /** @type {string} */
          var out = "";
          /** @type {!Uint8Array} */
          var view = new Uint8Array(reader.result);
          /** @type {number} */
          var viewLength = view.byteLength;
          /** @type {number} */
          var i = 0;
          for (; i < viewLength; i++) {
            /** @type {string} */
            out = out + String.fromCharCode(view[i]);
          }
          return callback(out);
        });
        reader.readAsArrayBuffer(file);
      } else {
        reader.addEventListener("loadend", function() {
          return callback(reader.result);
        });
        try {
          reader.readAsBinaryString(file);
        } catch (t) {
          /** @type {boolean} */
          w = true;
        }
      }
    });
  }
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  e.socketAPI = e.operator = e.SocketAPI = e.Operator = void 0;
  var ret = $(b("bOdI"));
  var o = $(b("Dd8w"));
  var _isSupported2 = $(b("fZjL"));
  var node = $(b("Xxa5"));
  var _deepAssign2 = $(b("exGp"));
  u = $(b("mvHQ"));
  c = $(b("Zrlr"));
  l = $(b("wxAW"));
  f = $(b("//Fk"));
  d = $(b("/erf"));
  console.log(ret);
  /** @type {boolean} */
  var target = "undefined" == typeof window;
  var callback = !target && localStorage.debug && console.info || function() {
  };
  /** @type {!Array} */
  var m = [void 0, "req", "sub", void 0, "unsub"];
  var WAIT_TYPES = {
    req : "rep",
    sub : "ch",
    unsub : "unsubbed"
  };
  /** @type {null} */
  var _takingTooLongTimeout = null;
  /** @type {boolean} */
  var w = false;
  var jsDAV_Ftp_Directory = function() {
    /**
     * @param {string} callback
     * @param {!Function} debug
     * @return {undefined}
     */
    function set(callback, debug) {
      (0, c.default)(this, set);
      this._msgList = {};
      this._callback = {};
      this.__msg = {};
      this.__cb = {};
      /** @type {number} */
      this._isOpen = 0;
      this._msgCallback = this._msgCallback.bind(this);
      /** @type {!Function} */
      this.debug = debug;
      /** @type {string} */
      this.host = callback;
      /** @type {number} */
      this.t = -1;
      /** @type {null} */
      this.ws = null;
      this._reconnect(callback);
    }
    return (0, l.default)(set, [{
      key : "_open",
      value : function() {
        /** @type {number} */
        this._isOpen = 1;
        this._msgOut();
        callback("socket open");
      }
    }, {
      key : "_reconnect",
      value : function() {
        var host = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host;
        /** @type {!WebSocket} */
        this.ws = new WebSocket(host);
        this.t = this.t + 1;
        callback("socket reconnect");
        this._regEvent(this.ws);
      }
    }, {
      key : "_error",
      value : function(err) {
        return callback("socket error", err), console.error("error: ", err);
      }
    }, {
      key : "_delMsg",
      value : function(timeout, p, f) {
        if (1 === timeout) {
          return delete this._msgList[p];
        }
        if (4 === timeout) {
          delete this._msgList[p];
          delete this._msgList["sub." + f];
        }
      }
    }, {
      key : "_regEvent",
      value : function() {
        var self = this;
        /**
         * @param {?} xhr
         * @return {?}
         */
        this.ws.onerror = function(xhr) {
          return self._error(xhr);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        this.ws.onmessage = function(event) {
          return self._decodeMessage(event);
        };
        /**
         * @return {?}
         */
        this.ws.onopen = function() {
          return self._open();
        };
        /**
         * @return {undefined}
         */
        this.ws.onclose = function() {
          callback("regEvent ", self.t);
          if (window.navigator.onLine && window.gio) {
            window.gio("track", "DEV_FED_EXCHANGE_EN_WS_CLOSE", {
              DEV_FED_TIMESTAMP : +new Date,
              URL : location.href
            });
          }
          setTimeout(function() {
            return self._reconnect();
          }, 2 * self.t * 1e3);
          if (10 === self.t) {
            /** @type {number} */
            self.t = 0;
          }
        };
      }
    }, {
      key : "_heartbeat",
      value : function(data) {
        var _bot = this;
        clearTimeout(_takingTooLongTimeout);
        /** @type {number} */
        _takingTooLongTimeout = setTimeout(function() {
          callback("websocket timeout");
          _bot.ws.close();
        }, 1e4);
        if (this._isOpen) {
          this.ws.send((0, u.default)({
            pong : data
          }));
        }
      }
    }, {
      key : "_msgOut",
      value : function() {
        var project;
        for (project in this._msgList) {
          if (this._msgList[project]) {
            this.ws.send(this._msgList[project]);
          }
        }
      }
    }, {
      key : "_msgDriver",
      value : function(name, fn) {
        var key = m[add(name)];
        var template = name[key];
        this._callback[WAIT_TYPES[key]] = this._callback[WAIT_TYPES[key]] || {};
        this._callback[WAIT_TYPES[key]][template] = fn;
      }
    }, {
      key : "_msgCallback",
      value : function(obj, callback) {
        /** @type {number} */
        var ty = parseInt([~~!!obj.unsubbed, ~~!!obj.subbed || ~~!!obj.ch, ~~!!obj.rep].join(""), 2);
        /** @type {string} */
        var $currentLocationWithoutHash = m[ty] + "." + (obj.rep || obj.subbed || obj.ch || obj.unsubbed);
        if (this.__cb[$currentLocationWithoutHash]) {
          var i = this.__cb[$currentLocationWithoutHash].length;
          for (; i--;) {
            this.__cb[$currentLocationWithoutHash][i](obj);
          }
        }
        if (1 === ty) {
          this.__cb[$currentLocationWithoutHash] = void 0;
        }
        if (obj.subbed) {
          /** @type {number} */
          this.__msg[$currentLocationWithoutHash] = 1;
          if ("function" == typeof callback) {
            callback(1);
          }
        }
      }
    }, {
      key : "_msg",
      value : function(e, f) {
        var index = format(e);
        this._msgList[index] = (0, u.default)(e);
        if (this._isOpen && this._msgList[index]) {
          this.ws.send(this._msgList[index]);
        }
        if (f) {
          this._msgDriver(e, f);
        }
      }
    }, {
      key : "_decodeMessage",
      value : function() {
        var oldSetupComputes = (0, _deepAssign2.default)(node.default.mark(function start(res) {
          var result;
          var sitemap;
          return node.default.wrap(function(_context) {
            for (;;) {
              switch(_context.prev = _context.next) {
                case 0:
                  if (!this._isOpen) {
                    /** @type {number} */
                    this._isOpen = 1;
                  }
                  /** @type {number} */
                  _context.next = 4;
                  break;
                case 4:
                  return _context.next = 6, load(res.data);
                case 6:
                  result = _context.sent;
                  sitemap = d.default.inflate(result, {
                    to : "string"
                  });
                  this._dispatchMessage(JSON.parse(sitemap));
                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, start, this);
        }));
        return function(canCreateDiscussions) {
          return oldSetupComputes.apply(this, arguments);
        };
      }()
    }, {
      key : "_dispatchMessage",
      value : function(data) {
        /** @type {string} */
        var j = data.rep ? "rep" : data.unsubbed ? "unsubbed" : "ch";
        var i = data.rep || data.unsubbed || data.subbed || data.ch || data.ping;
        var getHeightValue = this._callback[j] ? this._callback[j][i] : null;
        if (callback("message: ", data), "function" == typeof this.ws.onmsg && this.ws.onmsg(data), "error" !== data.status) {
          return data.ping ? this._heartbeat(data.ping) : getHeightValue ? ("unsubbed" === j ? (delete this._callback.ch[i], delete this._callback[j][i], this._delMsg(4, "unsub." + i, i)) : "rep" === j && (delete this._callback[j][i], this._delMsg(1, "req." + i, i)), getHeightValue(data, j, i)) : void 0;
        }
      }
    }, {
      key : "plugin",
      value : function(message, instance) {
        /** @type {number} */
        var default_favicon = +new Date + ~~(1e5 * Math.random());
        var msg = format(message);
        if (!this.__cb[msg]) {
          /** @type {!Array} */
          this.__cb[msg] = [];
          /** @type {number} */
          this.__msg[msg] = 0;
        }
        this.__cb[msg].push(instance);
        /** @type {string} */
        instance.alias = "fn_" + default_favicon.toString(default_favicon % 16 + 20);
        instance.msg = msg;
        instance.bodywords = instance.toString().replace(/[^\d\w]/g, "");
        if (!this.__msg[msg]) {
          this._msg(message, this._msgCallback);
        }
      }
    }, {
      key : "unplug",
      value : function(name, user, n) {
        var $rootScope = this;
        var t = add(name);
        var str = format(name);
        var link = str.replace(/^unsub/, "sub");
        var message = {
          unsub : str.replace(/^sub/, "unsub").replace("unsub.", "")
        };
        var list = this.__cb[link];
        if ("req" !== m[t] && list) {
          var j = list.length;
          for (; j--;) {
            if (user.alias && list[j].alias === user.alias) {
              list.splice(j, 1);
              if (n) {
                n(0);
              }
              break;
            }
            if (!user.alias && list[j].bodywords === user.toString().replace(/[^\d\w]/g, "")) {
              if (!user.name) {
                console.warn("Anonymous function remove error", user);
              }
              list.splice(j, 1);
              if (n) {
                n(0);
              }
              break;
            }
          }
          if (!list.length) {
            this.__cb[str] = void 0;
            this._msg(message, function(mmCoreSplitViewBlock) {
              return $rootScope._msgCallback(mmCoreSplitViewBlock, n);
            });
          }
        }
      }
    }]), set;
  }();
  var Error = e.Operator = function() {
    /**
     * @param {?} e
     * @return {?}
     */
    function set(e) {
      var debug = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return (0, c.default)(this, set), this._router = {}, this.debug = debug, callback("wsc version 2.0.0"), load(new Blob([new ArrayBuffer(1)], {
        type : ""
      })), e && this.handsup(e);
    }
    return (0, l.default)(set, [{
      key : "handsup",
      value : function(path) {
        if (path) {
          return this._router[path] ? this._router[path] : this._router[path] = new jsDAV_Ftp_Directory(path, this.debug);
        }
      }
    }]), set;
  }();
  var Buffer = e.SocketAPI = function() {
    /**
     * @return {?}
     */
    function parse() {
      var notes = this;
      var self = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (0, c.default)(this, parse);
      var value = self.symbol;
      var input = void 0 === value ? "btcusdt" : value;
      var key = self.period;
      var primary_key = void 0 === key ? "1min" : key;
      var step = self.step;
      var noop = void 0 === step ? "step0" : step;
      var path = self.id;
      var id = void 0 === path ? 0 : path;
      return this._channel = {
        overview : function() {
          return "market.overview";
        },
        symbols : function() {
          return "market.symbols";
        },
        tickers : function() {
          return "market.tickers";
        },
        kline : function() {
          var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return "market." + (options.symbol || input) + ".kline." + (options.period || primary_key);
        },
        trade : function() {
          return "market." + ((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).symbol || input) + ".trade.detail";
        },
        depth : function() {
          var opts = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return "market." + (opts.symbol || input) + ".depth." + (opts.step || noop);
        },
        ticker : function() {
          return "market." + ((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).symbol || input) + ".detail";
        },
        tickerById : function() {
          var attrs = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return "market." + (attrs.id || id) + ".exdetail." + (attrs.symbol || input);
        }
      }, this._apis = (0, _isSupported2.default)(this._channel), function() {
        return notes;
      };
    }
    return (0, l.default)(parse, [{
      key : "_factory",
      value : function(saveEvenIfSeemsUnchanged) {
        var slave = this;
        var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this._apis.reduce(function(sks, id) {
          return sks[id] = function() {
            return (0, o.default)((0, ret.default)({}, saveEvenIfSeemsUnchanged, slave._channel[id](data)), data);
          }, sks;
        }, {});
      }
    }, {
      key : "req",
      value : function() {
        var artistTrack = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this._factory("req", artistTrack);
      }
    }, {
      key : "sub",
      value : function() {
        var artistTrack = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this._factory("sub", artistTrack);
      }
    }, {
      key : "unsub",
      value : function() {
        var artistTrack = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this._factory("unsub", artistTrack);
      }
    }]), parse;
  }();
  var op = void 0;
  !function(params) {
    if (!target) {
      e.operator = op = params.operator || new Error;
    }
  }({});
  var currentHref = void 0;
  !function(f) {
    e.socketAPI = currentHref = f.socketAPI || new Buffer;
  }({});
  e.operator = op;
  e.socketAPI = currentHref;
}
;