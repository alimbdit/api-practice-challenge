const countryDetails = (region) => {
    const URL = `https://restcountries.com/v3.1/${region}`;
    fetch(URL).then(res => res.json()).then(data => showCountry(data))
}

const showCountry = (values) => {
    // console.log(values);
    const container = document.getElementById('country-container');
    container.innerHTML = ``;
    values.forEach(value => {
        // console.log(value.languages);
        // console.log(value);
        singleCountryDetails(value);
        const div = document.createElement('div');
        div.classList.add('card', 'card-compact', 'w-full', 'bg-base-100', 'shadow-xl');

        div.innerHTML = `
        <figure><img src="${value.flags.png}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Name: ${value.name.common}</h2>
          <p>Population: ${value.population}</p>
          <p>Region: ${value.region}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;

        container.appendChild(div);
        
        
    })
}

const singleCountryDetails = (value) =>{
    console.log(value.capital[0]? value.capital[0] : '' );

    const containerCapital = document.getElementById('capital-container');

    const li = document.createElement('li');
    li.innerHTML =`
    <a>${value.capital[0]}</a>
    `;
    containerCapital.appendChild(li);
}

countryDetails('all')