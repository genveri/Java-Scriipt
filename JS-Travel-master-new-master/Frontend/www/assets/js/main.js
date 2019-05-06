(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var $window = $(window);
var $elem = $(".site-description")

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).on("scroll", function () {
    // if (isScrolledIntoView($elem, $window))
    $elem.addClass("animate-description")
});

$(function () {
    $(window).scroll(function (e) {
        if ($(this).scrollTop() > 20) {
            $('.top-panel').addClass('scrolled-top');
        }
        else if ($(this).scrollTop() == 0) {
            $('.top-panel').removeClass('scrolled-top');
        }
    });
});


$('#go').click(function () {
    document.location.href = "way.html";
});

$('#where-to-go').click(function () {
    //  document.location.href = "whereToGo.html";
});

$('#home').click(function () {
    document.location.href = "index.html";
});

$('#way').click(function () {
    document.location.href = "way.html";
});

$('#about').click(function () {
    document.location.href = "about.html";
});

$('#hotels').click(function () {
    //  document.location.href = "hotels.html";
});

$('#events').click(function () {
// document.location.href = "events.html";
});

$('#login').click(function () {
     document.location.href = "login.html";
});

$('#join').click(function () {
    document.location.href = "login.html";
});
$('#write').click(function () {
    document.location.href = "write.html";
});

$(function () {
    var inp = $("#there-input");
    var d = new Date(), s;
    if (d.getMonth() < 9) s = '0' + (d.getMonth() + 1 ) + '/' + (d.getDate() + 1) + '/' + d.getFullYear();
    else s = (d.getMonth() + 1 ) + '/' + (d.getDate() + 1) + '/' + d.getFullYear();
    inp.datepicker();
    inp.attr("placeholder", s);
});

$(function () {
    var inp = $("#back-input");
    var d = new Date(), s;
    if (d.getMonth() < 9) s = '0' + (d.getMonth() + 1 ) + '/' + (d.getDate() + 1) + '/' + d.getFullYear();
    else s = (d.getMonth() + 1 ) + '/' + (d.getDate() + 1) + '/' + d.getFullYear();
    inp.datepicker();
    inp.attr("placeholder", s);
});

$("#return").change(function () {
    $(this).prop('checked', true);
    $("#one-way").prop('checked', false);
    $(".box-line").removeClass("one-way-mode");
});

$("#one-way").change(function () {
    $(this).prop('checked', true);
    $("#return").prop('checked', false);
    $(".box-line").addClass("one-way-mode");
});





},{}]},{},[1]);
