var Blackjack = Blackjack || {};

// lets build this out with potential rule changes in mind.

Blackjack.deck.suites = [ "diamonds", "clubs", "hearts", "spades"];
Blackjack.deck.ranks = [ "ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king" ];

Blackjack.deck.setup = function(deck_count){

  Blackjack.deck.cards = Blackjack.deck.cards || [];
  var cards = Blackjack.deck.cards

  for (var count = 0; count < deck_count; count++) {
    for (var suite_index = 0; suite_index < Blackjack.deck.suites.length; suite_index++) {
      var suite = Blackjack.deck.suites[suite_index];

      for (var rank_inde = 0; rank_index < Blackjack.deck.ranks.length; rank_index++) {
        var rank = Blackjack.deck.ranks[rank_index];
        var card = {};

        card.name = suite + "_of_", + rank;
        card.img_src = "svg-cards/" + card.name + ".svg";

        // array in case of other possible values
        var values = [rank_index];

        // special 1 or 11 rule
        if (rank == "ace") {
          values.push( 11 );
        }// if ace values includes 11

        card.values = values;

        cards.push(card);
      }//for each rank
    }//for each suite
  }//for each deck count
}// deck setup

Blackjack.deck.shuffle = function(cards = Blackjack.deck.cards){
}
