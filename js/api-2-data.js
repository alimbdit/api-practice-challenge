const data = [
    {
      _id: "60795d4e0489a32f948c4167",
      name: "Honda Sedan",
      price: "132",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
      _id: "60795e440489a32f948c4168",
      name: "MitoSedan",
      price: "221",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
      _id: "60795fc20489a32f948c4169",
      name: "Isuzu Tacoma",
      price: "105",
      description:
        "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "434",
      description:
        "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
      
    },
  ];



  const showCar = (cars) => {
    console.log(cars);

    const container = document.getElementById('card-container');
    cars.forEach(car => {
      const createDiv = document.createElement('div');
      createDiv.classList.add("card", "w-full", "bg-base-100", "shadow-xl");

      createDiv.innerHTML = `
      <figure><img src="${car.imageURL ? car.imageURL : 'https://picsum.photos/200/300'}" alt="Car" /></figure>
  <div class="card-body">
    <h2 class="card-title">Car Name: ${car.name}</h2>
    <p>Car Details: ${car.description}</p>
    <div class="card-actions justify-start">
      <button class="btn btn-primary">Car Price ${car.price}</button>
    </div>
  </div>
      `;

      container.appendChild(createDiv);
      console.log(car);
      

    });
    
  }

  showCar(data);