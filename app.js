const contentText = document.querySelector(".content");

document.addEventListener(
  "DOMcontentLoaded",
  function () {
    contentText.innerHtml = "this is the content";
  },
  false,
);
