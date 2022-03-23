let pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
        }
    };

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']);

//Bind example

let pokemon2 = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        return this.firstname + ' ' + this.lastname;
    }
};

let pokemonName2 = function() {
    console.log(this.getPokeName() + "loves me!!");
};
let myfn = pokemonName2.bind(pokemon2)
myfn()