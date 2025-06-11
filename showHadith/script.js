// ثابت عدد الأحاديث في اللؤلؤ والمرجان
const TOTAL_HADITHS = 1906;

// جلب العناصر
const hadithsContainer = document.querySelector(".hadiths");
const infoCount = document.querySelector(".infoProg h4");
const infoPercent = document.querySelector(".infoProg h1");
const progressBar = document.querySelector(".progress-bar");

// جلب البيانات من localStorage
let hadithsArr = JSON.parse(localStorage.getItem("hadithsData")) || [];

// تحديث معلومات التقدم
const updateProgress = () => {
    const count = hadithsArr.length;
    const percent = ((count / TOTAL_HADITHS) * 100).toFixed(1);

    infoCount.textContent = `${count} حديث من أصل ${TOTAL_HADITHS} حديث`;
    infoPercent.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
    progressBar.setAttribute("aria-valuenow", percent);
};

// إنشاء صندوق حديث
const createHadithBox = (hadith, index) => {
    return `
    <div class="box border border-1 rounded-5">
        <p class="count">الحديث رقم ${index + 1}</p>
        <h1 class="text-success">${hadith.text}</h1>
        <div class="hadithInfoOldBook">
        <button class="btn btn-warning  mb-2 ms-2">الراوي: ${hadith.narrator}</button>
        <button class="btn btn-primary  mb-2 ms-2">التصنيف: ${hadith.topic}</button>
        <button class="btn btn-success  mb-2">الكتاب: ${hadith.book}</button>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">البخاري</th>
                    <th scope="col">مسلم</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">الكتاب</th>
                    <td>${hadith.sources.bukhari.book}</td>
                    <td>${hadith.sources.muslim.book}</td>
                </tr>
                <tr>
                    <th scope="row">الباب</th>
                    <td>${hadith.sources.bukhari.chapter}</td>
                    <td>${hadith.sources.muslim.chapter}</td>
                </tr>
                <tr>
                    <th scope="row">الرقم</th>
                    <td>${hadith.sources.bukhari.hadithNumber}</td>
                    <td>${hadith.sources.muslim.hadithNumber}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `;
};

// عرض الأحاديث
const displayHadiths = () => {
    hadithsContainer.innerHTML = ""; // مسح أي حديث تجريبي
    hadithsArr.forEach((hadith, index) => {
        hadithsContainer.innerHTML += createHadithBox(hadith, index);
    });
};

// تشغيل الكل
updateProgress();
displayHadiths();
