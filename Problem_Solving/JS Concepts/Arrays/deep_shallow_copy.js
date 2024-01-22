const PersonDetails = {
  firsName: "Jone",
  lastName: "Done",
  address: { city: "new York" },
};

const Person2=Object.assign({},PersonDetails);
const Person3={...PersonDetails};

Person2.address.city="wasignton";
Person2.firsName="marry";
Person2.lastName="Me";
Person3.firsName="Hi";
Person3.address.city="Bangalore";


console.log(PersonDetails);
console.log(Person2);
console.log(Person3);

