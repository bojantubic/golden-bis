var images = [];
function preload() {
  for (i = 0; i < preload.arguments.length; i++)
    (images[i] = new Image()), (images[i].src = preload.arguments[i]);
}
preload(
  "img/img-1.webp",
  "img/img-2.webp",
  "img/img-3.webp",
  "img/img-4.webp",
  "img/img-5.webp",
  "img/img-6.webp",
  "img/img-7.webp",
  "img/img-8.webp",
  "img/img-9.webp"
);
