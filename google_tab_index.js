javascript: (() => {

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

    var nodes = document.querySelectorAll(".yuRUbf");
    if (nodes.length){
        nodes.forEach(node => {
            if (node.querySelector(".GHDvEf")) {
                node.querySelector(".GHDvEf").remove();
            };
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

    if (document.querySelector(".jmjoTe")) {
        document.querySelector(".jmjoTe").remove();
    };

        var nodes = document.querySelectorAll(".HiHjCd");
        if (nodes.length) {
            nodes.forEach(node => {
                node.remove();
            });
        };

        var nodes = document.querySelectorAll(".ULSxyf");
        if (nodes.length) {
            nodes.forEach(node => {
                node.remove();
            });
        };

        var nodes = document.querySelectorAll(".fl.iUh30");
    if (nodes.length) {
        nodes.forEach(node => {
            node.remove();
        })
    };

    skipToContent();

    function skipToContent() {
        var nodes = document.querySelectorAll(".yuRUbf");
        if (nodes.length){
            nodes[0].firstElementChild.focus();
        }
    };

    document.querySelector("#pnnext").onfocus = function () {
        skipToContent();
    };

    const LISTENER_ADDED = "focusListener-added";
    var nodes = document.querySelectorAll(".yuRUbf");
    if (nodes.length){
        if (nodes[0].classList.contains(LISTENER_ADDED)) {
            return;
        } else {
            nodes[0].classList.add(LISTENER_ADDED);
            nodes.forEach(node => {
                node.firstElementChild.addEventListener("focus", function () {
                    document.activeElement.scrollIntoView({
                        behavior: "instant",
                        block: "center"
                    });
                });
            });
        };
    };
})()