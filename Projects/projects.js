fetch('Projects/projects.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#projects-section");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })