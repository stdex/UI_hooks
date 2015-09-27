$(document).ready(function(){
   
    var count=99;
    $(".count-topper").text(count);
    var speed = 3*1000;
    var dec = 1;
    
    var refreshIntervalId = setInterval(timer, speed);

    function timer()
    {
      count = count - dec;
      dec = dec+2;
      
      if (count <= 0)
      {
         clearInterval(refreshIntervalId);
         $(".count-topper").text("0");
      }
      else {
          
      
        $(".count-topper").text(count);

        }

    }
    
    /*
    var counter = 300;
    var myFunction = function(){
        clearInterval(interval);
        counter *= 50000;
        interval = setInterval(doPlusOneCount, counter);
    }
    var interval = setInterval(doPlusOneCount, counter);
    
    //setInterval(doPlusOneCount, 1*1000);

    var count_all = 99;
    updatetopper();
    
    function doPlusOneCount() {
        //var inc = getRandomInt(3,9);
        var inc = 1;
        console.log(inc);
        count_all -= inc;
        updatetopper();
    }
    
    function updatetopper() {
        $(".count-topper").text(count_all);
    }
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
*/

});
