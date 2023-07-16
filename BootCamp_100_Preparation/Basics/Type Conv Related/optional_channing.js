const user = [{
    name: "John",
    address: {
      city: "New York",
    },
  },
  {
    name: "doe",
    myAddress: {
      city: "Varanasi",
    },
  },
  {
    name: "doe",
    address: {
      city: "Varanasi",
    },
  },
  {
    name: "doe",
    address: {
      city: "Varanasi",
    },
  },];


  function getAddress(address){
    const add=address.map((add)=>add.address?.city);
    return add.filter((val)=>val!==undefined);
  }

  console.log(getAddress(user));



