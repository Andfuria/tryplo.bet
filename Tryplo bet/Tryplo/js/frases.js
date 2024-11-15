"use strict";
!(function () {
  var a = [
    {
      frase: "Pedro Oliveira acabou de ganhar R$300",
      imgSrc: "./img/homens/man1.jpg",
    },
    {
      frase: "Ana Alves acabou de ganhar R$25",
      imgSrc: "./img/mulheres/woman1.jpg",
    },
    {
      frase: "Fernanda Santos acabou de ganhar R$150",
      imgSrc: "./img/mulheres/woman2.jpg",
    },
    {
      frase: "Bruno Souza acabou de ganhar R$300",
      imgSrc: "./img/homens/man2.jpg",
    },
    {
      frase: "Fabrício Costa acabou de ganhar R$25",
      imgSrc: "./img/homens/man3.jpg",
    },
    {
      frase: "Juliana Lima acabou de ganhar R$150",
      imgSrc: "./img/mulheres/woman3.jpg",
    },
    {
      frase: "Yasmin Araújo acabou de ganhar R$300",
      imgSrc: "./img/mulheres/woman4.jpg",
    },
    {
      frase: "Lucilene Silva acabou de ganhar R$25",
      imgSrc: "./img/mulheres/woman5.jpg",
    },
    {
      frase: "Everaldo Rocha acabou de ganhar R$150",
      imgSrc: "./img/homens/man4.jpg",
    },
    {
      frase: "Oswaldo Carvalho acabou de ganhar R$300",
      imgSrc: "./img/homens/man5.jpg",
    },
    {
      frase: "João Pereira acabou de ganhar R$25",
      imgSrc: "./img/homens/man6.jpg",
    },
    {
      frase: "Ariadiny Gomes acabou de ganhar R$150",
      imgSrc: "./img/mulheres/woman6.jpg",
    },
    {
      frase: "Carla Ferreira acabou de ganhar R$300",
      imgSrc: "./img/mulheres/woman7.jpg",
    },
    {
      frase: "Gabriela Vieira acabou de ganhar R$25",
      imgSrc: "./img/mulheres/woman8.jpg",
    },
    {
      frase: "Wellington Martins acabou de ganhar R$150",
      imgSrc: "./img/homens/man7.jpg",
    },
    {
      frase: "Iago Barbosa acabou de ganhar R$300",
      imgSrc: "./img/homens/man8.jpg",
    },
    {
      frase: "Maicon Ramos acabou de ganhar R$25",
      imgSrc: "./img/homens/man9.jpg",
    },
    {
      frase: "Vitória Castro acabou de ganhar R$150",
      imgSrc: "./img/mulheres/woman9.jpg",
    },
    {
      frase: "Matheus Santos acabou de ganhar R$300",
      imgSrc: "./img/homens/man10.jpg",
    },
    {
      frase: "Marta Rocha acabou de ganhar R$25",
      imgSrc: "./img/mulheres/woman10.jpeg",
    },
    {
      frase: "Geraldo Nascimento acabou de ganhar R$300",
      imgSrc: "./img/homens/man11.jpeg",
    },
    {
      frase: "Daniel Ribeiro acabou de ganhar R$25",
      imgSrc: "./img/homens/man12.jpeg",
    },
  ];
  window.addEventListener("DOMContentLoaded", function () {
    var e = document.getElementById("people"),
      r = document.getElementById("people-p"),
      m = document.querySelector("#people-img");
    setInterval(function () {
      var g = Math.floor(Math.random() * a.length),
        n = a[g].frase;
      g = a[g].imgSrc;
      (r.innerHTML = n),
        (m.src = g),
        e.classList.toggle("display-off"),
        e.classList.remove("slide-animation"),
        setTimeout(function () {
          e.classList.toggle("display-off"), e.classList.add("slide-animation");
        }, 20);
    }, 2400);
  });
})();
