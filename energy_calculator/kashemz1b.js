function runjs1()
{
    var rate_hot_1 = parseFloat(document.getElementById("rate_hot").value.replace(',', '.'));
    var rate_cold_1 = parseFloat(document.getElementById("rate_cold").value.replace(',', '.'));
    var rate_out_1 = parseFloat(document.getElementById("rate_out").value.replace(',', '.'));
    var count_people = parseFloat(document.getElementById("count_people").value.replace(',', '.'));

    var rate_electric = parseFloat(4.5);
    var save_aerator_1 = parseFloat(40);
    var save_aerator_2 = parseFloat(0.4);
    var consumed_pumping = parseFloat(0.72);
    var cost_aerator = parseFloat(1350);

    var count_hot_3 = parseFloat(365-21);
    var mean_cold_3 = parseFloat(68.25);
    var mean_hot_3 = parseFloat(29.24);
    var effluent_3 = mean_cold_3 + mean_hot_3;

    var mean_cold_2 = mean_cold_3*save_aerator_2;
    var mean_hot_2 = mean_hot_3*save_aerator_2;
    var effluent_2 = effluent_3*save_aerator_2;

    var rate_hot_2 = mean_hot_2*count_people;
    var rate_cold_2 = mean_cold_2*count_people;

    var save_cold = mean_cold_2*rate_cold_1;
    var save_hot = mean_hot_2*rate_hot_1;
    var save_effluent = effluent_2*rate_out_1;

    var costs_per_year = (save_cold+save_hot+save_effluent)*count_people;
    var payback = 12/(costs_per_year/cost_aerator);
    var profit = (save_cold+save_hot+save_effluent)*count_people;
    var energy_effect = (55*rate_cold_2)/1000;
    var saving_energy_pumping = (rate_hot_2+rate_cold_2)*consumed_pumping;
    var saving_electricity = rate_electric*saving_energy_pumping;

    $("#data tr").each(function( index ) {
        
        switch(index) {
            case 1:  // Колличество горячей воды, м3
                $(this).children('td')[3]['innerHTML'] = count_hot_3;
                break;
            case 2:  // Среднее ХВС (холодное водоснабжение)в месяц, м3
                $(this).children('td')[2]['innerHTML'] = mean_cold_2;
                $(this).children('td')[3]['innerHTML'] = mean_cold_3;
                break;
            case 3:  // Среднее ГВС( горячее водоснабженеи) в месяц, м3
                $(this).children('td')[2]['innerHTML'] = mean_hot_2;
                $(this).children('td')[3]['innerHTML'] = mean_hot_3;
                break;
            case 4:  // Стоки в месяц в среднем,м3
                $(this).children('td')[2]['innerHTML'] = effluent_2;
                $(this).children('td')[3]['innerHTML'] = effluent_3;
                break;
            case 5:  // Экономия ХВС в год, руб
                $(this).children('td')[1]['innerHTML'] = save_cold;
                break;
            case 6:  // Экономия ГВС в год, руб
                $(this).children('td')[1]['innerHTML'] = save_hot;
                break;
            case 7:  // Экономия водотведения в год, руб
                $(this).children('td')[1]['innerHTML'] = save_effluent;
                break;
            case 8:  // Тариф ГВС за м3, рубли
                $(this).children('td')[1]['innerHTML'] = rate_hot_1;
                $(this).children('td')[2]['innerHTML'] = rate_hot_2;
                break;
            case 9:  // Тариф ГВС за м3, рубли
                $(this).children('td')[1]['innerHTML'] = rate_cold_1;
                $(this).children('td')[2]['innerHTML'] = rate_cold_2;
                break;
            case 10:  // Тариф водоотведения за м3, руб
                $(this).children('td')[1]['innerHTML'] = rate_out_1;
                break;
            case 11:  // Экономия с Аэратором, %
                $(this).children('td')[1]['innerHTML'] = save_aerator_1;
                $(this).children('td')[2]['innerHTML'] = save_aerator_2;
                break;
            case 12:  // Затраты в год, руб/год
                $(this).children('td')[1]['innerHTML'] = costs_per_year;
                break;
            case 13:  // Количество людей (семья)
                $(this).children('td')[1]['innerHTML'] = count_people;
                break;
            case 14:  // Стоимость комплекта аэратора, руб
                $(this).children('td')[1]['innerHTML'] = cost_aerator;
                break;
            case 15:  // Срок окупаемости, месяц
                $(this).children('td')[1]['innerHTML'] = payback;
                break;
            case 16:  // ПРИБЛЬ В ГОД, руб
                $(this).children('td')[1]['innerHTML'] = profit;
                break;
            case 17:  // Энергетический эффект в год, Гкалл
                $(this).children('td')[1]['innerHTML'] = energy_effect;
                break;
            case 18:  // Экономия энергии на перекачку воды в год, кВт
                $(this).children('td')[1]['innerHTML'] = saving_energy_pumping;
                break;
            case 19:  // На перекачку 1м3 воды затрачивается, кВт
                $(this).children('td')[1]['innerHTML'] = consumed_pumping;
                break;
            case 20:  // Стоимость электроэнергии (экономия), в год, руб
                $(this).children('td')[1]['innerHTML'] = saving_electricity;
                break;
            case 21:  // Тариф на электроэнергию
                $(this).children('td')[1]['innerHTML'] = rate_electric;
                break;
            default:
            break;
        }

    });


}
