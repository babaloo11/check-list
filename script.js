let input = document.querySelector("input");
let ul = document.querySelector('ul');


input.onkeypress = function (event) {
    if (event.keyCode == 13) {
        let li = document.createElement("li");
        let img = document.createElement("img");
        let span = document.createElement("span");
        img.setAttribute("src", "trash-bin.png");
        span.innerHTML = input.value;
        document.querySelector("ul").appendChild(li);
        input.value = "";
        li.appendChild(img);
        li.appendChild(span);
    }
};
document.querySelector(".delete").onclick = function () {
    ul.innerHTML = "";
};
document.querySelector(".OBEME").onclick = function () {
    let lis = ul.querySelectorAll("li");
    for (let i = 0; i < lis.length; i++) {
        lis[i].classList.add("TRUMP");
    }
};
ul.onclick = function (event) {
    let target = event.target;
    if (target.tagName == "LI" || target.tagName == "SPAN") {
        target.classList.toggle("TRUMP");
    } else if (target.tagName == "IMG") {
        target.parentElement.remove();
    }
};
document.querySelector(".strelka").onclick = function (event) {
        let li = document.createElement("li");
        let img = document.createElement("img");
        let span = document.createElement("span");
        img.setAttribute("src", "trash-bin.png");
        span.innerHTML = input.value;
        document.querySelector("ul").appendChild(li);
        input.value = "";
        li.appendChild(img);
        li.appendChild(span);
}


