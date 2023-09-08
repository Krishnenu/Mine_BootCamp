"use strict";
(function () {
    // defining type to any variable.
    // method 1- assogn value direct
    var var1 = {
        a: 'a'
    };
    // Method2 - assign the type to variable
    var var2;
    var2 = 'a';
    var var3;
    var var4;
    var var5;
    var var6;
    var var7;
    var var8;
    var var13;
    var var9;
    // Composition Type 
    // function add(a:number|string  ,b:number|string):string|number{
    //     return a+b;
    // }
    var temp = {};
    var var10 = temp;
    if (var10 instanceof Array) {
    }
    else if (var10 instanceof Boolean) {
        var10;
    }
    // genrics intro to Array
    var var11 = temp; // combining object and array Proprties.
    if (var11 instanceof Array) {
    }
    else {
        var11;
    }
    // Generics
    function buildObject(key, value) {
        var obj = {};
        obj[key] = value;
        return obj;
    }
    function buildObject2(key, value) {
        var obj = {};
        obj[key] = value;
        return obj;
    }
    var var12 = buildObject2('a', 10);
    function addOrConcat(a, b) {
        return a + b;
    }
    var var14 = addOrConcat("10", "12");
    var var15 = addOrConcat(10, 12);
    var var16 = addOrConcat("10", 12);
    // Enum Making:
    var E;
    (function (E) {
        E[E["Akshay"] = 0] = "Akshay";
        E[E["Amit"] = 1] = "Amit";
        E[E["Lalla"] = 2] = "Lalla";
    })(E || (E = {}));
    var var17;
})();
