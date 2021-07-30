javascript:(()=>{
    
    var tab = document.getElementById("hdtb-msb");
    var tabList = tab.querySelectorAll("a");
    tabList.forEach ( tab => {
        if (tab.innerText === "画像") {
            tab.click();
        };
    });
})()
