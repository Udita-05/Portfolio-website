/* ===============================
   JavaScript for Portfolio Website
   =============================== */

/* Page loaded confirmation */
console.log("JavaScript connected successfully");

/* ===============================
   Smooth Scroll for Navigation
   =============================== */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

/* ===============================
   Dark / Light Mode Toggle
   =============================== */
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Dark Mode";
toggleButton.style.marginTop = "10px";
document.querySelector("header").appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

/* Load saved theme */
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

/* ===============================
   Show / Hide Skills Section
   =============================== */
const skillsSection = document.getElementById("skills");

const toggleSkillsBtn = document.createElement("button");
toggleSkillsBtn.textContent = "Show / Hide Skills";
toggleSkillsBtn.style.marginTop = "10px";

skillsSection.prepend(toggleSkillsBtn);

toggleSkillsBtn.addEventListener("click", () => {
    const skillList = skillsSection.querySelector("ul");
    skillList.style.display =
        skillList.style.display === "none" ? "block" : "none";
});

/* ===============================
   Contact Form Validation
   =============================== */
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent successfully!");
    form.reset();
});

/* ===============================
   Button Hover Effect (JS based)
   =============================== */
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.opacity = "0.8";
    });

    button.addEventListener("mouseout", () => {
        button.style.opacity = "1";
    });
});
