var viewmodel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imageSrc = ko.observable('./cat.jpg');

    this.incrementCounter = function() {

        this.clickCount(this.clickCount() + 1);

    };

    this.catLevel = ko.computed(function() {
        var level = "";
        if (this.clickCount() < 14) {
            level = 'NewBornCat';

        } else if (this.clickCount() < 20) {
            level = 'Infant';
        }
        return level;
    }, this);

};

ko.applyBindings(new viewmodel());