/*
 * Check Password that was saved Browser
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
