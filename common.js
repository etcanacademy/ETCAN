document.addEventListener("DOMContentLoaded", () => {
    // جلب الهيدر
    fetch("header.html")
        .then(r => r.text())
        .then(d => {
            document.getElementById("header-placeholder").innerHTML = d;
            // المهم: استدعاء دالة الترجمة بعد وضع الهيدر في الصفحة
            if (typeof updateTranslations === 'function') {
                updateTranslations();
            }
        });

    // جلب الفوتر
    fetch("footer.html")
        .then(r => r.text())
        .then(d => {
            document.getElementById("footer-placeholder").innerHTML = d;
            // المهم: استدعاء دالة الترجمة بعد وضع الفوتر
            if (typeof updateTranslations === 'function') {
                updateTranslations();
            }
        });
});