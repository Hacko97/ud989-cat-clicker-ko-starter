var initialCats = [{
    name: "Chewie",
    imageSrc: "./cat.jpg",
    clickCount: 0,
    catNicknames: ['fdk', 'asdf', 'sadfa']
}, {
    name: "Cowie",
    imageSrc: "./cat2.jpg",
    clickCount: 0,
    catNicknames: ['smuti']
}, {
    name: "Slowie",
    imageSrc: "./cat3.jpg",
    clickCount: 0,
    catNicknames: ['hello']
}, {
    name: "Fowie",
    imageSrc: "./cat4.jpg",
    clickCount: 0,
    catNicknames: ['swappy']
}, {
    name: "Mowie",
    imageSrc: "./cat5.jpg",
    clickCount: 0,
    catNicknames: ['zzzzz']
}];

var cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imageSrc = ko.observable(data.imageSrc);
    this.catNicknames = ko.observableArray(data.catNicknames);

    this.catLevel = ko.computed(function() {
        var level = "";
        if (this.clickCount() < 14) {
            level = 'NewBornCat';

        } else if (this.clickCount() < 20) {
            level = 'Infant';
        }
        return level;
    }, this);
}


var viewmodel = function() {

    var self = this;


    this.catList = ko.observableArray([]);
    initialCats.forEach(function(catItem) {
        self.catList.push(new cat(catItem));
    });
    this.currentCat = ko.observable(this.catList()[0]);
    this.incrementCounter = function() {

        self.currentCat().clickCount(self.currentCat().clickCount() + 1);

    };

    this.changeCat = function(clickedCat) {
        self.currentCat(clickedCat);
    }


};

ko.applyBindings(new viewmodel());