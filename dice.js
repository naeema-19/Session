const diceSymbols = ["⚀","⚁","⚂","⚃","⚄","⚅"];
    let score = 0;

    const diceDiv = document.getElementById("dice");
    const scoreSpan = document.getElementById("score");
    const rollBtn = document.getElementById("rollBtn");

    rollBtn.addEventListener("click", () => {
      diceDiv.classList.add("rolling");

      setTimeout(() => {
        const diceNumber = Math.floor(Math.random() * 6);
        diceDiv.textContent = diceSymbols[diceNumber];
        score += diceNumber + 1;
        scoreSpan.textContent = score;
        diceDiv.classList.remove("rolling");

        if(score >= 20) {
          alert("🎉 You reached 20! You win!");
          score = 0; // reset score
          scoreSpan.textContent = score;
          diceDiv.textContent = "⚀"; // reset dice
        }
      }, 1000);
    });