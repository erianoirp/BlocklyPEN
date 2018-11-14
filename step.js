const workspace = Blockly.inject('content_block',
  {toolbox: document.getElementById('toolbox')}
);
let interpreter = null;

function initApi(_interpreter, _scope) {
  let wrapper;
  wrapper = function(_id) {
    _id = _id ? _id.toString() : '';
    return _interpreter.createPrimitive(highlightBlock(_id));
  };
  _interpreter.setProperty(_scope, 'highlightBlock',
    _interpreter.createNativeFunction(wapper)
  );
}

let highlightPause = false;
let latestCode = '';

function highlightBlock(_id) {
  workspace.highlightBlock(_id);
  highlightPause = true;
}

function generateCodeAndLoadIntoInterpreter() {
  Blockly.Pen.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
  Blockly.Pen.addReservedWords('highlightBlock');
  latestCode = Blockly.Pen.workspaceToCode(--------);
}

const stepButton = document.getElementById("stepButton");
stepButton.onclick = function() {
  if (!interpreter) {
    interpreter = new Interpreter(latestCode, initApi);
  }
  highlightPause = false;
  let hasMoreCode;
  do {
    try {
      hasMoreCode = interpreter.step();
    } finally {
      if (!hasMoreCode) {
        interpreter = null;
        return;
      }
    }
  } while (hasMoreCode && !highlightPause);
};

generateCodeAndLoadIntoInterpreter();
workspace.addChangeListener(function(event) {
  if (!(event instanceof Blockly.Events.Ui)) {
    generateCodeAndLoadIntoInterpreter();
  }
};
