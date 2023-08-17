# JS-sideProject

https://www.freecodecamp.org/korean/news/javascript-projects-for-beginners/ <br>
이 웹 사이트를 기반으로 27가지 사이드 프로젝트를 진행하려고 한다.

# Projects

## ColorFlipper

![ezgif com-video-to-gif (3)](https://github.com/pizzaYami/JS-sideProject/assets/116322645/907af4db-7214-4ee8-9eb6-7172b1133f9c)

### 배운점

1. 색을 나타내는 6자리가 0~9, A~F까지의 문자인 것을 알고 랜덤으로 돌려서 랜덤색을 만들어내었다.
2. body에 ```height:100%``` 해도 안채워지길래 이상했는데 body부모인 html이 있다고한다!! ```html, body {height:100%}``` 하니깐 해결

## Counter

![ezgif com-video-to-gif (4)](https://github.com/pizzaYami/JS-sideProject/assets/116322645/9bf84464-d407-4d15-b3e6-010b9e9ff37f)

### 배운점
1. 이벤트리스너 함수부분에 매개변수 넣기
```
function setCounterNumber(num) {
  countNumber.innerHTML = number;
  changeColor();
}

dec_bt.addEventListener("click", function () {
  number -= 1;
  setCounterNumber();
});
reset_bt.addEventListener("click", function () {
  number = 0;
  setCounterNumber();
});
inc_bt.addEventListener("click", function () {
  number += 1;
  setCounterNumber();
});
```
이 코드에서 중복되는 function을 떼어내려고했는데 addEventListener("click", 함수) <- 여기 함수부분에 매개변수를 넣을 수 없어서 리팩토링이 안되어 불편했는데 chatGPT한테 물어보니 화살표함수로 해결이 가능했다.
```
function setCounterNumber(num) {
  if (num !== 0) {
    number = number + num;
    countNumber.innerHTML = number;
    changeColor();
  } else {
    number = 0;
    countNumber.innerHTML = number;
    changeColor();
  }
}

dec_bt.addEventListener("click", () => setCounterNumber(-1));
reset_bt.addEventListener("click", () => setCounterNumber(0));
inc_bt.addEventListener("click", () => setCounterNumber(1));
```
