const adviseLoad = (id) => {
    const URL = `https://api.adviceslip.com/advice/search/${id}`;
    fetch(URL).then(res => res.json()).then(data => showAdvise(data))
}

const showAdvise = (data) => {
    console.log(data.slips[0])
    const container = document.getElementById('advice-container');
    container.innerHTML = ``;

    container.innerHTML = `
    <div class="card-body items-center text-center">
    <p>ADVICE # ${data.slips[0].id}</p>
    <h2 class="card-title ">"${data.slips[0].advice}"</h2>
    
    
  </div>
    `;

}

const queryId = () => {
    const searchId = document.getElementById('input-field').value;
    adviseLoad(searchId);

}

adviseLoad(1) 