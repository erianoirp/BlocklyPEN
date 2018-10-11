// テキストエリア:<br>
<textarea id="textarea_01" style="width:100%; height:100px; margin:0px 0px 5px 0px;">あいうえお
かきくけこ
さしすせそ</textarea>

<input id="button_01" type="button"  style="width:100%; height:50px; margin:0px 0px 10px 0px;" value="クリップボードにコピー">

// リザルト:<br>
<textarea id="result_01" style="width:100%; height:200px; margin:0px 0px 5px 0px;" disabled></textarea>

<script type="text/javascript">
<!--
// 匿名関数内で実行
(function (){

	if(!window.addEventListener) return;

	// ------------------------------------------------------------
	// 各エレメントを取得
	// ------------------------------------------------------------
	var textarea = document.getElementById("textarea_01");
	var button = document.getElementById("button_01");
	var result = document.getElementById("result_01");

	// ------------------------------------------------------------
	// カット/コピー/ペースト操作が行われると実行されるイベント
	// ------------------------------------------------------------
	var handle = function(e){
		var str = "type:\"" + e.type + "\" timeStamp:" + e.timeStamp;
		result.value = str + "\n" + result.value;
	};
	textarea.addEventListener("beforecut" , handle);
	textarea.addEventListener("beforecopy" , handle);
	textarea.addEventListener("beforepaste" , handle);
	textarea.addEventListener("cut" , handle);
	textarea.addEventListener("copy" , handle);
	textarea.addEventListener("paste" , handle);

	// ------------------------------------------------------------
	// クリックした時に実行されるイベント
	// ------------------------------------------------------------
	button.addEventListener("click" , function(e){

		// テキストエリアをすべて選択
		textarea.select();

		// ブラウザのカット処理を実行する
		document.execCommand("copy");

	});

})();
//-->
</script>