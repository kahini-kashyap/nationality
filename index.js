const fetch = require("cross-fetch");
var name = process.argv[2];

fetch("https://api.nationalize.io/?name="+name).then(function(res){
    return res.json();
}).then(function(res2){
    if (res2.country.length == 0){
        console.log("There is no country with this name.");
    }
else{
    console.log("Countries:");
    for(let i =0; i<res2.country.length;i++){
        console.log(res2.country[i].country_id);
    }
}
})

