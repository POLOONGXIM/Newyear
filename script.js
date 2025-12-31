const data = {
  A: {
    name: "Mẹ Chế và Ngoại Yêu",
    img: "img/mevangoai.jpg",
    text: "Chúc bà ngoại của con một năm mới thật nhiều sức khỏe, vạn sự như ý và sống thật lâu bên gia đình mình bà nhé👵🏼 Mẹ ơi, năm mới con chúc mẹ luôn xinh đẹp, hạnh phúc và không còn những lo toan. Cảm ơn mẹ đã luôn là tất cả của con👩🏼‍🦰",
  },
  B: {
    name: "Chị Óc",
    img: "img/oc.jpg",
    text: "Năm mới, chúc chị Óc công việc thuận lợi, sự nghiệp thăng hoa. Chúc chị có thêm nhiều bước đột phá mới và luôn tràn đầy năng lượng sáng tạo👧🏻",
  },
  C: {
    name: "Anh An",
    img: "img/an.jpg",
    text: "Chúc mừng năm mới! Chúc anh An và chị Bảo bước sang năm 2026 với một vận hội mới, năng lượng mới. Chúc hai anh chị đánh đâu thắng đó, sớm vượt qua giai đoạn này để gặt hái quả ngọt👩‍❤️‍👨",
  },
  D: {
    name: "Chị Chanh",
    img: "img/chanh.jpg",
    text: "Năm mới, chúc chị Chanh luôn rạng rỡ, tươi trẻ. Chúc tổ ấm nhỏ của chị luôn ngập tràn tiếng cười và lúc nào cũng 'đủ nếp đủ tẻ' viên mãn👨‍👩‍👧‍👦",
  },
};

function openWish(key) {
  const w = data[key];
  document.getElementById("wishName").innerText = w.name;
  document.getElementById("wishText").innerText = w.text;
  document.getElementById("wishImg").src = w.img;
  document.getElementById("overlay").classList.add("active");
}

function closeWish() {
  document.getElementById("overlay").classList.remove("active");
}
