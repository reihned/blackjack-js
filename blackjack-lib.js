// globals?? is there an alternative?
var Suites = [ "diamonds", "clubs", "hearts", "spades"];
var Ranks = [ "ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king" ]

var Cards = function() {
    this.suites = Suites;
    this.ranks = Ranks;
    return this;
};

Cards.prototype = {
  suites: Suites,
  ranks:  Ranks,
  yates_shuffle:  function(cards){
    //cards should be an array
    for (var count = cards.length; count; count--) {
        let index = count - 1;
        let rand = Math.floor(Math.random() * index);
        let temp = cards[index];
        cards[index] = cards[rand];
        cards[rand] = temp;
    }
    return cards;
  },//yates
  new_deck: function(deck_count = 1){

    var cards = [];

    for (var count = 0; count < deck_count; count++) {
      for (var suite_index = 0; suite_index < this.suites.length; suite_index++) {
        var suite = this.suites[suite_index];

        for (var rank_index = 0; rank_index < this.ranks.length; rank_index++) {
          var rank = this.ranks[rank_index];
          var card = {};

          card.name = rank + "_of_" + suite;
          card.img_src = "svg-cards/" + card.name + ".svg";

          cards.push(card);
        }//for each rank
      }//for each suite
    }//for each deck count
    return cards;
  },// deck setup
  riffle_shuffle: function(cards){
    //consider:
    // http://cs.stackexchange.com/questions/332/in-place-algorithm-for-interleaving-an-array/
    // http://stackoverflow.com/questions/1777901/array-interleaving-problem

    // temporary array
    var new_cards = [];
    var halves = []
    // split the cards array into two arrays
    var num_of_cards = this.suites.length * this.ranks.length;
    halves.push(cards.splice(0 , Math.floor(num_of_cards / 2)));
    halves.push(cards);

    var count = 0;
    while (new_cards.length < num_of_cards) {
      if( halves[flipflop].length != 0 ){
        var flipflop = count % 2; // yeaaaaah maaaattthh!!!!
        var max = 2;
        if( halves[flipflop].length < max ){
          max = halves[flipflop].length;
        }// if the half has less than max cards
        var rand = Math.floor(Math.random() * max);
        for (var i = rand; i > 0; i--) {
          let card = halves[flipflop].pop();
          new_cards.push(card);
        }//for
      }//if
      count++;
      return new_cards;
    }// riffle shuffle
};

var Render = function(){
  return this;
};
Render.prototype = {

};

var Blackjack = function(){
  this.cards = new Cards();
  this.deck = this.cards.new_deck();
  this.deck.map( function(card){
    // array in case of other possible values
    var values = [];
    var ranks = Ranks;

    // i dont like the following, is there a better way?
    var rank = card.name.split("_")[0];
    var rank_index = ranks.findIndex(function(element, index, array){
      return element == rank;
    });
    if( rank_index < 10 ){
        values.push(rank_index+1);
    }else{
        values.push(10);
    }

    // special 1 or 11 rule
    if (rank == "ace") {
      values.push( 11 );
    }// if ace values includes 11
    card.values = values;
    return card;
  });
  this.player = {
    new: function(){
      var player = {
        hands = [];
      };
      return player;
    },
    render: new Render();
  };
  this.dealer = {
    new: function(){
      var dealer = {
        stand: 16,
        hand: [];
      };//used var dealer
      return dealer;
    },
    render: new Render();
  };
  return this;
}
