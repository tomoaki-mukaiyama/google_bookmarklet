
addCssOnce();
function addCssOnce() {
    const CLASS_ALREADY_ADDED = "class-already-added";
    var checkStyle = document.querySelector(".srp.wf-b");
    if (checkStyle.classList.contains(CLASS_ALREADY_ADDED)) {
        return;
    } else {
        checkStyle.classList.add(CLASS_ALREADY_ADDED);
        var newStyleZoom = document.createElement('style');
        newStyleZoom.type = 'text/css';
        newStyleZoom.innerText = 'html{transform-origin: top left; transform: scale(1.3);}';
        document.getElementsByTagName('HEAD').item(0).appendChild(newStyleZoom);

        var newStyleFocus = document.createElement('style');
        newStyleFocus.type = 'text/css';
        newStyleFocus.innerText = 'a:focus{outline: none; border-bottom: 5px solid red; }';
        document.getElementsByTagName('HEAD').item(0).appendChild(newStyleFocus);
    }
}

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


if (document.querySelectorAll(".GHDvEf")) {
    var nodes = document.querySelectorAll(".GHDvEf")
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

skipToContent();

function skipToContent() {
    var nodes = document.querySelectorAll(".yuRUbf");
    if (nodes.length) {
        nodes[0].firstElementChild.focus();
    }
};

var i = 0;
document.querySelector("#rso").addEventListener("keydown", function (event) {
    var nodes = document.querySelectorAll(".yuRUbf");
    if (event.key === "s") {
        if (nodes[parseInt(i) + 1]) {
            var nextLink = nodes[i + 1].firstElementChild;
            nextLink.focus();
            nextLink.scrollIntoView({
                behavior: "instant",
                block: "center"
            });
            i = i + 1;
        }
    } else if (event.key === "w") {
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



//ブックマークレット
javascript:(function(url){s=document.createElement('script');s.src=url;document.body.appendChild(s);})('https://tomoaki-mukaiyama.github.io/google_bookmarklet/google_search_simplify.js')