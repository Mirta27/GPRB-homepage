console.log('This is a log from the GPRB datafield file')

/*

DATAFIELD

*/

var photoCollection = ["formula_3_1.0_highlight_1", "C4_highlight_3", "JohnR_Mosport_highlight_2", "Glen", "F2007", "Boss302", "643", "XJ13"]
	h1Collection = ["GP Racing Bois Formula 3", "Chevrolet Corvette ZR-1 (C4)", "Canadian Tire Motorsports Park", "Watkins Glen", "Ferrari F2007", "Ford Mustang Boss 302 Laguna Seca", "Ferrari 643", "Jaguar XJ13"]
	brandCollection = ["league", "Chevrolet_car", "Canada_track", "United States_track", "Ferrari_car", "Ford_car", "Ferrari_car", "Jaguar_car"]
	h2Collection = ["", "", "", "", "", "", "", ""]
	h4Collection = ["Experience the modern day rookie formula.", "A3DR", "Johnr777", "LilSki", "VRC Modding Team", "A3DR", "ASR Formula", "mantasisg"]
	pCollection = ["This would be done using the css framework built into the mods list website. Please do this using segments and especially < article >, so you can add an indefinite amount of content with proper styling!/r/nThis would be done using the css framework built into the mods list website. Please do this using segments and especially < article >, so you can add an indefinite amount of content with proper styling!/r/nThis would be done using the css framework built into the mods list website. Please do this using segments and especially < article >, so you can add an indefinite amount of content with proper styling!/r/nThis would be done using the css framework built into the mods list website. Please do this using segments and especially < article >, so you can add an indefinite amount of content with proper styling!/r/nThis would be done using the css framework built into the mods list website. Please do this using segments and especially < article >, so you can add an indefinite amount of content with proper styling! The Porsche 911 (993) is the last air-cooled model of the Porsche 911. It stands as the last truly classic rendition of a world-renowned sportscar.", 
					"In 1990 Chevrolet launched the ZR-1 project with a mandate to build a supercar that would compete with Ferrari, Porsche and other european sports cars. Though the last of the 6938 ZR-1s rolled off the production line on April 28, 1995, the ZR-1 remains one of the fastest and most powerful production cars in the world./r/nLong heralded as America's sports car, the ZR-1 is the most powerful production Corvette ever made; forgoing the standard pushrod V8 for one with four cams, 32 valves and 405 horsepower. The ZR-1's LT5 engine is a multinational effort, with engineering assistance supplied by England's Lotus and assembly carried out by Mercury Marine in Stillwater Oklahoma. Final assembly of the entire car is performed where Corvettes have long been built: in Bowling Green Kentucky./r/nThe Corvette's structure is unusual with fiberglass panels that are bonded to a skeletal steel frame. This structure exhibits some flex, which takes away from the feel of precision, but tires, brakes and suspension geometry are all so good that this is more of a subjective demerit than anything else. The ZR-1's six-speed transmission has an extremely tall top gear for relaxed cruising and cockpit adjustable suspension damping makes those longer journeys more comfortable./r/nCarrying 200 pounds more than a standard Corvette and wearing wider tires, the ZR-1 is a little less nimble, but more than makes up for this in sheer power and speed. The ZR-1 attained an honest 178 miles per hour in our latest Road and Track top speed test, which places it a solid third in this group of sports cars. Drag strip launches are uneventful and easily repeatable, making a child's play to get zero to sixty clockings in the five-second range all day long and the big V8's power band is so broad that you seldom have to worry about being in the wrong gear.", 
					"After nearly one year of work, Johnr777 has finished the Canadian Tire Motorsports Park, also known as CTMP or Mosport, mod for Assetto Corsa. Complete with the visuals and detailed LIDAR-scanned track surface one would expect from official content, this is one track you don't want to miss!/r/nMosport is a very fast track with a large emphasis on elevation. Driving the correct way around, the first half of the track is mostly downhill, calming down on the back stretch, leading up to the slight uphill S-bend before the finish line. Most notably, Mosport was the venue for Canadian GP in Formula 1 between years 1971 and 1977.",
					"LilSki's incredible Watkins Glen, finally available for Assetto Corsa. Available on RaceDepartment!",
					"The Ferrari F2007 is a Formula One Racing car, with which Scuderia Ferrari competed during the 2007 Formula One season, it being the fifty-third single-seater car which the team have built to use in Formula One./r/nThe car is best known for providing Kimi Räikkönen with his first World Championship title and the team with its first Constructor's title since Michael Schumacher helped them win both in 2004./r/nFerrari were the only team to receive tobacco sponsorship for the 2007 season. The team's principal sponsor is Philip Morris International, parent company of Marlboro cigarettes./r/nHowever, in order to circumvent the European tobacco advertising ban, the car's livery did not feature the brand name. A simple red and white barcode was used and, hence the advertising at European Grands Prix was purely through association. In countries that allow tobacco sponsorship, Ferrari used Marlboro logos./r/nThe livery featured significantly less white than in previous years. The cars, driven by Felipe Massa and Kimi Räikkönen, raced with the numbers 5 and 6 respectively as the team finished second in the 2006 Constructors' Championship./r/nOrdinarily, this would mean numbers 3 and 4 for the following season but owing to World Champion Fernando Alonso changing teams to McLaren, Renault received these numbers as Fernando Alonso took his number 1 to his new team./r/nAt the Monaco Grand Prix, Ferrari changed the colour of their cars from Marlboro (light) red to Rosso corsa (racing) red, and kept it for the duration of the season./r/nPowered by a Ferrari 056 2.4L V8 naturally aspirated engine, the car is considered as one of the best Ferrari F1 car of all time.",
					"How do you amp up a performance car package as complete as the new 2012 Ford Mustang Boss 302 - already a street-legal race car in its own right? Pull out everything that doesn't make it go faster and add in more of what does. The result is the limited-production Ford Mustang Boss 302 Laguna Seca package - the ultimate 2012 Boss, named to commemorate the first-place Boss 302 finish at the 1970 Trans-Am series opener./r/n'The Ford Mustang Boss 302 Laguna Seca puts a race-ready version of the new Ford Mustang Boss 302 directly into enthusiasts' hands,' said Mark Fields, Ford president of The Americas. 'Laguna Seca isn't intended for Boss buyers who simply want an exhilarating daily driver. Think of it like a factory-built race car, which we hope avid racers and track-day fans are going to love.'/r/nFord Mustang Boss 302 Laguna Seca builds on the bumper-to-bumper improvements found on the standard Boss while further stiffening the chassis and installing an aerodynamics package carried over almost in its entirety from the Ford Racing Boss 302R./r/n'Drivers who know how to get the most from a tuned race car on a closed course are going to be amazed by what the Laguna Seca is capable of,' said Derrick Kuzak, group vice president, Global Product Development. 'The balance, agility and tuning of each vehicle system places the driver at the center of the machine, completely connected to everything the car is doing.'",
					"The Ferrari 643 was a Formula One car designed by Steve Nichols and Jean-Claude Migeot and was built by Scuderia Ferrari for use in the 1991 Formula One season. Built during May and introduced at the French Grand Prix, it initially looked to have potential to run at the front. Alain Prost qualified on the front row and took the lead, and although he was eventually passed by Nigel Mansell in his Renault powered Williams FW14, a second place in the car's first race looked promising. Aside from almost always being on the front part of the grid, it was not to be however./r/nThe chassis of the 643 was a total redesign over the 642 which suffered inconsistent handling issues, and was designed to allow for a more softer suspension travel, as per Prost's request. The car also featured Ferrari's first 'raised nose' design which allowed better airflow underneath the car. The V12 engine was upgraded six major times during 1991, with the final evolution used from Portugal to the end of the season. The chassis itself had two revisions, the first after the French Grand Prix—which saw a relocation of the exhaust exits from underneath the car, and Belgium which saw minor alterations to the body cover./r/nAlthough arguably one of the prettier cars in the field, the car was not as competitive as the Williams and McLaren cars of 1991. A big problem with the car lay with a lack of correct data gathering due to the team's turbulent management structure at the time. The car's results (or lack thereof) was one of the main reasons for the falling out between Prost and Ferrari, with the Frenchman eventually saying that 'a truck would be easier to drive than this car'. Following the Japanese Grand Prix, Prost was fired for the second time in his F1 career by a works team. The team replaced him in Australia with test driver Gianni Morbidelli.",
					"In 1964, after nearly a decade away from international sports car racing, Jaguar's Competition Department began work on a new race car. Dubbed XJ13, it was conceived with the ultimate goal of competing against the likes of Ford and Ferrari for outright victory at Le Mans. With the green light given for construction in late 1965, XJ13 was completed in 1966 and finally took to the track for testing in the spring of 1967./r/nWith a low-drag body designed by aerodynamicist Malcolm Sayer and a 5.0L quad-cam V12 making ~500bhp, XJ13 was theoretically capable of speeds over 200mph. But development dragged on for two years past the initial target, and that, combined with new FIA protoype rules in 1968 and changes with Jaguar's corporate management, spelled the end of the project for good. Though it was tested and developed thoroughly and showed true potential, it was obsolete by the time it was ready to go and was never raced./r/nShelved in early 1968, the car sat under a dust cloth until 1971 when it was hauled out to be filmed for promotional material for Jaguar's new line of V12 road cars. Works driver Norman Dewis crashed the car at speed, somehow surviving the ordeal unharmed, but XJ13 was not so lucky. It was rebuilt in 1973 and exists in that form to this day under the care of the Jaguar Heritage Trust. It is this body style that is modeled in Assetto Corsa."]

//Options for automatic sorting of the datafield
sortArticles();

/*

DATAFIELDS END, CODE BEGINS

*/

//Sorts the datafields in alphabetical order; looks at how the titles are sorted alphabetically and copies the same order to the other arrays
function sortArticles() {
	var photoCollectionSlave = new Array(photoCollection.length);
		h1CollectionAlphabetic = new Array(h1Collection.length);
		brandCollectionSlave = new Array(brandCollection.length);
		h2CollectionSlave = new Array(h2Collection.length);
		h4CollectionSlave = new Array(h4Collection.length);
		pCollectionSlave = new Array(pCollection.length);
		currentOriginal = "";
		newIndex = 0;
	
	//.slice() removes the reference h1CollectionAlphabetic would normally have on the original array, this way alphabetic gets sorted and the original doesn't.
	h1CollectionAlphabetic = h1Collection.slice();
	h1CollectionAlphabetic.sort();
	
	for(i=0; i<h1Collection.length; i++) {
		currentOriginal = h1Collection[i];
		
		newIndex = h1CollectionAlphabetic.indexOf(currentOriginal);
		
		//Once we have found what objects went where, we can instate identical index changes in the other arrays!
		photoCollectionSlave.splice(newIndex, 1, photoCollection[i]);
		brandCollectionSlave.splice(newIndex, 1, brandCollection[i]);
		h2CollectionSlave.splice(newIndex, 1, h2Collection[i]);
		h4CollectionSlave.splice(newIndex, 1, h4Collection[i]);
		pCollectionSlave.splice(newIndex, 1, pCollection[i]);
	}
	
	photoCollection = photoCollectionSlave.slice();
	h1Collection = h1CollectionAlphabetic.slice();
	brandCollection = brandCollectionSlave.slice();
	h2Collection = h2CollectionSlave.slice();
	h4Collection = h4CollectionSlave.slice();
	pCollection = pCollectionSlave.slice();
}