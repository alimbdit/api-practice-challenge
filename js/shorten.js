const shortenLink = (link) => {
    const URL = `https://api-ssl.bitly.com/v4/shorten${link}`;
    fetch(URL).then(res => res.json()).then(data => console.log(data))
}

shortenLink ('www.google.com');