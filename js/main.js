'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const characterType = document.getElementById('characterType').textContent;
  const quizBtns = document.querySelectorAll('.quizBtn');
  let characters = [];

  if (characterType.includes('Hiragana')) {
    characters = [
      { type: 'hira', character: 'あ', answer: 'a' },
      { type: 'hira', character: 'い', answer: 'i' },
      { type: 'hira', character: 'う', answer: 'u' },
      { type: 'hira', character: 'え', answer: 'e' },
      { type: 'hira', character: 'お', answer: 'o' },
      { type: 'hira', character: 'か', answer: 'ka' },
      { type: 'hira', character: 'き', answer: 'ki' },
      { type: 'hira', character: 'く', answer: 'ku' },
      { type: 'hira', character: 'け', answer: 'ke' },
      { type: 'hira', character: 'こ', answer: 'ko' },
      { type: 'hira', character: 'さ', answer: 'sa' },
      { type: 'hira', character: 'し', answer: 'shi' },
      { type: 'hira', character: 'す', answer: 'su' },
      { type: 'hira', character: 'せ', answer: 'se' },
      { type: 'hira', character: 'そ', answer: 'so' },
      { type: 'hira', character: 'た', answer: 'ta' },
      { type: 'hira', character: 'ち', answer: 'chi' },
      { type: 'hira', character: 'つ', answer: 'tsu' },
      { type: 'hira', character: 'て', answer: 'te' },
      { type: 'hira', character: 'と', answer: 'to' },
      { type: 'hira', character: 'な', answer: 'na' },
      { type: 'hira', character: 'に', answer: 'ni' },
      { type: 'hira', character: 'ぬ', answer: 'nu' },
      { type: 'hira', character: 'ね', answer: 'ne' },
      { type: 'hira', character: 'の', answer: 'no' },
      { type: 'hira', character: 'は', answer: 'ha' },
      { type: 'hira', character: 'ひ', answer: 'hi' },
      { type: 'hira', character: 'ふ', answer: 'fu' },
      { type: 'hira', character: 'へ', answer: 'he' },
      { type: 'hira', character: 'ほ', answer: 'ho' },
      { type: 'hira', character: 'ま', answer: 'ma' },
      { type: 'hira', character: 'み', answer: 'mi' },
      { type: 'hira', character: 'む', answer: 'mu' },
      { type: 'hira', character: 'め', answer: 'me' },
      { type: 'hira', character: 'も', answer: 'mo' },
      { type: 'hira', character: 'や', answer: 'ya' },
      { type: 'hira', character: 'ゆ', answer: 'yu' },
      { type: 'hira', character: 'よ', answer: 'yo' },
      { type: 'hira', character: 'ら', answer: 'ra' },
      { type: 'hira', character: 'り', answer: 'ri' },
      { type: 'hira', character: 'る', answer: 'ru' },
      { type: 'hira', character: 'れ', answer: 're' },
      { type: 'hira', character: 'ろ', answer: 'ro' },
      { type: 'hira', character: 'わ', answer: 'wa' },
      { type: 'hira', character: 'を', answer: 'wo' },
      { type: 'hira', character: 'ん', answer: 'n' },
      { type: 'hira', character: 'が', answer: 'ga' },
      { type: 'hira', character: 'ぎ', answer: 'gi' },
      { type: 'hira', character: 'ぐ', answer: 'gu' },
      { type: 'hira', character: 'げ', answer: 'ge' },
      { type: 'hira', character: 'ご', answer: 'go' },
      { type: 'hira', character: 'ざ', answer: 'za' },
      { type: 'hira', character: 'じ', answer: 'ji' },
      { type: 'hira', character: 'ず', answer: 'zu' },
      { type: 'hira', character: 'ぜ', answer: 'ze' },
      { type: 'hira', character: 'ぞ', answer: 'zo' },
      { type: 'hira', character: 'だ', answer: 'da' },
      { type: 'hira', character: 'ぢ', answer: 'ji' },
      { type: 'hira', character: 'づ', answer: 'zu' },
      { type: 'hira', character: 'で', answer: 'de' },
      { type: 'hira', character: 'ど', answer: 'do' },
      { type: 'hira', character: 'ば', answer: 'ba' },
      { type: 'hira', character: 'び', answer: 'bi' },
      { type: 'hira', character: 'ぶ', answer: 'bu' },
      { type: 'hira', character: 'べ', answer: 'be' },
      { type: 'hira', character: 'ぼ', answer: 'bo' },
      { type: 'hira', character: 'ぱ', answer: 'pa' },
      { type: 'hira', character: 'ぴ', answer: 'pi' },
      { type: 'hira', character: 'ぷ', answer: 'pu' },
      { type: 'hira', character: 'ぺ', answer: 'pe' },
      { type: 'hira', character: 'ぽ', answer: 'po' },
    ];
  } else if (characterType.includes('Katakana')) {
    characters = [
      { type: 'kata', character: 'ア', answer: 'a' },
      { type: 'kata', character: 'イ', answer: 'i' },
      { type: 'kata', character: 'ウ', answer: 'u' },
      { type: 'kata', character: 'エ', answer: 'e' },
      { type: 'kata', character: 'オ', answer: 'o' },
      { type: 'kata', character: 'カ', answer: 'ka' },
      { type: 'kata', character: 'キ', answer: 'ki' },
      { type: 'kata', character: 'ク', answer: 'ku' },
      { type: 'kata', character: 'ケ', answer: 'ke' },
      { type: 'kata', character: 'コ', answer: 'ko' },
      { type: 'kata', character: 'サ', answer: 'sa' },
      { type: 'kata', character: 'シ', answer: 'shi' },
      { type: 'kata', character: 'ス', answer: 'su' },
      { type: 'kata', character: 'セ', answer: 'se' },
      { type: 'kata', character: 'ソ', answer: 'so' },
      { type: 'kata', character: 'タ', answer: 'ta' },
      { type: 'kata', character: 'チ', answer: 'chi' },
      { type: 'kata', character: 'ツ', answer: 'tsu' },
      { type: 'kata', character: 'テ', answer: 'te' },
      { type: 'kata', character: 'ト', answer: 'to' },
      { type: 'kata', character: 'ナ', answer: 'na' },
      { type: 'kata', character: 'ニ', answer: 'ni' },
      { type: 'kata', character: 'ヌ', answer: 'nu' },
      { type: 'kata', character: 'ネ', answer: 'ne' },
      { type: 'kata', character: 'ノ', answer: 'no' },
      { type: 'kata', character: 'ハ', answer: 'ha' },
      { type: 'kata', character: 'ヒ', answer: 'hi' },
      { type: 'kata', character: 'フ', answer: 'fu' },
      { type: 'kata', character: 'ヘ', answer: 'he' },
      { type: 'kata', character: 'ホ', answer: 'ho' },
      { type: 'kata', character: 'マ', answer: 'ma' },
      { type: 'kata', character: 'ミ', answer: 'mi' },
      { type: 'kata', character: 'ム', answer: 'mu' },
      { type: 'kata', character: 'メ', answer: 'me' },
      { type: 'kata', character: 'モ', answer: 'mo' },
      { type: 'kata', character: 'ヤ', answer: 'ya' },
      { type: 'kata', character: 'ユ', answer: 'yu' },
      { type: 'kata', character: 'ヨ', answer: 'yo' },
      { type: 'kata', character: 'ラ', answer: 'ra' },
      { type: 'kata', character: 'リ', answer: 'ri' },
      { type: 'kata', character: 'ル', answer: 'ru' },
      { type: 'kata', character: 'レ', answer: 're' },
      { type: 'kata', character: 'ロ', answer: 'ro' },
      { type: 'kata', character: 'ワ', answer: 'wa' },
      { type: 'kata', character: 'ヲ', answer: 'wo' },
      { type: 'kata', character: 'ン', answer: 'n' },
      { type: 'kata', character: 'ガ', answer: 'ga' },
      { type: 'kata', character: 'ギ', answer: 'gi' },
      { type: 'kata', character: 'グ', answer: 'gu' },
      { type: 'kata', character: 'ゲ', answer: 'ge' },
      { type: 'kata', character: 'ゴ', answer: 'go' },
      { type: 'kata', character: 'ザ', answer: 'za' },
      { type: 'kata', character: 'ジ', answer: 'ji' },
      { type: 'kata', character: 'ズ', answer: 'zu' },
      { type: 'kata', character: 'ゼ', answer: 'ze' },
      { type: 'kata', character: 'ゾ', answer: 'zo' },
      { type: 'kata', character: 'ダ', answer: 'da' },
      { type: 'kata', character: 'ヂ', answer: 'ji' },
      { type: 'kata', character: 'ヅ', answer: 'zu' },
      { type: 'kata', character: 'デ', answer: 'de' },
      { type: 'kata', character: 'ド', answer: 'do' },
      { type: 'kata', character: 'バ', answer: 'ba' },
      { type: 'kata', character: 'ビ', answer: 'bi' },
      { type: 'kata', character: 'ブ', answer: 'bu' },
      { type: 'kata', character: 'ベ', answer: 'be' },
      { type: 'kata', character: 'ボ', answer: 'bo' },
      { type: 'kata', character: 'パ', answer: 'pa' },
      { type: 'kata', character: 'ピ', answer: 'pi' },
      { type: 'kata', character: 'プ', answer: 'pu' },
      { type: 'kata', character: 'ペ', answer: 'pe' },
      { type: 'kata', character: 'ポ', answer: 'po' },
    ];
  }

  const randomCharacter = () => {
    shuffle(characters);
    const selectedCharacter = characters[0];
    characterDisplay.textContent = selectedCharacter.character;
    characterDisplay.dataset.answer = selectedCharacter.answer;

    createSoundIcon(selectedCharacter.character);

    let answers = [selectedCharacter.answer];
    while (answers.length < quizBtns.length) {
      let randomAnswer =
        characters[Math.floor(Math.random() * characters.length)].answer;
      if (!answers.includes(randomAnswer)) {
        answers.push(randomAnswer);
      }
    }
    shuffle(answers);
    quizBtns.forEach((btn, index) => {
      btn.textContent = answers[index];
    });
  };

  quizBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      const selectedAnswer = this.textContent;
      const correctAnswer = characterDisplay.dataset.answer;
      if (selectedAnswer === correctAnswer) {
        alert('correct');
        randomCharacter();
      } else {
        alert('wrong');
      }
    });
  });
  randomCharacter();
});

function useTts(character) {
  if ('speechSynthesis' in window) {
    let msg = new SpeechSynthesisUtterance(character);
    msg.lang = 'ja-JP';
    msg.rate = 0.4;
    msg.pitch = 1.0;
    window.speechSynthesis.speak(msg);
  } else {
    alert('Your browser does not support the Web Speech API.\nWe recommend using the Chrome browser.');
  }
}

// Fishcer-Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createSoundIcon(character) {
  const container = document.getElementById('soundIconContainer');
  container.innerHTML = '';
  const soundIcon = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  soundIcon.setAttribute(
    'class',
    'w-6 h-6 text-gray-800 dark:text-white cursor-pointer inline-block'
  );
  soundIcon.setAttribute('aria-hidden', 'true');
  soundIcon.setAttribute('fill', 'none');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('stroke', 'currentColor');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  path.setAttribute('stroke-width', '1.5');
  path.setAttribute(
    'd',
    'M15.5 8.43A4.985 4.985 0 0 1 17 12a4.984 4.984 0 0 1-1.43 3.5m2.794 2.864A8.972 8.972 0 0 0 21 12a8.972 8.972 0 0 0-2.636-6.364M12 6.135v11.73a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z'
  );
  soundIcon.appendChild(path);

  soundIcon.addEventListener('click', function () {
    useTts(character+', ');
  });

  container.appendChild(soundIcon);
}
