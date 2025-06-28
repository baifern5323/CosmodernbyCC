// ตรวจว่าหน้าจอเป็นมือถือหรือ desktop
const isMobile = () => window.innerWidth < 992;
      
document.querySelectorAll('.submenu-toggle').forEach(function (el) {
el.addEventListener('click', function (e) {
  e.preventDefault(); // ป้องกัน link ทำงาน
  e.stopPropagation(); // ป้องกันเมนูหลักปิด

  // ปิดเมนูอื่นก่อน
  document.querySelectorAll('.submenu').forEach(function (submenu) {
    if (submenu !== el.nextElementSibling) {
      submenu.classList.remove('show');
    }
  });

  // toggle เมนูที่คลิก
  el.nextElementSibling.classList.toggle('show');
});
});
//ให้เมนูปิดเมื่อคลิกพื้นที่อื่น ในแฮมเบอร์เกอร์
document.addEventListener('click', function (event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');
    const isClickInsideNavbar = navbarCollapse.contains(event.target) || toggler.contains(event.target);

    if (!isClickInsideNavbar && navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });