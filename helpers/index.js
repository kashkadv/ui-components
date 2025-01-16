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


export function mapToObject(map) {
  const obj = {}
  map.forEach((value, key) => {
    obj[key] = value
  })
  return obj
}

export function objectToMap(obj) {
  const map = new Map()
  Object.entries(obj).forEach(([key, value]) => {
    map.set(key, value)
  })
  return map
}

export function formatPrice(price) {
  let priceStr = price.toString();  
  let formattedPrice = priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return formattedPrice;
}

export function buildSize(product, data) {
  if (!data) return

  let label = data.name
  let key =  data._key

  if (data._key.endsWith('см')) {
    label = label.replace('см', '')
    const [w, h] = label.split('x')

    label = `${w} x ${h} см`
  }

  return {
    label,
    key,
    availability: data.stock > 0,
    price: product.base_price + data.additional_price
  }
}

export function getSizeLabel(sid) {
  if (!sid) return null
  
  const [_, size] = String(sid).split('_')
  if (!size) return null

  return size
}

export function getPrice(product, size = null) {
  return Number(product.base_price) + (size ? Number(size.additional_price) : 0)
}