window.onscroll = function () {
    let btn = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

document.getElementById("backToTop").onclick = function () {
    window.scrollTo({ top: 0 });
};
