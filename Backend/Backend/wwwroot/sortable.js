"use strict";

document.addEventListener("click", function(d) {
    function g(a, b) {
        a.className = a.className.replace(h, "") + (b ? b : '')
    }
    var h = / dir-(u|d) /,
        c = /\bsortable\b/,
        a = d.target;
    if ("TH" == a.nodeName && (d = a.offsetParent, c.test(d.className))) {
        var e, b = a.parentNode.cells;
        for (c = 0; c < b.length; c++) b[c] === a ? e = c : g(b[c]);
        b = " dir-d "; - 1 !== a.className.indexOf(" dir-d ") && (b = " dir-u ");
        g(a, b);
        a = d.tBodies[0];
        var f = [].slice.call(a.cloneNode(!0).rows, 0),
            k = " dir-u " == b;
        f.sort(function(a, b) {
            a = a.cells[e].innerText;
            b = b.cells[e].innerText;
            if (k) {
                var c =
                    a;
                a = b;
                b = c
            }
            return isNaN(a - b) ? a.localeCompare(b) : a - b
        });
        b = a.cloneNode();
        for (c in f) b.appendChild(f[c]);
        d.replaceChild(b, a)
    }
});