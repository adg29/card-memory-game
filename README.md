# Card Memory Game Prototype


Prototype of a simple memory game. A grid of cards will appear on the screen. The user can click a card to "flip" it over and display an image. When 2 cards of the same image are flipped over, a match is made. To win the game, find all the matching cards.

## Prototype Specification

The prototype will have 2 views. A lobby view and a gameplay view.

### Lobby View
A header in the lobby view will display the text string "Memory Game".

The lobby view will have 4 options for the size of the game. These options will be laid out as vertical buttons with a string that describes the size of the grid in the game.

Options are:
3x4, 5x2, 4x4, and 4x5

When one of the options is selected, the gameplay view opens and the game begins.

### Gameplay View

The gameplay view consists of card images laid out in a grid that matches the size of the selected grid from the lobby view.

When a card is clicked, an image appears. The image appears until another card is clicked. If the second card matches the image of the first card, a match is made and both cards continue to show their matched image. If the images do not match, the incorrect match continues to appears onscreen for 1 second, and then the images are hidden and the card back appears again.

Cards should not be actionable when their image is showing.
The game continues until all cards are matched. If the user wants to exit the game, a back (previous view) button will be available in the upper left corner of the screen to exit back to the lobby. Once all cards are matched, the user can also exit the game by pressing the back button. 


### References
CSS Flexbox Grid 
- https://stackoverflow.com/questions/29307971/css-grid-of-squares-with-flexbox
- https://codepen.io/adg29/pen/bXMpqY