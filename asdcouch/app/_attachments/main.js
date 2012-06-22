// <!-- ASD 1206 Project 4 -->
//Save    


/*
//Comment out old code
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

// Get
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
        $('<p>').html('Name: ' + value[0]).appendTo('.listDiv');
        $('<p>').html('Date: ' + value[1]).appendTo('.listDiv');
        $('<p>').html('Region: ' + value[2]).appendTo('.listDiv');
        $('<p>').html('Rating: ' + value[3]).appendTo('.listDiv');
        $('<p>').html('Notes: ' + value[4]).appendTo('.listDiv');
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
    var jdate = value[1];
    var groups = value[2];
    var rating = value[3];
    var notes = value[4];

    $('#jtitle').val(jtitle);
    $('#jdate').val(jdate);
    $('#groups').val(groups);
	$('#rating').val(rating);
    $('#notes').val(notes);

    // show edit , hide submit 
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

*/




// VALIDATE
$("#scrapbookForm").validate({
    submitHandler: function(){
        console.log("Call Action");
    }
});

function applyDefaultplaceholder(elem, val) {
  elem.style.color = '#999';
  elem.placeholder = val;
  elem.onfocus = function() {
    if(this.placeholder == val) {
      this.style.color = '';
      this.placeholder = '';
    }
  };
  elem.onblur = function() {
    if(this.placeholder === '') {
      this.style.color = '#999';
      this.placeholder = val;
    }
  };
}

$(document).ready( function() {
    var now = new Date();
    var today = now.getMonth() + '/' + now.getDate() + '/' + now.getFullYear();
    $('#jdate').val(today);
});
$.mobile.selectmenu.prototype.options.hidePlaceholderMenuItems = false;



// Load data from outside this app 

// JSON  
$('#myjsonbutton').bind('click', function(){
	$('#scrapbookdata').empty();
	$('<p>').html('IMPORT JSON').appendTo('#scrapbookdata');
	$.ajax({
		url: 'data.json',
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
		url: 'data.xml',
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
        url: "data.csv",
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
						'<p>Date Added: '+ thisScrapbook[1] +'</p>'+
						'<p>Category: '+ thisScrapbook[2] +'</p>'+
						'<p>Rating: '+ thisScrapbook[3] +'</p>'+
						'<p>Notes: '+ thisScrapbook[4] +'</p>'+
					'</div>'
				).appendTo('#scrapbookdata');
			console.log(lines);	
			}
        }
	});
	return false;
});

							/*
// couchDB
$('#myscrapbooklist').live("pageshow", function(){
	$('#scrapbooklist').empty();
	$.ajax({
		"url": '_views/entries',
		"dataType": 'json',
		"success": function(data){
			$.each(data.rows, function(index, scrapbook){
   				var jtitle = scrapbook.value.jtitle;
   				var groups = scrapbook.value.groups;
   				var rating = scrapbook.value.rating;
   				var notes = scrapbook.value.notes;
    			$(''+
					'<li class="scrapbooktitle">'+
						'<h3>'+ jtitle +'</h3>'+
						'<ul>'+
						'<li>'+
						'<div>'+
						'<ul class="inner">'+
						'<li>Name: '+ jtitle +'</li>'+
						'<li>Category: '+ groups +'</li>'+
						'<li>Rating: '+ rating +'</li>'+
						'<li>Notes: '+ notes +'</li>'+
						'</ul>'+
						'<p><a href="#myscrapbooklist" data-role="button">Return to List</a></p>'+
						'</div>'+
						'</li>'+
						'</ul>'+
					'</li>'
				).appendTo('#scrapbooklist');
			});
			$('#scrapbooklist').listview('refresh');
		}
	});
	return false;
});         
			*/

// <><><><><><><>WEEK 4 GOODIES<><><><><><>

//Listview

$('#couchme').live("pageshow", function(){
	$.couch.db("asdproject").view("asdproject/entries",{
			success: function(data) {
			$('#couchbooklist').empty();
			$.each(data.rows, function(index, value){
				var id = value.id;
				var item = (value.value || value.doc);
				 $('#couchbooklist').append(
				 	$('<li>').append(
				 		$('<a>').attr("href", "scrapbook.html?entry=" + id)
				 		.html('<h3>'+item.jtitle+'</h3>'+
				 			  '<p>'+item.notes+'</p>'
				 		)
				 	)
				 );		 
			}); 
			$('#couchbooklist').listview('refresh');
		}
	});
});

//get the key

var urlVars = function(){
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for(var pair in urlPairs){
		var keyValue = urlPairs[pair].split('=');
		var key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(keyValue[1]);
		urlValues[key] = value;
	}
	return urlValues;
};

// single view on new page

$('#entry').live("pageshow", function(){
	var entry = urlVars()["entry"];
		
	$.couch.db("asdproject").openDoc(entry, {
    	success: function(data) {
    			var jtitle = data.jtitle;
				var jdate = data.jdate;
				var groups = data.groups;
				var rating = data.rating;
				var notes = data.notes;
        	$('<div class="individual">'+
        			'<h3>Name: '+ jtitle +'</h3>'+
					'<ul class="inner">'+
					'<li>Date: '+ jdate +'</li>'+
					'<li>Category: '+ groups +'</li>'+
					'<li>Rating: '+ rating +'</li>'+
					'<li>Notes: '+ notes +'</li>'+
					'<li><a href="#" id="editmy-entry">Edit Entry</a></li>' + 
		        	'<li><a href="#" id="deletemy-entry">Delete Entry</a></li>'+
					'</ul>'+
					'</div>' 
        	  
        	).appendTo('#scrapbookitems');
        	
        	$('#deletemy-entry').live('click', function(){
        		var ask = confirm("Are you sure you want to remove this from your collection?");
        		if(ask) {
        		$.couch.db("asdproject").removeDoc(data, {
        			
        			success: function(data) {
        				console.log(data);
        				document.location.href = 'main.html';
        			},
        			error: function(status) {
        				console.log(status);
        			}
        		});
        		}else{ 
        			alert("The entry was not removed.");
        			document.location.href = 'main.html';
        		}
        	});
        }
	});
});


// edit an entry

$('#editmy-entry').live('click', function(){
	var entry = urlVars()["entry"];
	$.mobile.changePage("main.html#additem");
	$.couch.db("asdproject").openDoc(entry, {
    	success: function(data) {
    		jtitle = data.jtitle;
    		jdate = data.jdate;
    		groups = data.groups;
    		rating = data.rating;
    		notes = data.notes;
			$('#jtitle').val(jtitle);
		    $('#jdate').val(jdate);
		    $('#groups').val(groups).selectmenu('refresh', true);
			$('#rating').val(rating);
		    $('#notes').val(notes);
        
			// show edit item button, hide submit button
			var editButton = $('#edit-item-button').css('display', 'block');
			var subresButtons = $('#submit-reset-buttons').css('display', 'none');
			var itemList = $('#list').css('display', 'none');
			
			// save changes
			$('#edit-item').bind('click', function(){
				console.log("edit-item button was pressed");
				var jtitle = $('#jtitle').val();
			    var jdate = $('#jdate').val();
			    var groups = $('#groups').val();
				var rating = $('#rating').val();
			    var notes = $('#notes').val();
			    var item = {
					"_id": data._id,
					"_rev": data._rev,
					"jtitle": jtitle,
					"jdate": jdate,
					"groups": groups,
					"rating": rating,
					"notes": notes		
					};
					console.log(item);
				
				$.couch.db("asdproject").saveDoc(item, {
					success: function(data) {
						console.log(data);
						alert("Entry updated!");
						document.location.href = 'main.html';
					},
					error: function(status) {
        				console.log(status);
        				alert("Entry was not updated.");
    				}
				});
			return false;
			});
		}
	});
	
});



// save IT

$('#submit').bind('click', function(){
	var d = new Date();
    var myid = (d.getTime());
	var jtitle = $("#jtitle").val();
    var jdate = $("#jdate").val();
    var groups = $("#groups").val();
    var rating = $("#rating").val();
    var notes = $("#notes").val();
    var item = {
    	"_id": "entries:" + groups + ":" + myid,
    	"jtitle": jtitle, 
    	"jdate": jdate, 
    	"groups": groups, 
    	"rating": rating, 
    	"notes": notes
    };
	console.log(item);
	$.couch.db("asdproject").saveDoc(item, {
		success: function(data) {
			console.log(data);
			alert("Entry saved!");
			document.location.href = 'main.html'; 
		},
		error: function(status) {
			console.log(status);
			alert("Entry was not saved.");
		}
	});
return false;

});
