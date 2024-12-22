const jsonData = {
    // יצירת אובייקט קבוע שמכיל את כל המידע שבכרטסות
    "jobs": [
        {
            "id": 1,
            "title": "כירורג/ית בכיר/ה",
            "img": "SeniorSurgeon.png",
            "job": "מוביל/ה את הניתוח ובמרכז תשומת הלב של החדר, אחראי/ת על ביצוע הפרוצדורה הכירורגית וקבלת החלטות רפואיות בזמן אמת.",
            "position": "ליד שולחן הניתוחים, צמוד/ה למטופל/ת.",
            "phrase": "ד\"ר רועי, כירורג בכיר: \"לראות מטופל מתאושש אחרי ניתוח מורכב זה רגע שאי אפשר להסביר במילים. זו זכות\"",
        },
        {
            "id": 2,
            "title": "כירורג/ית מתמחה",
            "img": "SurgicalResident.png",
            "job": "משתתף/ת בניתוח תחת הנחיית הכירורג/ית הבכיר/ה, מסייע/ת בפעולות כירורגיות פשוטות יותר או לומד/ת דרך צפייה ישירה.",
            "position": "עומד/ת לצד או מול הכירורג/ית הבכיר/ה.",
            "phrase": "ליאן, כירורגית מתמחה: \"אני לומדת כל כך הרבה בכל יום – זו מתנה לראות איך הטכניקות שפעם רק קראתי עליהן הופכות למציאות\"",
        },
        {
            "id": 3,
            "title": "מרדים/ה בכיר/ה",
            "img": "SeniorAnesthesiologist.png",
            "job": "אחראי/ת על ניהול וביצוע ההרדמה, חיבור המטופל/ת למכונות הנשמה והרדמה, ופיקוח על תהליך ההרדמה כולו.",
            "position": "צמוד/ה לראש של המטופל/ת.",
            "phrase": "ד\"ר טל, מרדימה בכירה: \"אני כאן כדי לוודא שהמטופלים שלנו עוברים את התהליך בשלום ובשקט נפשי. זו המשמעות של העבודה שלי\"",
        },
        {
            "id": 4,
            "title": "מרדים/ה מתמחה",
            "img": "AnesthesiologyResident.png",
            "job": "מסייע/ת למרדים/ה הבכיר/ה בתהליכי ההרדמה ותפעול הציוד.",
            "position": "צמוד/ה לראש המטופל/ת ולצד המרדים/ה הבכיר/ה.",
            "phrase": "עידן, מרדים מתמחה: \"היכולת לגרום למטופל להרגיש בטוח לפני ניתוח היא תפקיד משמעותי שאני גאה בו\"",
        },
        {
            "id": 5,
            "title": "אח/ות רחוץ/ה (סטרילי/ת)",
            "img": "ScrubNurse.png",
            "job": "מסייע/ת ישירות לניתוח, מגיש/ה כלים ומבטיח/ה שהאזור הסטרילי נשמר.",
            "position": "בתוך האזור הסטרילי, קרוב לשולחן הניתוחים.",
            "phrase": "הילה, אחות רחוצה: \"הדיוק בעבודה שלי הוא הכול. לדעת שאני חלק מהבטחת סטריליות וחיים בטוחים – זה סיפוק שאין שני לו\".",
        },
        {
            "id": 6,
            "title": "אח/ות מסתובב/ת",
            "img": "CirculatingNurse.png",
            "job": "מנהל/ת את החדר מבחינה לוגיסטית ומוודא/ה עמידה בכללים.",
            "position": "מחוץ לאזור הסטרילי, קרוב לשולחן הכלים.",
            "phrase": "עמית, אח מסתובב: \"אני אוהב לראות איך הכול מתחבר יחד – הצוות, הציוד והמטופלים. כל רגע כאן הוא חיים חדשים\"",
        },
        {
            "id": 7,
            "title": "סניטר/ית",
            "img": "Orderly.png",
            "job": "אחראי/ת על הלוגיסטיקה בחדר, כולל חיבור מכשירים, העברת ציוד ותמיכה בפעולות כלליות.",
            "position": "בתנועה בחדר הניתוח, קרוב לדלתות או לציוד.",
            "phrase": "אבי, סניטר: \"אין דבר חשוב יותר מלדעת שהציוד במקום והמטופל בידיים טובות. זה התפקיד שלי ואני גאה בו\"",
        },
        {
            "id": 8,
            "title": "עובד/ת לוגיסטיקה",
            "img": "LogisticsStaff.png",
            "job": "אחראי/ת על אספקת ציוד רפואי שנמצא מחוץ לחדר הניתוח ותפעול סביבת אגף חדרי הניתוח.",
            "position": "במסדרון או בחדר סמוך לחדר הניתוח.",
            "phrase": "נעמה, עובדת לוגיסטיקה: \"אני מאחורי הקלעים, אבל בלי מה שאני עושה שום דבר לא קורה. כיף לדעת שאני חלק ממשהו גדול\"",
        },
        {
            "id": 9,
            "title": "עובד/ת ניקיון",
            "img": "CleaningStaff.png",
            "job": "אחראי/ת על ניקיון וסטריליות האגף וחדרי הניתוח.",
            "position": "במסדרון מחוץ לחדר הניתוח.\"",
            "phrase": "מיכל, עובדת ניקיון: \"לנקות זה הרבה יותר ממה שזה נראה – זה לשמור על הבריאות של כולם. לדעת שהסביבה כאן בטוחה זה מה שמניע אותי\"",
        },
        {
            "id": 10,
            "title": "מזכיר/ה",
            "img": "Secretary.png",
            "job": "אחראי/ת על ניהול תוכניות הניתוחים ותיאום בין המטופלים/ות לצוותים.",
            "position": "בדלפק קבלה מחוץ לחדרי הניתוח.",
            "phrase": "רותם, מזכירה: \"התיאום בין הניתוחים הוא כמו פאזל מורכב, אבל כשזה עובד – זה שווה הכול\"",
        }
    ]
}

function toggleNav() {
    const navMenu = document.getElementById("main-nav"); // מציאת אלמנט סרגל הניווט
    navMenu.classList.toggle("hide-mobile"); // הוספת/הסרת מחלקת CSS לצורך הצגת או הסתרת התפריט
}

//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {

    // מאזינים לכפתורים של פתיחת וסגירת התפריט
    const openButton = document.getElementById("nav-button");  // מציאת כפתור פתיחת התפריט
    const closeButton = document.getElementById("close-nav-button"); // מציאת כפתור סגירת התפריט

    // חיבור מאזין אירועים לכל כפתור
    openButton.addEventListener("click", toggleNav); // הוספת אירוע האזנה בלחיצה על כפתור פתיחת התפריט
    closeButton.addEventListener("click", toggleNav);// הוספת אירוע האזנה בלחיצה על כפתור סגירת התפריט

    const itemsContainer = document.getElementById("itemsContainer"); // מציאת אלמנט להכיל את הכרטיסים
    itemsContainer.setAttribute("class", "row"); // הגדרת מחלקה עם שימוש בbootstrap
    itemsContainer.style.display = "flex"; // הגדרת תצוגת Flex
    itemsContainer.style.justifyContent = "center"; // יישור תוכן למרכז
    itemsContainer.style.gap = "40px"; // הגדרת מרווח בין הכרטסות


    jsonData.jobs.forEach(g => { // מעבר על כל המשרות ב-jsonData

        const myCard = document.createElement("div"); // יצירת תגית לכרטסת חדשה
        myCard.setAttribute("class", "card col-3"); // הגדרת מחלקה עם שימוש בbootstrap
        myCard.setAttribute("id", `id_${g.id}`); // הוספת מזהה ייחודי לכרטסת

        const myImg = document.createElement("img"); // יצירת תגית לתמונה בכרטסת
        myImg.setAttribute("src", `./Img/${g.img}`); // הגדרת מקור התמונה
        myImg.setAttribute("class", "cardImg"); // הגדרת מחלקה לתמונה
        myImg.setAttribute("id", `id_${g.id}`); // הוספת מזהה ייחודי לתמונה

        const myTitle = document.createElement("h5"); // יצירת תגית לכותרת בכרטסת
        myTitle.innerHTML = `${g.title}`; // הצגת כותרת התפקיד
        myTitle.setAttribute("class", "card-title"); // הגדרת מחלקה לכותרת
        myTitle.setAttribute("id", `id_${g.id}`);  // הוספת מזהה ייחודי לכותרת

        // יצירת אלמנט עבור ה-job
        const myJob = document.createElement("p"); // יצירת תגית לתיאור התפקיד בכרטסת
        myJob.innerHTML = `תפקיד: ${g.job}`; // הצגת תיאור התפקיד
        myJob.setAttribute("class", "card-text"); // הגדרת מחלקה לתיאור התפקיד
        myJob.setAttribute("id", `id_${g.id}`); // הוספת מזהה ייחודי לתיאור התפקיד

        // יצירת אלמנט עבור ה-position
        const myPosition = document.createElement("p"); // יצירת תגית למיקום התפקיד בכרטסת
        myPosition.innerHTML = `מיקום: ${g.position}`; // הצגת מיקום התפקיד
        myPosition.setAttribute("class", "card-text"); // הגדרת מחלקת CSS למיקום התפקיד
        myPosition.setAttribute("id", `id_${g.id}`); // הוספת מזהה ייחודי למיקום התפקיד

        // יצירת אלמנט עבור ה-position
        const myPhrase = document.createElement("p"); // יצירת תגית לציטוט העובד/ת בכרטסת
        myPhrase.innerHTML = `${g.phrase}`; // הצגת ציטוט העובד/ת
        myPhrase.setAttribute("class", "card-phrase"); // הגדרת מחלקה לציטוט העובד/ת

        // הדפסת התוכן לכרטסת
        myCard.appendChild(myImg);
        myCard.appendChild(myTitle)
        myCard.appendChild(myJob)
        myCard.appendChild(myPosition)
        itemsContainer.appendChild(myCard); // הוספת הכרטסת לקונטיינר

        // כאשר לוחצים על כרטסת, יפתח הפופ-אפ עם ה-phrase המתאים
        myCard.addEventListener("click", function () {
            showModal(g.phrase); // מציג את ה-"phrase" של אותה כרטסת
        });

        // הוספת אפקט hover כאשר העכבר נכנס או יוצר מהכרטסת
        myCard.addEventListener("mouseenter", HoverCard);
        myCard.addEventListener("mouseleave", function (e) {
        });
    });

    function showModal(Phrase) {
        // יצירת הפופ-אפ ב-JS
        const modal = document.createElement("div"); // יצירת תגית div לפופ-אפ שישפיע על כל העמוד כולל הצללה מאחור
        modal.setAttribute("class", "modal fade"); // הוספת מחלקה לפופ-אפ
        modal.setAttribute("id", "myModal"); // הגדרת מזהה לפופ-אפ
        modal.setAttribute("role", "dialog"); // הגדרת תפקיד הפופ-אפ כ-dialog כדי להבהיר שזהו אלמנט של דיאלוג (שיחה עם המשתמש).

        const modalDialog = document.createElement("div"); // יצירת תגית div לקונטיינר שיעטוף את הפופ-אפ
        modalDialog.setAttribute("class", "modal-dialog"); // הוספת מחלקה לפופ-אפ

        const modalContent = document.createElement("div"); // יצירת div לתוכן הפופ-אפ
        modalContent.setAttribute("class", "modal-content"); // הוספת מחלקה לתוכן הפופ-אפ

        const modalHeader = document.createElement("div"); // יצירת div לכותרת הפופ-אפ
        modalHeader.setAttribute("class", "modal-header"); // הוספת מחלקה לכותרת

        const modalTitle = document.createElement("h4"); // יצירת תגית h4 לכותרת
        modalTitle.setAttribute("class", "modal-title"); // הוספת מחלקה לכותרת
        modalTitle.innerHTML = "הצוות מספר:"; // הצגת כותרת הפופ-אפ
        modalTitle.style.fontWeight = "bold"; // הוספת אפקט בולד
        modalTitle.style.color = "#113444"; // צבע כותרת הפופ-אפ

        const closeButton = document.createElement("button"); // יצירת כפתור סגירה
        closeButton.setAttribute("type", "button"); // הגדרת סוג הכפתור כ-"button"
        closeButton.setAttribute("class", "close"); // הוספת מחלקה לכפתור
        closeButton.setAttribute("data-dismiss", "modal"); // הוספת מאפיין לסגירת הפופ-אפ בעת לחיצה
        closeButton.innerHTML = "&times;";  // הצגת סימן "X" לסגירה
        closeButton.style.background = "transparent"; // מחיקת רקע הכפתור
        closeButton.style.border = "none"; // מחיקת גבול הכפתור
        closeButton.style.color = "#113444"; // צבע האיקס יהיה כחול
        closeButton.style.fontSize = "30px"; // גודל האיקס
        closeButton.style.fontWeight = "bold"; // בולד
        closeButton.style.cursor = "pointer"; // הופך את הסמן ליד

        const modalBody = document.createElement("div"); // יצירת גוף הפופ-אפ
        modalBody.setAttribute("class", "modal-body"); // הוספת מחלקה לגוף הפופ-אפ
        modalBody.innerHTML = `<p>${Phrase}</p>`; // הצגת המשתנה Phrase בגוף הפופ-אפ

        const modalFooter = document.createElement("div"); // יצירת תגית פוטר לפופ-אפ
        modalFooter.setAttribute("class", "modal-footer"); // הוספת מחלקה לפוטר

        const closeModalButton = document.createElement("button"); // יצירת תגית לכפתור סגירה
        closeModalButton.setAttribute("type", "button"); // הגדרת סוג הכפתור
        closeModalButton.setAttribute("class", "btn btn-default"); // הוספת מחלקה לכפתור
        closeModalButton.setAttribute("data-dismiss", "modal"); // הוספת פעולה לסגירת הפופ-אפ
        closeModalButton.innerHTML = "סגירה"; // טקסט כפתור סגירה
        closeButton.style.color = "#113444"; // שינוי צבע לכפתור סגירה

        //הצגת התוכן בפופ-אפ:
        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeButton);

        modalFooter.appendChild(closeModalButton);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);

        document.body.appendChild(modal); // הוספת הפופ-אפ לגוף הדף

        // הצגת הפופ-אפ
        $('#myModal').modal('show');

        // סגירת הפופ-אפ לאחר סגירה (לאחר הצגת הפופ-אפ)
        $('#myModal').on('hidden.bs.modal', function () {
            modal.remove(); // מסיר את הפופ-אפ מה-DOM אחרי שהוא נסגר
        });

        closeButton.addEventListener('click', function () {
            $('#myModal').modal('hide'); // סגירת הפופ-אפ ידנית באמצעות כפתור האיקס
        });

        closeModalButton.addEventListener('click', function () {
            $('#myModal').modal('hide'); // סגירת הפופ-אפ ידנית באמצעות כפתור סגירה
        });
    }

    function HoverCard(e) { //פונקציה להוספת אפקט בעת מעבר עכבר על הכרטסות
    }

    // הפעלת טול טיפ על כל האלמנטים עם data-bs-toggle="tooltip"
    var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl); // הפעלת tooltip
    });
    

// פונקציה להוספת אפקט סיבוב כמו קלף
    function addCardFlipEffect(imageId) {
        const image = document.getElementById(imageId); // קבלת המזהה של התמונה

        // מוסיף את האפקט ברגע שהעכבר נמצא על התמונה
        const onHover = () => {
            image.style.transform = 'rotateY(180deg)';
            image.style.transition = 'transform 0.5s';
        };

        // מחזיר את התמונה למצב הרגיל כשהעכבר יוצא
        const onLeave = () => {
            image.style.transform = 'rotateY(0deg)';
        };

        // מאזין לאירועים כניסה ויציאה של העכבר מהתמונה
        image.addEventListener('mouseover', onHover);
        image.addEventListener('mouseout', onLeave);

        // שמירה על הפונקציות כדי להסיר במקרה הצורך
        image._hoverEffect = {onHover, onLeave};
    }

// פונקציה להסרת האפקט במובייל
    function removeCardFlipEffect(imageId) {
        const image = document.getElementById(imageId);

        if (image && image._hoverEffect) { // אם קיים אפקט, הסר אותו
            const {onHover, onLeave} = image._hoverEffect;
            image.removeEventListener('mouseover', onHover);
            image.removeEventListener('mouseout', onLeave);

            // איפוס עיצוב
            image.style.transform = '';
            image.style.transition = '';

            // מחיקת המידע
            delete image._hoverEffect;
        }
    }

// פונקציה להגדרת האפקט בהתאם לרוחב המסך
    function setupCardFlipEffect() { 
        const shebaLogo = 'shebaLogo';
        const hitLogo = 'hitLogo';

        if (window.innerWidth > 768) { // אם המסך רחב, הפעל את האפקט
            addCardFlipEffect(shebaLogo);
            addCardFlipEffect(hitLogo);
        } else { // אם המסך צר, הסר את האפקט
            removeCardFlipEffect(shebaLogo);
            removeCardFlipEffect(hitLogo);
        }
    }

// הפעלת האפקט בעת טעינת הדף ובשינוי גודל המסך
    window.addEventListener('DOMContentLoaded', setupCardFlipEffect);
    window.addEventListener('resize', setupCardFlipEffect);


    document.querySelector(".insertText").addEventListener("input", () => { // מאזין לתיבת הטקסט של החיפוש
        const query = document.querySelector(".insertText").value.trim().toLowerCase(); // קריאת הערך מתיבת הטקסט
        const cards = document.querySelectorAll(".card"); // בחירת כל הכרטסות
        const introRow = document.querySelector(".intro.row");  // בחירת שורת הכרטסות
        cards.forEach(card => { //עבור כל כרטסת מתוך כל הכרטסות שנבחרו 
            const title = card.querySelector(".card-title").textContent.trim(); // קבלת הטקסט מתוך כותרת הכרטסת, הסרת רווחים
            card.style.display = query === "" || title.includes(query) ? "flex" : "none"; // הצגת או הסתרת הכרטסות
        });

        if (introRow) { // אם יש שורת פתיחה 
            introRow.style.display = query === "" ? "flex" : "none"; // אם השאילתה ריקה, הצג את התוכן שורת הפתיחה והתמונה עם הנקודות , אחרת הסתר אותם 
        }
    });
});
