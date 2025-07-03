document.querySelectorAll('.submenu-toggle').forEach(function (el) {
  el.addEventListener('click', function (e) {
    if (!isMobile()) return; // ถ้าไม่ใช่มือถือ ให้ Bootstrap จัดการเอง

    e.preventDefault();
    e.stopPropagation();

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
