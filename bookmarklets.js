/**
 * Short Code Requirements
 *
 *	1. Do not dirty global variable. Use local variable with closure.
 *	2. Supported browsers is IE7/8/9, FireFox and Google Chrome.
 *
 */

/* Check Password that was saved in Text-Box */
javascript:(function(i,D,d){
  for(D=document.getElementsByTagName('input');d=D[i++];)
  d.type=='password'&&(d.type='text')
})(0)

// One line
javascript:(function(i,D,d){for(D=document.getElementsByTagName('input');d=D[i++];)d.type=='password'&&(d.type='text')})(0)


/* Focus next input-tag on press Enter-Key */
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


/* Remove DOM (HTML Tag) that was clicked */
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


/* Change text on Double Click */
javascript:(function(D,a,t,T,H,d,x,h){
  d=D.createElement('div');
  x=D.createElement('textarea');
  x.style.cssText='position:fixed;left:10px;top:10px;z-index:99;width:500px;height:200px;background-color:#000;color:#FFF;opacity:0.8;filter:alpha(opacity=80)';
  d[a](x);
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
    D.body[a](d);
    x.value=H;
    x.focus()
  };
  x.onkeydown=function(e){
    if(e.keyCode==13){
      T.innerHTML=x.value;
      d.parentNode.removeChild(d)
    }
  }
})(document,'appendChild')

// One line
javascript:(function(D,a,t,T,H,d,x,h){d=D.createElement('div');x=D.createElement('textarea');x.style.cssText='position:fixed;left:10px;top:10px;z-index:99;width:500px;height:200px;background-color:#000;color:#FFF;opacity:0.8;filter:alpha(opacity=80)';d[a](x);D.onmouseover=function(e){t=e.target||event.srcElement;t.tagName='A'&&(h=t.href)&&t.removeAttribute('href')};D.onmouseout=function(){t.href=h};D.ondblclick=function(e){T=e.target||event.srcElement;H=T.innerHTML;D.body[a](d);x.value=H;x.focus()};x.onkeydown=function(e){if(e.keyCode==13){T.innerHTML=x.value;d.parentNode.removeChild(d)}}})(document,'appendChild')
