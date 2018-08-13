  var howMany = 7
  var quote = new Array(howMany+1)
  quote[0]="Квартира"
  quote[1]="Subaru legacy B4 260л.с. 4wd"
  quote[2]="Iphone 6"
  quote[3]="Apple Macbook"
  quote[4]="Кросовки"
  quote[5]="Сноубордические очки"
  quote[6]="Балаклава"
  quote[7]="Фигурка Джон Сноу"
  autoplay = false
function rndnumber(){
        var randscript = -1;
        while (randscript < 0 || randscript > howMany || isNaN(randscript))
        {randscript = parseInt(Math.random()*(howMany+1))}
        return randscript};
     quo = rndnumber();
     quox = quote[quo];
  document.write(quox);