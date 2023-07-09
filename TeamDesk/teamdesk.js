fetch('TeamDesk/teamdesk.html')
	.then(res => res.text())
	.then(text => {
		let oldelem = document.querySelector("script#teamdesk-section");
		let newelem = document.createElement("div");
		newelem.innerHTML = text;
		oldelem.parentNode.replaceChild(newelem, oldelem);
	})

function showinfo(){
	document.getElementsByClassName('.moreinfo').display=block;
}