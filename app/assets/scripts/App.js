/* After  */
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "80%");
new RevealOnScroll($(".testimonial"), "70%");
var stickyHeader = new StickyHeader();
var modal = new Modal();


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
