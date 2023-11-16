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

const paragraphs = JSON.parse(localStorage.getItem('Array_context')) || ["hello world", "mistake", "have a good day", "beauty and the beats", "the man who laugh", "no pain no gain"];

let randomText;
let charIndex = 0;
inputFeild = document.querySelector(".wrapper .input-field");
var input_value = document.getElementById("input-new");
let mistake = 0;
let isTyping = 0;
timeTag = document.querySelector('.time span b');
wpmTag = document.querySelector('.wpm span b');
cpmTag = document.querySelector('.cpm span b');
let time, maxTime = 60, timeLeft = maxTime;
let wpm = cpm = 0;
let point = document.getElementById("point");
let pointz = 0;

function ranDomContent(){
  const typingText = document.getElementById("typing-text_p")
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
    randomText = paragraphs[randomIndex];

}

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
  // characters[charIndex].classList.add("active");
  var mistakeH = document.getElementById("mistake_p");
  mistakeH.innerHTML = mistake;
  cpm = charIndex - mistake;
  cpmTag.innerText = charIndex - mistake;
  wpm = Math.round((((charIndex - mistake)/5) / (maxTime - timeLeft)) * 60);
  wpmTag.innerHTML = wpm;

  // if(input_value.value == paragraphs[])
  console.log(input_value.value, randomText);
  if(input_value.value.length == randomText.length){
    if(input_value.value == randomText){
      pointz++;
    }else{
      pointz--;
    }
    input_value.value = "";
    ranDomContent();
    charIndex = 0;
    
  }
  
  point.innerHTML = pointz;
}

function initTimer(){
  if(timeLeft > 0){
    timeLeft--;
    timeTag.innerText = timeLeft;
  }else{
    alert("het gio !!");
    clearInterval(time);
  }
}
ranDomContent();
inputFeild.addEventListener("input", initTyping);