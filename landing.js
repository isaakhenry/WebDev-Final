let aboutSection = document.getElementById("About");

const makeImg = () => {
  let img = new Image(400, 400);
  img.src = "../Images/Isaak.JPEG";
  img.alt = "Photo of man in a hat.";
  aboutSection.appendChild(img);
};

const addBio = () => {
  let p = document.createElement("p");
  p.innerText =
    "Hello! My name is Isaak, and I'm a fresh Computer Science graduate from Portland State University. I've worked as a System Administrator for the last three years, but I'm trying to break into more of an engineering role. Currently, the languages that I practice are C++, Java, Python, JavaScript, TypeScript, and C. The fields within Computer Science which I am excited to explore more are Machine Learning, Embedded Systems, and DevOps. I enjoy outside contact and communication, so feel free to reach out in the contact section.";
  aboutSection.appendChild(p);
};

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
makeImg();
addBio();
