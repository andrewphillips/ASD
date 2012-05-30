
// Week 3 - MiU - Form Validation
//Andrew Phillips

$("#scrapbookForm").validate({
    submitHandler: function(form) {
        console.log("Call Action");
    }
});

window.onload = function() {
  applyDefaultplaceholder(document.getElementById('jtitle'), 'Enter a Title');
  applyDefaultplaceholder(document.getElementById('category'), 'Select a Country');
  applyDefaultplaceholder(document.getElementById('subcategory'), 'Select a Category');

  
}

function applyDefaultplaceholder(elem, val) {
  elem.style.color = '#999';
  elem.placeholder = val;
  elem.onfocus = function() {
    if(this.placeholder == val) {
      this.style.color = '';
      this.placeholder = '';
    }
  }
  elem.onblur = function() {
    if(this.placeholder == '') {
      this.style.color = '#999';
      this.placeholder = val;
    }
  }
}

$(document).ready( function() {
    var now = new Date();
    var today = now.getMonth() + '/' + now.getDate() + '/' + now.getFullYear();
    $('#jdate').val(today);
    
});
$.mobile.selectmenu.prototype.options.hidePlaceholderMenuItems = false;