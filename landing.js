//Dynamically insert image
let aboutSection = document.getElementById("About");

//Create a new image
const makeImg = () => {
  let img = new Image(400, 400);
  img.src = "./Images/Isaak.JPEG";
  img.alt = "Photo of man in a hat.";
  aboutSection.appendChild(img);
};

//Dynamically insert bio
const addBio = () => {
  let p = document.createElement("p");
  p.innerText =
    "Hello! My name is Isaak, and I'm a fresh Computer Science graduate from Portland State University. I've worked as a System Administrator for the last three years, but I'm trying to break into more of an engineering role. Currently, the languages that I practice are C++, Java, Python, JavaScript, TypeScript, and C. The fields within Computer Science which I am excited to explore more are Machine Learning, Embedded Systems, and DevOps. I enjoy outside contact and communication, so feel free to reach out in the contact section.";
  aboutSection.appendChild(p);
};
makeImg();
addBio();

//Accordion dropdown functionality
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const repositories = [
  {
    name: "Full-stack MERN chat application",
    url: "https://github.com/isaakhenry/MERN-Chat",
  },
  {
    name: "Torque Vectoring Capstone",
    url: "https://github.com/VikingMotorsports/torque-vectoring",
  },
  {
    name: "Abstract Syntax Tree in Java",
    url: "https://github.com/isaakhenry/ParseTree",
  },
];

const cardContainer = document.getElementById("cardContainer");

//Dynamically create cards.

repositories.forEach((repository) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const text = document.createElement("p");
  text.textContent = repository.name;
  card.appendChild(text);
  card.addEventListener("click", () => {
    window.open(repository.url, "_blank");
  });
  cardContainer.appendChild(card);
});

const form = document.getElementById("contactForm");

//Log data when submitted

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    console.log("Please fill in all fields.");
    return;
  }

  console.groupCollapsed("========= Form Submission =========");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  console.groupEnd();

  form.reset();
});
