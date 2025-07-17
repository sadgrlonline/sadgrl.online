function wordScramble() {
  const words = ["change.", "endings.", "death."];
  const chars = "¿?!¡{}░<>/\\";
  const el = document.getElementById("scramble");

  let index = 0;

  function randomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
  }

  function scrambleEffect(word, duration = 800, interval = 50) {
    return new Promise((resolve) => {
      const originalLength = word.length;
      let elapsed = 0;

      const scrambleInterval = setInterval(() => {
        let scrambled = "";
        for (let i = 0; i < originalLength; i++) {
          scrambled += randomChar();
        }
        el.textContent = scrambled;
        elapsed += interval;

        if (elapsed >= duration) {
          clearInterval(scrambleInterval);
          resolve();
        }
      }, interval);
    });
  }

  async function loopWords() {
    while (true) {
      const currentWord = words[index];
      const nextIndex = (index + 1) % words.length;
      const nextWord = words[nextIndex];

      el.textContent = currentWord;
      await new Promise((r) => setTimeout(r, 1000));

      await scrambleEffect(currentWord);
      el.textContent = nextWord;

      index = nextIndex;
      await new Promise((r) => setTimeout(r, 1500));
    }
  }

  loopWords();
}

document.addEventListener("DOMContentLoaded", () => {
  wordScramble();
});
