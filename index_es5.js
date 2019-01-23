"use strict";

/**
 * WaPENのコードを上書き
 */
function openInputWindow() {
  var $input = $("#input");
  var $input_overlay = $("#input-overlay");
  setRunflag(false);
  $input_overlay.fadeIn();
  $input.fadeIn();
  //var inputarea = document.getElementById("inputarea");
  //if(inputarea.addEventListener) inputarea.addEventListener("keydown", keydown);
  //else if(inputarea.attachEvent) inputarea.attachEvent("onkeydown", keydown);
  $("#inputarea").focus();
  $("#inputarea").val('');
}

function setRunflag(b) {
  run_flag = b;
}

function run() {
  if (code == null) {
    try {
      reset();
      var source = Blockly.Pen.workspaceToCode(Code.workspace);
      code = [new parsedMainRoutine(dncl.parse(source))];
    } catch (e) {
      console.log(e);
      textareaAppend("構文エラーです\n" + e.message + "\n");
      setRunflag(false);
      code = null;
      return;
    }
  }
  setRunflag(true);
  step();
}

onload = function onload() {
  var resultTextArea = document.getElementById("resultTextarea");
  var runButton = document.getElementById("runButton");
  var flowchartButton = document.getElementById("flowchartButton");
  //var stepButton    = document.getElementById("stepButton");
  var file_prefix = document.getElementById("file_prefix");
  var flowchart_canvas = document.getElementById("flowchart");
  // trashButtonはcode.jsのCode.bindClick()で紐づけされている
  Code.discard();
  Code.workspace.addChangeListener(Blockly.Events.disableOrphans);
  textarea = resultTextArea;
  runButton.onclick = function () {
    if (run_flag && !step_flag) {
      setRunflag(false);
    } else {
      step_flag = false;
      run();
    }
  };
  // this code is from David Baron's Weblog
  // https://dbaron.org/log/20100309-faster-timeouts
  //  var timeouts = [];
  var messageName = "zero-timeout-message";

  // Like setTimeout, but only takes a function argument.  There's
  // no time argument (always zero) and no arguments (you have to
  // use a closure).
  function setZeroTimeout(fn) {
    timeouts.push(fn);
    window.postMessage(messageName, "*");
  }

  function handleMessage(event) {
    if (event.source == window && event.data == messageName) {
      event.stopPropagation();
      if (timeouts.length > 0) {
        var fn = timeouts.shift();
        fn();
      }
    }
  }

  if (window.addEventListener) window.addEventListener("message", handleMessage, true);else if (window.attachEvent) window.attachEvent("onmessage", handleMessage);

  // Add the one thing we want added to the window object.
  window.setZeroTimeout = setZeroTimeout;

  $(window).bind("beforeunload", function () {
    if (dirty) return "プログラムが消去されます";
  });
};

/**
 * ステップ実行するモジュール
 */
/*
const stepButton = document.getElementById('stepButton');
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

let resetStepUi = function() {
  workspace.highlightBlock(null);
  highlightPause = false;
}

function generateCodeAndLoadIntoInterpreter() {
  Blockly.Pen.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
  Blockly.Pen.addReservedWords('highlightBlock');
  latestCode = Blockly.Pen.workspaceToCode(workspace);
//        const source = Blockly.Pen.workspaceToCode(Code.workspace);
//  resetStepUi(true);
}

let stepCode = function() {
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
        resetStepUi();
        stepButton.disabled = 'disabled';
        setTimeout(function() {
          stepButton.disabled = '';
        }, 2000);
        return;
      }
    }
  } while (hasMoreCode && !highlightPause);
};

stepButton.onclick = function() {
  stepCode();
};

generateCodeAndLoadIntoInterpreter();
workspace.addChangeListener(function(event) {
  if (!(event instanceof Blockly.Events.Ui)) {
    generateCodeAndLoadIntoInterpreter();
  }
});
*/

/**
 * ブロックを保存するモジュール
 */
function saveBlocks() {
  var fileName = 'myprogram.xml';
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var xmltext = Blockly.Xml.domToPrettyText(xml);
  var blob = new Blob([xmltext], {
    type: 'text/xml'
  });
  var a = document.createElement('a');
  a.download = fileName;
  if (window.navigator.msSaveBlob) {
    // for IE and Edge
    window.navigator.msSaveBlob(blob, fileName);
  } else if (window.URL && window.URL.createObjectURL) {
    // for Firefox and Chrome
    a.href = window.URL.createObjectURL(blob);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(a.href);
  } else {
    // for Safari (未検証)
    window.open('data:' + mimeType + ';base64,' + window.Base64.encode(content), '_blank');
  }
};
document.getElementById('saveButton').onclick = function () {
  saveBlocks();
};

/**
 * ブロックを読み込むモジュール
 */
function loadBlocks() {
  var input = document.createElement("input");
  input.type = "file";
  input.id = "loadFile";
  input.accept = "text/xml";

  input.addEventListener("change", function (event) {
    var file = event.target.files[0]; // inputから取得したFileListオブジェクトから読み込んだFileオブジェクトを取得
    var reader = new FileReader(); // Fileオブジェクトの情報を読み込むためにFileReaderオブジェクトを生成する
    reader.readAsText(file); // FileReaderオブジェクトにFileオブジェクトのテキスト情報を読み込む
    reader.onload = function () {
      var xml = Blockly.Xml.textToDom(reader.result); // readAsTextで読み込んだ情報はreader.resultで取得できる
      Blockly.mainWorkspace.clear();
      Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);
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
document.getElementById('loadButton').onclick = function () {
  loadBlocks();
};

/**
 * 実行結果をリセットするモジュール
 */
document.getElementById('resetButton').onclick = function () {
  reset();
};

/**
 * 変数カテゴリのモジュール
 */
/*
window.addEventListener('load', function() {
  const buttonName = '変数を作成する';
  Code.workspace.registerToolboxCategoryCallback('MYVARIABLE', function(workspace) {
    var vars = Blockly.Variables.getAddedVariables(Code.workspace, []);
    var xmlList = [];
    var buttonText = '<xml>' +
      '<button text="' + buttonName + '" callbackKey="CreateVariableButton"></button>' +
      '</xml>';
    var button = Blockly.Xml.textToDom(buttonText).firstChild;
    xmlList.push(button);
    var numOfVar = Blockly.Variables.getAddedVariables(Code.workspace, []).length;
    if (numOfVar > 0) {
      var declarerText = '<xml>' +
        '<block type="variable_declare">' +
        '<field name="VAR">' + vars[vars.length-1].name + '</field>' +
        '</block>' +
        '</xml>';
      var declarer = Blockly.Xml.textToDom(declarerText).firstChild;
      xmlList.push(declarer);
      var setterText = '<xml>' +
        '<block type="variable_set">' +
        '<field name="VAR">' + vars[vars.length-1].name + '</field>' +
        '</block>' +
        '</xml>';
      var setter = Blockly.Xml.textToDom(setterText).firstChild;
      xmlList.push(setter);
    }
    for (let i = 0; i < numOfVar; i++) {
      var getterText = '<xml>' +
        '<block type="variable_get">' +
        '<field name="VAR">' + vars[i].name + '</field>' +
        '</block>' +
        '</xml>';
      var getter = Blockly.Xml.textToDom(getterText).firstChild;
      xmlList.push(getter);
    }
    return xmlList;
  });
  Code.workspace.registerButtonCallback('CreateVariableButton', function(button) {
    Blockly.Variables.createVariable(button.getTargetWorkspace(), null, null);
  });
}, false);
*/
/**
 * 変数宣言が必要かチェックするモジュール
 */
var isDeclarationNecessary = document.varForm.isDeclarationNecessary;
isDeclarationNecessary.checked = true;
setting.var_declaration = 0;
isDeclarationNecessary.addEventListener('change', function () {
  if (this.checked) {
    setting.var_declaration = 0;
  } else {
    setting.var_declaration = 1;
  }
});

/**
 * ツールボックスのレベルを変更するモジュール
 */
function changeToolboxLevel() {
  /**
   * toolboxのidをtoolbox4Debuggerとかにしようとしてたけどcode.jsでは
   * toolbox0がデフォでそんまま使いたいのでコメントアウト
   */
  /*
  let who = document.learnerLevelForm.level.value;
  who = who.charAt(0).toUpperCase() + who.slice(1); // 頭文字を大文字に変換
  const toolbox = document.getElementById('toolbox4' + who);
  */
  var value = document.learnerLevelForm.level.value;
  var toolbox = void 0;
  switch (value) {
    case 'debugger':
      toolbox = document.getElementById('toolbox0');
      break;
    case 'beginner':
      toolbox = document.getElementById('toolbox1');
      break;
    case 'intermediate':
      toolbox = document.getElementById('toolbox2');
      break;
    default:
      console.log('Unknown Learner Level');
      return;
      break;
  }
  var toolboxText = toolbox.outerHTML.replace(/{(\w+)}/g, function (m, p1) {
    return MSG[p1];
  });
  var toolboxXml = Blockly.Xml.textToDom(toolboxText);
  Code.workspace.updateToolbox(toolboxXml);
}
function initToolboxes() {
  var toolboxesFor = ['Debugger', 'Beginner', 'Intermediate'];
  var toolbox = void 0;
  var usageCategory = document.getElementById('usageXml').firstElementChild;
  var sampleCategory = document.getElementById('sampleXml').firstElementChild;
  for (var i = 0; i < toolboxesFor.length; i++) {
    toolbox = document.getElementById('toolbox' + i);
    toolbox.appendChild(document.createElement('sep'));
    toolbox.appendChild(usageCategory.cloneNode(true));
    toolbox.appendChild(sampleCategory.cloneNode(true));
  }
  /*
  for (const who of toolboxesFor) {
    toolbox = document.getElementById('toolbox4' + who);
    toolbox.appendChild(document.createElement('sep'));
    toolbox.appendChild(sampleXml.cloneNode(true));
  }
  */
}
window.addEventListener('load', function () {
  document.learnerLevelForm.addEventListener('change', changeToolboxLevel);
  initToolboxes();
  changeToolboxLevel();
});

/**
 * 設定ボタンに関するモジュール
 */
function showHide4SettingMenu() {
  var settingMenu = document.getElementById('settingMenu');
  settingMenu.style.display = settingMenu.style.display === 'none' ? '' : 'none';
}
function hide4SettingMenu() {
  document.getElementById('settingMenu').style.display = 'none';
}
document.addEventListener('click', function (event) {
  var clickedSettingButton = $(event.target).closest('#settingButton').length;
  var clickedSettingMenu = $(event.target).closest('#settingMenu').length;
  if (clickedSettingButton) {
    showHide4SettingMenu();
  } else if (!clickedSettingMenu) {
    hide4SettingMenu();
  }
});
hide4SettingMenu();

/**
 * DNCLを表示するモジュール
 */
function showDNCL() {
  var content = document.getElementById('contentDncl');
  var code = Blockly.Pen.workspaceToCode(Code.workspace);
  content.textContent = code;
}
window.addEventListener('load', function () {
  Code.workspace.addChangeListener(showDNCL);
});
