"use strict";
// programmed by watayan <watayan@watayan.net>
// edit run.js, and transpile with Babel to make run1.js

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var varsInt = {},
    varsFloat = {},
    varsString = {},
    varsBoolean = {};
var stack = [];
var run_flag = false,
    step_flag = false;
var parse = null;
var textarea = null;
var context = null;

function isFinite(v) {
	return !isNaN(v) && v != Number.POSITIVE_INFINITY && v != Number.NEGATIVE_INFINITY;
	// return Number.isFinite(v);
}

function isSafeInteger(v) {
	return !isNaN(v) && v == Math.round(v) && v <= 9007199254740991 && v >= -9007199254740991;
	// return Number.isSafeInteger(v);
}

function textareaAppend(v) {
	textarea.value += v;
	textarea.scrollTop = textarea.scrollHeight;
}

var Location = function () {
	function Location(first_token, last_token) {
		_classCallCheck(this, Location);

		this._first_line = first_token.first_line;
		this._last_line = last_token.last_line;
	}

	_createClass(Location, [{
		key: "first_line",
		get: function get() {
			return this._first_line;
		}
	}, {
		key: "last_line",
		get: function get() {
			return this._last_line;
		}
	}]);

	return Location;
}();

var RuntimeError = function () {
	function RuntimeError(line, message) {
		_classCallCheck(this, RuntimeError);

		this._line = line;
		this._message = message;
		setRunflag(false);
	}

	_createClass(RuntimeError, [{
		key: "line",
		get: function get() {
			return this._line;
		}
	}, {
		key: "message",
		get: function get() {
			return this._message;
		}
	}]);

	return RuntimeError;
}();

var Value = function () {
	function Value(v, loc) {
		_classCallCheck(this, Value);

		this._value = v;
		this._loc = loc;
	}

	_createClass(Value, [{
		key: "getValue",
		value: function getValue() {
			return this;
		}
	}, {
		key: "value",
		get: function get() {
			return this._value;
		}
	}, {
		key: "loc",
		get: function get() {
			return this._loc;
		}
	}, {
		key: "first_line",
		get: function get() {
			return this._loc.first_line;
		}
	}]);

	return Value;
}();

var NullValue = function (_Value) {
	_inherits(NullValue, _Value);

	function NullValue(loc) {
		_classCallCheck(this, NullValue);

		return _possibleConstructorReturn(this, (NullValue.__proto__ || Object.getPrototypeOf(NullValue)).call(this, 0, loc));
	}

	return NullValue;
}(Value);

var IntValue = function (_Value2) {
	_inherits(IntValue, _Value2);

	function IntValue(v, loc) {
		_classCallCheck(this, IntValue);

		var _this2 = _possibleConstructorReturn(this, (IntValue.__proto__ || Object.getPrototypeOf(IntValue)).call(this, v, loc));

		if (!isSafeInteger(v)) throw new RuntimeError(_this2.first_line, "整数で表せない値です");
		return _this2;
	}

	return IntValue;
}(Value);

var FloatValue = function (_Value3) {
	_inherits(FloatValue, _Value3);

	function FloatValue(v, loc) {
		_classCallCheck(this, FloatValue);

		var _this3 = _possibleConstructorReturn(this, (FloatValue.__proto__ || Object.getPrototypeOf(FloatValue)).call(this, v, loc));

		if (!isFinite(v)) throw new RuntimeError(_this3.first_line, "オーバーフローしました");
		return _this3;
	}

	return FloatValue;
}(Value);

var StringValue = function (_Value4) {
	_inherits(StringValue, _Value4);

	function StringValue() {
		_classCallCheck(this, StringValue);

		return _possibleConstructorReturn(this, (StringValue.__proto__ || Object.getPrototypeOf(StringValue)).apply(this, arguments));
	}

	return StringValue;
}(Value);

var BooleanValue = function (_Value5) {
	_inherits(BooleanValue, _Value5);

	function BooleanValue() {
		_classCallCheck(this, BooleanValue);

		return _possibleConstructorReturn(this, (BooleanValue.__proto__ || Object.getPrototypeOf(BooleanValue)).apply(this, arguments));
	}

	return BooleanValue;
}(Value);

var UNDEFINED = function (_Value6) {
	_inherits(UNDEFINED, _Value6);

	function UNDEFINED(loc) {
		_classCallCheck(this, UNDEFINED);

		return _possibleConstructorReturn(this, (UNDEFINED.__proto__ || Object.getPrototypeOf(UNDEFINED)).call(this, null, loc));
	}

	_createClass(UNDEFINED, [{
		key: "getValue",
		value: function getValue() {
			throw new RuntimeError(this.first_line, "未完成のプログラムです");
		}
	}, {
		key: "varname",
		get: function get() {
			throw new RuntimeError(this.first_line, "未完成のプログラムです");
		}
	}]);

	return UNDEFINED;
}(Value);

var Add = function (_Value7) {
	_inherits(Add, _Value7);

	function Add(x, y, loc) {
		_classCallCheck(this, Add);

		return _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, [x, y], loc));
	}

	_createClass(Add, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			if (v1 instanceof BooleanValue || v2 instanceof BooleanValue) throw new RuntimeError(this.first_line, "真偽型の足し算はできません");
			if (v1 instanceof StringValue || v2 instanceof StringValue) {
				if (v1 instanceof NullValue) return v2;else if (v2 instanceof NullValue) return v1;else return new String(v1.value + v2.value, this.loc);
			}
			var v = v1.value + v2.value;
			if (v1 instanceof FloatValue || v2 instanceof FloatValue) {
				if (!isFinite(v)) throw new RuntimeError(this.first_line, "オーバーフローしました");
				return new FloatValue(v, this.loc);
			} else {
				if (!isSafeInteger(v)) throw new RuntimeError(this.first_line, "整数で表される範囲を越えました");
				return new IntValue(v, this.loc);
			}
		}
	}]);

	return Add;
}(Value);

var Sub = function (_Value8) {
	_inherits(Sub, _Value8);

	function Sub(x, y, loc) {
		_classCallCheck(this, Sub);

		return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, [x, y], loc));
	}

	_createClass(Sub, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			if (v1 instanceof BooleanValue || v2 instanceof BooleanValue) throw new RuntimeError(this.first_line, "真偽型の引き算はできません");
			if (v1 instanceof StringValue || v2 instanceof StringValue) throw new RuntimeError(this.first_line, "文字列の引き算はできません");
			var v = v1.value - v2.value;
			if (v1 instanceof FloatValue || v2 instanceof FloatValue) {
				if (!isFinite(v)) throw new RuntimeError(this.first_line, "オーバーフローしました");
				return new FloatValue(v, this.loc);
			} else {
				if (!isSafeInteger(v)) throw new RuntimeError(this.first_line, "整数で表される範囲を越えました");
				return new IntValue(v, this.loc);
			}
		}
	}]);

	return Sub;
}(Value);

var Mul = function (_Value9) {
	_inherits(Mul, _Value9);

	function Mul(x, y, loc) {
		_classCallCheck(this, Mul);

		return _possibleConstructorReturn(this, (Mul.__proto__ || Object.getPrototypeOf(Mul)).call(this, [x, y], loc));
	}

	_createClass(Mul, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			if (v1 instanceof BooleanValue || v2 instanceof BooleanValue) throw new RuntimeError(this.first_line, "真偽型のかけ算はできません");
			if (v1 instanceof StringValue || v2 instanceof StringValue) throw new RuntimeError(this.first_line, "文字列のかけ算はできません");
			var v = v1.value * v2.value;
			if (v1 instanceof FloatValue || v2 instanceof FloatValue) {
				if (!isFinite(v)) throw new RuntimeError(this.first_line, "オーバーフローしました");
				return new FloatValue(v, this.loc);
			} else {
				if (!isSafeInteger(v)) throw new RuntimeError(this.first_line, "整数で表される範囲を越えました");
				return new IntValue(v, this.loc);
			}
		}
	}]);

	return Mul;
}(Value);

var Div = function (_Value10) {
	_inherits(Div, _Value10);

	function Div(x, y, loc) {
		_classCallCheck(this, Div);

		return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).call(this, [x, y], loc));
	}

	_createClass(Div, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			if (v1 instanceof BooleanValue || v2 instanceof BooleanValue) throw new RuntimeError(this.first_line, "真偽型のわり算はできません");
			if (v1 instanceof StringValue || v2 instanceof StringValue) throw new RuntimeError(this.first_line, "文字列のわり算はできません");
			if (v2.value == 0 || v2 instanceof NullValue) throw new RuntimeError(this.first_line, "0でわり算をしました");
			if ((v1 instanceof IntValue || v1 instanceof NullValue) && v2 instanceof IntValue) {
				var v = (v1.value - v1.value % v2.value) / v2.value;
				if (!isSafeInteger(v)) throw new RuntimeError(this.first_line, "整数で表される範囲を越えました");
				return new IntValue(v, this.loc);
			} else {
				var _v = v1.value / v2.value;
				if (!isFinite(_v)) throw new RuntimeError(this.first_line, "オーバーフローしました");
				return new FloatValue(_v, this.loc);
			}
		}
	}]);

	return Div;
}(Value);

var Div2 = function (_Value11) {
	_inherits(Div2, _Value11);

	function Div2(x, y, loc) {
		_classCallCheck(this, Div2);

		return _possibleConstructorReturn(this, (Div2.__proto__ || Object.getPrototypeOf(Div2)).call(this, [x, y], loc));
	}

	_createClass(Div2, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			if (v1 instanceof BooleanValue || v2 instanceof BooleanValue) throw new RuntimeError(this.first_line, "真偽型のわり算はできません");
			if (v1 instanceof StringValue || v2 instanceof StringValue) throw new RuntimeError(this.first_line, "文字列のわり算はできません");
			if (v2.value == 0 || v2 instanceof NullValue) throw new RuntimeError(this.first_line, "0でわり算をしました");
			if ((v1 instanceof IntValue || v1 instanceof NullValue) && v2 instanceof IntValue) {
				var v = (v1.value - v1.value % v2.value) / v2.value;
				if (!isSafeInteger(v)) throw new RuntimeError(this.first_line, "整数で表される範囲を越えました");
				return new IntValue(v, this.loc);
			} else {
				if (setting.div_mode == 0) {
					var _v2 = v1.value / v2.value;
					if (!isFinite(_v2)) throw new RuntimeError(this.first_line, "オーバーフローしました");
					return new FloatValue(_v2, this.loc);
				} else {
					var _v3 = Math.floor(v1.value / v2.value);
					if (!isFinite(_v3)) throw new RuntimeError(this.first_line, "オーバーフローしました");
					return new IntValue(_v3, this.loc);
				}
			}
		}
	}]);

	return Div2;
}(Value);

var Mod = function (_Value12) {
	_inherits(Mod, _Value12);

	function Mod(x, y, loc) {
		_classCallCheck(this, Mod);

		return _possibleConstructorReturn(this, (Mod.__proto__ || Object.getPrototypeOf(Mod)).call(this, [x, y], loc));
	}

	_createClass(Mod, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			if ((v1 instanceof IntValue || v1 instanceof NullValue) && (v2 instanceof IntValue || v2 instanceof NullValue)) {
				if (v2.value == 0) throw new RuntimeError(this.first_line, "0でわり算をしました");
				var v = v1.value % v2.value;
				if (!isSafeInteger(v)) throw new RuntimeError(this.first_line, "整数で表される範囲を越えました");
				return new IntValue(v, this.loc);
			} else throw new RuntimeError(this.first_line, "余りを出す計算は整数でしかできません");
		}
	}]);

	return Mod;
}(Value);

var Minus = function (_Value13) {
	_inherits(Minus, _Value13);

	function Minus(x, loc) {
		_classCallCheck(this, Minus);

		return _possibleConstructorReturn(this, (Minus.__proto__ || Object.getPrototypeOf(Minus)).call(this, x, loc));
	}

	_createClass(Minus, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value.getValue();
			if (v1 instanceof NullValue) return v1;
			if (v1 instanceof IntValue || v1 instanceof FloatValue) {
				var v = -v1.value;
				if (v instanceof IntValue && !isSafeInteger(v)) throw new RuntimeError(this.first_line, "整数で表される範囲を越えました");
				if (v instanceof FloatValue && !isFinite(v)) throw new RuntimeError(this.first_line, "オーバーフローしました");
				return v1 instanceof IntValue ? new IntValue(v, this.loc) : new FloatValue(v, this.loc);
			} else throw new RuntimeError(this.first_line, "マイナスは数値にしかつけられません");
		}
	}]);

	return Minus;
}(Value);

var And = function (_Value14) {
	_inherits(And, _Value14);

	function And(x, y, loc) {
		_classCallCheck(this, And);

		return _possibleConstructorReturn(this, (And.__proto__ || Object.getPrototypeOf(And)).call(this, [x, y], loc));
	}

	_createClass(And, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			if (v1 instanceof BooleanValue && v2 instanceof BooleanValue) return new BooleanValue(v1.value && v2.value, this.loc);else throw new RuntimeError(this.first_line, "「かつ」は真偽値にしか使えません");
		}
	}]);

	return And;
}(Value);

var Or = function (_Value15) {
	_inherits(Or, _Value15);

	function Or(x, y, loc) {
		_classCallCheck(this, Or);

		return _possibleConstructorReturn(this, (Or.__proto__ || Object.getPrototypeOf(Or)).call(this, [x, y], loc));
	}

	_createClass(Or, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			if (v1 instanceof BooleanValue && v2 instanceof BooleanValue) return new BooleanValue(v1.value || v2.value, this.loc);else throw new RuntimeError(this.first_line, "「または」は真偽値にしか使えません");
		}
	}]);

	return Or;
}(Value);

var Not = function (_Value16) {
	_inherits(Not, _Value16);

	function Not(x, loc) {
		_classCallCheck(this, Not);

		return _possibleConstructorReturn(this, (Not.__proto__ || Object.getPrototypeOf(Not)).call(this, x, loc));
	}

	_createClass(Not, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value.getValue();
			if (v1 instanceof BooleanValue) return new BooleanValue(!v1.value, this.loc);else throw new RuntimeError(this.first_line, "「でない」は真偽値にしか使えません");
		}
	}]);

	return Not;
}(Value);

var EQ = function (_Value17) {
	_inherits(EQ, _Value17);

	function EQ(x, y, loc) {
		_classCallCheck(this, EQ);

		return _possibleConstructorReturn(this, (EQ.__proto__ || Object.getPrototypeOf(EQ)).call(this, [x, y], loc));
	}

	_createClass(EQ, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			return new BooleanValue(v1.value == v2.value, this.loc);
		}
	}]);

	return EQ;
}(Value);

var NE = function (_Value18) {
	_inherits(NE, _Value18);

	function NE(x, y, loc) {
		_classCallCheck(this, NE);

		return _possibleConstructorReturn(this, (NE.__proto__ || Object.getPrototypeOf(NE)).call(this, [x, y], loc));
	}

	_createClass(NE, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			return new BooleanValue(v1.value != v2.value, this.loc);
		}
	}]);

	return NE;
}(Value);

var GT = function (_Value19) {
	_inherits(GT, _Value19);

	function GT(x, y, loc) {
		_classCallCheck(this, GT);

		return _possibleConstructorReturn(this, (GT.__proto__ || Object.getPrototypeOf(GT)).call(this, [x, y], loc));
	}

	_createClass(GT, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			return new BooleanValue(v1.value > v2.value, this.loc);
		}
	}]);

	return GT;
}(Value);

var GE = function (_Value20) {
	_inherits(GE, _Value20);

	function GE(x, y, loc) {
		_classCallCheck(this, GE);

		return _possibleConstructorReturn(this, (GE.__proto__ || Object.getPrototypeOf(GE)).call(this, [x, y], loc));
	}

	_createClass(GE, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			return new BooleanValue(v1.value >= v2.value, this.loc);
		}
	}]);

	return GE;
}(Value);

var LT = function (_Value21) {
	_inherits(LT, _Value21);

	function LT(x, y, loc) {
		_classCallCheck(this, LT);

		return _possibleConstructorReturn(this, (LT.__proto__ || Object.getPrototypeOf(LT)).call(this, [x, y], loc));
	}

	_createClass(LT, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			return new BooleanValue(v1.value < v2.value, this.loc);
		}
	}]);

	return LT;
}(Value);

var LE = function (_Value22) {
	_inherits(LE, _Value22);

	function LE(x, y, loc) {
		_classCallCheck(this, LE);

		return _possibleConstructorReturn(this, (LE.__proto__ || Object.getPrototypeOf(LE)).call(this, [x, y], loc));
	}

	_createClass(LE, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			return new BooleanValue(v1.value <= v2.value, this.loc);
		}
	}]);

	return LE;
}(Value);

var Variable = function (_Value23) {
	_inherits(Variable, _Value23);

	function Variable(x, y, loc) {
		_classCallCheck(this, Variable);

		return _possibleConstructorReturn(this, (Variable.__proto__ || Object.getPrototypeOf(Variable)).call(this, [x, y], loc));
	}

	_createClass(Variable, [{
		key: "getValue",
		value: function getValue() {
			var vn = this.varname;
			if (varsInt[vn] != undefined) return new IntValue(varsInt[vn], this.loc);else if (varsFloat[vn] != undefined) return new FloatValue(varsFloat[vn], this.loc);else if (varsString[vn] != undefined) return new StringValue(varsString[vn], this.loc);else if (varsBoolean[vn] != undefined) return new BooleanValue(varsBoolean[vn], this.loc);else if (setting.var_declaration == 0) throw new RuntimeError(this.first_line, "変数" + vn + "は宣言されていません");else return new NullValue(this.loc);
		}
	}, {
		key: "varname",
		get: function get() {
			var vn = this.value[0];
			var pm = this.value[1];
			if (pm != null) {
				var ag = new Array(pm.length);
				for (var i = 0; i < pm.length; i++) {
					var v = pm[i].getValue();
					if (v instanceof IntValue) ag[i] = v.value;else if (v instanceof FloatValue) ag[i] = Math.round(v.value);else throw new RuntimeError(this.first_line, "配列の添字に" + v.value + "は使えません");
				}
				vn += '[' + ag.join(',') + ']';
			}
			return vn;
		}
	}]);

	return Variable;
}(Value);

var CallFunction = function (_Value24) {
	_inherits(CallFunction, _Value24);

	function CallFunction(funcname, parameter, loc) {
		_classCallCheck(this, CallFunction);

		return _possibleConstructorReturn(this, (CallFunction.__proto__ || Object.getPrototypeOf(CallFunction)).call(this, { funcname: funcname, parameter: parameter }, loc));
	}

	_createClass(CallFunction, [{
		key: "getValue",
		value: function getValue() {
			var func = this.value.funcname,
			    param = this.value.parameter;
			if (func == 'abs') {
				if (param.length != 1) throw new RuntimeError(this.first_line, func + "の引数は1つです");
				var par1 = param[0].getValue();
				if (par1 instanceof NullValue || par1 instanceof IntValue) return new IntValue(Math.abs(par1.value), this.loc);else if (par1 instanceof FloatValue) return new FloatValue(Math.abs(par1.value), this.loc);else throw new RuntimeError(this.first_line, func + "は数値にしか使えません");
			} else if (func == 'random') {
				if (param.length != 1) throw new RuntimeError(this.first_line, func + "の引数は1つです");
				var par1 = param[0].getValue();
				if (par1 instanceof NullValue || par1 instanceof IntValue) return new IntValue(Math.floor(Math.random() * Math.floor(par1.value + 1)), this.loc);else throw new RuntimeError(this.first_line, func + "は整数にしか使えません");
			} else if (func == 'ceil') {
				if (param.length != 1) throw new RuntimeError(this.first_line, func + "の引数は1つです");
				var par1 = param[0].getValue();
				if (par1 instanceof NullValue || par1 instanceof IntValue) return par1;else if (par1 instanceof FloatValue) return new IntValue(Math.ceil(par1.value), this.loc);else throw new RuntimeError(this.first_line, func + "は数値にしか使えません");
			} else if (func == 'floor') {
				if (param.length != 1) throw new RuntimeError(this.first_line, func + "の引数は1つです");
				var par1 = param[0].getValue();
				if (par1 instanceof NullValue || par1 instanceof IntValue) return par1;else if (par1 instanceof FloatValue) return new IntValue(Math.floor(par1.value), this.loc);else throw new RuntimeError(this.first_line, func + "は数値にしか使えません");
			} else if (func == 'round') {
				if (param.length != 1) throw new RuntimeError(this.first_line, func + "の引数は1つです");
				var par1 = param[0].getValue();
				if (par1 instanceof NullValue || par1 instanceof IntValue) return par1;else if (par1 instanceof FloatValue) return new IntValue(Math.round(par1.value), this.loc);else throw new RuntimeError(this.first_line, func + "は数値にしか使えません");
			} else if (func == 'sin') {
				if (param.length != 1) throw new RuntimeError(this.first_line, func + "の引数は1つです");
				var par1 = param[0].getValue();
				if (par1 instanceof NullValue || par1 instanceof IntValue || par1 instanceof FloatValue) return new FloatValue(Math.sin(par1.value), this.loc);else throw new RuntimeError(this.first_line, func + "は数値にしか使えません");
			} else if (func == 'cos') {
				if (param.length != 1) throw new RuntimeError(this.first_line, func + "の引数は1つです");
				var par1 = param[0].getValue();
				if (par1 instanceof NullValue || par1 instanceof IntValue || par1 instanceof FloatValue) return new FloatValue(Math.cos(par1.value), this.loc);else throw new RuntimeError(this.first_line, func + "は数値にしか使えません");
			} else if (func == 'tan') {
				if (param.length != 1) throw new RuntimeError(this.first_line, func + "の引数は1つです");
				var par1 = param[0].getValue();
				if (par1 instanceof NullValue || par1 instanceof IntValue || par1 instanceof FloatValue) {
					var _v4 = Math.tan(par1.value);
					if (isFinite(_v4)) return new FloatValue(Math.tan(par1.value), this.loc);else throw new RuntimeError(this.first_line, "オーバーフローしました");
				} else throw new RuntimeError(this.first_line, func + "は数値にしか使えません");
			} else if (func == 'sqrt') {
				if (param.length != 1) throw new RuntimeError(this.first_line, func + "の引数は1つです");
				var par1 = param[0].getValue();
				if (par1 instanceof NullValue || par1 instanceof IntValue || par1 instanceof FloatValue) {
					if (par1.value < 0) throw new RuntimeError(this.first_line, "負の数のルートを求めようとしました");
					return new FloatValue(Math.sqrt(par1.value), this.loc);
				} else throw new RuntimeError(this.first_line, func + "は数値にしか使えません");
			} else if (func == 'log') {
				if (param.length != 1) throw new RuntimeError(this.first_line, func + "の引数は1つです");
				var par1 = param[0].getValue();
				if (par1 instanceof NullValue || par1 instanceof IntValue || par1 instanceof FloatValue) {
					if (par1.value <= 0) throw new RuntimeError(this.first_line, "正でない数の対数を求めようとしました");
					var _v5 = Math.log(par1.value);
					if (isFinite(_v5)) return new FloatValue(_v5, this.loc);
					throw new RuntimeError(this.first_line, "オーバーフローしました");
				} else throw new RuntimeError(this.first_line, func + "は数値にしか使えません");
			} else if (func == 'exp') {
				if (param.length != 1) throw new RuntimeError(this.first_line, func + "の引数は1つです");
				var par1 = param[0].getValue();
				if (par1 instanceof NullValue || par1 instanceof IntValue || par1 instanceof FloatValue) {
					var _v6 = Math.exp(par1.value);
					if (isFinite(_v6)) return new FloatValue(_v6, this.loc);
					throw new RuntimeError(this.first_line, "オーバーフローしました");
				} else throw new RuntimeError(this.first_line, func + "は数値にしか使えません");
			} else if (func == 'pow') {
				if (param.length != 2) throw new RuntimeError(this.first_line, func + "の引数は2つです");
				var par1 = param[0].getValue();
				var par2 = param[1].getValue();
				if ((par1 instanceof NullValue || par1 instanceof IntValue) && (par2 instanceof NullValue || par2 instanceof IntValue) && par2.value >= 0) {
					if (par1.value == 0 && par2.value <= 0) throw new RuntimeError(this.first_line, "0は正の数乗しかできません");
					var _v7 = Math.pow(par1.value, par2.value);
					if (isSafeInteger(_v7)) return new IntValue(_v7, this.loc);else throw new RuntimeError(this.first_line, "オーバーフローしました");
				}
				if ((par1 instanceof NullValue || par1 instanceof IntValue || par1 instanceof FloatValue) && (par2 instanceof NullValue || par2 instanceof IntValue || par2 instanceof FloatValue)) {
					if (par1.value < 0 && !Number.isInteger(par2.value)) throw new RuntimeError(this.first_line, "負の数の非整数乗はできません");
					if (par1.value == 0 && par2.value <= 0) throw new RuntimeError(this.first_line, "0は正の数乗しかできません");
					var _v8 = Math.pow(par1.value, par2.value);
					if (isFinite(_v8)) return new FloatValue(_v8, this.loc);else throw new RuntimeError(this.first_line, "オーバーフローしました");
				}
			} else if (func == 'length') {
				if (param.length != 1) throw new RuntimeError(this.first_line, func + "の引数は1つです");
				var par1 = param[0].getValue();
				if (par1 instanceof NullValue) return new IntValue(0, this.loc);else if (par1 instanceof StringValue) return new IntValue(par1.value.length(), this.loc);else throw new RuntimeError(this.first_line, func + "は文字列にしか使えません");
			} else if (func == 'substring') {
				if (param.length != 2 && param.length != 3) throw new RuntimeError(this.first_line, func + "の引数は2つか3つです");
				var par1 = param[0].getValue();
				var par2 = param[1].getValue();
				var par3 = param.length == 3 ? param[2].getValue() : null;
				if ((par1 instanceof NullValue || par1 instanceof StringValue) && (par2 instanceof NullValue || par2 instanceof IntValue) && (par3 == null || par1 instanceof NullValue || par3 instanceof IntValue)) {
					var v;
					if (par3 == null) v = par1.value.substr(par2.value);else v = par1.value.substr(par2.value, par3.value);
					return new StringValue(v, this.loc);
				} else throw new RuntimeError(this.first_line, func + "の引数の型が違います");
			} else if (func == 'append') {
				if (param.length != 2) throw new RuntimeError(this.first_line, func + "の引数は2つです");
				var par1 = param[0].getValue();
				var par2 = param[1].getValue();
				if (par1 instanceof NullValue) return v2;else if (par2 instanceof NullValue) return v1;else if (par2 instanceof StringValue && par2 instanceof StringValue) {
					return new StringValue(par1.value + par2.value, this.loc);
				} else throw new RuntimeError(this.first_line, func + "の引数の型が違います");
			} else if (func == 'extract') {
				if (param.length != 3) throw new RuntimeError(this.first_line, func + "の引数は3つです");
				var par1 = param[0].getValue();
				var par2 = param[1].getValue();
				var par3 = param[2].getValue();
				if ((par1 instanceof NullValue || par1 instanceof StringValue) && (par2 instanceof NullValue || par2 instanceof StringValue) && (par3 instanceof NullValue || par3 instanceof IntValue)) {
					var v1 = par1 instanceof NullValue ? '' : par1.value;
					var v2 = par2 instanceof NullValue ? '' : par2.value;
					var v3 = par3.value;
					var v = v1.split(v2);
					if (v3 >= 0 && v3 < v.length) return new StringValue(v[v3], this.loc);else throw new RuntimeError(this.first_line, "番号の値が不正です");
				} else throw new RuntimeError(this.first_line, func + "の引数の型が違います");
			} else if (func == 'insert') {
				if (param.length != 3) throw new RuntimeError(this.first_line, func + "の引数は3つです");
				var par1 = param[0].getValue();
				var par2 = param[1].getValue();
				var par3 = param[2].getValue();
				if ((par1 instanceof NullValue || par1 instanceof StringValue) && (par2 instanceof NullValue || par2 instanceof IntValue) && (par3 instanceof NullValue || par3 instanceof StringValue)) {
					var v1 = par1 instanceof NullValue ? '' : par1.value;
					var v2 = par2.value;
					var v3 = par3 instanceof NullValue ? '' : par3.value;
					if (v2 < 0 || v2 > v1.length) throw new RuntimeError(this.first_line, "位置の値が不正です");
					var s1 = v1.substr(0, v2);
					var s2 = v1.substr(v2);
					return new StringValue(s1 + v3 + s2, this.loc);
				} else throw new RuntimeError(this.first_line, func + "の引数の型が違います");
			} else if (func == 'replace') {
				if (param.length != 4) throw new RuntimeError(this.first_line, func + "の引数は4つです");
				var par1 = param[0].getValue();
				var par2 = param[1].getValue();
				var par3 = param[2].getValue();
				var par4 = param[3].getValue();
				if ((par1 instanceof NullValue || par1 instanceof StringValue) && (par2 instanceof NullValue || par2 instanceof IntValue) && (par3 instanceof NullValue || par3 instanceof IntValue) && (par4 instanceof NullValue || par4 instanceof StringValue)) {
					var v1 = par1 instanceof NullValue ? '' : par1.value;
					var v2 = par2.value;
					var v3 = par3.value;
					var v4 = par4 instanceof NullValue ? '' : par4.value;

					if (v2 < 0 || v2 > v1.length) throw new RuntimeError(this.first_line, "位置の値が不正です");
					if (v3 < 0 || v2 + v3 > v1.length) throw new RuntimeError(this.first_line, "長さの値が不正です");
					var s1 = v1.substr(0, v2);
					var s2 = v1.substr(v2 + v3);
					return new StringValue(s1 + v4 + s2, this.loc);
				} else throw new RuntimeError(this.first_line, func + "の引数の型が違います");
			} else throw new RuntimeError(this.first_line, func + "という関数はありません");
		}
	}]);

	return CallFunction;
}(Value);

var Append = function (_Value25) {
	_inherits(Append, _Value25);

	function Append(x, y, loc) {
		_classCallCheck(this, Append);

		return _possibleConstructorReturn(this, (Append.__proto__ || Object.getPrototypeOf(Append)).call(this, [x, y], loc));
	}

	_createClass(Append, [{
		key: "getValue",
		value: function getValue() {
			var v1 = this.value[0].getValue(),
			    v2 = this.value[1].getValue();
			if (this.value[0].getValue() instanceof NullValue) v1 = '';
			if (this.value[1].getValue() instanceof NullValue) v2 = '';
			var v = String(v1.value) + String(v2.value);
			return new StringValue(v, this.loc);
		}
	}]);

	return Append;
}(Value);

var Statement = function () {
	function Statement(loc) {
		_classCallCheck(this, Statement);

		this._loc = loc;
	}

	_createClass(Statement, [{
		key: "run",
		value: function run(index) {}
	}, {
		key: "first_line",
		get: function get() {
			return this._loc.first_line;
		}
	}, {
		key: "last_line",
		get: function get() {
			return this._loc.last_line;
		}
	}, {
		key: "loc",
		get: function get() {
			return this._loc;
		}
	}]);

	return Statement;
}();

var DefinitionInt = function (_Statement) {
	_inherits(DefinitionInt, _Statement);

	function DefinitionInt(x, loc) {
		_classCallCheck(this, DefinitionInt);

		var _this26 = _possibleConstructorReturn(this, (DefinitionInt.__proto__ || Object.getPrototypeOf(DefinitionInt)).call(this, loc));

		_this26.vars = x;
		return _this26;
	}

	_createClass(DefinitionInt, [{
		key: "run",
		value: function run(index) {
			for (var i = 0; i < this.vars.length; i++) {
				var varname = this.vars[i].varname;
				var parameter = this.vars[i].parameter;
				if (varsInt[varname] != undefined || varsFloat[varname] != undefined || varsString[varname] != undefined || varsBoolean[varname] != undefined) throw new RuntimeError(this.first_line, varname + "の宣言が重複しています");
				if (!parameter) {
					varsInt[varname] = 0;
				} else {
					var parameterlist = [];
					for (var j = 0; j < parameter.length; j++) {
						var v = parameter[j].getValue();
						if (v instanceof IntValue && v.value >= 0) parameterlist.push(v.value);else if (v instanceof FloatValue && v.value >= 0) parameterlist.push(Math.round(v.value));else throw new RuntimeError(this.first_line, "配列の番号に" + v.value + "は使えません");
					}
					var args = new Array(parameter.length);
					for (var j = 0; j < parameter.length; j++) {
						args[j] = setting.array_origin != 2 ? 0 : 1;
					}while (args) {
						varsInt[varname + '[' + args.join(',') + ']'] = 0;
						var k = 0;
						do {
							if (k < args.length) {
								args[k]++;
								if (setting.array_origin != 1 && args[k] > parameterlist[k] || setting.array_origin == 1 && args[k] >= parameterlist[k]) args[k++] = setting.array_origin != 2 ? 0 : 1;else k = -1;
							} else {
								k = -1;
								args = undefined;
							}
						} while (k >= 0);
					}
				}
			}
			return index + 1;
		}
	}]);

	return DefinitionInt;
}(Statement);

var DefinitionFloat = function (_Statement2) {
	_inherits(DefinitionFloat, _Statement2);

	function DefinitionFloat(x, loc) {
		_classCallCheck(this, DefinitionFloat);

		var _this27 = _possibleConstructorReturn(this, (DefinitionFloat.__proto__ || Object.getPrototypeOf(DefinitionFloat)).call(this, loc));

		_this27.vars = x;
		return _this27;
	}

	_createClass(DefinitionFloat, [{
		key: "run",
		value: function run(index) {
			for (var i = 0; i < this.vars.length; i++) {
				var varname = this.vars[i].varname;
				var parameter = this.vars[i].parameter;
				if (varsInt[varname] != undefined || varsFloat[varname] != undefined || varsString[varname] != undefined || varsBoolean[varname] != undefined) throw new RuntimeError(this.first_line, varname + "の宣言が重複しています");
				if (!parameter) {
					varsFloat[varname] = 0.0;
				} else {
					var parameterlist = [];
					for (var j = 0; j < parameter.length; j++) {
						var v = parameter[j].getValue();
						if (v instanceof IntValue && v.value >= 0) parameterlist.push(v.value);else if (v instanceof FloatValue && v.value >= 0) parameterlist.push(Math.round(v.value));else throw new RuntimeError(this.first_line, "配列の番号に" + v.value + "は使えません");
					}
					var args = new Array(parameter.length);
					for (var j = 0; j < parameter.length; j++) {
						args[j] = setting.array_origin != 2 ? 0 : 1;
					}while (args) {
						varsFloat[varname + '[' + args.join(',') + ']'] = 0;
						var k = 0;
						do {
							if (k < args.length) {
								args[k]++;
								if (setting.array_origin != 1 && args[k] > parameterlist[k] || setting.array_origin == 1 && args[k] >= parameterlist[k]) args[k++] = setting.array_origin != 2 ? 0 : 1;else k = -1;
							} else {
								k = -1;
								args = undefined;
							}
						} while (k >= 0);
					}
				}
			}
			return index + 1;
		}
	}]);

	return DefinitionFloat;
}(Statement);

var DefinitionString = function (_Statement3) {
	_inherits(DefinitionString, _Statement3);

	function DefinitionString(x, loc) {
		_classCallCheck(this, DefinitionString);

		var _this28 = _possibleConstructorReturn(this, (DefinitionString.__proto__ || Object.getPrototypeOf(DefinitionString)).call(this, loc));

		_this28.vars = x;
		return _this28;
	}

	_createClass(DefinitionString, [{
		key: "run",
		value: function run(index) {
			for (var i = 0; i < this.vars.length; i++) {
				var varname = this.vars[i].varname;
				var parameter = this.vars[i].parameter;
				if (varsInt[varname] != undefined || varsFloat[varname] != undefined || varsString[varname] != undefined || varsBoolean[varname] != undefined) throw new RuntimeError(this.first_line, varname + "の宣言が重複しています");
				if (!parameter) {
					varsString[varname] = '';
				} else {
					var parameterlist = [];
					for (var j = 0; j < parameter.length; j++) {
						var v = parameter[j].getValue();
						if (v instanceof IntValue && v.value >= 0) parameterlist.push(v.value);else if (v instanceof FloatValue && v.value >= 0) parameterlist.push(Math.round(v.value));else throw new RuntimeError(this.first_line, "配列の番号に" + v.value + "は使えません");
					}
					var args = new Array(parameter.length);
					for (var j = 0; j < parameter.length; j++) {
						args[j] = setting.array_origin != 2 ? 0 : 1;
					}while (args) {
						varsString[varname + '[' + args.join(',') + ']'] = '';
						var k = 0;
						do {
							if (k < args.length) {
								args[k]++;
								if (setting.array_origin != 1 && args[k] > parameterlist[k] || setting.array_origin == 1 && args[k] >= parameterlist[k]) args[k++] = setting.array_origin != 2 ? 0 : 1;else k = -1;
							} else {
								k = -1;
								args = undefined;
							}
						} while (k >= 0);
					}
				}
			}
			return index + 1;
		}
	}]);

	return DefinitionString;
}(Statement);

var DefinitionBoolean = function (_Statement4) {
	_inherits(DefinitionBoolean, _Statement4);

	function DefinitionBoolean(x, loc) {
		_classCallCheck(this, DefinitionBoolean);

		var _this29 = _possibleConstructorReturn(this, (DefinitionBoolean.__proto__ || Object.getPrototypeOf(DefinitionBoolean)).call(this, loc));

		_this29.vars = x;
		return _this29;
	}

	_createClass(DefinitionBoolean, [{
		key: "run",
		value: function run(index) {
			for (var i = 0; i < this.vars.length; i++) {
				var varname = this.vars[i].varname;
				var parameter = this.vars[i].parameter;
				if (varsInt[varname] != undefined || varsFloat[varname] != undefined || varsString[varname] != undefined || varsBoolean[varname] != undefined) throw new RuntimeError(this.first_line, varname + "の宣言が重複しています");
				if (!parameter) {
					varsBoolean[varname] = false;
				} else {
					var parameterlist = [];
					for (var j = 0; j < parameter.length; j++) {
						var v = parameter[j].getValue();
						if (v instanceof IntValue && v.value >= 0) parameterlist.push(v.value);else if (v instanceof FloatValue && v.value >= 0) parameterlist.push(Math.round(v.value));else throw new RuntimeError(this.first_line, "配列の番号に" + v.value + "は使えません");
					}
					var args = new Array(parameter.length);
					for (var j = 0; j < parameter.length; j++) {
						args[j] = setting.array_origin != 2 ? 0 : 1;
					}while (args) {
						varsBoolean[varname + '[' + args.join(',') + ']'] = false;
						var k = 0;
						do {
							if (k < args.length) {
								args[k]++;
								if (setting.array_origin != 1 && args[k] > parameterlist[k] || setting.array_origin == 1 && args[k] >= parameterlist[k]) args[k++] = setting.array_origin != 2 ? 0 : 1;else k = -1;
							} else {
								k = -1;
								args = undefined;
							}
						} while (k >= 0);
					}
				}
			}
			return index + 1;
		}
	}]);

	return DefinitionBoolean;
}(Statement);

var Assign = function (_Statement5) {
	_inherits(Assign, _Statement5);

	function Assign(varname, val, loc) {
		_classCallCheck(this, Assign);

		var _this30 = _possibleConstructorReturn(this, (Assign.__proto__ || Object.getPrototypeOf(Assign)).call(this, loc));

		_this30.varname = varname;
		_this30.val = val;
		return _this30;
	}

	_createClass(Assign, [{
		key: "run",
		value: function run(index) {
			var vn = this.varname.varname;
			var vl = this.val.getValue();
			if (varsInt[vn] != undefined) {
				if (vl instanceof IntValue) varsInt[vn] = vl.value;else if (vl instanceof FloatValue) varsInt[vn] = Math.round(vl.value);else throw new RuntimeError(this.first_line, vn + "に数値以外の値を代入しようとしました");
				if (!isSafeInteger(varsInt[vn])) throw new RuntimeError(this.first_line, "オーバーフローしました");
			} else if (varsFloat[vn] != undefined) {
				if (vl instanceof IntValue || vl instanceof FloatValue) varsFloat[vn] = vl.value;else throw new RuntimeError(this.first_line, vn + "に数値以外の値を代入しようとしました");
				if (!isFinite(varsFloat[vn])) throw new RuntimeError(this.first_line, "オーバーフローしました");
			} else if (varsString[vn] != undefined) {
				if (vl instanceof StringValue) varsString[vn] = vl.value;else throw new RuntimeError(this.first_line, vn + "に文字列以外の値を代入しようとしました");
			} else if (varsBoolean[vn] != undefined) {
				if (vl instanceof BooleanValue) varsBoolean[vn] = vl.value;else throw new RuntimeError(this.first_line, vn + "に真偽以外の値を代入しようとしました");
			} else if (setting.var_declaration == 0) throw new RuntimeError(this.first_line, vn + "は宣言されていません");else // 新しい変数を宣言する
				{
					if (vl instanceof NullValue || vl instanceof IntValue) varsInt[vn] = vl.value;else if (vl instanceof FloatValue) varsFloat[vn] = vl.value;else if (vl instanceof StringValue) varsString[vn] = vl.value;else if (vl instanceof BooleanValue) varsBoolean[vn] = vl.value;
				}
			return index + 1;
		}
	}]);

	return Assign;
}(Statement);

var Input = function (_Statement6) {
	_inherits(Input, _Statement6);

	function Input(x, loc) {
		_classCallCheck(this, Input);

		var _this31 = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, loc));

		_this31.varname = x;
		return _this31;
	}

	_createClass(Input, [{
		key: "run",
		value: function run(index) {
			var list = [new InputBegin(this.loc), new InputEnd(this.varname, this.loc)];
			stack.push({ statementlist: list, index: 0 });
			return index + 1;
		}
	}]);

	return Input;
}(Statement);

var InputBegin = function (_Statement7) {
	_inherits(InputBegin, _Statement7);

	function InputBegin(loc) {
		_classCallCheck(this, InputBegin);

		return _possibleConstructorReturn(this, (InputBegin.__proto__ || Object.getPrototypeOf(InputBegin)).call(this, loc));
	}

	_createClass(InputBegin, [{
		key: "run",
		value: function run(index) {
			openInputWindow();
			return index + 1;
		}
	}]);

	return InputBegin;
}(Statement);

var InputEnd = function (_Statement8) {
	_inherits(InputEnd, _Statement8);

	function InputEnd(x, loc) {
		_classCallCheck(this, InputEnd);

		var _this33 = _possibleConstructorReturn(this, (InputEnd.__proto__ || Object.getPrototypeOf(InputEnd)).call(this, loc));

		_this33.varname = x;
		return _this33;
	}

	_createClass(InputEnd, [{
		key: "run",
		value: function run(index) {
			try {
				var vn = this.varname.varname;
				var vl = closeInputWindow();
				if (varsInt[vn] != undefined) {
					varsInt[vn] = Number(vl);
					if (!isSafeInteger(varsInt[vn])) throw new RuntimeError(this.first_line, "整数で表せない値が入力されました");
				} else if (varsFloat[vn] != undefined) {
					varsFloat[vn] = Number(vl);
					if (!isFinite(varsFloat[vn])) throw new RuntimeError(this.first_line, "実数で表せない値が入力されました");
				} else if (varsString[vn] != undefined) {
					varsString[vn] = String(vl);
				} else if (varsBoolean[vn] != undefined) {
					varsBoolean[vn] = vl;
					if (vl !== true && vl !== false) throw new RuntimeError(this.first_line, "真偽以外の値が入力されました");
				} else if (setting.var_declaration == 0) throw new RuntimeError(this.first_line, vn + "は宣言されていません");else {
					varsString[vn] = String(vl); // とりあえず文字列
				}
			} catch (e) {
				closeInputWindow();
				throw e;
			}

			return index + 1;
		}
	}]);

	return InputEnd;
}(Statement);

var Output = function (_Statement9) {
	_inherits(Output, _Statement9);

	function Output(x, ln, loc) {
		_classCallCheck(this, Output);

		var _this34 = _possibleConstructorReturn(this, (Output.__proto__ || Object.getPrototypeOf(Output)).call(this, loc));

		_this34.value = x;
		_this34.ln = ln;
		return _this34;
	}

	_createClass(Output, [{
		key: "run",
		value: function run(index) {
			var v = this.value.getValue().value;
			if (this.value.getValue() instanceof NullValue) v = '';
			textareaAppend(v + (this.ln ? "\n" : ""));
			return index + 1;
		}
	}]);

	return Output;
}(Statement);

var GraphicStatement = function (_Statement10) {
	_inherits(GraphicStatement, _Statement10);

	function GraphicStatement(command, args, loc) {
		_classCallCheck(this, GraphicStatement);

		var _this35 = _possibleConstructorReturn(this, (GraphicStatement.__proto__ || Object.getPrototypeOf(GraphicStatement)).call(this, loc));

		_this35.command = command;
		_this35.args = args;
		return _this35;
	}

	_createClass(GraphicStatement, [{
		key: "run",
		value: function run(index) {
			if (this.command == 'gOpenWindow') {
				var canvas = document.getElementById('canvas');
				context = canvas.getContext('2d');
				canvas.setAttribute("width", this.args[0].getValue().value + "px");
				canvas.setAttribute("height", this.args[1].getValue().value + "px");
				canvas.style.display = "block";
			} else if (this.command == 'gCloseWindow') {
				var canvas = document.getElementById('canvas');
				canvas.style.display = "none";
				context = null;
			} else if (this.command == 'gClearWindow') {
				var canvas = document.getElementById('canvas');
				context.clearRect(0, 0, canvas.width, canvas.height);
			} else if (this.command == 'gSetLineColor') {
				if (context == null) throw new RuntimeError(this.first_line, "描画領域がありません");
				var r = this.args[0].getValue().value,
				    g = this.args[1].getValue().value,
				    b = this.args[2].getValue().value;
				context.strokeStyle = "rgb(" + r + "," + g + "," + b + ")";
			} else if (this.command == 'gSetFillColor') {
				if (context == null) throw new RuntimeError(this.first_line, "描画領域がありません");
				var _r = this.args[0].getValue().value,
				    _g = this.args[1].getValue().value,
				    _b = this.args[2].getValue().value;
				context.fillStyle = "rgb(" + _r + "," + _g + "," + _b + ")";
			} else if (this.command == 'gSetLineWidth') {
				if (context == null) throw new RuntimeError(this.first_line, "描画領域がありません");
				context.lineWidth = this.args[0].getValue().value;
			} else if (this.command == 'gSetFontSize') {
				if (context == null) throw new RuntimeError(this.first_line, "描画領域がありません");
				context.font = this.args[0].getValue().value + "px 'sans-serif'";
			} else if (this.command == 'gDrawText') {
				if (context == null) throw new RuntimeError(this.first_line, "描画領域がありません");
				context.fillText(this.args[0].getValue().value, this.args[1].getValue().value, this.args[2].getValue().value);
			} else if (this.command == 'gDrawLine') {
				if (context == null) throw new RuntimeError(this.first_line, "描画領域がありません");
				var x1 = this.args[0].getValue().value,
				    y1 = this.args[1].getValue().value,
				    x2 = this.args[2].getValue().value,
				    y2 = this.args[3].getValue().value;
				context.beginPath();
				context.moveTo(x1, y1);
				context.lineTo(x2, y2);
				context.stroke();
			} else if (this.command == 'gDrawBox') {
				if (context == null) throw new RuntimeError(this.first_line, "描画領域がありません");
				var _x = this.args[0].getValue().value,
				    _y = this.args[1].getValue().value,
				    width = this.args[2].getValue().value,
				    height = this.args[3].getValue().value;
				context.beginPath();
				context.strokeRect(_x, _y, width, height);
				context.stroke();
			} else if (this.command == 'gFillBox') {
				if (context == null) throw new RuntimeError(this.first_line, "描画領域がありません");
				var _x2 = this.args[0].getValue().value,
				    _y2 = this.args[1].getValue().value,
				    _width = this.args[2].getValue().value,
				    _height = this.args[3].getValue().value;
				context.fillRect(_x2, _y2, _width, _height);
			} else if (this.command == 'gDrawCircle') {
				if (context == null) throw new RuntimeError(this.first_line, "描画領域がありません");
				var _x3 = this.args[0].getValue().value,
				    _y3 = this.args[1].getValue().value,
				    _r2 = this.args[2].getValue().value;
				context.beginPath();
				context.arc(_x3, _y3, _r2, 0, Math.PI * 2, false);
				context.stroke();
			} else if (this.command == 'gFillCircle') {
				if (context == null) throw new RuntimeError(this.first_line, "描画領域がありません");
				var _x4 = this.args[0].getValue().value,
				    _y4 = this.args[1].getValue().value,
				    _r3 = this.args[2].getValue().value;
				context.arc(_x4, _y4, _r3, 0, Math.PI * 2, false);
				context.fill();
			} else {
				throw new RuntimeError(this.first_line, "未実装のコマンド" + this.command + "が使われました");
			}
			return index + 1;
		}
	}]);

	return GraphicStatement;
}(Statement);

var If = function (_Statement11) {
	_inherits(If, _Statement11);

	function If(condition, state1, state2, loc) {
		_classCallCheck(this, If);

		var _this36 = _possibleConstructorReturn(this, (If.__proto__ || Object.getPrototypeOf(If)).call(this, loc));

		_this36.condition = condition;
		_this36.state1 = state1;
		_this36.state2 = state2;
		return _this36;
	}

	_createClass(If, [{
		key: "run",
		value: function run(index) {
			if (this.condition.getValue() instanceof BooleanValue) {
				if (this.condition.getValue().value) stack.push({ statementlist: this.state1, index: 0 });else if (this.state2 != null) stack.push({ statementlist: this.state2, index: 0 });
			} else throw new RuntimeError(this.first_line, "もし?の構文で条件式が使われていません");
			return index + 1;
		}
	}]);

	return If;
}(Statement);

var LoopBegin = function (_Statement12) {
	_inherits(LoopBegin, _Statement12);

	function LoopBegin(condition, continuous, loc) {
		_classCallCheck(this, LoopBegin);

		var _this37 = _possibleConstructorReturn(this, (LoopBegin.__proto__ || Object.getPrototypeOf(LoopBegin)).call(this, loc));

		_this37.condition = condition;
		_this37.continuous = continuous;
		return _this37;
	}

	_createClass(LoopBegin, [{
		key: "run",
		value: function run(index) {
			if (this.condition == null || this.condition.getValue().value == this.continuous) return index + 1;else return -1;
		}
	}]);

	return LoopBegin;
}(Statement);

var LoopEnd = function (_Statement13) {
	_inherits(LoopEnd, _Statement13);

	function LoopEnd(condition, continuous, loc) {
		_classCallCheck(this, LoopEnd);

		var _this38 = _possibleConstructorReturn(this, (LoopEnd.__proto__ || Object.getPrototypeOf(LoopEnd)).call(this, loc));

		_this38.condition = condition;
		_this38.continuous = continuous;
		return _this38;
	}

	_createClass(LoopEnd, [{
		key: "run",
		value: function run(index) {
			if (this.condition == null || this.condition.getValue().value == this.continuous) return 0;else return -1;
		}
	}]);

	return LoopEnd;
}(Statement);

var ForInc = function (_Statement14) {
	_inherits(ForInc, _Statement14);

	function ForInc(varname, begin, end, step, state, loc) {
		_classCallCheck(this, ForInc);

		var _this39 = _possibleConstructorReturn(this, (ForInc.__proto__ || Object.getPrototypeOf(ForInc)).call(this, loc));

		_this39.varname = varname;
		_this39.begin = begin;
		_this39.end = end;
		_this39.step = step;
		_this39.state = state;
		return _this39;
	}

	_createClass(ForInc, [{
		key: "run",
		value: function run(index) {
			var last_token = { first_line: this.last_line, last_line: this.last_line };
			var last_loc = new Location(last_token, last_token);
			if (setting.var_declaration != 0 && varsInt[this.varname.varname] == undefined && varsFloat[this.varname.varname] == undefined && varsString[this.varname.varname] == undefined && varsFloat[this.varname.varname] == undefined) {
				if (this.begin.getValue() instanceof IntValue) varsInt[this.varname.varname] = 0;else if (this.begin.getValue() instanceof FloatValue) varsFloat[this.varname.varname] = 0;
			}
			if (varsInt[this.varname.varname] != undefined || varsFloat[this.varname.varname] != undefined) {
				var assign = new Assign(this.varname, this.begin.getValue(), this.loc);
				assign.run(0);
				var loop = [new LoopBegin(new LE(new Variable(this.varname.varname, null, this.loc), this.end, this.loc), true, this.loc)];
				for (var i = 0; i < this.state.length; i++) {
					loop.push(this.state[i]);
				}loop.push(new Assign(this.varname, new Add(new Variable(this.varname.varname, null, this.loc), this.step, last_loc), last_loc));
				loop.push(new LoopEnd(null, true, last_loc));
				stack.push({ statementlist: loop, index: 0 });
			} else throw new RuntimeError(this.first_line, this.varname.varname + "は数値型の変数ではありません");
			return index + 1;
		}
	}]);

	return ForInc;
}(Statement);

var ForDec = function (_Statement15) {
	_inherits(ForDec, _Statement15);

	function ForDec(varname, begin, end, step, state, loc) {
		_classCallCheck(this, ForDec);

		var _this40 = _possibleConstructorReturn(this, (ForDec.__proto__ || Object.getPrototypeOf(ForDec)).call(this, loc));

		_this40.varname = varname;
		_this40.begin = begin;
		_this40.end = end;
		_this40.step = step;
		_this40.state = state;
		return _this40;
	}

	_createClass(ForDec, [{
		key: "run",
		value: function run(index) {
			var last_token = { first_line: this.last_line, last_line: this.last_line };
			var last_loc = new Location(last_token, last_token);
			if (setting.var_declaration != 0 && varsInt[this.varname.varname] == undefined && varsFloat[this.varname.varname] == undefined && varsString[this.varname.varname] == undefined && varsFloat[this.varname.varname] == undefined) {
				if (this.begin.getValue() instanceof IntValue) varsInt[this.varname.varname] = 0;else if (this.begin.getValue() instanceof FloatValue) varsFloat[this.varname.varname] = 0;
			}
			if (varsInt[this.varname.varname] != undefined || varsFloat[this.varname.varname] != undefined) {
				var assign = new Assign(this.varname, this.begin.getValue(), this.loc);
				assign.run(0);
				var loop = [new LoopBegin(new GE(new Variable(this.varname.varname, null, this.loc), this.end, this.loc), true, this.loc)];
				for (var i = 0; i < this.state.length; i++) {
					loop.push(this.state[i]);
				}loop.push(new Assign(this.varname, new Sub(new Variable(this.varname.varname, null, this.loc), this.step, last_loc), last_loc));
				loop.push(new LoopEnd(null, true, last_loc));
				stack.push({ statementlist: loop, index: 0 });
			} else throw new RuntimeError(this.first_line, this.varname.varname + "は数値型の変数ではありません");
			return index + 1;
		}
	}]);

	return ForDec;
}(Statement);

var Until = function (_Statement16) {
	_inherits(Until, _Statement16);

	function Until(state, condition, loc) {
		_classCallCheck(this, Until);

		var _this41 = _possibleConstructorReturn(this, (Until.__proto__ || Object.getPrototypeOf(Until)).call(this, loc));

		_this41.condition = condition;
		_this41.state = state;
		return _this41;
	}

	_createClass(Until, [{
		key: "run",
		value: function run(index) {
			var last_token = { first_line: this.last_line, last_line: this.last_line };
			var loop = [new LoopBegin(null, true, this.loc)];
			for (var i = 0; i < this.state.length; i++) {
				loop.push(this.state[i]);
			}loop.push(new LoopEnd(this.condition, false, new Location(last_token, last_token)));
			stack.push({ statementlist: loop, index: 0 });
			return index + 1;
		}
	}]);

	return Until;
}(Statement);

var While = function (_Statement17) {
	_inherits(While, _Statement17);

	function While(condition, state, loc) {
		_classCallCheck(this, While);

		var _this42 = _possibleConstructorReturn(this, (While.__proto__ || Object.getPrototypeOf(While)).call(this, loc));

		_this42.condition = condition;
		_this42.state = state;
		return _this42;
	}

	_createClass(While, [{
		key: "run",
		value: function run(index) {
			var last_token = { first_line: this.last_line, last_line: this.last_line };
			var loop = [new LoopBegin(this.condition, true, this.loc)];
			for (var i = 0; i < this.state.length; i++) {
				loop.push(this.state[i]);
			}loop.push(new LoopEnd(null, false, new Location(last_token, last_token)));
			stack.push({ statementlist: loop, index: 0 });
			return index + 1;
		}
	}]);

	return While;
}(Statement);

function highlightLine(l) {
	$(".codelines").children().removeClass("lineselect");
	if (l > 0) $(".codelines :nth-child(" + l + ")").addClass("lineselect");
}

function reset() {
	varsInt = {}, varsFloat = {}, varsString = {}, varsBoolean = {};
	textarea.value = '';
	setRunflag(false);
	parse = null;
	stack = [];
	highlightLine(-1);
	var canvas = document.getElementById('canvas');
	canvas.style.display = 'none';
	context = null;
}

function setRunflag(b) {
	run_flag = b;
	//document.getElementById("sourceTextarea").readOnly = b;
}

function run() {
	if (parse == null) {
		try {
			reset();
			//var source = document.getElementById("sourceTextarea").value + "\n";
      var source1 = Blockly.Pen.workspaceToCode(Code.workspace);
			//parse = dncl.parse(source);
      //parse = dncl.parse(source);
      parse = dncl.parse(source1);
			stack.push({ statementlist: parse, index: 0 });
			setRunflag(true);
		} catch (e) {
			textareaAppend("構文エラーです\n" + e.message + "\n");
			setRunflag(false);
			parse = null;
			return;
		}
	}
	if (step_flag) {
		step();
		if (stack.length == 0) {
			textareaAppend("---\n");
			highlightLine(-1);
			setRunflag(false);
			parse = null;
		}
	} else {
		do {
			step();
		} while (stack.length > 0 && run_flag);
		if (stack.length == 0) {
			textareaAppend("---\n");
			highlightLine(-1);
			setRunflag(false);
			parse = null;
		}
	}

	function step() {
		var depth = stack.length - 1;
		var index = stack[depth].index;
		var statement = stack[depth].statementlist[index];
		if (statement) {
			try {
				index = statement.run(index);
			} catch (e) {
				textareaAppend("実行時エラーです\n" + e.line + "行目:" + e.message + "\n");
				setRunflag(false);
				parse = null;
			}
		} else index++;
		if (index < 0) index = stack[depth].statementlist.length;

		stack[depth].index = index;
		if (index > stack[depth].statementlist.length) stack.pop();
		// ハイライト行は次の実行行
		depth = stack.length - 1;
		if (depth < 0) return;
		index = stack[depth].index;
		var statement = stack[depth].statementlist[index];
		if (statement) {
			var line = statement.first_line;
			highlightLine(line);
		}
	}
}

function openInputWindow() {
	var $input = $("#input");
	var $input_overlay = $("#input-overlay");
	$input_overlay.fadeIn();
	$input.fadeIn();
	$input.html("<p>入力してください</p><input type=\"text\" id=\"inputarea\">");
	var inputarea = document.getElementById("inputarea");
	if (inputarea.addEventListener) inputarea.addEventListener("keydown", keydown);else if (inputarea.attachEvent) inputarea.attachEvent("onkeydown", keydown);
	$("#inputarea").focus();
	setRunflag(false);
}

function closeInputWindow() {
	var val = $("#input input").val();
	$("#input").hide();
	$("#input-overlay").hide();
	return val;
}

function keydown(e) {
	var evt = e || window.event;
	if (evt.keyCode == 13) {
		setRunflag(true);
		setTimeout(run(), 100);
	}
}

function editButton(add_code) {
	var sourceTextArea = document.getElementById("sourceTextarea");
	var pos = sourceTextArea.selectionStart;
	var code = sourceTextArea.value;
	var code1 = code.slice(0, pos);
	var code2 = code.slice(pos, code.length);
	var re1 = /[｜| 　]*$/;
	var re2 = /[｜| 　\n]/;
	var add_codes = add_code.split("\n");
	var tab = "";
	var array = re1.exec(code1);
	if (array != null) tab = array[0];
	//	console.log("["+code[pos]+"]");
	if (code[pos] && code[pos] != "\n" || pos > 0 && !re2.exec(code[pos - 1])) {
		alert("この位置で入力支援ボタンを押してはいけません");
		sourceTextArea.focus();
		return;
	}
	for (var c in add_codes) {
		if (c > 0) add_codes[c] = tab + add_codes[c];
	}sourceTextArea.value = code1 + add_codes.join("\n") + code2;
	sourceTextArea.selectionStart = sourceTextArea.selectionEnd = sourceTextArea.value.length - code2.length;
	sourceTextArea.focus();
}

function keyUp(e) {
	var evt = e || window.event;
	var sourceTextArea = document.getElementById("sourceTextarea");
	var pos = sourceTextArea.selectionStart;
	var code = sourceTextArea.value;
	var code1 = code.slice(0, pos);
	var code2 = code.slice(pos, code.length);
	var re1 = /《[^》《]*$/;
	var re2 = /^[^》《]*》/;
	var re3 = /\n?([｜|]*)([^｜|\n]*?)\n$/;
	var re4 = /(ならば|なければ|(の間|繰り返し|繰返し|(増|減)やし(ながら|つつ))[，,、])$/;
	var re5 = /^\n/;
	var tab = "";
	switch (evt.keyCode) {
		case 37:case 38:case 39:case 40:
			if (pos > 0) {
				var match1 = re1.exec(code1);
				var match2 = re2.exec(code2);
				if (match1 != null && match2 != null) {
					sourceTextArea.setSelectionRange(pos - match1[0].length, pos + match2[0].length);
					return false;
				}
			}
		case 13:
			// \n
			if (!re5.exec(code2)) return true;
			var match = re3.exec(code1);
			if (match) {
				tab = match[1];
				if (re4.exec(match[2])) tab = "｜" + tab;
			}
			sourceTextArea.value = code1 + tab + code2;
			pos = code1.length + tab.length;
			sourceTextArea.setSelectionRange(pos, pos);
			return false;
		default:
			//		console.log(window.event.keyCode);
			break;
	}
	return true;
}

function mouseClick() {
	var sourceTextArea = document.getElementById("sourceTextarea");
	var pos = sourceTextArea.selectionStart;
	var code = sourceTextArea.value;
	var code1 = code.slice(0, pos);
	var code2 = code.slice(pos, code.length);
	var re1 = /《[^》《]*$/;
	var re2 = /^[^》《]*》/;
	var match1 = re1.exec(code1);
	var match2 = re2.exec(code2);
	if (match1 != null && match2 != null) {
		var start = pos - match1[0].length;
		var end = pos + match2[0].length;
		sourceTextArea.setSelectionRange(start, end);
	}
}

function sampleButton(num) {
	var sourceTextArea = document.getElementById("sourceTextarea");
	sourceTextArea.value = sample[num];
	reset();
}

var sample = ["「整数と実数の違い」を表示する\n" + "11.0/2*2を表示する\n" + "11/2*2を表示する\n" + "3.0÷2.0を表示する\n" + "3÷2を表示する", "整数 a,b\n" + "a←0\n" + "b←random(8)+1\n" + "「1から9の数字を当ててください」を表示する\n" + "繰り返し，\n" + "｜aを入力する\n" + "｜aを表示する\n" + "｜もしa>bならば\n" + "｜｜「大きい」を表示する\n" + "｜を実行し，そうでなければ\n" + "｜｜もしa<bならば\n" + "｜｜｜「小さい」を表示する\n" + "｜｜を実行する\n" + "｜を実行する\n" + "を，a=bになるまで実行する\n" + "「あたり」を表示する", "整数 a,b,c[5]\n" + "「サイコロを60回振って出た目の回数を数えるシミュレーション」を表示する\n" + "aを1から60まで1ずつ増やしながら，\n" + "｜b←random(5)\n" + "｜c[b]←c[b]+1\n" + "を繰り返す\n" + "bを0から5まで1ずつ増やしながら，\n" + "｜c[b]を表示する\n" + "を繰り返す", "整数 a,b\n" + "a←1\n" + "bを1から100まで1ずつ増やしながら，\n" + "｜a←a*b\n" + "｜bと「!=」とaを表示する\n" + "を繰り返す", "整数 a,b\n" + "描画領域開く(200,200)\n" + "aを1から100まで1ずつ増やしながら，\n" + "｜線色設定(random(255),random(255),random(255))\n" + "｜円描画(random(200),random(200),random(30)+1)\n" + "を繰り返す", "整数 tyotensu,hensosu,Siten[22],Syuten[22],kotae,i,j,x,y\n" + "文字列 Hen[8,8],Senbun[22],HenData[8]\n" + "HenData[1] ← 「-AB-A-AB」\n" + "HenData[2] ← 「---CA-AC」\n" + "HenData[3] ← 「---E-EEB」\n" + "HenData[4] ← 「-----EEC」\n" + "HenData[5] ← 「-----DAD」\n" + "HenData[6] ← 「------ED」\n" + "HenData[7] ← 「-------F」\n" + "HenData[8] ← 「--------」\n" + "i を 1 から 8 まで 1 ずつ増やしながら，\n" + "｜j を 1 から 8 まで 1 ずつ増やしながら，\n" + "｜｜Hen[i,j] ← substring(HenData[i],j-1,1)\n" + "｜を繰り返す\n" + "を繰り返す\n" + "tyotensu ← 8\n" + "hensosu ← 0\n" + "i を 1 から tyotensu-1 まで 1 ずつ増やしながら，\n" + "｜j を i+1 から tyotensu まで 1 ずつ増やしながら，\n" + "｜｜もし Hen[i,j]!=「-」 ならば\n" + "｜｜｜hensosu ← hensosu+1\n" + "｜｜｜Siten[hensosu] ← i\n" + "｜｜｜Syuten[hensosu] ← j\n" + "｜｜｜Senbun[hensosu] ← Hen[i,j]\n" + "｜｜を実行する\n" + "｜を繰り返す\n" + "を繰り返す\n" + "kotae ← 0\n" + "x を 1 から hensosu-2 まで 1 ずつ増やしながら，\n" + "｜y ← x+1\n" + "｜Siten[x]=Siten[y] の間，\n" + "｜｜もし Senbun[x]!=Senbun[y] かつ Hen[Syuten[x],Syuten[y]]!=「-」 ならば\n" + "｜｜｜kotae ← kotae+1\n" + "｜｜を実行する\n" + "｜｜y ← y+1\n" + "｜を繰り返す\n" + "を繰り返す\n" + "「三角形の個数は」とkotae を表示する\n"];

function insertCode(add_code) {
	var sourceTextArea = document.getElementById("sourceTextarea");
	var pos1 = sourceTextArea.selectionStart;
	var pos2 = sourceTextArea.selectionEnd;
	var code = sourceTextArea.value;
	var code1 = code.slice(0, pos1);
	var code2 = code.slice(pos2, code.length);
	sourceTextArea.value = code1 + add_code + code2;
}

//ブロックを保存する
function save(){
  var fileName = "myprogram";
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var xmltext = Blockly.Xml.domToPrettyText(xml);
  var blob = new Blob([xmltext],{
    type: 'text/xml'
  });
  //インベントリがbuttonタグなので、aタグを生成
  var a = document.createElement("a");
  a.href = window.URL.createObjectURL(blob);
  a.download = fileName + ".xml";
  a.click();
  window.URL.revokeObjectURL(a.href); //blobとobjectURLの関連を削除(メモリ解放)
}

//ブロックを読みだす
function load() {
  var input = document.createElement("input");
  input.type = "file";
  input.id = "loadFile";
  input.accept = "text/xml";

  input.addEventListener("change", function(event) {
    var file = event.target.files[0]; // inputから取得したFileListオブジェクトから読み込んだFileオブジェクトを取得
    var reader = new FileReader(); // Fileオブジェクトの情報を読み込むためにFileReaderオブジェクトを生成する
    reader.readAsText(file); // FileReaderオブジェクトにFileオブジェクトのテキスト情報を読み込む
    reader.onload = function() {
      var xml = Blockly.Xml.textToDom(reader.result); // readAsTextで読み込んだ情報はreader.resultで取得できる
      Blockly.mainWorkspace.clear();
      Blockly.Xml.domToWorkspace(xml,Blockly.mainWorkspace);
    };
    // たまにファイル読み込みに失敗するが原因不明
    // reader.onerror = function() {
    //   console.log("readError")
    // };
    // reader.onabort = function() {
    //   console.log("readError")
    // };
  }, false);
  input.click();
};


onload = function onload() {
	//var sourceTextArea = document.getElementById("sourceTextarea");
	var resultTextArea = document.getElementById("resultTextarea");
	//var parseButton = document.getElementById("parseButton");
	var newButton = document.getElementById("newButton");
	var runButton = document.getElementById("runButton");
	var resetButton = document.getElementById("resetButton");
	//var stepButton = document.getElementById("stepButton");
	var loadButton = document.getElementById("loadButton");
	//var file_prefix = document.getElementById("file_prefix");
  var saveButton = document.getElementById("saveButton");

  var start = '<xml><block type="start" deletable="false"></block></xml>';
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(start), Blockly.mainWorkspace);
  Blockly.mainWorkspace.addChangeListener(Blockly.Events.disableOrphans);

	$("#sourceTextarea").linedtextarea();
	textarea = resultTextArea;

	/*parseButton.onclick = function () {
		var source = sourceTextArea.value + "\n";
		try {
			resultTextArea.value = '';
			parse = dncl.parse(source);
			resultTextArea.value = toString(parse);
		} catch (e) {
			resultTextArea.value += "構文エラーです\n" + e.message;
		} finally {
			parse = null;
		}
	}; */

//ブロックを保存する
  saveButton.onclick = function () {
    save();
  };
//ブロックを読みだす　load()未実装
   loadButton.onclick = function () {
     load();
   };
//プログラムを実行する
	runButton.onclick = function () {
		step_flag = false;
		run();
	};
//ブロックを削除する
  resetButton.onclick = function () {
    reset();
  };
  /*
	stepButton.onclick = function () {
		step_flag = true;
		run();
	};

	newButton.onclick = function () {
		sourceTextArea.value = "";
		parse = null;
		reset();
	};
  */

/*
	loadButton.addEventListener("change", function (ev) {
		var file = ev.target.files;
		var reader = new FileReader();
		reader.readAsText(file[0], "UTF-8");
		reader.onload = function (ev) {
			sourceTextArea.value = reader.result;
			reset();
		};
	}, false);

	downloadLink.onclick = function () {
		var now = new Date();
		var filename = file_prefix.value.trim();
		if (filename.length < 1) filename = now.getFullYear() + ('0' + (now.getMonth() + 1)).slice(-2) + ('0' + now.getDate()).slice(-2) + '_' + ('0' + now.getHours()).slice(-2) + ('0' + now.getMinutes()).slice(-2) + ('0' + now.getSeconds()).slice(-2);
		filename += '.PEN';
		var blob = new Blob([sourceTextArea.value], { type: "text/plain" });
		if (window.navigator.msSaveBlob) {
			window.navigator.msSaveBlob(blob, filename);
		} else {
			window.URL = window.URL || window.webkitURL;
			downloadLink.setAttribute("href", window.URL.createObjectURL(blob));
			downloadLink.setAttribute("download", filename);
		}
	};
  */
	//if (sourceTextArea.addEventListener) sourceTextArea.addEventListener("keyup", keyUp);else if (sourceTextArea.attachEvent) sourceTextArea.attachEvent("onkeyup", keyUp);

	$.contextMenu({
		selector: "#sourceTextarea",
		//			callback: function(k,e){},
		items: {
			copyAll: { name: "全コピー", callback: function callback(k, e) {
					document.getElementById("sourceTextarea").select();document.execCommand('copy');
				}
			},
			zenkaku: { name: "入力補助",
				items: {
					かつ: { name: "かつ", callback: function callback(k, e) {
							insertCode("《値》 かつ 《値》");
						} },
					または: { name: "または", callback: function callback(k, e) {
							insertCode("《値》 または 《値》");
						} },
					でない: { name: "でない", callback: function callback(k, e) {
							insertCode("《値》 でない");
						} },
					と: { name: "と", callback: function callback(k, e) {
							insertCode("《値》と《値》");
						} },
					カッコ: { name: "「」", callback: function callback(k, e) {
							insertCode("「《値》」");
						} }
				}
			},
			math: { name: "数学関数",
				items: {
					abs: { name: "abs 絶対値", callback: function callback(k, e) {
							insertCode("abs(《値》)");
						} },
					random: { name: "random 乱数", callback: function callback(k, e) {
							insertCode("random(《整数》)");
						} },
					ceil: { name: "ceil 切り上げ", callback: function callback(k, e) {
							insertCode("ceil(《実数》)");
						} },
					floor: { name: "floor 切り捨て", callback: function callback(k, e) {
							insertCode("floor(《実数》)");
						} },
					round: { name: "round 四捨五入", callback: function callback(k, e) {
							insertCode("round(《実数》)");
						} },
					sin: { name: "sin サイン", callback: function callback(k, e) {
							insertCode("sin(《実数》)");
						} },
					cos: { name: "cos コサイン", callback: function callback(k, e) {
							insertCode("cos(《実数》)");
						} },
					tan: { name: "tan タンジェント", callback: function callback(k, e) {
							insertCode("tan(《実数》)");
						} },
					sqrt: { name: "sqrt ルート", callback: function callback(k, e) {
							insertCode("sqrt(《実数》)");
						} },
					log: { name: "log 自然対数", callback: function callback(k, e) {
							insertCode("log(《実数》)");
						} },
					exp: { name: "exp ", callback: function callback(k, e) {
							insertCode("sqrt(《実数》)");
						} },
					pow: { name: "pow", callback: function callback(k, e) {
							insertCode("pow(《実数》,《実数》)");
						} }
				}
			},
			str: { name: "文字列関数",
				items: {
					length: { name: "length 長さ", callback: function callback(k, e) {
							insertCode("length(《文字列》)");
						} },
					append: { name: "append 文字列結合", callback: function callback(k, e) {
							insertCode("append(《文字列》,《文字列》)");
						} },
					substring1: { name: "substring 部分文字列（最後まで）", callback: function callback(k, e) {
							insertCode("substring(《文字列》,《開始位置》)");
						} },
					substring2: { name: "substring 部分文字列（長さ指定）", callback: function callback(k, e) {
							insertCode("substring(《文字列》,《開始位置》,《長さ》)");
						} },
					extract: { name: "extract 部分文字列（長さ指定）", callback: function callback(k, e) {
							insertCode("extract(《文字列》,《区切文字列》,《番号》)");
						} },
					insert: { name: "insert 挿入", callback: function callback(k, e) {
							insertCode("insert(《文字列》,《位置》,《文字列》)");
						} },
					replace: { name: "replace 置換", callback: function callback(k, e) {
							insertCode("replace(《文字列》,《位置》,《長さ》,《文字列》)");
						} }
				}
			},
			graphic: { name: "グラフィック命令",
				items: {
					gOpenWindow: { name: "描画領域開く", callback: function callback(k, e) {
							insertCode("描画領域開く(《幅》,《高さ》)");
						} },
					gCloseWindow: { name: "描画領域閉じる", callback: function callback(k, e) {
							insertCode("描画領域閉じる()");
						} },
					gClearWindow: { name: "描画領域全消去", callback: function callback(k, e) {
							insertCode("描画領域全消去()");
						} },
					gSetLineColor: { name: "線色設定", callback: function callback(k, e) {
							insertCode("線色設定(《赤》,《青》,《緑》)");
						} },
					gSetFillColor: { name: "塗色設定", callback: function callback(k, e) {
							insertCode("塗色設定(《赤》,《青》,《緑》)");
						} },
					gSetLineWidth: { name: "線太さ設定", callback: function callback(k, e) {
							insertCode("線太さ設定(《太さ》)");
						} },
					gSetFontSize: { name: "文字サイズ設定", callback: function callback(k, e) {
							insertCode("文字サイズ設定(《サイズ》)");
						} },
					gDrawText: { name: "文字描画", callback: function callback(k, e) {
							insertCode("文字描画(《文字列》,《x》,《y》)");
						} },
					gDrawLine: { name: "線描画", callback: function callback(k, e) {
							insertCode("線描画(《x1》,《y1》,《x2》,《y2》)");
						} },
					gDrawBox: { name: "矩形描画", callback: function callback(k, e) {
							insertCode("矩形描画(《x》,《y》,《幅》,《高さ》)");
						} },
					gFillBox: { name: "矩形塗描画", callback: function callback(k, e) {
							insertCode("矩形塗描画(《x》,《y》,《幅》,《高さ》)");
						} },
					gDrawCircle: { name: "円描画", callback: function callback(k, e) {
							insertCode("円描画(《x》,《y》,《半径》)");
						} },
					gFillCircle: { name: "円塗描画", callback: function callback(k, e) {
							insertCode("円塗描画(《x》,《y》,《半径》)");
						} }
				}
			}
		}
	});
};
