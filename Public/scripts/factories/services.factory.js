myApp.factory('ServicesFactory', ['$http', function($http) {

    var price = {};

    var getPrices = function() {
        console.log('getting Prices');
        var promise = $http.get('/services').then(function(response) {
            price.toepolishChange = response.data[0].toepolishChange;
            price.spaPedicure = response.data[1].spaPedicure;
            price.toeCallus = response.data[2].toeCallus;
            price.toefrenchManicure = response.data[3].toefrenchManicure;
            price.pedicureGel = response.data[4].pedicureGel;
            price.advancedPedicure = response.data[5].advancedPedicure;
            price.nailpolishChange = response.data[6].nailpolishChange;
            price.naturalManicure = response.data[7].naturalManicure;
            price.nailCallus = response.data[8].nailCallus;
            price.frenchManicure = response.data[9].frenchManicure;
            price.manicureGel = response.data[10].manicureGel;
            price.IBS = response.data[11].IBS;

        });
        console.log(price.toepolishChange);
        return promise;
    };

    //var buildPriceList = function(priceList) {
    //    for (var i = 0; i < priceList.length; i++) {
    //        if (priceList.list[i].toepolishChange !== undefined) {
    //            for (var j = 0; j < priceList.list[i].length; j++) {
    //                price.push = ({
    //                    toepolishChange: priceList[i].toepolishChange,
    //                    spaPedicure: priceList[i].spaPedicure,
    //                    toeCallus: priceList[i].toeCallus,
    //                    toefrenchManicure: priceList[i].toefrenchManicure,
    //                    pedicureGel: priceList[i].pedicureGel,
    //                    advancedPedicure: priceList[i].advancedPedicure,
    //                    nailpolishChange: priceList[i].nailpolishChange,
    //                    naturalManicure: priceList[i].naturalManicure,
    //                    nailCallus: priceList[i].nailCallus,
    //                    frenchManicure: priceList[i].frenchManicure,
    //                    manicureGel: priceList[i].manicureGel,
    //                    IBS: priceList[i].IBS
    //                })
    //            }
    //        }
    //    }
    //    console.log("building Prices", price.list);
    //}

    return {
        factoryGetPrices: function() {
            return getPrices();
        },
        price: price
    }
}]);

