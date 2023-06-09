fetch('section2/section2.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#section2-section");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })


    