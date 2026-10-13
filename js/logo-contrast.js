/*
 * Swaps the fixed-nav logo between three contrast variants (black-bg / blue-bg / white-bg)
 * as the user scrolls past sections with different backgrounds, with a smooth crossfade.
 */
(function () {
    "use strict";

    var LOGO_SRC = {
        black: "img/logo/kr-logo-black-bg.svg",
        blue: "img/logo/kr-logo-blue-bg.svg",
        white: "img/logo/kr-logo-white-bg.svg"
    };

    var NAV_PROBE_Y = 50;

    function resolvedBgColor(el) {
        var node = el;
        while (node && node.nodeType === 1) {
            var color = getComputedStyle(node).backgroundColor;
            var m = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            if (m) {
                var alpha = m[4] === undefined ? 1 : parseFloat(m[4]);
                if (alpha > 0) {
                    return [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10)];
                }
            }
            node = node.parentElement;
        }
        return [0, 71, 188];
    }

    function bgTypeFor(el) {
        if (el.classList.contains("mil-dark-bg")) return "black";
        var rgb = resolvedBgColor(el);
        var luma = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
        if (luma < 40) return "black";
        if (luma > 200) return "white";
        return "blue";
    }

    function collectSections() {
        var root = document.querySelector(".mil-content .mil-main-transition") || document.querySelector(".mil-content");
        if (!root) return [];
        var sections = [];
        root.childNodes.forEach(function (node) {
            if (node.nodeType !== 1) return;
            sections.push(node);
        });
        return sections;
    }

    function currentBgType(sections) {
        for (var i = 0; i < sections.length; i++) {
            var rect = sections[i].getBoundingClientRect();
            if (rect.top <= NAV_PROBE_Y && rect.bottom > NAV_PROBE_Y) {
                return bgTypeFor(sections[i]);
            }
        }
        return "black";
    }

    function setupLogoSwap(imgEl, initialType) {
        if (!imgEl || imgEl.dataset.contrastInit) return;
        imgEl.dataset.contrastInit = "1";

        var wrap = document.createElement("span");
        wrap.className = "mil-logo-contrast-wrap";
        imgEl.parentNode.insertBefore(wrap, imgEl);

        var imgB = imgEl.cloneNode(true);
        imgEl.classList.add("mil-logo-contrast-img", "mil-logo-contrast-a");
        imgB.classList.add("mil-logo-contrast-img", "mil-logo-contrast-b");
        imgB.style.opacity = "0";
        imgEl.removeAttribute("data-contrast-init");
        imgEl.src = LOGO_SRC[initialType];

        wrap.appendChild(imgEl);
        wrap.appendChild(imgB);

        wrap._imgs = [imgEl, imgB];
        wrap._active = 0;
        wrap._current = initialType;
        return wrap;
    }

    function applyBgType(wrap, type) {
        if (!wrap || wrap._current === type) return;
        wrap._current = type;
        var showIndex = wrap._active === 0 ? 1 : 0;
        var hideIndex = wrap._active;
        wrap._imgs[showIndex].src = LOGO_SRC[type];
        wrap._imgs[showIndex].style.opacity = "1";
        wrap._imgs[hideIndex].style.opacity = "0";
        wrap._active = showIndex;
    }

    function init() {
        var sections = collectSections();
        if (!sections.length) return;

        var initialType = currentBgType(sections);
        var logoImgs = document.querySelectorAll(".mil-frame-top .mil-logo img, .mil-menu-frame .mil-frame-top .mil-logo img");
        var wraps = [];
        logoImgs.forEach(function (img) {
            var wrap = setupLogoSwap(img, initialType);
            if (wrap) wraps.push(wrap);
        });
        if (!wraps.length) return;

        var ticking = false;
        function update() {
            var type = currentBgType(sections);
            wraps.forEach(function (wrap) { applyBgType(wrap, type); });
            ticking = false;
        }
        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        update();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    window.addEventListener("swup:contentReplaced", init);
})();
