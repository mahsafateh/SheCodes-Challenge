const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const loadText = document.querySelector('.loading-text')


let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  container.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const visibleText = (className) => {
  const contentTag = document.querySelector('.content');
  for (let i = 0; i < contentTag.children.length; i++) {
    const child = contentTag.children[i];
    child.classList.add('hidden');
  }
  const textTag = document.querySelector('.' + className);
  textTag.classList.remove('hidden');
  closeMenu();
}

const closeMenu = () => {
  container.classList.remove('show-nav')
}

const showMenu = () => {
  container.classList.add('show-nav')
}

open.addEventListener('click', () => showMenu());

close.addEventListener('click', () => closeMenu());
