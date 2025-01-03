function getScrollBarWidth () { 
  var inner = document.createElement('p'); 
  inner.style.width = "100%"; 
  inner.style.height = "200px"; 

  var outer = document.createElement('div'); 
  outer.style.position = "absolute"; 
  outer.style.top = "0px"; 
  outer.style.left = "0px"; 
  outer.style.visibility = "hidden"; 
  outer.style.width = "200px"; 
  outer.style.height = "150px"; 
  outer.style.overflow = "hidden"; 
  outer.appendChild (inner); 

  document.body.appendChild (outer); 
  var w1 = inner.offsetWidth; 
  outer.style.overflow = 'scroll'; 
  var w2 = inner.offsetWidth; 
  if (w1 == w2) w2 = outer.clientWidth; 

  document.body.removeChild (outer); 

  return (w1 - w2); 
};

function checkHasScrollbar() {
  return document.documentElement.scrollHeight > document.documentElement.clientHeight
}

export function toggleScrollbar(show) {

  if (!checkHasScrollbar()) return

  const scrollbarWidth = getScrollBarWidth()
  const root = document.getElementsByTagName('html')[0]
  
  if (!show) {
    root.classList.remove('no-scrollbar')
    root.style.paddingRight = `0px`
    root.style.overflow = `unset`
  } else {
    root.classList.add('no-scrollbar')
    root.style.paddingRight = `${scrollbarWidth}px`
    root.style.overflow = `hidden`
  }
}