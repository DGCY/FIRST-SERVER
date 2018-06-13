function getData(){
  
  var pokemon = document.getElementById('pokemon').value
    var url = 'https://api.pokemontcg.io/v1/cards?name=' + pokemon
    
    fetch(url)
    .then( data => data.json() )
    .then( json => {
        console.log(json)
        // var filteredData = json.filter(cards => cards.name === pokemon)
        var finalHtml = ''
        
        json.cards.forEach( cards => {
            var itemHtml = '<div><img src="'+cards.imageUrl+'"/>'+cards.set +' - '+ cards.name +' - ' +cards.rarity+ ' - HP: '+cards.hp+'</div>'
            finalHtml += itemHtml
        })
        document.getElementById('results').innerHTML = finalHtml
        
    })
    .catch( error => console.log(error))
}

