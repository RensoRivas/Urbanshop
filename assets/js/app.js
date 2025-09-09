
// very small helper for active nav
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('nav a');
  links.forEach(a=>{
    if(a.getAttribute('href')===path){ a.classList.add('active') }
  });
})();

// simple fake auth for the prototype
function requireAuth(){
  if(!localStorage.getItem('auth')){
    location.href='index.html';
  }
}

function logout(){
  localStorage.removeItem('auth'); location.href='index.html';
}
