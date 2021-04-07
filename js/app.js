//Header fixed

window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
}

//Portfolio Gallery

const filterBtn = document.querySelector("#filterBtn").children;
const item = document.querySelector(".gallery").children;

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    for (let j = 0; j < filterBtn.length; j++) {
      filterBtn[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target");
    for (let k = 0; k < item.length; k++) {
      item[k].style.display = "none";
      if (target == item[k].getAttribute("data-id")) {
        item[k].style.display = "block";
      }
      if (target == "all") {
        item[k].style.display = "block";
      }
    }
  });
}

const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

lightbox.addEventListener("click", function () {
  if (event.target != lightboxImg) {
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
  }
});

closeLightbox.addEventListener("click", function () {
  lightbox.classList.remove("show");
  lightbox.classList.add("hide");
});

const gallery = document.querySelector(".gallery");

const galleryItem = document.querySelectorAll(".item");

galleryItem.forEach(function (element) {
  element.querySelector(".fa-plus").addEventListener("click", function () {
    lightbox.classList.remove("hide");
    lightbox.classList.add("show");
    lightboxImg.src = element.querySelector("img").getAttribute("src");
  });
});

// Contact

const button = document.getElementById("form_button");

button.addEventListener("click", validate);

function validate(e) {
  e.preventDefault()
  console.log("hii");

  checkUsername()

}

function checkUsername() {
  const userName = document.getElementById('name_input').value
  const nameErrorHolder = document.querySelector('#name_input + .alert')
  let nameError = '';

  if (!userName) {

    nameErrorHolder.innerHTML = "Please enter a valid name"
    nameErrorHolder.classList.remove("d-none")

  } else if (userName.match(/\d/g)) {
    nameErrorHolder.innerHTML = "Username Cannont contain digits"
    nameErrorHolder.classList.remove("d-none")
  } else {
    nameErrorHolder.classList.add("d-none")
  }
}

//Footer Year 
var year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();