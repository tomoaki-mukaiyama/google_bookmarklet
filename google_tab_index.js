
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
    addCssOnce();
    function addCssOnce(){var a=document.querySelector(".srp.wf-b");a.classList.contains("class-already-added")||(a.classList.add("class-already-added"),a=document.createElement("style"),a.type="text/css",a.innerText="html{transform-origin: top left; transform: scale(1.3);}",document.getElementsByTagName("HEAD").item(0).appendChild(a),a=document.createElement("style"),a.type="text/css",a.innerText="a:focus{outline: none; border-bottom: 5px solid red; }",document.getElementsByTagName("HEAD").item(0).appendChild(a))}
    document.querySelector("#rhs")&&document.querySelector("#rhs").remove();var nodes=document.querySelectorAll(".rGhul.IHSDrd");nodes.length&&nodes.forEach(function(a){a.remove()});document.querySelector("#appbar")&&document.querySelector("#appbar").remove();document.querySelector(".Okagcf")&&document.querySelector(".Okagcf").remove();document.querySelectorAll(".GHDvEf")&&(nodes=document.querySelectorAll(".GHDvEf"),nodes.forEach(function(a){a.remove()}));nodes=document.querySelectorAll('[jscontroller="K6HGfd"]');
    nodes.length&&nodes.forEach(function(a){a.remove()});var translateLinks=document.querySelectorAll(".fl.iUh30");translateLinks.length&&translateLinks.forEach(function(a){a.remove()});document.querySelector(".logo").querySelector("a")&&document.querySelector(".logo").querySelector("a").remove();nodes=document.querySelectorAll(".cUezCb.luh4tb.O9g5cc.uUPGi");nodes.length&&nodes.forEach(function(a){a.remove()});document.querySelector(".Tg7LZd")&&document.querySelector(".Tg7LZd").remove();
    document.querySelector("#botstuff")&&document.querySelector("#botstuff").remove();document.querySelector('[jscontroller="unV4T"]')&&document.querySelector('[jscontroller="unV4T"]').remove();document.querySelector('[jscontroller="qik19b"]')&&document.querySelector('[jscontroller="qik19b"]').remove();document.querySelectorAll(".Q3DXx")[1]&&document.querySelectorAll(".Q3DXx")[1].remove();document.querySelector(".FyYA1e.IThcWe")&&document.querySelector(".FyYA1e.IThcWe").remove();nodes=document.querySelectorAll(".fl.iUh30");
    nodes.length&&nodes.forEach(function(a){a.remove()});skipToContent();function skipToContent(){var a=document.querySelectorAll(".yuRUbf");a.length&&a[0].firstElementChild.focus()}var i=0;
    document.querySelector("#rso").addEventListener("keydown",function(a){var b=document.querySelectorAll(".yuRUbf");"s"===a.key?b[parseInt(i)+1]&&(a=b[i+1].firstElementChild,a.focus(),a.scrollIntoView({behavior:"instant",block:"center"}),i+=1):"w"===a.key&&(node=b[i-1])&&(a=b[i-1].firstElementChild,a.focus(),a.scrollIntoView({behavior:"instant",block:"center"}),--i)});
})()