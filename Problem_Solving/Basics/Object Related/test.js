let list=[{
    "name": "Evergreen Heights",
    "locationID": "LID001",
    "buildings": [
      {
        "id": "BID001",
        "name": "Hillside Manor",
        "owners": [
          {
            "name": "John Doe",
            "isCriminal": false
          },
          {
            "name": "Jane Smith",
            "isCriminal": true
          }
        ]
      },
      {
        "id": "BID002",
        "name": "Garden View Apartments",
        "owners": [
          {
            "name": "Michael Johnson",
            "isCriminal": false
          }
        ]
      }
    ]
  },
  {
    "name": "Riverside Park",
    "locationID": "LID002",
    "buildings": [
      {
        "id": "BID003",
        "name": "Maple Court",
        "owners": [
          {
            "name": "Emily Davis",
            "isCriminal": false
          }
        ]
      },
      {
        "id": "BID004",
        "name": "Willow Creek Apartments",
        "owners": [
          {
            "name": "Christopher Wilson",
            "isCriminal": true
          },
          {
            "name": "Sarah Thompson",
            "isCriminal": true
          }
        ]
      }
    ]
  }
]

// console.log(.owners[0].isCriminal);


let fn=function(list){
    for(let j=0;j<list.length;j++){
    let owner=list[j].buildings[j].owners;
    
    for(let i=0;i<owner.length;i++){
    console.log(owner[i].isCriminal);
    
}
}
}

fn(list);

for (let i=0; i < list.length; i++) {
  for (let j = 0; j < list[i]['buildings'].length; j++) {
    for (let k = 0; k < list[i]['buildings'][j]['owners'].length; k++) {
      let name = list[i]['buildings'][j]['owners'][k]['name'];
      console.log(name);
    }
  }
}
