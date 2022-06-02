'use strict';
/**
 * @param {!Object} indata
 * @return {undefined}
 */
function z(indata) {
  var asks = indata.asks;
  var resolvedSourceMapConfigs = void 0 === asks ? [] : asks;
  var bids = indata.bids;
  var groupedMessages = void 0 === bids ? [] : bids;
  /**
   * @param {!Object} fn
   * @return {?}
   */
  var c = function(fn) {
    return {
      price : (0, s.cutFixed)(fn[0], j),
      amount : (0, s.shortIndex)(fn[1], I, 1e3),
      width : (fn[1] / _ * 100).toFixed()
    };
  };
  var n = resolvedSourceMapConfigs.map(function(canCreateDiscussions) {
    return canCreateDiscussions[1];
  }).sort(function(b, a) {
    return a - b;
  })[0] || 0;
  var level = groupedMessages.map(function(canCreateDiscussions) {
    return canCreateDiscussions[1];
  }).sort(function(b, a) {
    return a - b;
  })[0] || 0;
  /** @type {number} */
  _ = Math.max(n, level);
  var out = resolvedSourceMapConfigs.map(function(e) {
    return c(e);
  }).reverse();
  var self = groupedMessages.map(function(e) {
    return c(e);
  });
  /** @type {number} */
  var u = 5 - resolvedSourceMapConfigs.length;
  /** @type {number} */
  var f = 5 - groupedMessages.length;
  for (; u-- > 0;) {
    out.unshift({
      price : "--",
      amount : "--",
      width : 0
    });
  }
  for (; f-- > 0;) {
    self.push({
      price : "--",
      amount : "--",
      width : 0
    });
  }
  (0, s.$)("#handicap-sell").dom.innerHTML = (0, s.tmpl)((0, s.$)("#handicap-sell").script, {
    asksList : out
  });
  (0, s.$)("#handicap-buy").dom.innerHTML = (0, s.tmpl)((0, s.$)("#handicap-buy").script, {
    bidsList : self
  });
  m.default.emit("presetPrice.handicap", {
    asksList : out,
    bidsList : self
  });
}
;