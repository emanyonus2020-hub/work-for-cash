// Array تحتوي على فرص العمل
const jobs = [
    { title: "عامل إغاثة", field: "خدمات إنسانية", duration: "14 يوم", status: "متاح" },
    { title: "مدخل بيانات", field: "تكنولوجيا", duration: "30 يوم", status: "مكتمل" },
    { title: "عامل بناء", field: "إعادة إعمار", duration: "21 يوم", status: "متاح" }
];

// جلب جسم الجدول
const jobsBody = document.getElementById("jobsBody");

// عرض البيانات داخل الجدول
for (let i = 0; i < jobs.length; i++) {
    const row = `
        <tr>
            <td>${jobs[i].title}</td>
            <td>${jobs[i].field}</td>
            <td>${jobs[i].duration}</td>
            <td>${jobs[i].status}</td>
        </tr>
    `;
    jobsBody.innerHTML += row;
}

// فلترة فرص العمل حسب المجال باستخدام jQuery
$("#fieldFilter").on("change", function () {
    const selectedField = $(this).val();
    jobsBody.innerHTML = "";

    for (let i = 0; i < jobs.length; i++) {
        if (selectedField === "all" || jobs[i].field === selectedField) {
            const row = `
                <tr>
                    <td>${jobs[i].title}</td>
                    <td>${jobs[i].field}</td>
                    <td>${jobs[i].duration}</td>
                    <td>${jobs[i].status}</td>
                </tr>
            `;
            jobsBody.innerHTML += row;
        }
    }
});

// التحقق من نموذج التسجيل عند الإرسال
document.getElementById("applyForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const field = document.getElementById("applyField").value;

    const msg = document.getElementById("applyMsg");

    if (name === "" || email === "" || phone === "" || field === "") {
        msg.innerHTML = "<p class='text-danger'>يرجى تعبئة جميع الحقول المطلوبة.</p>";
        return;
    }

    msg.innerHTML = "<p class='text-success'>تم إرسال طلبك بنجاح، سيتم التواصل معك.</p>";
    document.getElementById("applyForm").reset();
});

// التحقق من نموذج التواصل
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("cName").value.trim();
    const email = document.getElementById("cEmail").value.trim();
    const message = document.getElementById("cMessage").value.trim();

    const msg = document.getElementById("contactMsg");

    if (name === "" || email === "" || message === "") {
        msg.innerHTML = "<p class='text-danger'>يرجى تعبئة جميع الحقول.</p>";
        return;
    }

    msg.innerHTML = "<p class='text-success'>تم إرسال رسالتك بنجاح.</p>";
    document.getElementById("contactForm").reset();
});
