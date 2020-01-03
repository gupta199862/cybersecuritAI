"use strict";

const app = document.getElementById("app");

const typewriter = new Typewriter(app, {
  loop: false,
  delay: 20,
  autoStart: true,
  cursor: "█",
  strings: []
});

const twitsData = [
  {
    text: `We want to use last techniques learned from Machine learning and apply them to #CyberSecurity field.
    We joined <strong>Ethical Hackers + Data Scientist</strong> to offer the best of both worlds.
    <br /><br />`
  },
  {
    text: `If you have:<br /><br />
  A personal blog ✓ <br/>
  A webpage ✓ <br/>
  A webApp ✓ <br/>
  An API ✓ <br/><br/>
  
  We have <strong>custom and smart solutions for your case</strong>.
  Talk to us for more information.
  You cannot stay ignoring last machine learning techniques applied to #CyberSecurity
  <br/><br/>`
  },
  {
    text: `<strong>No more 24/7 Admins.
  Let us automate it.</strong>
  Machine learning to the power.
  #sysadmin
  <br/><br/>`
  }
];

twitsData.forEach(twit => {
  typewriter.typeString(twit.text).pauseFor(2);
});

typewriter.typeString('<a href="https://mrm8488.github.io/#contact">Contact us!</a> <br />');