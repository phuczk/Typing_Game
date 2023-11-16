var buttons = document.getElementsByClassName("calc-button");

    // Sự kiện keydown
    document.addEventListener("keydown", function(event) {
      var key = event.key.toLowerCase();
      for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        if (button.getAttribute("data-key") === key) {
          button.style.backgroundColor = "orange";
          button.style.border = "none"
          button.style.color = "#FFF"
        }
      }
    });

    // Sự kiện keyup
    document.addEventListener("keyup", function(event) {
      var key = event.key.toLowerCase();
      for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        if (button.getAttribute("data-key") === key) {
          button.style.backgroundColor = "";
          button.style.border = ""
          button.style.color = ""
        }
      }
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key.toLowerCase();
        if (key === " ") {
          // Thay đổi màu sắc của nút Space
          var spaceButton = document.querySelector(".calc-button_space");
          spaceButton.style.backgroundColor = "orange";
          spaceButton.style.border = "none"
          spaceButton.style.color = "white"
        }
      });
      
      // Sự kiện keyup
      document.addEventListener("keyup", function(event) {
        var key = event.key.toLowerCase();
        if (key === " ") {
          // Đặt lại màu sắc của nút Space
          var spaceButton = document.querySelector(".calc-button_space");
          spaceButton.style.backgroundColor = "";
          spaceButton.style.border = ""
          spaceButton.style.color = ""
        }
      });

const paragraphs = ["hello world, my name is typing game", "hello, nice to meet you. what your name", "Organic foods are often considered better because they are produced naturally, without artificial intervention, and are less likely to contain harmful substances", "beauty and the beats or alice in the borderland", "the man who laugh and the dark night", "no pain no gain"];
const typingText = document.getElementById("typing-text_p")
let charIndex = 0;
console.log(typingText);
inputFeild = document.querySelector(".wrapper .input-field");


function ranDomContent(){
  typingText.innerHTML = "";
    let randomIndex = Math.floor(Math.random()* paragraphs.length);
    // let content = paragraphs[randomIndex];
    // typingText.innerHTML = content;
    paragraphs[randomIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
        // console.log(spanTag)
    });
    document.addEventListener("keydown", () =>inputFeild.focus());
    typingText.addEventListener("click", () =>inputFeild.focus());
    console.log(randomIndex);
}


let mistake = 0;
let isTyping = 0;
timeTag = document.querySelector('.time span b');
wpmTag = document.querySelector('.wpm span b');
cpmTag = document.querySelector('.cpm span b');
let time, maxTime = 30, timeLeft = maxTime;
let wpm = cpm = 0;


function initTyping(){
  const characters = typingText.querySelectorAll("span");
  let typedChar = inputFeild.value.split("")[charIndex];
  if(!isTyping){
    time = setInterval(initTimer, 1000);
    isTyping = true;
  }
  if(typedChar == null){
    charIndex--;
    if(characters[charIndex].classList.contains("incorrect")){
      mistake--;
    }
    characters[charIndex].classList.remove("correct", "incorrect");
  }else{
    if(characters[charIndex].innerText === typedChar){
      characters[charIndex].classList.add("correct");
    }else{
      characters[charIndex].classList.add("incorrect");
      mistake++;
    }
    charIndex++;
  }
  characters.forEach(span => span.classList.remove("active"));
  characters[charIndex].classList.add("active");
  var mistakeH = document.getElementById("mistake_p");
  mistakeH.innerHTML = mistake;
  cpm = charIndex - mistake;
  cpmTag.innerHTML = charIndex - mistake;
}

function initTimer(){
  if(timeLeft > 0){
    timeLeft--;
    timeTag.innerText = timeLeft;
  }else{
    clearInterval(time);
  }
}
ranDomContent();
inputFeild.addEventListener("input", initTyping);