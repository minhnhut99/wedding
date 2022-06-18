window.addEventListener("load", () => {
  AOS.init({
    offset: 200,
    duration: 500,
    easing: "ease-in-quad",
    delay: 100,
  });
  const colorPicture = document.querySelectorAll(".profile-picture");
  const colorIcon = document.querySelectorAll(".fa-heart");
  const boxContent = document.querySelectorAll(".box-content");
  const imageItem = document.querySelectorAll(".image-item");
  let box_content = Object.values(boxContent);
  let image_item = Object.values(imageItem);

  box_content.map((item, idx) => {
    if (idx % 2 === 0) {
      item.setAttribute("data-aos", "flip-down");
    } else if (idx % 3 === 0) {
      item.setAttribute("data-aos", "fade-up");
    } else if (idx % 4 === 0) {
      item.setAttribute("data-aos", "fade-right");
    } else if (idx % 5 === 0) {
      item.setAttribute("data-aos", "fade-left");
    } else if (idx % 6 === 0) {
      item.setAttribute("data-aos", "fade-up-left");
    } else if (idx % 7 === 0) {
      item.setAttribute("data-aos", "fade-up-right");
    } else if (idx % 8 === 0) {
      item.setAttribute("data-aos", "fade-down-left");
    } else if (idx % 9 === 0) {
      item.setAttribute("data-aos", "fade-down-right");
    } else {
      item.setAttribute("data-aos", "flip-left");
    }
  });

  image_item.map((item, idx) => {
    if (idx % 2 === 0) {
      item.setAttribute("data-aos", "flip-down");
    } else if (idx % 3 === 0) {
      item.setAttribute("data-aos", "fade-up");
    } else if (idx % 4 === 0) {
      item.setAttribute("data-aos", "fade-right");
    } else if (idx % 5 === 0) {
      item.setAttribute("data-aos", "fade-left");
    } else if (idx % 6 === 0) {
      item.setAttribute("data-aos", "fade-up-left");
    } else if (idx % 7 === 0) {
      item.setAttribute("data-aos", "fade-up-right");
    } else if (idx % 8 === 0) {
      item.setAttribute("data-aos", "fade-down-left");
    } else if (idx % 9 === 0) {
      item.setAttribute("data-aos", "fade-down-right");
    } else {
      item.setAttribute("data-aos", "flip-left");
    }
  });

  var result = Object.keys(colorPicture).map((key) => [
    Number(key),
    colorPicture[key],
  ]);

  var result1 = Object.keys(colorIcon).map((key) => [
    Number(key),
    colorIcon[key],
  ]);

  const generateRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  result.map((item, idx) => {
    item[1].style.backgroundColor = generateRandomColor();
  });
  result1.map((item1, idx1) => {
    item1[1].style.color = generateRandomColor();
  });
});
