# Calculator Project

The logic for the calculator needs to be implemented on the server. The client side will take in the values (in 2 input text fields) and the type of mathematical operation (selected using a button on the DOM). Each of the numerical values and type of mathematical operation will be bundled up in an object and then sent to the server via a POST. So when the object is sent, it should look something like this:

```
{
   x: 3,
   y: 4,
   type: "Add"
}
```

Once the server receives it, build out logic to compute the numbers in 1 of 4 different ways. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, it should be sent back down to the client side app where it should be displayed on the DOM.

NOTE: You can send an object back as a response to a POST request or follow up the POST with a GET request to retrieve the data. Using a GET request to follow up is more common at Prime and will put you in a better position working on the History feature below.

Finally, build a 'clear' button that resets the whole experience.

History:
Keep a historical record of all math operations on the server. Display a list of all previous calculations on the page when it loads. Update the list when a new calculation is made.

```
History:
3 * 5 = 15
4 - 2 = 2
4 * 3 = 12
3 + 6 = 9
```
## What Are We Building It With?

```          
,________,         .----------,  _Request_    .---------,         
|________|       ,'_________,'|   -> | ->   ,'________,'|        
| HTML 5 |      | jQuery    | |      |      | _______ | |        
| CSS    |      |           | |      |      | Node.js | |        
| Boot   | <--  |           | |      |      | Express | |              
|  strap |      |           | ;   <- | <-   | _______ | ;        
|________|      |___________|'  _Response_  |_________|'         
  Client        Client Logic                   Server
        *Front End*                          *Back End*              
```

## Project Scoping and Management
- [x] Created Git Repo, Setup File Structure, Install node modules Express, Body-Parser
- [x] Create two inputs for values to be entered
- [x] Create buttons for Addition, Subtraction, Multiplication, Division that will show the the results via equals output
- [x] Create the event listeners to capture input values
- [x] Have the values bundled into an object
- [x] Create POST app.post on server
- [x] Create module for calculations
- [x] Calculation:
    - [x] Make it so values of the object are set as variables in order to calculate the return value
    - [x] Make the values of Addition, Subtraction, Multiplication, Division set as an if statement to condition out the calculations
- [x] Create class that links to creation of the object
- [x] Create GET from the server to send the result to the the client side
- [x] Create GET from the server to send the response & history as a string to append the DOM
- [x] Create clear button to reset/clear:
    - [x] History
    - [x] Inputs
- [x] Make it so the history list doesn't append with each calculation
- [x] Make it so the history list so it doesn't load the last items in the array

## Extra Options
- [x] Style website
- [x] Style buttons
    - [x] Used icomoon font icons to style buttons

## Hard Mode
- [x] Convert the two values inputs to numerical buttons
    - [x] Allow the user to click on a numerical button and then a mathematical operation, then the numerical button again
- [x] Create an equal button that sends all of the information to the server

## Pro Mode
- [x] Create a button that allows the user to clear history, shouldn't be a GET or POST, but a delete request
- [x] Allow a user to click on an entry in the history list to re-run that calculation that will display the answer on the calculator interface like a normal calculation
