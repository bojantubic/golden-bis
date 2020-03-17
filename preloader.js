var images = [];
function preload() {
  for (i = 0; i < preload.arguments.length; i++)
    (images[i] = new Image()), (images[i].src = preload.arguments[i]);
}
preload(
  "img/img-1.png",
  "img/img-2.png",
  "img/img-3.png",
  "img/img-4.png",
  "img/img-5.png",
  "img/img-6.png",
  "img/img-7.png",
  "img/img-8.png",
  "img/img-9.png"
);
