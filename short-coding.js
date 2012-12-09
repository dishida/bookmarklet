/*
 * Check Password that was saved in Text-Box
 */
javascript:(function(i,D,d){
	for(D=document.getElementsByTagName('input');d=D[i++];)
	d.type.toLowerCase()=='password'&&d.setAttribute('type','text')
})(0)

// One line
javascript:(function(i,D,d){for(D=document.getElementsByTagName('input');d=D[i++];)d.type.toLowerCase()=='password'&&d.setAttribute('type','text')})(0)


/*
 * Focus next input-tag on press Enter-Key
 */
javascript:(function(i,D,d){
	for(D=document.getElementsByTagName('input');d=D[i++];)
	(function(i){
		d.onkeypress=function(e){
			if((e||event).keyCode==13){D[i].focus();return !!0}
		}
	})(i)
})(0)

// One line
javascript:(function(i,D,d){for(D=document.getElementsByTagName('input');d=D[i++];)(function(i){d.onkeypress=function(e){if((e||event).keyCode==13){D[i].focus();return !!0}}})(i)})(0)


/*
 * Remove DOM (HTML Tag) that was clicked
 */
javascript:(function(D,s,b,t,x){
	D.onmouseover=function(e){
		t=e.target||event.srcElement;
		x=t[s][b];
		t[s][b]='#ADA';
		t.tagName=='A'&&t.removeAttribute('href')
	};
	D.onclick=function(){
		t.parentNode.removeChild(t)
	};
	D.onmouseout=function(){
		t[s][b]=x
	}
})(document,'style','backgroundColor')

// One line
javascript:(function(D,s,b,t,x){D.onmouseover=function(e){t=e.target||event.srcElement;x=t[s][b];t[s][b]='#ADA';t.tagName=='A'&&t.removeAttribute('href')};D.onclick=function(){t.parentNode.removeChild(t)};D.onmouseout=function(){t[s][b]=x}})(document,'style','backgroundColor')


/*
 * Change text on Double Click
 */
javascript:(function(D,t,T,H,d,x,h){
	d=D.createElement('div');
	d.style.cssText="position:fixed;left:10px;top:10px;z-index:9999;width:500px;height:200px;opacity:0.8; filter:alpha(opacity=80);";
	x=D.createElement('textarea');
	x.style.cssText='position:relative;left:10px;height:10px;width:480px;height:180px;background-color:#000;color:#FFF;';
	d.appendChild(x);
	D.onmouseover=function(e){
		t=e.target||event.srcElement;
		t.tagName='A'&&(h=t.href)&&t.removeAttribute('href')
	};
	D.onmouseout=function(){
		t.href=h
	};
	D.ondblclick=function(e){
		T=e.target||event.srcElement;
		H=T.innerHTML;
		D.body.appendChild(d);
		x.value=H;
		x.focus()
	};
	x.onkeydown=function(e){
		if(e.keyCode==13){
			T.innerHTML=x.value;
			d.parentNode.removeChild(d)
		}
	}
})(document)

// One line
javascript:(function(D,t,T,H,d,x,h){d=D.createElement('div');d.style.cssText="position:fixed;left:10px;top:10px;z-index:9999;width:500px;height:200px;opacity:0.8; filter:alpha(opacity=80);";x=D.createElement('textarea');x.style.cssText='position:relative;left:10px;height:10px;width:480px;height:180px;background-color:#000;color:#FFF;';d.appendChild(x);D.onmouseover=function(e){t=e.target||event.srcElement;t.tagName='A'&&(h=t.href)&&t.removeAttribute('href')};D.onmouseout=function(){t.href=h};D.ondblclick=function(e){T=e.target||event.srcElement;H=T.innerHTML;D.body.appendChild(d);x.value=H;x.focus()};x.onkeydown=function(e){if(e.keyCode==13){T.innerHTML=x.value;d.parentNode.removeChild(d)}}})(document)
