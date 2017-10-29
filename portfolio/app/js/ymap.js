ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map("map", {
                center: [55.76941307, 37.64485400],
                zoom: 17
            }); 

            myMap.controls
                        .remove('fullscreenControl')
                        .remove('typeSelector')
                        .remove('trafficControl')
                        .remove('rulerControl')
                        .remove('searchControl');
            
            myPlacemark = new ymaps.Placemark([55.76941307, 37.64485400], {
                hintContent: 'Москва!',
                balloonContent: 'Столица России'
            });
            
            myMap.geoObjects.add(myPlacemark);

        }