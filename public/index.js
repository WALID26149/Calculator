const screenResulte = document.querySelector('.screenResulte');
const btns = Array.from(document.querySelectorAll('.btn'));

// console.log(btns);
btns.map( btn => {
  btn.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'AC':
         screenResulte.innerText = "";
        break;
        case 'CE':
          if (screenResulte.innerText) {
            screenResulte.innerText = screenResulte.innerText.slice(0, -1);
          }
          break;
          case '=':
            try {
              screenResulte.innerText = eval(screenResulte.innerText);

                let activeButton = document.querySelector(".equalBtn");

                activeButton.classList.add('pressed');

                setTimeout(function(){
                   activeButton.classList.remove('pressed');
                }, 60);

            } catch {
              screenResulte.innerText = "ERROR";
            }
            break;
          break;
      default:
        screenResulte.innerText += e.target.innerText;
        if (btns >= 18) {
          screenResulte.innerText;
        }
    }
  });
});
