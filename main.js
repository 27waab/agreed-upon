const theText = document.getElementById("text"),
        theNarrator = document.getElementById("narrator"),
        theTopic = document.getElementById("topic"),
        theBook = document.getElementById("bigBook");

const bukhariBook = document.querySelector(".bukhari #book"),
        bukhariChapter = document.querySelector(".bukhari #chapter"),
        bukhariHadithNumber = document.querySelector(".bukhari #hadithNumber");

const muslimBook = document.querySelector(".muslim #book"),
        muslimChapter = document.querySelector(".muslim #chapter"),
        muslimHadithNumber = document.querySelector(".muslim #hadithNumber");

const saveBtn = document.getElementById("save");
const count = document.querySelector(".countHadith");

let hadithsArr = JSON.parse(localStorage.getItem("hadithsData")) || [];
updateCount();

const addHadith = () => {
    const hadith = theText.value,
            rawi = theNarrator.value,
            type = theTopic.value,
            bookType = theBook.value;

    const bukhariBookType = bukhariBook.value,
            bukhariInfo = bukhariChapter.value,
            bukhariNum = bukhariHadithNumber.value;

    const muslimBookType = muslimBook.value,
            muslimInfo = muslimChapter.value,
            muslimNum = muslimHadithNumber.value;

    if (
        hadith && rawi && type && bookType &&
        bukhariBookType && bukhariInfo && bukhariNum &&
        muslimBookType && muslimInfo && muslimNum
    ) {
        let hadithInformation = {
            text: hadith,
            narrator: rawi,
            topic: type,
            book: bookType,
            sources: {
                bukhari: {
                    book: bukhariBookType,
                    chapter: bukhariInfo,
                    hadithNumber: bukhariNum
                },
                muslim: {
                    book: muslimBookType,
                    chapter: muslimInfo,
                    hadithNumber: muslimNum
                }
            }
        };

        hadithsArr.push(hadithInformation);
        localStorage.setItem("hadithsData", JSON.stringify(hadithsArr));

        clearInputs();
        updateCount();
    }
};

function clearInputs() {
    theText.value = "";
    theNarrator.value = "";
    theTopic.value = "";
    theBook.value = "";
    bukhariBook.value = "";
    bukhariChapter.value = "";
    bukhariHadithNumber.value = "";
    muslimBook.value = "";
    muslimChapter.value = "";
    muslimHadithNumber.value = "";
}

function updateCount() {
    count.innerHTML = `${hadithsArr.length} حديث من أصل 1906 حديث`;
}

saveBtn.addEventListener("click", addHadith);
