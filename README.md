# _Mr Rogers Neighborhood_

#### _Form that takes in a number and does some really wild things, 6/12/20_

#### By _**Joseph Pearce**_

## Description

_Form that takes in a number and does some really wild things. See the specs below for some mind numbing examples of the expected output._


## Specs

Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number. Here are some examples with expected behavior along with the "exceptions". The exceptions are:

- The number 13 should be replaced with "Won't you be my neighbor?"
- The number 21 should be replaced with "Boop".
- The number 32 should be replaced with "Won't you be my neighbor?"


| Behavior                       | input | output                      |
| --------------------------     | ----- | --------------------------- |
| User inputs the number "4"     | 4     | "0, Beep!, Boop!, Won't you be my neighbor?, 4"  |
| User inputs the number "1"     | 1     | "0, Beep!"    |
| User inputs the number "2"     | 2     | "0, Beep!, Boop!"   |
| User inputs the number "3"     | 3     | "0, Beep!, Boop!, Won't you be my neighbor?" |
| User inputs the number "5"     | 5     | "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5 |
| the number "13"                | 13    | "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?" |
| the number "21"                | 21    | "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!"      |
| the number "32"                | 32    | "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, Won't you be my neighbor?, Boop!, Boop!, Boop!, Boop!, Boop!, Boop!, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?" |


## Setup/Installation Requirements

To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer.

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`$ git clone https://github.com/pearcy/mr-rogers2.git`
2. Navigate into the `mr-rogers2` directory in Visual Studio Code or preferred text editor
`$ code .`
3. Open index.html in Chrome or preferred browser:
`$ open index.html`



## Support

_The software is provided as is. You drive it off the lot it's yours!_

## Known Bugs

_No Known Bugs_

## Technologies Used

- html
- css
- JavaScript
- jQuery

### License

Copyright (c) 2020 **_Joseph Pearce_**
