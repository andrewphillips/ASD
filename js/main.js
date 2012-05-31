

// Save data!!

$('#submit').live('click', function saveData(id) {
    var d = new Date();
    var key = (d.getTime());
    var jtitle = $("#jtitle").val();
    var jdate = $("#jdate").val();
    var groups = $("#groups").val();
    var rating = $("#rating").val();
    var notes = $("#notes").val();
    var item = [
    jtitle, jdate, groups, rating, notes];

    localStorage.setItem(key, item);
    location.reload();
    alert("Saved to Scrapbook!");
});	

function toggleControls(n) {
    switch (n) {
    case "on":
        $('#scrapbookForm').css('display', 'none');
        $('#clearLink').css('display', 'inline');
        break;
    case "off":
        $('#scrapbookForm').css('display', 'block');
        $('#clearLink').css('display', 'inline');
        $('#list').css('display', 'none');
        break;
    default:
        return false;
    }
}

// GET Data

$('#displayLink').live('click', function getData() {
	toggleControls("on");
    var getListdiv = $('#list')[0];
    for (var i = 0, j = localStorage.length; i < j; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        value = value.split(',');

       $('<div>').attr({
            'class': 'listDiv'
        }).appendTo('#list');
        $('<h3>').html(value[0]).appendTo('.listDiv');
        $('<img>').attr({
            'src': value[1],
            'width': '300'
        }).appendTo('.listDiv');
        $('<p>').html('Date: ' + value[2]).appendTo('.listDiv');
        $('<p>').html('Region: ' + value[3]).appendTo('.listDiv');
        $('<p>').html('Rating: ' + value[5]).appendTo('.listDiv');
        $('<p>').html('Notes: ' + value[6]).appendTo('.listDiv');
        $('<p>').html($('<a>').attr({
            'href': '#',
            'onclick': 'deleteItem(' + key + ');'
        }).html('Delete Entry')).appendTo('.listDiv');
        $('<p>').html($('<a>').attr({
            'href': '#',
            'onclick': 'editItem(' + key + ');'
        }).html('Edit Entry')).appendTo('.listDiv');

    }
});


// EDIT 

function editItem(id) {
    var itemId = id;
	var value = localStorage.getItem(itemId);
	value = value.split(',');
	toggleControls("off");
    var jtitle = value[0];
    var jdate = value[2];
    var groups = value[3];
    var rating = value[5];
    var notes = value[6];

    $('#jtitle').val(jtitle);
    $('#jdate').val(jdate);
    $('#groups').val(groups);
	$('#rating').val(rating);
    $('#notes').val(notes);

    // show edit item button, hide submit button
    var editButton = $('#edit-item-button').css('display', 'block');
    var subresButtons = $('#submit-reset-buttons').css('display', 'none');
    var itemList = $('#list').css('display', 'none');

    // when clicking editItem button
    $('#edit-item').live('click', function clickEdit() {
        var jtitle = $('#jtitle').val();
        var jdate = $('#jdate').val();
        var groups = $('#groups').val();
        var rating = $('#rating').val();
        var notes = $('#notes').val();
        var item = [
        jtitle, jdate, groups, rating, notes];
     
        localStorage.setItem(itemId, item);           
        location.reload();
        alert("Entry Edited!");
        
    });

}


// DELETE  

function deleteItem(id) {
    var ask = confirm("Are you sure you want to remove this from your collection?");
    if (ask) {
        localStorage.removeItem(id);
        window.location.reload();
    } else {
        alert("The entry was not removed.");
    }
}


// CLEAR

function clearLocal() {
    if (localStorage.length === 0) {
        alert("There is no data to clear.");
    } else {
        localStorage.clear();
        alert("All data has been removed from local storage!");
        window.location.reload();
        return false;
    }
}
		
// Validation from Week 3 in MiU

		
 $("#scrapbookForm").validate({
    submitHandler: function(form) {
        console.log("Call Action");
    }
});

window.onload = function() {
  applyDefaultplaceholder(document.getElementById('jtitle'), 'Enter a Title');
  applyDefaultplaceholder(document.getElementById('category'), 'Select a Country');

  
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