// Andrew Phillips
// <!-- ASD 1206 Project 1 -->
// Default Data

function autoFillData(){
	var json = {
			"asset1": {
				"jtitle": ["Title:", "East Coast View"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "USA"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "We got to take the elevator all the way to to the top of this building.  What a view!!"],
			},
					
			"asset2": {
				"jtitle": ["Title:", "McDonalds Stop"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "USA"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "We were desperate for a snack, so we hit up McD's!"],
			},

			"asset3": {
				"jtitle": ["Title:", "On the road again"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "USA"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "This is the route we took to get from ATL to NY!"],
			},
					
			"asset4": {
				"jtitle": ["Title:", "Great Memory :-)"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "USA"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "We made it to NY! I love the Rockefeller Center!"],
			},			
			
			"asset5": {
				"jtitle": ["Title:", "Queenstown!!"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "New Zealand"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "We fell in love with this place.  So beautiful!"],
			},	
			
			"asset6": {
				"jtitle": ["Title:", "Candy Store"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "New Zealand"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "We found some yummy candy here.  Biggest candy store since NY!"],
			},
			
			"asset7": {
				"jtitle": ["Title:", "NZ!"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "New Zealand"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "Heres where we stayed, mostly."],
			},	
			
			"asset8": {
				"jtitle": ["Title:", "Cool Tower"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "New Zealand"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "Auckland!"],
			},
					
			"asset9": {
				"jtitle": ["Title:", "Chichen Itza"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "Mexico"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "Breathtaking!"],
			},
						
			"asset10": {
				"jtitle": ["Title:", "Our Market Trip"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "Mexico"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "Some yummies that we bought!"],
			},	
			
			"asset11": {
				"jtitle": ["Title:", "Monterrey"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "Mexico"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "Where we stayed for 2 nights!"],
			},
			
			"asset12": {
				"jtitle": ["Title:", "Beach"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "Mexico"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "Love!"],
			},
						
			"asset13": {
				"jtitle": ["Title:", "Hotel"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "Europe"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "We were in the city too much, so I decided to put this here :-)"],
			},
			
			"asset14": {
				"jtitle": ["Title:", "Market"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "Europe"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "Yummy veggies at the local market!"],
			},
						
			"asset15": {
				"jtitle": ["Title:", "Trip"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "Europe"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "The trip from Munich to Rome that we traveled.  Amazing!"],
			},
						
			"asset16": {
				"jtitle": ["Title:", "The Rome Theatre"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "Europe"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "Beautiful!"],
			},
						
			"asset17": {
				"jtitle": ["Title:", "Tokyo"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "Japan"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "Tokyo from up high!"],
			},	
			
			"asset18": {
				"jtitle": ["Title:", "Noodles"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "Japan"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "My fav dish there!"],
			},
						
			"asset19": {
				"jtitle": ["Title:", "Landing"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "Japan"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "Our flight landed in Osaka."],
			},
								
			"asset20": {
				"jtitle": ["Title:", "Mt. Fuji!!!!"]
				"jdate": ["Date Added:", "2011-12-15"],
				"groups": ["Category:", "Japan"],
				"rating": ["Rating:", "9"],
				"notes": ["Notes :: Stories", "This was such a sight to see.  We loved all the mountains we found while traveling!"],
			}			
		};
		
	//Store the JSON object into Local Storage
	for (var n in json){
		var id = Math.floor(Math.random() * 100000001);
		localStorage.setItem(id, JSON.stringify(json[n]));
	}
}
