
addCssOnce();
    function addCssOnce(){
        const CLASS_ALREADY_ADDED = "class-already-added";
        var checkStyle = document.querySelector(".srp.wf-b");
        if (checkStyle.classList.contains(CLASS_ALREADY_ADDED)){
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

if (document.querySelector("#botstuff")){
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




//フォーマットしたやつ
javascript: (() => {
var b=document.querySelector(".srp.wf-b");if(!b.classList.contains("class-already-added")){b.classList.add("class-already-added");var c=document.createElement("style");c.type="text/css";c.innerText="html{transform-origin: top left; transform: scale(1.3);}";document.getElementsByTagName("HEAD").item(0).appendChild(c);var e=document.createElement("style");e.type="text/css";e.innerText="a:focus{outline: none; border-bottom: 5px solid red; }";document.getElementsByTagName("HEAD").item(0).appendChild(e)}
document.querySelector("#rhs")&&document.querySelector("#rhs").remove();var f=document.querySelectorAll(".rGhul.IHSDrd");f.length&&f.forEach(function(a){a.remove()});document.querySelector("#appbar")&&document.querySelector("#appbar").remove();document.querySelector(".Okagcf")&&document.querySelector(".Okagcf").remove();document.querySelectorAll(".GHDvEf")&&(f=document.querySelectorAll(".GHDvEf"),f.forEach(function(a){a.remove()}));f=document.querySelectorAll('[jscontroller="K6HGfd"]');
f.length&&f.forEach(function(a){a.remove()});var g=document.querySelectorAll(".fl.iUh30");g.length&&g.forEach(function(a){a.remove()});document.querySelector(".logo").querySelector("a")&&document.querySelector(".logo").querySelector("a").remove();f=document.querySelectorAll(".cUezCb.luh4tb.O9g5cc.uUPGi");f.length&&f.forEach(function(a){a.remove()});document.querySelector(".Tg7LZd")&&document.querySelector(".Tg7LZd").remove();document.querySelector("#botstuff")&&document.querySelector("#botstuff").remove();
document.querySelector('[jscontroller="unV4T"]')&&document.querySelector('[jscontroller="unV4T"]').remove();document.querySelector('[jscontroller="qik19b"]')&&document.querySelector('[jscontroller="qik19b"]').remove();document.querySelectorAll(".Q3DXx")[1]&&document.querySelectorAll(".Q3DXx")[1].remove();document.querySelector(".FyYA1e.IThcWe")&&document.querySelector(".FyYA1e.IThcWe").remove();f=document.querySelectorAll(".fl.iUh30");f.length&&f.forEach(function(a){a.remove()});var h=document.querySelectorAll(".yuRUbf");
h.length&&h[0].firstElementChild.focus();var k=0;document.querySelector("#rso").addEventListener("keydown",function(a){var d=document.querySelectorAll(".yuRUbf");"s"===a.key?d[parseInt(k)+1]&&(a=d[k+1].firstElementChild,a.focus(),a.scrollIntoView({behavior:"instant",block:"center"}),k+=1):"w"===a.key&&(node=d[k-1])&&(a=d[k-1].firstElementChild,a.focus(),a.scrollIntoView({behavior:"instant",block:"center"}),--k)});
})()