
function createWall(x,y,url){
		let wall  = document.createElement("div");
		document.body.appendChild(wall);
		wall.style.position = "absolute";
		wall.style.left=x+"px";
		wall.style.top=y+"px";
		wall.style.width= 30 + "%";
		wall.style.height = 50 + "%";
		wall.style.backgroundImage = "url("+url+")";
		wall.style.backgroundSize="100% 100%"
};


function createWindow(x,y,url){
		let wind  = document.createElement("div");
		document.body.appendChild(wind);
		wind.style.position = "absolute";
		wind.style.left=x+"px";
		wind.style.top=y+"px";
		wind.style.width= 10 + "%";
		wind.style.height = 20 + "%";
		wind.style.backgroundImage = "url("+url+")";
		wind.style.backgroundSize="100% 100%"
};

function createRoof(x,y){
		let roof  = document.createElement("div");
		document.body.appendChild(roof);
		roof.style.position = "absolute";
		roof.style.left=x+"px";
		roof.style.top=y+"px";
		roof.style.width='0px';
		roof.style.height ='0px';
		roof.style.borderStyle = 'inset';
		roof.style.borderColor = '#f49542 transparent transparent transparent';
		roof.style.borderWidth = "300px 300px 0px 300px";
		roof.style.backgroundSize="100% 100%";
		roof.style.transform = "rotateX(180deg)";
};

function createLawn(x,y,url){
		let lawn  = document.createElement("div");
		document.body.appendChild(lawn);
		lawn.style.position = "absolute";
		lawn.style.left=x+"px";
		lawn.style.top=y+"px";
		lawn.style.width= 100 + "%";
		lawn.style.height = 15 + "%";
		lawn.style.backgroundImage = "url("+url+")";
};

function createWood(x,y,url){
		let wood  = document.createElement("div");
		document.body.appendChild(wood);
		wood.style.position = "absolute";
		wood.style.left=x+"px";
		wood.style.top=y+"px";
		wood.style.width= 4 + "%";
		wood.style.height = 8 + "%";
		wood.style.backgroundImage = "url("+url+")";
		wood.style.backgroundSize="100% 100%";
		wood.style.borderRadius = "100%"
};
