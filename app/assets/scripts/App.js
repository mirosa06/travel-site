/* After  */
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "80%");
new RevealOnScroll($(".testimonial"), "70%");


/* BEFORE
var $ = require('jquery');

// var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + "now owes 99$ in taxes.");
  }
};


alert("ABC 321");

var john = new Person("John Doe ", "blue");
john.greet();

var jane = new Adult("Jane Smith ", "green");
jane.greet();
jane.payTaxes();

/* $("h1").remove(); /*"Jquery remove element"*/
