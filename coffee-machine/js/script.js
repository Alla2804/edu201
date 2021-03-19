let money = document.getElementById("money");
let display = document.getElementById("display");//теперь текст появляется на дисплее благодаря его свойству, а не в консоли
let bill_acc = document.getElementById("bill_acc");//2 обратились чтобы вызвать метод getBoundingClientRect() так как это html элем, возвращает нам инфу про любой объект на экране и нам нужно узнать расст отступа сверху, вызвав свойство top 
let displayInfo = document.getElementById("displayInfo");
let displayBalance = document.getElementById("displayBalance");
let progressBar = document.getElementsByClassName("progress-bar")[0];//констр возвращ массив, брем 1й элем
let change_box = document.getElementById("change_box");
let lock = document.getElementById("lock");
let progress = 0;

function getCoffee(coffeName, pricelabel) {
  if(+money.value>=pricelabel) {
    money.value = +money.value-pricelabel;
    displayBalance.innerText = money.value;
    let timerId = setInterval(()=>{
      lock.hidden = false;
      if(progress>110){
      clearInterval(timerId);
      progressBar.hidden = true;
      progressBar.style.width = 0+'%';
        displayInfo.innerHTML = `<i class="fas fa-coffee"></i> Кофе ${coffeName} готов`;
        coffee_cup.style.opacity=1;
        progress = 0;
        lock.hidden = true;
        return;
      }
        else if(progress<40) displayInfo.innerHTML = `<i class="fas fa-hourglass-start"></i> Приготовление...`;
        else if(progress<80) displayInfo.innerHTML = `<i class="fas fa-hourglass-half"></i> Приготовление...`;
        else displayInfo.innerHTML = `<i class="fas fa-hourglass-end"></i> Приготовление...`;
        progressBar.hidden = false;
        progressBar.style.width = ++progress+'%';
    },70);//сделали доступ к прогрессбару
  }else{
    displayInfo.innerHTML = `<i class="fas fa-search-dollar"></i> Пополните баланс`;
  }
}
//16.03.2021 перемещение банкнот
let banknotes = document.querySelectorAll("[src$='rub.jpg']");
let zIndex = 1;
for(let i=0; i<banknotes.length; i++) {
  let banknote = banknotes[i];
  banknote.onmousedown = function(e) {//как только кликнули вызывается фя кот просчитает положение, когда происх онмаусдаун, он генерирует event приняти аргум фции 
    this.ondragstart = function() {return false;}
    this.style.position = 'absolute';
    this.style.zIndex = ++zIndex;//располагать в таком порядке в каком их брала
    this.style.transform = 'rotate(90deg)'; //1 17.03.2021
    moveAt(e); //вызов мувэт после того как сделаем онмаусдаун
    function moveAt(event) {
      banknote.style.top = (event.clientY-banknote.offsetHeight/2)+'px';
      banknote.style.left = (event.clientX-banknote.offsetWidth/2)+'px';
    }
    document.addEventListener('mousemove', moveAt);
    this.onmouseup = function() {
      document.removeEventListener('mousemove', moveAt);
      let bill_acc_top = bill_acc.getBoundingClientRect().top;//3 верх к.пр. и верх куп.
      let bill_acc_bottom = bill_acc.getBoundingClientRect().bottom - (bill_acc.getBoundingClientRect().height*2/3);//4теперь нужна граница соединения к.пр и к. для исчезновения, 2 условия надо выполнить //6 right border
      let bill_acc_left = bill_acc.getBoundingClientRect().left;//5 ищем левую сторону к.пр. и купю
      let bill_acc_right = bill_acc.getBoundingClientRect().right;
      let banknote_top = this.getBoundingClientRect().top;//3//6 right
      let banknote_left = banknote.getBoundingClientRect().left;//5
      let banknote_right = banknote.getBoundingClientRect().right;
      if(bill_acc_top<banknote_top && bill_acc_bottom>banknote_top && bill_acc_left<banknote_left && banknote_right<bill_acc_right){ //2 усл одновременно. условие при кот.исчезает банкнота завис.от значений координаты браузера y топ выше или ниже, буквально купура должна быть ниже своей верхней границей +2условия для исчезновения +левые ПО РУКЕ стороны + правые стороны по Х 
        money.value = (+money.value)+(+this.dataset.value);//сначала запросили номинал у img data-value
        displayBalance.innerText = money.value;
        this.hidden = true;//исчезла
      }
    }
  }
}

// монетки
function getChange(num) {//функция выдачи сдачи с разменом
let change_box_h = change_box.getBoundingClientRect().height-60;
let change_box_w = change_box.getBoundingClientRect().width-60;
let change = 0;
let top = Math.random()*change_box_h;
let left = Math.random()*change_box_w;
if(num>=10) change = 10;
else if(num>=5) change = 5;
else if(num>=2) change = 2;
else if(num>=1) change = 1;
else{
  let audio = new Audio("audio/getChange.mp3");
  audio.play();
  }
  if(change>0){
    let img = document.createElement('img');
    img.src = `img_cm/${change}rub.png`;
    img.style.top = top+'px';
    img.style.left= left+'px';
    img.onclick = function(){this.hidden=true;}
    change_box.append(img);
    displayBalance.innerText = money.value = 0;
    getChange(num-change);
  }
}
