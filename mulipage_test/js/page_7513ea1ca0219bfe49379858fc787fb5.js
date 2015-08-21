$c = window.$c || {};

var TestForm = function(formEl, options) {
	var config = {
		active:0,
		FORM_CLASSNAME: 'test-form',

		SELECTOR_RESULT: '.result-question',

		GROUP_SELECTOR: '.form-group',
		GROUP_WRAPPER_CLASSNAME: 'form-group-wrapper',

		REQUIRED_SELECTOR: '.form-element-required input',
		
		BUTTON_WRAPPER_CLASSNAME: 'form-button-wrapper',
		BUTTON_DISABLED_CLASSNAME: 'button-disabled',
		BUTTON_SUBMIT_CLASSNAME: 'button-submit',

		HIDDEN_CLASSNAME: 'form-hidden',
		IS_EMPTY_VALUE_REGEX: /^\[ .+? ]$/
	}
	
	this.init(formEl, $.extend(config, options || {}));
}

TestForm.prototype.init = function(formEl, config) {
	this.config = config;
	this.formEl = $(formEl);
	this.groupEls = $(this.config.GROUP_SELECTOR, this.formEl);
	this.requiredEls = $(this.config.REQUIRED_SELECTOR, this.formEl);
	this.groupElsLen = this.groupEls.length;

	this.resultEl = $(this.config.SELECTOR_RESULT, this.formEl);

	this._isError = false;

	if(this.groupElsLen == 0 || this.config.active < 0 || this.config.active >= this.groupElsLen) {
		return;
	}

	this.groupEls.each(function(){
		var questionEls = $('.test-form-fieldset', this);
		$(this).data("questionEls", questionEls);
		$(this).data("percent", 0);
	});

	//$('<input type="hidden" name="web_form_submit" value="y" />').appendTo(this.formEl);

	this.timers = [];
	this._timer;
	this._current = false;

	this._inited = true;
	
	this.build();
	this.bind();
	this.setState(this.config.active, true);
};

TestForm.prototype.build = function() {
	this.formEl.addClass(this.config.FORM_CLASSNAME);
	this.groupWrapperEl = $('<div class="' + this.config.GROUP_WRAPPER_CLASSNAME + '"></div>');
	this.groupWrapperEl.prependTo(this.formEl);
	this.groupEls.appendTo(this.groupWrapperEl);
	
	this.buttonWrapper = $('<div class="' + this.config.BUTTON_WRAPPER_CLASSNAME + '"></div>')
	this.buttonWrapper.insertAfter(this.groupWrapperEl);
	
	this.buttonPrev   = $('<button class="prev">Шаг назад</button>');
	this.buttonNext   = $('<button class="next">Дальше</button>');
	this.buttonSubmit = $('<input type="submit" class="next button-submit" value="Готово" />').css("display", "none");
	
	//this.buttonSubmit = $('<a style="position: relative; left: 50%; margin-top: 20px; margin-left: -40px;" class="btn response" href="javascript:void(0);" >OK</a>').css("display", "none");
	
	
	this.buttonWrapper
		.append(this.buttonPrev)
		.append(this.buttonNext)
		.append(this.buttonSubmit);

	if(this.groupEls.length > 1) {
		this.menuEl = $('<div class="test-form-top-menu"><p class="note">Разделы теста</p></div>');
		
		this.menuLinkEls = $([]);
		
		for(var i = 0; i < this.groupEls.length; i++) {
			var text = this.groupEls.eq(i).find("h2").text();
			var linkEl = $('<span class="pseudo"><span class="test-form-top-menu-empty">'+text+'</span></span>')
			this.menuLinkEls = this.menuLinkEls.add(linkEl);
		}
	
		this.menuEl
			.append(this.menuLinkEls)
			.prependTo(this.formEl);

		var menuLinksLength = this.menuLinkEls.length;
		this.menuLinkEls.each(function(pos, el) {
			if(pos == menuLinksLength - 1) {
				return;
			}

			
		});
	}
};

TestForm.prototype.bind = function() {
	var self = this;

	this.buttonPrev.bind("click", function() {
		if($(this).is(":disabled")) {
			return false;
		}
		self.setState(self._current - 1);
		return false;
	});
	
	this.buttonNext.bind("click", function() {
		if($(this).is(":disabled")) {
			return false;
		}
		self.setState(self._current + 1);
		return false;
	});

	this.buttonSubmit.bind("click", function() {
		self.formEl.trigger("submit");
	});

	this.requiredEls.bind("change keyup", { self: self }, self.onRequiredCheck);
	this.requiredEls.eq(0).trigger("change");

	this.menuLinkEls.bind("click", function(){
		var index = $.inArray(this, self.menuLinkEls);
		
		if(index !== -1) {
			self.setState(index);
		}
	})

	this.formEl.bind("submit", {self: self}, this.submit);
	
}

TestForm.prototype.onRequiredCheck = function(evt) {
	/*
	var
		els = evt.data.self.requiredEls,
		mailPattern = /^[a-zA-Z0-9_\-.]+?@[a-zA-Z0-9_\-.]+?\.[a-zA-Z0-9]{2,4}$/;
	
	evt.data.self._isError = false;
	
	els.each(function() {
		var
			el = $(this),
			isEmail = el.closest('.form-fieldset').hasClass('form-type-email'),
			val = $.trim(el.val());

		if(isEmail && !mailPattern.test(val)) {
			evt.data.self._isError = true;
		} else if(val == '') {
			evt.data.self._isError = true;
		}
	});
	
	if(evt.data.self._isError) {
		evt.data.self.buttonSubmit.attr("disabled", "disabled");
	} else {
		evt.data.self.buttonSubmit.removeAttr("disabled");
	}
	* */
}

TestForm.prototype.submit = function(evt) {
	var self = evt.data.self;
	if(self.buttonSubmit.is(":disabled")) {
		return false;
	}
	if(self.resultEl.length) {
		var text = '';
		$.each(self.timers, function(i, time) {
			if(!time) {
				return;
			}
			var secs = time / 1000;
			var mins = secs / 60;

			text += self.groupEls.eq(i).find('h2').text()+"\n";
			if(mins < 1) {
				text += secs +" сек.\n\n";
			} else {
				text += (Math.round(mins * 10) / 10) +" мин.\n\n";
			}

		});
		
		self.resultEl.val(text);
	}
}

TestForm.prototype.setState = function(eq, noScroll) {
	var
		self = this,
		selectedGroupEl = this.groupEls.eq(eq);

	var
		d = new Date(),
		time = d.getTime();

	if(this._current !== false) {
		this.timers[this._current] = (this.timers[this._current] || 0) + time - this._timer;
	}

	this._timer = time;
	this._current = eq;

	selectedGroupEl.removeClass(this.config.HIDDEN_CLASSNAME);
	this.groupEls.not(selectedGroupEl).addClass(this.config.HIDDEN_CLASSNAME);

	if(this._current == 0) {
		this.buttonPrev
			.attr("disabled", "disabled").hide()
			.addClass(this.config.BUTTON_DISABLED_CLASSNAME);
	} else {
		this.buttonPrev
			.removeAttr("disabled").show()
			.removeClass(this.config.BUTTON_DISABLED_CLASSNAME);
	}

	if(this._current == this.groupElsLen-1) {
		this.buttonNext.css("display", "none");
		this.buttonSubmit.css("display", "");
	} else {
		this.buttonNext.css("display", "");
		this.buttonSubmit.css("display", "none");
	}

	$(".test-form-type-radio label").bind("click change", function() {
		var 
			el = $(this),
			parentEl = $(this).closest(".test-form-type-radio"),
			fieldsetEl = parentEl.closest(".test-form-fieldset"),
			missingTextEl = fieldsetEl.find(".missing-text"),
			humanValue = el.find("span").html(),
			labelEls = parentEl.find("label");

		if(self.config.IS_EMPTY_VALUE_REGEX.test(humanValue)) {
			humanValue = '█';
		}
		
		if(humanValue && missingTextEl.length == 1) {
			missingTextEl.html(humanValue);
		}
		
		labelEls.not(el).removeClass("selected");
		el.addClass("selected");
		fieldsetEl.addClass("filled");

		if(self.groupEls.length > 1) {
			var groupEl = self.groupEls.eq(self._current);
			var filledCount = groupEl.data("questionEls").filter(".filled").length;
			groupEl.data("percent", (filledCount / groupEl.data("questionEls").length) * 100);
	
			var fillEl = self.menuLinkEls.eq(self._current).find('.test-form-top-menu-fill')
			
			fillEl.width(groupEl.data("percent") + '%');
			if(groupEl.data("percent") == 100) {
				fillEl.addClass("test-form-top-menu-filled");
			} else {
				fillEl.removeClass("test-form-top-menu-filled");
			}
		}
	});

	if(self.groupEls.length > 1) {
		self.menuLinkEls.removeClass("selected");
		self.menuLinkEls.eq(self._current).addClass("selected");
	}

	if(noScroll) {
		return;
	}

	this.scrollTo(this.groupEls.eq(this._current));
};

TestForm.prototype.scrollTo = function(el) {
	var top = el.offset().top,
		scrollingEl = $(document),
		scrollTop = scrollingEl.scrollTop(),
		viewportHeight = $(window).height();

	if(scrollTop + viewportHeight < top || top < scrollTop) {
		var duration =  Math.min(1000, Math.round(Math.max(scrollTop - top, top - scrollTop) * 1));

		el.animate({
			'fromX': 100
		}, {
			duration: duration,
			step: function(px, fx) {
				var to = scrollTop + (top - scrollTop) * fx.pos;
				scrollingEl.scrollTop(to);
			}
		});
	}
}
