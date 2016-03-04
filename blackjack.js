var Blackjack = Blackjack || {};

// lets build this out with potential rule changes in mind.

Blackjack.deck = {};
Blackjack.deck.suites = [ "diamonds", "clubs", "hearts", "spades"];
Blackjack.deck.ranks = [ "ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king" ];

Blackjack.deck.setup = function(deck_count = 1){

  Blackjack.deck.cards = Blackjack.deck.cards || [];
  var cards = Blackjack.deck.cards

  for (var count = 0; count < deck_count; count++) {
    for (var suite_index = 0; suite_index < Blackjack.deck.suites.length; suite_index++) {
      var suite = Blackjack.deck.suites[suite_index];

      for (var rank_index = 0; rank_index < Blackjack.deck.ranks.length; rank_index++) {
        var rank = Blackjack.deck.ranks[rank_index];
        var card = {};

        card.name = rank + "_of_" + suite;
        card.img_src = "svg-cards/" + card.name + ".svg";

        // array in case of other possible values
        var values = [];
        if( rank_index < 10 ){
            values.push(rank_index+1)
        }else{
            values.push(10);
        }

        // special 1 or 11 rule
        if (rank == "ace") {
          values.push( 11 );
        }// if ace values includes 11

        card.values = values;

        cards.push(card);
      }//for each rank
    }//for each suite
  }//for each deck count
  return cards;
};// deck setup

Blackjack.deck.yates_shuffle = function(cards = Blackjack.deck.cards){
  //cards should be an array
  for (var count = cards.length; count; count--) {
      let index = count - 1;
      let rand = Math.floor(Math.random() * index);
      let temp = cards[index];
      cards[index] = cards[rand];
      cards[rand] = temp;
  }
  return cards;
};

Blackjack.deck.riffle_shuffle = function(cards = Blackjack.deck.cards, shuffle_count = 1){
  // temporary array
  var new_cards = [];
  var halves = []
  // split the cards array into two arrays
  var num_of_cards = cards.length;

  halves.push(arrayName.splice(0 , Math.ceil(num_of_cards / 2)));
  halves.push(cards);

  while (new_cards.length <= num_of_cards) {
    let rand = Math.floor(Math.random() * 2);
    let flipflop = num_of_cards % 2; // yeaaaaah maaaattthh!!!!

    for (var i = 0; i < rand; i++) {
      new_cards.push(halves[flipflop].pop());
    }//for
  }
};
