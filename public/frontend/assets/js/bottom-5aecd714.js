! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 3)
}([function(e, t, n) {
    "use strict";
    (function(e) {
        var n;

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }! function(t, n) {
            "object" === r(e) && "object" === r(e.exports) ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : void 0, function(i, o) {
            var a = [],
                s = i.document,
                u = a.slice,
                l = a.concat,
                c = a.push,
                d = a.indexOf,
                f = {},
                p = f.toString,
                h = f.hasOwnProperty,
                v = {},
                m = function e(t, n) {
                    return new e.fn.init(t, n)
                },
                g = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                y = /^-ms-/,
                x = /-([\da-z])/gi,
                b = function(e, t) {
                    return t.toUpperCase()
                };

            function w(e) {
                var t = !!e && "length" in e && e.length,
                    n = m.type(e);
                return "function" !== n && !m.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            m.fn = m.prototype = {
                jquery: "2.2.4",
                constructor: m,
                selector: "",
                length: 0,
                toArray: function() {
                    return u.call(this)
                },
                get: function(e) {
                    return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
                },
                pushStack: function(e) {
                    var t = m.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e) {
                    return m.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(m.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(u.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: c,
                sort: a.sort,
                splice: a.splice
            }, m.extend = m.fn.extend = function() {
                var e, t, n, i, o, a, s = arguments[0] || {},
                    u = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[u] || {}, u++), "object" === r(s) || m.isFunction(s) || (s = {}), u === l && (s = this, u--); u < l; u++)
                    if (null != (e = arguments[u]))
                        for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (m.isPlainObject(i) || (o = m.isArray(i))) ? (o ? (o = !1, a = n && m.isArray(n) ? n : []) : a = n && m.isPlainObject(n) ? n : {}, s[t] = m.extend(c, a, i)) : void 0 !== i && (s[t] = i));
                return s
            }, m.extend({
                expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === m.type(e)
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    var t = e && e.toString();
                    return !m.isArray(e) && t - parseFloat(t) + 1 >= 0
                },
                isPlainObject: function(e) {
                    var t;
                    if ("object" !== m.type(e) || e.nodeType || m.isWindow(e)) return !1;
                    if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
                    for (t in e);
                    return void 0 === t || h.call(e, t)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" === r(e) || "function" == typeof e ? f[p.call(e)] || "object" : r(e)
                },
                globalEval: function(e) {
                    var t, n = eval;
                    (e = m.trim(e)) && (1 === e.indexOf("use strict") ? ((t = s.createElement("script")).text = e, s.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                },
                camelCase: function(e) {
                    return e.replace(y, "ms-").replace(x, b)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (w(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break; return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(g, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (w(Object(e)) ? m.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : d.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                    return r
                },
                map: function(e, t, n) {
                    var r, i, o = 0,
                        a = [];
                    if (w(e))
                        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                    else
                        for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                    return l.apply([], a)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), m.isFunction(e)) return r = u.call(arguments, 2), i = function() {
                        return e.apply(t || this, r.concat(u.call(arguments)))
                    }, i.guid = e.guid = e.guid || m.guid++, i
                },
                now: Date.now,
                support: v
            }), "function" == typeof Symbol && (m.fn[Symbol.iterator] = a[Symbol.iterator]), m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                f["[object " + t + "]"] = t.toLowerCase()
            });
            var T = function(e) {
                var t, n, r, i, o, a, s, u, l, c, d, f, p, h, v, m, g, y, x, b = "sizzle" + 1 * new Date,
                    w = e.document,
                    T = 0,
                    C = 0,
                    k = oe(),
                    S = oe(),
                    j = oe(),
                    _ = function(e, t) {
                        return e === t && (d = !0), 0
                    },
                    E = 1 << 31,
                    N = {}.hasOwnProperty,
                    A = [],
                    D = A.pop,
                    L = A.push,
                    q = A.push,
                    P = A.slice,
                    O = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    M = "[\\x20\\t\\r\\n\\f]",
                    F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    R = "\\[" + M + "*(" + F + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + M + "*\\]",
                    W = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                    I = new RegExp(M + "+", "g"),
                    $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                    B = new RegExp("^" + M + "*," + M + "*"),
                    z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                    X = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
                    U = new RegExp(W),
                    V = new RegExp("^" + F + "$"),
                    G = {
                        ID: new RegExp("^#(" + F + ")"),
                        CLASS: new RegExp("^\\.(" + F + ")"),
                        TAG: new RegExp("^(" + F + "|[*])"),
                        ATTR: new RegExp("^" + R),
                        PSEUDO: new RegExp("^" + W),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + H + ")$", "i"),
                        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Y = /^(?:input|select|textarea|button)$/i,
                    Q = /^h\d$/i,
                    J = /^[^{]+\{\s*\[native \w/,
                    K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    Z = /[+~]/,
                    ee = /'|\\/g,
                    te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                    ne = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    re = function() {
                        f()
                    };
                try {
                    q.apply(A = P.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
                } catch (e) {
                    q = {
                        apply: A.length ? function(e, t) {
                            L.apply(e, P.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function ie(e, t, r, i) {
                    var o, s, l, c, d, h, g, y, T = t && t.ownerDocument,
                        C = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return r;
                    if (!i && ((t ? t.ownerDocument || t : w) !== p && f(t), t = t || p, v)) {
                        if (11 !== C && (h = K.exec(e)))
                            if (o = h[1]) {
                                if (9 === C) {
                                    if (!(l = t.getElementById(o))) return r;
                                    if (l.id === o) return r.push(l), r
                                } else if (T && (l = T.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                            } else {
                                if (h[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                                if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(r, t.getElementsByClassName(o)), r
                            }
                        if (n.qsa && !j[e + " "] && (!m || !m.test(e))) {
                            if (1 !== C) T = t, y = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((c = t.getAttribute("id")) ? c = c.replace(ee, "\\$&") : t.setAttribute("id", c = b), s = (g = a(e)).length, d = V.test(c) ? "#" + c : "[id='" + c + "']"; s--;) g[s] = d + " " + ve(g[s]);
                                y = g.join(","), T = Z.test(e) && pe(t.parentNode) || t
                            }
                            if (y) try {
                                return q.apply(r, T.querySelectorAll(y)), r
                            } catch (e) {} finally {
                                c === b && t.removeAttribute("id")
                            }
                        }
                    }
                    return u(e.replace($, "$1"), t, r, i)
                }

                function oe() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                }

                function ae(e) {
                    return e[b] = !0, e
                }

                function se(e) {
                    var t = p.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function ue(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                }

                function le(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || E) - (~e.sourceIndex || E);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function ce(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function de(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function fe(e) {
                    return ae(function(t) {
                        return t = +t, ae(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function pe(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = ie.support = {}, o = ie.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, f = ie.setDocument = function(e) {
                        var t, i, a = e ? e.ownerDocument || e : w;
                        return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, v = !o(p), (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = se(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), n.getElementsByTagName = se(function(e) {
                            return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                        }), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = se(function(e) {
                            return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
                        }), n.getById ? (r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && v) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }, r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }) : (delete r.find.ID, r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, r = [],
                                i = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e)
                        }, g = [], m = [], (n.qsa = J.test(p.querySelectorAll)) && (se(function(e) {
                            h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                        }), se(function(e) {
                            var t = p.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                        })), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se(function(e) {
                            n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", W)
                        }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = J.test(h.compareDocumentPosition), x = t || J.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, _ = t ? function(e, t) {
                            if (e === t) return d = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && x(w, e) ? -1 : t === p || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return d = !0, 0;
                            var n, r = 0,
                                i = e.parentNode,
                                o = t.parentNode,
                                a = [e],
                                s = [t];
                            if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                            if (i === o) return le(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; a[r] === s[r];) r++;
                            return r ? le(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                        }, p) : p
                    }, ie.matches = function(e, t) {
                        return ie(e, null, null, t)
                    }, ie.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== p && f(e), t = t.replace(X, "='$1']"), n.matchesSelector && v && !j[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t))) try {
                            var r = y.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {}
                        return ie(t, p, null, [e]).length > 0
                    }, ie.contains = function(e, t) {
                        return (e.ownerDocument || e) !== p && f(e), x(e, t)
                    }, ie.attr = function(e, t) {
                        (e.ownerDocument || e) !== p && f(e);
                        var i = r.attrHandle[t.toLowerCase()],
                            o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
                        return void 0 !== o ? o : n.attributes || !v ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }, ie.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ie.uniqueSort = function(e) {
                        var t, r = [],
                            i = 0,
                            o = 0;
                        if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(_), d) {
                            for (; t = e[o++];) t === e[o] && (i = r.push(o));
                            for (; i--;) e.splice(r[i], 1)
                        }
                        return c = null, e
                    }, i = ie.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += i(t);
                        return n
                    }, (r = ie.selectors = {
                        cacheLength: 50,
                        createPseudo: ae,
                        match: G,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = k[e + " "];
                                return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && k(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var i = ie.attr(r, e);
                                    return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === i ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, u) {
                                    var l, c, d, f, p, h, v = o !== a ? "nextSibling" : "previousSibling",
                                        m = t.parentNode,
                                        g = s && t.nodeName.toLowerCase(),
                                        y = !u && !s,
                                        x = !1;
                                    if (m) {
                                        if (o) {
                                            for (; v;) {
                                                for (f = t; f = f[v];)
                                                    if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                                h = v = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                            for (x = (p = (l = (c = (d = (f = m)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], f = p && m.childNodes[p]; f = ++p && f && f[v] || (x = p = 0) || h.pop();)
                                                if (1 === f.nodeType && ++x && f === t) {
                                                    c[e] = [T, p, x];
                                                    break
                                                }
                                        } else if (y && (x = p = (l = (c = (d = (f = t)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                            for (;
                                                (f = ++p && f && f[v] || (x = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++x || (y && ((c = (d = f[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [T, x]), f !== t)););
                                        return (x -= i) === r || x % r == 0 && x / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                                return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                                    for (var r, o = i(e, t), a = o.length; a--;) e[r = O(e, o[a])] = !(n[r] = o[a])
                                }) : function(e) {
                                    return i(e, 0, n)
                                }) : i
                            }
                        },
                        pseudos: {
                            not: ae(function(e) {
                                var t = [],
                                    n = [],
                                    r = s(e.replace($, "$1"));
                                return r[b] ? ae(function(e, t, n, i) {
                                    for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                }) : function(e, i, o) {
                                    return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: ae(function(e) {
                                return function(t) {
                                    return ie(e, t).length > 0
                                }
                            }),
                            contains: ae(function(e) {
                                return e = e.replace(te, ne),
                                    function(t) {
                                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                                    }
                            }),
                            lang: ae(function(e) {
                                return V.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function(e) {
                                return !1 === e.disabled
                            },
                            disabled: function(e) {
                                return !0 === e.disabled
                            },
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Q.test(e.nodeName)
                            },
                            input: function(e) {
                                return Y.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: fe(function() {
                                return [0]
                            }),
                            last: fe(function(e, t) {
                                return [t - 1]
                            }),
                            eq: fe(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: fe(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: fe(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: fe(function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                                return e
                            }),
                            gt: fe(function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            })
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = ce(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = de(t);

                function he() {}

                function ve(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function me(e, t, n) {
                    var r = t.dir,
                        i = n && "parentNode" === r,
                        o = C++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) return e(t, n, o)
                    } : function(t, n, a) {
                        var s, u, l, c = [T, o];
                        if (a) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || i) {
                                    if ((s = (u = (l = t[b] || (t[b] = {}))[t.uniqueID] || (l[t.uniqueID] = {}))[r]) && s[0] === T && s[1] === o) return c[2] = s[2];
                                    if (u[r] = c, c[2] = e(t, n, a)) return !0
                                }
                    }
                }

                function ge(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function ye(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                    return a
                }

                function xe(e, t, n, r, i, o) {
                    return r && !r[b] && (r = xe(r)), i && !i[b] && (i = xe(i, o)), ae(function(o, a, s, u) {
                        var l, c, d, f = [],
                            p = [],
                            h = a.length,
                            v = o || function(e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) ie(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            m = !e || !o && t ? v : ye(v, f, e, s, u),
                            g = n ? i || (o ? e : h || r) ? [] : a : m;
                        if (n && n(m, g, s, u), r)
                            for (l = ye(g, p), r(l, [], s, u), c = l.length; c--;)(d = l[c]) && (g[p[c]] = !(m[p[c]] = d));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (l = [], c = g.length; c--;)(d = g[c]) && l.push(m[c] = d);
                                    i(null, g = [], l, u)
                                }
                                for (c = g.length; c--;)(d = g[c]) && (l = i ? O(o, d) : f[c]) > -1 && (o[l] = !(a[l] = d))
                            }
                        } else g = ye(g === a ? g.splice(h, g.length) : g), i ? i(null, a, g, u) : q.apply(a, g)
                    })
                }

                function be(e) {
                    for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                            return e === t
                        }, s, !0), d = me(function(e) {
                            return O(t, e) > -1
                        }, s, !0), f = [function(e, n, r) {
                            var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
                            return t = null, i
                        }]; u < o; u++)
                        if (n = r.relative[e[u].type]) f = [me(ge(f), n)];
                        else {
                            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                                return xe(u > 1 && ge(f), u > 1 && ve(e.slice(0, u - 1).concat({
                                    value: " " === e[u - 2].type ? "*" : ""
                                })).replace($, "$1"), n, u < i && be(e.slice(u, i)), i < o && be(e = e.slice(i)), i < o && ve(e))
                            }
                            f.push(n)
                        }
                    return ge(f)
                }
                return he.prototype = r.filters = r.pseudos, r.setFilters = new he, a = ie.tokenize = function(e, t) {
                    var n, i, o, a, s, u, l, c = S[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, u = [], l = r.preFilter; s;) {
                        for (a in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
                                value: n,
                                type: i[0].replace($, " ")
                            }), s = s.slice(n.length)), r.filter) !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? ie.error(e) : S(e, u).slice(0)
                }, s = ie.compile = function(e, t) {
                    var n, i = [],
                        o = [],
                        s = j[e + " "];
                    if (!s) {
                        for (t || (t = a(e)), n = t.length; n--;)(s = be(t[n]))[b] ? i.push(s) : o.push(s);
                        (s = j(e, function(e, t) {
                            var n = t.length > 0,
                                i = e.length > 0,
                                o = function(o, a, s, u, c) {
                                    var d, h, m, g = 0,
                                        y = "0",
                                        x = o && [],
                                        b = [],
                                        w = l,
                                        C = o || i && r.find.TAG("*", c),
                                        k = T += null == w ? 1 : Math.random() || .1,
                                        S = C.length;
                                    for (c && (l = a === p || a || c); y !== S && null != (d = C[y]); y++) {
                                        if (i && d) {
                                            for (h = 0, a || d.ownerDocument === p || (f(d), s = !v); m = e[h++];)
                                                if (m(d, a || p, s)) {
                                                    u.push(d);
                                                    break
                                                }
                                            c && (T = k)
                                        }
                                        n && ((d = !m && d) && g--, o && x.push(d))
                                    }
                                    if (g += y, n && y !== g) {
                                        for (h = 0; m = t[h++];) m(x, b, a, s);
                                        if (o) {
                                            if (g > 0)
                                                for (; y--;) x[y] || b[y] || (b[y] = D.call(u));
                                            b = ye(b)
                                        }
                                        q.apply(u, b), c && !o && b.length > 0 && g + t.length > 1 && ie.uniqueSort(u)
                                    }
                                    return c && (T = k, l = w), x
                                };
                            return n ? ae(o) : o
                        }(o, i))).selector = e
                    }
                    return s
                }, u = ie.select = function(e, t, i, o) {
                    var u, l, c, d, f, p = "function" == typeof e && e,
                        h = !o && a(e = p.selector || e);
                    if (i = i || [], 1 === h.length) {
                        if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && n.getById && 9 === t.nodeType && v && r.relative[l[1].type]) {
                            if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return i;
                            p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                        }
                        for (u = G.needsContext.test(e) ? 0 : l.length; u-- && (c = l[u], !r.relative[d = c.type]);)
                            if ((f = r.find[d]) && (o = f(c.matches[0].replace(te, ne), Z.test(l[0].type) && pe(t.parentNode) || t))) {
                                if (l.splice(u, 1), !(e = o.length && ve(l))) return q.apply(i, o), i;
                                break
                            }
                    }
                    return (p || s(e, h))(o, t, !v, i, !t || Z.test(e) && pe(t.parentNode) || t), i
                }, n.sortStable = b.split("").sort(_).join("") === b, n.detectDuplicates = !!d, f(), n.sortDetached = se(function(e) {
                    return 1 & e.compareDocumentPosition(p.createElement("div"))
                }), se(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || ue("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && se(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || ue("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), se(function(e) {
                    return null == e.getAttribute("disabled")
                }) || ue(H, function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), ie
            }(i);
            m.find = T, m.expr = T.selectors, m.expr[":"] = m.expr.pseudos, m.uniqueSort = m.unique = T.uniqueSort, m.text = T.getText, m.isXMLDoc = T.isXML, m.contains = T.contains;
            var C = function(e, t, n) {
                    for (var r = [], i = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && m(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                k = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                S = m.expr.match.needsContext,
                j = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                _ = /^.[^:#\[\.,]*$/;

            function E(e, t, n) {
                if (m.isFunction(t)) return m.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                });
                if (t.nodeType) return m.grep(e, function(e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (_.test(t)) return m.filter(t, e, n);
                    t = m.filter(t, e)
                }
                return m.grep(e, function(e) {
                    return d.call(t, e) > -1 !== n
                })
            }
            m.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? m.find.matchesSelector(r, e) ? [r] : [] : m.find.matches(e, m.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, m.fn.extend({
                find: function(e) {
                    var t, n = this.length,
                        r = [],
                        i = this;
                    if ("string" != typeof e) return this.pushStack(m(e).filter(function() {
                        for (t = 0; t < n; t++)
                            if (m.contains(i[t], this)) return !0
                    }));
                    for (t = 0; t < n; t++) m.find(e, i[t], r);
                    return (r = this.pushStack(n > 1 ? m.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
                },
                filter: function(e) {
                    return this.pushStack(E(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(E(this, e || [], !0))
                },
                is: function(e) {
                    return !!E(this, "string" == typeof e && S.test(e) ? m(e) : e || [], !1).length
                }
            });
            var N, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            (m.fn.init = function(e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || N, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : A.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof m ? t[0] : t, m.merge(this, m.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), j.test(r[1]) && m.isPlainObject(t))
                            for (r in t) m.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (i = s.getElementById(r[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = s, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : m.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(m) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), m.makeArray(e, this))
            }).prototype = m.fn, N = m(s);
            var D = /^(?:parents|prev(?:Until|All))/,
                L = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function q(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            m.fn.extend({
                has: function(e) {
                    var t = m(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (m.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    for (var n, r = 0, i = this.length, o = [], a = S.test(e) || "string" != typeof e ? m(e, t || this.context) : 0; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && m.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                    return this.pushStack(o.length > 1 ? m.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? d.call(m(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(m.uniqueSort(m.merge(this.get(), m(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), m.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return C(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return C(e, "parentNode", n)
                },
                next: function(e) {
                    return q(e, "nextSibling")
                },
                prev: function(e) {
                    return q(e, "previousSibling")
                },
                nextAll: function(e) {
                    return C(e, "nextSibling")
                },
                prevAll: function(e) {
                    return C(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return C(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return C(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return k((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return k(e.firstChild)
                },
                contents: function(e) {
                    return e.contentDocument || m.merge([], e.childNodes)
                }
            }, function(e, t) {
                m.fn[e] = function(n, r) {
                    var i = m.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = m.filter(r, i)), this.length > 1 && (L[e] || m.uniqueSort(i), D.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var P, O = /\S+/g;

            function H() {
                s.removeEventListener("DOMContentLoaded", H), i.removeEventListener("load", H), m.ready()
            }
            m.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return m.each(e.match(O) || [], function(e, n) {
                        t[n] = !0
                    }), t
                }(e) : m.extend({}, e);
                var t, n, r, i, o = [],
                    a = [],
                    s = -1,
                    u = function() {
                        for (i = e.once, r = t = !0; a.length; s = -1)
                            for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                        e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                    },
                    l = {
                        add: function() {
                            return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                m.each(n, function(n, r) {
                                    m.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== m.type(r) && t(r)
                                })
                            }(arguments), n && !t && u()), this
                        },
                        remove: function() {
                            return m.each(arguments, function(e, t) {
                                for (var n;
                                    (n = m.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                            }), this
                        },
                        has: function(e) {
                            return e ? m.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []), this
                        },
                        disable: function() {
                            return i = a = [], o = n = "", this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return i = a = [], n || (o = n = ""), this
                        },
                        locked: function() {
                            return !!i
                        },
                        fireWith: function(e, n) {
                            return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                        },
                        fire: function() {
                            return l.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                return l
            }, m.extend({
                Deferred: function(e) {
                    var t = [
                            ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", m.Callbacks("memory")]
                        ],
                        n = "pending",
                        r = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var e = arguments;
                                return m.Deferred(function(n) {
                                    m.each(t, function(t, o) {
                                        var a = m.isFunction(e[t]) && e[t];
                                        i[o[1]](function() {
                                            var e = a && a.apply(this, arguments);
                                            e && m.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? m.extend(e, r) : r
                            }
                        },
                        i = {};
                    return r.pipe = r.then, m.each(t, function(e, o) {
                        var a = o[2],
                            s = o[3];
                        r[o[1]] = a.add, s && a.add(function() {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                            return i[o[0] + "With"](this === i ? r : this, arguments), this
                        }, i[o[0] + "With"] = a.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                },
                when: function(e) {
                    var t, n, r, i = 0,
                        o = u.call(arguments),
                        a = o.length,
                        s = 1 !== a || e && m.isFunction(e.promise) ? a : 0,
                        l = 1 === s ? e : m.Deferred(),
                        c = function(e, n, r) {
                            return function(i) {
                                n[e] = this, r[e] = arguments.length > 1 ? u.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                            }
                        };
                    if (a > 1)
                        for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && m.isFunction(o[i].promise) ? o[i].promise().progress(c(i, n, t)).done(c(i, r, o)).fail(l.reject) : --s;
                    return s || l.resolveWith(r, o), l.promise()
                }
            }), m.fn.ready = function(e) {
                return m.ready.promise().done(e), this
            }, m.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? m.readyWait++ : m.ready(!0)
                },
                ready: function(e) {
                    (!0 === e ? --m.readyWait : m.isReady) || (m.isReady = !0, !0 !== e && --m.readyWait > 0 || (P.resolveWith(s, [m]), m.fn.triggerHandler && (m(s).triggerHandler("ready"), m(s).off("ready"))))
                }
            }), m.ready.promise = function(e) {
                return P || (P = m.Deferred(), "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? i.setTimeout(m.ready) : (s.addEventListener("DOMContentLoaded", H), i.addEventListener("load", H))), P.promise(e)
            }, m.ready.promise();
            var M = function e(t, n, r, i, o, a, s) {
                    var u = 0,
                        l = t.length,
                        c = null == r;
                    if ("object" === m.type(r))
                        for (u in o = !0, r) e(t, n, u, r[u], !0, a, s);
                    else if (void 0 !== i && (o = !0, m.isFunction(i) || (s = !0), c && (s ? (n.call(t, i), n = null) : (c = n, n = function(e, t, n) {
                            return c.call(m(e), n)
                        })), n))
                        for (; u < l; u++) n(t[u], r, s ? i : i.call(t[u], u, n(t[u], r)));
                    return o ? t : c ? n.call(t) : l ? n(t[0], r) : a
                },
                F = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };

            function R() {
                this.expando = m.expando + R.uid++
            }
            R.uid = 1, R.prototype = {
                register: function(e, t) {
                    var n = t || {};
                    return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                        value: n,
                        writable: !0,
                        configurable: !0
                    }), e[this.expando]
                },
                cache: function(e) {
                    if (!F(e)) return {};
                    var t = e[this.expando];
                    return t || (t = {}, F(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[t] = n;
                    else
                        for (r in t) i[r] = t[r];
                    return i
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
                },
                access: function(e, t, n) {
                    var r;
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, m.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r, i, o = e[this.expando];
                    if (void 0 !== o) {
                        if (void 0 === t) this.register(e);
                        else {
                            m.isArray(t) ? r = t.concat(t.map(m.camelCase)) : (i = m.camelCase(t), r = t in o ? [t, i] : (r = i) in o ? [r] : r.match(O) || []), n = r.length;
                            for (; n--;) delete o[r[n]]
                        }(void 0 === t || m.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !m.isEmptyObject(t)
                }
            };
            var W = new R,
                I = new R,
                $ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                B = /[A-Z]/g;

            function z(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(B, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : $.test(n) ? m.parseJSON(n) : n)
                        } catch (e) {}
                        I.set(e, t, n)
                    } else n = void 0;
                return n
            }
            m.extend({
                hasData: function(e) {
                    return I.hasData(e) || W.hasData(e)
                },
                data: function(e, t, n) {
                    return I.access(e, t, n)
                },
                removeData: function(e, t) {
                    I.remove(e, t)
                },
                _data: function(e, t, n) {
                    return W.access(e, t, n)
                },
                _removeData: function(e, t) {
                    W.remove(e, t)
                }
            }), m.fn.extend({
                data: function(e, t) {
                    var n, i, o, a = this[0],
                        s = a && a.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = I.get(a), 1 === a.nodeType && !W.get(a, "hasDataAttrs"))) {
                            for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = m.camelCase(i.slice(5)), z(a, i, o[i]));
                            W.set(a, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" === r(e) ? this.each(function() {
                        I.set(this, e)
                    }) : M(this, function(t) {
                        var n, r;
                        if (a && void 0 === t) return void 0 !== (n = I.get(a, e) || I.get(a, e.replace(B, "-$&").toLowerCase())) ? n : (r = m.camelCase(e), void 0 !== (n = I.get(a, r)) ? n : void 0 !== (n = z(a, r, void 0)) ? n : void 0);
                        r = m.camelCase(e), this.each(function() {
                            var n = I.get(this, r);
                            I.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && I.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        I.remove(this, e)
                    })
                }
            }), m.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = W.get(e, t), n && (!r || m.isArray(n) ? r = W.access(e, t, m.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = m.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = m._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                        m.dequeue(e, t)
                    }, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return W.get(e, n) || W.access(e, n, {
                        empty: m.Callbacks("once memory").add(function() {
                            W.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), m.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? m.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = m.queue(this, e, t);
                        m._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && m.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        m.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        i = m.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = W.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                U = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
                V = ["Top", "Right", "Bottom", "Left"],
                G = function(e, t) {
                    return e = t || e, "none" === m.css(e, "display") || !m.contains(e.ownerDocument, e)
                };

            function Y(e, t, n, r) {
                var i, o = 1,
                    a = 20,
                    s = r ? function() {
                        return r.cur()
                    } : function() {
                        return m.css(e, t, "")
                    },
                    u = s(),
                    l = n && n[3] || (m.cssNumber[t] ? "" : "px"),
                    c = (m.cssNumber[t] || "px" !== l && +u) && U.exec(m.css(e, t));
                if (c && c[3] !== l) {
                    l = l || c[3], n = n || [], c = +u || 1;
                    do {
                        c /= o = o || ".5", m.style(e, t, c + l)
                    } while (o !== (o = s() / u) && 1 !== o && --a)
                }
                return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
            }
            var Q = /^(?:checkbox|radio)$/i,
                J = /<([\w:-]+)/,
                K = /^$|\/(?:java|ecma)script/i,
                Z = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function ee(e, t) {
                var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && m.nodeName(e, t) ? m.merge([e], n) : n
            }

            function te(e, t) {
                for (var n = 0, r = e.length; n < r; n++) W.set(e[n], "globalEval", !t || W.get(t[n], "globalEval"))
            }
            Z.optgroup = Z.option, Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead, Z.th = Z.td;
            var ne = /<|&#?\w+;/;

            function re(e, t, n, r, i) {
                for (var o, a, s, u, l, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                    if ((o = e[p]) || 0 === o)
                        if ("object" === m.type(o)) m.merge(f, o.nodeType ? [o] : o);
                        else if (ne.test(o)) {
                    for (a = a || d.appendChild(t.createElement("div")), s = (J.exec(o) || ["", ""])[1].toLowerCase(), u = Z[s] || Z._default, a.innerHTML = u[1] + m.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
                    m.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
                } else f.push(t.createTextNode(o));
                for (d.textContent = "", p = 0; o = f[p++];)
                    if (r && m.inArray(o, r) > -1) i && i.push(o);
                    else if (l = m.contains(o.ownerDocument, o), a = ee(d.appendChild(o), "script"), l && te(a), n)
                    for (c = 0; o = a[c++];) K.test(o.type || "") && n.push(o);
                return d
            }! function() {
                var e = s.createDocumentFragment().appendChild(s.createElement("div")),
                    t = s.createElement("input");
                t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), v.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
            }();
            var ie = /^key/,
                oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                ae = /^([^.]*)(?:\.(.+)|)/;

            function se() {
                return !0
            }

            function ue() {
                return !1
            }

            function le() {
                try {
                    return s.activeElement
                } catch (e) {}
            }

            function ce(e, t, n, i, o, a) {
                var s, u;
                if ("object" === r(t)) {
                    for (u in "string" != typeof n && (i = i || n, n = void 0), t) ce(e, u, n, i, t[u], a);
                    return e
                }
                if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = ue;
                else if (!o) return e;
                return 1 === a && (s = o, (o = function(e) {
                    return m().off(e), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = m.guid++)), e.each(function() {
                    m.event.add(this, t, o, i, n)
                })
            }
            m.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, d, f, p, h, v, g = W.get(e);
                    if (g)
                        for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = m.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                                return void 0 !== m && m.event.triggered !== t.type ? m.event.dispatch.apply(e, arguments) : void 0
                            }), l = (t = (t || "").match(O) || [""]).length; l--;) p = v = (s = ae.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (d = m.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = m.event.special[p] || {}, c = m.extend({
                            type: p,
                            origType: v,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && m.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o), (f = u[p]) || ((f = u[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), m.event.global[p] = !0)
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, d, f, p, h, v, g = W.hasData(e) && W.get(e);
                    if (g && (u = g.events)) {
                        for (l = (t = (t || "").match(O) || [""]).length; l--;)
                            if (p = v = (s = ae.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                                for (d = m.event.special[p] || {}, f = u[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) c = f[o], !i && v !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                                a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || m.removeEvent(e, p, g.handle), delete u[p])
                            } else
                                for (p in u) m.event.remove(e, p + t[l], n, r, !0);
                        m.isEmptyObject(u) && W.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    e = m.event.fix(e);
                    var t, n, r, i, o, a, s = u.call(arguments),
                        l = (W.get(this, "events") || {})[e.type] || [],
                        c = m.event.special[e.type] || {};
                    if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                        for (a = m.event.handlers.call(this, e, l), t = 0;
                            (i = a[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((m.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a = [],
                        s = t.delegateCount,
                        u = e.target;
                    if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; u !== this; u = u.parentNode || this)
                            if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                                for (r = [], n = 0; n < s; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? m(i, this).index(u) > -1 : m.find(i, this, null, [u]).length), r[i] && r.push(o);
                                r.length && a.push({
                                    elem: u,
                                    handlers: r
                                })
                            }
                    return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }), a
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, r, i, o = t.button;
                        return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || s).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                    }
                },
                fix: function(e) {
                    if (e[m.expando]) return e;
                    var t, n, r, i = e.type,
                        o = e,
                        a = this.fixHooks[i];
                    for (a || (this.fixHooks[i] = a = oe.test(i) ? this.mouseHooks : ie.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new m.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
                    return e.target || (e.target = s), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== le() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === le() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && m.nodeName(this, "input")) return this.click(), !1
                        },
                        _default: function(e) {
                            return m.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, m.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, m.Event = function(e, t) {
                if (!(this instanceof m.Event)) return new m.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? se : ue) : this.type = e, t && m.extend(this, t), this.timeStamp = e && e.timeStamp || m.now(), this[m.expando] = !0
            }, m.Event.prototype = {
                constructor: m.Event,
                isDefaultPrevented: ue,
                isPropagationStopped: ue,
                isImmediatePropagationStopped: ue,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = se, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = se, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, m.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                m.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = e.relatedTarget,
                            i = e.handleObj;
                        return r && (r === this || m.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), m.fn.extend({
                on: function(e, t, n, r) {
                    return ce(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return ce(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, m(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" === r(e)) {
                        for (o in e) this.off(o, t, e[o]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ue), this.each(function() {
                        m.event.remove(this, e, n, t)
                    })
                }
            });
            var de = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                fe = /<script|<style|<link/i,
                pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                he = /^true\/(.*)/,
                ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function me(e, t) {
                return m.nodeName(e, "table") && m.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function ge(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function ye(e) {
                var t = he.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function xe(e, t) {
                var n, r, i, o, a, s, u, l;
                if (1 === t.nodeType) {
                    if (W.hasData(e) && (o = W.access(e), a = W.set(t, o), l = o.events))
                        for (i in delete a.handle, a.events = {}, l)
                            for (n = 0, r = l[i].length; n < r; n++) m.event.add(t, i, l[i][n]);
                    I.hasData(e) && (s = I.access(e), u = m.extend({}, s), I.set(t, u))
                }
            }

            function be(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Q.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }

            function we(e, t, n, r) {
                t = l.apply([], t);
                var i, o, a, s, u, c, d = 0,
                    f = e.length,
                    p = f - 1,
                    h = t[0],
                    g = m.isFunction(h);
                if (g || f > 1 && "string" == typeof h && !v.checkClone && pe.test(h)) return e.each(function(i) {
                    var o = e.eq(i);
                    g && (t[0] = h.call(this, i, o.html())), we(o, t, n, r)
                });
                if (f && (o = (i = re(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                    for (s = (a = m.map(ee(i, "script"), ge)).length; d < f; d++) u = i, d !== p && (u = m.clone(u, !0, !0), s && m.merge(a, ee(u, "script"))), n.call(e[d], u, d);
                    if (s)
                        for (c = a[a.length - 1].ownerDocument, m.map(a, ye), d = 0; d < s; d++) u = a[d], K.test(u.type || "") && !W.access(u, "globalEval") && m.contains(c, u) && (u.src ? m._evalUrl && m._evalUrl(u.src) : m.globalEval(u.textContent.replace(ve, "")))
                }
                return e
            }

            function Te(e, t, n) {
                for (var r, i = t ? m.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || m.cleanData(ee(r)), r.parentNode && (n && m.contains(r.ownerDocument, r) && te(ee(r, "script")), r.parentNode.removeChild(r));
                return e
            }
            m.extend({
                htmlPrefilter: function(e) {
                    return e.replace(de, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var r, i, o, a, s = e.cloneNode(!0),
                        u = m.contains(e.ownerDocument, e);
                    if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || m.isXMLDoc(e)))
                        for (a = ee(s), r = 0, i = (o = ee(e)).length; r < i; r++) be(o[r], a[r]);
                    if (t)
                        if (n)
                            for (o = o || ee(e), a = a || ee(s), r = 0, i = o.length; r < i; r++) xe(o[r], a[r]);
                        else xe(e, s);
                    return (a = ee(s, "script")).length > 0 && te(a, !u && ee(e, "script")), s
                },
                cleanData: function(e) {
                    for (var t, n, r, i = m.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (F(n)) {
                            if (t = n[W.expando]) {
                                if (t.events)
                                    for (r in t.events) i[r] ? m.event.remove(n, r) : m.removeEvent(n, r, t.handle);
                                n[W.expando] = void 0
                            }
                            n[I.expando] && (n[I.expando] = void 0)
                        }
                }
            }), m.fn.extend({
                domManip: we,
                detach: function(e) {
                    return Te(this, e, !0)
                },
                remove: function(e) {
                    return Te(this, e)
                },
                text: function(e) {
                    return M(this, function(e) {
                        return void 0 === e ? m.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return we(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || me(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return we(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = me(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return we(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return we(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (m.cleanData(ee(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return m.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return M(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !fe.test(e) && !Z[(J.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = m.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (m.cleanData(ee(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return we(this, arguments, function(t) {
                        var n = this.parentNode;
                        m.inArray(this, e) < 0 && (m.cleanData(ee(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), m.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                m.fn[e] = function(e) {
                    for (var n, r = [], i = m(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), m(i[a])[t](n), c.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Ce, ke = {
                HTML: "block",
                BODY: "block"
            };

            function Se(e, t) {
                var n = m(t.createElement(e)).appendTo(t.body),
                    r = m.css(n[0], "display");
                return n.detach(), r
            }

            function je(e) {
                var t = s,
                    n = ke[e];
                return n || ("none" !== (n = Se(e, t)) && n || ((t = (Ce = (Ce || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Se(e, t), Ce.detach()), ke[e] = n), n
            }
            var _e = /^margin/,
                Ee = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
                Ne = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = i), t.getComputedStyle(e)
                },
                Ae = function(e, t, n, r) {
                    var i, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                    return i
                },
                De = s.documentElement;

            function Le(e, t, n) {
                var r, i, o, a, s = e.style;
                return "" !== (a = (n = n || Ne(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || m.contains(e.ownerDocument, e) || (a = m.style(e, t)), n && !v.pixelMarginRight() && Ee.test(a) && _e.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 !== a ? a + "" : a
            }

            function qe(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function() {
                var e, t, n, r, o = s.createElement("div"),
                    a = s.createElement("div");

                function u() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", De.appendChild(o);
                    var s = i.getComputedStyle(a);
                    e = "1%" !== s.top, r = "2px" === s.marginLeft, t = "4px" === s.width, a.style.marginRight = "50%", n = "4px" === s.marginRight, De.removeChild(o)
                }
                a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), m.extend(v, {
                    pixelPosition: function() {
                        return u(), e
                    },
                    boxSizingReliable: function() {
                        return null == t && u(), t
                    },
                    pixelMarginRight: function() {
                        return null == t && u(), n
                    },
                    reliableMarginLeft: function() {
                        return null == t && u(), r
                    },
                    reliableMarginRight: function() {
                        var e, t = a.appendChild(s.createElement("div"));
                        return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", a.style.width = "1px", De.appendChild(o), e = !parseFloat(i.getComputedStyle(t).marginRight), De.removeChild(o), a.removeChild(t), e
                    }
                }))
            }();
            var Pe = /^(none|table(?!-c[ea]).+)/,
                Oe = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                He = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Me = ["Webkit", "O", "Moz", "ms"],
                Fe = s.createElement("div").style;

            function Re(e) {
                if (e in Fe) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = Me.length; n--;)
                    if ((e = Me[n] + t) in Fe) return e
            }

            function We(e, t, n) {
                var r = U.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function Ie(e, t, n, r, i) {
                for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += m.css(e, n + V[o], !0, i)), r ? ("content" === n && (a -= m.css(e, "padding" + V[o], !0, i)), "margin" !== n && (a -= m.css(e, "border" + V[o] + "Width", !0, i))) : (a += m.css(e, "padding" + V[o], !0, i), "padding" !== n && (a += m.css(e, "border" + V[o] + "Width", !0, i)));
                return a
            }

            function $e(e, t, n) {
                var r = !0,
                    i = "width" === t ? e.offsetWidth : e.offsetHeight,
                    o = Ne(e),
                    a = "border-box" === m.css(e, "boxSizing", !1, o);
                if (i <= 0 || null == i) {
                    if (((i = Le(e, t, o)) < 0 || null == i) && (i = e.style[t]), Ee.test(i)) return i;
                    r = a && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + Ie(e, t, n || (a ? "border" : "content"), r, o) + "px"
            }

            function Be(e, t) {
                for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)(r = e[a]).style && (o[a] = W.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && G(r) && (o[a] = W.access(r, "olddisplay", je(r.nodeName)))) : (i = G(r), "none" === n && i || W.set(r, "olddisplay", i ? n : m.css(r, "display"))));
                for (a = 0; a < s; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
                return e
            }

            function ze(e, t, n, r, i) {
                return new ze.prototype.init(e, t, n, r, i)
            }
            m.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Le(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, a, s, u = m.camelCase(t),
                            l = e.style;
                        if (t = m.cssProps[u] || (m.cssProps[u] = Re(u) || u), s = m.cssHooks[t] || m.cssHooks[u], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
                        "string" === (a = r(n)) && (o = U.exec(n)) && o[1] && (n = Y(e, t, o), a = "number"), null != n && n == n && ("number" === a && (n += o && o[3] || (m.cssNumber[u] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, a, s = m.camelCase(t);
                    return t = m.cssProps[s] || (m.cssProps[s] = Re(s) || s), (a = m.cssHooks[t] || m.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Le(e, t, r)), "normal" === i && t in He && (i = He[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                }
            }), m.each(["height", "width"], function(e, t) {
                m.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return Pe.test(m.css(e, "display")) && 0 === e.offsetWidth ? Ae(e, Oe, function() {
                            return $e(e, t, r)
                        }) : $e(e, t, r)
                    },
                    set: function(e, n, r) {
                        var i, o = r && Ne(e),
                            a = r && Ie(e, t, r, "border-box" === m.css(e, "boxSizing", !1, o), o);
                        return a && (i = U.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = m.css(e, t)), We(0, n, a)
                    }
                }
            }), m.cssHooks.marginLeft = qe(v.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat(Le(e, "marginLeft")) || e.getBoundingClientRect().left - Ae(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), m.cssHooks.marginRight = qe(v.reliableMarginRight, function(e, t) {
                if (t) return Ae(e, {
                    display: "inline-block"
                }, Le, [e, "marginRight"])
            }), m.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                m.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + V[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, _e.test(e) || (m.cssHooks[e + t].set = We)
            }), m.fn.extend({
                css: function(e, t) {
                    return M(this, function(e, t, n) {
                        var r, i, o = {},
                            a = 0;
                        if (m.isArray(t)) {
                            for (r = Ne(e), i = t.length; a < i; a++) o[t[a]] = m.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? m.style(e, t, n) : m.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function() {
                    return Be(this, !0)
                },
                hide: function() {
                    return Be(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        G(this) ? m(this).show() : m(this).hide()
                    })
                }
            }), m.Tween = ze, ze.prototype = {
                constructor: ze,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || m.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (m.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = ze.propHooks[this.prop];
                    return e && e.get ? e.get(this) : ze.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = ze.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = m.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ze.propHooks._default.set(this), this
                }
            }, ze.prototype.init.prototype = ze.prototype, ze.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = m.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        m.fx.step[e.prop] ? m.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[m.cssProps[e.prop]] && !m.cssHooks[e.prop] ? e.elem[e.prop] = e.now : m.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, ze.propHooks.scrollTop = ze.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, m.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, m.fx = ze.prototype.init, m.fx.step = {};
            var Xe, Ue, Ve = /^(?:toggle|show|hide)$/,
                Ge = /queueHooks$/;

            function Ye() {
                return i.setTimeout(function() {
                    Xe = void 0
                }), Xe = m.now()
            }

            function Qe(e, t) {
                var n, r = 0,
                    i = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = V[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function Je(e, t, n) {
                for (var r, i = (Ke.tweeners[t] || []).concat(Ke.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                    if (r = i[o].call(n, t, e)) return r
            }

            function Ke(e, t, n) {
                var r, i, o = 0,
                    a = Ke.prefilters.length,
                    s = m.Deferred().always(function() {
                        delete u.elem
                    }),
                    u = function() {
                        if (i) return !1;
                        for (var t = Xe || Ye(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                        return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (s.resolveWith(e, [l]), !1)
                    },
                    l = s.promise({
                        elem: e,
                        props: m.extend({}, t),
                        opts: m.extend(!0, {
                            specialEasing: {},
                            easing: m.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Xe || Ye(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = m.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; n < r; n++) l.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                        }
                    }),
                    c = l.props;
                for (! function(e, t) {
                        var n, r, i, o, a;
                        for (n in e)
                            if (i = t[r = m.camelCase(n)], o = e[n], m.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = m.cssHooks[r]) && "expand" in a)
                                for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                            else t[r] = i
                    }(c, l.opts.specialEasing); o < a; o++)
                    if (r = Ke.prefilters[o].call(l, e, c, l.opts)) return m.isFunction(r.stop) && (m._queueHooks(l.elem, l.opts.queue).stop = m.proxy(r.stop, r)), r;
                return m.map(c, Je, l), m.isFunction(l.opts.start) && l.opts.start.call(e, l), m.fx.timer(m.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }
            m.Animation = m.extend(Ke, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return Y(n.elem, e, U.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        m.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(O);
                        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Ke.tweeners[n] = Ke.tweeners[n] || [], Ke.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var r, i, o, a, s, u, l, c = this,
                            d = {},
                            f = e.style,
                            p = e.nodeType && G(e),
                            h = W.get(e, "fxshow");
                        for (r in n.queue || (null == (s = m._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                                s.unqueued || u()
                            }), s.unqueued++, c.always(function() {
                                c.always(function() {
                                    s.unqueued--, m.queue(e, "fx").length || s.empty.fire()
                                })
                            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (l = m.css(e, "display")) ? W.get(e, "olddisplay") || je(e.nodeName) : l) && "none" === m.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function() {
                                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                            })), t)
                            if (i = t[r], Ve.exec(i)) {
                                if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                                    if ("show" !== i || !h || void 0 === h[r]) continue;
                                    p = !0
                                }
                                d[r] = h && h[r] || m.style(e, r)
                            } else l = void 0;
                        if (m.isEmptyObject(d)) "inline" === ("none" === l ? je(e.nodeName) : l) && (f.display = l);
                        else
                            for (r in h ? "hidden" in h && (p = h.hidden) : h = W.access(e, "fxshow", {}), o && (h.hidden = !p), p ? m(e).show() : c.done(function() {
                                    m(e).hide()
                                }), c.done(function() {
                                    var t;
                                    for (t in W.remove(e, "fxshow"), d) m.style(e, t, d[t])
                                }), d) a = Je(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
                    }],
                    prefilter: function(e, t) {
                        t ? Ke.prefilters.unshift(e) : Ke.prefilters.push(e)
                    }
                }), m.speed = function(e, t, n) {
                    var i = e && "object" === r(e) ? m.extend({}, e) : {
                        complete: n || !n && t || m.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !m.isFunction(t) && t
                    };
                    return i.duration = m.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in m.fx.speeds ? m.fx.speeds[i.duration] : m.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                        m.isFunction(i.old) && i.old.call(this), i.queue && m.dequeue(this, i.queue)
                    }, i
                }, m.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(G).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = m.isEmptyObject(e),
                            o = m.speed(t, n, r),
                            a = function() {
                                var t = Ke(this, m.extend({}, e), o);
                                (i || W.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                i = null != e && e + "queueHooks",
                                o = m.timers,
                                a = W.get(this);
                            if (i) a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a) a[i] && a[i].stop && Ge.test(i) && r(a[i]);
                            for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                            !t && n || m.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each(function() {
                            var t, n = W.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = m.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, m.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), m.each(["toggle", "show", "hide"], function(e, t) {
                    var n = m.fn[t];
                    m.fn[t] = function(e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Qe(t, !0), e, r, i)
                    }
                }), m.each({
                    slideDown: Qe("show"),
                    slideUp: Qe("hide"),
                    slideToggle: Qe("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    m.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), m.timers = [], m.fx.tick = function() {
                    var e, t = 0,
                        n = m.timers;
                    for (Xe = m.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || m.fx.stop(), Xe = void 0
                }, m.fx.timer = function(e) {
                    m.timers.push(e), e() ? m.fx.start() : m.timers.pop()
                }, m.fx.interval = 13, m.fx.start = function() {
                    Ue || (Ue = i.setInterval(m.fx.tick, m.fx.interval))
                }, m.fx.stop = function() {
                    i.clearInterval(Ue), Ue = null
                }, m.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, m.fn.delay = function(e, t) {
                    return e = m.fx && m.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, n) {
                        var r = i.setTimeout(t, e);
                        n.stop = function() {
                            i.clearTimeout(r)
                        }
                    })
                },
                function() {
                    var e = s.createElement("input"),
                        t = s.createElement("select"),
                        n = t.appendChild(s.createElement("option"));
                    e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = n.selected, t.disabled = !0, v.optDisabled = !n.disabled, (e = s.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
                }();
            var Ze, et = m.expr.attrHandle;
            m.fn.extend({
                attr: function(e, t) {
                    return M(this, m.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        m.removeAttr(this, e)
                    })
                }
            }), m.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? m.prop(e, t, n) : (1 === o && m.isXMLDoc(e) || (t = t.toLowerCase(), i = m.attrHooks[t] || (m.expr.match.bool.test(t) ? Ze : void 0)), void 0 !== n ? null === n ? void m.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = m.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!v.radioValue && "radio" === t && m.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r, i = 0,
                        o = t && t.match(O);
                    if (o && 1 === e.nodeType)
                        for (; n = o[i++];) r = m.propFix[n] || n, m.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
                }
            }), Ze = {
                set: function(e, t, n) {
                    return !1 === t ? m.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, m.each(m.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = et[t] || m.find.attr;
                et[t] = function(e, t, r) {
                    var i, o;
                    return r || (o = et[t], et[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, et[t] = o), i
                }
            });
            var tt = /^(?:input|select|textarea|button)$/i,
                nt = /^(?:a|area)$/i;
            m.fn.extend({
                prop: function(e, t) {
                    return M(this, m.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[m.propFix[e] || e]
                    })
                }
            }), m.extend({
                prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && m.isXMLDoc(e) || (t = m.propFix[t] || t, i = m.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = m.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : tt.test(e.nodeName) || nt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), v.optSelected || (m.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                m.propFix[this.toLowerCase()] = this
            });
            var rt = /[\t\r\n\f]/g;

            function it(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            m.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (m.isFunction(e)) return this.each(function(t) {
                        m(this).addClass(e.call(this, t, it(this)))
                    });
                    if ("string" == typeof e && e)
                        for (t = e.match(O) || []; n = this[u++];)
                            if (i = it(n), r = 1 === n.nodeType && (" " + i + " ").replace(rt, " ")) {
                                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i !== (s = m.trim(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (m.isFunction(e)) return this.each(function(t) {
                        m(this).removeClass(e.call(this, t, it(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(O) || []; n = this[u++];)
                            if (i = it(n), r = 1 === n.nodeType && (" " + i + " ").replace(rt, " ")) {
                                for (a = 0; o = t[a++];)
                                    for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                i !== (s = m.trim(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = r(e);
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : m.isFunction(e) ? this.each(function(n) {
                        m(this).toggleClass(e.call(this, n, it(this), t), t)
                    }) : this.each(function() {
                        var t, r, i, o;
                        if ("string" === n)
                            for (r = 0, i = m(this), o = e.match(O) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = it(this)) && W.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : W.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + it(n) + " ").replace(rt, " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var ot = /\r/g,
                at = /[\x20\t\r\n\f]+/g;
            m.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0];
                    return arguments.length ? (r = m.isFunction(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, m(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : m.isArray(i) && (i = m.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    })) : i ? (t = m.valHooks[i.type] || m.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(ot, "") : null == n ? "" : n : void 0
                }
            }), m.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = m.find.attr(e, "value");
                            return null != t ? t : m.trim(m.text(e)).replace(at, " ")
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                                if (((n = r[u]).selected || u === i) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !m.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = m(n).val(), o) return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            for (var n, r, i = e.options, o = m.makeArray(t), a = i.length; a--;)((r = i[a]).selected = m.inArray(m.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), m.each(["radio", "checkbox"], function() {
                m.valHooks[this] = {
                    set: function(e, t) {
                        if (m.isArray(t)) return e.checked = m.inArray(m(e).val(), t) > -1
                    }
                }, v.checkOn || (m.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var st = /^(?:focusinfocus|focusoutblur)$/;
            m.extend(m.event, {
                trigger: function(e, t, n, o) {
                    var a, u, l, c, d, f, p, v = [n || s],
                        g = h.call(e, "type") ? e.type : e,
                        y = h.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (u = l = n = n || s, 3 !== n.nodeType && 8 !== n.nodeType && !st.test(g + m.event.triggered) && (g.indexOf(".") > -1 && (g = (y = g.split(".")).shift(), y.sort()), d = g.indexOf(":") < 0 && "on" + g, (e = e[m.expando] ? e : new m.Event(g, "object" === r(e) && e)).isTrigger = o ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : m.makeArray(t, [e]), p = m.event.special[g] || {}, o || !p.trigger || !1 !== p.trigger.apply(n, t))) {
                        if (!o && !p.noBubble && !m.isWindow(n)) {
                            for (c = p.delegateType || g, st.test(c + g) || (u = u.parentNode); u; u = u.parentNode) v.push(u), l = u;
                            l === (n.ownerDocument || s) && v.push(l.defaultView || l.parentWindow || i)
                        }
                        for (a = 0;
                            (u = v[a++]) && !e.isPropagationStopped();) e.type = a > 1 ? c : p.bindType || g, (f = (W.get(u, "events") || {})[e.type] && W.get(u, "handle")) && f.apply(u, t), (f = d && u[d]) && f.apply && F(u) && (e.result = f.apply(u, t), !1 === e.result && e.preventDefault());
                        return e.type = g, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), t) || !F(n) || d && m.isFunction(n[g]) && !m.isWindow(n) && ((l = n[d]) && (n[d] = null), m.event.triggered = g, n[g](), m.event.triggered = void 0, l && (n[d] = l)), e.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = m.extend(new m.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    m.event.trigger(r, null, t)
                }
            }), m.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        m.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return m.event.trigger(e, t, n, !0)
                }
            }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                m.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), m.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), v.focusin = "onfocusin" in i, v.focusin || m.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    m.event.simulate(t, e.target, m.event.fix(e))
                };
                m.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = W.access(r, t);
                        i || r.addEventListener(e, n, !0), W.access(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = W.access(r, t) - 1;
                        i ? W.access(r, t, i) : (r.removeEventListener(e, n, !0), W.remove(r, t))
                    }
                }
            });
            var ut = i.location,
                lt = m.now(),
                ct = /\?/;
            m.parseJSON = function(e) {
                return JSON.parse(e + "")
            }, m.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new i.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + e), t
            };
            var dt = /#.*$/,
                ft = /([?&])_=[^&]*/,
                pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                ht = /^(?:GET|HEAD)$/,
                vt = /^\/\//,
                mt = {},
                gt = {},
                yt = "*/".concat("*"),
                xt = s.createElement("a");

            function bt(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        o = t.toLowerCase().match(O) || [];
                    if (m.isFunction(n))
                        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function wt(e, t, n, r) {
                var i = {},
                    o = e === gt;

                function a(s) {
                    var u;
                    return i[s] = !0, m.each(e[s] || [], function(e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                    }), u
                }
                return a(t.dataTypes[0]) || !i["*"] && a("*")
            }

            function Tt(e, t) {
                var n, r, i = m.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && m.extend(!0, e, r), e
            }
            xt.href = ut.href, m.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: ut.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": yt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": m.parseJSON,
                        "text xml": m.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Tt(Tt(e, m.ajaxSettings), t) : Tt(m.ajaxSettings, e)
                },
                ajaxPrefilter: bt(mt),
                ajaxTransport: bt(gt),
                ajax: function(e, t) {
                    "object" === r(e) && (t = e, e = void 0), t = t || {};
                    var n, o, a, u, l, c, d, f, p = m.ajaxSetup({}, t),
                        h = p.context || p,
                        v = p.context && (h.nodeType || h.jquery) ? m(h) : m.event,
                        g = m.Deferred(),
                        y = m.Callbacks("once memory"),
                        x = p.statusCode || {},
                        b = {},
                        w = {},
                        T = 0,
                        C = "canceled",
                        k = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (2 === T) {
                                    if (!u)
                                        for (u = {}; t = pt.exec(a);) u[t[1].toLowerCase()] = t[2];
                                    t = u[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return 2 === T ? a : null
                            },
                            setRequestHeader: function(e, t) {
                                var n = e.toLowerCase();
                                return T || (e = w[n] = w[n] || e, b[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return T || (p.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (T < 2)
                                        for (t in e) x[t] = [x[t], e[t]];
                                    else k.always(e[k.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || C;
                                return n && n.abort(t), S(0, t), this
                            }
                        };
                    if (g.promise(k).complete = y.add, k.success = k.done, k.error = k.fail, p.url = ((e || p.url || ut.href) + "").replace(dt, "").replace(vt, ut.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = m.trim(p.dataType || "*").toLowerCase().match(O) || [""], null == p.crossDomain) {
                        c = s.createElement("a");
                        try {
                            c.href = p.url, c.href = c.href, p.crossDomain = xt.protocol + "//" + xt.host != c.protocol + "//" + c.host
                        } catch (e) {
                            p.crossDomain = !0
                        }
                    }
                    if (p.data && p.processData && "string" != typeof p.data && (p.data = m.param(p.data, p.traditional)), wt(mt, p, t, k), 2 === T) return k;
                    for (f in (d = m.event && p.global) && 0 == m.active++ && m.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !ht.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (ct.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = ft.test(o) ? o.replace(ft, "$1_=" + lt++) : o + (ct.test(o) ? "&" : "?") + "_=" + lt++)), p.ifModified && (m.lastModified[o] && k.setRequestHeader("If-Modified-Since", m.lastModified[o]), m.etag[o] && k.setRequestHeader("If-None-Match", m.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : p.accepts["*"]), p.headers) k.setRequestHeader(f, p.headers[f]);
                    if (p.beforeSend && (!1 === p.beforeSend.call(h, k, p) || 2 === T)) return k.abort();
                    for (f in C = "abort", {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) k[f](p[f]);
                    if (n = wt(gt, p, t, k)) {
                        if (k.readyState = 1, d && v.trigger("ajaxSend", [k, p]), 2 === T) return k;
                        p.async && p.timeout > 0 && (l = i.setTimeout(function() {
                            k.abort("timeout")
                        }, p.timeout));
                        try {
                            T = 1, n.send(b, S)
                        } catch (e) {
                            if (!(T < 2)) throw e;
                            S(-1, e)
                        }
                    } else S(-1, "No Transport");

                    function S(e, t, r, s) {
                        var u, c, f, b, w, C = t;
                        2 !== T && (T = 2, l && i.clearTimeout(l), n = void 0, a = s || "", k.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, r && (b = function(e, t, n) {
                            for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (i in s)
                                    if (s[i] && s[i].test(r)) {
                                        u.unshift(i);
                                        break
                                    }
                            if (u[0] in n) o = u[0];
                            else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break
                                    }
                                    a || (a = i)
                                }
                                o = o || a
                            }
                            if (o) return o !== u[0] && u.unshift(o), n[o]
                        }(p, k, r)), b = function(e, t, n, r) {
                            var i, o, a, s, u, l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o;)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + u + " to " + o
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(p, b, k, u), u ? (p.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (m.lastModified[o] = w), (w = k.getResponseHeader("etag")) && (m.etag[o] = w)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, c = b.data, u = !(f = b.error))) : (f = C, !e && C || (C = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || C) + "", u ? g.resolveWith(h, [c, C, k]) : g.rejectWith(h, [k, C, f]), k.statusCode(x), x = void 0, d && v.trigger(u ? "ajaxSuccess" : "ajaxError", [k, p, u ? c : f]), y.fireWith(h, [k, C]), d && (v.trigger("ajaxComplete", [k, p]), --m.active || m.event.trigger("ajaxStop")))
                    }
                    return k
                },
                getJSON: function(e, t, n) {
                    return m.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return m.get(e, void 0, t, "script")
                }
            }), m.each(["get", "post"], function(e, t) {
                m[t] = function(e, n, r, i) {
                    return m.isFunction(n) && (i = i || r, r = n, n = void 0), m.ajax(m.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, m.isPlainObject(e) && e))
                }
            }), m._evalUrl = function(e) {
                return m.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, m.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return m.isFunction(e) ? this.each(function(t) {
                        m(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = m(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this)
                },
                wrapInner: function(e) {
                    return m.isFunction(e) ? this.each(function(t) {
                        m(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = m(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = m.isFunction(e);
                    return this.each(function(n) {
                        m(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), m.expr.filters.hidden = function(e) {
                return !m.expr.filters.visible(e)
            }, m.expr.filters.visible = function(e) {
                return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
            };
            var Ct = /%20/g,
                kt = /\[\]$/,
                St = /\r?\n/g,
                jt = /^(?:submit|button|image|reset|file)$/i,
                _t = /^(?:input|select|textarea|keygen)/i;

            function Et(e, t, n, i) {
                var o;
                if (m.isArray(t)) m.each(t, function(t, o) {
                    n || kt.test(e) ? i(e, o) : Et(e + "[" + ("object" === r(o) && null != o ? t : "") + "]", o, n, i)
                });
                else if (n || "object" !== m.type(t)) i(e, t);
                else
                    for (o in t) Et(e + "[" + o + "]", t[o], n, i)
            }
            m.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) {
                        t = m.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (void 0 === t && (t = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(e) || e.jquery && !m.isPlainObject(e)) m.each(e, function() {
                    i(this.name, this.value)
                });
                else
                    for (n in e) Et(n, e[n], t, i);
                return r.join("&").replace(Ct, "+")
            }, m.fn.extend({
                serialize: function() {
                    return m.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = m.prop(this, "elements");
                        return e ? m.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !m(this).is(":disabled") && _t.test(this.nodeName) && !jt.test(e) && (this.checked || !Q.test(e))
                    }).map(function(e, t) {
                        var n = m(this).val();
                        return null == n ? null : m.isArray(n) ? m.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(St, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(St, "\r\n")
                        }
                    }).get()
                }
            }), m.ajaxSettings.xhr = function() {
                try {
                    return new i.XMLHttpRequest
                } catch (e) {}
            };
            var Nt = {
                    0: 200,
                    1223: 204
                },
                At = m.ajaxSettings.xhr();
            v.cors = !!At && "withCredentials" in At, v.ajax = At = !!At, m.ajaxTransport(function(e) {
                var t, n;
                if (v.cors || At && !e.crossDomain) return {
                    send: function(r, o) {
                        var a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (a in e.xhrFields) s[a] = e.xhrFields[a];
                        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
                        t = function(e) {
                            return function() {
                                t && (t = n = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Nt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }, s.onload = t(), n = s.onerror = t("error"), void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                            4 === s.readyState && i.setTimeout(function() {
                                t && n()
                            })
                        }, t = t("abort");
                        try {
                            s.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t) throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
            }), m.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return m.globalEval(e), e
                    }
                }
            }), m.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), m.ajaxTransport("script", function(e) {
                var t, n;
                if (e.crossDomain) return {
                    send: function(r, i) {
                        t = m("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), s.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            });
            var Dt = [],
                Lt = /(=)\?(?=&|$)|\?\?/;
            m.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Dt.pop() || m.expando + "_" + lt++;
                    return this[e] = !0, e
                }
            }), m.ajaxPrefilter("json jsonp", function(e, t, n) {
                var r, o, a, s = !1 !== e.jsonp && (Lt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Lt, "$1" + r) : !1 !== e.jsonp && (e.url += (ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                    return a || m.error(r + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = i[r], i[r] = function() {
                    a = arguments
                }, n.always(function() {
                    void 0 === o ? m(i).removeProp(r) : i[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Dt.push(r)), a && m.isFunction(o) && o(a[0]), a = o = void 0
                }), "script"
            }), m.parseHTML = function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || s;
                var r = j.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = re([e], t, i), i && i.length && m(i).remove(), m.merge([], r.childNodes))
            };
            var qt = m.fn.load;

            function Pt(e) {
                return m.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            m.fn.load = function(e, t, n) {
                if ("string" != typeof e && qt) return qt.apply(this, arguments);
                var i, o, a, s = this,
                    u = e.indexOf(" ");
                return u > -1 && (i = m.trim(e.slice(u)), e = e.slice(0, u)), m.isFunction(t) ? (n = t, t = void 0) : t && "object" === r(t) && (o = "POST"), s.length > 0 && m.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    a = arguments, s.html(i ? m("<div>").append(m.parseHTML(e)).find(i) : e)
                }).always(n && function(e, t) {
                    s.each(function() {
                        n.apply(this, a || [e.responseText, t, e])
                    })
                }), this
            }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                m.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), m.expr.filters.animated = function(e) {
                return m.grep(m.timers, function(t) {
                    return e === t.elem
                }).length
            }, m.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, l = m.css(e, "position"),
                        c = m(e),
                        d = {};
                    "static" === l && (e.style.position = "relative"), s = c.offset(), o = m.css(e, "top"), u = m.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m.isFunction(t) && (t = t.call(e, n, m.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : c.css(d)
                }
            }, m.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        m.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        },
                        o = r && r.ownerDocument;
                    return o ? (t = o.documentElement, m.contains(t, r) ? (i = r.getBoundingClientRect(), n = Pt(o), {
                        top: i.top + n.pageYOffset - t.clientTop,
                        left: i.left + n.pageXOffset - t.clientLeft
                    }) : i) : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === m.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), m.nodeName(e[0], "html") || (r = e.offset()), r.top += m.css(e[0], "borderTopWidth", !0), r.left += m.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - r.top - m.css(n, "marginTop", !0),
                            left: t.left - r.left - m.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === m.css(e, "position");) e = e.offsetParent;
                        return e || De
                    })
                }
            }), m.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                m.fn[e] = function(r) {
                    return M(this, function(e, r, i) {
                        var o = Pt(e);
                        if (void 0 === i) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                    }, e, r, arguments.length)
                }
            }), m.each(["top", "left"], function(e, t) {
                m.cssHooks[t] = qe(v.pixelPosition, function(e, n) {
                    if (n) return n = Le(e, t), Ee.test(n) ? m(e).position()[t] + "px" : n
                })
            }), m.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                m.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    m.fn[r] = function(r, i) {
                        var o = arguments.length && (n || "boolean" != typeof r),
                            a = n || (!0 === r || !0 === i ? "margin" : "border");
                        return M(this, function(t, n, r) {
                            var i;
                            return m.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? m.css(t, n, a) : m.style(t, n, r, a)
                        }, t, o ? r : void 0, o, null)
                    }
                })
            }), m.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                size: function() {
                    return this.length
                }
            }), m.fn.andSelf = m.fn.addBack, void 0 === (n = function() {
                return m
            }.apply(t, [])) || (e.exports = n);
            var Ot = i.jQuery,
                Ht = i.$;
            return m.noConflict = function(e) {
                return i.$ === m && (i.$ = Ht), e && i.jQuery === m && (i.jQuery = Ot), m
            }, o || (i.jQuery = i.$ = m), m
        })
    }).call(this, n(5)(e))
}, function(e, t) {
    e.exports = prestashop
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.psShowHide = function() {
        (0, r.default)(".ps-shown-by-js").show(), (0, r.default)(".ps-hidden-by-js").hide()
    }, t.psGetRequestParameter = i, t.refreshCheckoutPage = function() {
        if (null !== i("updatedTransaction")) window.location.reload();
        else {
            var e = i();
            e.updatedTransaction = 1;
            var t = [];
            for (var n in e) {
                var r = e[n];
                t.push(n + "=" + r)
            }
            window.location.href = window.location.pathname + "?" + t.join("&")
        }
    };
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));

    function i(e) {
        var t = {};
        return window.location.href.replace(location.hash, "").replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function(e, n, r) {
            t[n] = void 0 !== r ? r : ""
        }), void 0 !== e ? t[e] ? t[e] : null : t
    }
}, function(e, t, n) {
    e.exports = n(4)
}, function(e, t, n) {
    "use strict";
    var r = s(n(0));
    n(6), n(7), n(11), n(12), n(13), n(14);
    var i = s(n(1)),
        o = s(n(15)),
        a = n(2);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    for (var u in window.$ = r.default, window.jQuery = r.default, o.default.prototype) i.default[u] = o.default.prototype[u];
    (0, r.default)(document).ready(function() {
        (0, a.psShowHide)()
    })
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    "use strict";
    var r = a(n(0)),
        i = a(n(1)),
        o = n(2);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    (0, r.default)(document).ready(function() {
        i.default.on("updateCart", function(e) {
            i.default.cart = e.reason.cart;
            var t = (0, r.default)(".js-cart").data("refresh-url");
            if (t) {
                var n = {};
                e && e.reason && (n = {
                    id_product_attribute: e.reason.idProductAttribute,
                    id_product: e.reason.idProduct
                }), r.default.post(t, n).then(function(e) {
                    (0, r.default)(".cart-detailed-totals").replaceWith(e.cart_detailed_totals), (0, r.default)(".cart-summary-items-subtotal").replaceWith(e.cart_summary_items_subtotal), (0, r.default)(".cart-summary-totals").replaceWith(e.cart_summary_totals), (0, r.default)(".cart-detailed-actions").replaceWith(e.cart_detailed_actions), (0, r.default)(".cart-voucher").replaceWith(e.cart_voucher), (0, r.default)(".cart-overview").replaceWith(e.cart_detailed), (0, r.default)("#product_customization_id").val(0), (0, r.default)(".js-cart-line-product-quantity").each(function(e, t) {
                        var n = (0, r.default)(t);
                        n.attr("value", n.val())
                    }), (0, r.default)(".js-cart-payment-step-refresh").length && (0, o.refreshCheckoutPage)(), i.default.emit("updatedCart", {
                        eventType: "updateCart",
                        resp: e
                    })
                }).fail(function(e) {
                    i.default.emit("handleError", {
                        eventType: "updateCart",
                        resp: e
                    })
                })
            }
        });
        var e = (0, r.default)("body");
        e.on("click", '[data-button-action="add-to-cart"]', function(e) {
            if (e.preventDefault(), (0, r.default)("#quantity_wanted").val() > (0, r.default)("[data-stock]").data("stock") && 0 === (0, r.default)("[data-allow-oosp]").data("allow-oosp").length)(0, r.default)('[data-button-action="add-to-cart"]').attr("disabled", "disabled");
            else {
                var t = (0, r.default)(e.target).closest("form"),
                    n = t.serialize() + "&add=1&action=update",
                    o = t.attr("action"),
                    a = function(e) {
                        e.parents(".product-add-to-cart").first().find(".product-minimal-quantity").addClass("error"), e.parent().find("label").addClass("error")
                    },
                    s = t.find("input[min]");
                if (! function(e) {
                        var t = !0;
                        return e.each(function(e, n) {
                            var i = (0, r.default)(n),
                                o = parseInt(i.attr("min"), 10);
                            o && i.val() < o && (a(i), t = !1)
                        }), t
                    }(s)) return void a(s);
                r.default.post(o, n, null, "json").then(function(e) {
                    i.default.emit("updateCart", {
                        reason: {
                            idProduct: e.id_product,
                            idProductAttribute: e.id_product_attribute,
                            idCustomization: e.id_customization,
                            linkAction: "add-to-cart",
                            cart: e.cart
                        },
                        resp: e
                    })
                }).fail(function(e) {
                    i.default.emit("handleError", {
                        eventType: "addProductToCart",
                        resp: e
                    })
                })
            }
        }), e.on("submit", '[data-link-action="add-voucher"]', function(e) {
            e.preventDefault();
            var t = (0, r.default)(e.currentTarget),
                n = t.attr("action");
            0 === t.find("[name=action]").length && t.append((0, r.default)("<input>", {
                type: "hidden",
                name: "ajax",
                value: 1
            })), 0 === t.find("[name=action]").length && t.append((0, r.default)("<input>", {
                type: "hidden",
                name: "action",
                value: "update"
            })), r.default.post(n, t.serialize(), null, "json").then(function(t) {
                t.hasError ? (0, r.default)(".js-error").show().find(".js-error-text").text(t.errors[0]) : i.default.emit("updateCart", {
                    reason: e.target.dataset,
                    resp: t
                })
            }).fail(function(e) {
                i.default.emit("handleError", {
                    eventType: "updateCart",
                    resp: e
                })
            })
        })
    })
}, function(e, t, n) {
    "use strict";
    var r = u(n(0)),
        i = u(n(1)),
        o = u(n(8)),
        a = u(n(9)),
        s = u(n(10));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function l() {
        (0, o.default)(), (0, a.default)(), (0, s.default)(),
        function() {
            (0, r.default)(".checkout-step").off("click");
            var e = (0, r.default)("#checkout-personal-information-step").nextAll();
            (0, r.default)(".js-current-step").prevAll().add(e).on("click", function(e) {
                var t = (0, r.default)(e.target).closest(".checkout-step");
                t.hasClass("-unreachable") || ((0, r.default)(".js-current-step, .-current").removeClass("js-current-step -current"), t.toggleClass("-current"), t.toggleClass("js-current-step")), i.default.emit("changedCheckoutStep", {
                    event: e
                })
            }), (0, r.default)(".js-current-step:not(#checkout-personal-information-step)").nextAll().on("click", function(e) {
                (0, r.default)(".js-current-step button.continue").click(), i.default.emit("changedCheckoutStep", {
                    event: e
                })
            })
        }()
    }(0, r.default)(document).ready(function() {
        1 === (0, r.default)("#checkout").length && l()
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        (0, r.default)(".js-edit-addresses").on("click", function(e) {
            e.stopPropagation(), (0, r.default)("#checkout-addresses-step").trigger("click"), i.default.emit("editAddress")
        }), (0, r.default)("#delivery-addresses input[type=radio], #invoice-addresses input[type=radio]").on("click", function() {
            (0, r.default)(".address-item").removeClass("selected"), (0, r.default)(".address-item:has(input[type=radio]:checked)").addClass("selected");
            var e = (0, r.default)(".js-address-error").prop("id").split("-").pop(),
                t = (0, r.default)("#not-valid-addresses").val(),
                n = this.name.split("_").pop(),
                i = (0, r.default)(".js-address-error[name=alert-" + n + "]");
            l(!1, e, n), "" !== t && null === s && t.split(",").indexOf(this.value) >= 0 ? (i.show(), l(!0, this.value, n), (0, r.default)(".js-address-error").prop("id", "id-failure-address-" + this.value)) : i.hide();
            var o = (0, r.default)(".js-address-error:visible");
            c(o.length <= 0)
        })
    };
    var r = a(n(0)),
        i = a(n(1)),
        o = n(2);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = (0, o.psGetRequestParameter)("editAddress"),
        u = (0, o.psGetRequestParameter)("use_same_address");
    (0, r.default)(window).load(function() {
        var e = (0, r.default)(".js-address-error:visible");
        if (0 === parseInt(u) && (0, r.default)("#invoice-addresses input[type=radio]:checked").trigger("click"), (null !== s || (0, r.default)(".js-address-form:visible").length > 1) && e.hide(), e.length > 0) {
            var t = (0, r.default)(".js-address-error").prop("id").split("-").pop();
            e.each(function() {
                l(!0, t, (0, r.default)(this).attr("name").split("-").pop())
            })
        }
        e = (0, r.default)(".js-address-error:visible"), c(e.length <= 0)
    });
    var l = function(e, t, n) {
            var i = "#7a7a7a";
            e && ((0, r.default)("#" + n + "-addresses a.edit-address").prop("style", "color: #7a7a7a !important"), i = "#2fb5d2"), (0, r.default)("#id-address-" + n + "-address-" + t + " a.edit-address").prop("style", "color: " + i + " !important")
        },
        c = function(e) {
            (0, r.default)("button[name=confirm-addresses]").prop("disabled", !e)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        var e = (0, r.default)("body");
        e.on("change", "#js-delivery input", function(e) {
            var t = (0, r.default)("#js-delivery"),
                n = t.serialize(),
                a = (0, r.default)(e.currentTarget).parents("div.delivery-option");
            r.default.post(t.data("url-update"), n).then(function(e) {
                (0, r.default)("#js-checkout-summary").replaceWith(e.preview), (0, r.default)(".js-cart-payment-step-refresh").length && (0, o.refreshCheckoutPage)(), i.default.emit("updatedDeliveryForm", {
                    dataForm: t.serializeArray(),
                    deliveryOption: a,
                    resp: e
                })
            }).fail(function(e) {
                i.default.trigger("handleError", {
                    eventType: "updateDeliveryOptions",
                    resp: e
                })
            })
        }), e.on("click", ".js-edit-delivery", function(e) {
            e.stopPropagation(), (0, r.default)("#checkout-delivery-step").trigger("click"), i.default.emit("editDelivery")
        })
    };
    var r = a(n(0)),
        i = a(n(1)),
        o = n(2);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        var e = new o;
        return e.init(), e
    };
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var o = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.confirmationSelector = "#payment-confirmation", this.paymentSelector = "#payment-section", this.conditionsSelector = "#conditions-to-approve", this.conditionAlertSelector = ".js-alert-payment-conditions", this.additionalInformatonSelector = ".js-additional-information", this.optionsForm = ".js-payment-option-form"
        }
        return function(e, t, n) {
            t && i(e.prototype, t), n && i(e, n)
        }(e, [{
            key: "init",
            value: function() {
                (0, r.default)(this.paymentSelector + ' input[type="checkbox"][disabled]').attr("disabled", !1);
                var e = (0, r.default)("body");
                e.on("change", this.conditionsSelector + ' input[type="checkbox"]', r.default.proxy(this.toggleOrderButton, this)), e.on("change", 'input[name="payment-option"]', r.default.proxy(this.toggleOrderButton, this)), e.on("click", this.confirmationSelector + " button", r.default.proxy(this.confirm, this)), this.collapseOptions()
            }
        }, {
            key: "collapseOptions",
            value: function() {
                (0, r.default)(this.additionalInformatonSelector + ", " + this.optionsForm).hide()
            }
        }, {
            key: "getSelectedOption",
            value: function() {
                return (0, r.default)('input[name="payment-option"]:checked').attr("id")
            }
        }, {
            key: "hideConfirmation",
            value: function() {
                (0, r.default)(this.confirmationSelector).hide()
            }
        }, {
            key: "showConfirmation",
            value: function() {
                (0, r.default)(this.confirmationSelector).show()
            }
        }, {
            key: "toggleOrderButton",
            value: function() {
                var e = !0;
                (0, r.default)(this.conditionsSelector + ' input[type="checkbox"]').each(function(t, n) {
                    n.checked || (e = !1)
                }), this.collapseOptions();
                var t = this.getSelectedOption();
                if (t || (e = !1), (0, r.default)("#" + t + "-additional-information").show(), (0, r.default)("#pay-with-" + t + "-form").show(), (0, r.default)(".js-payment-binary").hide(), (0, r.default)("#" + t).hasClass("binary")) {
                    var n = this.getPaymentOptionSelector(t);
                    this.hideConfirmation(), (0, r.default)(n).show(), e ? (0, r.default)(n).removeClass("disabled") : (0, r.default)(n).addClass("disabled")
                } else this.showConfirmation(), (0, r.default)(this.confirmationSelector + " button").attr("disabled", !e), e ? (0, r.default)(this.conditionAlertSelector).hide() : (0, r.default)(this.conditionAlertSelector).show()
            }
        }, {
            key: "getPaymentOptionSelector",
            value: function(e) {
                var t = (0, r.default)("#".concat(e)).data("module-name");
                return ".js-payment-".concat(t)
            }
        }, {
            key: "confirm",
            value: function() {
                var e = this.getSelectedOption();
                e && ((0, r.default)(this.confirmationSelector + " button").prop("disabled", !0), (0, r.default)("#pay-with-" + e + "-form form").submit())
            }
        }]), e
    }()
}, function(e, t, n) {
    "use strict";
    var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        (n(0));
    var i = !1;

    function o(e) {
        i = !1, prestashop.emit("updateProductList", e), window.history.pushState(e, document.title, e.current_url), window.scrollTo(0, 0)
    }

    function a() {
        i = !1
    }(0, r.default)(document).ready(function() {
        prestashop.on("updateFacets", function(e) {
            ! function(e) {
                if (i);
                else {
                    var t = [e, e.indexOf("?") >= 0 ? "&" : "?", "from-xhr"].join("");
                    r.default.get(t, null, null, "json").then(o).fail(a)
                }
            }(e)
        })
    })
}, function(e, t, n) {
    "use strict";
    var r = o(n(0)),
        i = o(n(1));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    (0, r.default)(document).ready(function() {
        (0, r.default)("body").on("click", ".quick-view", function(e) {
            i.default.emit("clickQuickView", {
                dataset: (0, r.default)(e.target).closest(".js-product-miniature").data()
            }), e.preventDefault()
        })
    })
}, function(e, t, n) {
    "use strict";
    var r = a(n(0)),
        i = a(n(1)),
        o = n(2);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = null,
        u = null;

    function l(e, t, n) {
        var a = (0, r.default)(".product-actions"),
            l = a.find("#quantity_wanted:first"),
            f = a.find("form:first").serialize(),
            p = (0, o.psGetRequestParameter)("preview");
        p = null !== p ? "&preview=" + p : "", null !== n ? e && "keyup" === e.type && l.val() === l.data("old-value") || (l.data("old-value", l.val()), u && clearTimeout(u), u = setTimeout(function() {
            "" !== f && (s = r.default.ajax({
                url: n + (-1 === n.indexOf("?") ? "?" : "&") + f + p,
                method: "POST",
                data: {
                    ajax: 1,
                    action: "refresh",
                    quantity_wanted: l.val()
                },
                dataType: "json",
                beforeSend: function() {
                    null !== s && s.abort()
                },
                error: function(e, t, n) {
                    "abort" !== t && 0 === (0, r.default)("section#main > .ajax-error").length && d((0, r.default)("#product-availability"), "An error occurred while processing your request")
                },
                success: function(e, n, o) {
                    var a = (0, r.default)("<div>").append(e.product_cover_thumbnails);
                    (0, r.default)(".images-container").html() !== a.find(".images-container").html() && (0, r.default)(".images-container").replaceWith(e.product_cover_thumbnails), (0, r.default)(".product-prices").replaceWith(e.product_prices), (0, r.default)(".product-customization").replaceWith(e.product_customization), (0, r.default)(".product-variants").replaceWith(e.product_variants), (0, r.default)(".product-discounts").replaceWith(e.product_discounts), (0, r.default)(".product-additional-info").replaceWith(e.product_additional_info), (0, r.default)("#product-details").replaceWith(e.product_details),
                        function(e) {
                            var t = null;
                            (0, r.default)(e.product_add_to_cart).each(function(e, n) {
                                if ((0, r.default)(n).hasClass("product-add-to-cart")) return t = (0, r.default)(n), !1
                            }), null === t && d((0, r.default)("#product-availability"), "An error occurred while processing your request");
                            var n = (0, r.default)(".product-add-to-cart");
                            c({
                                $addToCartSnippet: t,
                                $targetParent: n,
                                targetSelector: ".add"
                            }), c({
                                $addToCartSnippet: t,
                                $targetParent: n,
                                targetSelector: "#product-availability"
                            }), c({
                                $addToCartSnippet: t,
                                $targetParent: n,
                                targetSelector: ".product-minimal-quantity"
                            })
                        }(e);
                    var s = parseInt(e.product_minimal_quantity, 10);
                    isNaN(s) || "updatedProductQuantity" === t || (l.attr("min", s), l.val(s)), i.default.emit("updatedProduct", e)
                },
                complete: function(e, t) {
                    s = null, u = null
                }
            }))
        }.bind(s, u), 1500)) : d((0, r.default)("#product-availability"), "An error occurred while processing your request")
    }

    function c(e) {
        var t = (0, r.default)(e.$targetParent.find(e.targetSelector));
        if (!(t.length <= 0)) {
            var n = e.$addToCartSnippet.find(e.targetSelector);
            n.length > 0 ? t.replaceWith(n[0].outerHTML) : t.html("")
        }
    }

    function d(e, t) {
        var n = (0, r.default)('<div class="alert alert-danger ajax-error" role="alert">'.concat(t, "</div>"));
        e.replaceWith(n)
    }(0, r.default)(document).ready(function() {
        (0, r.default)("body").on("change touchspin.on.startspin", ".product-variants *[name]", function(e) {
            i.default.emit("updateProduct", {
                eventType: "updatedProductCombination",
                event: e,
                resp: {},
                reason: {
                    productUrl: i.default.urls.pages.product || ""
                }
            })
        }), (0, r.default)("body").on("click", ".product-refresh", function(e, t) {
            e.preventDefault();
            var n = "updatedProductCombination";
            void 0 !== t && t.eventType && (n = t.eventType), i.default.emit("updateProduct", {
                eventType: n,
                event: e,
                resp: {},
                reason: {
                    productUrl: i.default.urls.pages.product || ""
                }
            })
        }), i.default.on("updateProduct", function(e) {
            var t = e.eventType,
                n = e.event;
            (function() {
                var e = r.default.Deferred(),
                    t = (0, r.default)(".product-actions"),
                    n = (0, r.default)("#quantity_wanted");
                if (null !== i.default && null !== i.default.urls && null !== i.default.urls.pages && "" !== i.default.urls.pages.product && null !== i.default.urls.pages.product) return e.resolve(i.default.urls.pages.product), e.promise();
                var o = {};
                return (0, r.default)(t.find("form:first").serializeArray()).each(function(e, t) {
                    o[t.name] = t.value
                }), r.default.ajax({
                    url: t.find("form:first").attr("action"),
                    method: "POST",
                    data: Object.assign({
                        ajax: 1,
                        action: "productrefresh",
                        quantity_wanted: n.val()
                    }, o),
                    dataType: "json",
                    success: function(t) {
                        var n = t.productUrl;
                        i.default.page.canonical = n, e.resolve(n)
                    },
                    error: function(t, n, r) {
                        e.reject({
                            jqXHR: t,
                            textStatus: n,
                            errorThrown: r
                        })
                    }
                }), e.promise()
            })().done(function(e) {
                return l(n, t, e)
            }).fail(function() {
                0 === (0, r.default)("section#main > .ajax-error").length && d((0, r.default)("#product-availability"), "An error occurred while processing your request")
            })
        }), i.default.on("updatedProduct", function(e) {
            e.product_url && e.id_product_attribute && window.history.replaceState({
                id_product_attribute: e.id_product_attribute
            }, document.title, e.product_url)
        })
    })
}, function(e, t, n) {
    "use strict";
    var r = o(n(0)),
        i = o(n(1));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(0, r.default)(document).ready(function() {
        ! function(e) {
            (0, r.default)("body").on("change", e.country, function() {
                var t = {
                        id_country: (0, r.default)(e.country).val(),
                        id_address: (0, r.default)(e.address + " form").data("id-address")
                    },
                    n = (0, r.default)(e.address + " form").data("refresh-url"),
                    o = e.address + " input";
                r.default.post(n, t).then(function(t) {
                    var n = [];
                    (0, r.default)(o).each(function() {
                        n[(0, r.default)(this).prop("name")] = (0, r.default)(this).val()
                    }), (0, r.default)(e.address).replaceWith(t.address_form), (0, r.default)(o).each(function() {
                        (0, r.default)(this).val(n[(0, r.default)(this).prop("name")])
                    }), i.default.emit("updatedAddressForm", {
                        target: (0, r.default)(e.address),
                        resp: t
                    })
                }).fail(function(e) {
                    i.default.emit("handleError", {
                        eventType: "updateAddressForm",
                        resp: e
                    })
                })
            })
        }({
            country: ".js-country",
            address: ".js-address-form"
        })
    })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function i() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function o(e) {
        return "function" == typeof e
    }

    function a(e) {
        return "object" === r(e) && null !== e
    }

    function s(e) {
        return void 0 === e
    }
    e.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function(e) {
        if (! function(e) {
                return "number" == typeof e
            }(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e, this
    }, i.prototype.emit = function(e) {
        var t, n, r, i, u, l;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
            if ((t = arguments[1]) instanceof Error) throw t;
            var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw c.context = t, c
        }
        if (s(n = this._events[e])) return !1;
        if (o(n)) switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                i = Array.prototype.slice.call(arguments, 1), n.apply(this, i)
        } else if (a(n))
            for (i = Array.prototype.slice.call(arguments, 1), r = (l = n.slice()).length, u = 0; u < r; u++) l[u].apply(this, i);
        return !0
    }, i.prototype.addListener = function(e, t) {
        var n;
        if (!o(t)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, o(t.listener) ? t.listener : t), this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, a(this._events[e]) && !this._events[e].warned && (n = s(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
    }, i.prototype.on = i.prototype.addListener, i.prototype.once = function(e, t) {
        if (!o(t)) throw TypeError("listener must be a function");
        var n = !1;

        function r() {
            this.removeListener(e, r), n || (n = !0, t.apply(this, arguments))
        }
        return r.listener = t, this.on(e, r), this
    }, i.prototype.removeListener = function(e, t) {
        var n, r, i, s;
        if (!o(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (i = (n = this._events[e]).length, r = -1, n === t || o(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (a(n)) {
            for (s = i; s-- > 0;)
                if (n[s] === t || n[s].listener && n[s].listener === t) {
                    r = s;
                    break
                }
            if (r < 0) return this;
            1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }, i.prototype.removeAllListeners = function(e) {
        var t, n;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
        if (0 === arguments.length) {
            for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (o(n = this._events[e])) this.removeListener(e, n);
        else if (n)
            for (; n.length;) this.removeListener(e, n[n.length - 1]);
        return delete this._events[e], this
    }, i.prototype.listeners = function(e) {
        return this._events && this._events[e] ? o(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }, i.prototype.listenerCount = function(e) {
        if (this._events) {
            var t = this._events[e];
            if (o(t)) return 1;
            if (t) return t.length
        }
        return 0
    }, i.listenerCount = function(e, t) {
        return e.listenerCount(t)
    }
}]);
(function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.i = function(value) {
        return value;
    };
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                configurable: false,
                enumerable: true,
                get: getter
            });
        }
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module['default'];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 32);
})([(function(module, exports) {
    module.exports = jQuery;
}), (function(module, exports) {
    module.exports = prestashop;
}), (function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    var _createClass = (function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1;
                descriptor.configurable = !0;
                if ('value' in descriptor) descriptor.writable = !0;
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor
        }
    })();

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
        }
    }
    var _jquery = __webpack_require__(0);
    var _jquery2 = _interopRequireDefault(_jquery);
    var ProductMinitature = (function() {
        function ProductMinitature() {
            _classCallCheck(this, ProductMinitature)
        }
        _createClass(ProductMinitature, [{
            key: 'init',
            value: function init() {
                (0, _jquery2['default'])('.js-product-miniature').each(function(index, element) {
                    if ((0, _jquery2['default'])(element).find('.color').length > 5) {
                        (function() {
                            var count = 0;
                            (0, _jquery2['default'])(element).find('.color').each(function(index, element) {
                                if (index > 4) {
                                    (0, _jquery2['default'])(element).hide();
                                    count++
                                }
                            });
                            (0, _jquery2['default'])(element).find('.js-count').append('+' + count)
                        })()
                    }
                })
            }
        }]);
        return ProductMinitature
    })();
    exports['default'] = ProductMinitature;
    module.exports = exports['default'];
}), (function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(window) {
        "use strict";
        if (window.jQuery) {
            return;
        }
        var $ = function $(selector, context) {
            return new $.fn.init(selector, context);
        };
        $.isWindow = function(obj) {
            return obj && obj === obj.window;
        };
        $.type = function(obj) {
            if (!obj) {
                return obj + "";
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        };
        $.isArray = Array.isArray || function(obj) {
            return $.type(obj) === "array";
        };

        function isArraylike(obj) {
            var length = obj.length,
                type = $.type(obj);
            if (type === "function" || $.isWindow(obj)) {
                return false;
            }
            if (obj.nodeType === 1 && length) {
                return true;
            }
            return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        $.isPlainObject = function(obj) {
            var key;
            if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
                return false;
            }
            try {
                if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
            } catch (e) {
                return false;
            }
            for (key in obj) {}
            return key === undefined || hasOwn.call(obj, key);
        };
        $.each = function(obj, callback, args) {
            var value, i = 0,
                length = obj.length,
                isArray = isArraylike(obj);
            if (args) {
                if (isArray) {
                    for (; i < length; i++) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        if (!obj.hasOwnProperty(i)) {
                            continue;
                        }
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break;
                        }
                    }
                }
            } else {
                if (isArray) {
                    for (; i < length; i++) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        if (!obj.hasOwnProperty(i)) {
                            continue;
                        }
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break;
                        }
                    }
                }
            }
            return obj;
        };
        $.data = function(node, key, value) {
            if (value === undefined) {
                var getId = node[$.expando],
                    store = getId && cache[getId];
                if (key === undefined) {
                    return store;
                } else if (store) {
                    if (key in store) {
                        return store[key];
                    }
                }
            } else if (key !== undefined) {
                var setId = node[$.expando] || (node[$.expando] = ++$.uuid);
                cache[setId] = cache[setId] || {};
                cache[setId][key] = value;
                return value;
            }
        };
        $.removeData = function(node, keys) {
            var id = node[$.expando],
                store = id && cache[id];
            if (store) {
                if (!keys) {
                    delete cache[id];
                } else {
                    $.each(keys, function(_, key) {
                        delete store[key];
                    });
                }
            }
        };
        $.extend = function() {
            var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = false;
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[i] || {};
                i++;
            }
            if (typeof target !== "object" && $.type(target) !== "function") {
                target = {};
            }
            if (i === length) {
                target = this;
                i--;
            }
            for (; i < length; i++) {
                if (options = arguments[i]) {
                    for (name in options) {
                        if (!options.hasOwnProperty(name)) {
                            continue;
                        }
                        src = target[name];
                        copy = options[name];
                        if (target === copy) {
                            continue;
                        }
                        if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && $.isArray(src) ? src : [];
                            } else {
                                clone = src && $.isPlainObject(src) ? src : {};
                            }
                            target[name] = $.extend(deep, clone, copy);
                        } else if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }
            return target;
        };
        $.queue = function(elem, type, data) {
            function $makeArray(arr, results) {
                var ret = results || [];
                if (arr) {
                    if (isArraylike(Object(arr))) {
                        (function(first, second) {
                            var len = +second.length,
                                j = 0,
                                i = first.length;
                            while (j < len) {
                                first[i++] = second[j++];
                            }
                            if (len !== len) {
                                while (second[j] !== undefined) {
                                    first[i++] = second[j++];
                                }
                            }
                            first.length = i;
                            return first;
                        })(ret, typeof arr === "string" ? [arr] : arr);
                    } else {
                        [].push.call(ret, arr);
                    }
                }
                return ret;
            }
            if (!elem) {
                return;
            }
            type = (type || "fx") + "queue";
            var q = $.data(elem, type);
            if (!data) {
                return q || [];
            }
            if (!q || $.isArray(data)) {
                q = $.data(elem, type, $makeArray(data));
            } else {
                q.push(data);
            }
            return q;
        };
        $.dequeue = function(elems, type) {
            $.each(elems.nodeType ? [elems] : elems, function(i, elem) {
                type = type || "fx";
                var queue = $.queue(elem, type),
                    fn = queue.shift();
                if (fn === "inprogress") {
                    fn = queue.shift();
                }
                if (fn) {
                    if (type === "fx") {
                        queue.unshift("inprogress");
                    }
                    fn.call(elem, function() {
                        $.dequeue(elem, type);
                    });
                }
            });
        };
        $.fn = $.prototype = {
            init: function init(selector) {
                if (selector.nodeType) {
                    this[0] = selector;
                    return this;
                } else {
                    throw new Error("Not a DOM node.");
                }
            },
            offset: function offset() {
                var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                };
            },
            position: function position() {
                function offsetParentFn(elem) {
                    var offsetParent = elem.offsetParent;
                    while (offsetParent && offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position === "static") {
                        offsetParent = offsetParent.offsetParent;
                    }
                    return offsetParent || document;
                }
                var elem = this[0],
                    offsetParent = offsetParentFn(elem),
                    offset = this.offset(),
                    parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {
                        top: 0,
                        left: 0
                    } : $(offsetParent).offset();
                offset.top -= parseFloat(elem.style.marginTop) || 0;
                offset.left -= parseFloat(elem.style.marginLeft) || 0;
                if (offsetParent.style) {
                    parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
                    parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
                }
                return {
                    top: offset.top - parentOffset.top,
                    left: offset.left - parentOffset.left
                };
            }
        };
        var cache = {};
        $.expando = "velocity" + new Date().getTime();
        $.uuid = 0;
        var class2type = {},
            hasOwn = class2type.hasOwnProperty,
            toString = class2type.toString;
        var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
        for (var i = 0; i < types.length; i++) {
            class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
        }
        $.fn.init.prototype = $.fn;
        window.Velocity = {
            Utilities: $
        };
    })(window);
    (function(factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
            module.exports = factory();
        } else if (true) {
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
            factory();
        }
    })(function() {
        "use strict";
        return (function(global, window, document, undefined) {
            var IE = (function() {
                if (document.documentMode) {
                    return document.documentMode;
                } else {
                    for (var i = 7; i > 4; i--) {
                        var div = document.createElement("div");
                        div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";
                        if (div.getElementsByTagName("span").length) {
                            div = null;
                            return i;
                        }
                    }
                }
                return undefined;
            })();
            var rAFShim = (function() {
                var timeLast = 0;
                return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
                    var timeCurrent = new Date().getTime(),
                        timeDelta;
                    timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
                    timeLast = timeCurrent + timeDelta;
                    return setTimeout(function() {
                        callback(timeCurrent + timeDelta);
                    }, timeDelta);
                };
            })();
            var performance = (function() {
                var perf = window.performance || {};
                if (typeof perf.now !== "function") {
                    var nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : new Date().getTime();
                    perf.now = function() {
                        return new Date().getTime() - nowOffset;
                    };
                }
                return perf;
            })();

            function compactSparseArray(array) {
                var index = -1,
                    length = array ? array.length : 0,
                    result = [];
                while (++index < length) {
                    var value = array[index];
                    if (value) {
                        result.push(value);
                    }
                }
                return result;
            }
            var _slice = (function() {
                var slice = Array.prototype.slice;
                try {
                    slice.call(document.documentElement);
                    return slice;
                } catch (e) {
                    return function(begin, end) {
                        var len = this.length;
                        if (typeof begin !== "number") {
                            begin = 0;
                        }
                        if (typeof end !== "number") {
                            end = len;
                        }
                        if (this.slice) {
                            return slice.call(this, begin, end);
                        }
                        var i, cloned = [],
                            start = begin >= 0 ? begin : Math.max(0, len + begin),
                            upTo = end < 0 ? len + end : Math.min(end, len),
                            size = upTo - start;
                        if (size > 0) {
                            cloned = new Array(size);
                            if (this.charAt) {
                                for (i = 0; i < size; i++) {
                                    cloned[i] = this.charAt(start + i);
                                }
                            } else {
                                for (i = 0; i < size; i++) {
                                    cloned[i] = this[start + i];
                                }
                            }
                        }
                        return cloned;
                    };
                }
            })();
            var _inArray = function _inArray() {
                if (Array.prototype.includes) {
                    return function(arr, val) {
                        return arr.includes(val);
                    };
                }
                if (Array.prototype.indexOf) {
                    return function(arr, val) {
                        return arr.indexOf(val) >= 0;
                    };
                }
                return function(arr, val) {
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i] === val) {
                            return true;
                        }
                    }
                    return false;
                };
            };

            function sanitizeElements(elements) {
                if (Type.isWrapped(elements)) {
                    elements = _slice.call(elements);
                } else if (Type.isNode(elements)) {
                    elements = [elements];
                }
                return elements;
            }
            var Type = {
                isNumber: function isNumber(variable) {
                    return typeof variable === "number";
                },
                isString: function isString(variable) {
                    return typeof variable === "string";
                },
                isArray: Array.isArray || function(variable) {
                    return Object.prototype.toString.call(variable) === "[object Array]";
                },
                isFunction: function isFunction(variable) {
                    return Object.prototype.toString.call(variable) === "[object Function]";
                },
                isNode: function isNode(variable) {
                    return variable && variable.nodeType;
                },
                isWrapped: function isWrapped(variable) {
                    return variable && variable !== window && Type.isNumber(variable.length) && !Type.isString(variable) && !Type.isFunction(variable) && !Type.isNode(variable) && (variable.length === 0 || Type.isNode(variable[0]));
                },
                isSVG: function isSVG(variable) {
                    return window.SVGElement && variable instanceof window.SVGElement;
                },
                isEmptyObject: function isEmptyObject(variable) {
                    for (var name in variable) {
                        if (variable.hasOwnProperty(name)) {
                            return false;
                        }
                    }
                    return true;
                }
            };
            var $, isJQuery = false;
            if (global.fn && global.fn.jquery) {
                $ = global;
                isJQuery = true;
            } else {
                $ = window.Velocity.Utilities;
            }
            if (IE <= 8 && !isJQuery) {
                throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            } else if (IE <= 7) {
                jQuery.fn.velocity = jQuery.fn.animate;
                return;
            }
            var DURATION_DEFAULT = 400,
                EASING_DEFAULT = "swing";
            var Velocity = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: window.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: document.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: false,
                    calls: [],
                    delayedElements: {
                        count: 0
                    }
                },
                CSS: {},
                Utilities: $,
                Redirects: {},
                Easings: {},
                Promise: window.Promise,
                defaults: {
                    queue: "",
                    duration: DURATION_DEFAULT,
                    easing: EASING_DEFAULT,
                    begin: undefined,
                    complete: undefined,
                    progress: undefined,
                    display: undefined,
                    visibility: undefined,
                    loop: false,
                    delay: false,
                    mobileHA: true,
                    _cacheValues: true,
                    promiseRejectEmpty: true
                },
                init: function init(element) {
                    $.data(element, "velocity", {
                        isSVG: Type.isSVG(element),
                        isAnimating: false,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    });
                },
                hook: null,
                mock: false,
                version: {
                    major: 1,
                    minor: 5,
                    patch: 0
                },
                debug: false,
                timestamp: true,
                pauseAll: function pauseAll(queueName) {
                    var currentTime = new Date().getTime();
                    $.each(Velocity.State.calls, function(i, activeCall) {
                        if (activeCall) {
                            if (queueName !== undefined && (activeCall[2].queue !== queueName || activeCall[2].queue === false)) {
                                return true;
                            }
                            activeCall[5] = {
                                resume: false
                            };
                        }
                    });
                    $.each(Velocity.State.delayedElements, function(k, element) {
                        if (!element) {
                            return;
                        }
                        pauseDelayOnElement(element, currentTime);
                    });
                },
                resumeAll: function resumeAll(queueName) {
                    var currentTime = new Date().getTime();
                    $.each(Velocity.State.calls, function(i, activeCall) {
                        if (activeCall) {
                            if (queueName !== undefined && (activeCall[2].queue !== queueName || activeCall[2].queue === false)) {
                                return true;
                            }
                            if (activeCall[5]) {
                                activeCall[5].resume = true;
                            }
                        }
                    });
                    $.each(Velocity.State.delayedElements, function(k, element) {
                        if (!element) {
                            return;
                        }
                        resumeDelayOnElement(element, currentTime);
                    });
                }
            };
            if (window.pageYOffset !== undefined) {
                Velocity.State.scrollAnchor = window;
                Velocity.State.scrollPropertyLeft = "pageXOffset";
                Velocity.State.scrollPropertyTop = "pageYOffset";
            } else {
                Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
                Velocity.State.scrollPropertyLeft = "scrollLeft";
                Velocity.State.scrollPropertyTop = "scrollTop";
            }

            function Data(element) {
                var response = $.data(element, "velocity");
                return response === null ? undefined : response;
            }

            function pauseDelayOnElement(element, currentTime) {
                var data = Data(element);
                if (data && data.delayTimer && !data.delayPaused) {
                    data.delayRemaining = data.delay - currentTime + data.delayBegin;
                    data.delayPaused = true;
                    clearTimeout(data.delayTimer.setTimeout);
                }
            }

            function resumeDelayOnElement(element, currentTime) {
                var data = Data(element);
                if (data && data.delayTimer && data.delayPaused) {
                    data.delayPaused = false;
                    data.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);
                }
            }

            function generateStep(steps) {
                return function(p) {
                    return Math.round(p * steps) * (1 / steps);
                };
            }

            function generateBezier(mX1, mY1, mX2, mY2) {
                var NEWTON_ITERATIONS = 4,
                    NEWTON_MIN_SLOPE = 0.001,
                    SUBDIVISION_PRECISION = 0.0000001,
                    SUBDIVISION_MAX_ITERATIONS = 10,
                    kSplineTableSize = 11,
                    kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
                    float32ArraySupported = ("Float32Array" in window);
                if (arguments.length !== 4) {
                    return false;
                }
                for (var i = 0; i < 4; ++i) {
                    if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
                        return false;
                    }
                }
                mX1 = Math.min(mX1, 1);
                mX2 = Math.min(mX2, 1);
                mX1 = Math.max(mX1, 0);
                mX2 = Math.max(mX2, 0);
                var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

                function A(aA1, aA2) {
                    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
                }

                function B(aA1, aA2) {
                    return 3.0 * aA2 - 6.0 * aA1;
                }

                function C(aA1) {
                    return 3.0 * aA1;
                }

                function calcBezier(aT, aA1, aA2) {
                    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
                }

                function getSlope(aT, aA1, aA2) {
                    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
                }

                function newtonRaphsonIterate(aX, aGuessT) {
                    for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
                        var currentSlope = getSlope(aGuessT, mX1, mX2);
                        if (currentSlope === 0.0) {
                            return aGuessT;
                        }
                        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
                        aGuessT -= currentX / currentSlope;
                    }
                    return aGuessT;
                }

                function calcSampleValues() {
                    for (var i = 0; i < kSplineTableSize; ++i) {
                        mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
                    }
                }

                function binarySubdivide(aX, aA, aB) {
                    var currentX, currentT, i = 0;
                    do {
                        currentT = aA + (aB - aA) / 2.0;
                        currentX = calcBezier(currentT, mX1, mX2) - aX;
                        if (currentX > 0.0) {
                            aB = currentT;
                        } else {
                            aA = currentT;
                        }
                    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
                    return currentT;
                }

                function getTForX(aX) {
                    var intervalStart = 0.0,
                        currentSample = 1,
                        lastSample = kSplineTableSize - 1;
                    for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
                        intervalStart += kSampleStepSize;
                    }--currentSample;
                    var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
                        guessForT = intervalStart + dist * kSampleStepSize,
                        initialSlope = getSlope(guessForT, mX1, mX2);
                    if (initialSlope >= NEWTON_MIN_SLOPE) {
                        return newtonRaphsonIterate(aX, guessForT);
                    } else if (initialSlope === 0.0) {
                        return guessForT;
                    } else {
                        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
                    }
                }
                var _precomputed = false;

                function precompute() {
                    _precomputed = true;
                    if (mX1 !== mY1 || mX2 !== mY2) {
                        calcSampleValues();
                    }
                }
                var f = function f(aX) {
                    if (!_precomputed) {
                        precompute();
                    }
                    if (mX1 === mY1 && mX2 === mY2) {
                        return aX;
                    }
                    if (aX === 0) {
                        return 0;
                    }
                    if (aX === 1) {
                        return 1;
                    }
                    return calcBezier(getTForX(aX), mY1, mY2);
                };
                f.getControlPoints = function() {
                    return [{
                        x: mX1,
                        y: mY1
                    }, {
                        x: mX2,
                        y: mY2
                    }];
                };
                var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
                f.toString = function() {
                    return str;
                };
                return f;
            }
            var generateSpringRK4 = (function() {
                function springAccelerationForState(state) {
                    return -state.tension * state.x - state.friction * state.v;
                }

                function springEvaluateStateWithDerivative(initialState, dt, derivative) {
                    var state = {
                        x: initialState.x + derivative.dx * dt,
                        v: initialState.v + derivative.dv * dt,
                        tension: initialState.tension,
                        friction: initialState.friction
                    };
                    return {
                        dx: state.v,
                        dv: springAccelerationForState(state)
                    };
                }

                function springIntegrateState(state, dt) {
                    var a = {
                            dx: state.v,
                            dv: springAccelerationForState(state)
                        },
                        b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
                        c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
                        d = springEvaluateStateWithDerivative(state, dt, c),
                        dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
                        dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);
                    state.x = state.x + dxdt * dt;
                    state.v = state.v + dvdt * dt;
                    return state;
                }
                return function springRK4Factory(tension, friction, duration) {
                    var initState = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        path = [0],
                        time_lapsed = 0,
                        tolerance = 1 / 10000,
                        DT = 16 / 1000,
                        have_duration, dt, last_state;
                    tension = parseFloat(tension) || 500;
                    friction = parseFloat(friction) || 20;
                    duration = duration || null;
                    initState.tension = tension;
                    initState.friction = friction;
                    have_duration = duration !== null;
                    if (have_duration) {
                        time_lapsed = springRK4Factory(tension, friction);
                        dt = time_lapsed / duration * DT;
                    } else {
                        dt = DT;
                    }
                    while (true) {
                        last_state = springIntegrateState(last_state || initState, dt);
                        path.push(1 + last_state.x);
                        time_lapsed += 16;
                        if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
                            break;
                        }
                    }
                    return !have_duration ? time_lapsed : function(percentComplete) {
                        return path[percentComplete * (path.length - 1) | 0];
                    };
                };
            })();
            Velocity.Easings = {
                linear: function linear(p) {
                    return p;
                },
                swing: function swing(p) {
                    return 0.5 - Math.cos(p * Math.PI) / 2;
                },
                spring: function spring(p) {
                    return 1 - Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6);
                }
            };
            $.each([
                ["ease", [0.25, 0.1, 0.25, 1.0]],
                ["ease-in", [0.42, 0.0, 1.00, 1.0]],
                ["ease-out", [0.00, 0.0, 0.58, 1.0]],
                ["ease-in-out", [0.42, 0.0, 0.58, 1.0]],
                ["easeInSine", [0.47, 0, 0.745, 0.715]],
                ["easeOutSine", [0.39, 0.575, 0.565, 1]],
                ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
                ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
                ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
                ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
                ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
                ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
                ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
                ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
                ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
                ["easeInOutQuart", [0.77, 0, 0.175, 1]],
                ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
                ["easeOutQuint", [0.23, 1, 0.32, 1]],
                ["easeInOutQuint", [0.86, 0, 0.07, 1]],
                ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
                ["easeOutExpo", [0.19, 1, 0.22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
                ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
                ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
            ], function(i, easingArray) {
                Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
            });

            function getEasing(value, duration) {
                var easing = value;
                if (Type.isString(value)) {
                    if (!Velocity.Easings[value]) {
                        easing = false;
                    }
                } else if (Type.isArray(value) && value.length === 1) {
                    easing = generateStep.apply(null, value);
                } else if (Type.isArray(value) && value.length === 2) {
                    easing = generateSpringRK4.apply(null, value.concat([duration]));
                } else if (Type.isArray(value) && value.length === 4) {
                    easing = generateBezier.apply(null, value);
                } else {
                    easing = false;
                }
                if (easing === false) {
                    if (Velocity.Easings[Velocity.defaults.easing]) {
                        easing = Velocity.defaults.easing;
                    } else {
                        easing = EASING_DEFAULT;
                    }
                }
                return easing;
            }
            var CSS = Velocity.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                    units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                    colorNames: {
                        "aliceblue": "240,248,255",
                        "antiquewhite": "250,235,215",
                        "aquamarine": "127,255,212",
                        "aqua": "0,255,255",
                        "azure": "240,255,255",
                        "beige": "245,245,220",
                        "bisque": "255,228,196",
                        "black": "0,0,0",
                        "blanchedalmond": "255,235,205",
                        "blueviolet": "138,43,226",
                        "blue": "0,0,255",
                        "brown": "165,42,42",
                        "burlywood": "222,184,135",
                        "cadetblue": "95,158,160",
                        "chartreuse": "127,255,0",
                        "chocolate": "210,105,30",
                        "coral": "255,127,80",
                        "cornflowerblue": "100,149,237",
                        "cornsilk": "255,248,220",
                        "crimson": "220,20,60",
                        "cyan": "0,255,255",
                        "darkblue": "0,0,139",
                        "darkcyan": "0,139,139",
                        "darkgoldenrod": "184,134,11",
                        "darkgray": "169,169,169",
                        "darkgrey": "169,169,169",
                        "darkgreen": "0,100,0",
                        "darkkhaki": "189,183,107",
                        "darkmagenta": "139,0,139",
                        "darkolivegreen": "85,107,47",
                        "darkorange": "255,140,0",
                        "darkorchid": "153,50,204",
                        "darkred": "139,0,0",
                        "darksalmon": "233,150,122",
                        "darkseagreen": "143,188,143",
                        "darkslateblue": "72,61,139",
                        "darkslategray": "47,79,79",
                        "darkturquoise": "0,206,209",
                        "darkviolet": "148,0,211",
                        "deeppink": "255,20,147",
                        "deepskyblue": "0,191,255",
                        "dimgray": "105,105,105",
                        "dimgrey": "105,105,105",
                        "dodgerblue": "30,144,255",
                        "firebrick": "178,34,34",
                        "floralwhite": "255,250,240",
                        "forestgreen": "34,139,34",
                        "fuchsia": "255,0,255",
                        "gainsboro": "220,220,220",
                        "ghostwhite": "248,248,255",
                        "gold": "255,215,0",
                        "goldenrod": "218,165,32",
                        "gray": "128,128,128",
                        "grey": "128,128,128",
                        "greenyellow": "173,255,47",
                        "green": "0,128,0",
                        "honeydew": "240,255,240",
                        "hotpink": "255,105,180",
                        "indianred": "205,92,92",
                        "indigo": "75,0,130",
                        "ivory": "255,255,240",
                        "khaki": "240,230,140",
                        "lavenderblush": "255,240,245",
                        "lavender": "230,230,250",
                        "lawngreen": "124,252,0",
                        "lemonchiffon": "255,250,205",
                        "lightblue": "173,216,230",
                        "lightcoral": "240,128,128",
                        "lightcyan": "224,255,255",
                        "lightgoldenrodyellow": "250,250,210",
                        "lightgray": "211,211,211",
                        "lightgrey": "211,211,211",
                        "lightgreen": "144,238,144",
                        "lightpink": "255,182,193",
                        "lightsalmon": "255,160,122",
                        "lightseagreen": "32,178,170",
                        "lightskyblue": "135,206,250",
                        "lightslategray": "119,136,153",
                        "lightsteelblue": "176,196,222",
                        "lightyellow": "255,255,224",
                        "limegreen": "50,205,50",
                        "lime": "0,255,0",
                        "linen": "250,240,230",
                        "magenta": "255,0,255",
                        "maroon": "128,0,0",
                        "mediumaquamarine": "102,205,170",
                        "mediumblue": "0,0,205",
                        "mediumorchid": "186,85,211",
                        "mediumpurple": "147,112,219",
                        "mediumseagreen": "60,179,113",
                        "mediumslateblue": "123,104,238",
                        "mediumspringgreen": "0,250,154",
                        "mediumturquoise": "72,209,204",
                        "mediumvioletred": "199,21,133",
                        "midnightblue": "25,25,112",
                        "mintcream": "245,255,250",
                        "mistyrose": "255,228,225",
                        "moccasin": "255,228,181",
                        "navajowhite": "255,222,173",
                        "navy": "0,0,128",
                        "oldlace": "253,245,230",
                        "olivedrab": "107,142,35",
                        "olive": "128,128,0",
                        "orangered": "255,69,0",
                        "orange": "255,165,0",
                        "orchid": "218,112,214",
                        "palegoldenrod": "238,232,170",
                        "palegreen": "152,251,152",
                        "paleturquoise": "175,238,238",
                        "palevioletred": "219,112,147",
                        "papayawhip": "255,239,213",
                        "peachpuff": "255,218,185",
                        "peru": "205,133,63",
                        "pink": "255,192,203",
                        "plum": "221,160,221",
                        "powderblue": "176,224,230",
                        "purple": "128,0,128",
                        "red": "255,0,0",
                        "rosybrown": "188,143,143",
                        "royalblue": "65,105,225",
                        "saddlebrown": "139,69,19",
                        "salmon": "250,128,114",
                        "sandybrown": "244,164,96",
                        "seagreen": "46,139,87",
                        "seashell": "255,245,238",
                        "sienna": "160,82,45",
                        "silver": "192,192,192",
                        "skyblue": "135,206,235",
                        "slateblue": "106,90,205",
                        "slategray": "112,128,144",
                        "snow": "255,250,250",
                        "springgreen": "0,255,127",
                        "steelblue": "70,130,180",
                        "tan": "210,180,140",
                        "teal": "0,128,128",
                        "thistle": "216,191,216",
                        "tomato": "255,99,71",
                        "turquoise": "64,224,208",
                        "violet": "238,130,238",
                        "wheat": "245,222,179",
                        "whitesmoke": "245,245,245",
                        "white": "255,255,255",
                        "yellowgreen": "154,205,50",
                        "yellow": "255,255,0"
                    }
                },
                Hooks: {
                    templates: {
                        "textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
                        "boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        "clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        "backgroundPosition": ["X Y", "0% 0%"],
                        "transformOrigin": ["X Y Z", "50% 50% 0px"],
                        "perspectiveOrigin": ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function register() {
                        for (var i = 0; i < CSS.Lists.colors.length; i++) {
                            var rgbComponents = CSS.Lists.colors[i] === "color" ? "0 0 0 1" : "255 255 255 1";
                            CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
                        }
                        var rootProperty, hookTemplate, hookNames;
                        if (IE) {
                            for (rootProperty in CSS.Hooks.templates) {
                                if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
                                    continue;
                                }
                                hookTemplate = CSS.Hooks.templates[rootProperty];
                                hookNames = hookTemplate[0].split(" ");
                                var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);
                                if (hookNames[0] === "Color") {
                                    hookNames.push(hookNames.shift());
                                    defaultValues.push(defaultValues.shift());
                                    CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
                                }
                            }
                        }
                        for (rootProperty in CSS.Hooks.templates) {
                            if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
                                continue;
                            }
                            hookTemplate = CSS.Hooks.templates[rootProperty];
                            hookNames = hookTemplate[0].split(" ");
                            for (var j in hookNames) {
                                if (!hookNames.hasOwnProperty(j)) {
                                    continue;
                                }
                                var fullHookName = rootProperty + hookNames[j],
                                    hookPosition = j;
                                CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
                            }
                        }
                    },
                    getRoot: function getRoot(property) {
                        var hookData = CSS.Hooks.registered[property];
                        if (hookData) {
                            return hookData[0];
                        } else {
                            return property;
                        }
                    },
                    getUnit: function getUnit(str, start) {
                        var unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                        if (unit && _inArray(CSS.Lists.units, unit)) {
                            return unit;
                        }
                        return "";
                    },
                    fixColors: function fixColors(str) {
                        return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function($0, $1, $2) {
                            if (CSS.Lists.colorNames.hasOwnProperty($2)) {
                                return ($1 ? $1 : "rgba(") + CSS.Lists.colorNames[$2] + ($1 ? "" : ",1)");
                            }
                            return $1 + $2;
                        });
                    },
                    cleanRootPropertyValue: function cleanRootPropertyValue(rootProperty, rootPropertyValue) {
                        if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
                            rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
                        }
                        if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
                            rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
                        }
                        return rootPropertyValue;
                    },
                    extractValue: function extractValue(fullHookName, rootPropertyValue) {
                        var hookData = CSS.Hooks.registered[fullHookName];
                        if (hookData) {
                            var hookRoot = hookData[0],
                                hookPosition = hookData[1];
                            rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
                            return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
                        } else {
                            return rootPropertyValue;
                        }
                    },
                    injectValue: function injectValue(fullHookName, hookValue, rootPropertyValue) {
                        var hookData = CSS.Hooks.registered[fullHookName];
                        if (hookData) {
                            var hookRoot = hookData[0],
                                hookPosition = hookData[1],
                                rootPropertyValueParts, rootPropertyValueUpdated;
                            rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
                            rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
                            rootPropertyValueParts[hookPosition] = hookValue;
                            rootPropertyValueUpdated = rootPropertyValueParts.join(" ");
                            return rootPropertyValueUpdated;
                        } else {
                            return rootPropertyValue;
                        }
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function clip(type, element, propertyValue) {
                            switch (type) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var extracted;
                                    if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
                                        extracted = propertyValue;
                                    } else {
                                        extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);
                                        extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
                                    }
                                    return extracted;
                                case "inject":
                                    return "rect(" + propertyValue + ")";
                            }
                        },
                        blur: function blur(type, element, propertyValue) {
                            switch (type) {
                                case "name":
                                    return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var extracted = parseFloat(propertyValue);
                                    if (!(extracted || extracted === 0)) {
                                        var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        if (blurComponent) {
                                            extracted = blurComponent[1];
                                        } else {
                                            extracted = 0;
                                        }
                                    }
                                    return extracted;
                                case "inject":
                                    if (!parseFloat(propertyValue)) {
                                        return "none";
                                    } else {
                                        return "blur(" + propertyValue + ")";
                                    }
                            }
                        },
                        opacity: function opacity(type, element, propertyValue) {
                            if (IE <= 8) {
                                switch (type) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);
                                        if (extracted) {
                                            propertyValue = extracted[1] / 100;
                                        } else {
                                            propertyValue = 1;
                                        }
                                        return propertyValue;
                                    case "inject":
                                        element.style.zoom = 1;
                                        if (parseFloat(propertyValue) >= 1) {
                                            return "";
                                        } else {
                                            return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
                                        }
                                }
                            } else {
                                switch (type) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                        return propertyValue;
                                    case "inject":
                                        return propertyValue;
                                }
                            }
                        }
                    },
                    register: function register() {
                        if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
                            CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
                        }
                        for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
                            (function() {
                                var transformName = CSS.Lists.transformsBase[i];
                                CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
                                    switch (type) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
                                                return (/^scale/i.test(transformName) ? 1 : 0);
                                            }
                                            return Data(element).transformCache[transformName].replace(/[()]/g, "");
                                        case "inject":
                                            var invalid = false;
                                            switch (transformName.substr(0, transformName.length - 1)) {
                                                case "translate":
                                                    invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
                                                        propertyValue = 1;
                                                    }
                                                    invalid = !/(\d)$/i.test(propertyValue);
                                                    break;
                                                case "skew":
                                                    invalid = !/(deg|\d)$/i.test(propertyValue);
                                                    break;
                                                case "rotate":
                                                    invalid = !/(deg|\d)$/i.test(propertyValue);
                                                    break;
                                            }
                                            if (!invalid) {
                                                Data(element).transformCache[transformName] = "(" + propertyValue + ")";
                                            }
                                            return Data(element).transformCache[transformName];
                                    }
                                };
                            })();
                        }
                        for (var j = 0; j < CSS.Lists.colors.length; j++) {
                            (function() {
                                var colorName = CSS.Lists.colors[j];
                                CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
                                    switch (type) {
                                        case "name":
                                            return colorName;
                                        case "extract":
                                            var extracted;
                                            if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
                                                extracted = propertyValue;
                                            } else {
                                                var converted, colorNames = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                if (/^[A-z]+$/i.test(propertyValue)) {
                                                    if (colorNames[propertyValue] !== undefined) {
                                                        converted = colorNames[propertyValue];
                                                    } else {
                                                        converted = colorNames.black;
                                                    }
                                                } else if (CSS.RegEx.isHex.test(propertyValue)) {
                                                    converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
                                                } else if (!/^rgba?\(/i.test(propertyValue)) {
                                                    converted = colorNames.black;
                                                }
                                                extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                            }
                                            if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
                                                extracted += " 1";
                                            }
                                            return extracted;
                                        case "inject":
                                            if (/^rgb/.test(propertyValue)) {
                                                return propertyValue;
                                            }
                                            if (IE <= 8) {
                                                if (propertyValue.split(" ").length === 4) {
                                                    propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
                                                }
                                            } else if (propertyValue.split(" ").length === 3) {
                                                propertyValue += " 1";
                                            }
                                            return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                                    }
                                };
                            })();
                        }

                        function augmentDimension(name, element, wantInner) {
                            var isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";
                            if (isBorderBox === (wantInner || false)) {
                                var i, value, augment = 0,
                                    sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
                                    fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];
                                for (i = 0; i < fields.length; i++) {
                                    value = parseFloat(CSS.getPropertyValue(element, fields[i]));
                                    if (!isNaN(value)) {
                                        augment += value;
                                    }
                                }
                                return wantInner ? -augment : augment;
                            }
                            return 0;
                        }

                        function getDimension(name, wantInner) {
                            return function(type, element, propertyValue) {
                                switch (type) {
                                    case "name":
                                        return name;
                                    case "extract":
                                        return parseFloat(propertyValue) + augmentDimension(name, element, wantInner);
                                    case "inject":
                                        return parseFloat(propertyValue) - augmentDimension(name, element, wantInner) + "px";
                                }
                            };
                        }
                        CSS.Normalizations.registered.innerWidth = getDimension("width", true);
                        CSS.Normalizations.registered.innerHeight = getDimension("height", true);
                        CSS.Normalizations.registered.outerWidth = getDimension("width");
                        CSS.Normalizations.registered.outerHeight = getDimension("height");
                    }
                },
                Names: {
                    camelCase: function camelCase(property) {
                        return property.replace(/-(\w)/g, function(match, subMatch) {
                            return subMatch.toUpperCase();
                        });
                    },
                    SVGAttribute: function SVGAttribute(property) {
                        var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        if (IE || Velocity.State.isAndroid && !Velocity.State.isChrome) {
                            SVGAttributes += "|transform";
                        }
                        return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
                    },
                    prefixCheck: function prefixCheck(property) {
                        if (Velocity.State.prefixMatches[property]) {
                            return [Velocity.State.prefixMatches[property], true];
                        } else {
                            var vendors = ["", "Webkit", "Moz", "ms", "O"];
                            for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
                                var propertyPrefixed;
                                if (i === 0) {
                                    propertyPrefixed = property;
                                } else {
                                    propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
                                        return match.toUpperCase();
                                    });
                                }
                                if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
                                    Velocity.State.prefixMatches[property] = propertyPrefixed;
                                    return [propertyPrefixed, true];
                                }
                            }
                            return [property, false];
                        }
                    }
                },
                Values: {
                    hexToRgb: function hexToRgb(hex) {
                        var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                            rgbParts;
                        hex = hex.replace(shortformRegex, function(m, r, g, b) {
                            return r + r + g + g + b + b;
                        });
                        rgbParts = longformRegex.exec(hex);
                        return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
                    },
                    isCSSNullValue: function isCSSNullValue(value) {
                        return !value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value);
                    },
                    getUnitType: function getUnitType(property) {
                        if (/^(rotate|skew)/i.test(property)) {
                            return "deg";
                        } else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
                            return "";
                        } else {
                            return "px";
                        }
                    },
                    getDisplayType: function getDisplayType(element) {
                        var tagName = element && element.tagName.toString().toLowerCase();
                        if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
                            return "inline";
                        } else if (/^(li)$/i.test(tagName)) {
                            return "list-item";
                        } else if (/^(tr)$/i.test(tagName)) {
                            return "table-row";
                        } else if (/^(table)$/i.test(tagName)) {
                            return "table";
                        } else if (/^(tbody)$/i.test(tagName)) {
                            return "table-row-group";
                        } else {
                            return "block";
                        }
                    },
                    addClass: function addClass(element, className) {
                        if (element) {
                            if (element.classList) {
                                element.classList.add(className);
                            } else if (Type.isString(element.className)) {
                                element.className += (element.className.length ? " " : "") + className;
                            } else {
                                var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";
                                element.setAttribute("class", currentClass + (currentClass ? " " : "") + className);
                            }
                        }
                    },
                    removeClass: function removeClass(element, className) {
                        if (element) {
                            if (element.classList) {
                                element.classList.remove(className);
                            } else if (Type.isString(element.className)) {
                                element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                            } else {
                                var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";
                                element.setAttribute("class", currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|$)", "gi"), " "));
                            }
                        }
                    }
                },
                getPropertyValue: function getPropertyValue(element, property, rootPropertyValue, forceStyleLookup) {
                    function computePropertyValue(element, property) {
                        var computedValue = 0;
                        if (IE <= 8) {
                            computedValue = $.css(element, property);
                        } else {
                            var toggleDisplay = false;
                            if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
                                toggleDisplay = true;
                                CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
                            }
                            var revertDisplay = function revertDisplay() {
                                if (toggleDisplay) {
                                    CSS.setPropertyValue(element, "display", "none");
                                }
                            };
                            if (!forceStyleLookup) {
                                if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
                                    var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
                                    revertDisplay();
                                    return contentBoxHeight;
                                } else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
                                    var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
                                    revertDisplay();
                                    return contentBoxWidth;
                                }
                            }
                            var computedStyle;
                            if (Data(element) === undefined) {
                                computedStyle = window.getComputedStyle(element, null);
                            } else if (!Data(element).computedStyle) {
                                computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null);
                            } else {
                                computedStyle = Data(element).computedStyle;
                            }
                            if (property === "borderColor") {
                                property = "borderTopColor";
                            }
                            if (IE === 9 && property === "filter") {
                                computedValue = computedStyle.getPropertyValue(property);
                            } else {
                                computedValue = computedStyle[property];
                            }
                            if (computedValue === "" || computedValue === null) {
                                computedValue = element.style[property];
                            }
                            revertDisplay();
                        }
                        if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
                            var position = computePropertyValue(element, "position");
                            if (position === "fixed" || position === "absolute" && /top|left/i.test(property)) {
                                computedValue = $(element).position()[property] + "px";
                            }
                        }
                        return computedValue;
                    }
                    var propertyValue;
                    if (CSS.Hooks.registered[property]) {
                        var hook = property,
                            hookRoot = CSS.Hooks.getRoot(hook);
                        if (rootPropertyValue === undefined) {
                            rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]);
                        }
                        if (CSS.Normalizations.registered[hookRoot]) {
                            rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
                        }
                        propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);
                    } else if (CSS.Normalizations.registered[property]) {
                        var normalizedPropertyName, normalizedPropertyValue;
                        normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);
                        if (normalizedPropertyName !== "transform") {
                            normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]);
                            if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
                                normalizedPropertyValue = CSS.Hooks.templates[property][1];
                            }
                        }
                        propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
                    }
                    if (!/^[\d-]/.test(propertyValue)) {
                        var data = Data(element);
                        if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
                            if (/^(height|width)$/i.test(property)) {
                                try {
                                    propertyValue = element.getBBox()[property];
                                } catch (error) {
                                    propertyValue = 0;
                                }
                            } else {
                                propertyValue = element.getAttribute(property);
                            }
                        } else {
                            propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]);
                        }
                    }
                    if (CSS.Values.isCSSNullValue(propertyValue)) {
                        propertyValue = 0;
                    }
                    if (Velocity.debug >= 2) {
                        console.log("Get " + property + ": " + propertyValue);
                    }
                    return propertyValue;
                },
                setPropertyValue: function setPropertyValue(element, property, propertyValue, rootPropertyValue, scrollData) {
                    var propertyName = property;
                    if (property === "scroll") {
                        if (scrollData.container) {
                            scrollData.container["scroll" + scrollData.direction] = propertyValue;
                        } else {
                            if (scrollData.direction === "Left") {
                                window.scrollTo(propertyValue, scrollData.alternateValue);
                            } else {
                                window.scrollTo(scrollData.alternateValue, propertyValue);
                            }
                        }
                    } else {
                        if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
                            CSS.Normalizations.registered[property]("inject", element, propertyValue);
                            propertyName = "transform";
                            propertyValue = Data(element).transformCache[property];
                        } else {
                            if (CSS.Hooks.registered[property]) {
                                var hookName = property,
                                    hookRoot = CSS.Hooks.getRoot(property);
                                rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot);
                                propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
                                property = hookRoot;
                            }
                            if (CSS.Normalizations.registered[property]) {
                                propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
                                property = CSS.Normalizations.registered[property]("name", element);
                            }
                            propertyName = CSS.Names.prefixCheck(property)[0];
                            if (IE <= 8) {
                                try {
                                    element.style[propertyName] = propertyValue;
                                } catch (error) {
                                    if (Velocity.debug) {
                                        console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
                                    }
                                }
                            } else {
                                var data = Data(element);
                                if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
                                    element.setAttribute(property, propertyValue);
                                } else {
                                    element.style[propertyName] = propertyValue;
                                }
                            }
                            if (Velocity.debug >= 2) {
                                console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
                            }
                        }
                    }
                    return [propertyName, propertyValue];
                },
                flushTransformCache: function flushTransformCache(element) {
                    var transformString = "",
                        data = Data(element);
                    if ((IE || Velocity.State.isAndroid && !Velocity.State.isChrome) && data && data.isSVG) {
                        var getTransformFloat = function getTransformFloat(transformProperty) {
                            return parseFloat(CSS.getPropertyValue(element, transformProperty));
                        };
                        var SVGTransforms = {
                            translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
                            skewX: [getTransformFloat("skewX")],
                            skewY: [getTransformFloat("skewY")],
                            scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
                            rotate: [getTransformFloat("rotateZ"), 0, 0]
                        };
                        $.each(Data(element).transformCache, function(transformName) {
                            if (/^translate/i.test(transformName)) {
                                transformName = "translate";
                            } else if (/^scale/i.test(transformName)) {
                                transformName = "scale";
                            } else if (/^rotate/i.test(transformName)) {
                                transformName = "rotate";
                            }
                            if (SVGTransforms[transformName]) {
                                transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";
                                delete SVGTransforms[transformName];
                            }
                        });
                    } else {
                        var transformValue, perspective;
                        $.each(Data(element).transformCache, function(transformName) {
                            transformValue = Data(element).transformCache[transformName];
                            if (transformName === "transformPerspective") {
                                perspective = transformValue;
                                return true;
                            }
                            if (IE === 9 && transformName === "rotateZ") {
                                transformName = "rotate";
                            }
                            transformString += transformName + transformValue + " ";
                        });
                        if (perspective) {
                            transformString = "perspective" + perspective + " " + transformString;
                        }
                    }
                    CSS.setPropertyValue(element, "transform", transformString);
                }
            };
            CSS.Hooks.register();
            CSS.Normalizations.register();
            Velocity.hook = function(elements, arg2, arg3) {
                var value;
                elements = sanitizeElements(elements);
                $.each(elements, function(i, element) {
                    if (Data(element) === undefined) {
                        Velocity.init(element);
                    }
                    if (arg3 === undefined) {
                        if (value === undefined) {
                            value = CSS.getPropertyValue(element, arg2);
                        }
                    } else {
                        var adjustedSet = CSS.setPropertyValue(element, arg2, arg3);
                        if (adjustedSet[0] === "transform") {
                            Velocity.CSS.flushTransformCache(element);
                        }
                        value = adjustedSet;
                    }
                });
                return value;
            };
            var animate = function animate() {
                var opts;

                function getChain() {
                    if (isUtility) {
                        return promiseData.promise || null;
                    } else {
                        return elementsWrapped;
                    }
                }
                var syntacticSugar = arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || Type.isString(arguments[0].properties)),
                    isUtility, elementsWrapped, argumentIndex;
                var elements, propertiesMap, options;
                if (Type.isWrapped(this)) {
                    isUtility = false;
                    argumentIndex = 0;
                    elements = this;
                    elementsWrapped = this;
                } else {
                    isUtility = true;
                    argumentIndex = 1;
                    elements = syntacticSugar ? arguments[0].elements || arguments[0].e : arguments[0];
                }
                var promiseData = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                if (isUtility && Velocity.Promise) {
                    promiseData.promise = new Velocity.Promise(function(resolve, reject) {
                        promiseData.resolver = resolve;
                        promiseData.rejecter = reject;
                    });
                }
                if (syntacticSugar) {
                    propertiesMap = arguments[0].properties || arguments[0].p;
                    options = arguments[0].options || arguments[0].o;
                } else {
                    propertiesMap = arguments[argumentIndex];
                    options = arguments[argumentIndex + 1];
                }
                elements = sanitizeElements(elements);
                if (!elements) {
                    if (promiseData.promise) {
                        if (!propertiesMap || !options || options.promiseRejectEmpty !== false) {
                            promiseData.rejecter();
                        } else {
                            promiseData.resolver();
                        }
                    }
                    return;
                }
                var elementsLength = elements.length,
                    elementsIndex = 0;
                if (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
                    var startingArgumentPosition = argumentIndex + 1;
                    options = {};
                    for (var i = startingArgumentPosition; i < arguments.length; i++) {
                        if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
                            options.duration = arguments[i];
                        } else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
                            options.easing = arguments[i];
                        } else if (Type.isFunction(arguments[i])) {
                            options.complete = arguments[i];
                        }
                    }
                }
                var action;
                switch (propertiesMap) {
                    case "scroll":
                        action = "scroll";
                        break;
                    case "reverse":
                        action = "reverse";
                        break;
                    case "pause":
                        var currentTime = new Date().getTime();
                        $.each(elements, function(i, element) {
                            pauseDelayOnElement(element, currentTime);
                        });
                        $.each(Velocity.State.calls, function(i, activeCall) {
                            var found = false;
                            if (activeCall) {
                                $.each(activeCall[1], function(k, activeElement) {
                                    var queueName = options === undefined ? "" : options;
                                    if (queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)) {
                                        return true;
                                    }
                                    $.each(elements, function(l, element) {
                                        if (element === activeElement) {
                                            activeCall[5] = {
                                                resume: false
                                            };
                                            found = true;
                                            return false;
                                        }
                                    });
                                    if (found) {
                                        return false;
                                    }
                                });
                            }
                        });
                        return getChain();
                    case "resume":
                        $.each(elements, function(i, element) {
                            resumeDelayOnElement(element, currentTime);
                        });
                        $.each(Velocity.State.calls, function(i, activeCall) {
                            var found = false;
                            if (activeCall) {
                                $.each(activeCall[1], function(k, activeElement) {
                                    var queueName = options === undefined ? "" : options;
                                    if (queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)) {
                                        return true;
                                    }
                                    if (!activeCall[5]) {
                                        return true;
                                    }
                                    $.each(elements, function(l, element) {
                                        if (element === activeElement) {
                                            activeCall[5].resume = true;
                                            found = true;
                                            return false;
                                        }
                                    });
                                    if (found) {
                                        return false;
                                    }
                                });
                            }
                        });
                        return getChain();
                    case "finish":
                    case "finishAll":
                    case "stop":
                        $.each(elements, function(i, element) {
                            if (Data(element) && Data(element).delayTimer) {
                                clearTimeout(Data(element).delayTimer.setTimeout);
                                if (Data(element).delayTimer.next) {
                                    Data(element).delayTimer.next();
                                }
                                delete Data(element).delayTimer;
                            }
                            if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
                                $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
                                    if (Type.isFunction(item)) {
                                        item();
                                    }
                                });
                                $.queue(element, Type.isString(options) ? options : "", []);
                            }
                        });
                        var callsToStop = [];
                        $.each(Velocity.State.calls, function(i, activeCall) {
                            if (activeCall) {
                                $.each(activeCall[1], function(k, activeElement) {
                                    var queueName = options === undefined ? "" : options;
                                    if (queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)) {
                                        return true;
                                    }
                                    $.each(elements, function(l, element) {
                                        if (element === activeElement) {
                                            if (options === true || Type.isString(options)) {
                                                $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
                                                    if (Type.isFunction(item)) {
                                                        item(null, true);
                                                    }
                                                });
                                                $.queue(element, Type.isString(options) ? options : "", []);
                                            }
                                            if (propertiesMap === "stop") {
                                                var data = Data(element);
                                                if (data && data.tweensContainer && queueName !== false) {
                                                    $.each(data.tweensContainer, function(m, activeTween) {
                                                        activeTween.endValue = activeTween.currentValue;
                                                    });
                                                }
                                                callsToStop.push(i);
                                            } else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
                                                activeCall[2].duration = 1;
                                            }
                                        }
                                    });
                                });
                            }
                        });
                        if (propertiesMap === "stop") {
                            $.each(callsToStop, function(i, j) {
                                completeCall(j, true);
                            });
                            if (promiseData.promise) {
                                promiseData.resolver(elements);
                            }
                        }
                        return getChain();
                    default:
                        if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
                            action = "start";
                        } else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
                            opts = $.extend({}, options);
                            var durationOriginal = opts.duration,
                                delayOriginal = opts.delay || 0;
                            if (opts.backwards === true) {
                                elements = $.extend(true, [], elements).reverse();
                            }
                            $.each(elements, function(elementIndex, element) {
                                if (parseFloat(opts.stagger)) {
                                    opts.delay = delayOriginal + parseFloat(opts.stagger) * elementIndex;
                                } else if (Type.isFunction(opts.stagger)) {
                                    opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
                                }
                                if (opts.drag) {
                                    opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);
                                    opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
                                }
                                Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
                            });
                            return getChain();
                        } else {
                            var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            if (promiseData.promise) {
                                promiseData.rejecter(new Error(abortError));
                            } else if (window.console) {
                                console.log(abortError);
                            }
                            return getChain();
                        }
                }
                var callUnitConversionData = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                };
                var call = [];

                function processElement(element, elementArrayIndex) {
                    var opts = $.extend({}, Velocity.defaults, options),
                        tweensContainer = {},
                        elementUnitConversionData;
                    if (Data(element) === undefined) {
                        Velocity.init(element);
                    }
                    if (parseFloat(opts.delay) && opts.queue !== false) {
                        $.queue(element, opts.queue, function(next) {
                            Velocity.velocityQueueEntryFlag = true;
                            var callIndex = Velocity.State.delayedElements.count++;
                            Velocity.State.delayedElements[callIndex] = element;
                            var delayComplete = (function(index) {
                                return function() {
                                    Velocity.State.delayedElements[index] = false;
                                    next();
                                };
                            })(callIndex);
                            Data(element).delayBegin = new Date().getTime();
                            Data(element).delay = parseFloat(opts.delay);
                            Data(element).delayTimer = {
                                setTimeout: setTimeout(next, parseFloat(opts.delay)),
                                next: delayComplete
                            };
                        });
                    }
                    switch (opts.duration.toString().toLowerCase()) {
                        case "fast":
                            opts.duration = 200;
                            break;
                        case "normal":
                            opts.duration = DURATION_DEFAULT;
                            break;
                        case "slow":
                            opts.duration = 600;
                            break;
                        default:
                            opts.duration = parseFloat(opts.duration) || 1;
                    }
                    if (Velocity.mock !== false) {
                        if (Velocity.mock === true) {
                            opts.duration = opts.delay = 1;
                        } else {
                            opts.duration *= parseFloat(Velocity.mock) || 1;
                            opts.delay *= parseFloat(Velocity.mock) || 1;
                        }
                    }
                    opts.easing = getEasing(opts.easing, opts.duration);
                    if (opts.begin && !Type.isFunction(opts.begin)) {
                        opts.begin = null;
                    }
                    if (opts.progress && !Type.isFunction(opts.progress)) {
                        opts.progress = null;
                    }
                    if (opts.complete && !Type.isFunction(opts.complete)) {
                        opts.complete = null;
                    }
                    if (opts.display !== undefined && opts.display !== null) {
                        opts.display = opts.display.toString().toLowerCase();
                        if (opts.display === "auto") {
                            opts.display = Velocity.CSS.Values.getDisplayType(element);
                        }
                    }
                    if (opts.visibility !== undefined && opts.visibility !== null) {
                        opts.visibility = opts.visibility.toString().toLowerCase();
                    }
                    opts.mobileHA = opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread;

                    function buildQueue(next) {
                        var data, lastTweensContainer;
                        if (opts.begin && elementsIndex === 0) {
                            try {
                                opts.begin.call(elements, elements);
                            } catch (error) {
                                setTimeout(function() {
                                    throw error;
                                }, 1);
                            }
                        }
                        if (action === "scroll") {
                            var scrollDirection = /^x$/i.test(opts.axis) ? "Left" : "Top",
                                scrollOffset = parseFloat(opts.offset) || 0,
                                scrollPositionCurrent, scrollPositionCurrentAlternate, scrollPositionEnd;
                            if (opts.container) {
                                if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
                                    opts.container = opts.container[0] || opts.container;
                                    scrollPositionCurrent = opts.container["scroll" + scrollDirection];
                                    scrollPositionEnd = scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()] + scrollOffset;
                                } else {
                                    opts.container = null;
                                }
                            } else {
                                scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]];
                                scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]];
                                scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset;
                            }
                            tweensContainer = {
                                scroll: {
                                    rootPropertyValue: false,
                                    startValue: scrollPositionCurrent,
                                    currentValue: scrollPositionCurrent,
                                    endValue: scrollPositionEnd,
                                    unitType: "",
                                    easing: opts.easing,
                                    scrollData: {
                                        container: opts.container,
                                        direction: scrollDirection,
                                        alternateValue: scrollPositionCurrentAlternate
                                    }
                                },
                                element: element
                            };
                            if (Velocity.debug) {
                                console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
                            }
                        } else if (action === "reverse") {
                            data = Data(element);
                            if (!data) {
                                return;
                            }
                            if (!data.tweensContainer) {
                                $.dequeue(element, opts.queue);
                                return;
                            } else {
                                if (data.opts.display === "none") {
                                    data.opts.display = "auto";
                                }
                                if (data.opts.visibility === "hidden") {
                                    data.opts.visibility = "visible";
                                }
                                data.opts.loop = false;
                                data.opts.begin = null;
                                data.opts.complete = null;
                                if (!options.easing) {
                                    delete opts.easing;
                                }
                                if (!options.duration) {
                                    delete opts.duration;
                                }
                                opts = $.extend({}, data.opts, opts);
                                lastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);
                                for (var lastTween in lastTweensContainer) {
                                    if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
                                        var lastStartValue = lastTweensContainer[lastTween].startValue;
                                        lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
                                        lastTweensContainer[lastTween].endValue = lastStartValue;
                                        if (!Type.isEmptyObject(options)) {
                                            lastTweensContainer[lastTween].easing = opts.easing;
                                        }
                                        if (Velocity.debug) {
                                            console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
                                        }
                                    }
                                }
                                tweensContainer = lastTweensContainer;
                            }
                        } else if (action === "start") {
                            data = Data(element);
                            if (data && data.tweensContainer && data.isAnimating === true) {
                                lastTweensContainer = data.tweensContainer;
                            }
                            var parsePropertyValue = function parsePropertyValue(valueData, skipResolvingEasing) {
                                var endValue, easing, startValue;
                                if (Type.isFunction(valueData)) {
                                    valueData = valueData.call(element, elementArrayIndex, elementsLength);
                                }
                                if (Type.isArray(valueData)) {
                                    endValue = valueData[0];
                                    if (!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1]) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
                                        startValue = valueData[1];
                                    } else if (Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]] || Type.isArray(valueData[1])) {
                                        easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);
                                        startValue = valueData[2];
                                    } else {
                                        startValue = valueData[1] || valueData[2];
                                    }
                                } else {
                                    endValue = valueData;
                                }
                                if (!skipResolvingEasing) {
                                    easing = easing || opts.easing;
                                }
                                if (Type.isFunction(endValue)) {
                                    endValue = endValue.call(element, elementArrayIndex, elementsLength);
                                }
                                if (Type.isFunction(startValue)) {
                                    startValue = startValue.call(element, elementArrayIndex, elementsLength);
                                }
                                return [endValue || 0, easing, startValue];
                            };
                            var fixPropertyValue = function fixPropertyValue(property, valueData) {
                                var rootProperty = CSS.Hooks.getRoot(property),
                                    rootPropertyValue = false,
                                    endValue = valueData[0],
                                    easing = valueData[1],
                                    startValue = valueData[2],
                                    pattern;
                                if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
                                    if (Velocity.debug) {
                                        console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
                                    }
                                    return;
                                }
                                if ((opts.display !== undefined && opts.display !== null && opts.display !== "none" || opts.visibility !== undefined && opts.visibility !== "hidden") && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
                                    startValue = 0;
                                }
                                if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
                                    if (startValue === undefined) {
                                        startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
                                    }
                                    rootPropertyValue = data.rootPropertyValueCache[rootProperty];
                                } else {
                                    if (CSS.Hooks.registered[property]) {
                                        if (startValue === undefined) {
                                            rootPropertyValue = CSS.getPropertyValue(element, rootProperty);
                                            startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
                                        } else {
                                            rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
                                        }
                                    } else if (startValue === undefined) {
                                        startValue = CSS.getPropertyValue(element, property);
                                    }
                                }
                                var separatedValue, endValueUnitType, startValueUnitType, operator = false;
                                var separateValue = function separateValue(property, value) {
                                    var unitType, numericValue;
                                    numericValue = (value || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(match) {
                                        unitType = match;
                                        return "";
                                    });
                                    if (!unitType) {
                                        unitType = CSS.Values.getUnitType(property);
                                    }
                                    return [numericValue, unitType];
                                };
                                if (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {
                                    pattern = "";
                                    var iStart = 0,
                                        iEnd = 0,
                                        aStart = [],
                                        aEnd = [],
                                        inCalc = 0,
                                        inRGB = 0,
                                        inRGBA = 0;
                                    startValue = CSS.Hooks.fixColors(startValue);
                                    endValue = CSS.Hooks.fixColors(endValue);
                                    while (iStart < startValue.length && iEnd < endValue.length) {
                                        var cStart = startValue[iStart],
                                            cEnd = endValue[iEnd];
                                        if (/[\d\.-]/.test(cStart) && /[\d\.-]/.test(cEnd)) {
                                            var tStart = cStart,
                                                tEnd = cEnd,
                                                dotStart = ".",
                                                dotEnd = ".";
                                            while (++iStart < startValue.length) {
                                                cStart = startValue[iStart];
                                                if (cStart === dotStart) {
                                                    dotStart = "..";
                                                } else if (!/\d/.test(cStart)) {
                                                    break;
                                                }
                                                tStart += cStart;
                                            }
                                            while (++iEnd < endValue.length) {
                                                cEnd = endValue[iEnd];
                                                if (cEnd === dotEnd) {
                                                    dotEnd = "..";
                                                } else if (!/\d/.test(cEnd)) {
                                                    break;
                                                }
                                                tEnd += cEnd;
                                            }
                                            var uStart = CSS.Hooks.getUnit(startValue, iStart),
                                                uEnd = CSS.Hooks.getUnit(endValue, iEnd);
                                            iStart += uStart.length;
                                            iEnd += uEnd.length;
                                            if (uStart === uEnd) {
                                                if (tStart === tEnd) {
                                                    pattern += tStart + uStart;
                                                } else {
                                                    pattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;
                                                    aStart.push(parseFloat(tStart));
                                                    aEnd.push(parseFloat(tEnd));
                                                }
                                            } else {
                                                var nStart = parseFloat(tStart),
                                                    nEnd = parseFloat(tEnd);
                                                pattern += (inCalc < 5 ? "calc" : "") + "(" + (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart + " + " + (nEnd ? "{" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? "!" : "") + "}" : "0") + uEnd + ")";
                                                if (nStart) {
                                                    aStart.push(nStart);
                                                    aEnd.push(0);
                                                }
                                                if (nEnd) {
                                                    aStart.push(0);
                                                    aEnd.push(nEnd);
                                                }
                                            }
                                        } else if (cStart === cEnd) {
                                            pattern += cStart;
                                            iStart++;
                                            iEnd++;
                                            if (inCalc === 0 && cStart === "c" || inCalc === 1 && cStart === "a" || inCalc === 2 && cStart === "l" || inCalc === 3 && cStart === "c" || inCalc >= 4 && cStart === "(") {
                                                inCalc++;
                                            } else if (inCalc && inCalc < 5 || inCalc >= 4 && cStart === ")" && --inCalc < 5) {
                                                inCalc = 0;
                                            }
                                            if (inRGB === 0 && cStart === "r" || inRGB === 1 && cStart === "g" || inRGB === 2 && cStart === "b" || inRGB === 3 && cStart === "a" || inRGB >= 3 && cStart === "(") {
                                                if (inRGB === 3 && cStart === "a") {
                                                    inRGBA = 1;
                                                }
                                                inRGB++;
                                            } else if (inRGBA && cStart === ",") {
                                                if (++inRGBA > 3) {
                                                    inRGB = inRGBA = 0;
                                                }
                                            } else if (inRGBA && inRGB < (inRGBA ? 5 : 4) || inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {
                                                inRGB = inRGBA = 0;
                                            }
                                        } else {
                                            inCalc = 0;
                                            break;
                                        }
                                    }
                                    if (iStart !== startValue.length || iEnd !== endValue.length) {
                                        if (Velocity.debug) {
                                            console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]");
                                        }
                                        pattern = undefined;
                                    }
                                    if (pattern) {
                                        if (aStart.length) {
                                            if (Velocity.debug) {
                                                console.log("Pattern found \"" + pattern + "\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]");
                                            }
                                            startValue = aStart;
                                            endValue = aEnd;
                                            endValueUnitType = startValueUnitType = "";
                                        } else {
                                            pattern = undefined;
                                        }
                                    }
                                }
                                if (!pattern) {
                                    separatedValue = separateValue(property, startValue);
                                    startValue = separatedValue[0];
                                    startValueUnitType = separatedValue[1];
                                    separatedValue = separateValue(property, endValue);
                                    endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
                                        operator = subMatch;
                                        return "";
                                    });
                                    endValueUnitType = separatedValue[1];
                                    startValue = parseFloat(startValue) || 0;
                                    endValue = parseFloat(endValue) || 0;
                                    if (endValueUnitType === "%") {
                                        if (/^(fontSize|lineHeight)$/.test(property)) {
                                            endValue = endValue / 100;
                                            endValueUnitType = "em";
                                        } else if (/^scale/.test(property)) {
                                            endValue = endValue / 100;
                                            endValueUnitType = "";
                                        } else if (/(Red|Green|Blue)$/i.test(property)) {
                                            endValue = endValue / 100 * 255;
                                            endValueUnitType = "";
                                        }
                                    }
                                }
                                var calculateUnitRatios = function calculateUnitRatios() {
                                    var sameRatioIndicators = {
                                            myParent: element.parentNode || document.body,
                                            position: CSS.getPropertyValue(element, "position"),
                                            fontSize: CSS.getPropertyValue(element, "fontSize")
                                        },
                                        samePercentRatio = sameRatioIndicators.position === callUnitConversionData.lastPosition && sameRatioIndicators.myParent === callUnitConversionData.lastParent,
                                        sameEmRatio = sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize;
                                    callUnitConversionData.lastParent = sameRatioIndicators.myParent;
                                    callUnitConversionData.lastPosition = sameRatioIndicators.position;
                                    callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;
                                    var measurement = 100,
                                        unitRatios = {};
                                    if (!sameEmRatio || !samePercentRatio) {
                                        var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");
                                        Velocity.init(dummy);
                                        sameRatioIndicators.myParent.appendChild(dummy);
                                        $.each(["overflow", "overflowX", "overflowY"], function(i, property) {
                                            Velocity.CSS.setPropertyValue(dummy, property, "hidden");
                                        });
                                        Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
                                        Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
                                        Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");
                                        $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
                                            Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
                                        });
                                        Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");
                                        unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement;
                                        unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement;
                                        unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement;
                                        sameRatioIndicators.myParent.removeChild(dummy);
                                    } else {
                                        unitRatios.emToPx = callUnitConversionData.lastEmToPx;
                                        unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
                                        unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
                                    }
                                    if (callUnitConversionData.remToPx === null) {
                                        callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16;
                                    }
                                    if (callUnitConversionData.vwToPx === null) {
                                        callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100;
                                        callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100;
                                    }
                                    unitRatios.remToPx = callUnitConversionData.remToPx;
                                    unitRatios.vwToPx = callUnitConversionData.vwToPx;
                                    unitRatios.vhToPx = callUnitConversionData.vhToPx;
                                    if (Velocity.debug >= 1) {
                                        console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
                                    }
                                    return unitRatios;
                                };
                                if (/[\/*]/.test(operator)) {
                                    endValueUnitType = startValueUnitType;
                                } else if (startValueUnitType !== endValueUnitType && startValue !== 0) {
                                    if (endValue === 0) {
                                        endValueUnitType = startValueUnitType;
                                    } else {
                                        elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();
                                        var axis = /margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x" ? "x" : "y";
                                        switch (startValueUnitType) {
                                            case "%":
                                                startValue *= axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
                                        }
                                        switch (endValueUnitType) {
                                            case "%":
                                                startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
                                        }
                                    }
                                }
                                switch (operator) {
                                    case "+":
                                        endValue = startValue + endValue;
                                        break;
                                    case "-":
                                        endValue = startValue - endValue;
                                        break;
                                    case "*":
                                        endValue = startValue * endValue;
                                        break;
                                    case "/":
                                        endValue = startValue / endValue;
                                        break;
                                }
                                tweensContainer[property] = {
                                    rootPropertyValue: rootPropertyValue,
                                    startValue: startValue,
                                    currentValue: startValue,
                                    endValue: endValue,
                                    unitType: endValueUnitType,
                                    easing: easing
                                };
                                if (pattern) {
                                    tweensContainer[property].pattern = pattern;
                                }
                                if (Velocity.debug) {
                                    console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
                                }
                            };
                            for (var property in propertiesMap) {
                                if (!propertiesMap.hasOwnProperty(property)) {
                                    continue;
                                }
                                var propertyName = CSS.Names.camelCase(property),
                                    valueData = parsePropertyValue(propertiesMap[property]);
                                if (_inArray(CSS.Lists.colors, propertyName)) {
                                    var endValue = valueData[0],
                                        easing = valueData[1],
                                        startValue = valueData[2];
                                    if (CSS.RegEx.isHex.test(endValue)) {
                                        var colorComponents = ["Red", "Green", "Blue"],
                                            endValueRGB = CSS.Values.hexToRgb(endValue),
                                            startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;
                                        for (var i = 0; i < colorComponents.length; i++) {
                                            var dataArray = [endValueRGB[i]];
                                            if (easing) {
                                                dataArray.push(easing);
                                            }
                                            if (startValueRGB !== undefined) {
                                                dataArray.push(startValueRGB[i]);
                                            }
                                            fixPropertyValue(propertyName + colorComponents[i], dataArray);
                                        }
                                        continue;
                                    }
                                }
                                fixPropertyValue(propertyName, valueData);
                            }
                            tweensContainer.element = element;
                        }
                        if (tweensContainer.element) {
                            CSS.Values.addClass(element, "velocity-animating");
                            call.push(tweensContainer);
                            data = Data(element);
                            if (data) {
                                if (opts.queue === "") {
                                    data.tweensContainer = tweensContainer;
                                    data.opts = opts;
                                }
                                data.isAnimating = true;
                            }
                            if (elementsIndex === elementsLength - 1) {
                                Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);
                                if (Velocity.State.isTicking === false) {
                                    Velocity.State.isTicking = true;
                                    tick();
                                }
                            } else {
                                elementsIndex++;
                            }
                        }
                    }
                    if (opts.queue === false) {
                        if (opts.delay) {
                            var callIndex = Velocity.State.delayedElements.count++;
                            Velocity.State.delayedElements[callIndex] = element;
                            var delayComplete = (function(index) {
                                return function() {
                                    Velocity.State.delayedElements[index] = false;
                                    buildQueue();
                                };
                            })(callIndex);
                            Data(element).delayBegin = new Date().getTime();
                            Data(element).delay = parseFloat(opts.delay);
                            Data(element).delayTimer = {
                                setTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),
                                next: delayComplete
                            };
                        } else {
                            buildQueue();
                        }
                    } else {
                        $.queue(element, opts.queue, function(next, clearQueue) {
                            if (clearQueue === true) {
                                if (promiseData.promise) {
                                    promiseData.resolver(elements);
                                }
                                return true;
                            }
                            Velocity.velocityQueueEntryFlag = true;
                            buildQueue(next);
                        });
                    }
                    if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
                        $.dequeue(element);
                    }
                }
                $.each(elements, function(i, element) {
                    if (Type.isNode(element)) {
                        processElement(element, i);
                    }
                });
                opts = $.extend({}, Velocity.defaults, options);
                opts.loop = parseInt(opts.loop, 10);
                var reverseCallsCount = opts.loop * 2 - 1;
                if (opts.loop) {
                    for (var x = 0; x < reverseCallsCount; x++) {
                        var reverseOptions = {
                            delay: opts.delay,
                            progress: opts.progress
                        };
                        if (x === reverseCallsCount - 1) {
                            reverseOptions.display = opts.display;
                            reverseOptions.visibility = opts.visibility;
                            reverseOptions.complete = opts.complete;
                        }
                        animate(elements, "reverse", reverseOptions);
                    }
                }
                return getChain();
            };
            Velocity = $.extend(animate, Velocity);
            Velocity.animate = animate;
            var ticker = window.requestAnimationFrame || rAFShim;
            if (!Velocity.State.isMobile && document.hidden !== undefined) {
                var updateTicker = function updateTicker() {
                    if (document.hidden) {
                        ticker = function(callback) {
                            return setTimeout(function() {
                                callback(true);
                            }, 16);
                        };
                        tick();
                    } else {
                        ticker = window.requestAnimationFrame || rAFShim;
                    }
                };
                updateTicker();
                document.addEventListener("visibilitychange", updateTicker);
            }

            function tick(timestamp) {
                if (timestamp) {
                    var timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();
                    var callsLength = Velocity.State.calls.length;
                    if (callsLength > 10000) {
                        Velocity.State.calls = compactSparseArray(Velocity.State.calls);
                        callsLength = Velocity.State.calls.length;
                    }
                    for (var i = 0; i < callsLength; i++) {
                        if (!Velocity.State.calls[i]) {
                            continue;
                        }
                        var callContainer = Velocity.State.calls[i],
                            call = callContainer[0],
                            opts = callContainer[2],
                            timeStart = callContainer[3],
                            firstTick = !!timeStart,
                            tweenDummyValue = null,
                            pauseObject = callContainer[5],
                            millisecondsEllapsed = callContainer[6];
                        if (!timeStart) {
                            timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
                        }
                        if (pauseObject) {
                            if (pauseObject.resume === true) {
                                timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);
                                callContainer[5] = null;
                            } else {
                                continue;
                            }
                        }
                        millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;
                        var percentComplete = Math.min(millisecondsEllapsed / opts.duration, 1);
                        for (var j = 0, callLength = call.length; j < callLength; j++) {
                            var tweensContainer = call[j],
                                element = tweensContainer.element;
                            if (!Data(element)) {
                                continue;
                            }
                            var transformPropertyExists = false;
                            if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
                                if (opts.display === "flex") {
                                    var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                    $.each(flexValues, function(i, flexValue) {
                                        CSS.setPropertyValue(element, "display", flexValue);
                                    });
                                }
                                CSS.setPropertyValue(element, "display", opts.display);
                            }
                            if (opts.visibility !== undefined && opts.visibility !== "hidden") {
                                CSS.setPropertyValue(element, "visibility", opts.visibility);
                            }
                            for (var property in tweensContainer) {
                                if (tweensContainer.hasOwnProperty(property) && property !== "element") {
                                    var tween = tweensContainer[property],
                                        currentValue, easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;
                                    if (Type.isString(tween.pattern)) {
                                        var patternReplace = percentComplete === 1 ? function($0, index, round) {
                                            var result = tween.endValue[index];
                                            return round ? Math.round(result) : result;
                                        } : function($0, index, round) {
                                            var startValue = tween.startValue[index],
                                                tweenDelta = tween.endValue[index] - startValue,
                                                result = startValue + tweenDelta * easing(percentComplete, opts, tweenDelta);
                                            return round ? Math.round(result) : result;
                                        };
                                        currentValue = tween.pattern.replace(/{(\d+)(!)?}/g, patternReplace);
                                    } else if (percentComplete === 1) {
                                        currentValue = tween.endValue;
                                    } else {
                                        var tweenDelta = tween.endValue - tween.startValue;
                                        currentValue = tween.startValue + tweenDelta * easing(percentComplete, opts, tweenDelta);
                                    }
                                    if (!firstTick && currentValue === tween.currentValue) {
                                        continue;
                                    }
                                    tween.currentValue = currentValue;
                                    if (property === "tween") {
                                        tweenDummyValue = currentValue;
                                    } else {
                                        var hookRoot;
                                        if (CSS.Hooks.registered[property]) {
                                            hookRoot = CSS.Hooks.getRoot(property);
                                            var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];
                                            if (rootPropertyValueCache) {
                                                tween.rootPropertyValue = rootPropertyValueCache;
                                            }
                                        }
                                        var adjustedSetData = CSS.setPropertyValue(element, property, tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType), tween.rootPropertyValue, tween.scrollData);
                                        if (CSS.Hooks.registered[property]) {
                                            if (CSS.Normalizations.registered[hookRoot]) {
                                                Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
                                            } else {
                                                Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
                                            }
                                        }
                                        if (adjustedSetData[0] === "transform") {
                                            transformPropertyExists = true;
                                        }
                                    }
                                }
                            }
                            if (opts.mobileHA) {
                                if (Data(element).transformCache.translate3d === undefined) {
                                    Data(element).transformCache.translate3d = "(0px, 0px, 0px)";
                                    transformPropertyExists = true;
                                }
                            }
                            if (transformPropertyExists) {
                                CSS.flushTransformCache(element);
                            }
                        }
                        if (opts.display !== undefined && opts.display !== "none") {
                            Velocity.State.calls[i][2].display = false;
                        }
                        if (opts.visibility !== undefined && opts.visibility !== "hidden") {
                            Velocity.State.calls[i][2].visibility = false;
                        }
                        if (opts.progress) {
                            opts.progress.call(callContainer[1], callContainer[1], percentComplete, Math.max(0, timeStart + opts.duration - timeCurrent), timeStart, tweenDummyValue);
                        }
                        if (percentComplete === 1) {
                            completeCall(i);
                        }
                    }
                }
                if (Velocity.State.isTicking) {
                    ticker(tick);
                }
            }

            function completeCall(callIndex, isStopped) {
                if (!Velocity.State.calls[callIndex]) {
                    return false;
                }
                var call = Velocity.State.calls[callIndex][0],
                    elements = Velocity.State.calls[callIndex][1],
                    opts = Velocity.State.calls[callIndex][2],
                    resolver = Velocity.State.calls[callIndex][4];
                var remainingCallsExist = false;
                for (var i = 0, callLength = call.length; i < callLength; i++) {
                    var element = call[i].element;
                    if (!isStopped && !opts.loop) {
                        if (opts.display === "none") {
                            CSS.setPropertyValue(element, "display", opts.display);
                        }
                        if (opts.visibility === "hidden") {
                            CSS.setPropertyValue(element, "visibility", opts.visibility);
                        }
                    }
                    var data = Data(element);
                    if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
                        if (data) {
                            data.isAnimating = false;
                            data.rootPropertyValueCache = {};
                            var transformHAPropertyExists = false;
                            $.each(CSS.Lists.transforms3D, function(i, transformName) {
                                var defaultValue = /^scale/.test(transformName) ? 1 : 0,
                                    currentValue = data.transformCache[transformName];
                                if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
                                    transformHAPropertyExists = true;
                                    delete data.transformCache[transformName];
                                }
                            });
                            if (opts.mobileHA) {
                                transformHAPropertyExists = true;
                                delete data.transformCache.translate3d;
                            }
                            if (transformHAPropertyExists) {
                                CSS.flushTransformCache(element);
                            }
                            CSS.Values.removeClass(element, "velocity-animating");
                        }
                    }
                    if (!isStopped && opts.complete && !opts.loop && i === callLength - 1) {
                        try {
                            opts.complete.call(elements, elements);
                        } catch (error) {
                            setTimeout(function() {
                                throw error;
                            }, 1);
                        }
                    }
                    if (resolver && opts.loop !== true) {
                        resolver(elements);
                    }
                    if (data && opts.loop === true && !isStopped) {
                        $.each(data.tweensContainer, function(propertyName, tweenContainer) {
                            if (/^rotate/.test(propertyName) && (parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0) {
                                var oldStartValue = tweenContainer.startValue;
                                tweenContainer.startValue = tweenContainer.endValue;
                                tweenContainer.endValue = oldStartValue;
                            }
                            if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
                                tweenContainer.endValue = 0;
                                tweenContainer.startValue = 100;
                            }
                        });
                        Velocity(element, "reverse", {
                            loop: true,
                            delay: opts.delay
                        });
                    }
                    if (opts.queue !== false) {
                        $.dequeue(element, opts.queue);
                    }
                }
                Velocity.State.calls[callIndex] = false;
                for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
                    if (Velocity.State.calls[j] !== false) {
                        remainingCallsExist = true;
                        break;
                    }
                }
                if (remainingCallsExist === false) {
                    Velocity.State.isTicking = false;
                    delete Velocity.State.calls;
                    Velocity.State.calls = [];
                }
            }
            global.Velocity = Velocity;
            if (global !== window) {
                global.fn.velocity = animate;
                global.fn.velocity.defaults = Velocity.defaults;
            }
            $.each(["Down", "Up"], function(i, direction) {
                Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
                    var opts = $.extend({}, options),
                        begin = opts.begin,
                        complete = opts.complete,
                        inlineValues = {},
                        computedValues = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        };
                    if (opts.display === undefined) {
                        opts.display = direction === "Down" ? Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block" : "none";
                    }
                    opts.begin = function() {
                        if (elementsIndex === 0 && begin) {
                            begin.call(elements, elements);
                        }
                        for (var property in computedValues) {
                            if (!computedValues.hasOwnProperty(property)) {
                                continue;
                            }
                            inlineValues[property] = element.style[property];
                            var propertyValue = CSS.getPropertyValue(element, property);
                            computedValues[property] = direction === "Down" ? [propertyValue, 0] : [0, propertyValue];
                        }
                        inlineValues.overflow = element.style.overflow;
                        element.style.overflow = "hidden";
                    };
                    opts.complete = function() {
                        for (var property in inlineValues) {
                            if (inlineValues.hasOwnProperty(property)) {
                                element.style[property] = inlineValues[property];
                            }
                        }
                        if (elementsIndex === elementsSize - 1) {
                            if (complete) {
                                complete.call(elements, elements);
                            }
                            if (promiseData) {
                                promiseData.resolver(elements);
                            }
                        }
                    };
                    Velocity(element, computedValues, opts);
                };
            });
            $.each(["In", "Out"], function(i, direction) {
                Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
                    var opts = $.extend({}, options),
                        complete = opts.complete,
                        propertiesMap = {
                            opacity: direction === "In" ? 1 : 0
                        };
                    if (elementsIndex !== 0) {
                        opts.begin = null;
                    }
                    if (elementsIndex !== elementsSize - 1) {
                        opts.complete = null;
                    } else {
                        opts.complete = function() {
                            if (complete) {
                                complete.call(elements, elements);
                            }
                            if (promiseData) {
                                promiseData.resolver(elements);
                            }
                        };
                    }
                    if (opts.display === undefined) {
                        opts.display = direction === "In" ? "auto" : "none";
                    }
                    Velocity(this, propertiesMap, opts);
                };
            });
            return Velocity;
        })(window.jQuery || window.Zepto || window, window, window ? window.document : undefined);
    });
}), (function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    __webpack_require__(31);
    __webpack_require__(25);
    __webpack_require__(27);
    __webpack_require__(24);
    __webpack_require__(28);
    __webpack_require__(23);
    __webpack_require__(7);
    __webpack_require__(15);
    __webpack_require__(21);
    __webpack_require__(22);
    __webpack_require__(6);
    var _componentsDropDown = __webpack_require__(9);
    var _componentsDropDown2 = _interopRequireDefault(_componentsDropDown);
    var _componentsForm = __webpack_require__(10);
    var _componentsForm2 = _interopRequireDefault(_componentsForm);
    var _componentsProductMiniature = __webpack_require__(2);
    var _componentsProductMiniature2 = _interopRequireDefault(_componentsProductMiniature);
    var _componentsProductSelect = __webpack_require__(11);
    var _componentsProductSelect2 = _interopRequireDefault(_componentsProductSelect);
    var _componentsTptncustom = __webpack_require__(12);
    var _componentsTptncustom2 = _interopRequireDefault(_componentsTptncustom);
    var _prestashop = __webpack_require__(1);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    var _events = __webpack_require__(26);
    var _events2 = _interopRequireDefault(_events);
    __webpack_require__(16);
    __webpack_require__(17);
    __webpack_require__(18);
    __webpack_require__(19);
    __webpack_require__(20);
    __webpack_require__(8);
    __webpack_require__(13);
    __webpack_require__(14);
    for (var i in _events2['default'].prototype) {
        _prestashop2['default'][i] = _events2['default'].prototype[i]
    }
    $(document).ready(function() {
        var dropDownEl = $('.js-dropdown');
        var form = new _componentsForm2['default']();
        var dropDown = new _componentsDropDown2['default'](dropDownEl);
        var productMinitature = new _componentsProductMiniature2['default']();
        var productSelect = new _componentsProductSelect2['default']();
        var tptnCustom = new _componentsTptncustom2['default']();
        dropDown.init();
        form.init();
        productMinitature.init();
        productSelect.init();
        tptnCustom.init()
    });
}), (function(module, exports) {}), (function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        };
    }
    var _jquery = __webpack_require__(0);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(1);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    _prestashop2['default'].cart = _prestashop2['default'].cart || {};
    _prestashop2['default'].cart.active_inputs = null;
    var spinnerSelector = 'input[name="product-quantity-spin"]';
    var hasError = false;
    var isUpdateOperation = false;
    var errorMsg = '';

    function createSpin() {
        _jquery2['default'].each((0, _jquery2['default'])(spinnerSelector), function(index, spinner) {
            (0, _jquery2['default'])(spinner).TouchSpin({
                verticalbuttons: true,
                verticalupclass: 'material-icons touchspin-up',
                verticaldownclass: 'material-icons touchspin-down',
                buttondown_class: 'btn btn-touchspin js-touchspin js-increase-product-quantity',
                buttonup_class: 'btn btn-touchspin js-touchspin js-decrease-product-quantity',
                min: parseInt((0, _jquery2['default'])(spinner).attr('min'), 10),
                max: 1000000
            });
        });
        CheckUpdateQuantityOperations.switchErrorStat();
    }
    (0, _jquery2['default'])(document).ready(function() {
        var productLineInCartSelector = '.js-cart-line-product-quantity';
        var promises = [];
        _prestashop2['default'].on('updateCart', function() {
            (0, _jquery2['default'])('.quickview').modal('hide');
        });
        _prestashop2['default'].on('updatedCart', function() {
            createSpin();
        });
        createSpin();
        var $body = (0, _jquery2['default'])('body');

        function isTouchSpin(namespace) {
            return namespace === 'on.startupspin' || namespace === 'on.startdownspin';
        }

        function shouldIncreaseProductQuantity(namespace) {
            return namespace === 'on.startupspin';
        }

        function findCartLineProductQuantityInput($target) {
            var $input = $target.parents('.bootstrap-touchspin').find(productLineInCartSelector);
            if ($input.is(':focus')) {
                return null;
            }
            return $input;
        }

        function camelize(subject) {
            var actionTypeParts = subject.split('-');
            var i = undefined;
            var part = undefined;
            var camelizedSubject = '';
            for (i = 0; i < actionTypeParts.length; i++) {
                part = actionTypeParts[i];
                if (0 !== i) {
                    part = part.substring(0, 1).toUpperCase() + part.substring(1);
                }
                camelizedSubject = camelizedSubject + part;
            }
            return camelizedSubject;
        }

        function parseCartAction($target, namespace) {
            if (!isTouchSpin(namespace)) {
                return {
                    url: $target.attr('href'),
                    type: camelize($target.data('link-action'))
                };
            }
            var $input = findCartLineProductQuantityInput($target);
            if (!$input) {
                return;
            }
            var cartAction = {};
            if (shouldIncreaseProductQuantity(namespace)) {
                cartAction = {
                    url: $input.data('up-url'),
                    type: 'increaseProductQuantity'
                };
            } else {
                cartAction = {
                    url: $input.data('down-url'),
                    type: 'decreaseProductQuantity'
                };
            }
            return cartAction;
        }
        var abortPreviousRequests = function abortPreviousRequests() {
            var promise;
            while (promises.length > 0) {
                promise = promises.pop();
                promise.abort();
            }
        };
        var getTouchSpinInput = function getTouchSpinInput($button) {
            return (0, _jquery2['default'])($button.parents('.bootstrap-touchspin').find('input'));
        };
        var handleCartAction = function handleCartAction(event) {
            event.preventDefault();
            var $target = (0, _jquery2['default'])(event.currentTarget);
            var dataset = event.currentTarget.dataset;
            var cartAction = parseCartAction($target, event.namespace);
            var requestData = {
                ajax: '1',
                action: 'update'
            };
            if (typeof cartAction === 'undefined') {
                return;
            }
            abortPreviousRequests();
            _jquery2['default'].ajax({
                url: cartAction.url,
                method: 'POST',
                data: requestData,
                dataType: 'json',
                beforeSend: function beforeSend(jqXHR) {
                    promises.push(jqXHR);
                }
            }).then(function(resp) {
                CheckUpdateQuantityOperations.checkUpdateOpertation(resp);
                var $quantityInput = getTouchSpinInput($target);
                $quantityInput.val(resp.quantity);
                _prestashop2['default'].emit('updateCart', {
                    reason: dataset
                });
            }).fail(function(resp) {
                _prestashop2['default'].emit('handleError', {
                    eventType: 'updateProductInCart',
                    resp: resp,
                    cartAction: cartAction.type
                });
            });
        };
        $body.on('click', '[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]', handleCartAction);
        $body.on('touchspin.on.startdownspin', spinnerSelector, handleCartAction);
        $body.on('touchspin.on.startupspin', spinnerSelector, handleCartAction);

        function sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, requestData, $target) {
            abortPreviousRequests();
            return _jquery2['default'].ajax({
                url: updateQuantityInCartUrl,
                method: 'POST',
                data: requestData,
                dataType: 'json',
                beforeSend: function beforeSend(jqXHR) {
                    promises.push(jqXHR);
                }
            }).then(function(resp) {
                CheckUpdateQuantityOperations.checkUpdateOpertation(resp);
                $target.val(resp.quantity);
                var dataset;
                if ($target && $target.dataset) {
                    dataset = $target.dataset;
                } else {
                    dataset = resp;
                }
                _prestashop2['default'].emit('updateCart', {
                    reason: dataset
                });
            }).fail(function(resp) {
                _prestashop2['default'].emit('handleError', {
                    eventType: 'updateProductQuantityInCart',
                    resp: resp
                });
            });
        }

        function getRequestData(quantity) {
            return {
                ajax: '1',
                qty: Math.abs(quantity),
                action: 'update',
                op: getQuantityChangeType(quantity)
            };
        }

        function getQuantityChangeType($quantity) {
            return $quantity > 0 ? 'up' : 'down';
        }

        function updateProductQuantityInCart(event) {
            var $target = (0, _jquery2['default'])(event.currentTarget);
            var updateQuantityInCartUrl = $target.data('update-url');
            var baseValue = $target.attr('value');
            var targetValue = $target.val();
            if (targetValue != parseInt(targetValue) || targetValue < 0 || isNaN(targetValue)) {
                $target.val(baseValue);
                return;
            }
            var qty = targetValue - baseValue;
            if (qty === 0) {
                return;
            }
            $target.attr('value', targetValue);
            sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, getRequestData(qty), $target);
        }
        $body.on('focusout keyup', productLineInCartSelector, function(event) {
            if (event.type === 'keyup') {
                if (event.keyCode === 13) {
                    updateProductQuantityInCart(event);
                }
                return false;
            }
            updateProductQuantityInCart(event);
        });
        $body.on('click', '.js-discount .code', function(event) {
            event.stopPropagation();
            var $code = (0, _jquery2['default'])(event.currentTarget);
            var $discountInput = (0, _jquery2['default'])('[name=discount_name]');
            $discountInput.val($code.text());
            return false;
        });
    });
    var CheckUpdateQuantityOperations = {
        'switchErrorStat': function switchErrorStat() {
            var $checkoutBtn = (0, _jquery2['default'])('.checkout a');
            if ((0, _jquery2['default'])("#notifications article.alert-danger").length || '' !== errorMsg && !hasError) {
                $checkoutBtn.addClass('disabled');
            }
            if ('' !== errorMsg) {
                var strError = ' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>' + errorMsg + '</li></ul></article>';
                (0, _jquery2['default'])('#notifications .container').html(strError);
                errorMsg = '';
                isUpdateOperation = false;
                if (hasError) {
                    $checkoutBtn.removeClass('disabled');
                }
            } else if (!hasError && isUpdateOperation) {
                hasError = false;
                isUpdateOperation = false;
                (0, _jquery2['default'])('#notifications .container').html('');
                $checkoutBtn.removeClass('disabled');
            }
        },
        'checkUpdateOpertation': function checkUpdateOpertation(resp) {
            hasError = resp.hasOwnProperty('hasError');
            var errors = resp.errors || "";
            if (errors instanceof Array) {
                errorMsg = errors.join(" ");
            } else {
                errorMsg = errors;
            }
            isUpdateOperation = true;
        }
    };
}), (function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(0);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(1);
    var _prestashop2 = _interopRequireDefault(_prestashop);

    function setUpCheckout() {
        if ((0, _jquery2['default'])('.js-cancel-address').length !== 0) {
            (0, _jquery2['default'])('.checkout-step:not(.js-current-step) .step-title').addClass('not-allowed')
        }(0, _jquery2['default'])('.js-terms a').on('click', function(event) {
            event.preventDefault();
            var url = (0, _jquery2['default'])(event.target).attr('href');
            if (url) {
                url += '?content_only=1';
                _jquery2['default'].get(url, function(content) {
                    (0, _jquery2['default'])('#modal').find('.js-modal-content').html((0, _jquery2['default'])(content).find('.page-cms').contents())
                }).fail(function(resp) {
                    _prestashop2['default'].emit('handleError', {
                        eventType: 'clickTerms',
                        resp: resp
                    })
                })
            }(0, _jquery2['default'])('#modal').modal('show')
        });
        (0, _jquery2['default'])('.js-gift-checkbox').on('click', function(event) {
            (0, _jquery2['default'])('#gift').collapse('toggle')
        })
    }(0, _jquery2['default'])(document).ready(function() {
        if ((0, _jquery2['default'])('body#checkout').length === 1) {
            setUpCheckout()
        }
        _prestashop2['default'].on('updatedDeliveryForm', function(params) {
            if (typeof params.deliveryOption === 'undefined' || 0 === params.deliveryOption.length) {
                return
            }(0, _jquery2['default'])(".carrier-extra-content").hide();
            params.deliveryOption.next(".carrier-extra-content").slideDown()
        })
    });
}), (function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _prestashop = __webpack_require__(1);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    var _jquery = __webpack_require__(0);
    var _jquery2 = _interopRequireDefault(_jquery);
    _prestashop2['default'].blockcart = _prestashop2['default'].blockcart || {};
    _prestashop2['default'].blockcart.showModal = function(html) {
        function getBlockCartModal() {
            return (0, _jquery2['default'])('#blockcart-modal')
        }
        var $blockCartModal = getBlockCartModal();
        if ($blockCartModal.length) {
            $blockCartModal.remove()
        }(0, _jquery2['default'])('body').append(html);
        $blockCartModal = getBlockCartModal();
        $blockCartModal.modal('show').on('hidden.bs.modal', function(event) {
            _prestashop2['default'].emit('updateProduct', {
                reason: event.currentTarget.dataset,
                event: event
            })
        })
    };
}), (function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    var _createClass = (function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1;
                descriptor.configurable = !0;
                if ('value' in descriptor) descriptor.writable = !0;
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor
        }
    })();

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
        }
    }
    var _jquery = __webpack_require__(0);
    var _jquery2 = _interopRequireDefault(_jquery);
    var DropDown = (function() {
        function DropDown(el) {
            _classCallCheck(this, DropDown);
            this.el = el
        }
        _createClass(DropDown, [{
            key: 'init',
            value: function init() {
                this.el.on('show.bs.dropdown', function(e, el) {
                    if (el) {
                        (0, _jquery2['default'])('#' + el).find('.dropdown-menu').first().stop(!0, !0).slideDown()
                    } else {
                        (0, _jquery2['default'])(e.target).find('.dropdown-menu').first().stop(!0, !0).slideDown()
                    }
                });
                this.el.on('hide.bs.dropdown', function(e, el) {
                    if (el) {
                        (0, _jquery2['default'])('#' + el).find('.dropdown-menu').first().stop(!0, !0).slideUp()
                    } else {
                        (0, _jquery2['default'])(e.target).find('.dropdown-menu').first().stop(!0, !0).slideUp()
                    }
                });
                this.el.find('select.link').each(function(idx, el) {
                    (0, _jquery2['default'])(el).on('change', function(event) {
                        window.location = (0, _jquery2['default'])(this).val()
                    })
                })
            }
        }]);
        return DropDown
    })();
    exports['default'] = DropDown;
    module.exports = exports['default'];
}), (function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    var _createClass = (function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1;
                descriptor.configurable = !0;
                if ('value' in descriptor) descriptor.writable = !0;
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor
        }
    })();

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
        }
    }
    var _jquery = __webpack_require__(0);
    var _jquery2 = _interopRequireDefault(_jquery);
    var Form = (function() {
        function Form() {
            _classCallCheck(this, Form)
        }
        _createClass(Form, [{
            key: 'init',
            value: function init() {
                this.parentFocus();
                this.togglePasswordVisibility()
            }
        }, {
            key: 'parentFocus',
            value: function parentFocus() {
                (0, _jquery2['default'])('.js-child-focus').focus(function() {
                    (0, _jquery2['default'])(this).closest('.js-parent-focus').addClass('focus')
                });
                (0, _jquery2['default'])('.js-child-focus').focusout(function() {
                    (0, _jquery2['default'])(this).closest('.js-parent-focus').removeClass('focus')
                })
            }
        }, {
            key: 'togglePasswordVisibility',
            value: function togglePasswordVisibility() {
                (0, _jquery2['default'])('button[data-action="show-password"]').on('click', function() {
                    var elm = (0, _jquery2['default'])(this).closest('.input-group').children('input.js-visible-password');
                    if (elm.attr('type') === 'password') {
                        elm.attr('type', 'text');
                        (0, _jquery2['default'])(this).text((0, _jquery2['default'])(this).data('textHide'))
                    } else {
                        elm.attr('type', 'password');
                        (0, _jquery2['default'])(this).text((0, _jquery2['default'])(this).data('textShow'))
                    }
                })
            }
        }]);
        return Form
    })();
    exports['default'] = Form;
    module.exports = exports['default'];
}), (function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    var _createClass = (function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1;
                descriptor.configurable = !0;
                if ('value' in descriptor) descriptor.writable = !0;
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor
        }
    })();

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
        }
    }
    var _jquery = __webpack_require__(0);
    var _jquery2 = _interopRequireDefault(_jquery);
    __webpack_require__(3);
    var ProductSelect = (function() {
        function ProductSelect() {
            _classCallCheck(this, ProductSelect)
        }
        _createClass(ProductSelect, [{
            key: 'init',
            value: function init() {
                var _this = this;
                var MAX_THUMBS = 5;
                var $arrows = (0, _jquery2['default'])('.js-modal-arrows');
                var $thumbnails = (0, _jquery2['default'])('.js-modal-product-images');
                var $onsale = (0, _jquery2['default'])('.on-sale');
                (0, _jquery2['default'])('body').on('click', '.js-modal-thumb', function(event) {
                    if ((0, _jquery2['default'])('.js-modal-thumb').hasClass('selected')) {
                        (0, _jquery2['default'])('.js-modal-thumb').removeClass('selected')
                    }(0, _jquery2['default'])(event.currentTarget).addClass('selected');
                    (0, _jquery2['default'])('.js-modal-product-cover').attr('src', (0, _jquery2['default'])(event.target).data('image-large-src'));
                    (0, _jquery2['default'])('.js-modal-product-cover').attr('title', (0, _jquery2['default'])(event.target).attr('title'));
                    (0, _jquery2['default'])('.js-modal-product-cover').attr('alt', (0, _jquery2['default'])(event.target).attr('alt'))
                }).on('click', 'aside#thumbnails', function(event) {
                    if (event.target.id == 'thumbnails') {
                        (0, _jquery2['default'])('#product-modal').modal('hide')
                    }
                });
                if ((0, _jquery2['default'])('.js-modal-product-images li').length <= MAX_THUMBS) {
                    $arrows.css('opacity', '.2')
                } else {
                    $arrows.on('click', function(event) {
                        if ((0, _jquery2['default'])(event.target).hasClass('arrow-up') && $thumbnails.position().top < 0) {
                            _this.move('up');
                            (0, _jquery2['default'])('.js-modal-arrow-down').css('opacity', '1')
                        } else if ((0, _jquery2['default'])(event.target).hasClass('arrow-down') && $thumbnails.position().top + $thumbnails.height() > (0, _jquery2['default'])('.js-modal-mask').height()) {
                            _this.move('down');
                            (0, _jquery2['default'])('.js-modal-arrow-up').css('opacity', '1')
                        }
                    })
                }
            }
        }, {
            key: 'move',
            value: function move(direction) {
                var THUMB_MARGIN = 10;
                var $thumbnails = (0, _jquery2['default'])('.js-modal-product-images');
                var thumbHeight = (0, _jquery2['default'])('.js-modal-product-images li img').height() + THUMB_MARGIN;
                var currentPosition = $thumbnails.position().top;
                $thumbnails.velocity({
                    translateY: direction === 'up' ? currentPosition + thumbHeight : currentPosition - thumbHeight
                }, function() {
                    if ($thumbnails.position().top >= 0) {
                        (0, _jquery2['default'])('.js-modal-arrow-up').css('opacity', '.2')
                    } else if ($thumbnails.position().top + $thumbnails.height() <= (0, _jquery2['default'])('.js-modal-mask').height()) {
                        (0, _jquery2['default'])('.js-modal-arrow-down').css('opacity', '.2')
                    }
                })
            }
        }]);
        return ProductSelect
    })();
    exports['default'] = ProductSelect;
    module.exports = exports['default'];
}), (function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    var _createClass = (function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    })();

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }
    var _jquery = __webpack_require__(0);
    var _jquery2 = _interopRequireDefault(_jquery);
    var TptnCustom = (function() {
        function TptnCustom() {
            _classCallCheck(this, TptnCustom);
        }
        _createClass(TptnCustom, [{
            key: 'init',
            value: function init() {
                (0, _jquery2['default'])('#megamenu').dcVerticalMegaMenu();
                (0, _jquery2['default'])('#tptnhtmlbox1 ul').rotator();
                this.tptnExtras();
                this.tptnCarousels();
            }
        }, {
            key: 'tptnExtras',
            value: function tptnExtras() {
                if (TptnBackTop || TptnStickyLG || TptnStickySM) {
                    (0, _jquery2['default'])(window).scroll(function() {
                        if ((0, _jquery2['default'])(this).scrollTop() > 300) {
                            if (TptnBackTop) {
                                (0, _jquery2['default'])('#back-top').addClass('back-top-show');
                            }
                            if (TptnStickyLG) {
                                (0, _jquery2['default'])('#header').addClass('sticky-header');
                            }
                            if (TptnStickySM) {
                                (0, _jquery2['default'])('.mobile-header').addClass('sticky-header');
                            }
                        } else {
                            if (TptnBackTop) {
                                (0, _jquery2['default'])('#back-top').removeClass('back-top-show');
                            }
                            if (TptnStickyLG) {
                                (0, _jquery2['default'])('#header').removeClass('sticky-header');
                            }
                            if (TptnStickySM) {
                                (0, _jquery2['default'])('.mobile-header').removeClass('sticky-header');
                            }
                        }
                    });
                    if (TptnBackTop) {
                        (0, _jquery2['default'])('#back-top').on('click', function(event) {
                            event.preventDefault();
                            (0, _jquery2['default'])('body,html').animate({
                                scrollTop: 0
                            }, 500);
                        });
                    }
                }
                (0, _jquery2['default'])('body').on('click', '.tptnmobilemenu .m-toggle', function(event) {
                    event.preventDefault();
                    (0, _jquery2['default'])('.tptnmobilemenu .mobilemenu').addClass('menu-show');
                    (0, _jquery2['default'])('.tptn-overlay').addClass('tptnmobilemenu-overlay').show();
                });
                (0, _jquery2['default'])('body').on('click', '.tptnmobilemenu .mobilemenu-title, .tptnmobilemenu-overlay', function(event) {
                    event.preventDefault();
                    (0, _jquery2['default'])('.tptnmobilemenu .mobilemenu').removeClass('menu-show');
                    (0, _jquery2['default'])('.tptn-overlay').removeClass('tptnmobilemenu-overlay').hide();
                });
                (0, _jquery2['default'])('body').on('click', '.tptncart .m-toggle', function(event) {
                    event.preventDefault();
                    (0, _jquery2['default'])('.tptncart').addClass('minicart-show');
                    (0, _jquery2['default'])('.tptn-overlay').addClass('tptncart-overlay').show();
                });
                (0, _jquery2['default'])('body').on('click', '.tptncart .minicart-title, .tptncart-overlay', function(event) {
                    event.preventDefault();
                    (0, _jquery2['default'])('.tptncart').removeClass('minicart-show');
                    (0, _jquery2['default'])('.tptn-overlay').removeClass('tptncart-overlay').hide();
                });
            }
        }, {
            key: 'tptnCarousels',
            value: function tptnCarousels() {
                (0, _jquery2['default'])('.owlslider').owlCarousel({
                    items: 1,
                    autoplay: (0, _jquery2['default'])('#tptnhomeslider').data('play'),
                    autoplayTimeout: (0, _jquery2['default'])('#tptnhomeslider').data('speed'),
                    loop: true,
                    dots: false,
                    nav: true,
                    navText: ["", ""]
                });
                (0, _jquery2['default'])('.prodcrsl').owlCarousel({
                    autoplay: TptnCrslAutoplay,
                    nav: true,
                    dots: false,
                    navText: ["", ""],
                    responsive: {
                        0: {
                            items: 1
                        },
                        544: {
                            items: 2
                        },
                        992: {
                            items: 4
                        }
                    }
                });
                (0, _jquery2['default'])('.brandcrsl').owlCarousel({
                    autoplay: TptnCrslAutoplay,
                    nav: true,
                    dots: false,
                    navText: ["", ""],
                    responsive: {
                        0: {
                            items: 2
                        },
                        544: {
                            items: 3
                        },
                        992: {
                            items: 5
                        }
                    }
                });
                (0, _jquery2['default'])('.blogcrsl').owlCarousel({
                    autoplay: TptnCrslAutoplay,
                    nav: true,
                    dots: false,
                    navText: ["", ""],
                    responsive: {
                        0: {
                            items: 1
                        },
                        640: {
                            items: 2
                        },
                        992: {
                            items: 3
                        }
                    }
                });
                (0, _jquery2['default'])('.subcatcrsl').owlCarousel({
                    autoplay: TptnCrslAutoplay,
                    nav: true,
                    dots: false,
                    navText: ["", ""],
                    responsive: {
                        0: {
                            items: 2
                        },
                        544: {
                            items: 3
                        },
                        768: {
                            items: 4
                        },
                        992: {
                            items: 6
                        }
                    }
                });
            }
        }]);
        return TptnCustom;
    })();
    exports['default'] = TptnCustom;
    module.exports = exports['default'];
}), (function(module, exports, __webpack_require__) {
    "use strict";
    $(document).ready(function() {
        $('body').on('click', '.tptnsearch .search-btn', function(event) {
            event.preventDefault();
            $('.tptnsearch .search-form').show();
            $('.tptn-overlay').addClass('tptnsearch-overlay').show();
        });
        $('body').on('click', '.tptnsearch .search-close, .tptnsearch-overlay', function(event) {
            event.preventDefault();
            $('.tptnsearch .search-form').hide();
            $('.tptn-overlay').removeClass('tptnsearch-overlay').hide();
        });
        var timer;
        $("#input_search").keyup(function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
                var search_key = $("#input_search").val();
                $.ajax({
                    type: 'GET',
                    url: prestashop['urls']['base_url'] + 'modules/tptnsearch/tptnsearch-ajax.php',
                    headers: {
                        "cache-control": "no-cache"
                    },
                    async: true,
                    data: 'search_key=' + search_key,
                    success: function success(data) {
                        $('#search_popup').innerHTML = data;
                    }
                }).done(function(msg) {
                    $("#search_popup").html(msg);
                });
            }, 1000);
        });
        $('html').click(function() {
            $("#search_popup").html('');
        });
        $('#search_popup').click(function(event) {
            event.stopPropagation();
        });
    });
}), (function(module, exports, __webpack_require__) {
    "use strict";
    $(document).ready(function() {
        $('.tptn-config-switch').click(function() {
            if ($(this).hasClass('config-close')) {
                $('.tptn-config-inner').hide();
                $(this).removeClass('config-close');
                $.cookie('ckconfigclose', 0);
            } else {
                $('.tptn-config-inner').show();
                $(this).addClass('config-close');
                $.cookie('ckconfigclose', 1);
            }
            return false;
        });
        if ($.cookie('ckconfigclose') == 0) {
            $('.tptn-config-inner').css('display', 'none');
            $('.tptn-config-switch').removeClass('config-close');
        } else if ($.cookie('ckconfigclose') == 1) {
            $('.tptn-config-inner').css('display', 'block');
            $('.tptn-config-switch').addClass('config-close');
        }
        var ckbodybkg, elbodybkg = '#wrapper';
        if ($.cookie('ckbodybkg')) {
            ckbodybkg = $.cookie('ckbodybkg');
        } else {
            ckbodybkg = tptnbodybkg_default;
        }
        $('#bodybkg-input').colpick({
            color: ckbodybkg,
            onShow: function onShow(colpkr) {
                $(colpkr).show();
                return false;
            },
            onHide: function onHide(colpkr) {
                $(colpkr).hide();
                return false;
            },
            onChange: function onChange(hsb, hex, rgb) {
                $(elbodybkg).css('background-color', '#' + hex);
                $('#bodybkg-input').css('background-color', '#' + hex);
                $.cookie('ckbodybkg', hex);
            }
        });
        var cktopbkg, eltopbkg1 = '#header .header-bottom, #header .mobile-header-bottom, #footer #tptnhtmlbox2 a:hover em, body#checkout .checkout-step.-current .step-title',
            eltopbkg2 = '#footer #tptnhtmlbox2 em';
        if ($.cookie('cktopbkg')) {
            cktopbkg = $.cookie('cktopbkg');
        } else {
            cktopbkg = tptntopbkg_default;
        }
        $('#topbkg-input').colpick({
            color: cktopbkg,
            onShow: function onShow(colpkr) {
                $(colpkr).show();
                return false;
            },
            onHide: function onHide(colpkr) {
                $(colpkr).hide();
                return false;
            },
            onChange: function onChange(hsb, hex, rgb) {
                $(eltopbkg1).css('background-color', '#' + hex);
                $(eltopbkg2).css({
                    'border': '2px solid #' + hex,
                    'color': '#' + hex
                });
                $('#topbkg-input').css('background-color', '#' + hex);
                $.cookie('cktopbkg', hex);
            }
        });
        var cktitlebkg, eltitlebkg = '#header .desktopmenu-title, #header .mobilemenu-title';
        if ($.cookie('cktitlebkg')) {
            cktitlebkg = $.cookie('cktitlebkg');
        } else {
            cktitlebkg = tptntitlebkg_default;
        }
        $('#titlebkg-input').colpick({
            color: cktitlebkg,
            onShow: function onShow(colpkr) {
                $(colpkr).show();
                return false;
            },
            onHide: function onHide(colpkr) {
                $(colpkr).hide();
                return false;
            },
            onChange: function onChange(hsb, hex, rgb) {
                $(eltitlebkg).css('background-color', '#' + hex);
                $('#titlebkg-input').css('background-color', '#' + hex);
                $.cookie('cktitlebkg', hex);
            }
        });
        var ckcartbkg, elcartbkg = '#_desktop_blockcart-wrapper .m-toggle, .tptncart .minicart-title';
        if ($.cookie('ckcartbkg')) {
            ckcartbkg = $.cookie('ckcartbkg');
        } else {
            ckcartbkg = tptncartbkg_default;
        }
        $('#cartbkg-input').colpick({
            color: ckcartbkg,
            onShow: function onShow(colpkr) {
                $(colpkr).show();
                return false;
            },
            onHide: function onHide(colpkr) {
                $(colpkr).hide();
                return false;
            },
            onChange: function onChange(hsb, hex, rgb) {
                $(elcartbkg).css('background-color', '#' + hex);
                $('#cartbkg-input').css('background-color', '#' + hex);
                $.cookie('ckcartbkg', hex);
            }
        });
        var ckpnameclr, elpnameclr = '.product-title a';
        if ($.cookie('ckpnameclr')) {
            ckpnameclr = $.cookie('ckpnameclr');
        } else {
            ckpnameclr = tptnpnameclr_default;
        }
        $('#pnameclr-input').colpick({
            color: ckpnameclr,
            onShow: function onShow(colpkr) {
                $(colpkr).show();
                return false;
            },
            onHide: function onHide(colpkr) {
                $(colpkr).hide();
                return false;
            },
            onChange: function onChange(hsb, hex, rgb) {
                $(elpnameclr).css({
                    'color': '#' + hex
                });
                $('#pnameclr-input').css('background-color', '#' + hex);
                $.cookie('ckpnameclr', hex);
            }
        });
        var ckpriceclr, elpriceclr = '.product-price-and-shipping .price, .product-price';
        if ($.cookie('ckpriceclr')) {
            ckpriceclr = $.cookie('ckpriceclr');
        } else {
            ckpriceclr = tptnpriceclr_default;
        }
        $('#priceclr-input').colpick({
            color: ckpriceclr,
            onShow: function onShow(colpkr) {
                $(colpkr).show();
                return false;
            },
            onHide: function onHide(colpkr) {
                $(colpkr).hide();
                return false;
            },
            onChange: function onChange(hsb, hex, rgb) {
                $(elpriceclr).css({
                    'color': '#' + hex
                });
                $('#priceclr-input').css('background-color', '#' + hex);
                $.cookie('ckpriceclr', hex);
            }
        });
        var cknewbkg, elnewbkg = '.product-flags .new';
        if ($.cookie('cknewbkg')) {
            cknewbkg = $.cookie('cknewbkg');
        } else {
            cknewbkg = tptnnewbkg_default;
        }
        $('#newbkg-input').colpick({
            color: cknewbkg,
            onShow: function onShow(colpkr) {
                $(colpkr).show();
                return false;
            },
            onHide: function onHide(colpkr) {
                $(colpkr).hide();
                return false;
            },
            onChange: function onChange(hsb, hex, rgb) {
                $(elnewbkg).css('background-color', '#' + hex);
                $('#newbkg-input').css('background-color', '#' + hex);
                $.cookie('cknewbkg', hex);
            }
        });
        var cksalebkg, elsalebkg = '.product-flags .discount, .product-flags .on-sale';
        if ($.cookie('cksalebkg')) {
            cksalebkg = $.cookie('cksalebkg');
        } else {
            cksalebkg = tptnsalebkg_default;
        }
        $('#salebkg-input').colpick({
            color: cksalebkg,
            onShow: function onShow(colpkr) {
                $(colpkr).show();
                return false;
            },
            onHide: function onHide(colpkr) {
                $(colpkr).hide();
                return false;
            },
            onChange: function onChange(hsb, hex, rgb) {
                $(elsalebkg).css('background-color', '#' + hex);
                $('#salebkg-input').css('background-color', '#' + hex);
                $.cookie('cksalebkg', hex);
            }
        });
        var ckbtnbkg, elbtnbkg = '.btn-primary';
        if ($.cookie('ckbtnbkg')) {
            ckbtnbkg = $.cookie('ckbtnbkg');
        } else {
            ckbtnbkg = tptnbtnbkg_default;
        }
        $('#btnbkg-input').colpick({
            color: ckbtnbkg,
            onShow: function onShow(colpkr) {
                $(colpkr).show();
                return false;
            },
            onHide: function onHide(colpkr) {
                $(colpkr).hide();
                return false;
            },
            onChange: function onChange(hsb, hex, rgb) {
                $(elbtnbkg).css('background-color', '#' + hex);
                $('#btnbkg-input').css('background-color', '#' + hex);
                $.cookie('ckbtnbkg', hex);
            }
        });
        $('.reset').click(function() {
            $.cookie('ckbodybkg', null);
            $.cookie('cktopbkg', null);
            $.cookie('cktitlebkg', null);
            $.cookie('ckcartbkg', null);
            $.cookie('ckpnameclr', null);
            $.cookie('ckpriceclr', null);
            $.cookie('cknewbkg', null);
            $.cookie('cksalebkg', null);
            $.cookie('ckbtnbkg', null);
            location.reload();
        });
    });
}), (function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(0);
    var _jquery2 = _interopRequireDefault(_jquery);

    function initRmaItemSelector() {
        (0, _jquery2['default'])('#order-return-form table thead input[type=checkbox]').on('click', function() {
            var checked = (0, _jquery2['default'])(this).prop('checked');
            (0, _jquery2['default'])('#order-return-form table tbody input[type=checkbox]').each(function(_, checkbox) {
                (0, _jquery2['default'])(checkbox).prop('checked', checked)
            })
        })
    }

    function setupCustomerScripts() {
        if ((0, _jquery2['default'])('body#order-detail')) {
            initRmaItemSelector()
        }
    }(0, _jquery2['default'])(document).ready(setupCustomerScripts);
}), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        var nextId = 0;
        var Filestyle = function Filestyle(element, options) {
            this.options = options;
            this.$elementFilestyle = [];
            this.$element = $(element)
        };
        Filestyle.prototype = {
            clear: function clear() {
                this.$element.val("");
                this.$elementFilestyle.find(":text").val("");
                this.$elementFilestyle.find(".badge").remove()
            },
            destroy: function destroy() {
                this.$element.removeAttr("style").removeData("filestyle");
                this.$elementFilestyle.remove()
            },
            disabled: function disabled(value) {
                if (value === !0) {
                    if (!this.options.disabled) {
                        this.$element.attr("disabled", "true");
                        this.$elementFilestyle.find("label").attr("disabled", "true");
                        this.options.disabled = !0
                    }
                } else {
                    if (value === !1) {
                        if (this.options.disabled) {
                            this.$element.removeAttr("disabled");
                            this.$elementFilestyle.find("label").removeAttr("disabled");
                            this.options.disabled = !1
                        }
                    } else {
                        return this.options.disabled
                    }
                }
            },
            buttonBefore: function buttonBefore(value) {
                if (value === !0) {
                    if (!this.options.buttonBefore) {
                        this.options.buttonBefore = !0;
                        if (this.options.input) {
                            this.$elementFilestyle.remove();
                            this.constructor();
                            this.pushNameFiles()
                        }
                    }
                } else {
                    if (value === !1) {
                        if (this.options.buttonBefore) {
                            this.options.buttonBefore = !1;
                            if (this.options.input) {
                                this.$elementFilestyle.remove();
                                this.constructor();
                                this.pushNameFiles()
                            }
                        }
                    } else {
                        return this.options.buttonBefore
                    }
                }
            },
            icon: function icon(value) {
                if (value === !0) {
                    if (!this.options.icon) {
                        this.options.icon = !0;
                        this.$elementFilestyle.find("label").prepend(this.htmlIcon())
                    }
                } else {
                    if (value === !1) {
                        if (this.options.icon) {
                            this.options.icon = !1;
                            this.$elementFilestyle.find(".icon-span-filestyle").remove()
                        }
                    } else {
                        return this.options.icon
                    }
                }
            },
            input: function input(value) {
                if (value === !0) {
                    if (!this.options.input) {
                        this.options.input = !0;
                        if (this.options.buttonBefore) {
                            this.$elementFilestyle.append(this.htmlInput())
                        } else {
                            this.$elementFilestyle.prepend(this.htmlInput())
                        }
                        this.$elementFilestyle.find(".badge").remove();
                        this.pushNameFiles();
                        this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn")
                    }
                } else {
                    if (value === !1) {
                        if (this.options.input) {
                            this.options.input = !1;
                            this.$elementFilestyle.find(":text").remove();
                            var files = this.pushNameFiles();
                            if (files.length > 0 && this.options.badge) {
                                this.$elementFilestyle.find("label").append(' <span class="badge">' + files.length + "</span>")
                            }
                            this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn")
                        }
                    } else {
                        return this.options.input
                    }
                }
            },
            size: function size(value) {
                if (value !== undefined) {
                    var btn = this.$elementFilestyle.find("label"),
                        input = this.$elementFilestyle.find("input");
                    btn.removeClass("btn-lg btn-sm");
                    input.removeClass("input-lg input-sm");
                    if (value != "nr") {
                        btn.addClass("btn-" + value);
                        input.addClass("input-" + value)
                    }
                } else {
                    return this.options.size
                }
            },
            placeholder: function placeholder(value) {
                if (value !== undefined) {
                    this.options.placeholder = value;
                    this.$elementFilestyle.find("input").attr("placeholder", value)
                } else {
                    return this.options.placeholder
                }
            },
            buttonText: function buttonText(value) {
                if (value !== undefined) {
                    this.options.buttonText = value;
                    this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText)
                } else {
                    return this.options.buttonText
                }
            },
            buttonName: function buttonName(value) {
                if (value !== undefined) {
                    this.options.buttonName = value;
                    this.$elementFilestyle.find("label").attr({
                        "class": "btn " + this.options.buttonName
                    })
                } else {
                    return this.options.buttonName
                }
            },
            iconName: function iconName(value) {
                if (value !== undefined) {
                    this.$elementFilestyle.find(".icon-span-filestyle").attr({
                        "class": "icon-span-filestyle " + this.options.iconName
                    })
                } else {
                    return this.options.iconName
                }
            },
            htmlIcon: function htmlIcon() {
                if (this.options.icon) {
                    return '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> '
                } else {
                    return ""
                }
            },
            htmlInput: function htmlInput() {
                if (this.options.input) {
                    return '<input type="text" class="form-control ' + (this.options.size == "nr" ? "" : "input-" + this.options.size) + '" placeholder="' + this.options.placeholder + '" disabled> '
                } else {
                    return ""
                }
            },
            pushNameFiles: function pushNameFiles() {
                var content = "",
                    files = [];
                if (this.$element[0].files === undefined) {
                    files[0] = {
                        name: this.$element[0] && this.$element[0].value
                    }
                } else {
                    files = this.$element[0].files
                }
                for (var i = 0; i < files.length; i++) {
                    content += files[i].name.split("\\").pop() + ", "
                }
                if (content !== "") {
                    this.$elementFilestyle.find(":text").val(content.replace(/\, $/g, ""))
                } else {
                    this.$elementFilestyle.find(":text").val("")
                }
                return files
            },
            constructor: function constructor() {
                var _self = this,
                    html = "",
                    id = _self.$element.attr("id"),
                    files = [],
                    btn = "",
                    $label;
                if (id === "" || !id) {
                    id = "filestyle-" + nextId;
                    _self.$element.attr({
                        id: id
                    });
                    nextId++
                }
                btn = '<span class="group-span-filestyle ' + (_self.options.input ? "input-group-btn" : "") + '"><label for="' + id + '" class="btn ' + _self.options.buttonName + " " + (_self.options.size == "nr" ? "" : "btn-" + _self.options.size) + '" ' + (_self.options.disabled ? 'disabled="true"' : "") + ">" + _self.htmlIcon() + '<span class="buttonText">' + _self.options.buttonText + "</span></label></span>";
                html = _self.options.buttonBefore ? btn + _self.htmlInput() : _self.htmlInput() + btn;
                _self.$elementFilestyle = $('<div class="bootstrap-filestyle input-group">' + html + "</div>");
                _self.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function(e) {
                    if (e.keyCode === 13 || e.charCode === 32) {
                        _self.$elementFilestyle.find("label").click();
                        return !1
                    }
                });
                _self.$element.css({
                    position: "absolute",
                    clip: "rect(0px 0px 0px 0px)"
                }).attr("tabindex", "-1").after(_self.$elementFilestyle);
                if (_self.options.disabled) {
                    _self.$element.attr("disabled", "true")
                }
                _self.$element.change(function() {
                    var files = _self.pushNameFiles();
                    if (_self.options.input == !1 && _self.options.badge) {
                        if (_self.$elementFilestyle.find(".badge").length == 0) {
                            _self.$elementFilestyle.find("label").append(' <span class="badge">' + files.length + "</span>")
                        } else {
                            if (files.length == 0) {
                                _self.$elementFilestyle.find(".badge").remove()
                            } else {
                                _self.$elementFilestyle.find(".badge").html(files.length)
                            }
                        }
                    } else {
                        _self.$elementFilestyle.find(".badge").remove()
                    }
                });
                if (window.navigator.userAgent.search(/firefox/i) > -1) {
                    _self.$elementFilestyle.find("label").click(function() {
                        _self.$element.click();
                        return !1
                    })
                }
            }
        };
        var old = $.fn.filestyle;
        $.fn.filestyle = function(option, value) {
            var get = "",
                element = this.each(function() {
                    if ($(this).attr("type") === "file") {
                        var $this = $(this),
                            data = $this.data("filestyle"),
                            options = $.extend({}, $.fn.filestyle.defaults, option, typeof option === "object" && option);
                        if (!data) {
                            $this.data("filestyle", data = new Filestyle(this, options));
                            data.constructor()
                        }
                        if (typeof option === "string") {
                            get = data[option](value)
                        }
                    }
                });
            if (typeof get !== undefined) {
                return get
            } else {
                return element
            }
        };
        $.fn.filestyle.defaults = {
            buttonText: "Choose file",
            iconName: "glyphicon glyphicon-folder-open",
            buttonName: "btn-default",
            size: "nr",
            input: !0,
            badge: !0,
            icon: !0,
            buttonBefore: !1,
            disabled: !1,
            placeholder: ""
        };
        $.fn.filestyle.noConflict = function() {
            $.fn.filestyle = old;
            return this
        };
        $(function() {
            $(".filestyle").each(function() {
                var $this = $(this),
                    options = {
                        input: $this.attr("data-input") === "false" ? !1 : !0,
                        icon: $this.attr("data-icon") === "false" ? !1 : !0,
                        buttonBefore: $this.attr("data-buttonBefore") === "true" ? !0 : !1,
                        disabled: $this.attr("data-disabled") === "true" ? !0 : !1,
                        size: $this.attr("data-size"),
                        buttonText: $this.attr("data-buttonText"),
                        buttonName: $this.attr("data-buttonName"),
                        iconName: $this.attr("data-iconName"),
                        badge: $this.attr("data-badge") === "false" ? !1 : !0,
                        placeholder: $this.attr("data-placeholder")
                    };
                $this.filestyle(options)
            })
        })
    })(window.jQuery);
}), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        var colpick = (function() {
            var tpl = '<div class="colpick"><div class="colpick_color"><div class="colpick_color_overlay1"><div class="colpick_color_overlay2"><div class="colpick_selector_outer"><div class="colpick_selector_inner"></div></div></div></div></div><div class="colpick_hue"><div class="colpick_hue_arrs"><div class="colpick_hue_larr"></div><div class="colpick_hue_rarr"></div></div></div><div class="colpick_new_color"></div><div class="colpick_current_color"></div><div class="colpick_hex_field"><div class="colpick_field_letter">#</div><input type="text" maxlength="6" size="6" /></div><div class="colpick_rgb_r colpick_field"><div class="colpick_field_letter">R</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_g colpick_field"><div class="colpick_field_letter">G</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_h colpick_field"><div class="colpick_field_letter">H</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_s colpick_field"><div class="colpick_field_letter">S</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_submit"></div></div>',
                defaults = {
                    showEvent: 'click',
                    onShow: function onShow() {},
                    onBeforeShow: function onBeforeShow() {},
                    onHide: function onHide() {},
                    onChange: function onChange() {},
                    onSubmit: function onSubmit() {},
                    colorScheme: 'light',
                    color: '3289c7',
                    livePreview: true,
                    flat: false,
                    layout: 'hex',
                    submit: 0,
                    submitText: 'OK',
                    height: 156
                },
                fillRGBFields = function fillRGBFields(hsb, cal) {
                    var rgb = hsbToRgb(hsb);
                    $(cal).data('colpick').fields.eq(1).val(rgb.r).end().eq(2).val(rgb.g).end().eq(3).val(rgb.b).end();
                },
                fillHSBFields = function fillHSBFields(hsb, cal) {
                    $(cal).data('colpick').fields.eq(4).val(Math.round(hsb.h)).end().eq(5).val(Math.round(hsb.s)).end().eq(6).val(Math.round(hsb.b)).end();
                },
                fillHexFields = function fillHexFields(hsb, cal) {
                    $(cal).data('colpick').fields.eq(0).val(hsbToHex(hsb));
                },
                setSelector = function setSelector(hsb, cal) {
                    $(cal).data('colpick').selector.css('backgroundColor', '#' + hsbToHex({
                        h: hsb.h,
                        s: 100,
                        b: 100
                    }));
                    $(cal).data('colpick').selectorIndic.css({
                        left: parseInt($(cal).data('colpick').height * hsb.s / 100, 10),
                        top: parseInt($(cal).data('colpick').height * (100 - hsb.b) / 100, 10)
                    });
                },
                setHue = function setHue(hsb, cal) {
                    $(cal).data('colpick').hue.css('top', parseInt($(cal).data('colpick').height - $(cal).data('colpick').height * hsb.h / 360, 10));
                },
                setCurrentColor = function setCurrentColor(hsb, cal) {
                    $(cal).data('colpick').currentColor.css('backgroundColor', '#' + hsbToHex(hsb));
                },
                setNewColor = function setNewColor(hsb, cal) {
                    $(cal).data('colpick').newColor.css('backgroundColor', '#' + hsbToHex(hsb));
                },
                change = function change(ev) {
                    var cal = $(this).parent().parent(),
                        col;
                    if (this.parentNode.className.indexOf('_hex') > 0) {
                        cal.data('colpick').color = col = hexToHsb(fixHex(this.value));
                        fillRGBFields(col, cal.get(0));
                        fillHSBFields(col, cal.get(0));
                    } else if (this.parentNode.className.indexOf('_hsb') > 0) {
                        cal.data('colpick').color = col = fixHSB({
                            h: parseInt(cal.data('colpick').fields.eq(4).val(), 10),
                            s: parseInt(cal.data('colpick').fields.eq(5).val(), 10),
                            b: parseInt(cal.data('colpick').fields.eq(6).val(), 10)
                        });
                        fillRGBFields(col, cal.get(0));
                        fillHexFields(col, cal.get(0));
                    } else {
                        cal.data('colpick').color = col = rgbToHsb(fixRGB({
                            r: parseInt(cal.data('colpick').fields.eq(1).val(), 10),
                            g: parseInt(cal.data('colpick').fields.eq(2).val(), 10),
                            b: parseInt(cal.data('colpick').fields.eq(3).val(), 10)
                        }));
                        fillHexFields(col, cal.get(0));
                        fillHSBFields(col, cal.get(0));
                    }
                    setSelector(col, cal.get(0));
                    setHue(col, cal.get(0));
                    setNewColor(col, cal.get(0));
                    cal.data('colpick').onChange.apply(cal.parent(), [col, hsbToHex(col), hsbToRgb(col), cal.data('colpick').el, 0]);
                },
                blur = function blur(ev) {
                    $(this).parent().removeClass('colpick_focus');
                },
                focus = function focus() {
                    $(this).parent().parent().data('colpick').fields.parent().removeClass('colpick_focus');
                    $(this).parent().addClass('colpick_focus');
                },
                downIncrement = function downIncrement(ev) {
                    ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
                    var field = $(this).parent().find('input').focus();
                    var current = {
                        el: $(this).parent().addClass('colpick_slider'),
                        max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255,
                        y: ev.pageY,
                        field: field,
                        val: parseInt(field.val(), 10),
                        preview: $(this).parent().parent().data('colpick').livePreview
                    };
                    $(document).mouseup(current, upIncrement);
                    $(document).mousemove(current, moveIncrement);
                },
                moveIncrement = function moveIncrement(ev) {
                    ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val - ev.pageY + ev.data.y, 10))));
                    if (ev.data.preview) {
                        change.apply(ev.data.field.get(0), [true]);
                    }
                    return false;
                },
                upIncrement = function upIncrement(ev) {
                    change.apply(ev.data.field.get(0), [true]);
                    ev.data.el.removeClass('colpick_slider').find('input').focus();
                    $(document).off('mouseup', upIncrement);
                    $(document).off('mousemove', moveIncrement);
                    return false;
                },
                downHue = function downHue(ev) {
                    ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
                    var current = {
                        cal: $(this).parent(),
                        y: $(this).offset().top
                    };
                    $(document).on('mouseup touchend', current, upHue);
                    $(document).on('mousemove touchmove', current, moveHue);
                    var pageY = ev.type == 'touchstart' ? ev.originalEvent.changedTouches[0].pageY : ev.pageY;
                    change.apply(current.cal.data('colpick').fields.eq(4).val(parseInt(360 * (current.cal.data('colpick').height - (pageY - current.y)) / current.cal.data('colpick').height, 10)).get(0), [current.cal.data('colpick').livePreview]);
                    return false;
                },
                moveHue = function moveHue(ev) {
                    var pageY = ev.type == 'touchmove' ? ev.originalEvent.changedTouches[0].pageY : ev.pageY;
                    change.apply(ev.data.cal.data('colpick').fields.eq(4).val(parseInt(360 * (ev.data.cal.data('colpick').height - Math.max(0, Math.min(ev.data.cal.data('colpick').height, pageY - ev.data.y))) / ev.data.cal.data('colpick').height, 10)).get(0), [ev.data.preview]);
                    return false;
                },
                upHue = function upHue(ev) {
                    fillRGBFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
                    fillHexFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
                    $(document).off('mouseup touchend', upHue);
                    $(document).off('mousemove touchmove', moveHue);
                    return false;
                },
                downSelector = function downSelector(ev) {
                    ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
                    var current = {
                        cal: $(this).parent(),
                        pos: $(this).offset()
                    };
                    current.preview = current.cal.data('colpick').livePreview;
                    $(document).on('mouseup touchend', current, upSelector);
                    $(document).on('mousemove touchmove', current, moveSelector);
                    var pageX, pageY;
                    if (ev.type == 'touchstart') {
                        pageX = ev.originalEvent.changedTouches[0].pageX, pageY = ev.originalEvent.changedTouches[0].pageY;
                    } else {
                        pageX = ev.pageX;
                        pageY = ev.pageY;
                    }
                    change.apply(current.cal.data('colpick').fields.eq(6).val(parseInt(100 * (current.cal.data('colpick').height - (pageY - current.pos.top)) / current.cal.data('colpick').height, 10)).end().eq(5).val(parseInt(100 * (pageX - current.pos.left) / current.cal.data('colpick').height, 10)).get(0), [current.preview]);
                    return false;
                },
                moveSelector = function moveSelector(ev) {
                    var pageX, pageY;
                    if (ev.type == 'touchmove') {
                        pageX = ev.originalEvent.changedTouches[0].pageX, pageY = ev.originalEvent.changedTouches[0].pageY;
                    } else {
                        pageX = ev.pageX;
                        pageY = ev.pageY;
                    }
                    change.apply(ev.data.cal.data('colpick').fields.eq(6).val(parseInt(100 * (ev.data.cal.data('colpick').height - Math.max(0, Math.min(ev.data.cal.data('colpick').height, pageY - ev.data.pos.top))) / ev.data.cal.data('colpick').height, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(ev.data.cal.data('colpick').height, pageX - ev.data.pos.left)) / ev.data.cal.data('colpick').height, 10)).get(0), [ev.data.preview]);
                    return false;
                },
                upSelector = function upSelector(ev) {
                    fillRGBFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
                    fillHexFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
                    $(document).off('mouseup touchend', upSelector);
                    $(document).off('mousemove touchmove', moveSelector);
                    return false;
                },
                clickSubmit = function clickSubmit(ev) {
                    var cal = $(this).parent();
                    var col = cal.data('colpick').color;
                    cal.data('colpick').origColor = col;
                    setCurrentColor(col, cal.get(0));
                    cal.data('colpick').onSubmit(col, hsbToHex(col), hsbToRgb(col), cal.data('colpick').el);
                },
                show = function show(ev) {
                    ev.stopPropagation();
                    var cal = $('#' + $(this).data('colpickId'));
                    cal.data('colpick').onBeforeShow.apply(this, [cal.get(0)]);
                    var pos = $(this).offset();
                    var top = pos.top + this.offsetHeight;
                    var left = pos.left;
                    var viewPort = getViewport();
                    var calW = cal.width();
                    if (left + calW > viewPort.l + viewPort.w) {
                        left -= calW;
                    }
                    cal.css({
                        left: left + 'px',
                        top: top + 'px'
                    });
                    if (cal.data('colpick').onShow.apply(this, [cal.get(0)]) != false) {
                        cal.show();
                    }
                    $('html').mousedown({
                        cal: cal
                    }, hide);
                    cal.mousedown(function(ev) {
                        ev.stopPropagation();
                    });
                },
                hide = function hide(ev) {
                    if (ev.data.cal.data('colpick').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
                        ev.data.cal.hide();
                    }
                    $('html').off('mousedown', hide);
                },
                getViewport = function getViewport() {
                    var m = document.compatMode == 'CSS1Compat';
                    return {
                        l: window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
                        w: window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth)
                    };
                },
                fixHSB = function fixHSB(hsb) {
                    return {
                        h: Math.min(360, Math.max(0, hsb.h)),
                        s: Math.min(100, Math.max(0, hsb.s)),
                        b: Math.min(100, Math.max(0, hsb.b))
                    };
                },
                fixRGB = function fixRGB(rgb) {
                    return {
                        r: Math.min(255, Math.max(0, rgb.r)),
                        g: Math.min(255, Math.max(0, rgb.g)),
                        b: Math.min(255, Math.max(0, rgb.b))
                    };
                },
                fixHex = function fixHex(hex) {
                    var len = 6 - hex.length;
                    if (len > 0) {
                        var o = [];
                        for (var i = 0; i < len; i++) {
                            o.push('0');
                        }
                        o.push(hex);
                        hex = o.join('');
                    }
                    return hex;
                },
                restoreOriginal = function restoreOriginal() {
                    var cal = $(this).parent();
                    var col = cal.data('colpick').origColor;
                    cal.data('colpick').color = col;
                    fillRGBFields(col, cal.get(0));
                    fillHexFields(col, cal.get(0));
                    fillHSBFields(col, cal.get(0));
                    setSelector(col, cal.get(0));
                    setHue(col, cal.get(0));
                    setNewColor(col, cal.get(0));
                };
            return {
                init: function init(opt) {
                    opt = $.extend({}, defaults, opt || {});
                    if (typeof opt.color == 'string') {
                        opt.color = hexToHsb(opt.color);
                    } else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
                        opt.color = rgbToHsb(opt.color);
                    } else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
                        opt.color = fixHSB(opt.color);
                    } else {
                        return this;
                    }
                    return this.each(function() {
                        if (!$(this).data('colpickId')) {
                            var options = $.extend({}, opt);
                            options.origColor = opt.color;
                            var id = 'collorpicker_' + parseInt(Math.random() * 1000);
                            $(this).data('colpickId', id);
                            var cal = $(tpl).attr('id', id);
                            cal.addClass('colpick_' + options.layout + (options.submit ? '' : ' colpick_' + options.layout + '_ns'));
                            if (options.colorScheme != 'light') {
                                cal.addClass('colpick_' + options.colorScheme);
                            }
                            cal.find('div.colpick_submit').html(options.submitText).click(clickSubmit);
                            options.fields = cal.find('input').change(change).blur(blur).focus(focus);
                            cal.find('div.colpick_field_arrs').mousedown(downIncrement).end().find('div.colpick_current_color').click(restoreOriginal);
                            options.selector = cal.find('div.colpick_color').on('mousedown touchstart', downSelector);
                            options.selectorIndic = options.selector.find('div.colpick_selector_outer');
                            options.el = this;
                            options.hue = cal.find('div.colpick_hue_arrs');
                            var huebar = options.hue.parent();
                            var UA = navigator.userAgent.toLowerCase();
                            var isIE = navigator.appName === 'Microsoft Internet Explorer';
                            var IEver = isIE ? parseFloat(UA.match(/msie ([0-9]{1,}[\.0-9]{0,})/)[1]) : 0;
                            var ngIE = isIE && IEver < 10;
                            var stops = ['#ff0000', '#ff0080', '#ff00ff', '#8000ff', '#0000ff', '#0080ff', '#00ffff', '#00ff80', '#00ff00', '#80ff00', '#ffff00', '#ff8000', '#ff0000'];
                            if (ngIE) {
                                var i, div;
                                for (i = 0; i <= 11; i++) {
                                    div = $('<div></div>').attr('style', 'height:8.333333%; filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=' + stops[i] + ', endColorstr=' + stops[i + 1] + '); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=' + stops[i] + ', endColorstr=' + stops[i + 1] + ')";');
                                    huebar.append(div);
                                }
                            } else {
                                var stopList = stops.join(',');
                                huebar.attr('style', 'background:-webkit-linear-gradient(top,' + stopList + '); background: -o-linear-gradient(top,' + stopList + '); background: -ms-linear-gradient(top,' + stopList + '); background:-moz-linear-gradient(top,' + stopList + '); -webkit-linear-gradient(top,' + stopList + '); background:linear-gradient(to bottom,' + stopList + '); ');
                            }
                            cal.find('div.colpick_hue').on('mousedown touchstart', downHue);
                            options.newColor = cal.find('div.colpick_new_color');
                            options.currentColor = cal.find('div.colpick_current_color');
                            cal.data('colpick', options);
                            fillRGBFields(options.color, cal.get(0));
                            fillHSBFields(options.color, cal.get(0));
                            fillHexFields(options.color, cal.get(0));
                            setHue(options.color, cal.get(0));
                            setSelector(options.color, cal.get(0));
                            setCurrentColor(options.color, cal.get(0));
                            setNewColor(options.color, cal.get(0));
                            if (options.flat) {
                                cal.appendTo(this).show();
                                cal.css({
                                    position: 'relative',
                                    display: 'block'
                                });
                            } else {
                                cal.appendTo(document.body);
                                $(this).on(options.showEvent, show);
                                cal.css({
                                    position: 'absolute'
                                });
                            }
                        }
                    });
                },
                showPicker: function showPicker() {
                    return this.each(function() {
                        if ($(this).data('colpickId')) {
                            show.apply(this);
                        }
                    });
                },
                hidePicker: function hidePicker() {
                    return this.each(function() {
                        if ($(this).data('colpickId')) {
                            $('#' + $(this).data('colpickId')).hide();
                        }
                    });
                },
                setColor: function setColor(col, setCurrent) {
                    setCurrent = typeof setCurrent === "undefined" ? 1 : setCurrent;
                    if (typeof col == 'string') {
                        col = hexToHsb(col);
                    } else if (col.r != undefined && col.g != undefined && col.b != undefined) {
                        col = rgbToHsb(col);
                    } else if (col.h != undefined && col.s != undefined && col.b != undefined) {
                        col = fixHSB(col);
                    } else {
                        return this;
                    }
                    return this.each(function() {
                        if ($(this).data('colpickId')) {
                            var cal = $('#' + $(this).data('colpickId'));
                            cal.data('colpick').color = col;
                            cal.data('colpick').origColor = col;
                            fillRGBFields(col, cal.get(0));
                            fillHSBFields(col, cal.get(0));
                            fillHexFields(col, cal.get(0));
                            setHue(col, cal.get(0));
                            setSelector(col, cal.get(0));
                            setNewColor(col, cal.get(0));
                            cal.data('colpick').onChange.apply(cal.parent(), [col, hsbToHex(col), hsbToRgb(col), cal.data('colpick').el, 1]);
                            if (setCurrent) {
                                setCurrentColor(col, cal.get(0));
                            }
                        }
                    });
                }
            };
        })();
        var hexToRgb = function hexToRgb(hex) {
            var hex = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);
            return {
                r: hex >> 16,
                g: (hex & 0x00FF00) >> 8,
                b: hex & 0x0000FF
            };
        };
        var hexToHsb = function hexToHsb(hex) {
            return rgbToHsb(hexToRgb(hex));
        };
        var rgbToHsb = function rgbToHsb(rgb) {
            var hsb = {
                h: 0,
                s: 0,
                b: 0
            };
            var min = Math.min(rgb.r, rgb.g, rgb.b);
            var max = Math.max(rgb.r, rgb.g, rgb.b);
            var delta = max - min;
            hsb.b = max;
            hsb.s = max != 0 ? 255 * delta / max : 0;
            if (hsb.s != 0) {
                if (rgb.r == max) hsb.h = (rgb.g - rgb.b) / delta;
                else if (rgb.g == max) hsb.h = 2 + (rgb.b - rgb.r) / delta;
                else hsb.h = 4 + (rgb.r - rgb.g) / delta;
            } else hsb.h = -1;
            hsb.h *= 60;
            if (hsb.h < 0) hsb.h += 360;
            hsb.s *= 100 / 255;
            hsb.b *= 100 / 255;
            return hsb;
        };
        var hsbToRgb = function hsbToRgb(hsb) {
            var rgb = {};
            var h = hsb.h;
            var s = hsb.s * 255 / 100;
            var v = hsb.b * 255 / 100;
            if (s == 0) {
                rgb.r = rgb.g = rgb.b = v;
            } else {
                var t1 = v;
                var t2 = (255 - s) * v / 255;
                var t3 = (t1 - t2) * (h % 60) / 60;
                if (h == 360) h = 0;
                if (h < 60) {
                    rgb.r = t1;
                    rgb.b = t2;
                    rgb.g = t2 + t3;
                } else if (h < 120) {
                    rgb.g = t1;
                    rgb.b = t2;
                    rgb.r = t1 - t3;
                } else if (h < 180) {
                    rgb.g = t1;
                    rgb.r = t2;
                    rgb.b = t2 + t3;
                } else if (h < 240) {
                    rgb.b = t1;
                    rgb.r = t2;
                    rgb.g = t1 - t3;
                } else if (h < 300) {
                    rgb.b = t1;
                    rgb.g = t2;
                    rgb.r = t2 + t3;
                } else if (h < 360) {
                    rgb.r = t1;
                    rgb.g = t2;
                    rgb.b = t1 - t3;
                } else {
                    rgb.r = 0;
                    rgb.g = 0;
                    rgb.b = 0;
                }
            }
            return {
                r: Math.round(rgb.r),
                g: Math.round(rgb.g),
                b: Math.round(rgb.b)
            };
        };
        var rgbToHex = function rgbToHex(rgb) {
            var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
            $.each(hex, function(nr, val) {
                if (val.length == 1) {
                    hex[nr] = '0' + val;
                }
            });
            return hex.join('');
        };
        var hsbToHex = function hsbToHex(hsb) {
            return rgbToHex(hsbToRgb(hsb));
        };
        $.fn.extend({
            colpick: colpick.init,
            colpickHide: colpick.hidePicker,
            colpickShow: colpick.showPicker,
            colpickSetColor: colpick.setColor
        });
        $.extend({
            colpick: {
                rgbToHex: rgbToHex,
                rgbToHsb: rgbToHsb,
                hsbToHex: hsbToHex,
                hsbToRgb: hsbToRgb,
                hexToHsb: hexToHsb,
                hexToRgb: hexToRgb
            }
        });
    })(jQuery);
}), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        $.fn.dcVerticalMegaMenu = function(options) {
            var defaults = {
                classParent: 'tptn-mega',
                arrow: true,
                classArrow: 'material-icons',
                classContainer: 'sub-container',
                classSubMenu: 'sub',
                classMega: 'mega',
                classSubParent: 'mega-hdr',
                classSubLink: 'mega-hdr',
                classRow: 'tptnrow',
                rowItems: 4,
                speed: 'fast',
                effect: 'slide',
                direction: 'right'
            };
            var options = $.extend(defaults, options);
            var $dcVerticalMegaMenuObj = this;
            return $dcVerticalMegaMenuObj.each(function(options) {
                var $mega = $(this);
                if (defaults.direction == 'left') {
                    $mega.addClass('left');
                } else {
                    $mega.addClass('right');
                }
                var megaWidth = $mega.width();
                $('> li', $mega).each(function() {
                    var $parent = $(this);
                    var $megaSub = $('> ul', $parent);
                    if ($megaSub.length > 0) {
                        $('> a', $parent).addClass(defaults.classParent).append('<span class="' + defaults.classArrow + '"></span>');
                        $megaSub.addClass(defaults.classSubMenu).wrap('<div class="' + defaults.classContainer + '" />');
                        var $container = $('.' + defaults.classContainer, $parent);
                        if ($('ul', $megaSub).length > 0) {
                            $parent.addClass(defaults.classParent + '-li');
                            $container.addClass(defaults.classMega);
                            $('> li', $megaSub).each(function() {
                                $(this).addClass('mega-unit');
                                if ($('> ul', this).length) {
                                    $(this).addClass(defaults.classSubParent);
                                    $('> a', this).addClass(defaults.classSubParent + '-a');
                                } else {
                                    $(this).addClass(defaults.classSubLink);
                                    $('> a', this).addClass(defaults.classSubLink + '-a');
                                }
                            });
                            var hdrs = $('.mega-unit', $parent);
                            var rowSize = parseInt(defaults.rowItems);
                            for (var i = 0; i < hdrs.length; i += rowSize) {
                                hdrs.slice(i, i + rowSize).wrapAll('<div class="' + defaults.classRow + '" />');
                            }
                            var itemWidth = $('.mega-unit', $megaSub).outerWidth(true);
                            var rowItems = $('.tptnrow:eq(0) .mega-unit', $megaSub).length;
                            var innerItemWidth = itemWidth * rowItems;
                            var totalItemWidth = innerItemWidth + containerPad;
                            $('.tptnrow', this).each(function() {
                                $('.mega-unit:last', this).addClass('last');
                                $(this).css('width', innerItemWidth + 'px');
                            });
                            var subWidth = $megaSub.outerWidth(true);
                            var totalWidth = $container.outerWidth(true);
                            var containerPad = totalWidth - subWidth;
                            $('.tptnrow', $megaSub).each(function() {
                                var rowHeight = $(this).height();
                                $(this).parent('.tptnrow').css('height', rowHeight + 'px');
                            });
                            $('.tptnrow:last', $megaSub).addClass('last');
                            $('.tptnrow:first', $megaSub).addClass('first');
                        } else {
                            $container.addClass('non-' + defaults.classMega);
                        }
                    }
                    var $container = $('.' + defaults.classContainer, $parent);
                    var subHeight = $container.height();
                    $container.css({
                        height: subHeight + 'px',
                        width: subWidth + 'px'
                    }).hide();
                });
                var config = {
                    sensitivity: 2,
                    interval: 0,
                    over: megaOver,
                    timeout: 0,
                    out: megaOut
                };
                $('li', $dcVerticalMegaMenuObj).hoverIntent(config);

                function megaOver() {
                    $(this).addClass('mega-hover');
                    var $link = $('> a', this);
                    var $subNav = $('.sub', this);
                    var $container = $('.sub-container', this);
                    var width = $container.width();
                    var outerHeight = $container.outerHeight(true);
                    var height = $container.height();
                    var itemHeight = $(this).outerHeight(true);
                    var offset = $link.offset();
                    var scrollTop = $(window).scrollTop();
                    offset = offset.top - scrollTop;
                    var bodyHeight = $(window).height();
                    var maxHeight = bodyHeight - offset;
                    var xsHeight = maxHeight - outerHeight - itemHeight;
                    if (xsHeight < 0) {
                        var containerMargin = xsHeight - itemHeight;
                        $container.css({
                            marginTop: containerMargin + 'px'
                        });
                    }
                    var containerPosition = {
                        right: megaWidth
                    };
                    if (defaults.direction == 'right') {
                        containerPosition = {
                            left: megaWidth
                        };
                    }
                    if (defaults.effect == 'fade') {
                        $container.css(containerPosition).fadeIn(defaults.speed);
                    }
                    if (defaults.effect == 'show') {
                        $container.css(containerPosition).show();
                    }
                    if (defaults.effect == 'slide') {
                        $container.css({
                            width: 0,
                            height: 0,
                            opacity: 0
                        });
                        if (defaults.direction == 'right') {
                            $container.show().css({
                                left: megaWidth
                            });
                        } else {
                            $container.show().css({
                                right: megaWidth
                            });
                        }
                        $container.animate({
                            width: width,
                            height: height,
                            opacity: 1
                        }, defaults.speed);
                    }
                }

                function megaOut() {
                    $(this).removeClass('mega-hover');
                    var $container = $('.sub-container', this);
                    $container.hide();
                }
            });
        };
    })(jQuery);
}), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        $.fn.extend({
            rotator: function rotator(options) {
                var defaults = {
                    fadeSpeed: 300,
                    pauseSpeed: 3000,
                    child: null
                };
                var options = $.extend(defaults, options);
                return this.each(function() {
                    var o = options;
                    var obj = $(this);
                    var items = $(obj.children(), obj);
                    items.each(function() {
                        $(this).hide();
                    });
                    if (!o.child) {
                        var next = $(obj).children(':first');
                    } else {
                        var next = o.child;
                    }
                    $(next).fadeIn(o.fadeSpeed, function() {
                        $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
                            var next = $(this).next();
                            if (next.length == 0) {
                                next = $(obj).children(':first');
                            }
                            $(obj).rotator({
                                child: next,
                                fadeSpeed: o.fadeSpeed,
                                pauseSpeed: o.pauseSpeed
                            });
                        });
                    });
                });
            }
        });
    })(jQuery);
}), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        $.fn.scrollbox = function(config) {
            var defConfig = {
                linear: !1,
                startDelay: 2,
                delay: 3,
                step: 5,
                speed: 32,
                switchItems: 1,
                direction: "vertical",
                distance: "auto",
                autoPlay: !0,
                onMouseOverPause: !0,
                paused: !1,
                queue: null,
                listElement: "ul",
                listItemElement: "li",
                infiniteLoop: !0,
                switchAmount: 0,
                afterForward: null,
                afterBackward: null,
                triggerStackable: !1
            };
            config = $.extend(defConfig, config);
            config.scrollOffset = config.direction === "vertical" ? "scrollTop" : "scrollLeft";
            if (config.queue) {
                config.queue = $("#" + config.queue)
            }
            return this.each(function() {
                var container = $(this),
                    containerUL, scrollingId = null,
                    nextScrollId = null,
                    paused = !1,
                    releaseStack, backward, forward, resetClock, scrollForward, scrollBackward, forwardHover, pauseHover, switchCount = 0,
                    stackedTriggerIndex = 0;
                if (config.onMouseOverPause) {
                    container.bind("mouseover", function() {
                        paused = !0
                    });
                    container.bind("mouseout", function() {
                        paused = !1
                    })
                }
                containerUL = container.children(config.listElement + ":first-child");
                if (config.infiniteLoop === !1 && config.switchAmount === 0) {
                    config.switchAmount = containerUL.children().length
                }
                scrollForward = function() {
                    if (paused) {
                        return
                    }
                    var curLi, i, newScrollOffset, scrollDistance, theStep;
                    curLi = containerUL.children(config.listItemElement + ":first-child");
                    scrollDistance = config.distance !== "auto" ? config.distance : config.direction === "vertical" ? curLi.outerHeight(!0) : curLi.outerWidth(!0);
                    if (!config.linear) {
                        theStep = Math.max(3, parseInt((scrollDistance - container[0][config.scrollOffset]) * .3, 10));
                        newScrollOffset = Math.min(container[0][config.scrollOffset] + theStep, scrollDistance)
                    } else {
                        newScrollOffset = Math.min(container[0][config.scrollOffset] + config.step, scrollDistance)
                    }
                    container[0][config.scrollOffset] = newScrollOffset;
                    if (newScrollOffset >= scrollDistance) {
                        for (i = 0; i < config.switchItems; i++) {
                            if (config.queue && config.queue.find(config.listItemElement).length > 0) {
                                containerUL.append(config.queue.find(config.listItemElement)[0]);
                                containerUL.children(config.listItemElement + ":first-child").remove()
                            } else {
                                containerUL.append(containerUL.children(config.listItemElement + ":first-child"))
                            }++switchCount
                        }
                        container[0][config.scrollOffset] = 0;
                        clearInterval(scrollingId);
                        scrollingId = null;
                        if ($.isFunction(config.afterForward)) {
                            config.afterForward.call(container, {
                                switchCount: switchCount,
                                currentFirstChild: containerUL.children(config.listItemElement + ":first-child")
                            })
                        }
                        if (config.triggerStackable && stackedTriggerIndex !== 0) {
                            releaseStack();
                            return
                        }
                        if (config.infiniteLoop === !1 && switchCount >= config.switchAmount) {
                            return
                        }
                        if (config.autoPlay) {
                            nextScrollId = setTimeout(forward, config.delay * 1e3)
                        }
                    }
                };
                scrollBackward = function() {
                    if (paused) {
                        return
                    }
                    var curLi, i, newScrollOffset, scrollDistance, theStep;
                    if (container[0][config.scrollOffset] === 0) {
                        for (i = 0; i < config.switchItems; i++) {
                            containerUL.children(config.listItemElement + ":last-child").insertBefore(containerUL.children(config.listItemElement + ":first-child"))
                        }
                        curLi = containerUL.children(config.listItemElement + ":first-child");
                        scrollDistance = config.distance !== "auto" ? config.distance : config.direction === "vertical" ? curLi.height() : curLi.width();
                        container[0][config.scrollOffset] = scrollDistance
                    }
                    if (!config.linear) {
                        theStep = Math.max(3, parseInt(container[0][config.scrollOffset] * .3, 10));
                        newScrollOffset = Math.max(container[0][config.scrollOffset] - theStep, 0)
                    } else {
                        newScrollOffset = Math.max(container[0][config.scrollOffset] - config.step, 0)
                    }
                    container[0][config.scrollOffset] = newScrollOffset;
                    if (newScrollOffset === 0) {
                        --switchCount;
                        clearInterval(scrollingId);
                        scrollingId = null;
                        if ($.isFunction(config.afterBackward)) {
                            config.afterBackward.call(container, {
                                switchCount: switchCount,
                                currentFirstChild: containerUL.children(config.listItemElement + ":first-child")
                            })
                        }
                        if (config.triggerStackable && stackedTriggerIndex !== 0) {
                            releaseStack();
                            return
                        }
                        if (config.autoPlay) {
                            nextScrollId = setTimeout(forward, config.delay * 1e3)
                        }
                    }
                };
                releaseStack = function() {
                    if (stackedTriggerIndex === 0) {
                        return
                    }
                    if (stackedTriggerIndex > 0) {
                        stackedTriggerIndex--;
                        nextScrollId = setTimeout(forward, 0)
                    } else {
                        stackedTriggerIndex++;
                        nextScrollId = setTimeout(backward, 0)
                    }
                };
                forward = function() {
                    clearInterval(scrollingId);
                    scrollingId = setInterval(scrollForward, config.speed)
                };
                backward = function() {
                    clearInterval(scrollingId);
                    scrollingId = setInterval(scrollBackward, config.speed)
                };
                forwardHover = function() {
                    config.autoPlay = !0;
                    paused = !1;
                    clearInterval(scrollingId);
                    scrollingId = setInterval(scrollForward, config.speed)
                };
                pauseHover = function() {
                    paused = !0
                };
                resetClock = function(delay) {
                    config.delay = delay || config.delay;
                    clearTimeout(nextScrollId);
                    if (config.autoPlay) {
                        nextScrollId = setTimeout(forward, config.delay * 1e3)
                    }
                };
                if (config.autoPlay) {
                    nextScrollId = setTimeout(forward, config.startDelay * 1e3)
                }
                container.bind("resetClock", function(delay) {
                    resetClock(delay)
                });
                container.bind("forward", function() {
                    if (config.triggerStackable) {
                        if (scrollingId !== null) {
                            stackedTriggerIndex++
                        } else {
                            forward()
                        }
                    } else {
                        clearTimeout(nextScrollId);
                        forward()
                    }
                });
                container.bind("backward", function() {
                    if (config.triggerStackable) {
                        if (scrollingId !== null) {
                            stackedTriggerIndex--
                        } else {
                            backward()
                        }
                    } else {
                        clearTimeout(nextScrollId);
                        backward()
                    }
                });
                container.bind("pauseHover", function() {
                    pauseHover()
                });
                container.bind("forwardHover", function() {
                    forwardHover()
                });
                container.bind("speedUp", function(event, speed) {
                    if (speed === "undefined") {
                        speed = Math.max(1, parseInt(config.speed / 2, 10))
                    }
                    config.speed = speed
                });
                container.bind("speedDown", function(event, speed) {
                    if (speed === "undefined") {
                        speed = config.speed * 2
                    }
                    config.speed = speed
                });
                container.bind("updateConfig", function(event, options) {
                    config = $.extend(config, options)
                })
            })
        }
    })(jQuery);
}), (function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(0);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(1);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    __webpack_require__(3);
    var _componentsProductMiniature = __webpack_require__(2);
    var _componentsProductMiniature2 = _interopRequireDefault(_componentsProductMiniature);
    (0, _jquery2['default'])(document).ready(function() {
        _prestashop2['default'].on('clickQuickView', function(elm) {
            var data = {
                'action': 'quickview',
                'id_product': elm.dataset.idProduct,
                'id_product_attribute': elm.dataset.idProductAttribute
            };
            _jquery2['default'].post(_prestashop2['default'].urls.pages.product, data, null, 'json').then(function(resp) {
                (0, _jquery2['default'])('body').append(resp.quickview_html);
                var productModal = (0, _jquery2['default'])('#quickview-modal-' + resp.product.id + '-' + resp.product.id_product_attribute);
                productModal.modal('show');
                productConfig(productModal);
                productModal.on('hidden.bs.modal', function() {
                    productModal.remove()
                })
            }).fail(function(resp) {
                _prestashop2['default'].emit('handleError', {
                    eventType: 'clickQuickView',
                    resp: resp
                })
            })
        });
        var productConfig = function productConfig(qv) {
            var MAX_THUMBS = 4;
            var $arrows = (0, _jquery2['default'])('.js-arrows');
            var $thumbnails = qv.find('.js-qv-product-images');
            (0, _jquery2['default'])('.js-thumb').on('click', function(event) {
                if ((0, _jquery2['default'])('.js-thumb').hasClass('selected')) {
                    (0, _jquery2['default'])('.js-thumb').removeClass('selected')
                }(0, _jquery2['default'])(event.currentTarget).addClass('selected');
                (0, _jquery2['default'])('.js-qv-product-cover').attr('src', (0, _jquery2['default'])(event.target).data('image-large-src'))
            });
            if ($thumbnails.find('li').length <= MAX_THUMBS) {
                $arrows.hide()
            } else {
                $arrows.on('click', function(event) {
                    if ((0, _jquery2['default'])(event.target).hasClass('arrow-up') && (0, _jquery2['default'])('.js-qv-product-images').position().top < 0) {
                        move('up');
                        (0, _jquery2['default'])('.arrow-down').css('opacity', '1')
                    } else if ((0, _jquery2['default'])(event.target).hasClass('arrow-down') && $thumbnails.position().top + $thumbnails.height() > (0, _jquery2['default'])('.js-qv-mask').height()) {
                        move('down');
                        (0, _jquery2['default'])('.arrow-up').css('opacity', '1')
                    }
                })
            }
            qv.find('#quantity_wanted').TouchSpin({
                verticalbuttons: !0,
                verticalupclass: 'material-icons touchspin-up',
                verticaldownclass: 'material-icons touchspin-down',
                buttondown_class: 'btn btn-touchspin js-touchspin',
                buttonup_class: 'btn btn-touchspin js-touchspin',
                min: 1,
                max: 1000000
            })
        };
        var move = function move(direction) {
            var THUMB_MARGIN = 20;
            var $thumbnails = (0, _jquery2['default'])('.js-qv-product-images');
            var thumbHeight = (0, _jquery2['default'])('.js-qv-product-images li img').height() + THUMB_MARGIN;
            var currentPosition = $thumbnails.position().top;
            $thumbnails.velocity({
                translateY: direction === 'up' ? currentPosition + thumbHeight : currentPosition - thumbHeight
            }, function() {
                if ($thumbnails.position().top >= 0) {
                    (0, _jquery2['default'])('.arrow-up').css('opacity', '.2')
                } else if ($thumbnails.position().top + $thumbnails.height() <= (0, _jquery2['default'])('.js-qv-mask').height()) {
                    (0, _jquery2['default'])('.arrow-down').css('opacity', '.2')
                }
            })
        };
        (0, _jquery2['default'])('body').on('click', '#search_filter_toggler', function(event) {
            event.preventDefault();
            (0, _jquery2['default'])("#search_filters_wrapper").addClass('filter-show');
            (0, _jquery2['default'])('.tptn-overlay').addClass('filter-overlay z-104').show()
        });
        (0, _jquery2['default'])('body').on('click', '#search_filter_controls .clear, #search_filter_controls .ok, .filter-overlay', function(event) {
            event.preventDefault();
            (0, _jquery2['default'])("#search_filters_wrapper").removeClass('filter-show');
            (0, _jquery2['default'])('.tptn-overlay').removeClass('filter-overlay z-104').hide()
        });
        var parseSearchUrl = function parseSearchUrl(event) {
            if (event.target.dataset.searchUrl !== undefined) {
                return event.target.dataset.searchUrl
            }
            if ((0, _jquery2['default'])(event.target).parent()[0].dataset.searchUrl === undefined) {
                throw new Error('Can not parse search URL')
            }
            return (0, _jquery2['default'])(event.target).parent()[0].dataset.searchUrl
        };
        (0, _jquery2['default'])('body').on('change', '#search_filters input[data-search-url]', function(event) {
            _prestashop2['default'].emit('updateFacets', parseSearchUrl(event))
        });
        (0, _jquery2['default'])('body').on('click', '.js-search-filters-clear-all', function(event) {
            _prestashop2['default'].emit('updateFacets', parseSearchUrl(event))
        });
        (0, _jquery2['default'])('body').on('click', '.js-search-link', function(event) {
            event.preventDefault();
            _prestashop2['default'].emit('updateFacets', (0, _jquery2['default'])(event.target).closest('a').get(0).href)
        });
        (0, _jquery2['default'])('body').on('change', '#search_filters select', function(event) {
            var form = (0, _jquery2['default'])(event.target).closest('form');
            _prestashop2['default'].emit('updateFacets', '?' + form.serialize())
        });
        _prestashop2['default'].on('updateProductList', function(data) {
            updateProductListDOM(data)
        })
    });

    function updateProductListDOM(data) {
        (0, _jquery2['default'])('#search_filters').replaceWith(data.rendered_facets);
        (0, _jquery2['default'])('#js-active-search-filters').replaceWith(data.rendered_active_filters);
        (0, _jquery2['default'])('#js-product-list-top').replaceWith(data.rendered_products_top);
        (0, _jquery2['default'])('#js-product-list').replaceWith(data.rendered_products);
        (0, _jquery2['default'])('#js-product-list-bottom').replaceWith(data.rendered_products_bottom);
        if (data.rendered_products_header) {
            (0, _jquery2['default'])('#js-product-list-header').replaceWith(data.rendered_products_header)
        }
        var productMinitature = new _componentsProductMiniature2['default']();
        productMinitature.init()
    }
}), (function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(0);
    var _jquery2 = _interopRequireDefault(_jquery);
    (0, _jquery2['default'])(document).ready(function() {
        createProductSpin();
        createInputFile();
        coverImage();
        imageScrollBox();
        prestashop.on('updatedProduct', function(event) {
            createInputFile();
            coverImage();
            if (event && event.product_minimal_quantity) {
                var minimalProductQuantity = parseInt(event.product_minimal_quantity, 10);
                var quantityInputSelector = '#quantity_wanted';
                var quantityInput = (0, _jquery2['default'])(quantityInputSelector);
                quantityInput.trigger('touchspin.updatesettings', {
                    min: minimalProductQuantity
                })
            }
            imageScrollBox();
            (0, _jquery2['default'])((0, _jquery2['default'])('.tabs .nav-link.active').attr('href')).addClass('active').removeClass('fade');
            (0, _jquery2['default'])('.js-product-images-modal').replaceWith(event.product_images_modal)
        });

        function coverImage() {
            (0, _jquery2['default'])('.js-thumb').on('click', function(event) {
                (0, _jquery2['default'])('.js-modal-product-cover').attr('src', (0, _jquery2['default'])(event.target).data('image-large-src'));
                (0, _jquery2['default'])('.selected').removeClass('selected');
                (0, _jquery2['default'])(event.target).addClass('selected');
                (0, _jquery2['default'])('.js-qv-product-cover').prop('src', (0, _jquery2['default'])(event.currentTarget).data('image-large-src'))
            })
        }

        function imageScrollBox() {
            (0, _jquery2['default'])(".thumbcrsl").owlCarousel({
                nav: !0,
                dots: !1,
                navText: ["", ""],
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 4
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 4
                    }
                }
            })
        }

        function createInputFile() {
            (0, _jquery2['default'])('.js-file-input').on('change', function(event) {
                var target = undefined,
                    file = undefined;
                if ((target = (0, _jquery2['default'])(event.currentTarget)[0]) && (file = target.files[0])) {
                    (0, _jquery2['default'])(target).prev().text(file.name)
                }
            })
        }

        function createProductSpin() {
            var quantityInput = (0, _jquery2['default'])('#quantity_wanted');
            quantityInput.TouchSpin({
                verticalbuttons: !0,
                verticalupclass: 'material-icons touchspin-up',
                verticaldownclass: 'material-icons touchspin-down',
                buttondown_class: 'btn btn-touchspin js-touchspin',
                buttonup_class: 'btn btn-touchspin js-touchspin',
                min: parseInt(quantityInput.attr('min'), 10),
                max: 1000000
            });
            var quantity = quantityInput.val();
            quantityInput.on('keyup change', function(event) {
                var newQuantity = (0, _jquery2['default'])(this).val();
                if (newQuantity !== quantity) {
                    quantity = newQuantity;
                    var $productRefresh = (0, _jquery2['default'])('.product-refresh');
                    (0, _jquery2['default'])(event.currentTarget).trigger('touchspin.stopspin');
                    $productRefresh.trigger('click', {
                        eventType: 'updatedProductQuantity'
                    })
                }
                event.preventDefault();
                return !1
            })
        }
    });
}), (function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(0);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(1);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    _prestashop2['default'].responsive = _prestashop2['default'].responsive || {};
    _prestashop2['default'].responsive.current_width = window.innerWidth;
    _prestashop2['default'].responsive.min_width = 1199;
    _prestashop2['default'].responsive.mobile = _prestashop2['default'].responsive.current_width < _prestashop2['default'].responsive.min_width;

    function swapChildren(obj1, obj2) {
        var temp = obj2.children().detach();
        obj2.empty().append(obj1.children().detach());
        obj1.append(temp)
    }

    function toggleMobileStyles() {
        if (_prestashop2['default'].responsive.mobile) {
            (0, _jquery2['default'])("*[id^='_desktop_']").each(function(idx, el) {
                var target = (0, _jquery2['default'])('#' + el.id.replace('_desktop_', '_mobile_'));
                if (target.length) {
                    swapChildren((0, _jquery2['default'])(el), target)
                }
            })
        } else {
            (0, _jquery2['default'])("*[id^='_mobile_']").each(function(idx, el) {
                var target = (0, _jquery2['default'])('#' + el.id.replace('_mobile_', '_desktop_'));
                if (target.length) {
                    swapChildren((0, _jquery2['default'])(el), target)
                }
            })
        }
        _prestashop2['default'].emit('responsive update', {
            mobile: _prestashop2['default'].responsive.mobile
        })
    }(0, _jquery2['default'])(window).on('resize', function() {
        var _cw = _prestashop2['default'].responsive.current_width;
        var _mw = _prestashop2['default'].responsive.min_width;
        var _w = window.innerWidth;
        var _toggle = _cw >= _mw && _w < _mw || _cw < _mw && _w >= _mw;
        _prestashop2['default'].responsive.current_width = _w;
        _prestashop2['default'].responsive.mobile = _prestashop2['default'].responsive.current_width < _prestashop2['default'].responsive.min_width;
        if (_toggle) {
            toggleMobileStyles()
        }
    });
    (0, _jquery2['default'])(document).ready(function() {
        if (_prestashop2['default'].responsive.mobile) {
            toggleMobileStyles()
        }
    })
}), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        'use strict';
        var _currentSpinnerId = 0;

        function _scopedEventName(name, id) {
            return name + '.touchspin_' + id
        }

        function _scopeEventNames(names, id) {
            return $.map(names, function(name) {
                return _scopedEventName(name, id)
            })
        }
        $.fn.TouchSpin = function(options) {
            if (options === 'destroy') {
                this.each(function() {
                    var originalinput = $(this),
                        originalinput_data = originalinput.data();
                    $(document).off(_scopeEventNames(['mouseup', 'touchend', 'touchcancel', 'mousemove', 'touchmove', 'scroll', 'scrollstart'], originalinput_data.spinnerid).join(' '))
                });
                return
            }
            var defaults = {
                min: 0,
                max: 100,
                initval: '',
                replacementval: '',
                step: 1,
                decimals: 0,
                stepinterval: 100,
                forcestepdivisibility: 'round',
                stepintervaldelay: 500,
                verticalbuttons: !1,
                verticalupclass: 'glyphicon glyphicon-chevron-up',
                verticaldownclass: 'glyphicon glyphicon-chevron-down',
                prefix: '',
                postfix: '',
                prefix_extraclass: '',
                postfix_extraclass: '',
                booster: !0,
                boostat: 10,
                maxboostedstep: !1,
                mousewheel: !0,
                buttondown_class: 'btn btn-default',
                buttonup_class: 'btn btn-default',
                buttondown_txt: '-',
                buttonup_txt: '+'
            };
            var attributeMap = {
                min: 'min',
                max: 'max',
                initval: 'init-val',
                replacementval: 'replacement-val',
                step: 'step',
                decimals: 'decimals',
                stepinterval: 'step-interval',
                verticalbuttons: 'vertical-buttons',
                verticalupclass: 'vertical-up-class',
                verticaldownclass: 'vertical-down-class',
                forcestepdivisibility: 'force-step-divisibility',
                stepintervaldelay: 'step-interval-delay',
                prefix: 'prefix',
                postfix: 'postfix',
                prefix_extraclass: 'prefix-extra-class',
                postfix_extraclass: 'postfix-extra-class',
                booster: 'booster',
                boostat: 'boostat',
                maxboostedstep: 'max-boosted-step',
                mousewheel: 'mouse-wheel',
                buttondown_class: 'button-down-class',
                buttonup_class: 'button-up-class',
                buttondown_txt: 'button-down-txt',
                buttonup_txt: 'button-up-txt'
            };
            return this.each(function() {
                var settings, originalinput = $(this),
                    originalinput_data = originalinput.data(),
                    container, elements, value, downSpinTimer, upSpinTimer, downDelayTimeout, upDelayTimeout, spincount = 0,
                    spinning = !1;
                init();

                function init() {
                    if (originalinput.data('alreadyinitialized')) {
                        return
                    }
                    originalinput.data('alreadyinitialized', !0);
                    _currentSpinnerId += 1;
                    originalinput.data('spinnerid', _currentSpinnerId);
                    if (!originalinput.is('input')) {
                        console.log('Must be an input.');
                        return
                    }
                    _initSettings();
                    _setInitval();
                    _checkValue();
                    _buildHtml();
                    _initElements();
                    _hideEmptyPrefixPostfix();
                    _bindEvents();
                    _bindEventsInterface();
                    elements.input.css('display', 'block')
                }

                function _setInitval() {
                    if (settings.initval !== '' && originalinput.val() === '') {
                        originalinput.val(settings.initval)
                    }
                }

                function changeSettings(newsettings) {
                    _updateSettings(newsettings);
                    _checkValue();
                    var value = elements.input.val();
                    if (value !== '') {
                        value = Number(elements.input.val());
                        elements.input.val(value.toFixed(settings.decimals))
                    }
                }

                function _initSettings() {
                    settings = $.extend({}, defaults, originalinput_data, _parseAttributes(), options)
                }

                function _parseAttributes() {
                    var data = {};
                    $.each(attributeMap, function(key, value) {
                        var attrName = 'bts-' + value + '';
                        if (originalinput.is('[data-' + attrName + ']')) {
                            data[key] = originalinput.data(attrName)
                        }
                    });
                    return data
                }

                function _updateSettings(newsettings) {
                    settings = $.extend({}, settings, newsettings)
                }

                function _buildHtml() {
                    var initval = originalinput.val(),
                        parentelement = originalinput.parent();
                    if (initval !== '') {
                        initval = Number(initval).toFixed(settings.decimals)
                    }
                    originalinput.data('initvalue', initval).val(initval);
                    originalinput.addClass('form-control');
                    if (parentelement.hasClass('input-group')) {
                        _advanceInputGroup(parentelement)
                    } else {
                        _buildInputGroup()
                    }
                }

                function _advanceInputGroup(parentelement) {
                    parentelement.addClass('bootstrap-touchspin');
                    var prev = originalinput.prev(),
                        next = originalinput.next();
                    var downhtml, uphtml, prefixhtml = '<span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span>',
                        postfixhtml = '<span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span>';
                    if (prev.hasClass('input-group-btn')) {
                        downhtml = '<button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button>';
                        prev.append(downhtml)
                    } else {
                        downhtml = '<span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span>';
                        $(downhtml).insertBefore(originalinput)
                    }
                    if (next.hasClass('input-group-btn')) {
                        uphtml = '<button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button>';
                        next.prepend(uphtml)
                    } else {
                        uphtml = '<span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span>';
                        $(uphtml).insertAfter(originalinput)
                    }
                    $(prefixhtml).insertBefore(originalinput);
                    $(postfixhtml).insertAfter(originalinput);
                    container = parentelement
                }

                function _buildInputGroup() {
                    var html;
                    if (settings.verticalbuttons) {
                        html = '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn-vertical"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + settings.verticalupclass + '"></i></button><button class="' + settings.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + settings.verticaldownclass + '"></i></button></span></div>'
                    } else {
                        html = '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span></div>'
                    }
                    container = $(html).insertBefore(originalinput);
                    $('.bootstrap-touchspin-prefix', container).after(originalinput);
                    if (originalinput.hasClass('input-sm')) {
                        container.addClass('input-group-sm')
                    } else if (originalinput.hasClass('input-lg')) {
                        container.addClass('input-group-lg')
                    }
                }

                function _initElements() {
                    elements = {
                        down: $('.bootstrap-touchspin-down', container),
                        up: $('.bootstrap-touchspin-up', container),
                        input: $('input', container),
                        prefix: $('.bootstrap-touchspin-prefix', container).addClass(settings.prefix_extraclass),
                        postfix: $('.bootstrap-touchspin-postfix', container).addClass(settings.postfix_extraclass)
                    }
                }

                function _hideEmptyPrefixPostfix() {
                    if (settings.prefix === '') {
                        elements.prefix.hide()
                    }
                    if (settings.postfix === '') {
                        elements.postfix.hide()
                    }
                }

                function _bindEvents() {
                    originalinput.on('keydown', function(ev) {
                        var code = ev.keyCode || ev.which;
                        if (code === 38) {
                            if (spinning !== 'up') {
                                upOnce();
                                startUpSpin()
                            }
                            ev.preventDefault()
                        } else if (code === 40) {
                            if (spinning !== 'down') {
                                downOnce();
                                startDownSpin()
                            }
                            ev.preventDefault()
                        }
                    });
                    originalinput.on('keyup', function(ev) {
                        var code = ev.keyCode || ev.which;
                        if (code === 38) {
                            stopSpin()
                        } else if (code === 40) {
                            stopSpin()
                        }
                    });
                    originalinput.on('blur', function() {
                        _checkValue()
                    });
                    elements.down.on('keydown', function(ev) {
                        var code = ev.keyCode || ev.which;
                        if (code === 32 || code === 13) {
                            if (spinning !== 'down') {
                                downOnce();
                                startDownSpin()
                            }
                            ev.preventDefault()
                        }
                    });
                    elements.down.on('keyup', function(ev) {
                        var code = ev.keyCode || ev.which;
                        if (code === 32 || code === 13) {
                            stopSpin()
                        }
                    });
                    elements.up.on('keydown', function(ev) {
                        var code = ev.keyCode || ev.which;
                        if (code === 32 || code === 13) {
                            if (spinning !== 'up') {
                                upOnce();
                                startUpSpin()
                            }
                            ev.preventDefault()
                        }
                    });
                    elements.up.on('keyup', function(ev) {
                        var code = ev.keyCode || ev.which;
                        if (code === 32 || code === 13) {
                            stopSpin()
                        }
                    });
                    elements.down.on('mousedown.touchspin', function(ev) {
                        elements.down.off('touchstart.touchspin');
                        if (originalinput.is(':disabled')) {
                            return
                        }
                        downOnce();
                        startDownSpin();
                        ev.preventDefault();
                        ev.stopPropagation()
                    });
                    elements.down.on('touchstart.touchspin', function(ev) {
                        elements.down.off('mousedown.touchspin');
                        if (originalinput.is(':disabled')) {
                            return
                        }
                        downOnce();
                        startDownSpin();
                        ev.preventDefault();
                        ev.stopPropagation()
                    });
                    elements.up.on('mousedown.touchspin', function(ev) {
                        elements.up.off('touchstart.touchspin');
                        if (originalinput.is(':disabled')) {
                            return
                        }
                        upOnce();
                        startUpSpin();
                        ev.preventDefault();
                        ev.stopPropagation()
                    });
                    elements.up.on('touchstart.touchspin', function(ev) {
                        elements.up.off('mousedown.touchspin');
                        if (originalinput.is(':disabled')) {
                            return
                        }
                        upOnce();
                        startUpSpin();
                        ev.preventDefault();
                        ev.stopPropagation()
                    });
                    elements.up.on('mouseout touchleave touchend touchcancel', function(ev) {
                        if (!spinning) {
                            return
                        }
                        ev.stopPropagation();
                        stopSpin()
                    });
                    elements.down.on('mouseout touchleave touchend touchcancel', function(ev) {
                        if (!spinning) {
                            return
                        }
                        ev.stopPropagation();
                        stopSpin()
                    });
                    elements.down.on('mousemove touchmove', function(ev) {
                        if (!spinning) {
                            return
                        }
                        ev.stopPropagation();
                        ev.preventDefault()
                    });
                    elements.up.on('mousemove touchmove', function(ev) {
                        if (!spinning) {
                            return
                        }
                        ev.stopPropagation();
                        ev.preventDefault()
                    });
                    $(document).on(_scopeEventNames(['mouseup', 'touchend', 'touchcancel'], _currentSpinnerId).join(' '), function(ev) {
                        if (!spinning) {
                            return
                        }
                        ev.preventDefault();
                        stopSpin()
                    });
                    $(document).on(_scopeEventNames(['mousemove', 'touchmove', 'scroll', 'scrollstart'], _currentSpinnerId).join(' '), function(ev) {
                        if (!spinning) {
                            return
                        }
                        ev.preventDefault();
                        stopSpin()
                    });
                    originalinput.on('mousewheel DOMMouseScroll', function(ev) {
                        if (!settings.mousewheel || !originalinput.is(':focus')) {
                            return
                        }
                        var delta = ev.originalEvent.wheelDelta || -ev.originalEvent.deltaY || -ev.originalEvent.detail;
                        ev.stopPropagation();
                        ev.preventDefault();
                        if (delta < 0) {
                            downOnce()
                        } else {
                            upOnce()
                        }
                    })
                }

                function _bindEventsInterface() {
                    originalinput.on('touchspin.uponce', function() {
                        stopSpin();
                        upOnce()
                    });
                    originalinput.on('touchspin.downonce', function() {
                        stopSpin();
                        downOnce()
                    });
                    originalinput.on('touchspin.startupspin', function() {
                        startUpSpin()
                    });
                    originalinput.on('touchspin.startdownspin', function() {
                        startDownSpin()
                    });
                    originalinput.on('touchspin.stopspin', function() {
                        stopSpin()
                    });
                    originalinput.on('touchspin.updatesettings', function(e, newsettings) {
                        changeSettings(newsettings)
                    })
                }

                function _forcestepdivisibility(value) {
                    switch (settings.forcestepdivisibility) {
                        case 'round':
                            return (Math.round(value / settings.step) * settings.step).toFixed(settings.decimals);
                        case 'floor':
                            return (Math.floor(value / settings.step) * settings.step).toFixed(settings.decimals);
                        case 'ceil':
                            return (Math.ceil(value / settings.step) * settings.step).toFixed(settings.decimals);
                        default:
                            return value
                    }
                }

                function _checkValue() {
                    var val, parsedval, returnval;
                    val = originalinput.val();
                    if (val === '') {
                        if (settings.replacementval !== '') {
                            originalinput.val(settings.replacementval);
                            originalinput.trigger('change')
                        }
                        return
                    }
                    if (settings.decimals > 0 && val === '.') {
                        return
                    }
                    parsedval = parseFloat(val);
                    if (isNaN(parsedval)) {
                        if (settings.replacementval !== '') {
                            parsedval = settings.replacementval
                        } else {
                            parsedval = 0
                        }
                    }
                    returnval = parsedval;
                    if (parsedval.toString() !== val) {
                        returnval = parsedval
                    }
                    if (parsedval < settings.min) {
                        returnval = settings.min
                    }
                    if (parsedval > settings.max) {
                        returnval = settings.max
                    }
                    returnval = _forcestepdivisibility(returnval);
                    if (Number(val).toString() !== returnval.toString()) {
                        originalinput.val(returnval);
                        originalinput.trigger('change')
                    }
                }

                function _getBoostedStep() {
                    if (!settings.booster) {
                        return settings.step
                    } else {
                        var boosted = Math.pow(2, Math.floor(spincount / settings.boostat)) * settings.step;
                        if (settings.maxboostedstep) {
                            if (boosted > settings.maxboostedstep) {
                                boosted = settings.maxboostedstep;
                                value = Math.round(value / boosted) * boosted
                            }
                        }
                        return Math.max(settings.step, boosted)
                    }
                }

                function upOnce() {
                    _checkValue();
                    value = parseFloat(elements.input.val());
                    if (isNaN(value)) {
                        value = 0
                    }
                    var initvalue = value,
                        boostedstep = _getBoostedStep();
                    value = value + boostedstep;
                    if (value > settings.max) {
                        value = settings.max;
                        originalinput.trigger('touchspin.on.max');
                        stopSpin()
                    }
                    elements.input.val(Number(value).toFixed(settings.decimals));
                    if (initvalue !== value) {
                        originalinput.trigger('change')
                    }
                }

                function downOnce() {
                    _checkValue();
                    value = parseFloat(elements.input.val());
                    if (isNaN(value)) {
                        value = 0
                    }
                    var initvalue = value,
                        boostedstep = _getBoostedStep();
                    value = value - boostedstep;
                    if (value < settings.min) {
                        value = settings.min;
                        originalinput.trigger('touchspin.on.min');
                        stopSpin()
                    }
                    elements.input.val(value.toFixed(settings.decimals));
                    if (initvalue !== value) {
                        originalinput.trigger('change')
                    }
                }

                function startDownSpin() {
                    stopSpin();
                    spincount = 0;
                    spinning = 'down';
                    originalinput.trigger('touchspin.on.startspin');
                    originalinput.trigger('touchspin.on.startdownspin');
                    downDelayTimeout = setTimeout(function() {
                        downSpinTimer = setInterval(function() {
                            spincount++;
                            downOnce()
                        }, settings.stepinterval)
                    }, settings.stepintervaldelay)
                }

                function startUpSpin() {
                    stopSpin();
                    spincount = 0;
                    spinning = 'up';
                    originalinput.trigger('touchspin.on.startspin');
                    originalinput.trigger('touchspin.on.startupspin');
                    upDelayTimeout = setTimeout(function() {
                        upSpinTimer = setInterval(function() {
                            spincount++;
                            upOnce()
                        }, settings.stepinterval)
                    }, settings.stepintervaldelay)
                }

                function stopSpin() {
                    clearTimeout(downDelayTimeout);
                    clearTimeout(upDelayTimeout);
                    clearInterval(downSpinTimer);
                    clearInterval(upSpinTimer);
                    switch (spinning) {
                        case 'up':
                            originalinput.trigger('touchspin.on.stopupspin');
                            originalinput.trigger('touchspin.on.stopspin');
                            break;
                        case 'down':
                            originalinput.trigger('touchspin.on.stopdownspin');
                            originalinput.trigger('touchspin.on.stopspin');
                            break
                    }
                    spincount = 0;
                    spinning = !1
                }
            })
        }
    })(jQuery)
}), (function(module, exports, __webpack_require__) {
    "use strict";
    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + (function(a) {
        var b = a.fn.jquery.split(" ")[0].split(".");
        if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    })(jQuery), +(function() {
        function a(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function b(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        function c(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            },
            e = (function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            })(),
            f = (function(a) {
                function b(a) {
                    return ({}).toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
                }

                function c(a) {
                    return (a[0] || a).nodeType
                }

                function d() {
                    return {
                        bindType: h.end,
                        delegateType: h.end,
                        handle: function handle(b) {
                            if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
                        }
                    }
                }

                function e() {
                    if (window.QUnit) return !1;
                    var a = document.createElement("bootstrap");
                    for (var b in j)
                        if (void 0 !== a.style[b]) return {
                            end: j[b]
                        };
                    return !1
                }

                function f(b) {
                    var c = this,
                        d = !1;
                    return a(this).one(k.TRANSITION_END, function() {
                        d = !0
                    }), setTimeout(function() {
                        d || k.triggerTransitionEnd(c)
                    }, b), this
                }

                function g() {
                    h = e(), a.fn.emulateTransitionEnd = f, k.supportsTransitionEnd() && (a.event.special[k.TRANSITION_END] = d())
                }
                var h = !1,
                    i = 1e6,
                    j = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    },
                    k = {
                        TRANSITION_END: "bsTransitionEnd",
                        getUID: function getUID(a) {
                            do a += ~~(Math.random() * i); while (document.getElementById(a));
                            return a
                        },
                        getSelectorFromElement: function getSelectorFromElement(a) {
                            var b = a.getAttribute("data-target");
                            return b || (b = a.getAttribute("href") || "", b = /^#[a-z]/i.test(b) ? b : null), b
                        },
                        reflow: function reflow(a) {
                            new Function("bs", "return bs")(a.offsetHeight)
                        },
                        triggerTransitionEnd: function triggerTransitionEnd(b) {
                            a(b).trigger(h.end)
                        },
                        supportsTransitionEnd: function supportsTransitionEnd() {
                            return Boolean(h)
                        },
                        typeCheckConfig: function typeCheckConfig(a, d, e) {
                            for (var f in e)
                                if (e.hasOwnProperty(f)) {
                                    var g = e[f],
                                        h = d[f],
                                        i = void 0;
                                    if ((i = h && c(h) ? "element" : b(h), !new RegExp(g).test(i))) throw new Error(a.toUpperCase() + ": " + ('Option "' + f + '" provided type "' + i + '" ') + ('but expected type "' + g + '".'))
                                }
                        }
                    };
                return g(), k
            })(jQuery),
            g = ((function(a) {
                var b = "alert",
                    d = "4.0.0-alpha.5",
                    g = "bs.alert",
                    h = "." + g,
                    i = ".data-api",
                    j = a.fn[b],
                    k = 150,
                    l = {
                        DISMISS: '[data-dismiss="alert"]'
                    },
                    m = {
                        CLOSE: "close" + h,
                        CLOSED: "closed" + h,
                        CLICK_DATA_API: "click" + h + i
                    },
                    n = {
                        ALERT: "alert",
                        FADE: "fade",
                        IN: "in"
                    },
                    o = (function() {
                        function b(a) {
                            c(this, b), this._element = a
                        }
                        return b.prototype.close = function(a) {
                            a = a || this._element;
                            var b = this._getRootElement(a),
                                c = this._triggerCloseEvent(b);
                            c.isDefaultPrevented() || this._removeElement(b)
                        }, b.prototype.dispose = function() {
                            a.removeData(this._element, g), this._element = null
                        }, b.prototype._getRootElement = function(b) {
                            var c = f.getSelectorFromElement(b),
                                d = !1;
                            return c && (d = a(c)[0]), d || (d = a(b).closest("." + n.ALERT)[0]), d
                        }, b.prototype._triggerCloseEvent = function(b) {
                            var c = a.Event(m.CLOSE);
                            return a(b).trigger(c), c
                        }, b.prototype._removeElement = function(b) {
                            return a(b).removeClass(n.IN), f.supportsTransitionEnd() && a(b).hasClass(n.FADE) ? void a(b).one(f.TRANSITION_END, a.proxy(this._destroyElement, this, b)).emulateTransitionEnd(k) : void this._destroyElement(b)
                        }, b.prototype._destroyElement = function(b) {
                            a(b).detach().trigger(m.CLOSED).remove()
                        }, b._jQueryInterface = function(c) {
                            return this.each(function() {
                                var d = a(this),
                                    e = d.data(g);
                                e || (e = new b(this), d.data(g, e)), "close" === c && e[c](this)
                            })
                        }, b._handleDismiss = function(a) {
                            return function(b) {
                                b && b.preventDefault(), a.close(this)
                            }
                        }, e(b, null, [{
                            key: "VERSION",
                            get: function get() {
                                return d
                            }
                        }]), b
                    })();
                return a(document).on(m.CLICK_DATA_API, l.DISMISS, o._handleDismiss(new o())), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function() {
                    return a.fn[b] = j, o._jQueryInterface
                }, o
            })(jQuery), (function(a) {
                var b = "button",
                    d = "4.0.0-alpha.5",
                    f = "bs.button",
                    g = "." + f,
                    h = ".data-api",
                    i = a.fn[b],
                    j = {
                        ACTIVE: "active",
                        BUTTON: "btn",
                        FOCUS: "focus"
                    },
                    k = {
                        DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                        DATA_TOGGLE: '[data-toggle="buttons"]',
                        INPUT: "input",
                        ACTIVE: ".active",
                        BUTTON: ".btn"
                    },
                    l = {
                        CLICK_DATA_API: "click" + g + h,
                        FOCUS_BLUR_DATA_API: "focus" + g + h + " " + ("blur" + g + h)
                    },
                    m = (function() {
                        function b(a) {
                            c(this, b), this._element = a
                        }
                        return b.prototype.toggle = function() {
                            var b = !0,
                                c = a(this._element).closest(k.DATA_TOGGLE)[0];
                            if (c) {
                                var d = a(this._element).find(k.INPUT)[0];
                                if (d) {
                                    if ("radio" === d.type)
                                        if (d.checked && a(this._element).hasClass(j.ACTIVE)) b = !1;
                                        else {
                                            var e = a(c).find(k.ACTIVE)[0];
                                            e && a(e).removeClass(j.ACTIVE)
                                        }
                                    b && (d.checked = !a(this._element).hasClass(j.ACTIVE), a(this._element).trigger("change")), d.focus()
                                }
                            } else this._element.setAttribute("aria-pressed", !a(this._element).hasClass(j.ACTIVE));
                            b && a(this._element).toggleClass(j.ACTIVE)
                        }, b.prototype.dispose = function() {
                            a.removeData(this._element, f), this._element = null
                        }, b._jQueryInterface = function(c) {
                            return this.each(function() {
                                var d = a(this).data(f);
                                d || (d = new b(this), a(this).data(f, d)), "toggle" === c && d[c]()
                            })
                        }, e(b, null, [{
                            key: "VERSION",
                            get: function get() {
                                return d
                            }
                        }]), b
                    })();
                return a(document).on(l.CLICK_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
                    b.preventDefault();
                    var c = b.target;
                    a(c).hasClass(j.BUTTON) || (c = a(c).closest(k.BUTTON)), m._jQueryInterface.call(a(c), "toggle")
                }).on(l.FOCUS_BLUR_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
                    var c = a(b.target).closest(k.BUTTON)[0];
                    a(c).toggleClass(j.FOCUS, /^focus(in)?$/.test(b.type))
                }), a.fn[b] = m._jQueryInterface, a.fn[b].Constructor = m, a.fn[b].noConflict = function() {
                    return a.fn[b] = i, m._jQueryInterface
                }, m
            })(jQuery), (function(a) {
                var b = "carousel",
                    g = "4.0.0-alpha.5",
                    h = "bs.carousel",
                    i = "." + h,
                    j = ".data-api",
                    k = a.fn[b],
                    l = 600,
                    m = 37,
                    n = 39,
                    o = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0
                    },
                    p = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean"
                    },
                    q = {
                        NEXT: "next",
                        PREVIOUS: "prev"
                    },
                    r = {
                        SLIDE: "slide" + i,
                        SLID: "slid" + i,
                        KEYDOWN: "keydown" + i,
                        MOUSEENTER: "mouseenter" + i,
                        MOUSELEAVE: "mouseleave" + i,
                        LOAD_DATA_API: "load" + i + j,
                        CLICK_DATA_API: "click" + i + j
                    },
                    s = {
                        CAROUSEL: "carousel",
                        ACTIVE: "active",
                        SLIDE: "slide",
                        RIGHT: "right",
                        LEFT: "left",
                        ITEM: "carousel-item"
                    },
                    t = {
                        ACTIVE: ".active",
                        ACTIVE_ITEM: ".active.carousel-item",
                        ITEM: ".carousel-item",
                        NEXT_PREV: ".next, .prev",
                        INDICATORS: ".carousel-indicators",
                        DATA_SLIDE: "[data-slide], [data-slide-to]",
                        DATA_RIDE: '[data-ride="carousel"]'
                    },
                    u = (function() {
                        function j(b, d) {
                            c(this, j), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(d), this._element = a(b)[0], this._indicatorsElement = a(this._element).find(t.INDICATORS)[0], this._addEventListeners()
                        }
                        return j.prototype.next = function() {
                            this._isSliding || this._slide(q.NEXT)
                        }, j.prototype.nextWhenVisible = function() {
                            document.hidden || this.next()
                        }, j.prototype.prev = function() {
                            this._isSliding || this._slide(q.PREVIOUS)
                        }, j.prototype.pause = function(b) {
                            b || (this._isPaused = !0), a(this._element).find(t.NEXT_PREV)[0] && f.supportsTransitionEnd() && (f.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                        }, j.prototype.cycle = function(b) {
                            b || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(a.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                        }, j.prototype.to = function(b) {
                            var c = this;
                            this._activeElement = a(this._element).find(t.ACTIVE_ITEM)[0];
                            var d = this._getItemIndex(this._activeElement);
                            if (!(b > this._items.length - 1 || b < 0)) {
                                if (this._isSliding) return void a(this._element).one(r.SLID, function() {
                                    return c.to(b)
                                });
                                if (d === b) return this.pause(), void this.cycle();
                                var e = b > d ? q.NEXT : q.PREVIOUS;
                                this._slide(e, this._items[b])
                            }
                        }, j.prototype.dispose = function() {
                            a(this._element).off(i), a.removeData(this._element, h), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                        }, j.prototype._getConfig = function(c) {
                            return c = a.extend({}, o, c), f.typeCheckConfig(b, c, p), c
                        }, j.prototype._addEventListeners = function() {
                            this._config.keyboard && a(this._element).on(r.KEYDOWN, a.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || a(this._element).on(r.MOUSEENTER, a.proxy(this.pause, this)).on(r.MOUSELEAVE, a.proxy(this.cycle, this))
                        }, j.prototype._keydown = function(a) {
                            if ((a.preventDefault(), !/input|textarea/i.test(a.target.tagName))) switch (a.which) {
                                case m:
                                    this.prev();
                                    break;
                                case n:
                                    this.next();
                                    break;
                                default:
                                    return
                            }
                        }, j.prototype._getItemIndex = function(b) {
                            return this._items = a.makeArray(a(b).parent().find(t.ITEM)), this._items.indexOf(b)
                        }, j.prototype._getItemByDirection = function(a, b) {
                            var c = a === q.NEXT,
                                d = a === q.PREVIOUS,
                                e = this._getItemIndex(b),
                                f = this._items.length - 1,
                                g = d && 0 === e || c && e === f;
                            if (g && !this._config.wrap) return b;
                            var h = a === q.PREVIOUS ? -1 : 1,
                                i = (e + h) % this._items.length;
                            return i === -1 ? this._items[this._items.length - 1] : this._items[i]
                        }, j.prototype._triggerSlideEvent = function(b, c) {
                            var d = a.Event(r.SLIDE, {
                                relatedTarget: b,
                                direction: c
                            });
                            return a(this._element).trigger(d), d
                        }, j.prototype._setActiveIndicatorElement = function(b) {
                            if (this._indicatorsElement) {
                                a(this._indicatorsElement).find(t.ACTIVE).removeClass(s.ACTIVE);
                                var c = this._indicatorsElement.children[this._getItemIndex(b)];
                                c && a(c).addClass(s.ACTIVE)
                            }
                        }, j.prototype._slide = function(b, c) {
                            var d = this,
                                e = a(this._element).find(t.ACTIVE_ITEM)[0],
                                g = c || e && this._getItemByDirection(b, e),
                                h = Boolean(this._interval),
                                i = b === q.NEXT ? s.LEFT : s.RIGHT;
                            if (g && a(g).hasClass(s.ACTIVE)) return void(this._isSliding = !1);
                            var j = this._triggerSlideEvent(g, i);
                            if (!j.isDefaultPrevented() && e && g) {
                                this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(g);
                                var k = a.Event(r.SLID, {
                                    relatedTarget: g,
                                    direction: i
                                });
                                f.supportsTransitionEnd() && a(this._element).hasClass(s.SLIDE) ? (a(g).addClass(b), f.reflow(g), a(e).addClass(i), a(g).addClass(i), a(e).one(f.TRANSITION_END, function() {
                                    a(g).removeClass(i).removeClass(b), a(g).addClass(s.ACTIVE), a(e).removeClass(s.ACTIVE).removeClass(b).removeClass(i), d._isSliding = !1, setTimeout(function() {
                                        return a(d._element).trigger(k)
                                    }, 0)
                                }).emulateTransitionEnd(l)) : (a(e).removeClass(s.ACTIVE), a(g).addClass(s.ACTIVE), this._isSliding = !1, a(this._element).trigger(k)), h && this.cycle()
                            }
                        }, j._jQueryInterface = function(b) {
                            return this.each(function() {
                                var c = a(this).data(h),
                                    e = a.extend({}, o, a(this).data());
                                "object" === ("undefined" == typeof b ? "undefined" : d(b)) && a.extend(e, b);
                                var f = "string" == typeof b ? b : e.slide;
                                if ((c || (c = new j(this, e), a(this).data(h, c)), "number" == typeof b)) c.to(b);
                                else if ("string" == typeof f) {
                                    if (void 0 === c[f]) throw new Error('No method named "' + f + '"');
                                    c[f]()
                                } else e.interval && (c.pause(), c.cycle())
                            })
                        }, j._dataApiClickHandler = function(b) {
                            var c = f.getSelectorFromElement(this);
                            if (c) {
                                var d = a(c)[0];
                                if (d && a(d).hasClass(s.CAROUSEL)) {
                                    var e = a.extend({}, a(d).data(), a(this).data()),
                                        g = this.getAttribute("data-slide-to");
                                    g && (e.interval = !1), j._jQueryInterface.call(a(d), e), g && a(d).data(h).to(g), b.preventDefault()
                                }
                            }
                        }, e(j, null, [{
                            key: "VERSION",
                            get: function get() {
                                return g
                            }
                        }, {
                            key: "Default",
                            get: function get() {
                                return o
                            }
                        }]), j
                    })();
                return a(document).on(r.CLICK_DATA_API, t.DATA_SLIDE, u._dataApiClickHandler), a(window).on(r.LOAD_DATA_API, function() {
                    a(t.DATA_RIDE).each(function() {
                        var b = a(this);
                        u._jQueryInterface.call(b, b.data())
                    })
                }), a.fn[b] = u._jQueryInterface, a.fn[b].Constructor = u, a.fn[b].noConflict = function() {
                    return a.fn[b] = k, u._jQueryInterface
                }, u
            })(jQuery), (function(a) {
                var b = "collapse",
                    g = "4.0.0-alpha.5",
                    h = "bs.collapse",
                    i = "." + h,
                    j = ".data-api",
                    k = a.fn[b],
                    l = 600,
                    m = {
                        toggle: !0,
                        parent: ""
                    },
                    n = {
                        toggle: "boolean",
                        parent: "string"
                    },
                    o = {
                        SHOW: "show" + i,
                        SHOWN: "shown" + i,
                        HIDE: "hide" + i,
                        HIDDEN: "hidden" + i,
                        CLICK_DATA_API: "click" + i + j
                    },
                    p = {
                        IN: "in",
                        COLLAPSE: "collapse",
                        COLLAPSING: "collapsing",
                        COLLAPSED: "collapsed"
                    },
                    q = {
                        WIDTH: "width",
                        HEIGHT: "height"
                    },
                    r = {
                        ACTIVES: ".card > .in, .card > .collapsing",
                        DATA_TOGGLE: '[data-toggle="collapse"]'
                    },
                    s = (function() {
                        function i(b, d) {
                            c(this, i), this._isTransitioning = !1, this._element = b, this._config = this._getConfig(d), this._triggerArray = a.makeArray(a('[data-toggle="collapse"][href="#' + b.id + '"],' + ('[data-toggle="collapse"][data-target="#' + b.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                        }
                        return i.prototype.toggle = function() {
                            a(this._element).hasClass(p.IN) ? this.hide() : this.show()
                        }, i.prototype.show = function() {
                            var b = this;
                            if (!this._isTransitioning && !a(this._element).hasClass(p.IN)) {
                                var c = void 0,
                                    d = void 0;
                                if ((this._parent && (c = a.makeArray(a(r.ACTIVES)), c.length || (c = null)), !(c && (d = a(c).data(h), d && d._isTransitioning)))) {
                                    var e = a.Event(o.SHOW);
                                    if ((a(this._element).trigger(e), !e.isDefaultPrevented())) {
                                        c && (i._jQueryInterface.call(a(c), "hide"), d || a(c).data(h, null));
                                        var g = this._getDimension();
                                        a(this._element).removeClass(p.COLLAPSE).addClass(p.COLLAPSING), this._element.style[g] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && a(this._triggerArray).removeClass(p.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                        var j = function j() {
                                            a(b._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).addClass(p.IN), b._element.style[g] = "", b.setTransitioning(!1), a(b._element).trigger(o.SHOWN)
                                        };
                                        if (!f.supportsTransitionEnd()) return void j();
                                        var k = g[0].toUpperCase() + g.slice(1),
                                            m = "scroll" + k;
                                        a(this._element).one(f.TRANSITION_END, j).emulateTransitionEnd(l), this._element.style[g] = this._element[m] + "px"
                                    }
                                }
                            }
                        }, i.prototype.hide = function() {
                            var b = this;
                            if (!this._isTransitioning && a(this._element).hasClass(p.IN)) {
                                var c = a.Event(o.HIDE);
                                if ((a(this._element).trigger(c), !c.isDefaultPrevented())) {
                                    var d = this._getDimension(),
                                        e = d === q.WIDTH ? "offsetWidth" : "offsetHeight";
                                    this._element.style[d] = this._element[e] + "px", f.reflow(this._element), a(this._element).addClass(p.COLLAPSING).removeClass(p.COLLAPSE).removeClass(p.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && a(this._triggerArray).addClass(p.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                    var g = function g() {
                                        b.setTransitioning(!1), a(b._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).trigger(o.HIDDEN)
                                    };
                                    return this._element.style[d] = "", f.supportsTransitionEnd() ? void a(this._element).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : void g()
                                }
                            }
                        }, i.prototype.setTransitioning = function(a) {
                            this._isTransitioning = a
                        }, i.prototype.dispose = function() {
                            a.removeData(this._element, h), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                        }, i.prototype._getConfig = function(c) {
                            return c = a.extend({}, m, c), c.toggle = Boolean(c.toggle), f.typeCheckConfig(b, c, n), c
                        }, i.prototype._getDimension = function() {
                            var b = a(this._element).hasClass(q.WIDTH);
                            return b ? q.WIDTH : q.HEIGHT
                        }, i.prototype._getParent = function() {
                            var b = this,
                                c = a(this._config.parent)[0],
                                d = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                            return a(c).find(d).each(function(a, c) {
                                b._addAriaAndCollapsedClass(i._getTargetFromElement(c), [c])
                            }), c
                        }, i.prototype._addAriaAndCollapsedClass = function(b, c) {
                            if (b) {
                                var d = a(b).hasClass(p.IN);
                                b.setAttribute("aria-expanded", d), c.length && a(c).toggleClass(p.COLLAPSED, !d).attr("aria-expanded", d)
                            }
                        }, i._getTargetFromElement = function(b) {
                            var c = f.getSelectorFromElement(b);
                            return c ? a(c)[0] : null
                        }, i._jQueryInterface = function(b) {
                            return this.each(function() {
                                var c = a(this),
                                    e = c.data(h),
                                    f = a.extend({}, m, c.data(), "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b);
                                if ((!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || (e = new i(this, f), c.data(h, e)), "string" == typeof b)) {
                                    if (void 0 === e[b]) throw new Error('No method named "' + b + '"');
                                    e[b]()
                                }
                            })
                        }, e(i, null, [{
                            key: "VERSION",
                            get: function get() {
                                return g
                            }
                        }, {
                            key: "Default",
                            get: function get() {
                                return m
                            }
                        }]), i
                    })();
                return a(document).on(o.CLICK_DATA_API, r.DATA_TOGGLE, function(b) {
                    b.preventDefault();
                    var c = s._getTargetFromElement(this),
                        d = a(c).data(h),
                        e = d ? "toggle" : a(this).data();
                    s._jQueryInterface.call(a(c), e)
                }), a.fn[b] = s._jQueryInterface, a.fn[b].Constructor = s, a.fn[b].noConflict = function() {
                    return a.fn[b] = k, s._jQueryInterface
                }, s
            })(jQuery), (function(a) {
                var b = "dropdown",
                    d = "4.0.0-alpha.5",
                    g = "bs.dropdown",
                    h = "." + g,
                    i = ".data-api",
                    j = a.fn[b],
                    k = 27,
                    l = 38,
                    m = 40,
                    n = 3,
                    o = {
                        HIDE: "hide" + h,
                        HIDDEN: "hidden" + h,
                        SHOW: "show" + h,
                        SHOWN: "shown" + h,
                        CLICK: "click" + h,
                        CLICK_DATA_API: "click" + h + i,
                        KEYDOWN_DATA_API: "keydown" + h + i
                    },
                    p = {
                        BACKDROP: "dropdown-backdrop",
                        DISABLED: "disabled",
                        OPEN: "open"
                    },
                    q = {
                        BACKDROP: ".dropdown-backdrop",
                        DATA_TOGGLE: '[data-toggle="dropdown"]',
                        FORM_CHILD: ".dropdown form",
                        ROLE_MENU: '[role="menu"]',
                        ROLE_LISTBOX: '[role="listbox"]',
                        NAVBAR_NAV: ".navbar-nav",
                        VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
                    },
                    r = (function() {
                        function b(a) {
                            c(this, b), this._element = a, this._addEventListeners()
                        }
                        return b.prototype.toggle = function() {
                            if (this.disabled || a(this).hasClass(p.DISABLED)) return !1;
                            var c = b._getParentFromElement(this),
                                d = a(c).hasClass(p.OPEN);
                            if ((b._clearMenus(), d)) return !1;
                            if ("ontouchstart" in document.documentElement && !a(c).closest(q.NAVBAR_NAV).length) {
                                var e = document.createElement("div");
                                e.className = p.BACKDROP, a(e).insertBefore(this), a(e).on("click", b._clearMenus)
                            }
                            var f = {
                                    relatedTarget: this
                                },
                                g = a.Event(o.SHOW, f);
                            return a(c).trigger(g), !g.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), a(c).toggleClass(p.OPEN), a(c).trigger(a.Event(o.SHOWN, f)), !1)
                        }, b.prototype.dispose = function() {
                            a.removeData(this._element, g), a(this._element).off(h), this._element = null
                        }, b.prototype._addEventListeners = function() {
                            a(this._element).on(o.CLICK, this.toggle)
                        }, b._jQueryInterface = function(c) {
                            return this.each(function() {
                                var d = a(this).data(g);
                                if ((d || a(this).data(g, d = new b(this)), "string" == typeof c)) {
                                    if (void 0 === d[c]) throw new Error('No method named "' + c + '"');
                                    d[c].call(this)
                                }
                            })
                        }, b._clearMenus = function(c) {
                            if (!c || c.which !== n) {
                                var d = a(q.BACKDROP)[0];
                                d && d.parentNode.removeChild(d);
                                for (var e = a.makeArray(a(q.DATA_TOGGLE)), f = 0; f < e.length; f++) {
                                    var g = b._getParentFromElement(e[f]),
                                        h = {
                                            relatedTarget: e[f]
                                        };
                                    if (a(g).hasClass(p.OPEN) && !(c && "click" === c.type && /input|textarea/i.test(c.target.tagName) && a.contains(g, c.target))) {
                                        var i = a.Event(o.HIDE, h);
                                        a(g).trigger(i), i.isDefaultPrevented() || (e[f].setAttribute("aria-expanded", "false"), a(g).removeClass(p.OPEN).trigger(a.Event(o.HIDDEN, h)))
                                    }
                                }
                            }
                        }, b._getParentFromElement = function(b) {
                            var c = void 0,
                                d = f.getSelectorFromElement(b);
                            return d && (c = a(d)[0]), c || b.parentNode
                        }, b._dataApiKeydownHandler = function(c) {
                            if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName) && (c.preventDefault(), c.stopPropagation(), !this.disabled && !a(this).hasClass(p.DISABLED))) {
                                var d = b._getParentFromElement(this),
                                    e = a(d).hasClass(p.OPEN);
                                if (!e && c.which !== k || e && c.which === k) {
                                    if (c.which === k) {
                                        var f = a(d).find(q.DATA_TOGGLE)[0];
                                        a(f).trigger("focus")
                                    }
                                    return void a(this).trigger("click")
                                }
                                var g = a.makeArray(a(q.VISIBLE_ITEMS));
                                if ((g = g.filter(function(a) {
                                        return a.offsetWidth || a.offsetHeight
                                    }), g.length)) {
                                    var h = g.indexOf(c.target);
                                    c.which === l && h > 0 && h--, c.which === m && h < g.length - 1 && h++, h < 0 && (h = 0), g[h].focus()
                                }
                            }
                        }, e(b, null, [{
                            key: "VERSION",
                            get: function get() {
                                return d
                            }
                        }]), b
                    })();
                return a(document).on(o.KEYDOWN_DATA_API, q.DATA_TOGGLE, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_MENU, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_LISTBOX, r._dataApiKeydownHandler).on(o.CLICK_DATA_API, r._clearMenus).on(o.CLICK_DATA_API, q.DATA_TOGGLE, r.prototype.toggle).on(o.CLICK_DATA_API, q.FORM_CHILD, function(a) {
                    a.stopPropagation()
                }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function() {
                    return a.fn[b] = j, r._jQueryInterface
                }, r
            })(jQuery), (function(a) {
                var b = "modal",
                    g = "4.0.0-alpha.5",
                    h = "bs.modal",
                    i = "." + h,
                    j = ".data-api",
                    k = a.fn[b],
                    l = 300,
                    m = 150,
                    n = 27,
                    o = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0,
                        show: !0
                    },
                    p = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean",
                        show: "boolean"
                    },
                    q = {
                        HIDE: "hide" + i,
                        HIDDEN: "hidden" + i,
                        SHOW: "show" + i,
                        SHOWN: "shown" + i,
                        FOCUSIN: "focusin" + i,
                        RESIZE: "resize" + i,
                        CLICK_DISMISS: "click.dismiss" + i,
                        KEYDOWN_DISMISS: "keydown.dismiss" + i,
                        MOUSEUP_DISMISS: "mouseup.dismiss" + i,
                        MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
                        CLICK_DATA_API: "click" + i + j
                    },
                    r = {
                        SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                        BACKDROP: "modal-backdrop",
                        OPEN: "modal-open",
                        FADE: "fade",
                        IN: "in"
                    },
                    s = {
                        DIALOG: ".modal-dialog",
                        DATA_TOGGLE: '[data-toggle="modal"]',
                        DATA_DISMISS: '[data-dismiss="modal"]',
                        FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
                    },
                    t = (function() {
                        function j(b, d) {
                            c(this, j), this._config = this._getConfig(d), this._element = b, this._dialog = a(b).find(s.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                        }
                        return j.prototype.toggle = function(a) {
                            return this._isShown ? this.hide() : this.show(a)
                        }, j.prototype.show = function(b) {
                            var c = this,
                                d = a.Event(q.SHOW, {
                                    relatedTarget: b
                                });
                            a(this._element).trigger(d), this._isShown || d.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), a(document.body).addClass(r.OPEN), this._setEscapeEvent(), this._setResizeEvent(), a(this._element).on(q.CLICK_DISMISS, s.DATA_DISMISS, a.proxy(this.hide, this)), a(this._dialog).on(q.MOUSEDOWN_DISMISS, function() {
                                a(c._element).one(q.MOUSEUP_DISMISS, function(b) {
                                    a(b.target).is(c._element) && (c._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(a.proxy(this._showElement, this, b)))
                        }, j.prototype.hide = function(b) {
                            b && b.preventDefault();
                            var c = a.Event(q.HIDE);
                            a(this._element).trigger(c), this._isShown && !c.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), a(document).off(q.FOCUSIN), a(this._element).removeClass(r.IN), a(this._element).off(q.CLICK_DISMISS), a(this._dialog).off(q.MOUSEDOWN_DISMISS), f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE) ? a(this._element).one(f.TRANSITION_END, a.proxy(this._hideModal, this)).emulateTransitionEnd(l) : this._hideModal())
                        }, j.prototype.dispose = function() {
                            a.removeData(this._element, h), a(window).off(i), a(document).off(i), a(this._element).off(i), a(this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                        }, j.prototype._getConfig = function(c) {
                            return c = a.extend({}, o, c), f.typeCheckConfig(b, c, p), c
                        }, j.prototype._showElement = function(b) {
                            var c = this,
                                d = f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE);
                            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, d && f.reflow(this._element), a(this._element).addClass(r.IN), this._config.focus && this._enforceFocus();
                            var e = a.Event(q.SHOWN, {
                                    relatedTarget: b
                                }),
                                g = function g() {
                                    c._config.focus && c._element.focus(), a(c._element).trigger(e)
                                };
                            d ? a(this._dialog).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : g()
                        }, j.prototype._enforceFocus = function() {
                            var b = this;
                            a(document).off(q.FOCUSIN).on(q.FOCUSIN, function(c) {
                                document === c.target || b._element === c.target || a(b._element).has(c.target).length || b._element.focus()
                            })
                        }, j.prototype._setEscapeEvent = function() {
                            var b = this;
                            this._isShown && this._config.keyboard ? a(this._element).on(q.KEYDOWN_DISMISS, function(a) {
                                a.which === n && b.hide()
                            }) : this._isShown || a(this._element).off(q.KEYDOWN_DISMISS)
                        }, j.prototype._setResizeEvent = function() {
                            this._isShown ? a(window).on(q.RESIZE, a.proxy(this._handleUpdate, this)) : a(window).off(q.RESIZE)
                        }, j.prototype._hideModal = function() {
                            var b = this;
                            this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._showBackdrop(function() {
                                a(document.body).removeClass(r.OPEN), b._resetAdjustments(), b._resetScrollbar(), a(b._element).trigger(q.HIDDEN)
                            })
                        }, j.prototype._removeBackdrop = function() {
                            this._backdrop && (a(this._backdrop).remove(), this._backdrop = null)
                        }, j.prototype._showBackdrop = function(b) {
                            var c = this,
                                d = a(this._element).hasClass(r.FADE) ? r.FADE : "";
                            if (this._isShown && this._config.backdrop) {
                                var e = f.supportsTransitionEnd() && d;
                                if ((this._backdrop = document.createElement("div"), this._backdrop.className = r.BACKDROP, d && a(this._backdrop).addClass(d), a(this._backdrop).appendTo(document.body), a(this._element).on(q.CLICK_DISMISS, function(a) {
                                        return c._ignoreBackdropClick ? void(c._ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" === c._config.backdrop ? c._element.focus() : c.hide()))
                                    }), e && f.reflow(this._backdrop), a(this._backdrop).addClass(r.IN), !b)) return;
                                if (!e) return void b();
                                a(this._backdrop).one(f.TRANSITION_END, b).emulateTransitionEnd(m)
                            } else if (!this._isShown && this._backdrop) {
                                a(this._backdrop).removeClass(r.IN);
                                var g = function g() {
                                    c._removeBackdrop(), b && b()
                                };
                                f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE) ? a(this._backdrop).one(f.TRANSITION_END, g).emulateTransitionEnd(m) : g()
                            } else b && b()
                        }, j.prototype._handleUpdate = function() {
                            this._adjustDialog()
                        }, j.prototype._adjustDialog = function() {
                            var a = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                        }, j.prototype._resetAdjustments = function() {
                            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                        }, j.prototype._checkScrollbar = function() {
                            this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                        }, j.prototype._setScrollbar = function() {
                            var b = parseInt(a(s.FIXED_CONTENT).css("padding-right") || 0, 10);
                            this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = b + this._scrollbarWidth + "px")
                        }, j.prototype._resetScrollbar = function() {
                            document.body.style.paddingRight = this._originalBodyPadding
                        }, j.prototype._getScrollbarWidth = function() {
                            var a = document.createElement("div");
                            a.className = r.SCROLLBAR_MEASURER, document.body.appendChild(a);
                            var b = a.offsetWidth - a.clientWidth;
                            return document.body.removeChild(a), b
                        }, j._jQueryInterface = function(b, c) {
                            return this.each(function() {
                                var e = a(this).data(h),
                                    f = a.extend({}, j.Default, a(this).data(), "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b);
                                if ((e || (e = new j(this, f), a(this).data(h, e)), "string" == typeof b)) {
                                    if (void 0 === e[b]) throw new Error('No method named "' + b + '"');
                                    e[b](c)
                                } else f.show && e.show(c)
                            })
                        }, e(j, null, [{
                            key: "VERSION",
                            get: function get() {
                                return g
                            }
                        }, {
                            key: "Default",
                            get: function get() {
                                return o
                            }
                        }]), j
                    })();
                return a(document).on(q.CLICK_DATA_API, s.DATA_TOGGLE, function(b) {
                    var c = this,
                        d = void 0,
                        e = f.getSelectorFromElement(this);
                    e && (d = a(e)[0]);
                    var g = a(d).data(h) ? "toggle" : a.extend({}, a(d).data(), a(this).data());
                    "A" === this.tagName && b.preventDefault();
                    var i = a(d).one(q.SHOW, function(b) {
                        b.isDefaultPrevented() || i.one(q.HIDDEN, function() {
                            a(c).is(":visible") && c.focus()
                        })
                    });
                    t._jQueryInterface.call(a(d), g, this)
                }), a.fn[b] = t._jQueryInterface, a.fn[b].Constructor = t, a.fn[b].noConflict = function() {
                    return a.fn[b] = k, t._jQueryInterface
                }, t
            })(jQuery), (function(a) {
                var b = "scrollspy",
                    g = "4.0.0-alpha.5",
                    h = "bs.scrollspy",
                    i = "." + h,
                    j = ".data-api",
                    k = a.fn[b],
                    l = {
                        offset: 10,
                        method: "auto",
                        target: ""
                    },
                    m = {
                        offset: "number",
                        method: "string",
                        target: "(string|element)"
                    },
                    n = {
                        ACTIVATE: "activate" + i,
                        SCROLL: "scroll" + i,
                        LOAD_DATA_API: "load" + i + j
                    },
                    o = {
                        DROPDOWN_ITEM: "dropdown-item",
                        DROPDOWN_MENU: "dropdown-menu",
                        NAV_LINK: "nav-link",
                        NAV: "nav",
                        ACTIVE: "active"
                    },
                    p = {
                        DATA_SPY: '[data-spy="scroll"]',
                        ACTIVE: ".active",
                        LIST_ITEM: ".list-item",
                        LI: "li",
                        LI_DROPDOWN: "li.dropdown",
                        NAV_LINKS: ".nav-link",
                        DROPDOWN: ".dropdown",
                        DROPDOWN_ITEMS: ".dropdown-item",
                        DROPDOWN_TOGGLE: ".dropdown-toggle"
                    },
                    q = {
                        OFFSET: "offset",
                        POSITION: "position"
                    },
                    r = (function() {
                        function j(b, d) {
                            c(this, j), this._element = b, this._scrollElement = "BODY" === b.tagName ? window : b, this._config = this._getConfig(d), this._selector = this._config.target + " " + p.NAV_LINKS + "," + (this._config.target + " " + p.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, a(this._scrollElement).on(n.SCROLL, a.proxy(this._process, this)), this.refresh(), this._process()
                        }
                        return j.prototype.refresh = function() {
                            var b = this,
                                c = this._scrollElement !== this._scrollElement.window ? q.POSITION : q.OFFSET,
                                d = "auto" === this._config.method ? c : this._config.method,
                                e = d === q.POSITION ? this._getScrollTop() : 0;
                            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                            var g = a.makeArray(a(this._selector));
                            g.map(function(b) {
                                var c = void 0,
                                    g = f.getSelectorFromElement(b);
                                return g && (c = a(g)[0]), c && (c.offsetWidth || c.offsetHeight) ? [a(c)[d]().top + e, g] : null
                            }).filter(function(a) {
                                return a
                            }).sort(function(a, b) {
                                return a[0] - b[0]
                            }).forEach(function(a) {
                                b._offsets.push(a[0]), b._targets.push(a[1])
                            })
                        }, j.prototype.dispose = function() {
                            a.removeData(this._element, h), a(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                        }, j.prototype._getConfig = function(c) {
                            if ((c = a.extend({}, l, c), "string" != typeof c.target)) {
                                var d = a(c.target).attr("id");
                                d || (d = f.getUID(b), a(c.target).attr("id", d)), c.target = "#" + d
                            }
                            return f.typeCheckConfig(b, c, m), c
                        }, j.prototype._getScrollTop = function() {
                            return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                        }, j.prototype._getScrollHeight = function() {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                        }, j.prototype._process = function() {
                            var a = this._getScrollTop() + this._config.offset,
                                b = this._getScrollHeight(),
                                c = this._config.offset + b - this._scrollElement.offsetHeight;
                            if ((this._scrollHeight !== b && this.refresh(), a >= c)) {
                                var d = this._targets[this._targets.length - 1];
                                this._activeTarget !== d && this._activate(d)
                            }
                            if (this._activeTarget && a < this._offsets[0]) return this._activeTarget = null, void this._clear();
                            for (var e = this._offsets.length; e--;) {
                                var f = this._activeTarget !== this._targets[e] && a >= this._offsets[e] && (void 0 === this._offsets[e + 1] || a < this._offsets[e + 1]);
                                f && this._activate(this._targets[e])
                            }
                        }, j.prototype._activate = function(b) {
                            this._activeTarget = b, this._clear();
                            var c = this._selector.split(",");
                            c = c.map(function(a) {
                                return a + '[data-target="' + b + '"],' + (a + '[href="' + b + '"]')
                            });
                            var d = a(c.join(","));
                            d.hasClass(o.DROPDOWN_ITEM) ? (d.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(o.ACTIVE), d.addClass(o.ACTIVE)) : d.parents(p.LI).find(p.NAV_LINKS).addClass(o.ACTIVE), a(this._scrollElement).trigger(n.ACTIVATE, {
                                relatedTarget: b
                            })
                        }, j.prototype._clear = function() {
                            a(this._selector).filter(p.ACTIVE).removeClass(o.ACTIVE)
                        }, j._jQueryInterface = function(b) {
                            return this.each(function() {
                                var c = a(this).data(h),
                                    e = "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b || null;
                                if ((c || (c = new j(this, e), a(this).data(h, c)), "string" == typeof b)) {
                                    if (void 0 === c[b]) throw new Error('No method named "' + b + '"');
                                    c[b]()
                                }
                            })
                        }, e(j, null, [{
                            key: "VERSION",
                            get: function get() {
                                return g
                            }
                        }, {
                            key: "Default",
                            get: function get() {
                                return l
                            }
                        }]), j
                    })();
                return a(window).on(n.LOAD_DATA_API, function() {
                    for (var b = a.makeArray(a(p.DATA_SPY)), c = b.length; c--;) {
                        var d = a(b[c]);
                        r._jQueryInterface.call(d, d.data())
                    }
                }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function() {
                    return a.fn[b] = k, r._jQueryInterface
                }, r
            })(jQuery), (function(a) {
                var b = "tab",
                    d = "4.0.0-alpha.5",
                    g = "bs.tab",
                    h = "." + g,
                    i = ".data-api",
                    j = a.fn[b],
                    k = 150,
                    l = {
                        HIDE: "hide" + h,
                        HIDDEN: "hidden" + h,
                        SHOW: "show" + h,
                        SHOWN: "shown" + h,
                        CLICK_DATA_API: "click" + h + i
                    },
                    m = {
                        DROPDOWN_MENU: "dropdown-menu",
                        ACTIVE: "active",
                        FADE: "fade",
                        IN: "in"
                    },
                    n = {
                        A: "a",
                        LI: "li",
                        DROPDOWN: ".dropdown",
                        UL: "ul:not(.dropdown-menu)",
                        FADE_CHILD: "> .nav-item .fade, > .fade",
                        ACTIVE: ".active",
                        ACTIVE_CHILD: "> .nav-item > .active, > .active",
                        DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                        DROPDOWN_TOGGLE: ".dropdown-toggle",
                        DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                    },
                    o = (function() {
                        function b(a) {
                            c(this, b), this._element = a
                        }
                        return b.prototype.show = function() {
                            var b = this;
                            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !a(this._element).hasClass(m.ACTIVE)) {
                                var c = void 0,
                                    d = void 0,
                                    e = a(this._element).closest(n.UL)[0],
                                    g = f.getSelectorFromElement(this._element);
                                e && (d = a.makeArray(a(e).find(n.ACTIVE)), d = d[d.length - 1]);
                                var h = a.Event(l.HIDE, {
                                        relatedTarget: this._element
                                    }),
                                    i = a.Event(l.SHOW, {
                                        relatedTarget: d
                                    });
                                if ((d && a(d).trigger(h), a(this._element).trigger(i), !i.isDefaultPrevented() && !h.isDefaultPrevented())) {
                                    g && (c = a(g)[0]), this._activate(this._element, e);
                                    var j = function j() {
                                        var c = a.Event(l.HIDDEN, {
                                                relatedTarget: b._element
                                            }),
                                            e = a.Event(l.SHOWN, {
                                                relatedTarget: d
                                            });
                                        a(d).trigger(c), a(b._element).trigger(e)
                                    };
                                    c ? this._activate(c, c.parentNode, j) : j()
                                }
                            }
                        }, b.prototype.dispose = function() {
                            a.removeClass(this._element, g), this._element = null
                        }, b.prototype._activate = function(b, c, d) {
                            var e = a(c).find(n.ACTIVE_CHILD)[0],
                                g = d && f.supportsTransitionEnd() && (e && a(e).hasClass(m.FADE) || Boolean(a(c).find(n.FADE_CHILD)[0])),
                                h = a.proxy(this._transitionComplete, this, b, e, g, d);
                            e && g ? a(e).one(f.TRANSITION_END, h).emulateTransitionEnd(k) : h(), e && a(e).removeClass(m.IN)
                        }, b.prototype._transitionComplete = function(b, c, d, e) {
                            if (c) {
                                a(c).removeClass(m.ACTIVE);
                                var g = a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];
                                g && a(g).removeClass(m.ACTIVE), c.setAttribute("aria-expanded", !1)
                            }
                            if ((a(b).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0), d ? (f.reflow(b), a(b).addClass(m.IN)) : a(b).removeClass(m.FADE), b.parentNode && a(b.parentNode).hasClass(m.DROPDOWN_MENU))) {
                                var h = a(b).closest(n.DROPDOWN)[0];
                                h && a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0)
                            }
                            e && e()
                        }, b._jQueryInterface = function(c) {
                            return this.each(function() {
                                var d = a(this),
                                    e = d.data(g);
                                if ((e || (e = e = new b(this), d.data(g, e)), "string" == typeof c)) {
                                    if (void 0 === e[c]) throw new Error('No method named "' + c + '"');
                                    e[c]()
                                }
                            })
                        }, e(b, null, [{
                            key: "VERSION",
                            get: function get() {
                                return d
                            }
                        }]), b
                    })();
                return a(document).on(l.CLICK_DATA_API, n.DATA_TOGGLE, function(b) {
                    b.preventDefault(), o._jQueryInterface.call(a(this), "show")
                }), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function() {
                    return a.fn[b] = j, o._jQueryInterface
                }, o
            })(jQuery), (function(a) {
                if (void 0 === window.Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
                var b = "tooltip",
                    g = "4.0.0-alpha.5",
                    h = "bs.tooltip",
                    i = "." + h,
                    j = a.fn[b],
                    k = 150,
                    l = "bs-tether",
                    m = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: "0 0",
                        constraints: []
                    },
                    n = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "string",
                        constraints: "array"
                    },
                    o = {
                        TOP: "bottom center",
                        RIGHT: "middle left",
                        BOTTOM: "top center",
                        LEFT: "middle right"
                    },
                    p = {
                        IN: "in",
                        OUT: "out"
                    },
                    q = {
                        HIDE: "hide" + i,
                        HIDDEN: "hidden" + i,
                        SHOW: "show" + i,
                        SHOWN: "shown" + i,
                        INSERTED: "inserted" + i,
                        CLICK: "click" + i,
                        FOCUSIN: "focusin" + i,
                        FOCUSOUT: "focusout" + i,
                        MOUSEENTER: "mouseenter" + i,
                        MOUSELEAVE: "mouseleave" + i
                    },
                    r = {
                        FADE: "fade",
                        IN: "in"
                    },
                    s = {
                        TOOLTIP: ".tooltip",
                        TOOLTIP_INNER: ".tooltip-inner"
                    },
                    t = {
                        element: !1,
                        enabled: !1
                    },
                    u = {
                        HOVER: "hover",
                        FOCUS: "focus",
                        CLICK: "click",
                        MANUAL: "manual"
                    },
                    v = (function() {
                        function j(a, b) {
                            c(this, j), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = a, this.config = this._getConfig(b), this.tip = null, this._setListeners()
                        }
                        return j.prototype.enable = function() {
                            this._isEnabled = !0
                        }, j.prototype.disable = function() {
                            this._isEnabled = !1
                        }, j.prototype.toggleEnabled = function() {
                            this._isEnabled = !this._isEnabled
                        }, j.prototype.toggle = function(b) {
                            if (b) {
                                var c = this.constructor.DATA_KEY,
                                    d = a(b.currentTarget).data(c);
                                d || (d = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(c, d)), d._activeTrigger.click = !d._activeTrigger.click, d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d)
                            } else {
                                if (a(this.getTipElement()).hasClass(r.IN)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                        }, j.prototype.dispose = function() {
                            clearTimeout(this._timeout), this.cleanupTether(), a.removeData(this.element, this.constructor.DATA_KEY), a(this.element).off(this.constructor.EVENT_KEY), this.tip && a(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                        }, j.prototype.show = function() {
                            var b = this,
                                c = a.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                a(this.element).trigger(c);
                                var d = a.contains(this.element.ownerDocument.documentElement, this.element);
                                if (c.isDefaultPrevented() || !d) return;
                                var e = this.getTipElement(),
                                    g = f.getUID(this.constructor.NAME);
                                e.setAttribute("id", g), this.element.setAttribute("aria-describedby", g), this.setContent(), this.config.animation && a(e).addClass(r.FADE);
                                var h = "function" == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement,
                                    i = this._getAttachment(h);
                                a(e).data(this.constructor.DATA_KEY, this).appendTo(document.body), a(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                    attachment: i,
                                    element: e,
                                    target: this.element,
                                    classes: t,
                                    classPrefix: l,
                                    offset: this.config.offset,
                                    constraints: this.config.constraints,
                                    addTargetClasses: !1
                                }), f.reflow(e), this._tether.position(), a(e).addClass(r.IN);
                                var k = function k() {
                                    var c = b._hoverState;
                                    b._hoverState = null, a(b.element).trigger(b.constructor.Event.SHOWN), c === p.OUT && b._leave(null, b)
                                };
                                if (f.supportsTransitionEnd() && a(this.tip).hasClass(r.FADE)) return void a(this.tip).one(f.TRANSITION_END, k).emulateTransitionEnd(j._TRANSITION_DURATION);
                                k()
                            }
                        }, j.prototype.hide = function(b) {
                            var c = this,
                                d = this.getTipElement(),
                                e = a.Event(this.constructor.Event.HIDE),
                                g = function g() {
                                    c._hoverState !== p.IN && d.parentNode && d.parentNode.removeChild(d), c.element.removeAttribute("aria-describedby"), a(c.element).trigger(c.constructor.Event.HIDDEN), c.cleanupTether(), b && b()
                                };
                            a(this.element).trigger(e), e.isDefaultPrevented() || (a(d).removeClass(r.IN), f.supportsTransitionEnd() && a(this.tip).hasClass(r.FADE) ? a(d).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : g(), this._hoverState = "")
                        }, j.prototype.isWithContent = function() {
                            return Boolean(this.getTitle())
                        }, j.prototype.getTipElement = function() {
                            return this.tip = this.tip || a(this.config.template)[0]
                        }, j.prototype.setContent = function() {
                            var b = a(this.getTipElement());
                            this.setElementContent(b.find(s.TOOLTIP_INNER), this.getTitle()), b.removeClass(r.FADE).removeClass(r.IN), this.cleanupTether()
                        }, j.prototype.setElementContent = function(b, c) {
                            var e = this.config.html;
                            "object" === ("undefined" == typeof c ? "undefined" : d(c)) && (c.nodeType || c.jquery) ? e ? a(c).parent().is(b) || b.empty().append(c) : b.text(a(c).text()): b[e ? "html" : "text"](c)
                        }, j.prototype.getTitle = function() {
                            var a = this.element.getAttribute("data-original-title");
                            return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), a
                        }, j.prototype.cleanupTether = function() {
                            this._tether && this._tether.destroy()
                        }, j.prototype._getAttachment = function(a) {
                            return o[a.toUpperCase()]
                        }, j.prototype._setListeners = function() {
                            var b = this,
                                c = this.config.trigger.split(" ");
                            c.forEach(function(c) {
                                if ("click" === c) a(b.element).on(b.constructor.Event.CLICK, b.config.selector, a.proxy(b.toggle, b));
                                else if (c !== u.MANUAL) {
                                    var d = c === u.HOVER ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN,
                                        e = c === u.HOVER ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;
                                    a(b.element).on(d, b.config.selector, a.proxy(b._enter, b)).on(e, b.config.selector, a.proxy(b._leave, b))
                                }
                            }), this.config.selector ? this.config = a.extend({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            }) : this._fixTitle()
                        }, j.prototype._fixTitle = function() {
                            var a = d(this.element.getAttribute("data-original-title"));
                            (this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                        }, j.prototype._enter = function(b, c) {
                            var d = this.constructor.DATA_KEY;
                            return c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusin" === b.type ? u.FOCUS : u.HOVER] = !0), a(c.getTipElement()).hasClass(r.IN) || c._hoverState === p.IN ? void(c._hoverState = p.IN) : (clearTimeout(c._timeout), c._hoverState = p.IN, c.config.delay && c.config.delay.show ? void(c._timeout = setTimeout(function() {
                                c._hoverState === p.IN && c.show()
                            }, c.config.delay.show)) : void c.show())
                        }, j.prototype._leave = function(b, c) {
                            var d = this.constructor.DATA_KEY;
                            if ((c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusout" === b.type ? u.FOCUS : u.HOVER] = !1), !c._isWithActiveTrigger())) return clearTimeout(c._timeout), c._hoverState = p.OUT, c.config.delay && c.config.delay.hide ? void(c._timeout = setTimeout(function() {
                                c._hoverState === p.OUT && c.hide()
                            }, c.config.delay.hide)) : void c.hide()
                        }, j.prototype._isWithActiveTrigger = function() {
                            for (var a in this._activeTrigger)
                                if (this._activeTrigger[a]) return !0;
                            return !1
                        }, j.prototype._getConfig = function(c) {
                            return c = a.extend({}, this.constructor.Default, a(this.element).data(), c), c.delay && "number" == typeof c.delay && (c.delay = {
                                show: c.delay,
                                hide: c.delay
                            }), f.typeCheckConfig(b, c, this.constructor.DefaultType), c
                        }, j.prototype._getDelegateConfig = function() {
                            var a = {};
                            if (this.config)
                                for (var b in this.config) this.constructor.Default[b] !== this.config[b] && (a[b] = this.config[b]);
                            return a
                        }, j._jQueryInterface = function(b) {
                            return this.each(function() {
                                var c = a(this).data(h),
                                    e = "object" === ("undefined" == typeof b ? "undefined" : d(b)) ? b : null;
                                if ((c || !/dispose|hide/.test(b)) && (c || (c = new j(this, e), a(this).data(h, c)), "string" == typeof b)) {
                                    if (void 0 === c[b]) throw new Error('No method named "' + b + '"');
                                    c[b]()
                                }
                            })
                        }, e(j, null, [{
                            key: "VERSION",
                            get: function get() {
                                return g
                            }
                        }, {
                            key: "Default",
                            get: function get() {
                                return m
                            }
                        }, {
                            key: "NAME",
                            get: function get() {
                                return b
                            }
                        }, {
                            key: "DATA_KEY",
                            get: function get() {
                                return h
                            }
                        }, {
                            key: "Event",
                            get: function get() {
                                return q
                            }
                        }, {
                            key: "EVENT_KEY",
                            get: function get() {
                                return i
                            }
                        }, {
                            key: "DefaultType",
                            get: function get() {
                                return n
                            }
                        }]), j
                    })();
                return a.fn[b] = v._jQueryInterface, a.fn[b].Constructor = v, a.fn[b].noConflict = function() {
                    return a.fn[b] = j, v._jQueryInterface
                }, v
            })(jQuery));
        (function(f) {
            var h = "popover",
                i = "4.0.0-alpha.5",
                j = "bs.popover",
                k = "." + j,
                l = f.fn[h],
                m = f.extend({}, g.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                }),
                n = f.extend({}, g.DefaultType, {
                    content: "(string|element|function)"
                }),
                o = {
                    FADE: "fade",
                    IN: "in"
                },
                p = {
                    TITLE: ".popover-title",
                    CONTENT: ".popover-content"
                },
                q = {
                    HIDE: "hide" + k,
                    HIDDEN: "hidden" + k,
                    SHOW: "show" + k,
                    SHOWN: "shown" + k,
                    INSERTED: "inserted" + k,
                    CLICK: "click" + k,
                    FOCUSIN: "focusin" + k,
                    FOCUSOUT: "focusout" + k,
                    MOUSEENTER: "mouseenter" + k,
                    MOUSELEAVE: "mouseleave" + k
                },
                r = (function(g) {
                    function l() {
                        return c(this, l), a(this, g.apply(this, arguments))
                    }
                    return b(l, g), l.prototype.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }, l.prototype.getTipElement = function() {
                        return this.tip = this.tip || f(this.config.template)[0]
                    }, l.prototype.setContent = function() {
                        var a = f(this.getTipElement());
                        this.setElementContent(a.find(p.TITLE), this.getTitle()), this.setElementContent(a.find(p.CONTENT), this._getContent()), a.removeClass(o.FADE).removeClass(o.IN), this.cleanupTether()
                    }, l.prototype._getContent = function() {
                        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                    }, l._jQueryInterface = function(a) {
                        return this.each(function() {
                            var b = f(this).data(j),
                                c = "object" === ("undefined" == typeof a ? "undefined" : d(a)) ? a : null;
                            if ((b || !/destroy|hide/.test(a)) && (b || (b = new l(this, c), f(this).data(j, b)), "string" == typeof a)) {
                                if (void 0 === b[a]) throw new Error('No method named "' + a + '"');
                                b[a]()
                            }
                        })
                    }, e(l, null, [{
                        key: "VERSION",
                        get: function get() {
                            return i
                        }
                    }, {
                        key: "Default",
                        get: function get() {
                            return m
                        }
                    }, {
                        key: "NAME",
                        get: function get() {
                            return h
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function get() {
                            return j
                        }
                    }, {
                        key: "Event",
                        get: function get() {
                            return q
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function get() {
                            return k
                        }
                    }, {
                        key: "DefaultType",
                        get: function get() {
                            return n
                        }
                    }]), l
                })(g);
            return f.fn[h] = r._jQueryInterface, f.fn[h].Constructor = r, f.fn[h].noConflict = function() {
                return f.fn[h] = l, r._jQueryInterface
            }, r
        })(jQuery)
    })()
}), (function(module, exports, __webpack_require__) {
    "use strict";

    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined
    }
    module.exports = EventEmitter;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;
    EventEmitter.defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
        this._maxListeners = n;
        return this
    };
    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;
        if (!this._events) this._events = {};
        if (type === 'error') {
            if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er
                } else {
                    var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
                    err.context = er;
                    throw err
                }
            }
        }
        handler = this._events[type];
        if (isUndefined(handler)) return !1;
        if (isFunction(handler)) {
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args)
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++) listeners[i].apply(this, args);
        }
        return !0
    };
    EventEmitter.prototype.addListener = function(type, listener) {
        var m;
        if (!isFunction(listener)) throw TypeError('listener must be a function');
        if (!this._events) this._events = {};
        if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
        if (!this._events[type])
            this._events[type] = listener;
        else if (isObject(this._events[type]))
            this._events[type].push(listener);
        else this._events[type] = [this._events[type], listener];
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners
            } else {
                m = EventEmitter.defaultMaxListeners
            }
            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = !0;
                console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
                if (typeof console.trace === 'function') {
                    console.trace()
                }
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener)) throw TypeError('listener must be a function');
        var fired = !1;

        function g() {
            this.removeListener(type, g);
            if (!fired) {
                fired = !0;
                listener.apply(this, arguments)
            }
        }
        g.listener = listener;
        this.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;
        if (!isFunction(listener)) throw TypeError('listener must be a function');
        if (!this._events || !this._events[type]) return this;
        list = this._events[type];
        length = list.length;
        position = -1;
        if (list === listener || isFunction(list.listener) && list.listener === listener) {
            delete this._events[type];
            if (this._events.removeListener) this.emit('removeListener', type, listener)
        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            if (list.length === 1) {
                list.length = 0;
                delete this._events[type]
            } else {
                list.splice(position, 1)
            }
            if (this._events.removeListener) this.emit('removeListener', type, listener)
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;
        if (!this._events) return this;
        if (!this._events.removeListener) {
            if (arguments.length === 0) this._events = {};
            else if (this._events[type]) delete this._events[type];
            return this
        }
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === 'removeListener') continue;
                this.removeAllListeners(key)
            }
            this.removeAllListeners('removeListener');
            this._events = {};
            return this
        }
        listeners = this._events[type];
        if (isFunction(listeners)) {
            this.removeListener(type, listeners)
        } else if (listeners) {
            while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];
        return this
    };
    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type]) ret = [];
        else if (isFunction(this._events[type])) ret = [this._events[type]];
        else ret = this._events[type].slice();
        return ret
    };
    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];
            if (isFunction(evlistener)) return 1;
            else if (evlistener) return evlistener.length
        }
        return 0
    };
    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type)
    };

    function isFunction(arg) {
        return typeof arg === 'function'
    }

    function isNumber(arg) {
        return typeof arg === 'number'
    }

    function isObject(arg) {
        return typeof arg === 'object' && arg !== null
    }

    function isUndefined(arg) {
        return arg === void 0
    }
}), (function(module, exports, __webpack_require__) {
    "use strict";
    var require;
    var require;
    !(function(e) {
        if (!0) module.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
            var t;
            t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.flexibility = e()
        }
    })(function() {
        return (function e(t, r, l) {
            function n(o, i) {
                if (!r[o]) {
                    if (!t[o]) {
                        var s = "function" == typeof require && require;
                        if (!i && s) return require(o, !0);
                        if (f) return f(o, !0);
                        var a = new Error("Cannot find module '" + o + "'");
                        throw (a.code = "MODULE_NOT_FOUND", a)
                    }
                    var c = r[o] = {
                        exports: {}
                    };
                    t[o][0].call(c.exports, function(e) {
                        var r = t[o][1][e];
                        return n(r ? r : e)
                    }, c, c.exports, e, t, r, l)
                }
                return r[o].exports
            }
            for (var f = "function" == typeof require && require, o = 0; o < l.length; o++) n(l[o]);
            return n
        })({
            1: [function(e, t, r) {
                t.exports = function(e) {
                    var t, r, l, n = -1;
                    if (e.lines.length > 1 && "flex-start" === e.style.alignContent)
                        for (t = 0; l = e.lines[++n];) l.crossStart = t, t += l.cross;
                    else if (e.lines.length > 1 && "flex-end" === e.style.alignContent)
                        for (t = e.flexStyle.crossSpace; l = e.lines[++n];) l.crossStart = t, t += l.cross;
                    else if (e.lines.length > 1 && "center" === e.style.alignContent)
                        for (t = e.flexStyle.crossSpace / 2; l = e.lines[++n];) l.crossStart = t, t += l.cross;
                    else if (e.lines.length > 1 && "space-between" === e.style.alignContent)
                        for (r = e.flexStyle.crossSpace / (e.lines.length - 1), t = 0; l = e.lines[++n];) l.crossStart = t, t += l.cross + r;
                    else if (e.lines.length > 1 && "space-around" === e.style.alignContent)
                        for (r = 2 * e.flexStyle.crossSpace / (2 * e.lines.length), t = r / 2; l = e.lines[++n];) l.crossStart = t, t += l.cross + r;
                    else
                        for (r = e.flexStyle.crossSpace / e.lines.length, t = e.flexStyle.crossInnerBefore; l = e.lines[++n];) l.crossStart = t, l.cross += r, t += l.cross
                }
            }, {}],
            2: [function(e, t, r) {
                t.exports = function(e) {
                    for (var t, r = -1; line = e.lines[++r];)
                        for (t = -1; child = line.children[++t];) {
                            var l = child.style.alignSelf;
                            "auto" === l && (l = e.style.alignItems), "flex-start" === l ? child.flexStyle.crossStart = line.crossStart : "flex-end" === l ? child.flexStyle.crossStart = line.crossStart + line.cross - child.flexStyle.crossOuter : "center" === l ? child.flexStyle.crossStart = line.crossStart + (line.cross - child.flexStyle.crossOuter) / 2 : (child.flexStyle.crossStart = line.crossStart, child.flexStyle.crossOuter = line.cross, child.flexStyle.cross = child.flexStyle.crossOuter - child.flexStyle.crossBefore - child.flexStyle.crossAfter)
                        }
                }
            }, {}],
            3: [function(e, t, r) {
                t.exports = function l(e, l) {
                    var t = "row" === l || "row-reverse" === l,
                        r = e.mainAxis;
                    if (r) {
                        var n = t && "inline" === r || !t && "block" === r;
                        n || (e.flexStyle = {
                            main: e.flexStyle.cross,
                            cross: e.flexStyle.main,
                            mainOffset: e.flexStyle.crossOffset,
                            crossOffset: e.flexStyle.mainOffset,
                            mainBefore: e.flexStyle.crossBefore,
                            mainAfter: e.flexStyle.crossAfter,
                            crossBefore: e.flexStyle.mainBefore,
                            crossAfter: e.flexStyle.mainAfter,
                            mainInnerBefore: e.flexStyle.crossInnerBefore,
                            mainInnerAfter: e.flexStyle.crossInnerAfter,
                            crossInnerBefore: e.flexStyle.mainInnerBefore,
                            crossInnerAfter: e.flexStyle.mainInnerAfter,
                            mainBorderBefore: e.flexStyle.crossBorderBefore,
                            mainBorderAfter: e.flexStyle.crossBorderAfter,
                            crossBorderBefore: e.flexStyle.mainBorderBefore,
                            crossBorderAfter: e.flexStyle.mainBorderAfter
                        })
                    } else t ? e.flexStyle = {
                        main: e.style.width,
                        cross: e.style.height,
                        mainOffset: e.style.offsetWidth,
                        crossOffset: e.style.offsetHeight,
                        mainBefore: e.style.marginLeft,
                        mainAfter: e.style.marginRight,
                        crossBefore: e.style.marginTop,
                        crossAfter: e.style.marginBottom,
                        mainInnerBefore: e.style.paddingLeft,
                        mainInnerAfter: e.style.paddingRight,
                        crossInnerBefore: e.style.paddingTop,
                        crossInnerAfter: e.style.paddingBottom,
                        mainBorderBefore: e.style.borderLeftWidth,
                        mainBorderAfter: e.style.borderRightWidth,
                        crossBorderBefore: e.style.borderTopWidth,
                        crossBorderAfter: e.style.borderBottomWidth
                    } : e.flexStyle = {
                        main: e.style.height,
                        cross: e.style.width,
                        mainOffset: e.style.offsetHeight,
                        crossOffset: e.style.offsetWidth,
                        mainBefore: e.style.marginTop,
                        mainAfter: e.style.marginBottom,
                        crossBefore: e.style.marginLeft,
                        crossAfter: e.style.marginRight,
                        mainInnerBefore: e.style.paddingTop,
                        mainInnerAfter: e.style.paddingBottom,
                        crossInnerBefore: e.style.paddingLeft,
                        crossInnerAfter: e.style.paddingRight,
                        mainBorderBefore: e.style.borderTopWidth,
                        mainBorderAfter: e.style.borderBottomWidth,
                        crossBorderBefore: e.style.borderLeftWidth,
                        crossBorderAfter: e.style.borderRightWidth
                    }, "content-box" === e.style.boxSizing && ("number" == typeof e.flexStyle.main && (e.flexStyle.main += e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter), "number" == typeof e.flexStyle.cross && (e.flexStyle.cross += e.flexStyle.crossInnerBefore + e.flexStyle.crossInnerAfter + e.flexStyle.crossBorderBefore + e.flexStyle.crossBorderAfter));
                    e.mainAxis = t ? "inline" : "block", e.crossAxis = t ? "block" : "inline", "number" == typeof e.style.flexBasis && (e.flexStyle.main = e.style.flexBasis + e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter), e.flexStyle.mainOuter = e.flexStyle.main, e.flexStyle.crossOuter = e.flexStyle.cross, "auto" === e.flexStyle.mainOuter && (e.flexStyle.mainOuter = e.flexStyle.mainOffset), "auto" === e.flexStyle.crossOuter && (e.flexStyle.crossOuter = e.flexStyle.crossOffset), "number" == typeof e.flexStyle.mainBefore && (e.flexStyle.mainOuter += e.flexStyle.mainBefore), "number" == typeof e.flexStyle.mainAfter && (e.flexStyle.mainOuter += e.flexStyle.mainAfter), "number" == typeof e.flexStyle.crossBefore && (e.flexStyle.crossOuter += e.flexStyle.crossBefore), "number" == typeof e.flexStyle.crossAfter && (e.flexStyle.crossOuter += e.flexStyle.crossAfter)
                }
            }, {}],
            4: [function(e, t, r) {
                var l = e("../reduce");
                t.exports = function(e) {
                    if (e.mainSpace > 0) {
                        var t = l(e.children, function(e, t) {
                            return e + parseFloat(t.style.flexGrow)
                        }, 0);
                        t > 0 && (e.main = l(e.children, function(r, l) {
                            return "auto" === l.flexStyle.main ? l.flexStyle.main = l.flexStyle.mainOffset + parseFloat(l.style.flexGrow) / t * e.mainSpace : l.flexStyle.main += parseFloat(l.style.flexGrow) / t * e.mainSpace, l.flexStyle.mainOuter = l.flexStyle.main + l.flexStyle.mainBefore + l.flexStyle.mainAfter, r + l.flexStyle.mainOuter
                        }, 0), e.mainSpace = 0)
                    }
                }
            }, {
                "../reduce": 12
            }],
            5: [function(e, t, r) {
                var l = e("../reduce");
                t.exports = function(e) {
                    if (e.mainSpace < 0) {
                        var t = l(e.children, function(e, t) {
                            return e + parseFloat(t.style.flexShrink)
                        }, 0);
                        t > 0 && (e.main = l(e.children, function(r, l) {
                            return l.flexStyle.main += parseFloat(l.style.flexShrink) / t * e.mainSpace, l.flexStyle.mainOuter = l.flexStyle.main + l.flexStyle.mainBefore + l.flexStyle.mainAfter, r + l.flexStyle.mainOuter
                        }, 0), e.mainSpace = 0)
                    }
                }
            }, {
                "../reduce": 12
            }],
            6: [function(e, t, r) {
                var l = e("../reduce");
                t.exports = function(e) {
                    var t;
                    e.lines = [t = {
                        main: 0,
                        cross: 0,
                        children: []
                    }];
                    for (var r, n = -1; r = e.children[++n];) "nowrap" === e.style.flexWrap || 0 === t.children.length || "auto" === e.flexStyle.main || e.flexStyle.main - e.flexStyle.mainInnerBefore - e.flexStyle.mainInnerAfter - e.flexStyle.mainBorderBefore - e.flexStyle.mainBorderAfter >= t.main + r.flexStyle.mainOuter ? (t.main += r.flexStyle.mainOuter, t.cross = Math.max(t.cross, r.flexStyle.crossOuter)) : e.lines.push(t = {
                        main: r.flexStyle.mainOuter,
                        cross: r.flexStyle.crossOuter,
                        children: []
                    }), t.children.push(r);
                    e.flexStyle.mainLines = l(e.lines, function(e, t) {
                        return Math.max(e, t.main)
                    }, 0), e.flexStyle.crossLines = l(e.lines, function(e, t) {
                        return e + t.cross
                    }, 0), "auto" === e.flexStyle.main && (e.flexStyle.main = Math.max(e.flexStyle.mainOffset, e.flexStyle.mainLines + e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter)), "auto" === e.flexStyle.cross && (e.flexStyle.cross = Math.max(e.flexStyle.crossOffset, e.flexStyle.crossLines + e.flexStyle.crossInnerBefore + e.flexStyle.crossInnerAfter + e.flexStyle.crossBorderBefore + e.flexStyle.crossBorderAfter)), e.flexStyle.crossSpace = e.flexStyle.cross - e.flexStyle.crossInnerBefore - e.flexStyle.crossInnerAfter - e.flexStyle.crossBorderBefore - e.flexStyle.crossBorderAfter - e.flexStyle.crossLines, e.flexStyle.mainOuter = e.flexStyle.main + e.flexStyle.mainBefore + e.flexStyle.mainAfter, e.flexStyle.crossOuter = e.flexStyle.cross + e.flexStyle.crossBefore + e.flexStyle.crossAfter
                }
            }, {
                "../reduce": 12
            }],
            7: [function(e, t, r) {
                function l(t) {
                    for (var r, l = -1; r = t.children[++l];) e("./flex-direction")(r, t.style.flexDirection);
                    e("./flex-direction")(t, t.style.flexDirection), e("./order")(t), e("./flexbox-lines")(t), e("./align-content")(t), l = -1;
                    for (var n; n = t.lines[++l];) n.mainSpace = t.flexStyle.main - t.flexStyle.mainInnerBefore - t.flexStyle.mainInnerAfter - t.flexStyle.mainBorderBefore - t.flexStyle.mainBorderAfter - n.main, e("./flex-grow")(n), e("./flex-shrink")(n), e("./margin-main")(n), e("./margin-cross")(n), e("./justify-content")(n, t.style.justifyContent, t);
                    e("./align-items")(t)
                }
                t.exports = l
            }, {
                "./align-content": 1,
                "./align-items": 2,
                "./flex-direction": 3,
                "./flex-grow": 4,
                "./flex-shrink": 5,
                "./flexbox-lines": 6,
                "./justify-content": 8,
                "./margin-cross": 9,
                "./margin-main": 10,
                "./order": 11
            }],
            8: [function(e, t, r) {
                t.exports = function(e, t, r) {
                    var l, n, f, o = r.flexStyle.mainInnerBefore,
                        i = -1;
                    if ("flex-end" === t)
                        for (l = e.mainSpace, l += o; f = e.children[++i];) f.flexStyle.mainStart = l, l += f.flexStyle.mainOuter;
                    else if ("center" === t)
                        for (l = e.mainSpace / 2, l += o; f = e.children[++i];) f.flexStyle.mainStart = l, l += f.flexStyle.mainOuter;
                    else if ("space-between" === t)
                        for (n = e.mainSpace / (e.children.length - 1), l = 0, l += o; f = e.children[++i];) f.flexStyle.mainStart = l, l += f.flexStyle.mainOuter + n;
                    else if ("space-around" === t)
                        for (n = 2 * e.mainSpace / (2 * e.children.length), l = n / 2, l += o; f = e.children[++i];) f.flexStyle.mainStart = l, l += f.flexStyle.mainOuter + n;
                    else
                        for (l = 0, l += o; f = e.children[++i];) f.flexStyle.mainStart = l, l += f.flexStyle.mainOuter
                }
            }, {}],
            9: [function(e, t, r) {
                t.exports = function(e) {
                    for (var t, r = -1; t = e.children[++r];) {
                        var l = 0;
                        "auto" === t.flexStyle.crossBefore && ++l, "auto" === t.flexStyle.crossAfter && ++l;
                        var n = e.cross - t.flexStyle.crossOuter;
                        "auto" === t.flexStyle.crossBefore && (t.flexStyle.crossBefore = n / l), "auto" === t.flexStyle.crossAfter && (t.flexStyle.crossAfter = n / l), "auto" === t.flexStyle.cross ? t.flexStyle.crossOuter = t.flexStyle.crossOffset + t.flexStyle.crossBefore + t.flexStyle.crossAfter : t.flexStyle.crossOuter = t.flexStyle.cross + t.flexStyle.crossBefore + t.flexStyle.crossAfter
                    }
                }
            }, {}],
            10: [function(e, t, r) {
                t.exports = function(e) {
                    for (var t, r = 0, l = -1; t = e.children[++l];) "auto" === t.flexStyle.mainBefore && ++r, "auto" === t.flexStyle.mainAfter && ++r;
                    if (r > 0) {
                        for (l = -1; t = e.children[++l];) "auto" === t.flexStyle.mainBefore && (t.flexStyle.mainBefore = e.mainSpace / r), "auto" === t.flexStyle.mainAfter && (t.flexStyle.mainAfter = e.mainSpace / r), "auto" === t.flexStyle.main ? t.flexStyle.mainOuter = t.flexStyle.mainOffset + t.flexStyle.mainBefore + t.flexStyle.mainAfter : t.flexStyle.mainOuter = t.flexStyle.main + t.flexStyle.mainBefore + t.flexStyle.mainAfter;
                        e.mainSpace = 0
                    }
                }
            }, {}],
            11: [function(e, t, r) {
                var l = /^(column|row)-reverse$/;
                t.exports = function(e) {
                    e.children.sort(function(e, t) {
                        return e.style.order - t.style.order || e.index - t.index
                    }), l.test(e.style.flexDirection) && e.children.reverse()
                }
            }, {}],
            12: [function(e, t, r) {
                function l(e, t, r) {
                    for (var l = e.length, n = -1; ++n < l;) n in e && (r = t(r, e[n], n));
                    return r
                }
                t.exports = l
            }, {}],
            13: [function(e, t, r) {
                function l(e) {
                    i(o(e))
                }
                var n = e("./read"),
                    f = e("./write"),
                    o = e("./readAll"),
                    i = e("./writeAll");
                t.exports = l, t.exports.read = n, t.exports.write = f, t.exports.readAll = o, t.exports.writeAll = i
            }, {
                "./read": 15,
                "./readAll": 16,
                "./write": 17,
                "./writeAll": 18
            }],
            14: [function(e, t, r) {
                function l(e, t) {
                    var r = String(e).match(f);
                    if (!r) return e;
                    var l = r[1],
                        o = r[2];
                    return "px" === o ? 1 * l : "cm" === o ? .3937 * l * 96 : "in" === o ? 96 * l : "mm" === o ? .3937 * l * 96 / 10 : "pc" === o ? 12 * l * 96 / 72 : "pt" === o ? 96 * l / 72 : "rem" === o ? 16 * l : n(e, t)
                }

                function n(e, t) {
                    o.style.cssText = "border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:" + e + "!important", t.parentNode.insertBefore(o, t.nextSibling);
                    var r = o.offsetWidth;
                    return t.parentNode.removeChild(o), r
                }
                t.exports = l;
                var f = /^([-+]?\d*\.?\d+)(%|[a-z]+)$/,
                    o = document.createElement("div")
            }, {}],
            15: [function(e, t, r) {
                function l(e) {
                    var t = {
                            alignContent: "stretch",
                            alignItems: "stretch",
                            alignSelf: "auto",
                            borderBottomWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderTopWidth: 0,
                            boxSizing: "content-box",
                            display: "inline",
                            flexBasis: "auto",
                            flexDirection: "row",
                            flexGrow: 0,
                            flexShrink: 1,
                            flexWrap: "nowrap",
                            justifyContent: "flex-start",
                            height: "auto",
                            marginTop: 0,
                            marginRight: 0,
                            marginLeft: 0,
                            marginBottom: 0,
                            paddingTop: 0,
                            paddingRight: 0,
                            paddingLeft: 0,
                            paddingBottom: 0,
                            maxHeight: "none",
                            maxWidth: "none",
                            minHeight: 0,
                            minWidth: 0,
                            order: 0,
                            position: "static",
                            width: "auto"
                        },
                        r = e instanceof Element;
                    if (r) {
                        var l = e.hasAttribute("data-style"),
                            i = l ? e.getAttribute("data-style") : e.getAttribute("style") || "";
                        l || e.setAttribute("data-style", i);
                        var a = window.getComputedStyle && getComputedStyle(e) || {};
                        o(t, a);
                        var c = e.currentStyle || {};
                        n(t, c), f(t, i);
                        for (var y in t) t[y] = s(t[y], e);
                        var x = e.getBoundingClientRect();
                        t.offsetHeight = x.height || e.offsetHeight, t.offsetWidth = x.width || e.offsetWidth
                    }
                    var S = {
                        element: e,
                        style: t
                    };
                    return S
                }

                function n(e, t) {
                    for (var r in e) {
                        var l = (r in t);
                        if (l) e[r] = t[r];
                        else {
                            var n = r.replace(/[A-Z]/g, "-$&").toLowerCase(),
                                f = (n in t);
                            f && (e[r] = t[n])
                        }
                    }
                    var o = ("-js-display" in t);
                    o && (e.display = t["-js-display"])
                }

                function f(e, t) {
                    for (var r; r = i.exec(t);) {
                        var l = r[1].toLowerCase().replace(/-[a-z]/g, function(e) {
                            return e.slice(1).toUpperCase()
                        });
                        e[l] = r[2]
                    }
                }

                function o(e, t) {
                    for (var r in e) {
                        var l = (r in t);
                        l && !/^(alignSelf|height|width)$/.test(r) && (e[r] = t[r])
                    }
                }
                t.exports = l;
                var i = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,
                    s = e("./getComputedLength")
            }, {
                "./getComputedLength": 14
            }],
            16: [function(e, t, r) {
                function l(e) {
                    var t = [];
                    return n(e, t), t
                }

                function n(e, t) {
                    for (var r, l = f(e), i = [], s = -1; r = e.childNodes[++s];) {
                        var a = 3 === r.nodeType && !/^\s*$/.test(r.nodeValue);
                        if (l && a) {
                            var c = r;
                            r = e.insertBefore(document.createElement("flex-item"), c), r.appendChild(c)
                        }
                        var y = r instanceof Element;
                        if (y) {
                            var x = n(r, t);
                            if (l) {
                                var S = r.style;
                                S.display = "inline-block", S.position = "absolute", x.style = o(r).style, i.push(x)
                            }
                        }
                    }
                    var m = {
                        element: e,
                        children: i
                    };
                    return l && (m.style = o(e).style, t.push(m)), m
                }

                function f(e) {
                    var t = e instanceof Element,
                        r = t && e.getAttribute("data-style"),
                        l = t && e.currentStyle && e.currentStyle["-js-display"],
                        n = i.test(r) || s.test(l);
                    return n
                }
                t.exports = l;
                var o = e("../read"),
                    i = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,
                    s = /^(inline-)?flex$/i
            }, {
                "../read": 15
            }],
            17: [function(e, t, r) {
                function l(e) {
                    f(e);
                    var t = e.element.style,
                        r = "inline" === e.mainAxis ? ["main", "cross"] : ["cross", "main"];
                    t.boxSizing = "content-box", t.display = "block", t.position = "relative", t.width = n(e.flexStyle[r[0]] - e.flexStyle[r[0] + "InnerBefore"] - e.flexStyle[r[0] + "InnerAfter"] - e.flexStyle[r[0] + "BorderBefore"] - e.flexStyle[r[0] + "BorderAfter"]), t.height = n(e.flexStyle[r[1]] - e.flexStyle[r[1] + "InnerBefore"] - e.flexStyle[r[1] + "InnerAfter"] - e.flexStyle[r[1] + "BorderBefore"] - e.flexStyle[r[1] + "BorderAfter"]);
                    for (var l, o = -1; l = e.children[++o];) {
                        var i = l.element.style,
                            s = "inline" === l.mainAxis ? ["main", "cross"] : ["cross", "main"];
                        i.boxSizing = "content-box", i.display = "block", i.position = "absolute", "auto" !== l.flexStyle[s[0]] && (i.width = n(l.flexStyle[s[0]] - l.flexStyle[s[0] + "InnerBefore"] - l.flexStyle[s[0] + "InnerAfter"] - l.flexStyle[s[0] + "BorderBefore"] - l.flexStyle[s[0] + "BorderAfter"])), "auto" !== l.flexStyle[s[1]] && (i.height = n(l.flexStyle[s[1]] - l.flexStyle[s[1] + "InnerBefore"] - l.flexStyle[s[1] + "InnerAfter"] - l.flexStyle[s[1] + "BorderBefore"] - l.flexStyle[s[1] + "BorderAfter"])), i.top = n(l.flexStyle[s[1] + "Start"]), i.left = n(l.flexStyle[s[0] + "Start"]), i.marginTop = n(l.flexStyle[s[1] + "Before"]), i.marginRight = n(l.flexStyle[s[0] + "After"]), i.marginBottom = n(l.flexStyle[s[1] + "After"]), i.marginLeft = n(l.flexStyle[s[0] + "Before"])
                    }
                }

                function n(e) {
                    return "string" == typeof e ? e : Math.max(e, 0) + "px"
                }
                t.exports = l;
                var f = e("../flexbox")
            }, {
                "../flexbox": 7
            }],
            18: [function(e, t, r) {
                function l(e) {
                    for (var t, r = -1; t = e[++r];) n(t);
                }
                t.exports = l;
                var n = e("../write")
            }, {
                "../write": 17
            }]
        }, {}, [13])(13)
    })
}), (function(module, exports, __webpack_require__) {
    "use strict";
    !(function(a, b, c, d) {
        function e(b, c) {
            this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
                this._handlers[c] = a.proxy(this[c], this)
            }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
                this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
            }, this)), a.each(e.Workers, a.proxy(function(b, c) {
                this._pipe.push({
                    filter: c.filter,
                    run: a.proxy(c.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        e.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: b,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, e.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, e.Type = {
            Event: "event",
            State: "state"
        }, e.Plugins = {}, e.Workers = [{
            filter: ["width", "settings"],
            run: function run() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function run(a) {
                a.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function run() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function run(a) {
                var b = this.settings.margin || "",
                    c = !this.settings.autoWidth,
                    d = this.settings.rtl,
                    e = {
                        width: "auto",
                        "margin-left": d ? b : "",
                        "margin-right": d ? "" : b
                    };
                !c && this.$stage.children().css(e), a.css = e
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function run(a) {
                var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    c = null,
                    d = this._items.length,
                    e = !this.settings.autoWidth,
                    f = [];
                for (a.items = {
                        merge: !1,
                        width: b
                    }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
                this._widths = f
            }
        }, {
            filter: ["items", "settings"],
            run: function run() {
                var b = [],
                    c = this._items,
                    d = this.settings,
                    e = Math.max(2 * d.items, 4),
                    f = 2 * Math.ceil(c.length / 2),
                    g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                    h = "",
                    i = "";
                for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
                this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function run() {
                for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
                this._coordinates = f
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function run() {
                var a = this.settings.stagePadding,
                    b = this._coordinates,
                    c = {
                        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                        "padding-left": a || "",
                        "padding-right": a || ""
                    };
                this.$stage.css(c)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function run(a) {
                var b = this._coordinates.length,
                    c = !this.settings.autoWidth,
                    d = this.$stage.children();
                if (c && a.items.merge)
                    for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
                else c && (a.css.width = a.items.width, d.css(a.css))
            }
        }, {
            filter: ["items"],
            run: function run() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function run(a) {
                a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
            }
        }, {
            filter: ["position"],
            run: function run() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function run() {
                var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                    f = 2 * this.settings.stagePadding,
                    g = this.coordinates(this.current()) + f,
                    h = g + this.width() * e,
                    i = [];
                for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], e.prototype.initialize = function() {
            if ((this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading"))) {
                var b, c, e;
                b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e && this.preloadAutoWidthImages(b)
            }
            this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, e.prototype.setup = function() {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c ? (a.each(c, function(a) {
                b >= a && a > d && (d = Number(a))
            }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: e
                }
            }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, e.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, e.prototype.prepare = function(b) {
            var c = this.trigger("prepare", {
                content: b
            });
            return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
                content: c.data
            }), c.data
        }, e.prototype.update = function() {
            for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                    return this[a]
                }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, e.prototype.width = function(a) {
            switch (a = a || e.Width.Default) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, e.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, e.prototype.onThrottledResize = function() {
            b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, e.prototype.onResize = function() {
            return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1
        }, e.prototype.registerEventHandlers = function() {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
        }, e.prototype.onDragStart = function(b) {
            var d = null;
            3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
                x: d[16 === d.length ? 12 : 4],
                y: d[16 === d.length ? 13 : 5]
            }) : (d = this.$stage.position(), d = {
                x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
                y: d.top
            }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
                var d = this.difference(this._drag.pointer, this.pointer(b));
                a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, e.prototype.onDragMove = function(a) {
            var b = null,
                c = null,
                d = null,
                e = this.difference(this._drag.pointer, this.pointer(a)),
                f = this.difference(this._drag.stage.start, e);
            this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
        }, e.prototype.onDragEnd = function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b)),
                e = this._drag.stage.current,
                f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, e.prototype.closest = function(b, c) {
            var d = -1,
                e = 30,
                f = this.width(),
                g = this.coordinates();
            return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
                return "left" === c && b > h - e && h + e > b ? d = a : "right" === c && b > h - f - e && h - f + e > b ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), -1 === d
            }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
        }, e.prototype.animate = function(b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
                transform: "translate3d(" + b + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : c ? this.$stage.animate({
                left: b + "px"
            }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: b + "px"
            })
        }, e.prototype.is = function(a) {
            return this._states.current[a] && this._states.current[a] > 0
        }, e.prototype.current = function(a) {
            if (a === d) return this._current;
            if (0 === this._items.length) return d;
            if ((a = this.normalize(a), this._current !== a)) {
                var b = this.trigger("change", {
                    property: {
                        name: "position",
                        value: a
                    }
                });
                b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, e.prototype.invalidate = function(b) {
            return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
                return b
            })
        }, e.prototype.reset = function(a) {
            a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
        }, e.prototype.normalize = function(a, b) {
            var c = this._items.length,
                e = b ? 0 : this._clones.length;
            return !this.isNumeric(a) || 1 > c ? a = d : (0 > a || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
        }, e.prototype.relative = function(a) {
            return a -= this._clones.length / 2, this.normalize(a, !0)
        }, e.prototype.maximum = function(a) {
            var b, c, d, e = this.settings,
                f = this._coordinates.length;
            if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
                f = b + 1
            } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2), Math.max(f, 0)
        }, e.prototype.minimum = function(a) {
            return a ? 0 : this._clones.length / 2
        }, e.prototype.items = function(a) {
            return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
        }, e.prototype.mergers = function(a) {
            return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
        }, e.prototype.clones = function(b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function f(a) {
                    return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
                };
            return b === d ? a.map(this._clones, function(a, b) {
                return f(b)
            }) : a.map(this._clones, function(a, c) {
                return a === b ? f(c) : null
            })
        }, e.prototype.speed = function(a) {
            return a !== d && (this._speed = a), this._speed
        }, e.prototype.coordinates = function(b) {
            var c, e = 1,
                f = b - 1;
            return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
                return this.coordinates(b)
            }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
        }, e.prototype.duration = function(a, b, c) {
            return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
        }, e.prototype.to = function(a, b) {
            var c = this.current(),
                d = null,
                e = a - this.relative(c),
                f = (e > 0) - (0 > e),
                g = this._items.length,
                h = this.minimum(),
                i = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && i >= d - e && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
        }, e.prototype.next = function(a) {
            a = a || !1, this.to(this.relative(this.current()) + 1, a)
        }, e.prototype.prev = function(a) {
            a = a || !1, this.to(this.relative(this.current()) - 1, a)
        }, e.prototype.onTransitionEnd = function(a) {
            return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated"))
        }, e.prototype.viewport = function() {
            var d;
            if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
            else if (b.innerWidth) d = b.innerWidth;
            else {
                if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
                d = c.documentElement.clientWidth
            }
            return d
        }, e.prototype.replace = function(b) {
            this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
                return 1 === this.nodeType
            }).each(a.proxy(function(a, b) {
                b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, e.prototype.add = function(b, c) {
            var e = this.relative(this._current);
            c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
                content: b,
                position: c
            }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
                content: b,
                position: c
            })
        }, e.prototype.remove = function(a) {
            a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
                content: this._items[a],
                position: a
            }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: a
            }))
        }, e.prototype.preloadAutoWidthImages = function(b) {
            b.each(a.proxy(function(b, c) {
                this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function(a) {
                    c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
            }, this))
        }, e.prototype.destroy = function() {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins) this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, e.prototype.op = function(a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : c > a;
                case ">":
                    return d ? c > a : a > c;
                case ">=":
                    return d ? c >= a : a >= c;
                case "<=":
                    return d ? a >= c : c >= a
            }
        }, e.prototype.on = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        }, e.prototype.off = function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }, e.prototype.trigger = function(b, c, d, f, g) {
            var h = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                i = a.camelCase(a.grep(["on", b, d], function(a) {
                    return a
                }).join("-").toLowerCase()),
                j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                    relatedTarget: this
                }, h, c));
            return this._supress[b] || (a.each(this._plugins, function(a, b) {
                b.onTrigger && b.onTrigger(j)
            }), this.register({
                type: e.Type.Event,
                name: b
            }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
        }, e.prototype.enter = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
            }, this))
        }, e.prototype.leave = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b]--
            }, this))
        }, e.prototype.register = function(b) {
            if (b.type === e.Type.Event) {
                if ((a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)) {
                    var c = a.event.special[b.name]._default;
                    a.event.special[b.name]._default = function(a) {
                        return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                    }, a.event.special[b.name].owl = !0
                }
            } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                return a.inArray(c, this._states.tags[b.name]) === d
            }, this)))
        }, e.prototype.suppress = function(b) {
            a.each(b, a.proxy(function(a, b) {
                this._supress[b] = !0
            }, this))
        }, e.prototype.release = function(b) {
            a.each(b, a.proxy(function(a, b) {
                delete this._supress[b]
            }, this))
        }, e.prototype.pointer = function(a) {
            var c = {
                x: null,
                y: null
            };
            return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
        }, e.prototype.isNumeric = function(a) {
            return !isNaN(parseFloat(a))
        }, e.prototype.difference = function(a, b) {
            return {
                x: a.x - b.x,
                y: a.y - b.y
            }
        }, a.fn.owlCarousel = function(b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var d = a(this),
                    f = d.data("owl.carousel");
                f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                    f.register({
                        type: e.Type.Event,
                        name: c
                    }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                        a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                    }, f))
                })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
            })
        }, a.fn.owlCarousel.Constructor = e
    })(window.Zepto || window.jQuery, window, document), (function(a, b, c, d) {
        var e = function e(b) {
            this._core = b, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, e.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, e.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, e.prototype.destroy = function() {
            var a, c;
            b.clearInterval(this._interval);
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
        }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
    })(window.Zepto || window.jQuery, window, document), (function(a, b, c, d) {
        var e = function e(b) {
            this._core = b, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                    if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                        for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
                                this.load(b)
                            }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            lazyLoad: !1
        }, e.prototype.load = function(c) {
            var d = this._core.$stage.children().eq(c),
                e = d && d.find(".owl-lazy");
            !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
                var e, f = a(d),
                    g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
                this._core.trigger("load", {
                    element: f,
                    url: g
                }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                    f.css("opacity", 1), this._core.trigger("loaded", {
                        element: f,
                        url: g
                    }, "lazy")
                }, this)).attr("src", g) : (e = new Image(), e.onload = a.proxy(function() {
                    f.css({
                        "background-image": "url(" + g + ")",
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: f,
                        url: g
                    }, "lazy")
                }, this), e.src = g)
            }, this)), this._loaded.push(d.get(0)))
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
        }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
    })(window.Zepto || window.jQuery, window, document), (function(a, b, c, d) {
        var e = function e(b) {
            this._core = b, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
                }, this),
                "loaded.owl.lazy": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, e.prototype.update = function() {
            var b = this._core._current,
                c = b + this._core.settings.items,
                d = this._core.$stage.children().toArray().slice(b, c),
                e = [],
                f = 0;
            a.each(d, function(b, c) {
                e.push(a(c).height())
            }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
        }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
    })(window.Zepto || window.jQuery, window, document), (function(a, b, c, d) {
        var e = function e(b) {
            this._core = b, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
                }, this),
                "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" === a.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    if (b.namespace) {
                        var c = a(b.content).find(".owl-video");
                        c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                    }
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
                this.play(a)
            }, this))
        };
        e.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, e.prototype.fetch = function(a, b) {
            var c = (function() {
                    return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
                })(),
                d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
                e = a.attr("data-width") || this._core.settings.videoWidth,
                f = a.attr("data-height") || this._core.settings.videoHeight,
                g = a.attr("href");
            if (!g) throw new Error("Missing video URL.");
            if ((d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1)) c = "youtube";
            else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
            else {
                if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                c = "vzaar"
            }
            d = d[6], this._videos[g] = {
                type: c,
                id: d,
                width: e,
                height: f
            }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
        }, e.prototype.thumbnail = function(b, c) {
            var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
                h = b.find("img"),
                i = "src",
                j = "",
                k = this._core.settings,
                l = function l(a) {
                    e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
                };
            return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function success(a) {
                    f = a[0].thumbnail_large, l(f)
                }
            }) : "vzaar" === c.type && a.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function success(a) {
                    f = a.framegrab_url, l(f)
                }
            }))
        }, e.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, e.prototype.play = function(b) {
            var c, d = a(b.target),
                e = d.closest("." + this._core.settings.itemClass),
                f = this._videos[e.attr("data-video")],
                g = f.width || "100%",
                h = f.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
        }, e.prototype.isInFullScreen = function() {
            var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
            return b && a(b).parent().hasClass("owl-video-frame")
        }, e.prototype.destroy = function() {
            var a, b;
            this._core.$element.off("click.owl.video");
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
        }, a.fn.owlCarousel.Constructor.Plugins.Video = e
    })(window.Zepto || window.jQuery, window, document), (function(a, b, c, d) {
        var e = function e(b) {
            this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
                "change.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                    a.namespace && (this.swapping = "translated" == a.type)
                }, this),
                "translate.owl.carousel": a.proxy(function(a) {
                    a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        e.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, e.prototype.swap = function() {
            if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                this.core.speed(0);
                var b, c = a.proxy(this.clear, this),
                    d = this.core.$stage.children().eq(this.previous),
                    e = this.core.$stage.children().eq(this.next),
                    f = this.core.settings.animateIn,
                    g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
                    left: b + "px"
                }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
            }
        }, e.prototype.clear = function(b) {
            a(b.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
        }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
    })(window.Zepto || window.jQuery, window, document), (function(a, b, c, d) {
        var e = function e(b) {
            this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": a.proxy(function(a, b, c) {
                    a.namespace && this.play(b, c)
                }, this),
                "stop.owl.autoplay": a.proxy(function(a) {
                    a.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
        };
        e.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, e.prototype.play = function(a, b) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
        }, e.prototype._getNextTimeout = function(d, e) {
            return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
            }, this), d || this._core.settings.autoplayTimeout)
        }, e.prototype._setAutoPlayInterval = function() {
            this._timeout = this._getNextTimeout()
        }, e.prototype.stop = function() {
            this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
        }, e.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }, e.prototype.destroy = function() {
            var a, b;
            this.stop();
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
        }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
    })(window.Zepto || window.jQuery, window, document), (function(a, b, c, d) {
        "use strict";
        var e = function e(b) {
            this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": a.proxy(function(b) {
                    b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" == a.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        e.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, e.prototype.initialize = function() {
            var b, c = this._core.settings;
            this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
                this.prev(c.navSpeed)
            }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
                this.next(c.navSpeed)
            }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
                var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                b.preventDefault(), this.to(d, c.dotsSpeed)
            }, this));
            for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
        }, e.prototype.destroy = function() {
            var a, b, c, d;
            for (a in this._handlers) this.$element.off(a, this._handlers[a]);
            for (b in this._controls) this._controls[b].remove();
            for (d in this.overides) this._core[d] = this._overrides[d];
            for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
        }, e.prototype.update = function() {
            var a, b, c, d = this._core.clones().length / 2,
                e = d + this._core.items().length,
                f = this._core.maximum(!0),
                g = this._core.settings,
                h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
            if (("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy))
                for (this._pages = [], a = d, b = 0, c = 0; e > a; a++) {
                    if (b >= h || 0 === b) {
                        if ((this._pages.push({
                                start: Math.min(f, a - d),
                                end: a - d + h - 1
                            }), Math.min(f, a - d) === f)) break;
                        b = 0, ++c
                    }
                    b += this._core.mergers(this._core.relative(a))
                }
        }, e.prototype.draw = function() {
            var b, c = this._core.settings,
                d = this._core.items().length <= c.items,
                e = this._core.relative(this._core.current()),
                f = c.loop || c.rewind;
            this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : 0 > b && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
        }, e.prototype.onTrigger = function(b) {
            var c = this._core.settings;
            b.page = {
                index: a.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
            }
        }, e.prototype.current = function() {
            var b = this._core.relative(this._core.current());
            return a.grep(this._pages, a.proxy(function(a, c) {
                return a.start <= b && a.end >= b
            }, this)).pop()
        }, e.prototype.getPosition = function(b) {
            var c, d, e = this._core.settings;
            return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
        }, e.prototype.next = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
        }, e.prototype.prev = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
        }, e.prototype.to = function(b, c, d) {
            var e;
            !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
        }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
    })(window.Zepto || window.jQuery, window, document), (function(a, b, c, d) {
        "use strict";
        var e = function e(c) {
            this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": a.proxy(function(c) {
                    c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    if (b.namespace) {
                        var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!c) return;
                        this._hashes[c] = b.content
                    }
                }, this),
                "changed.owl.carousel": a.proxy(function(c) {
                    if (c.namespace && "position" === c.property.name) {
                        var d = this._core.items(this._core.relative(this._core.current())),
                            e = a.map(this._hashes, function(a, b) {
                                return a === d ? b : null
                            }).join();
                        if (!e || b.location.hash.slice(1) === e) return;
                        b.location.hash = e
                    }
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
                var c = b.location.hash.substring(1),
                    e = this._core.$stage.children(),
                    f = this._hashes[c] && e.index(this._hashes[c]);
                f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
            }, this))
        };
        e.Defaults = {
            URLhashListener: !1
        }, e.prototype.destroy = function() {
            var c, d;
            a(b).off("hashchange.owl.navigation");
            for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
            for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
        }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
    })(window.Zepto || window.jQuery, window, document), (function(a, b, c, d) {
        function e(b, c) {
            var e = !1,
                f = b.charAt(0).toUpperCase() + b.slice(1);
            return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
                return g[b] !== d ? (e = c ? b : !0, !1) : void 0
            }), e
        }

        function f(a) {
            return e(a, !0)
        }
        var g = a("<support>").get(0).style,
            h = "Webkit Moz O ms".split(" "),
            i = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            j = {
                csstransforms: function csstransforms() {
                    return !!e("transform")
                },
                csstransforms3d: function csstransforms3d() {
                    return !!e("perspective")
                },
                csstransitions: function csstransitions() {
                    return !!e("transition")
                },
                cssanimations: function cssanimations() {
                    return !!e("animation")
                }
            };
        j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
    })(window.Zepto || window.jQuery, window, document)
}), (function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(root, factory) {
        if (!0) {
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        } else if (typeof exports === 'object') {
            module.exports = factory(require, exports, module)
        } else {
            root.Tether = factory()
        }
    })(undefined, function(require, exports, module) {
        'use strict';
        var _createClass = (function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1;
                    descriptor.configurable = !0;
                    if ('value' in descriptor) descriptor.writable = !0;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        })();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function')
            }
        }
        var TetherBase = undefined;
        if (typeof TetherBase === 'undefined') {
            TetherBase = {
                modules: []
            }
        }
        var zeroElement = null;

        function getActualBoundingClientRect(node) {
            var boundingRect = node.getBoundingClientRect();
            var rect = {};
            for (var k in boundingRect) {
                rect[k] = boundingRect[k]
            }
            if (node.ownerDocument !== document) {
                var _frameElement = node.ownerDocument.defaultView.frameElement;
                if (_frameElement) {
                    var frameRect = getActualBoundingClientRect(_frameElement);
                    rect.top += frameRect.top;
                    rect.bottom += frameRect.top;
                    rect.left += frameRect.left;
                    rect.right += frameRect.left
                }
            }
            return rect
        }

        function getScrollParents(el) {
            var computedStyle = getComputedStyle(el) || {};
            var position = computedStyle.position;
            var parents = [];
            if (position === 'fixed') {
                return [el]
            }
            var parent = el;
            while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
                var style = undefined;
                try {
                    style = getComputedStyle(parent)
                } catch (err) {}
                if (typeof style === 'undefined' || style === null) {
                    parents.push(parent);
                    return parents
                }
                var _style = style;
                var overflow = _style.overflow;
                var overflowX = _style.overflowX;
                var overflowY = _style.overflowY;
                if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
                    if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
                        parents.push(parent)
                    }
                }
            }
            parents.push(el.ownerDocument.body);
            if (el.ownerDocument !== document) {
                parents.push(el.ownerDocument.defaultView)
            }
            return parents
        }
        var uniqueId = (function() {
            var id = 0;
            return function() {
                return ++id
            }
        })();
        var zeroPosCache = {};
        var getOrigin = function getOrigin() {
            var node = zeroElement;
            if (!node || !document.body.contains(node)) {
                node = document.createElement('div');
                node.setAttribute('data-tether-id', uniqueId());
                extend(node.style, {
                    top: 0,
                    left: 0,
                    position: 'absolute'
                });
                document.body.appendChild(node);
                zeroElement = node
            }
            var id = node.getAttribute('data-tether-id');
            if (typeof zeroPosCache[id] === 'undefined') {
                zeroPosCache[id] = getActualBoundingClientRect(node);
                defer(function() {
                    delete zeroPosCache[id]
                })
            }
            return zeroPosCache[id]
        };

        function removeUtilElements() {
            if (zeroElement) {
                document.body.removeChild(zeroElement)
            }
            zeroElement = null
        };

        function getBounds(el) {
            var doc = undefined;
            if (el === document) {
                doc = document;
                el = document.documentElement
            } else {
                doc = el.ownerDocument
            }
            var docEl = doc.documentElement;
            var box = getActualBoundingClientRect(el);
            var origin = getOrigin();
            box.top -= origin.top;
            box.left -= origin.left;
            if (typeof box.width === 'undefined') {
                box.width = document.body.scrollWidth - box.left - box.right
            }
            if (typeof box.height === 'undefined') {
                box.height = document.body.scrollHeight - box.top - box.bottom
            }
            box.top = box.top - docEl.clientTop;
            box.left = box.left - docEl.clientLeft;
            box.right = doc.body.clientWidth - box.width - box.left;
            box.bottom = doc.body.clientHeight - box.height - box.top;
            return box
        }

        function getOffsetParent(el) {
            return el.offsetParent || document.documentElement
        }
        var _scrollBarSize = null;

        function getScrollBarSize() {
            if (_scrollBarSize) {
                return _scrollBarSize
            }
            var inner = document.createElement('div');
            inner.style.width = '100%';
            inner.style.height = '200px';
            var outer = document.createElement('div');
            extend(outer.style, {
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                visibility: 'hidden',
                width: '200px',
                height: '150px',
                overflow: 'hidden'
            });
            outer.appendChild(inner);
            document.body.appendChild(outer);
            var widthContained = inner.offsetWidth;
            outer.style.overflow = 'scroll';
            var widthScroll = inner.offsetWidth;
            if (widthContained === widthScroll) {
                widthScroll = outer.clientWidth
            }
            document.body.removeChild(outer);
            var width = widthContained - widthScroll;
            _scrollBarSize = {
                width: width,
                height: width
            };
            return _scrollBarSize
        }

        function extend() {
            var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            var args = [];
            Array.prototype.push.apply(args, arguments);
            args.slice(1).forEach(function(obj) {
                if (obj) {
                    for (var key in obj) {
                        if (({}).hasOwnProperty.call(obj, key)) {
                            out[key] = obj[key]
                        }
                    }
                }
            });
            return out
        }

        function removeClass(el, name) {
            if (typeof el.classList !== 'undefined') {
                name.split(' ').forEach(function(cls) {
                    if (cls.trim()) {
                        el.classList.remove(cls)
                    }
                })
            } else {
                var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
                var className = getClassName(el).replace(regex, ' ');
                setClassName(el, className)
            }
        }

        function addClass(el, name) {
            if (typeof el.classList !== 'undefined') {
                name.split(' ').forEach(function(cls) {
                    if (cls.trim()) {
                        el.classList.add(cls)
                    }
                })
            } else {
                removeClass(el, name);
                var cls = getClassName(el) + (' ' + name);
                setClassName(el, cls)
            }
        }

        function hasClass(el, name) {
            if (typeof el.classList !== 'undefined') {
                return el.classList.contains(name)
            }
            var className = getClassName(el);
            return new RegExp('(^| )' + name + '( |$)', 'gi').test(className)
        }

        function getClassName(el) {
            if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
                return el.className.baseVal
            }
            return el.className
        }

        function setClassName(el, className) {
            el.setAttribute('class', className)
        }

        function updateClasses(el, add, all) {
            all.forEach(function(cls) {
                if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
                    removeClass(el, cls)
                }
            });
            add.forEach(function(cls) {
                if (!hasClass(el, cls)) {
                    addClass(el, cls)
                }
            })
        }
        var deferred = [];
        var defer = function defer(fn) {
            deferred.push(fn)
        };
        var flush = function flush() {
            var fn = undefined;
            while (fn = deferred.pop()) {
                fn()
            }
        };
        var Evented = (function() {
            function Evented() {
                _classCallCheck(this, Evented)
            }
            _createClass(Evented, [{
                key: 'on',
                value: function on(event, handler, ctx) {
                    var once = arguments.length <= 3 || arguments[3] === undefined ? !1 : arguments[3];
                    if (typeof this.bindings === 'undefined') {
                        this.bindings = {}
                    }
                    if (typeof this.bindings[event] === 'undefined') {
                        this.bindings[event] = []
                    }
                    this.bindings[event].push({
                        handler: handler,
                        ctx: ctx,
                        once: once
                    })
                }
            }, {
                key: 'once',
                value: function once(event, handler, ctx) {
                    this.on(event, handler, ctx, !0)
                }
            }, {
                key: 'off',
                value: function off(event, handler) {
                    if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
                        return
                    }
                    if (typeof handler === 'undefined') {
                        delete this.bindings[event]
                    } else {
                        var i = 0;
                        while (i < this.bindings[event].length) {
                            if (this.bindings[event][i].handler === handler) {
                                this.bindings[event].splice(i, 1)
                            } else {
                                ++i
                            }
                        }
                    }
                }
            }, {
                key: 'trigger',
                value: function trigger(event) {
                    if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
                        var i = 0;
                        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            args[_key - 1] = arguments[_key]
                        }
                        while (i < this.bindings[event].length) {
                            var _bindings$event$i = this.bindings[event][i];
                            var handler = _bindings$event$i.handler;
                            var ctx = _bindings$event$i.ctx;
                            var once = _bindings$event$i.once;
                            var context = ctx;
                            if (typeof context === 'undefined') {
                                context = this
                            }
                            handler.apply(context, args);
                            if (once) {
                                this.bindings[event].splice(i, 1)
                            } else {
                                ++i
                            }
                        }
                    }
                }
            }]);
            return Evented
        })();
        TetherBase.Utils = {
            getActualBoundingClientRect: getActualBoundingClientRect,
            getScrollParents: getScrollParents,
            getBounds: getBounds,
            getOffsetParent: getOffsetParent,
            extend: extend,
            addClass: addClass,
            removeClass: removeClass,
            hasClass: hasClass,
            updateClasses: updateClasses,
            defer: defer,
            flush: flush,
            uniqueId: uniqueId,
            Evented: Evented,
            getScrollBarSize: getScrollBarSize,
            removeUtilElements: removeUtilElements
        };
        'use strict';
        var _slicedToArray = (function() {
            function sliceIterator(arr, i) {
                var _arr = [];
                var _n = !0;
                var _d = !1;
                var _e = undefined;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = !0) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break
                    }
                } catch (err) {
                    _d = !0;
                    _e = err
                } finally {
                    try {
                        if (!_n && _i['return']) _i['return']()
                    } finally {
                        if (_d) throw _e
                    }
                }
                return _arr
            }
            return function(arr, i) {
                if (Array.isArray(arr)) {
                    return arr
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i)
                } else {
                    throw new TypeError('Invalid attempt to destructure non-iterable instance')
                }
            }
        })();
        var _createClass = (function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1;
                    descriptor.configurable = !0;
                    if ('value' in descriptor) descriptor.writable = !0;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        })();
        var _get = function get(_x6, _x7, _x8) {
            var _again = !0;
            _function: while (_again) {
                var object = _x6,
                    property = _x7,
                    receiver = _x8;
                _again = !1;
                if (object === null) object = Function.prototype;
                var desc = Object.getOwnPropertyDescriptor(object, property);
                if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);
                    if (parent === null) {
                        return undefined
                    } else {
                        _x6 = parent;
                        _x7 = property;
                        _x8 = receiver;
                        _again = !0;
                        desc = parent = undefined;
                        continue _function
                    }
                } else if ('value' in desc) {
                    return desc.value
                } else {
                    var getter = desc.get;
                    if (getter === undefined) {
                        return undefined
                    }
                    return getter.call(receiver)
                }
            }
        };

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function')
            }
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        if (typeof TetherBase === 'undefined') {
            throw new Error('You must include the utils.js file before tether.js')
        }
        var _TetherBase$Utils = TetherBase.Utils;
        var getScrollParents = _TetherBase$Utils.getScrollParents;
        var getBounds = _TetherBase$Utils.getBounds;
        var getOffsetParent = _TetherBase$Utils.getOffsetParent;
        var extend = _TetherBase$Utils.extend;
        var addClass = _TetherBase$Utils.addClass;
        var removeClass = _TetherBase$Utils.removeClass;
        var updateClasses = _TetherBase$Utils.updateClasses;
        var defer = _TetherBase$Utils.defer;
        var flush = _TetherBase$Utils.flush;
        var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
        var removeUtilElements = _TetherBase$Utils.removeUtilElements;

        function within(a, b) {
            var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
            return a + diff >= b && b >= a - diff
        }
        var transformKey = (function() {
            if (typeof document === 'undefined') {
                return ''
            }
            var el = document.createElement('div');
            var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
            for (var i = 0; i < transforms.length; ++i) {
                var key = transforms[i];
                if (el.style[key] !== undefined) {
                    return key
                }
            }
        })();
        var tethers = [];
        var position = function position() {
            tethers.forEach(function(tether) {
                tether.position(!1)
            });
            flush()
        };

        function now() {
            if (typeof performance === 'object' && typeof performance.now === 'function') {
                return performance.now()
            }
            return +new Date()
        }(function() {
            var lastCall = null;
            var lastDuration = null;
            var pendingTimeout = null;
            var tick = function tick() {
                if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
                    lastDuration = Math.min(lastDuration - 16, 250);
                    pendingTimeout = setTimeout(tick, 250);
                    return
                }
                if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
                    return
                }
                if (pendingTimeout != null) {
                    clearTimeout(pendingTimeout);
                    pendingTimeout = null
                }
                lastCall = now();
                position();
                lastDuration = now() - lastCall
            };
            if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
                ['resize', 'scroll', 'touchmove'].forEach(function(event) {
                    window.addEventListener(event, tick)
                })
            }
        })();
        var MIRROR_LR = {
            center: 'center',
            left: 'right',
            right: 'left'
        };
        var MIRROR_TB = {
            middle: 'middle',
            top: 'bottom',
            bottom: 'top'
        };
        var OFFSET_MAP = {
            top: 0,
            left: 0,
            middle: '50%',
            center: '50%',
            bottom: '100%',
            right: '100%'
        };
        var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
            var left = attachment.left;
            var top = attachment.top;
            if (left === 'auto') {
                left = MIRROR_LR[relativeToAttachment.left]
            }
            if (top === 'auto') {
                top = MIRROR_TB[relativeToAttachment.top]
            }
            return {
                left: left,
                top: top
            }
        };
        var attachmentToOffset = function attachmentToOffset(attachment) {
            var left = attachment.left;
            var top = attachment.top;
            if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
                left = OFFSET_MAP[attachment.left]
            }
            if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
                top = OFFSET_MAP[attachment.top]
            }
            return {
                left: left,
                top: top
            }
        };

        function addOffset() {
            var out = {
                top: 0,
                left: 0
            };
            for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
                offsets[_key] = arguments[_key]
            }
            offsets.forEach(function(_ref) {
                var top = _ref.top;
                var left = _ref.left;
                if (typeof top === 'string') {
                    top = parseFloat(top, 10)
                }
                if (typeof left === 'string') {
                    left = parseFloat(left, 10)
                }
                out.top += top;
                out.left += left
            });
            return out
        }

        function offsetToPx(offset, size) {
            if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
                offset.left = parseFloat(offset.left, 10) / 100 * size.width
            }
            if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
                offset.top = parseFloat(offset.top, 10) / 100 * size.height
            }
            return offset
        }
        var parseOffset = function parseOffset(value) {
            var _value$split = value.split(' ');
            var _value$split2 = _slicedToArray(_value$split, 2);
            var top = _value$split2[0];
            var left = _value$split2[1];
            return {
                top: top,
                left: left
            }
        };
        var parseAttachment = parseOffset;
        var TetherClass = (function(_Evented) {
            _inherits(TetherClass, _Evented);

            function TetherClass(options) {
                var _this = this;
                _classCallCheck(this, TetherClass);
                _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
                this.position = this.position.bind(this);
                tethers.push(this);
                this.history = [];
                this.setOptions(options, !1);
                TetherBase.modules.forEach(function(module) {
                    if (typeof module.initialize !== 'undefined') {
                        module.initialize.call(_this)
                    }
                });
                this.position()
            }
            _createClass(TetherClass, [{
                key: 'getClass',
                value: function getClass() {
                    var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
                    var classes = this.options.classes;
                    if (typeof classes !== 'undefined' && classes[key]) {
                        return this.options.classes[key]
                    } else if (this.options.classPrefix) {
                        return this.options.classPrefix + '-' + key
                    } else {
                        return key
                    }
                }
            }, {
                key: 'setOptions',
                value: function setOptions(options) {
                    var _this2 = this;
                    var pos = arguments.length <= 1 || arguments[1] === undefined ? !0 : arguments[1];
                    var defaults = {
                        offset: '0 0',
                        targetOffset: '0 0',
                        targetAttachment: 'auto auto',
                        classPrefix: 'tether'
                    };
                    this.options = extend(defaults, options);
                    var _options = this.options;
                    var element = _options.element;
                    var target = _options.target;
                    var targetModifier = _options.targetModifier;
                    this.element = element;
                    this.target = target;
                    this.targetModifier = targetModifier;
                    if (this.target === 'viewport') {
                        this.target = document.body;
                        this.targetModifier = 'visible'
                    } else if (this.target === 'scroll-handle') {
                        this.target = document.body;
                        this.targetModifier = 'scroll-handle'
                    }['element', 'target'].forEach(function(key) {
                        if (typeof _this2[key] === 'undefined') {
                            throw new Error('Tether Error: Both element and target must be defined')
                        }
                        if (typeof _this2[key].jquery !== 'undefined') {
                            _this2[key] = _this2[key][0]
                        } else if (typeof _this2[key] === 'string') {
                            _this2[key] = document.querySelector(_this2[key])
                        }
                    });
                    addClass(this.element, this.getClass('element'));
                    if (!(this.options.addTargetClasses === !1)) {
                        addClass(this.target, this.getClass('target'))
                    }
                    if (!this.options.attachment) {
                        throw new Error('Tether Error: You must provide an attachment')
                    }
                    this.targetAttachment = parseAttachment(this.options.targetAttachment);
                    this.attachment = parseAttachment(this.options.attachment);
                    this.offset = parseOffset(this.options.offset);
                    this.targetOffset = parseOffset(this.options.targetOffset);
                    if (typeof this.scrollParents !== 'undefined') {
                        this.disable()
                    }
                    if (this.targetModifier === 'scroll-handle') {
                        this.scrollParents = [this.target]
                    } else {
                        this.scrollParents = getScrollParents(this.target)
                    }
                    if (!(this.options.enabled === !1)) {
                        this.enable(pos)
                    }
                }
            }, {
                key: 'getTargetBounds',
                value: function getTargetBounds() {
                    if (typeof this.targetModifier !== 'undefined') {
                        if (this.targetModifier === 'visible') {
                            if (this.target === document.body) {
                                return {
                                    top: pageYOffset,
                                    left: pageXOffset,
                                    height: innerHeight,
                                    width: innerWidth
                                }
                            } else {
                                var bounds = getBounds(this.target);
                                var out = {
                                    height: bounds.height,
                                    width: bounds.width,
                                    top: bounds.top,
                                    left: bounds.left
                                };
                                out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
                                out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
                                out.height = Math.min(innerHeight, out.height);
                                out.height -= 2;
                                out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
                                out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
                                out.width = Math.min(innerWidth, out.width);
                                out.width -= 2;
                                if (out.top < pageYOffset) {
                                    out.top = pageYOffset
                                }
                                if (out.left < pageXOffset) {
                                    out.left = pageXOffset
                                }
                                return out
                            }
                        } else if (this.targetModifier === 'scroll-handle') {
                            var bounds = undefined;
                            var target = this.target;
                            if (target === document.body) {
                                target = document.documentElement;
                                bounds = {
                                    left: pageXOffset,
                                    top: pageYOffset,
                                    height: innerHeight,
                                    width: innerWidth
                                }
                            } else {
                                bounds = getBounds(target)
                            }
                            var style = getComputedStyle(target);
                            var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;
                            var scrollBottom = 0;
                            if (hasBottomScroll) {
                                scrollBottom = 15
                            }
                            var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
                            var out = {
                                width: 15,
                                height: height * 0.975 * (height / target.scrollHeight),
                                left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
                            };
                            var fitAdj = 0;
                            if (height < 408 && this.target === document.body) {
                                fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58
                            }
                            if (this.target !== document.body) {
                                out.height = Math.max(out.height, 24)
                            }
                            var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
                            out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
                            if (this.target === document.body) {
                                out.height = Math.max(out.height, 24)
                            }
                            return out
                        }
                    } else {
                        return getBounds(this.target)
                    }
                }
            }, {
                key: 'clearCache',
                value: function clearCache() {
                    this._cache = {}
                }
            }, {
                key: 'cache',
                value: function cache(k, getter) {
                    if (typeof this._cache === 'undefined') {
                        this._cache = {}
                    }
                    if (typeof this._cache[k] === 'undefined') {
                        this._cache[k] = getter.call(this)
                    }
                    return this._cache[k]
                }
            }, {
                key: 'enable',
                value: function enable() {
                    var _this3 = this;
                    var pos = arguments.length <= 0 || arguments[0] === undefined ? !0 : arguments[0];
                    if (!(this.options.addTargetClasses === !1)) {
                        addClass(this.target, this.getClass('enabled'))
                    }
                    addClass(this.element, this.getClass('enabled'));
                    this.enabled = !0;
                    this.scrollParents.forEach(function(parent) {
                        if (parent !== _this3.target.ownerDocument) {
                            parent.addEventListener('scroll', _this3.position)
                        }
                    });
                    if (pos) {
                        this.position()
                    }
                }
            }, {
                key: 'disable',
                value: function disable() {
                    var _this4 = this;
                    removeClass(this.target, this.getClass('enabled'));
                    removeClass(this.element, this.getClass('enabled'));
                    this.enabled = !1;
                    if (typeof this.scrollParents !== 'undefined') {
                        this.scrollParents.forEach(function(parent) {
                            parent.removeEventListener('scroll', _this4.position)
                        })
                    }
                }
            }, {
                key: 'destroy',
                value: function destroy() {
                    var _this5 = this;
                    this.disable();
                    tethers.forEach(function(tether, i) {
                        if (tether === _this5) {
                            tethers.splice(i, 1)
                        }
                    });
                    if (tethers.length === 0) {
                        removeUtilElements()
                    }
                }
            }, {
                key: 'updateAttachClasses',
                value: function updateAttachClasses(elementAttach, targetAttach) {
                    var _this6 = this;
                    elementAttach = elementAttach || this.attachment;
                    targetAttach = targetAttach || this.targetAttachment;
                    var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
                    if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
                        this._addAttachClasses.splice(0, this._addAttachClasses.length)
                    }
                    if (typeof this._addAttachClasses === 'undefined') {
                        this._addAttachClasses = []
                    }
                    var add = this._addAttachClasses;
                    if (elementAttach.top) {
                        add.push(this.getClass('element-attached') + '-' + elementAttach.top)
                    }
                    if (elementAttach.left) {
                        add.push(this.getClass('element-attached') + '-' + elementAttach.left)
                    }
                    if (targetAttach.top) {
                        add.push(this.getClass('target-attached') + '-' + targetAttach.top)
                    }
                    if (targetAttach.left) {
                        add.push(this.getClass('target-attached') + '-' + targetAttach.left)
                    }
                    var all = [];
                    sides.forEach(function(side) {
                        all.push(_this6.getClass('element-attached') + '-' + side);
                        all.push(_this6.getClass('target-attached') + '-' + side)
                    });
                    defer(function() {
                        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
                            return
                        }
                        updateClasses(_this6.element, _this6._addAttachClasses, all);
                        if (!(_this6.options.addTargetClasses === !1)) {
                            updateClasses(_this6.target, _this6._addAttachClasses, all)
                        }
                        delete _this6._addAttachClasses
                    })
                }
            }, {
                key: 'position',
                value: function position() {
                    var _this7 = this;
                    var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? !0 : arguments[0];
                    if (!this.enabled) {
                        return
                    }
                    this.clearCache();
                    var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
                    this.updateAttachClasses(this.attachment, targetAttachment);
                    var elementPos = this.cache('element-bounds', function() {
                        return getBounds(_this7.element)
                    });
                    var width = elementPos.width;
                    var height = elementPos.height;
                    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
                        var _lastSize = this.lastSize;
                        width = _lastSize.width;
                        height = _lastSize.height
                    } else {
                        this.lastSize = {
                            width: width,
                            height: height
                        }
                    }
                    var targetPos = this.cache('target-bounds', function() {
                        return _this7.getTargetBounds()
                    });
                    var targetSize = targetPos;
                    var offset = offsetToPx(attachmentToOffset(this.attachment), {
                        width: width,
                        height: height
                    });
                    var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
                    var manualOffset = offsetToPx(this.offset, {
                        width: width,
                        height: height
                    });
                    var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
                    offset = addOffset(offset, manualOffset);
                    targetOffset = addOffset(targetOffset, manualTargetOffset);
                    var left = targetPos.left + targetOffset.left - offset.left;
                    var top = targetPos.top + targetOffset.top - offset.top;
                    for (var i = 0; i < TetherBase.modules.length; ++i) {
                        var _module2 = TetherBase.modules[i];
                        var ret = _module2.position.call(this, {
                            left: left,
                            top: top,
                            targetAttachment: targetAttachment,
                            targetPos: targetPos,
                            elementPos: elementPos,
                            offset: offset,
                            targetOffset: targetOffset,
                            manualOffset: manualOffset,
                            manualTargetOffset: manualTargetOffset,
                            scrollbarSize: scrollbarSize,
                            attachment: this.attachment
                        });
                        if (ret === !1) {
                            return !1
                        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
                            continue
                        } else {
                            top = ret.top;
                            left = ret.left
                        }
                    }
                    var next = {
                        page: {
                            top: top,
                            left: left
                        },
                        viewport: {
                            top: top - pageYOffset,
                            bottom: pageYOffset - top - height + innerHeight,
                            left: left - pageXOffset,
                            right: pageXOffset - left - width + innerWidth
                        }
                    };
                    var doc = this.target.ownerDocument;
                    var win = doc.defaultView;
                    var scrollbarSize = undefined;
                    if (win.innerHeight > doc.documentElement.clientHeight) {
                        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
                        next.viewport.bottom -= scrollbarSize.height
                    }
                    if (win.innerWidth > doc.documentElement.clientWidth) {
                        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
                        next.viewport.right -= scrollbarSize.width
                    }
                    if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
                        next.page.bottom = doc.body.scrollHeight - top - height;
                        next.page.right = doc.body.scrollWidth - left - width
                    }
                    if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== !1 && !(typeof this.targetModifier !== 'undefined')) {
                        (function() {
                            var offsetParent = _this7.cache('target-offsetparent', function() {
                                return getOffsetParent(_this7.target)
                            });
                            var offsetPosition = _this7.cache('target-offsetparent-bounds', function() {
                                return getBounds(offsetParent)
                            });
                            var offsetParentStyle = getComputedStyle(offsetParent);
                            var offsetParentSize = offsetPosition;
                            var offsetBorder = {};
                            ['Top', 'Left', 'Bottom', 'Right'].forEach(function(side) {
                                offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width'])
                            });
                            offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
                            offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
                            if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
                                if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
                                    var scrollTop = offsetParent.scrollTop;
                                    var scrollLeft = offsetParent.scrollLeft;
                                    next.offset = {
                                        top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                                        left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
                                    }
                                }
                            }
                        })()
                    }
                    this.move(next);
                    this.history.unshift(next);
                    if (this.history.length > 3) {
                        this.history.pop()
                    }
                    if (flushChanges) {
                        flush()
                    }
                    return !0
                }
            }, {
                key: 'move',
                value: function move(pos) {
                    var _this8 = this;
                    if (!(typeof this.element.parentNode !== 'undefined')) {
                        return
                    }
                    var same = {};
                    for (var type in pos) {
                        same[type] = {};
                        for (var key in pos[type]) {
                            var found = !1;
                            for (var i = 0; i < this.history.length; ++i) {
                                var point = this.history[i];
                                if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
                                    found = !0;
                                    break
                                }
                            }
                            if (!found) {
                                same[type][key] = !0
                            }
                        }
                    }
                    var css = {
                        top: '',
                        left: '',
                        right: '',
                        bottom: ''
                    };
                    var transcribe = function transcribe(_same, _pos) {
                        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
                        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
                        if (gpu !== !1) {
                            var yPos = undefined,
                                xPos = undefined;
                            if (_same.top) {
                                css.top = 0;
                                yPos = _pos.top
                            } else {
                                css.bottom = 0;
                                yPos = -_pos.bottom
                            }
                            if (_same.left) {
                                css.left = 0;
                                xPos = _pos.left
                            } else {
                                css.right = 0;
                                xPos = -_pos.right
                            }
                            if (window.matchMedia) {
                                var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
                                if (!retina) {
                                    xPos = Math.round(xPos);
                                    yPos = Math.round(yPos)
                                }
                            }
                            css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';
                            if (transformKey !== 'msTransform') {
                                css[transformKey] += " translateZ(0)"
                            }
                        } else {
                            if (_same.top) {
                                css.top = _pos.top + 'px'
                            } else {
                                css.bottom = _pos.bottom + 'px'
                            }
                            if (_same.left) {
                                css.left = _pos.left + 'px'
                            } else {
                                css.right = _pos.right + 'px'
                            }
                        }
                    };
                    var moved = !1;
                    if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
                        css.position = 'absolute';
                        transcribe(same.page, pos.page)
                    } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
                        css.position = 'fixed';
                        transcribe(same.viewport, pos.viewport)
                    } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
                        (function() {
                            css.position = 'absolute';
                            var offsetParent = _this8.cache('target-offsetparent', function() {
                                return getOffsetParent(_this8.target)
                            });
                            if (getOffsetParent(_this8.element) !== offsetParent) {
                                defer(function() {
                                    _this8.element.parentNode.removeChild(_this8.element);
                                    offsetParent.appendChild(_this8.element)
                                })
                            }
                            transcribe(same.offset, pos.offset);
                            moved = !0
                        })()
                    } else {
                        css.position = 'absolute';
                        transcribe({
                            top: !0,
                            left: !0
                        }, pos.page)
                    }
                    if (!moved) {
                        if (this.options.bodyElement) {
                            if (this.element.parentNode !== this.options.bodyElement) {
                                this.options.bodyElement.appendChild(this.element)
                            }
                        } else {
                            var offsetParentIsBody = !0;
                            var currentNode = this.element.parentNode;
                            while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
                                if (getComputedStyle(currentNode).position !== 'static') {
                                    offsetParentIsBody = !1;
                                    break
                                }
                                currentNode = currentNode.parentNode
                            }
                            if (!offsetParentIsBody) {
                                this.element.parentNode.removeChild(this.element);
                                this.element.ownerDocument.body.appendChild(this.element)
                            }
                        }
                    }
                    var writeCSS = {};
                    var write = !1;
                    for (var key in css) {
                        var val = css[key];
                        var elVal = this.element.style[key];
                        if (elVal !== val) {
                            write = !0;
                            writeCSS[key] = val
                        }
                    }
                    if (write) {
                        defer(function() {
                            extend(_this8.element.style, writeCSS);
                            _this8.trigger('repositioned')
                        })
                    }
                }
            }]);
            return TetherClass
        })(Evented);
        TetherClass.modules = [];
        TetherBase.position = position;
        var Tether = extend(TetherClass, TetherBase);
        'use strict';
        var _slicedToArray = (function() {
            function sliceIterator(arr, i) {
                var _arr = [];
                var _n = !0;
                var _d = !1;
                var _e = undefined;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = !0) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break
                    }
                } catch (err) {
                    _d = !0;
                    _e = err
                } finally {
                    try {
                        if (!_n && _i['return']) _i['return']()
                    } finally {
                        if (_d) throw _e
                    }
                }
                return _arr
            }
            return function(arr, i) {
                if (Array.isArray(arr)) {
                    return arr
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i)
                } else {
                    throw new TypeError('Invalid attempt to destructure non-iterable instance')
                }
            }
        })();
        var _TetherBase$Utils = TetherBase.Utils;
        var getBounds = _TetherBase$Utils.getBounds;
        var extend = _TetherBase$Utils.extend;
        var updateClasses = _TetherBase$Utils.updateClasses;
        var defer = _TetherBase$Utils.defer;
        var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

        function getBoundingRect(tether, to) {
            if (to === 'scrollParent') {
                to = tether.scrollParents[0]
            } else if (to === 'window') {
                to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]
            }
            if (to === document) {
                to = to.documentElement
            }
            if (typeof to.nodeType !== 'undefined') {
                (function() {
                    var node = to;
                    var size = getBounds(to);
                    var pos = size;
                    var style = getComputedStyle(to);
                    to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
                    if (node.ownerDocument !== document) {
                        var win = node.ownerDocument.defaultView;
                        to[0] += win.pageXOffset;
                        to[1] += win.pageYOffset;
                        to[2] += win.pageXOffset;
                        to[3] += win.pageYOffset
                    }
                    BOUNDS_FORMAT.forEach(function(side, i) {
                        side = side[0].toUpperCase() + side.substr(1);
                        if (side === 'Top' || side === 'Left') {
                            to[i] += parseFloat(style['border' + side + 'Width'])
                        } else {
                            to[i] -= parseFloat(style['border' + side + 'Width'])
                        }
                    })
                })()
            }
            return to
        }
        TetherBase.modules.push({
            position: function position(_ref) {
                var _this = this;
                var top = _ref.top;
                var left = _ref.left;
                var targetAttachment = _ref.targetAttachment;
                if (!this.options.constraints) {
                    return !0
                }
                var _cache = this.cache('element-bounds', function() {
                    return getBounds(_this.element)
                });
                var height = _cache.height;
                var width = _cache.width;
                if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
                    var _lastSize = this.lastSize;
                    width = _lastSize.width;
                    height = _lastSize.height
                }
                var targetSize = this.cache('target-bounds', function() {
                    return _this.getTargetBounds()
                });
                var targetHeight = targetSize.height;
                var targetWidth = targetSize.width;
                var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];
                this.options.constraints.forEach(function(constraint) {
                    var outOfBoundsClass = constraint.outOfBoundsClass;
                    var pinnedClass = constraint.pinnedClass;
                    if (outOfBoundsClass) {
                        allClasses.push(outOfBoundsClass)
                    }
                    if (pinnedClass) {
                        allClasses.push(pinnedClass)
                    }
                });
                allClasses.forEach(function(cls) {
                    ['left', 'top', 'right', 'bottom'].forEach(function(side) {
                        allClasses.push(cls + '-' + side)
                    })
                });
                var addClasses = [];
                var tAttachment = extend({}, targetAttachment);
                var eAttachment = extend({}, this.attachment);
                this.options.constraints.forEach(function(constraint) {
                    var to = constraint.to;
                    var attachment = constraint.attachment;
                    var pin = constraint.pin;
                    if (typeof attachment === 'undefined') {
                        attachment = ''
                    }
                    var changeAttachX = undefined,
                        changeAttachY = undefined;
                    if (attachment.indexOf(' ') >= 0) {
                        var _attachment$split = attachment.split(' ');
                        var _attachment$split2 = _slicedToArray(_attachment$split, 2);
                        changeAttachY = _attachment$split2[0];
                        changeAttachX = _attachment$split2[1]
                    } else {
                        changeAttachX = changeAttachY = attachment
                    }
                    var bounds = getBoundingRect(_this, to);
                    if (changeAttachY === 'target' || changeAttachY === 'both') {
                        if (top < bounds[1] && tAttachment.top === 'top') {
                            top += targetHeight;
                            tAttachment.top = 'bottom'
                        }
                        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
                            top -= targetHeight;
                            tAttachment.top = 'top'
                        }
                    }
                    if (changeAttachY === 'together') {
                        if (tAttachment.top === 'top') {
                            if (eAttachment.top === 'bottom' && top < bounds[1]) {
                                top += targetHeight;
                                tAttachment.top = 'bottom';
                                top += height;
                                eAttachment.top = 'top'
                            } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
                                top -= height - targetHeight;
                                tAttachment.top = 'bottom';
                                eAttachment.top = 'bottom'
                            }
                        }
                        if (tAttachment.top === 'bottom') {
                            if (eAttachment.top === 'top' && top + height > bounds[3]) {
                                top -= targetHeight;
                                tAttachment.top = 'top';
                                top -= height;
                                eAttachment.top = 'bottom'
                            } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
                                top += height - targetHeight;
                                tAttachment.top = 'top';
                                eAttachment.top = 'top'
                            }
                        }
                        if (tAttachment.top === 'middle') {
                            if (top + height > bounds[3] && eAttachment.top === 'top') {
                                top -= height;
                                eAttachment.top = 'bottom'
                            } else if (top < bounds[1] && eAttachment.top === 'bottom') {
                                top += height;
                                eAttachment.top = 'top'
                            }
                        }
                    }
                    if (changeAttachX === 'target' || changeAttachX === 'both') {
                        if (left < bounds[0] && tAttachment.left === 'left') {
                            left += targetWidth;
                            tAttachment.left = 'right'
                        }
                        if (left + width > bounds[2] && tAttachment.left === 'right') {
                            left -= targetWidth;
                            tAttachment.left = 'left'
                        }
                    }
                    if (changeAttachX === 'together') {
                        if (left < bounds[0] && tAttachment.left === 'left') {
                            if (eAttachment.left === 'right') {
                                left += targetWidth;
                                tAttachment.left = 'right';
                                left += width;
                                eAttachment.left = 'left'
                            } else if (eAttachment.left === 'left') {
                                left += targetWidth;
                                tAttachment.left = 'right';
                                left -= width;
                                eAttachment.left = 'right'
                            }
                        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
                            if (eAttachment.left === 'left') {
                                left -= targetWidth;
                                tAttachment.left = 'left';
                                left -= width;
                                eAttachment.left = 'right'
                            } else if (eAttachment.left === 'right') {
                                left -= targetWidth;
                                tAttachment.left = 'left';
                                left += width;
                                eAttachment.left = 'left'
                            }
                        } else if (tAttachment.left === 'center') {
                            if (left + width > bounds[2] && eAttachment.left === 'left') {
                                left -= width;
                                eAttachment.left = 'right'
                            } else if (left < bounds[0] && eAttachment.left === 'right') {
                                left += width;
                                eAttachment.left = 'left'
                            }
                        }
                    }
                    if (changeAttachY === 'element' || changeAttachY === 'both') {
                        if (top < bounds[1] && eAttachment.top === 'bottom') {
                            top += height;
                            eAttachment.top = 'top'
                        }
                        if (top + height > bounds[3] && eAttachment.top === 'top') {
                            top -= height;
                            eAttachment.top = 'bottom'
                        }
                    }
                    if (changeAttachX === 'element' || changeAttachX === 'both') {
                        if (left < bounds[0]) {
                            if (eAttachment.left === 'right') {
                                left += width;
                                eAttachment.left = 'left'
                            } else if (eAttachment.left === 'center') {
                                left += width / 2;
                                eAttachment.left = 'left'
                            }
                        }
                        if (left + width > bounds[2]) {
                            if (eAttachment.left === 'left') {
                                left -= width;
                                eAttachment.left = 'right'
                            } else if (eAttachment.left === 'center') {
                                left -= width / 2;
                                eAttachment.left = 'right'
                            }
                        }
                    }
                    if (typeof pin === 'string') {
                        pin = pin.split(',').map(function(p) {
                            return p.trim()
                        })
                    } else if (pin === !0) {
                        pin = ['top', 'left', 'right', 'bottom']
                    }
                    pin = pin || [];
                    var pinned = [];
                    var oob = [];
                    if (top < bounds[1]) {
                        if (pin.indexOf('top') >= 0) {
                            top = bounds[1];
                            pinned.push('top')
                        } else {
                            oob.push('top')
                        }
                    }
                    if (top + height > bounds[3]) {
                        if (pin.indexOf('bottom') >= 0) {
                            top = bounds[3] - height;
                            pinned.push('bottom')
                        } else {
                            oob.push('bottom')
                        }
                    }
                    if (left < bounds[0]) {
                        if (pin.indexOf('left') >= 0) {
                            left = bounds[0];
                            pinned.push('left')
                        } else {
                            oob.push('left')
                        }
                    }
                    if (left + width > bounds[2]) {
                        if (pin.indexOf('right') >= 0) {
                            left = bounds[2] - width;
                            pinned.push('right')
                        } else {
                            oob.push('right')
                        }
                    }
                    if (pinned.length) {
                        (function() {
                            var pinnedClass = undefined;
                            if (typeof _this.options.pinnedClass !== 'undefined') {
                                pinnedClass = _this.options.pinnedClass
                            } else {
                                pinnedClass = _this.getClass('pinned')
                            }
                            addClasses.push(pinnedClass);
                            pinned.forEach(function(side) {
                                addClasses.push(pinnedClass + '-' + side)
                            })
                        })()
                    }
                    if (oob.length) {
                        (function() {
                            var oobClass = undefined;
                            if (typeof _this.options.outOfBoundsClass !== 'undefined') {
                                oobClass = _this.options.outOfBoundsClass
                            } else {
                                oobClass = _this.getClass('out-of-bounds')
                            }
                            addClasses.push(oobClass);
                            oob.forEach(function(side) {
                                addClasses.push(oobClass + '-' + side)
                            })
                        })()
                    }
                    if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
                        eAttachment.left = tAttachment.left = !1
                    }
                    if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
                        eAttachment.top = tAttachment.top = !1
                    }
                    if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
                        _this.updateAttachClasses(eAttachment, tAttachment);
                        _this.trigger('update', {
                            attachment: eAttachment,
                            targetAttachment: tAttachment
                        })
                    }
                });
                defer(function() {
                    if (!(_this.options.addTargetClasses === !1)) {
                        updateClasses(_this.target, addClasses, allClasses)
                    }
                    updateClasses(_this.element, addClasses, allClasses)
                });
                return {
                    top: top,
                    left: left
                }
            }
        });
        'use strict';
        var _TetherBase$Utils = TetherBase.Utils;
        var getBounds = _TetherBase$Utils.getBounds;
        var updateClasses = _TetherBase$Utils.updateClasses;
        var defer = _TetherBase$Utils.defer;
        TetherBase.modules.push({
            position: function position(_ref) {
                var _this = this;
                var top = _ref.top;
                var left = _ref.left;
                var _cache = this.cache('element-bounds', function() {
                    return getBounds(_this.element)
                });
                var height = _cache.height;
                var width = _cache.width;
                var targetPos = this.getTargetBounds();
                var bottom = top + height;
                var right = left + width;
                var abutted = [];
                if (top <= targetPos.bottom && bottom >= targetPos.top) {
                    ['left', 'right'].forEach(function(side) {
                        var targetPosSide = targetPos[side];
                        if (targetPosSide === left || targetPosSide === right) {
                            abutted.push(side)
                        }
                    })
                }
                if (left <= targetPos.right && right >= targetPos.left) {
                    ['top', 'bottom'].forEach(function(side) {
                        var targetPosSide = targetPos[side];
                        if (targetPosSide === top || targetPosSide === bottom) {
                            abutted.push(side)
                        }
                    })
                }
                var allClasses = [];
                var addClasses = [];
                var sides = ['left', 'top', 'right', 'bottom'];
                allClasses.push(this.getClass('abutted'));
                sides.forEach(function(side) {
                    allClasses.push(_this.getClass('abutted') + '-' + side)
                });
                if (abutted.length) {
                    addClasses.push(this.getClass('abutted'))
                }
                abutted.forEach(function(side) {
                    addClasses.push(_this.getClass('abutted') + '-' + side)
                });
                defer(function() {
                    if (!(_this.options.addTargetClasses === !1)) {
                        updateClasses(_this.target, addClasses, allClasses)
                    }
                    updateClasses(_this.element, addClasses, allClasses)
                });
                return !0
            }
        });
        'use strict';
        var _slicedToArray = (function() {
            function sliceIterator(arr, i) {
                var _arr = [];
                var _n = !0;
                var _d = !1;
                var _e = undefined;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = !0) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break
                    }
                } catch (err) {
                    _d = !0;
                    _e = err
                } finally {
                    try {
                        if (!_n && _i['return']) _i['return']()
                    } finally {
                        if (_d) throw _e
                    }
                }
                return _arr
            }
            return function(arr, i) {
                if (Array.isArray(arr)) {
                    return arr
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i)
                } else {
                    throw new TypeError('Invalid attempt to destructure non-iterable instance')
                }
            }
        })();
        TetherBase.modules.push({
            position: function position(_ref) {
                var top = _ref.top;
                var left = _ref.left;
                if (!this.options.shift) {
                    return
                }
                var shift = this.options.shift;
                if (typeof this.options.shift === 'function') {
                    shift = this.options.shift.call(this, {
                        top: top,
                        left: left
                    })
                }
                var shiftTop = undefined,
                    shiftLeft = undefined;
                if (typeof shift === 'string') {
                    shift = shift.split(' ');
                    shift[1] = shift[1] || shift[0];
                    var _shift = shift;
                    var _shift2 = _slicedToArray(_shift, 2);
                    shiftTop = _shift2[0];
                    shiftLeft = _shift2[1];
                    shiftTop = parseFloat(shiftTop, 10);
                    shiftLeft = parseFloat(shiftLeft, 10)
                } else {
                    shiftTop = shift.top;
                    shiftLeft = shift.left
                }
                top += shiftTop;
                left += shiftLeft;
                return {
                    top: top,
                    left: left
                }
            }
        });
        return Tether
    })
}), (function(module, exports, __webpack_require__) {
    "use strict";
    var g;
    g = (function() {
        return this
    })();
    try {
        g = g || Function("return this")() || (1, eval)("this")
    } catch (e) {
        if (typeof window === "object") g = window
    }
    module.exports = g
}), (function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.Tether = __webpack_require__(29)
    }.call(exports, __webpack_require__(30)))
}), (function(module, exports, __webpack_require__) {
    __webpack_require__(4);
    module.exports = __webpack_require__(5)
})]);
$(document).ready(function() {
    prestashop.blockcart = prestashop.blockcart || {};
    var showModal = prestashop.blockcart.showModal || function(modal) {
        var $body = $('body');
        $body.append(modal);
        $body.one('click', '#blockcart-modal', function(event) {
            if (event.target.id === 'blockcart-modal') {
                $(event.target).remove()
            }
        })
    };
    $(document).ready(function() {
        prestashop.on('updateCart', function(event) {
            var refreshURL = $('.blockcart').data('refresh-url');
            var requestData = {};
            if (event && event.reason) {
                requestData = {
                    id_product_attribute: event.reason.idProductAttribute,
                    id_product: event.reason.idProduct,
                    action: event.reason.linkAction
                }
            }
            $.post(refreshURL, requestData).then(function(resp) {
                $('.blockcart').replaceWith($(resp.preview).find('.blockcart'));
                if (resp.modal) {
                    showModal(resp.modal)
                }
            }).fail(function(resp) {
                prestashop.emit('handleError', {
                    eventType: 'updateShoppingCart',
                    resp: resp
                })
            })
        })
    })
});
(function($) {
    $.cookie = function(key, value, options) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);
            if (value === null || value === undefined) {
                options.expires = -1
            }
            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setDate(t.getDate() + days)
            }
            value = String(value);
            return (document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''))
        }
        options = value || {};
        var decode = options.raw ? function(s) {
            return s
        } : decodeURIComponent;
        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || '')
        }
        return null
    }
})(jQuery);
(function($) {
    $.fn.hoverIntent = function(f, g) {
        var cfg = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        cfg = $.extend(cfg, g ? {
            over: f,
            out: g
        } : f);
        var cX, cY, pX, pY;
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY
        };
        var compare = function(ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
                $(ob).unbind("mousemove", track);
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob, [ev])
            } else {
                pX = cX;
                pY = cY;
                ob.hoverIntent_t = setTimeout(function() {
                    compare(ev, ob)
                }, cfg.interval)
            }
        };
        var delay = function(ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob, [ev])
        };
        var handleHover = function(e) {
            var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
            while (p && p != this) {
                try {
                    p = p.parentNode
                } catch (e) {
                    p = this
                }
            }
            if (p == this) {
                return !1
            }
            var ev = jQuery.extend({}, e);
            var ob = this;
            if (ob.hoverIntent_t) {
                ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t)
            }
            if (e.type == "mouseover") {
                pX = ev.pageX;
                pY = ev.pageY;
                $(ob).bind("mousemove", track);
                if (ob.hoverIntent_s != 1) {
                    ob.hoverIntent_t = setTimeout(function() {
                        compare(ev, ob)
                    }, cfg.interval)
                }
            } else {
                $(ob).unbind("mousemove", track);
                if (ob.hoverIntent_s == 1) {
                    ob.hoverIntent_t = setTimeout(function() {
                        delay(ev, ob)
                    }, cfg.timeout)
                }
            }
        };
        return this.mouseover(handleHover).mouseout(handleHover)
    }
})(jQuery);