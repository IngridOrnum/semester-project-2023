document.getElementById("header-mobile").addEventListener("click", function () {
    let dropdownContent = document.getElementById("dropdown-content");
    let body = document.body;
    let xBtn = document.getElementById("x-btn");
    let burgerBtn = document.getElementById("burger-menu");

    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
    dropdownContent.style.display = "flex";
    xBtn.style.display = "block";
    burgerBtn.style.display = "none";
    body.classList.add("menu-open");

    } else {
        dropdownContent.style.display = "none";
        body.classList.remove("menu-open");
        xBtn.style.display = "none";
        burgerBtn.style.display = "block";
    }
});

document.getElementById("support-toggle-btn").addEventListener("click", function () {
    let supportContent = document.getElementById("support-content");

    if (supportContent.style.display === "none" || supportContent.style.display === "") {
        supportContent.style.display = "block";

        document.querySelector("#support-arrow-icon").classList.add("rotate");

    } else {
        document.querySelector("#support-arrow-icon").classList.remove("rotate");
        supportContent.style.display = "none";
    }
});

document.getElementById("volunteer-toggle-btn").addEventListener("click", function () {
    let volunteerContent = document.getElementById("volunteer-content");

    if (volunteerContent.style.display === "none" || volunteerContent.style.display === "") {
        volunteerContent.style.display = "block";

        document.querySelector("#volunteer-arrow-icon").classList.add("rotate");

    } else {
        document.querySelector("#volunteer-arrow-icon").classList.remove("rotate");
        volunteerContent.style.display = "none";
    }
});

document.getElementById("internship-toggle-btn").addEventListener("click", function () {
    let internshipContent = document.getElementById("internship-content");

    if (internshipContent.style.display === "none" || internshipContent.style.display === "") {
        internshipContent.style.display = "block";

        document.querySelector("#internship-arrow-icon").classList.add("rotate");

    } else {
        document.querySelector("#internship-arrow-icon").classList.remove("rotate");
        internshipContent.style.display = "none";
    }
});