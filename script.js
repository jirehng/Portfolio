
document.querySelector(".projects").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}

function toClick(link) {
  window.location.href = link;
}




const projectContainer = document.querySelector(".projects");
const menuButton = document.querySelectorAll(".menuButton");
let currentFilter = "all";

let filteredProjects;

function renderProjects(element) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add(element.color);

  card.addEventListener("click", () => {
    window.open(element.link, "_blank");
  });

  const cardContent = document.createElement("div");
  cardContent.classList.add("cardContent");
  card.append(cardContent);

  const image = document.createElement("img");
  image.src = element.images;
  cardContent.append(image);

  const title = document.createElement("h3");
  title.classList.add("projectTitle");
  title.textContent = element.title;
  cardContent.append(title);

  const languages = document.createElement("p");
  languages.classList.add("languages");
  languages.textContent = element.languages;
  cardContent.append(languages);

  const description = document.createElement("p");
  description.classList.add("projectDescription");
  description.textContent = element.description;
  cardContent.append(description);

  return card;
}


function menuSelect(className) {
  if(className == ".all") currentFilter = "all"
  else if(className == ".web") currentFilter = "web"
  else if(className == ".mobile") currentFilter = "mobile"
  else if(className == ".uiux") currentFilter = "design"
  document.querySelectorAll(".selected").forEach(element => {
    element.classList.remove("selected");
  })
  document.querySelectorAll(className).forEach(element => {
    element.classList.add("selected");
  });
}

if(currentFilter === "all") {
  if (currentFilter === "all") {
    filteredProjects = projects;
  }

  filteredProjects.forEach(element => {
    const card = renderProjects(element);
    projectContainer.append(card);
  });
}

menuButton.forEach(button => {
  button.addEventListener("click", (e) => {
    projectContainer.innerHTML = "";
    if (currentFilter === "all") {
      filteredProjects = projects;
    } else if (currentFilter === "web") {
      filteredProjects = projects.filter(element => element.type === "web");
    } else if (currentFilter === "mobile") {
      filteredProjects = projects.filter(element => element.type === "mobile");
    } else if (currentFilter === "design") {
      filteredProjects = projects.filter(element => element.type === "design");
    }

    filteredProjects.forEach(element => {
      const card = renderProjects(element);
      projectContainer.append(card);
    });
  });
});