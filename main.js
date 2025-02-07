var typed= new Typed(".text", {
    strings: ["Android Developer","Web Developer" , "Software Developer" , "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


// Function to load projects from local storage
function loadProjects() {
    let projectList = document.getElementById("project-list");
    projectList.innerHTML = ""; // Clear previous content

    let projects = JSON.parse(localStorage.getItem("projects")) || []; // Retrieve projects

    projects.forEach((project, index) => {
        let projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <h3><b>${index + 1}. ${project.name}</b></h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">GitHub Repository</a>
        `;
        projectList.appendChild(projectCard);
    });
}

// Function to add a new project
function addProject() {
    let name = document.getElementById("projectName").value;
    let description = document.getElementById("projectDesc").value;
    let link = document.getElementById("projectLink").value;

    if (name === "" || description === "" || link === "") {
        alert("Please fill in all fields.");
        return;
    }

    let projects = JSON.parse(localStorage.getItem("projects")) || [];

    projects.push({ name, description, link });

    localStorage.setItem("projects", JSON.stringify(projects));

    document.getElementById("projectName").value = "";
    document.getElementById("projectDesc").value = "";
    document.getElementById("projectLink").value = "";

    loadProjects(); // Reload the project list
}

// Load projects on page load
document.addEventListener("DOMContentLoaded", loadProjects);


function addImage() {
    const input = document.getElementById("imageUpload");
    const imageContainer = document.getElementById("imageContainer");

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.height = 650;
            img.width = 400;
            imageContainer.appendChild(img);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
