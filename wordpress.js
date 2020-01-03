"use strict";

const app = document.getElementById("app");

const typewriter = new Typewriter(app, {
  loop: false,
  delay: 55,
  autoStart: true,
  cursor: "█",
  strings: []
});

typewriter.typeString(
  "<strong>WordPress plugins are easy to install and config but very buggy</strong>.<br/> Exposing sometimes sensible data. <br/>We offer daily analysis of vulnerabilities for your #wordpress site.<br/> We sent you a weekly report of detected and fixed vulnerabilities.<br/><br/> Contact us for pricing plans! (Free plan includeded)."
);
