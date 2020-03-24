var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figure = /** @class */ (function () {
    function Figure() {
        this.taille = 0;
        this.nombreDeCotes = 0;
        this.aire = 0;
        this.perimetre = this.nombreDeCotes * this.taille;
    }
    Figure.prototype.rapport = function () {
        var description = "cette figure a " + this.nombreDeCotes + " côtés, la taille d'un côté est: " + this.taille + ", son périmètre est " + this.perimetre + " et son aire est (environ) " + this.aire;
        return description;
    };
    return Figure;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(taille) {
        var _this = _super.call(this) || this;
        _this.taille = taille;
        _this.nombreDeCotes = 3;
        _this.aire = Math.sqrt(3) / 2 * taille * taille;
        _this.perimetre = _this.nombreDeCotes * _this.taille;
        return _this;
    }
    Triangle.prototype.rapport = function () {
        return _super.prototype.rapport.call(this) + ", c'est un triangle";
    };
    return Triangle;
}(Figure));
var Losange = /** @class */ (function (_super) {
    __extends(Losange, _super);
    function Losange(diagonale1, diagonale2) {
        var _this = _super.call(this) || this;
        _this.diagonale1 = diagonale1;
        _this.diagonale2 = diagonale2;
        _this.nombreDeCotes = 4;
        _this.taille = 0.5 * Math.sqrt(diagonale1 * diagonale1 + diagonale2 * diagonale2);
        _this.estUnCarre = diagonale1 == diagonale2 ? true : false;
        _this.aire = 0.5 * diagonale1 * diagonale2;
        _this.perimetre = _this.nombreDeCotes * _this.taille;
        return _this;
    }
    Losange.prototype.rapport = function () {
        var complement = this.estUnCarre ? " et c'est un carré !" : ".";
        return _super.prototype.rapport.call(this) + ", c'est un losange" + complement;
    };
    return Losange;
}(Figure));
var t1 = new Triangle(5);
var t2 = new Triangle(10);
var l1 = new Losange(5, 6); // diagonale1, diagonale2
var l2 = new Losange(4, 4);
var figures = [t1, t2, l1, l2];
for (var _i = 0, figures_1 = figures; _i < figures_1.length; _i++) {
    var f = figures_1[_i];
    console.log(f.rapport());
}
