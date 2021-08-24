(function () {
    //指定した要素を取り除いたり非表示にする
    removeElements();

    //最初のリンクにフォーカス
    skipToContent();

    //addEventListenerの重複防止の為にbodyのclassListにクラスを追加し、実行時に検証する
    const CLASS_ALREADY_ADDED = "class-already-added";
    var checkStyle = document.querySelector("body");
    //検証用クラスが追加されてればreturn
    if (checkStyle.classList.contains(CLASS_ALREADY_ADDED)) {
        return;
    } else {
        //検証用のクラス追加
        checkStyle.classList.add(CLASS_ALREADY_ADDED);
        //１.３倍ズームのCSS追加
        addZoomStyle();
        //フォーカス中リンクの下線スタイル
        addFocusStyle();
        //'w'と's'の入力を監視し、検出でフォーカス移動
        listenKeyEvent();
    }
}());


//関数達⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎

//-----------------------------------------------------------------------------------------
//'w'と's'の入力を監視し、検出でフォーカス移動
function listenKeyEvent() {
    var i = 0;
    document.querySelector("#center_col").addEventListener("keydown", function (event) {
        //全リンクを取得
        var nodes = document.querySelectorAll(".yuRUbf");
        //nodelistを配列化
        nodes = Array.from(nodes);
        //フォーカス中リンクの現在地を常に取得 i
        var i = nodes.indexOf(document.activeElement.parentNode);
        if (event.key === "s") {
            if (nodes[parseInt(i) + 1]) {
                var nextLink = nodes[i + 1].firstElementChild;
                nextLink.focus();
                nextLink.scrollIntoView({
                    behavior: "instant",
                    block: "center"
                });
                i = i + 1;
                //最後のリンクだったら「次へ」をフォーカス
            } else if (i === nodes.length - 1) {
                i = nodes.length;
                document.querySelector("#pnnext").focus();
            }
        } else if (event.key === "w") {
            if (document.activeElement === document.querySelector("#pnnext")) {
                i = nodes.length;
            }
            if (node = nodes[i - 1]) {
                var previousLink = nodes[i - 1].firstElementChild;
                previousLink.focus();
                previousLink.scrollIntoView({
                    behavior: "instant",
                    block: "center"
                });
                i = i - 1;
            }
        };
    })
}

//-----------------------------------------------------------------------------------------
//最初のリンクにフォーカス
function skipToContent() {
    var nodes = document.querySelectorAll(".yuRUbf");
    if (nodes.length) {
        nodes[0].firstElementChild.focus();
    }
}

//-----------------------------------------------------------------------------------------
//１.３倍ズームのCSS追加
function addZoomStyle() {
    var newStyleZoom = document.createElement('style');
    newStyleZoom.type = 'text/css';
    newStyleZoom.innerText = 'html{transform-origin: top left; transform: scale(1.3);}';
    document.getElementsByTagName('HEAD').item(0).appendChild(newStyleZoom);
}

//-----------------------------------------------------------------------------------------
//フォーカス中リンクの下線スタイル
function addFocusStyle() {
    var newStyleFocus = document.createElement('style');
    newStyleFocus.type = 'text/css';
    newStyleFocus.innerText = 'a:focus{outline: none; border-bottom: 5px solid red; }';
    document.getElementsByTagName('HEAD').item(0).appendChild(newStyleFocus);
}

//-----------------------------------------------------------------------------------------
//指定した要素を取り除いたり非表示にする
function removeElements() {
    if (document.querySelectorAll(".ULSxyf")) {
        document.querySelectorAll(".ULSxyf").forEach(node => {
            node.remove();
        });
    };

    if (document.querySelector(".jmjoTe")) {
        document.querySelector(".jmjoTe").remove();
    }

    if (document.querySelector(".ACRAdd")) {
        document.querySelector(".ACRAdd").remove();
    }

    if (document.querySelector("#rhs")) {
        document.querySelector("#rhs").remove();
    }

    var nodes = document.querySelectorAll(".rGhul.IHSDrd");
    if (nodes.length) {
        nodes.forEach(node => {
            node.remove();
        });
    };

    if (document.querySelector("#appbar")) {
        document.querySelector("#appbar").remove();
    };

    if (document.querySelector(".Okagcf")) {
        document.querySelector(".Okagcf").remove()
    };


    var nodes = document.querySelectorAll(".GHDvEf");
    if (nodes.length) {
        nodes.forEach(node => {
            node.remove();
        });
    };

    var nodes = document.querySelectorAll('[jscontroller="K6HGfd"]');
    if (nodes.length) {
        nodes.forEach(node => {
            node.remove();
        });
    };

    var translateLinks = document.querySelectorAll(".fl.iUh30");
    if (translateLinks.length) {
        translateLinks.forEach(link => {
            link.remove();
        });
    };

    if (document.querySelector(".logo").querySelector("a")) {
        document.querySelector(".logo").querySelector("a").remove();
    };

    var nodes = document.querySelectorAll(".cUezCb.luh4tb.O9g5cc.uUPGi");
    if (nodes.length) {
        nodes.forEach(node => {
            node.remove();
        });
    };

    if (document.querySelector('.Tg7LZd')) {
        document.querySelector('.Tg7LZd').remove();
    };

    if (document.querySelector("#botstuff")) {
        document.querySelector("#botstuff").remove();
    }

    if (document.querySelector('[jscontroller="unV4T"]')) {
        document.querySelector('[jscontroller="unV4T"]').remove();
    };

    if (document.querySelector('[jscontroller="qik19b"]')) {
        document.querySelector('[jscontroller="qik19b"]').remove();
    };

    if (document.querySelectorAll(".Q3DXx")[1]) {
        document.querySelectorAll(".Q3DXx")[1].remove();
    };

    if (document.querySelector(".FyYA1e.IThcWe")) {
        document.querySelector(".FyYA1e.IThcWe").remove();
    };

    var nodes = document.querySelectorAll(".fl.iUh30");
    if (nodes.length) {
        nodes.forEach(node => {
            node.remove();
        })
    };
}
//-----------------------------------------------------------------------------------------