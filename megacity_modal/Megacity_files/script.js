$(document).ready(function () {
    
    toggle_modal();
    //$('.input-category').val($(this).attr('title'));

    $('.modal-steps-wrapper .step-one .btn-modal, .modal-steps-wrapper .step-two .btn-return').on('click', function(){
        $('.modal-steps-wrapper').toggleClass('slide');
        
        
        
        return false;
    })
    function toggle_modal(){
        $('.modal-wrapper').fadeToggle(200);
        $('.slick-slide').toggle();
        /*
        console.log($("#ProgressBarSample").getSettings());
        var progressBar1 = $("#ProgressBarSample1").progressBar({
            percent: $("#ProgressBarSample").getSettings().percent,
            split: 0,
            width: "900px"
        });
        * */
        
    }
    $('.modal-wrapper .close-img').on('click', function(){
        toggle_modal();
    });
    
    $('.modal-slider').slider({
              min: 1000000,
              max: 15000000,
              step: 500000,
              animate: true,
              value: 1000000,
              slide: function( event, ui ) {
                  var arg = parseFloat($('.modal-slider .ui-slider-handle').css('left'));
                  var val = ui.value;
                  change_slider_val(val);
                  $(".input-cost").val(val);
              }
    });
    $('.modal-slider .ui-slider-handle').append('<span class="slider-val">1&nbsp;000&nbsp;000</span>');

    //управление положением значения для слайдера
    function change_slider_val(val){
        var slider_val_width = parseFloat($('.slider-val').css('width'))/-2;
        slider_val_width += 20,92857142857143;
        $('.slider-val').css('margin-left', slider_val_width);
        if(val > 0){var formatted_val = replacer(val);}
        $('.slider-val').text(formatted_val);
    }
    change_slider_val();

    //Разделения числа пробелами
    function replacer(n) {
        var digits, delim = ' ';

        n = n.toFixed(0);
        digits = n.length > 3 ? n.length % 3 : 0;

        return (digits ? n.substr(0, digits) + delim : '') + n.substr(digits).replace(/(\d{3})(?=\d)/g, "$1" + delim);
    }
    
    var currentCount = 0;
    
    doIncCount();
    
    setInterval(doPlusOneCount, 30*1000);

    var progressBar = $("#ProgressBarSample").progressBar({
		percent: 15,
		split: 0,
		width: "900px"
	});
    
    var progressBar1 = $("#ProgressBarSample1").progressBar({
        percent: $("#ProgressBarSample").getSettings().percent,
        split: 0,
        width: "900px"
    });
    
	//$("#ProgressBarSample").changePercent(15);
    
    var cntSelectd = 0;
    var selected1;
    $("#district").change(function() {
        if(selected1 == null) {
            changeProgressBar();
            selected1 = $(this);
        }
        else {
            selected1 = $(this);
        }

    });
    
    var selected2;
    $("#rooms").change(function() {
        if(selected2 == null) {
            changeProgressBar();
            selected2 = $(this);
        }
        else {
            selected2 = $(this);
        }

    });
    
    var selected3;
    $("#type").change(function() {
        if(selected3 == null) {
            changeProgressBar();
            selected3 = $(this);
        }
        else {
            selected3 = $(this);
        }

    });
    
    var selected4;
    $( ".modal-slider" ).on( "slidechange", function( event, ui ) {
        if(selected4 == null) {
            changeProgressBar();
            selected4 = $(this);
        }
        else {
            selected4 = $(this);
        }
    });
    
    var selected5;
    $("input[name=phone]").bind("change", function() {
        if(selected5 == null) {
            changeProgressBar();
            selected5 = $(this);
        }
        else {
            selected5 = $(this);
        }
    });
    /*
    $("input[name=phone]").on("input", function() {
        console.log("Change to " + this.value);
    });
    * */
    
    function changeProgressBar() {
    
        switch(cntSelectd) {
            case 0:
                progressBar.changePercent(35);
                progressBar1.changePercent(35);
                currentCount = Math.floor(currentCount*0.65);
                break;
            case 1:
                progressBar.changePercent(55);
                progressBar1.changePercent(55);
                currentCount = Math.floor(currentCount*0.45);
                break;
            case 2:
                progressBar.changePercent(75);
                progressBar1.changePercent(75);
                currentCount = Math.floor(currentCount*0.25);
                break;
            case 3:
                progressBar.changePercent(95);
                progressBar1.changePercent(95);
                currentCount = Math.floor(currentCount*0.05);
                break;
            case 4:
                progressBar.changePercent( $("#ProgressBarSample").getSettings().percent + 20 );
                progressBar1.changePercent( $("#ProgressBarSample").getSettings().percent + 20 );
                //currentCount *= 0.05;
                break;
            default:
                break;
        }
        $(".BackProgressBar").text("Подобрано "+currentCount+" квартир");
        $(".modal-left-title").html("Для вас в наличии "+currentCount+" квартир<br>укажите данные и менеджер<br>предложит варианты<br>в течении 10 минут!");
        $("input[name=rcount]").val(currentCount);
        cntSelectd +=1;    
        
    }
    
    
    function doPlusOneCount() {
        currentCount += 1;
        $(".BackProgressBar").text("Подобрано "+currentCount+" квартир");
        $(".modal-left-title").html("В наличии "+currentCount+" квартир укажите<br> контактную информацию и<br> менеджер предложит вам <br> варианты через 10 мин.!");
        $("input[name=rcount]").val(currentCount);
    }
    
    function doIncCount() {
        var bcount = 3740;
        var today = new Date();
        today.setHours(0,0,0,0);
        var now = new Date();
        var diffMs = Math.abs(now - today);
        var diffMins = Math.floor((diffMs/1000)/30);
        var incCount = diffMins;
        currentCount = bcount+incCount;
        $(".BackProgressBar").text("Подобрано "+currentCount+" квартир");
        $(".modal-left-title").html("В наличии "+currentCount+" квартир укажите<br> контактную информацию и<br> менеджер предложит вам <br> варианты через 10 мин.!");
        $("input[name=rcount]").val(currentCount);
        //console.log(currentCount);
    }

            
});


