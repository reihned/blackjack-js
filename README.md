# blackjack-js
### JavaScript Client Side Only Blackjack

Vector Card Art Courtesy: code.google.com/p/vector-playing-cards

-----

## The Rundown

> The game of blackjack is an old game, played all over the world. Inherently a two player game, blackjack-js is a self exercise in client side JavaScript by building the game of blackjack to work in a browser. In this case the user is the player, and the dealer is an automated system.


-----

### Layout

| Header
|-
| Dealer's Area
| Player's Area
| Controls

not to scale

-----

### Basic Blackjack Info

##### Cards:

> - 1-13, 1 being Ace
> - A can be 1 or 11
> - 11 Jack value 10
> - 12 Queen value 10
> - 13 King value 10

##### Actions:
> - Deal
 - Starts one round of blackjack
 - Deals the cards to the player and dealer
   - only one card revealed for dealer
> - Draw
 - Player draws a card
   - check for bust
> - Split
  - only available if player has two of the same value card
  - allows player to play two hands instead by splitting one hand into two
> - Stand
  - stops the player's turn and allows the dealer to automatically process their hand
> - Bust
 - If a player's or dealer's hand value goes over 21, they lose (bust)
 - Ace value should automatically go down to 1 if 11 will bust
