let aboutSection = document.getElementById("About");

const makeImg = () => {
  let img = new Image(400, 400);
  img.src = "../Images/Isaak.JPEG";
  img.alt = "Photo of man in a hat.";
  //img.style.borderRadius = "50%";
  //img.style.position = "absolute";
  //img.style.left = "10%";

  aboutSection.appendChild(img);
};

const addBio = () => {
  let p = document.createElement("p");
  p.innerText =
    "Hello! My name is Isaak, and I'm a fresh Computer Science graduate from Portland State University. I've worked as a System Administrator for the last three years, but I'm trying to break into more of an engineering role. Currently, the languages that I practice are C++, Java, Python, JavaScript, TypeScript, and C. The fields within Computer Science which I am excited to explore more are Machine Learning, Embedded Systems, and DevOps. I enjoy outside contact and communication, so feel free to reach out in the contact section.";
  /*p.style.width = "40%";
  p.style.textAlign = "left";
  p.style.marginLeft = "auto";
  p.style.marginRight = "20%";
  p.style.fontSize = "40px";*/
  aboutSection.appendChild(p);
};

makeImg();
addBio();
