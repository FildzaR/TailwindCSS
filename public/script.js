function Menu(e) {
    let list = document.querySelector('.slide-navbar');
    let nav = document.querySelector('.nav');
    let body = document.querySelector('body');
    let overlay = document.querySelector('.overlay');

    e.name === 'menu-outline' ? (e.name = "close-outline", list.classList.add('top-0'), list.classList.add('z-30'), list.classList.remove('-translate-y-full'), nav.classList.add('text-black'), nav.classList.remove('text-white'), nav.classList.add('mr-4'), overlay.classList.remove('hidden')) :(e.name = "menu-outline", list.classList.remove('top-0'), list.classList.remove('z-30'), nav.classList.remove('text-black'), nav.classList.add('text-white'), list.classList.add('-translate-y-full'),overlay.classList.add('hidden'))
}