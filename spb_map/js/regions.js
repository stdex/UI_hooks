var createMap = function() {
  var ymap = new ymaps.Map("YMapsID", {
    'center': [59.946565, 30.128097],
    'zoom': 9,
    'controls': []
  });

  ymap.controls
      .add('typeSelector')
      .add('zoomControl', {
        position: {
          top: 10,
          left: 10
        }
      })
      .add('rulerControl');

  return ymap;
};

var options ={
  'enter': {
    fillColor: '#166A99',
    strokeColor: '#ffffff',
    fillOpacity: 0.7,
    strokeOpacity: 1
  },
  'leave': {
    fillColor: '#166A99',
    strokeColor: '#ffffff',
    fillOpacity: 0.5,
    strokeOpacity: 0.5
  }
};

var menuHeader;

var bindHoverMenu = function(regions) {

  menuHeader.on('mouseenter', 'a', function() {
    var polygon = regions[$(this).attr('href')];
    if (!polygon) {return false;}

    polygon.options.set(options.enter);

    return true;
  }).on('mouseleave', 'a', function() {
    var polygon = regions[$(this).attr('href')];
    if (!polygon) {return false;}

    polygon.options.set(options.leave);

    return true;
  });
};

var mapInit = function() {

  var styles = {
    // Цвет заливки
    fillColor: '#166A99',
    strokeColor: '#ffffff',
    fillOpacity: 0.5,
    strokeOpacity: 0.5,
    strokeWidth: 2,
    // Стиль линии
    strokeStyle: 'solid',
    // разрешаем подъем всех событий
    interactivityModel: 'default#transparent'
  };
  var ymap = createMap();

  var regions = {};

    $.getJSON("js/destricts.json", function(data) {
      $.each(data, function(i, item) {
        var multiple = false;
        var coordinate = $.map(item.territory, function(val){
          if (val.lat || val.lng) {
            return [[val.lat, val.lng]];
          } else {
            multiple = true;
            return [$.map(val, function(val){
              return [[val.lat, val.lng]];
            })];
          }
        });

        var polygon  = new ymaps.Polygon((multiple && coordinate) || [coordinate],
            {hintContent: item.district},
            styles),
            link = false;

        if (item.url && item.url !== "") {
          regions[item.url] = polygon;
          link = $('[href="'+item.url+'"]', menuHeader);

          polygon.events.add('click', function () {
            window.location.href = item.url;
          }, polygon);
        }

        polygon.events.add('mouseenter', function () {
          this.options.set(options.enter);
          link && link.addClass('item-hover');
        }, polygon);

        polygon.events.add('mouseleave', function () {
          this.options.set(options.leave);
          link && link.removeClass('item-hover');
        }, polygon);

        ymap.geoObjects.add(polygon);
      });

      bindHoverMenu(regions);
    });
/*
  $.ajax({
    type: 'GET',
    url: ((window.site_lang && '/' + window.site_lang) || '') + '/ajax/get_districts/',
    success: function(data){
      $.each(data, function(i, item) {
        var multiple = false;
        var coordinate = $.map(item.territory, function(val){
          if (val.lat || val.lng) {
            return [[val.lat, val.lng]];
          } else {
            multiple = true;
            return [$.map(val, function(val){
              return [[val.lat, val.lng]];
            })];
          }
        });

        var polygon  = new ymaps.Polygon((multiple && coordinate) || [coordinate],
            {hintContent: item.district},
            styles),
            link = false;

        if (item.url && item.url !== "") {
          regions[item.url] = polygon;
          link = $('[href="'+item.url+'"]', menuHeader);

          polygon.events.add('click', function () {
            window.location.href = item.url;
          }, polygon);
        }

        polygon.events.add('mouseenter', function () {
          this.options.set(options.enter);
          link && link.addClass('item-hover');
        }, polygon);

        polygon.events.add('mouseleave', function () {
          this.options.set(options.leave);
          link && link.removeClass('item-hover');
        }, polygon);

        ymap.geoObjects.add(polygon);
      });

      bindHoverMenu(regions);
    }
  });
*/




};

$(function() {
  menuHeader = $('.menuHeader');
  ymaps.ready(function() {
    mapInit();
  });
});




