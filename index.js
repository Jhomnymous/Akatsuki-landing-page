const section = document.querySelectorAll("section");

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offSet = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    
    if (top > offSet && top < offSet + height) {
      sec.classList.add("start-animation");
    } else {
      sec.classList.remove("start-animation");
    }
  });
};