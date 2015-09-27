$(document).ready(function(){
    
    var count_all;
    var count_now;
    var count_orders;
    
    $.get( "counters.txt", function( data ) {
        var cnt_array = data.split(';');
        count_all = parseInt(cnt_array[0]);
        count_now = parseInt(cnt_array[1]);
        count_orders = parseInt(cnt_array[2]);
        updatetopper();
        setInterval(doPlusOneCount, 10*1000);
        //console.log(data);
    });
    
    console.log(count_all);
    
    /*
    var count_all = 322;
    var count_now = 228;
    var count_orders = 111;
    */
    

    
    function doPlusOneCount() {
        var inc = getRandomInt(3,9);
        console.log(inc);
        count_all += inc;
        count_now += inc;
        updatetopper();
    }
    
    function updatetopper() {
        $.ajax({
            url: "save_counts.php",
            type: "post",
            data: { 
                count1: count_all,
                count2: count_now,
                count3: count_orders
            }  
        }); 
        $(".count-topper").text("Посетителей сегодня: "+count_all+" | Сейчас на сайте: "+count_now+" |  Покупок сегодня: "+count_orders+"");
    }
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var i = 0;
    function yved(){
        i=1;
        $('.yved:nth-child('+i+')').fadeIn(500).delay(7000).fadeOut(500);//В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
    }
    setTimeout(function(){
        count_orders += 1;
        updatetopper();
        setInterval(
            function(){
                i=i+1;
                if(i>10) i=1;//10 - количество уведомлений
                $('.yved:nth-child('+i+')').fadeIn(500).delay(7000).fadeOut(500);//В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
                count_orders += 1;
                updatetopper();
            },25000);//25000 - задержка в мс меду показами уведомлений
        yved();
    },7000);//10000 - задержка в мс перед показом первого уведомления
});
