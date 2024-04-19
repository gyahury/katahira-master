"use strict"

if ('speechSynthesis' in window) {
    let msg = new SpeechSynthesisUtterance('どける');
    msg.lang = 'ja-JP';
    window.speechSynthesis.speak(msg);
} else {
    alert('Your browser does not support the Web Speech');
}