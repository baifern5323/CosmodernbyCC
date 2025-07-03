/*NavBar*/ 
document.addEventListener("DOMContentLoaded", function () {
    fetch('component/navbar.html')
      .then(response => response.text())
      .then(data => document.getElementById('navbar').innerHTML = data);
  });
  
  /*footer*/ 
document.addEventListener("DOMContentLoaded", function () {
    fetch('component/footer.html')
      .then(response => response.text())
      .then(data => document.getElementById('footer').innerHTML = data);
  });