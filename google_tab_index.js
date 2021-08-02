javascript: (() => {

    if (document.querySelector("#rhs")) {
        document.querySelector("#rhs").remove();
    }

    document.querySelector("#pnnext").onfocus = function () {
        skipToContent();
    };

    if (document.querySelectorAll(".d6cvqb")) {
    };


    if (document.querySelectorAll(".rGhul.IHSDrd")) {
        var nodes = document.querySelectorAll(".rGhul.IHSDrd");
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
    nodes.forEach(node => {
        node.remove();
    });

    if (document.querySelectorAll(".fl.iUh30").length) {
        var translateLinks = document.querySelectorAll(".fl.iUh30");
        translateLinks.forEach(link => {
            link.remove();
        });
    };

    var nodes = document.querySelectorAll(".yuRUbf");
    nodes.forEach(node => {
        if (node.querySelector(".GHDvEf")) {
            node.querySelector(".GHDvEf").remove();
        };
    });

    if (document.querySelector(".logo").querySelector("a")) {
        document.querySelector(".logo").querySelector("a").remove();
    }




    var nodes = document.querySelectorAll(".cUezCb.luh4tb.O9g5cc.uUPGi");
    if (document.querySelectorAll(".cUezCb.luh4tb.O9g5cc.uUPGi")) {
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

    if (document.querySelectorAll(".HiHjCd")) {
        var nodes = document.querySelectorAll(".HiHjCd");
        if (nodes) {
            nodes.forEach(node => {
                node.remove();
            });
        };
    };

    if (document.querySelectorAll(".ULSxyf")) {
        var nodes = document.querySelectorAll(".ULSxyf");
        if (nodes) {
            nodes.forEach(node => {
                node.remove();
            });
        };
    };

    if (document.querySelectorAll(".fl.iUh30")) {
        var nodes = document.querySelectorAll(".fl.iUh30");
        nodes.forEach(node => {
            node.remove();
        })
    };

    skipToContent();

    function skipToContent() {
        var nodes = document.querySelectorAll(".yuRUbf");
        nodes[0].firstElementChild.focus();
    };


    const LISTENER_ADDED = "focusListener-added";
    var nodes = document.querySelectorAll(".yuRUbf");
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
})()


