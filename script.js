const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const pinterest = document.querySelector(".pinterest");
const linkedin = document.querySelector(".linkedin");
const whatsapp = document.querySelector(".whatsapp");

function shear() {
  const pinterestImg = document.querySelectorAll(".pinterest-img");

  let postURL = encodeURI(document.location.href);
  console.log(postURL);
  let postTitle = encodeURI("This is a Post Title write in heare");
  let postImg = encodeURI(pinterestImg.href);

  facebook.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postURL}`
  );
  twitter.setAttribute(
    "href",
    `https://twitter.com/share?url=${postURL}&text=${postTitle}`
  );
  pinterest.setAttribute(
    "href",
    `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postURL}&description=${postTitle}`
  );
  linkedin.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postURL}&title=${postTitle}`
  );
  whatsapp.setAttribute(
    "href",
    `https://api.whatsapp.com/send?text=${postTitle} ${postURL}`
  );
}

shear();
