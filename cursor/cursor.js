fetch('cursor/cursor.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#cursor-section");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })

    document.addEventListener("mousemove", function(event) {
        const x = event.pageX - 10;
        const y = event.pageY - 10;
        const cursor = document.querySelector(".cursor");
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
      });
      
      document.addEventListener('click', () => {
        const cursor = document.querySelector(".cursor");

        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    })