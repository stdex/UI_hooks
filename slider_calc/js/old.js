function calculatePayment() {
    $( "#profit_summ" ).html(" ");
    var summ = $( "#summ" ).val();
    var average_price = $( "#average_price" ).val();
    var conversion = $( "#conversion" ).val()/100;
    var conversion_sales = $( "#conversion-sales" ).val();
    var average_margin = $( "#average-margin" ).val();
    var number_applications = (summ/average_price)*conversion;
    var number_transactions = (number_applications/100)*conversion_sales;
    var profit_summ_num = parseInt(average_margin*number_transactions - summ)
    var profit_summ = profit_summ_num.toString();
    var arr = [];
    for (var i = 0; i < 9; i++) {
        if (profit_summ.charAt(i)) {
            arr[i] = profit_summ.charAt(i);
        }
        else{arr.unshift(0)}
    };
    for (var i = 0; i < 9; i++) {
        $( "#profit_summ" ).append( "<span class=\"result-num\" >"+arr[i]+"</span>" );
    }
    var result_text = document.getElementById('result_text'); 
    //console.log(profit_summ_num);
    if (profit_summ_num < 1) {
        result_text.innerHTML = 'Убыток:(';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/loss2.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/loss2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/loss2.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/loss2.jpg)');
    }
    else if (profit_summ_num < 250) {
        result_text.innerHTML = 'Приятные мелочи для любимых';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/0-10th_presents/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/0-10th_presents/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/0-10th_presents/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/0-10th_presents/4.jpg)');
    }
    else if (profit_summ_num < 750) {
        result_text.innerHTML = 'Хороший смартфон';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/10_30th_phone/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/10_30th_phone/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/10_30th_phone/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/10_30th_phone/4.jpg)');
    }
    else if (profit_summ_num < 1000) {
        result_text.innerHTML = 'Золотое кольцо Tiffany';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/30_40_th_rings/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/30_40_th_rings/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/30_40_th_rings/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/30_40_th_rings/4.jpg)');
    }
    else if (profit_summ_num < 1500 ) {
        result_text.innerHTML = 'Apple MacBook';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/40_60_th_macbook/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/40_60_th_macbook/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/40_60_th_macbook/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/40_60_th_macbook/4.jpg)');
    }
    else if (profit_summ_num < 2000 ) {
        result_text.innerHTML = 'Платье или костюм от Dolce&Gabbana';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/60_80_th_dg/11.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/60_80_th_dg/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/60_80_th_dg/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/60_80_th_dg/4.jpg)');
    }
    else if (profit_summ_num < 2500 ) {
        result_text.innerHTML = 'Бильярдный стол';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/80_100_th_billiard/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/80_100_th_billiard/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/80_100_th_billiard/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/80_100_th_billiard/4.jpg)');
    }
    else if (profit_summ_num < 3000 ) {
        result_text.innerHTML = 'Серфинг на Бали';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/100_120_th_Bali/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/100_120_th_Bali/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/100_120_th_Bali/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/100_120_th_Bali/4.jpg)');
    }
    else if (profit_summ_num < 5000 ) {
        result_text.innerHTML = '2 недели вдвоем на Мальдивах ';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/120_200_th_maldivi/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/120_200_th_maldivi/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/120_200_th_maldivi/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/120_200_th_maldivi/4.jpg)');
    }
    else if (profit_summ_num < 10000 ) {
        result_text.innerHTML = 'ЖК Телевизор Sony 65”';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/200_400_th_tv/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/200_400_th_tv/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/200_400_th_tv/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/200_400_th_tv/4.jpg)');
    }
    else if (profit_summ_num < 15000 ) {
        result_text.innerHTML = 'Роскошная свадьба в Москве';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/400_600_th_wedding/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/400_600_th_wedding/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/400_600_th_wedding/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/400_600_th_wedding/4.jpg)');
    }
    else if (profit_summ_num < 20000 ) {
        result_text.innerHTML = 'Швейцарские часы Romain Jerome';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/600_800_th_watch/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/600_800_th_watch/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/600_800_th_watch/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/600_800_th_watch/4.jpg)');
    }
    else if (profit_summ_num < 30000 ) {
        result_text.innerHTML = 'Мотоцикл Harley Davidson VRSC';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/800th_1,2mln_moto/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/800th_1,2mln_moto/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/800th_1,2mln_moto/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/800th_1,2mln_moto/4.jpg)');
    }
    else if (profit_summ_num < 37500 ) {
        result_text.innerHTML = '58 кг банковского серебра';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/1,2_1,5_mln_silver/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/1,2_1,5_mln_silver/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/1,2_1,5_mln_silver/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/1,2_1,5_mln_silver/4.jpg)');
    }
    else if (profit_summ_num < 45000 ) {
        result_text.innerHTML = '1,2 кг чистого золота ';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/1,5_1,8_mln_gold/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/1,5_1,8_mln_gold/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/1,5_1,8_mln_gold/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/1,5_1,8_mln_gold/4.jpg)');
    }
       else if (profit_summ_num < 50000 ) {
        result_text.innerHTML = 'Неделя в отеле Парус в Дубаи ';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/1,8_2_mln_sail/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/1,8_2_mln_sail/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/1,8_2_mln_sail/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/1,8_2_mln_sail/4.jpg)');
    }
    else if (profit_summ_num < 62500 ) {
        result_text.innerHTML = 'Покупка квартиры возле моря в Болгарии';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/2_2,5_mln_bulgaria_flat/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/2_2,5_mln_bulgaria_flat/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/2_2,5_mln_bulgaria_flat/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/2_2,5_mln_bulgaria_flat/4.jpg)');
    }
    else if (profit_summ_num < 75000 ) {
        result_text.innerHTML = 'BMW Z4';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/2,5_3_mln_bmw_z4/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/2,5_3_mln_bmw_z4/2.jpeg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/2,5_3_mln_bmw_z4/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/2,5_3_mln_bmw_z4/4.jpg)');
    }
    else if (profit_summ_num < 112500 ) {
        result_text.innerHTML = 'Porsche Cayenne GTS';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/4,5_5_mln_porsche_cayene/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/4,5_5_mln_porsche_cayene/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/4,5_5_mln_porsche_cayene/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/4,5_5_mln_porsche_cayene/4.jpg)');
    }
    else if (profit_summ_num < 150000 ) {
        result_text.innerHTML = 'Porsche 911 Carrera';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/5_6_mln_porche911/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/5_6_mln_porche911/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/5_6_mln_porche911/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/5_6_mln_porche911/4.jpg)');
    }
    else if (profit_summ_num < 175000 ) {
        result_text.innerHTML = 'Яхта Princess 34 Fly ';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/6_7_mln_yacht/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/6_7_mln_yacht/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/6_7_mln_yacht/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/6_7_mln_yacht/4.jpg)');
    }

    else if (profit_summ_num < 225000 ) {
        result_text.innerHTML = 'Квартира в Москве, САО';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/8_9_mln_moscow_flat/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/8_9_mln_moscow_flat/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/8_9_mln_moscow_flat/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/8_9_mln_moscow_flat/4.jpg)');
    }
    else if (profit_summ_num < 250000 ) {
        result_text.innerHTML = 'Вилла в Испании, Коста-Брава ';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/9_10_mln_spain_villa/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/9_10_mln_spain_villa/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/9_10_mln_spain_villa/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/9_10_mln_spain_villa/4.jpg)');
    }
    else if (profit_summ_num < 375000 ) {
        result_text.innerHTML = 'Lamborghini Murcielago ';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/10_15_mln_lamborghini/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/10_15_mln_lamborghini/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/10_15_mln_lamborghini/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/10_15_mln_lamborghini/4.jpg)');
    }
    else if (profit_summ_num <500000 ) {
        result_text.innerHTML = 'Двухместный самолет Tecnam P2006T';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/15_20_mln_pllain/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/15_20_mln_pllain/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/15_20_mln_pllain/3.jpeg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/15_20_mln_pllain/4.jpg)');
    }
    else {
        result_text.innerHTML = 'Выше только космос:)';
        $(".gallery-section_foto_first .gallery-section_foto-img").css('background-image', 'url(images/calc/20_mln_space/1.jpg)');
        $(".gallery-section_foto_second .gallery-section_foto-img").css('background-image', 'url(images/calc/20_mln_space/2.jpg)');
        $(".gallery-section_foto_third .gallery-section_foto-img").css('background-image', 'url(images/calc/20_mln_space/3.jpg)');
        $(".gallery-section_foto_fourth .gallery-section_foto-img").css('background-image', 'url(images/calc/20_mln_space/4.jpg)');
    }

}
function bounceDownButton() {
  $('.more')
    .animate({bottom: '10px'}, 200)
    .animate({bottom: '30px'}, 200)
    .animate({bottom: '20px'}, 200)
    .animate({bottom: '30px'}, 200);
}
function initSlider(selector, minVal, maxVal, step, initVal) {
    $("."+selector).slider({
        orientation: "horizontal",
        range: "min",
        min: minVal,
        max: maxVal,
        value: initVal,
        step: step,
        slide: function (event, ui) {
            $("#"+selector).val(ui.value);
            calculatePayment();
        }
    });
    $("#"+selector).val($("."+selector).slider("value"));
    $("#"+selector).keyup(function() {
        $("."+selector).slider("value" , $(this).val());
        calculatePayment();
    });
}
function isright(obj){
  if (parseInt(obj.value)<parseInt($(obj).attr('min'))) {obj.value=$(obj).attr('min');}
}
$(function () {
    initSlider('summ', 0, 2500, 25, 250);
    initSlider('average_price', 0.1, 3, 0.01, 0.4);
    initSlider('conversion', 0, 40, 1, 7);
    initSlider('conversion-sales', 0, 40, 1, 25);
    initSlider('average-margin', 0, 2500, 25, 300);
    calculatePayment();
    $('.result-block input').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
    $('.result-block input').focus(
    function(){
        $(this).parent('div.result-block').css('border-color','#E86005');
    }).blur(
    function(){
        $(this).parent('div.result-block').css('border-color','#e6e8eb');
    });
});

