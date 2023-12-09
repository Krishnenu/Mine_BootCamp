const c = {
  locations: [
    {
      name: "Evergreen Heights",
      locationID: "LID001",
      buildings: [
        {
          id: "BID001",
          name: "Hillside Manor",
          owners: [
            {
              name: "John Doe",
              isCriminal: false,
            },
            {
              name: "Jane Smith",
              isCriminal: true,
            },
            {
              name: "Jane Smith",
              isCriminal: true,
            },
            {
              name: "Jane Smith",
              isCriminal: true,
            },
            {
              name: "Jane Smith",
              isCriminal: true,
            },
          ],
        },
      ],
    },
  ],
};


let obj={
    you:"hi",
    me:["hi","hello"]
}

console.log(obj.me[0])
console.log(c.locations[0].buildings[0].id)