/*

        JSAutoComplete JavaScript Library

        Created 2006, James Melanson, jmelanson1965@gmail.com

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

*/

//Required for the library to function. Do not remove
var JmOoJpJAutoCompleteVal = 0;

function autocomplete () {
  JmOoJpJAutoCompleteVal++;
  this.id = JmOoJpJAutoCompleteVal;
  this.jacvals = new Array();
  var ic = new Array(8,9,13,16,17,18,19,20,27,33,34,35,36,37,38,39,40,44,46,112,113,114,115,116,117,118,119,120,121,122,123);
  this.ignoreKeys = new Array();
  this.ignoreCaseB = false;
  for(ici = 0; ici<ic.length;ici++) {
    this.ignoreKeys[ic[ici]] = true;
  }
  this.addArray = function(jacvalsSubmitted) {
    for(var ji=0;ji<jacvalsSubmitted.length;ji++) {
      this.jacvals.push(jacvalsSubmitted[ji]);
    }
  }
  this.addWord = function(jacvalsSubmitted) {
    if(arguments[0]) {
      this.jacvals.push(arguments[0]);
    }
  }
  this.removeWord = function() {
    if(arguments[0]) {
      for(var jaci=0;jaci<this.jacvals.length;jaci++) {
        if(this.jacvals[jaci]==arguments[0]) {
          this.jacvals.splice(jaci, 1);
        }
      }
    }
  }
  this.complete = function() {
    var len = arguments[0].value.length;
    if(this.ignoreKeys[arguments[1].keyCode] != true) {
      for(var mi = 0; mi<this.jacvals.length; mi++) {
        if(this.ignoreCaseB) {
          var comparator = this.jacvals[mi].toUpperCase();
          var comparison = arguments[0].value.toUpperCase();
          if(comparator.indexOf(comparison) == 0) {
            arguments[0].value = this.jacvals[mi];
            this.setRange(arguments[0], len, this.jacvals[mi].length);
          }
        } else {
          if(this.jacvals[mi].indexOf(arguments[0].value) == 0) {
            arguments[0].value = this.jacvals[mi];
            this.setRange(arguments[0], len, this.jacvals[mi].length);
          }
        }
      }
    }
  }
  this.setRange = function() {
    if (arguments[0].createTextRange) {
        var oRange = arguments[0].createTextRange(); 
        oRange.moveStart("character", arguments[1]); 
        oRange.moveEnd("character", arguments[2] - arguments[0].value.length); 
        oRange.select();
    } else if (arguments[0].setSelectionRange) {
        arguments[0].setSelectionRange(arguments[1], arguments[2]);
    } 
    arguments[0].focus(); 
  }
  this.ignoreCase = function() {
    this.ignoreCaseB = true;
  }
  this.caseSensitive = function() {
    this.ignoreCaseB = false;
  }
  this.count = function() {
    return this.jacvals.length;
  }
  this.list = function() {
    return this.jacvals;
  }
}

