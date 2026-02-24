// scrollings
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

function checkScroll() {
  var boxes = document.querySelectorAll('.fadein');
  for (var i = 0; i < boxes.length; i++) {
    var fromTop = boxes[i].getBoundingClientRect().top;
    if (fromTop < window.innerHeight - 50) {
      boxes[i].classList.add('visible');
    }
  }
}

// hamburger menu
var hamburgBtn = document.getElementById('hamburgr');
var mobiMenuEl = document.getElementById('mobiMenu');

if (hamburgBtn && mobiMenuEl) {
  hamburgBtn.addEventListener('click', function() {
    hamburgBtn.classList.toggle('open');
    mobiMenuEl.classList.toggle('open');
  });

  var menulinks = mobiMenuEl.querySelectorAll('a');
  for (var j = 0; j < menulinks.length; j++) {
    menulinks[j].addEventListener('click', function() {
      hamburgBtn.classList.remove('open');
      mobiMenuEl.classList.remove('open');
    });
  }
}

// skill bar animations
var myskillsEl = document.getElementById('myskills');
if (myskillsEl) {
  var alreadyRan = false;
  window.addEventListener('scroll', function() {
    if (alreadyRan) return;
    var pos = myskillsEl.getBoundingClientRect().top;
    if (pos < window.innerHeight - 80) {
      var allbars = myskillsEl.querySelectorAll('.skill-progfill');
      for (var k = 0; k < allbars.length; k++) {
        allbars[k].style.width = allbars[k].dataset.w + '%';
      }
      alreadyRan = true;
    }
  });
}

// highlights the current page link 
var thispage = window.location.pathname.split('/').pop();
if (thispage === '') thispage = 'index.html';

var allnavlinks = document.querySelectorAll('.nav-item, .mobi-menu a');
for (var x = 0; x < allnavlinks.length; x++) {
  if (allnavlinks[x].getAttribute('href') === thispage) {
    allnavlinks[x].classList.add('active');
  }
}
