
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