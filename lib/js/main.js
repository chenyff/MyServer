var menuLi = document.querySelectorAll('.menu_all li');
for(var i=0;i<menuLi.length;i++){
	menuLi[i].index = i;
	menuLi[i].onclick = function(){
		for(var i=0;i<menuLi.length;i++){
			menuLi[i].className = "";
		}
		this.className = "menu_now";
	}
}
