const marvel = {
  render: () => {
    const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b50ba2ef88f26b9a36b1fd2826948e84&hash=dcf18f0ccddca3df1c633767d6610620';
    const container = document.querySelector('#marvel-row');
    let contentHTML = '';

    fetch(urlAPI)
      .then(res => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
            <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
            </div>`;
        }
        container.innerHTML = contentHTML;
      })
  }
};
marvel.render();
  
  
  
 