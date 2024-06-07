/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuseGenerator(whoList, actionList, whatList, whenList) {
  const who = whoList[Math.floor(Math.random() * who.length)];
  const action = actionList[Math.floor(Math.random() * action.length)];
  const what = whatList[Math.floor(Math.random() * what.length)];
  const when = whenList[Math.floor(Math.random() * when.length)];
  return who + " " + action + " " + what + " " + when;
}

window.onload = function() {
  //write your code here
  const WHO_LIST = ["The dog", "My grandma", "The mailman", "My bird"];
  const ACTION_LIST = ["ate", "peed", "crushed", "broke"];
  const WHAT_LIST = ["my homework", "my phone", "the car"];
  const WHEN_LIST = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];
  const excuses = excuseGenerator(WHO_LIST, ACTION_LIST, WHAT_LIST, WHEN_LIST);
  document.getElementById("excuse").innerText = excuses;
};
