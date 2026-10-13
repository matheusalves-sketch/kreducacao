/*
 * Swaps the fixed-nav logo between three contrast variants (black-bg / blue-bg / white-bg)
 * as the user scrolls past sections with different backgrounds, with a smooth crossfade.
 * Reads the real visible background under the logo, so it works on any page and survives swup navigation.
 */
(function () {
    "use strict";

    var LOGO_SRC = {
        black: "img/logo/kr-logo-black-bg.svg",
        blue: "img/logo/kr-logo-blue-bg.svg",
        white: "img/logo/kr-logo-white-bg.svg"
    };
    var LOGO_SELECTOR = ".mil-frame-top .mil-logo img, .mil-menu-frame .mil-frame-top .mil-logo img";
    var IGNORE_SELECTOR = ".mil-frame, .mil-menu-frame, .sm-panel, .mil-curtain, .mil-preloader";
    var PROBE_X = 80;
    var PROBE_Y = 50;

    Object.keys(LOGO_SRC).forEach(function (k) { new Image().src = LOGO_SRC[k]; });

    function parseColor(color) {
        var m = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        if (!m) return null;
        var alpha = m[4] === undefined ? 1 : parseFloat(m[4]);
        if (alpha < 0.5) return null;
        return [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10)];
    }

    function visibleBgType() {
        var stack = document.elementsFromPoint(PROBE_X, PROBE_Y);
        for (var i = 0; i < stack.length; i++) {
            var el = stack[i];
            if (el.closest(IGNORE_SELECTOR)) continue;
            if (el.closest(".mil-dark-bg")) return "black";
            var rgb = parseColor(getComputedStyle(el).backgroundColor);
            if (!rgb) continue;
            var luma = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
            if (luma < 40) return "black";
            if (luma > 200) return "white";
            return "blue";
        }
        return "black";
    }

    function setupLogoSwap(imgEl, type) {
        if (imgEl.closest(".mil-logo-contrast-wrap")) return imgEl.closest(".mil-logo-contrast-wrap");

        var wrap = document.createElement("span");
        wrap.className = "mil-logo-contrast-wrap";
        imgEl.parentNode.insertBefore(wrap, imgEl);

        var imgB = imgEl.cloneNode(true);
        imgEl.classList.add("mil-logo-contrast-img", "mil-logo-contrast-a");
        imgB.classList.add("mil-logo-contrast-img", "mil-logo-contrast-b");
        imgEl.src = LOGO_SRC[type];
        imgB.src = LOGO_SRC[type];
        imgB.style.opacity = "0";

        wrap.appendChild(imgEl);
        wrap.appendChild(imgB);
        wrap._imgs = [imgEl, imgB];
        wrap._active = 0;
        wrap._current = type;
        return wrap;
    }

    function applyBgType(wrap, type) {
        if (wrap._current === type) return;
        var showIndex = wrap._active === 0 ? 1 : 0;
        wrap._current = type;
        wrap._imgs[showIndex].src = LOGO_SRC[type];
        wrap._imgs[showIndex].style.opacity = "1";
        wrap._imgs[wrap._active].style.opacity = "0";
        wrap._active = showIndex;
    }

    function update() {
        var type = visibleBgType();
        document.querySelectorAll(LOGO_SELECTOR).forEach(function (img) {
            applyBgType(setupLogoSwap(img, type), type);
        });
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("load", update);
    document.addEventListener("swup:contentReplaced", function () { setTimeout(update, 50); });
    document.addEventListener("swup:pageView", function () { setTimeout(update, 50); });
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", update);
    } else {
        update();
    }
})();
