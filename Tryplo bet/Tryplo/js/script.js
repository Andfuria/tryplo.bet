"use strict";
var targetUrlEnv = "https://socombos.com/obrigado-tryplo",

  acTagEnv = "tryplo-bonus",
  animateSpin = function () {
    var e = document.querySelector("#roleta2");
    e.classList.remove("spinner"),
      e.classList.add("wheel__spinner_animated-1"),
      setTimeout(function () {
        e.classList.remove("wheel__spinner_animated-1"),
          document.querySelector("form").classList.remove("hide-me"),
          document.querySelector("#page-content").classList.add("page-content");
      }, 4e3);
  },
  animateSteps = function (e) {
    var t = document.querySelector(".step-loaded.step".concat(e)),
      n = document.querySelector(".bar-loaded.step".concat(e));
    t.classList.add("loaded"),
      setTimeout(function () {
        n.classList.add("loaded");
      }, 700);
  },
  addSpinAnimation = function (e) {
    e.addEventListener("click", function () {
      animateSpin(), animateSteps(1);
    });
  };
document.querySelectorAll(".runSpin").forEach(addSpinAnimation),
  (function () {
    document.querySelector("._form_36 > form").classList.add("hide-me"),
      (document.getElementById("_form_36_submit").disabled = !0),
      document.getElementById("_form_36_submit").classList.add("hide-me"),
      (document.querySelector(
        "div._form_element._x52788535._full_width._clear > div"
      ).innerHTML = "PARABÉNS JOGADOR! VOCÊ GANHOU R$300,00 EM BÔNUS!"),
      document
        .querySelector(
          "div._form-content > div._form_element._x90837047._full_width"
        )
        .classList.add("hide-me"),
      document
        .querySelector(
          "div._form-content > div._form_element._x73138634._full_width"
        )
        .classList.add("hide-me"),
      (document.getElementById("field[48]").value = ""),
      (document.getElementById("field[49]").value = "");
    var e = document.querySelector("._form_36 > form"),
      t = document.createElement("button"),
      n =
        ((t.innerHTML = "Enviar"),
        (t.type = "button"),
        (t.className = "btn btn-success btn-lg"),
        (t.style.cssText = "width: 100%;"),
        (t.id = "customSubmit"),
        document.querySelector("._form_36 > form > div._form-content"));
    n && n.appendChild(t),
      (document.getElementById("customSubmit").onclick = function () {
        var t = new URL(window.location),
          n = ((t = Object.fromEntries(t.searchParams)), new URL(targetUrlEnv)),
          d = Object.fromEntries(n.searchParams);
        ((d = Object.assign(d, t)).afp =
          document.getElementById("email").value || ""),
          (d.afp1 = d.fbclid || ""),
          (d.afp2 = document.getElementById("phone").value || ""),
          (d.afp4 = document.getElementById("fullname").value || ""),
          (d.afp5 = d.jtm || ""),
          (d.c = d.jtm || ""),
          (n.search = new URLSearchParams(d)),
          (document.getElementById("field[48]").value = n.href.replace(
            /https?:\/\//i,
            ""
          )),
          (document.getElementById("field[49]").value = acTagEnv),
          (document.getElementById("customSubmit").disabled = !0),
          e.requestSubmit(),
          setTimeout(function () {
            document.getElementById("customSubmit").disabled = !1;
          }, 2500);
      });
  })();
