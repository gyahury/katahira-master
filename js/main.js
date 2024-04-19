"use strict";

const useVoice = (character) => {
  if ("speechSynthesis" in window) {
    let msg = new SpeechSynthesisUtterance(character);
    msg.lang = "ja-JP";
    window.speechSynthesis.speak(msg);
  } else {
    alert("Your browser does not support the Web Speech");
  }
};
