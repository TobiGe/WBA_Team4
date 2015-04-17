var fs = require('fs')
var chalk = require('chalk')
var skyscraper;

fs.readFile("wolkenkratzer.json", function(err, data){

	if(err) throw err;

	console.log('Daten werden eingelesen...');
	console.log();

	skyscraper = JSON.parse(data);
    
    //Sortieren 
    skyscraper.wolkenkratzer.sort(function (a,b){
        if(a.hoehe == b.hoehe){
            return 0;
        }
        
        else if(a.hoehe < b.hoehe){
            return -1;
        }
        
        else if(a.hoehe > b.hoehe){
            return 1;
        }
    });
    
    //in Datei schreiben
    var outputFilename="wolkenkratzer_sortiert.json"
    
    fs.writeFile(outputFilename, JSON.stringify(skyscraper, null, 4), function(err) {
        if(err) {
          console.log(err);
        } 
        
        else {
          console.log("JSON saved to " + outputFilename);
        }
    }); 
    
    
	for(var i = 0; i < skyscraper.wolkenkratzer.length; i++)
	{
		console.log(chalk.green('Name: '+skyscraper.wolkenkratzer[i].name));
		console.log(chalk.cyan('Stadt: '+skyscraper.wolkenkratzer[i].stadt));
		console.log(chalk.magenta('Hoehe: '+skyscraper.wolkenkratzer[i].hoehe+'m'));
		console.log('--------------------')
	}

});




  