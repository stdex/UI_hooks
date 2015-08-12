;(function($) {
	var jqPluginName = 'count_control';
	var Init = function(element, options) 
		{
		var config = $.extend(true, {}, $.fn[jqPluginName].defaults, options);
		config.context = element;
		if (config.image_control)
			$(config.plus_select).add(config.minus_select).on('click', contr_event);
		
		if (config.key_control)
			config.context.find(config.input_sel).on('keyup', key_event);
			
		if (!config.no_resum)	
			config.context.find(config.input_sel).one('change', get_sum);

		function key_event()
			{
			var input = $(this),
				val = input.val()*1;
			if (isNaN(val))
				val = 0;
			set_input_val(input, val);
			get_sum();
			}
		
		function get_sum()
			{
			if (config.no_resum)
				return;
			var flag = true;
			var sum = 0;
			var counter = 0;
			config.context.find(config.input_sel).each(function()
				{
				var cahe = $(this).closest(config.row),
					price = cahe.find(config.price_sel).text()*1,
					in_stock = cahe.find('.in_stock'),
					count;
				if (in_stock.length)
					{
					count = Math.min(+in_stock.text(), +$(this).val());
					}
				else
					count = +$(this).val();
				
				$(this).val(count?count:'');
				
				if (!price && count)
					flag = false;
				else
					{
					sum += price*count;
					if (config.one_tik)
						counter += count;
					}

				return flag;
				});
			if (flag && sum)
				{
				if (counter==1)
					$(config.sum_sel).find(config.one_tik_sel).fadeIn();
				else if (!$(config.sum_sel).find(config.one_tik_sel).is(':hidden'))
					$(config.sum_sel).find(config.one_tik_sel).fadeOut();
				$(config.sum_sel).find(config.sum_number_sel).html(sum);
				if ($(config.sum_sel).is(':hidden'))
					$(config.sum_sel).fadeIn();
				}
			else if (!$(config.sum_sel).is(':hidden'))
				$(config.sum_sel).fadeOut();
			}
		function set_input_val(input, val)
			{
			var val = Math.min(config.max, Math.max(config.min, val));
			input.val(val?val:'');
			}
		function contr_event(e)
			{
			var input = $(this).closest('.count').find('.keep');
			e.preventDefault()
			var delta = 0;
			if (input.val()>config.min && $(this).is(config.minus_select))
				delta = -1;
			else if ($(this).is(config.plus_select))
				delta = 1;				
			set_input_val(input, input.val()*1+delta);
			input.change();
			get_sum();
			}
			
		get_sum();
		config.context.data(jqPluginName, this);
		}
	$.fn[jqPluginName] = function(options) 
		{
		return this.each(function () 
			{
			var _this = $(this);
			if (!_this.data(jqPluginName))
				new Init(_this, options);
			});
		}
	$.fn[jqPluginName].defaults = 
		{
		max: 20,
		min: 0,
		one_tik: false,
		one_tik_sel: '.one_tik',
		key_control: true,
		image_control: true,
		row: 'tr',
		price_sel: '.price strong',
		input_sel: '.keep',
		plus_select: ".add-tik",
		minus_select: ".rem-tik",
		no_resum: false,
		sum_sel: '#sum',
		sum_number_sel: 'strong strong'
		}
})(jQuery);
