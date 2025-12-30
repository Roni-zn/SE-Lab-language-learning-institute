const menuItems = document.querySelectorAll("#sidebar-menu #submenubutton");

menuItems.forEach(title => {
  title.addEventListener("click", () => {
    const parent = title.parentElement;

    // اگر میخوای فقط یک زیرمنو باز باشه در هر لحظه:
    menuItems.forEach(item => {
      if (item.parentElement !== parent) {
        item.parentElement.classList.remove("active");
      }
    });

    // باز/بسته کردن زیرمنوی خود آیتم
    parent.classList.toggle("active");
  });
});








const mainContent = document.getElementById('mainContent');
const navItems = document.querySelectorAll('.sidebar ul li');

        // محتوای هر صفحه
const pages = {
    profile: `<h2>پروفایل</h2><p>اینجا اطلاعات پروفایل نمایش داده می‌شود.</p>`,
    settings: `<h2>تنظیمات</h2><p>اینجا تنظیمات کاربر قرار می‌گیرد.</p>`,
    logout: `<h2>خروج</h2><p>برای خروج روی لینک زیر کلیک کنید.</p>`
};

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const page = item.getAttribute('data-page');
        mainContent.innerHTML = pages[page];
    });
});
