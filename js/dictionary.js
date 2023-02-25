const loadWord = (word) => {
  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showWord(data))
    .catch((error) => console.log(error));
};

const showWord = (data) => {
  console.log(data);

  const container = document.getElementById("container");
  container.innerText = '';
  const div = document.createElement("div");
  
  div.innerHTML = `
    <h1 class="text-5xl font-bold ">${data[0].word
    }</h1>
    <hr class="my-4 border-2 w-1/2">
    <div class="flex gap-10 items-center">
        <p class="text-red-700 text-3xl font-medium">phonetic: ${data[0].phonetic
        }</p>
    <audio class="mt-5" controls src="${data[0].phonetics
[0].audio}">
    </audio>
    </div>

    <p class="mt-10 text-blue-700 text-xl font-medium">meaning: ${data[0].meanings[0].definitions[0].definition}</p>

    <p class="mt-10 text-sky-700 text-xl font-medium">synonyms: ${data[0].meanings[0].synonyms}</p>
    <p class="mt-10 text-sky-700 text-xl font-medium">antonyms: ${data[0].meanings[0].antonyms}</p>
    `;
    container.appendChild(div);
};

const searchWord = () => {
  const wordInput = document.getElementById("input-field").value;
  document.getElementById("input-field").value = '';
  loadWord(wordInput);
};

// loadWord ('help')
