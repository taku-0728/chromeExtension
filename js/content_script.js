$(function(){
    // ボタンを生成
    var $button = $('<dic class="switch-preview-button">∆</div>');

    // ボタンのクリック時イベント
    $button.on("click", function (){
        var url = location.href;
        url = url.replace("/edit", "/TEMP")
            .replace("/preview", "/edit")
            .replace("/TEMP", "/preview");
        location.href = url;
    });

    // ボタンを画面上に表示
    $("body").append($button);
})