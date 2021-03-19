<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://kit.fontawesome.com/a571165878.js" crossorigin="anonymous"></script><!-- fontawesome's icons  -->
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link href="css/style.css" rel="stylesheet">
    <title>Alla Кофе машина</title>
  </head>
  <body>
    <div id="lock" hidden></div>
    <div class="container rounded mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class="coffee-btn-group my-3">
            <div class="coffee-btn rounded-circle" onclick="getCoffee('Latte', 42);"></div>
            <span>Latte 42 руб.</span>
          </div>
          <div class="coffee-btn-group my-3">
            <div class="coffee-btn rounded-circle" onclick="getCoffee('Americano', 47);"></div>
            <span>Americano 47 руб.</span>
          </div>
          <div class="coffee-btn-group my-3">
            <div class="coffee-btn rounded-circle" onclick="getCoffee('Espresso', 61);"></div>
            <span>Espresso 61 руб.</span>
          </div>
          <div class="coffee-btn-group my-3">
            <div class="coffee-btn rounded-circle" onclick="getCoffee('Cappuccino', 58);"></div>
            <span>Cappuccino 58 руб.</span>
          </div>
          <div class="coffee-btn-group my-3">
            <div class="coffee-btn rounded-circle" onclick="getCoffee('Glasse', 44);"></div>
            <span>Glasse 44 руб.</span>
          </div>
          
        </div>
        <div class="col-md-6">
          <div class="row my-3">
            <div class="col-sm-6">
              <div id="display" class="p-3 text-center">
                <p id="displayInfo">Внесите купюру и выберите напиток</p>
                <p> <i class="fas fa-ruble-sign"></i> Баланс: <span id="displayBalance"> 0</span> руб.</p>
                <div class="progress" style="background-color:navy;">
                  <div class="progress-bar bg-white" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <button class="btn btn-lg btn-light my-3" onclick="getChange(money.value)"><i class="fas fa-ruble-sign"></i> Выдать сдачу</button>
              <img id="coffee_cup" src="img_cm/green.png">
            </div>
            <div class="col-sm-6 text-center">
              <input hidden id="money" type="text">
              <img id="bill_acc" src="img_cm/bill_acc.png" alt="ячейка приема банкнот"><!-- идентифицировали, обращаемся к элементу по идент-ру  -->
              <div id="change_box" class="mx-auto mt-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
        <img src="img_cm/50rub.jpg" data-value="50" alt="50 рублей"> <!-- запишем значение атрибута чтобы потом к нему обратиться -->
        <img src="img_cm/100rub.jpg" data-value="100" alt="100 рублей">
        <img src="img_cm/500rub.jpg" data-value="500" alt="500 рублей"> 
    </div>  
   
    <script src="js/script.js"></script>
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
 
  </body>
</html>