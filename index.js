"use strict";

const app = document.getElementById("app");

const typewriter = new Typewriter(app, {
  loop: false,
  delay: 55,
  autoStart: true,
  cursor: "█",
  strings: []
});

typewriter
.typeString('We are Cybersecurity + AI')
.pauseFor(500)
.deleteChars(18)
  .typeString(
    "<strong>CybersecuritAI</strong>: a game changer approach in the cybersecurity field."
  )
  .pauseFor(1000)
  .typeString("<br /><br />")
  .typeString(
    "We use last <strong>Machine Learning and Deep Learning</strong> techniques to protect your <strong>web/app/API.</strong>"
  )
  .pauseFor(1000)
  .typeString("<br /><br />")
  //.deleteAll(1)
  .typeString("Find us online: <br />")
  .pauseFor(300)
  .typeString('<a href="https://twitter.com/AiCybersecurit">Twitter</a> <br />')
  .pauseFor(1000)
  .typeString("<br /><br />")
  //.deleteAll(1)
  .typeString("More info: coming soon! <br />")

