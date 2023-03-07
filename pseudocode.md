## questions
-- How to make it where only bottom of column is only allowed to be clicked until(how to make gravity work in a computer)

## html/css

### conditional rendering
 - tokens as theyre clicked and fall from the heavens

### atoms
 - board

### organisms
- board?
tokens?

## variables
state
win cons?

### state
 - playersTurn
 - turnNumber(?)
 - boardState, think grid with objects in every spot
 - winCons check through grid for 4 in a row,horizontal,diagonal
 - player1 color
 - player2 color
 - (instead or 2 player symbols just use playersTurn to keep track of whos active turn)
 - Winconditons = array of arrays that match wincons??
 - might work for connect 4??
 - picture array like BELOW to help visualize   
 `[0, 0, 0,  
   0, 0, 0,  
   0, 0, 0]  

### functions
- init  
  - display header and blank board
  - let player choose yellow or red
  - start game with player first and their color as active
- checkWin
  - check all array possibilites for 4 in a row (horizontal,vertical, diagonal)
  - if 4 in row found, end game display restart button
- placeMarker(x or o)
  - marker will always go to bottom position in column, hide higher up tiles until bottom most is clicked?
  - turns clicked tile into color depending on active player
  - checkWin
  - swaps activePlayer

## procedure
- INIT
  - init() creates board and gives player option of color
  - sets state array to match number of of tiles (7 x 6, total 42 tiles)
  - set state activePLayer to whatever player chose first
  - set turnNumber to 1
- START
- wait until tiled is clicked
- (only bottom most unclicked tile can be clicked)
- once tile is clicked call placemarker function
  - PlaceMarker() updates tile to not be clickable anymore and SHOULD display correctMarker
  - swap activePLayer to otherMarker
  - turnNumber++
- after placeMarker() runs call checkWin()
  - checkWin() checks current state array against all wincon arrays
  - continue playing if no matches found
  - if match found display whoever placed last marker as winner
  - and show restart button
- keep playing until checkWin comes back true or until all tiles taken(make checkwin() check all tiles status to see if any tile can be clicked?)
- END

## objectives
 - The game should let the players know who's turn it is.
 - Game tiles should only be clickable once, and if the game is over they should not be clickable at all.
 - The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.
 - There should be a Restart Game button that does not refresh the page (set state).
 - Use the colors red and yellow
 - On each player’s turn, that player places one of their colors on an unoccupied bottom most space by clicking.
 - The game continues until one player places 4 symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.
 - Only have a single <div id="app"></div> in your index.HTML (try to code golf the HTML file)

## user journey
- start by choosing yellow or red
- always have whoever chose first go second
- wait till first marker is put down
- then player2/OtherMarker can go 
- repeat until EITHER no tiles remaining or til 4 in a row of X or O found
- display winning marker ex:"{color} wins!" 
- OR IF all tiles are clicked AND no 4 in a row found then display tie!
- display restart button

## MoSCoW

### MUST
- allow players to place marker( done)  
- check for win condition
- make tiles clickable (done)  
- not allow tiles to be click twice (done)  
- reset button that doesnt refresh page
### SHOULD
- let players know whos turn it is
- not hardcode all win cons, prefer loop
### COULD
- stretch goals
- tiles darken or bounce on hover?
- scorebaord? might mess with restart being an init call
### WONT
- have ai