const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

const showData = (person) => {
  const cardContainer = document.getElementById("card-container");
  console.log(person);
  const personF = person.result;
  console.log(personF);
  personF.forEach((personFind) => {
    const createDiv = document.createElement("div");
    createDiv.classList.add("card", "w-full", "bg-base-100", "shadow-xl");
    createDiv.innerHTML = `
  <div class="card-body">
  <h2 class="card-title">Person Name: ${personFind.name.fullName[0]} ${personFind.name.fullName[1]}</h2>
  <hr>
  <p>Age: ${personFind.age}</p>
  <p>Street: ${personFind.address.street}, House No: ${personFind.address.house} </p>
  <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
  </div>
</div>
  `;
  cardContainer.appendChild(createDiv);
  });
};

showData(person);



