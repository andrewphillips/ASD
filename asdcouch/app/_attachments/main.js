// <!-- ASD 1206 Project 2 -->
//Yes, I still need to change  over to pageInIt---I will get there….(and update to the newer jQuery)--I did not get all things fixed from last week like I thought I would.


$(document).ready(function() {



function autoFillData(){

	//Store the JSON object into Local Storage
	for (var n in json){
		var id = Math.floor(Math.random() * 100000001);
		localStorage.setItem(id, JSON.stringify(json[n]));
	}
    }
    
    
function saveData(id) {
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
}


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

function getData() {
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
};


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

// VALIDATE
function validate() {

$("#scrapbookForm").validate({
    invalidHandler: function(form, validator) {},
    submitHandler: function(){
	saveData();
        console.log("Call Action");
    }
});
}


/*
$(document).ready( function() {
    var now = new Date();
    var today = now.getMonth() + '/' + now.getDate() + '/' + now.getFullYear();
    $('#jdate').val(today);
 */      
//});
//$.mobile.selectmenu.prototype.options.hidePlaceholderMenuItems = false;





// Load data from outside this app 

// JSON  
$('#myjsonbutton').bind('click', function(){
	$('#scrapbookdata').empty();
	$('<p>').html('IMPORT JSON ').appendTo('#scrapbookdata');
	$.ajax({
		url: 'xhr/data.json',
		dataType: 'json',
		type: 'GET',
		success: function(response){
        	for (var i=0, j=response.myscrapbook.length; i<j; i++){
				var jdata = response.myscrapbook[i];
				$(''+
					'<div class="scrapbooktitle">'+
						'<h3>'+ jdata.jtitle +'</h3>'+
						'<p>Date Added: '+ jdata.jdate +'</p>'+
						'<p>Category: '+ jdata.groups +'</p>'+
						'<p>Rating: '+ jdata.rating +'</p>'+
						'<p>Notes: '+ jdata.notes +'</p>'+
					'</div>'
				).appendTo('#scrapbookdata');
				console.log(response);
			}
		}
	});
	return false;
});

// XML 
$('#myxmlbutton').bind('click', function(){
	$('#scrapbookdata').empty();
	$('<p>').html('IMPORT XML').appendTo('#scrapbookdata');
	$.ajax({
		url: 'xhr/data.xml',
		dataType: 'xml',
		type: 'GET',
		success: function(xml){
			$(xml).find("scrapbookNode").each(function(){
   				var jtitle = $(this).find('jtitle').text();
   				var jdate = $(this).find('jdate').text();
   				var groups = $(this).find('groups').text();
   				var rating = $(this).find('rating').text();
   				var notes = $(this).find('notes').text();
				$(''+
					'<div class="scrapbooktitle">'+
						'<h3>'+ jtitle +'</h3>'+
						'<p>Date Added: '+ jdate +'</p>'+
						'<p>Category: '+ groups +'</p>'+
						'<p>Rating: '+ rating +'</p>'+
						'<p>Notes: '+ notes +'</p>'+
					'</div>'
				).appendTo('#scrapbookdata');
				console.log(xml);
			});
		}
	});
	return false;
});


//CSV 
$('#mycsvbutton').bind('click', function(){
	$('#scrapbookdata').empty();
	$('<p>').html('IMPORT CSV').appendTo('#scrapbookdata');
	 $.ajax({
        type: "GET",
        url: "xhr/data.csv",
        dataType: "text",
        success: function(data) {
        	var textLines = data.split(/\r\n|\n/);
    		var headers = textLines[0].split(',');
    		var lines = []; 

			for (var i=1; i<textLines.length; i++) {
				var data = textLines[i].split(',');
				if (data.length == headers.length) {
					var scrapbook = []; 
					
					for (var j=0; j<headers.length; j++) {
						scrapbook.push(data[j]); 
					}
					lines.push(scrapbook); 
				}
				
			}
			
			for (var m=0; m<lines.length; m++){
				var thisScrapbook = lines[m];
			$(''+
					'<div class="scrapbooktitle">'+
						'<h3>'+ thisScrapbook[0] +'</h3>'+
						'<p>Date Added: '+ thisScrapbook[2] +'</p>'+
						'<p>Category: '+ thisScrapbook[3] +'</p>'+
						'<p>Rating: '+ thisScrapbook[5] +'</p>'+
						'<p>Notes: '+ thisScrapbook[6] +'</p>'+
					'</div>'
				).appendTo('#scrapbookdata');
			console.log(lines);	
			}
        }
	});
	return false;
});

var json;

// Save data!!
$('#submit').live('click', validate);

// GET Data
$('.displayLink').live('click', getData);


});