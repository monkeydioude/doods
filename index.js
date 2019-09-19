let max = 34;
let wait = 500;
let curr = 1;
let w = document.querySelector('.main').clientWidth;
let h = document.querySelector('.main').clientHeight;
let last = null;
let s = null;

let doods = {
    0: [
        "dood_dance.gif",
        "dance",
        200
    ],
    1: [
        "dood_eeeeee.gif",
        "eeeeeee",
        240
    ],
    2: [
        "dood_hoy.gif",
        "hoy",
        175
    ],
    3: [
        "dood_yay.gif",
        "yay",
        "30vh"
    ]
}

function finalDood() {
    let g = document.createElement("img");
    g.src = "./img/"+ doods[3][0];
    g.style.height = doods[3][2];
    g.classList.add(doods[3][1]);
    document.querySelector('.top').appendChild(g);
    document.querySelector('.TOTARU-DAMAAAAAAAJU-KAUNETAA').innerHTML = curr;
    window.setInterval(function() {
        let el = document.querySelector('.msgception')
        el.style.display = el.style.display == "none" ? "block" : "none";
    }, 500)
}

function supDood() {
    if (curr == max) {
        window.clearInterval(s);
        finalDood();
        return;
    }

    let d = Math.round(Math.random() * 2);

    while (d == last) {
        d = Math.round(Math.random() * 2);
    }
    last = d;

    let g = document.createElement("img");
    let t = Math.round(Math.random() * h);
    let l = Math.round(Math.random() * w);
    
    g.src = "./img/"+ doods[d][0];
    g.classList.add(doods[d][1]);
    g.style.width = doods[d][2];
    let cH = (g.height / g.width) * doods[d][2];



    if (t > h - cH) {
        t = h - cH;
    }
    if (l > w - doods[d][2]) {
        l = w - doods[d][2];
    }

    g.style.top = Math.round(t);
    g.style.left = Math.round(l);

    document.querySelector('.main').appendChild(g);
    document.querySelector('.TOTARU-DAMAAAAAAAJU-KAUNETAA').innerHTML = curr;
    curr++;
    s = window.setTimeout(supDood, wait);
}

supDood();