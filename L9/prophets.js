fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json')
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject); 
  const prophets = jsonObject['prophets'];
  for (let i = 0; i < prophets.length; i++) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let bdate = document.createElement('p');
    let bplace = document.createElement('p');
    let image = document.createElement('img');
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    bdate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
    bplace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
    image.setAttribute('src', prophets[i].imageurl);
    image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname);
    card.appendChild(h2);
    card.appendChild(bdate);
    card.appendChild(bplace);
    card.appendChild(image);
    document.querySelector('div.cards').appendChild(card);
  }
});



  