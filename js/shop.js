﻿var potionStatus = {};
potionStatus.price = 20;
var superPotionStatus = {};
superPotionStatus.price = 100;
var megaPotionStatus = {};
megaPotionStatus.price = 500;
//Buy Stuff -_-
function potionBuy(type, count) {
    var priceTemp = type.price;
    var priceToPay = 0;
    for (i = 0; i < count; i++) {
        priceToPay += priceTemp;
        priceTemp = priceTemp;
    };

    if (player.gold >= priceToPay) {
        type.price = priceTemp;
        player.gold -= priceToPay;
        return true;
    };
    Log("You do not have enough money to buy this. You need " + (priceToPay - player.gold) + " more gold.");
    return false;
};
//Buy potions
function buyPotion(count) {
    if (potionBuy(potionStatus, count)) {
        pot += count
        updateHtml();
        Log("You bought " + count + " Potions.");
    };
};
//Buy Super potions
function buySuperPotion(count) {
    if (potionBuy(superPotionStatus, count)) {
        spot += count
        updateHtml();
        Log("You bought " + count + " Super Potions");
    };
};
//Buy Mega potions
function buyMegaPotion(count) {
    if (potionBuy(megaPotionStatus, count)) {
        mpot += count
        updateHtml();
        Log("You bought " + count + "Mega Potions");
    };
};

var backpackStatus = {};
backpackStatus.price = 100;
backpackStatus.multiplier = 1.04;
 
var statStatus = {};
statStatus.price = 500;
statStatus.multiplier = 1.01;

//Buy Stuff -_-
function buyStuff(type, count) {
    var priceTemp = type.price;
    var priceToPay = 0;
    for (i = 0; i < count; i++) {
        priceToPay += priceTemp;
        priceTemp = Math.round(priceTemp * type.multiplier);
    };

    if (player.gold >= priceToPay) {
        type.price = priceTemp;
        player.gold -= priceToPay;
        return true;
    };
    Log("You do not have enough money to buy this. You need " + (priceToPay - player.gold) + " more gold.");
    return false;
};
//Buy backpack
function buyBackpack(count) {
    if (buyStuff(backpackStatus, count)) {
        player.backpackUpgrade += count;
        updateHtml();
        CreateInventoryWeaponHtml();
        Log("You max inventory slots upgraded by " + count + ", now you have: " + player.inventory() + " inventory slots");
    };
};
//Buy Stat points
function buyStat(count) {
    if (buyStuff(statStatus, count)) {
        player.stats += count;
        updateHtml();
        Log("Your stat points increased by " + count + ".");
    };
};