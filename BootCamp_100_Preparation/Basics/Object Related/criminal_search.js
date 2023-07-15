const locationJson=require("./justice.json");


let isCriminal= function(locations){
    let criminalList=[];   
    for(let i=0;i<locations.length;i++){
        let buildings=locations[i].buildings;
        buildings.forEach(building => {
            let owners = building.owners
            for(let j=0;j<owners.length;j++){
                if(owners[j].isCriminal===true){
                   criminalList.push(owners[j]);
                }
              }
       });
    }
    return criminalList;
}

const top5CriminalLocation = function(locations){
    locations.forEach(location => {
        location.criminalCount = 0; //CRUD
        location.buildings.forEach( building => {
            building.owners.forEach(owner => {
                if(owner.isCriminal){
                    location.criminalCount++;
                }
            });
        });
    });
    return locations.sort((a,b)=> b.criminalCount - a.criminalCount).splice(0,5);
}

const top10SafeLocation = function(locations){
    locations.forEach(location=>{
        location.isSafe=true;
        location.buildings.forEach(building=>{
           building.owners.forEach(owner=>{
            if(owner.isCriminal===true){
                location.isSafe=false;
            }
           })
        })
    })
    return locations.filter((location)=>{
            if(location.isSafe===false){
                return location;
            }        
    }).splice(0,10);
}

const removeCriminalLocation=function(locations){
    locations.forEach(location=>{
        location.isSafe=true;
        location.buildings.forEach(building=>{
            building.owners.forEach(owner=>{
                if(owner.isCriminal===true){
                    location.isSafe=false;
                }
            })
        })

    })
    return locations.map((location,index)=>{
       return location.isSafe?location:"";
    }).filter(i=>!(i===""));
    
}
console.log(removeCriminalLocation(locationJson.locations));