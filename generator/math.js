//WaPENで使用できる
Blockly.Pen['calculation'] = function(block) {
  var val1 = Blockly.Pen.valueToCode(block, 'val1', Blockly.Pen.ORDER_ATOMIC);
  var calculation = block.getFieldValue('calculation');
  var val2 = Blockly.Pen.valueToCode(block, 'val2', Blockly.Pen.ORDER_ATOMIC);
  var code = val1 + ' ' +  calculation + ' ' + val2;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['plus_minus'] = function(block) {
  var value1 = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_ATOMIC);
  var value2 = Blockly.Pen.valueToCode(block, 'VALUE2', Blockly.Pen.ORDER_ATOMIC);
  var operator = block.getFieldValue('OPERATOR1');
  var code = value1 + ' ' +  operator + ' ' + value2;
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['random'] = function(block) {
  var val = Blockly.Pen.valueToCode(block, 'val', Blockly.Pen.ORDER_ATOMIC);
  var code = 'random(' + val +  ')';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['abs'] = function(block) {
  var value = Blockly.Pen.valueToCode(block, 'VALUE', Blockly.Pen.ORDER_FUNCTION_CALL);
  var code = 'abs(' + value + ')';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['round'] = function(block) {
  var kind = block.getFieldValue('KIND');
  var value = Blockly.Pen.valueToCode(block, 'VALUE', Blockly.Pen.ORDER_FUNCTION_CALL);
  var code = kind + '(' + value + ')';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['trigonometric'] = function(block) {
  var kind = block.getFieldValue('KIND');
  var value = Blockly.Pen.valueToCode(block, 'VALUE', Blockly.Pen.ORDER_FUNCTION_CALL);
  var code = kind + '(' + value + ')';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['sqrt'] = function(block) {
  var value = Blockly.Pen.valueToCode(block, 'VALUE', Blockly.Pen.ORDER_FUNCTION_CALL);
  var code = 'sqrt(' + value + ')';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['log'] = function(block) {
  var value = Blockly.Pen.valueToCode(block, 'VALUE', Blockly.Pen.ORDER_FUNCTION_CALL);
  var code = 'log(' + value + ')';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['exp'] = function(block) {
  var value = Blockly.Pen.valueToCode(block, 'VALUE', Blockly.Pen.ORDER_FUNCTION_CALL);
  var code = 'exp(' + value + ')';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['pow'] = function(block) {
  var value1 = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_FUNCTION_CALL);
  var value2 = Blockly.Pen.valueToCode(block, 'VALUE2', Blockly.Pen.ORDER_FUNCTION_CALL);
  var code = 'pow(' + value1 + ',' + value2 + ')';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['formula'] = function(block) {
  var formula = block.getFieldValue('VALUE1');
  var code = formula;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

