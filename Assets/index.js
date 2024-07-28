function hamburgerMenu() {
    const menu = document.getElementById('myLinks');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


//hide the displayed links from the hamburger menu
let prevScrollpos = window.scrollY;
window.addEventListener('touchmove', function() {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("myLinks").style.display= "none";
  } else if (prevScrollpos > currentScrollPos) {
    document.getElementById("myLinks").style.display= "none";
  }
  prevScrollpos = currentScrollPos;
})

//hide the menu after click on a button

if (window.innerWidth < 768) {
  document.getElementById('myLinks').addEventListener('click', function() {
    document.getElementById('myLinks').style.display = 'none';
  })
}

if (window.innerWidth < 768) {
  document.getElementById('homeBtn').addEventListener('click', function() {
    document.getElementById('myLinks').style.display = 'none';
  });
}


// change the navbar color on scroll 

const mainNavbar = document.querySelector('#navbar');
const menuBtn = document.querySelector('#menuBtn');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
mainNavbar.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
  mainNavbar.classList.toggle('sticking', !entries[0].isIntersecting)
}, {rootMargin: "90% 0px 0px 0px"});

navObserver.observe(scrollWatcher);