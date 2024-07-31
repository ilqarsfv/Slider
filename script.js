const dots = document.getElementsByClassName("dot");
const imgs = document.getElementsByClassName("slider_item");
var index = 0;

show_img(index); //ilk olaraq index=0 gonderilir (1ci slaydin acilisi ucun)

function show_img(elm) {
  index = elm; //gelen deyer qebul edilb indexi beraber edirik
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none"; //butun imgs none edirik
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", ""); //butun dotlardan aktiv klasini silirik
  }
  if (index > imgs.length - 1) {
    index = 0; //next ederken sonuncu slayddan sonra slayd basdan baslasin deye 
  }
  if (index < 0) {
    index = imgs.length - 1; //prev ederken birinci slayddan sonra slayd sondan baslasin deye
  }
  imgs[index].style.display = "block"; //deyeri qebul edilen indexli img blok olunur
  dots[index].classList.add("active");//deyeri qebul edilen indexli dot aktiv olunur
}

// dota klik olunanda slide deyisir
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", (elm) => {
    // digər dotlardan aktiv klasini silirem
    for (let j = 0; j < dots.length; j++) {
      dots[j].classList.remove("active"); //klik ederken butun dotlardan aktiv klasini silirik 
    }
    // daha sonra uzerine basilan dota aktiv klasi elave edilir
    elm.target.classList.add("active");
    // uzerine basilan dota aid olan sekli acir
    show_img(i);
  });
}

// prev ve next butonu
function btn(elm) {
  show_img((index += elm));
}
