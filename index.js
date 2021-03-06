import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //


/* 
{
    "Year": 1930,
    "Datetime": "13 Jul 1930 - 15:00",
    "Stage": "Group 1",
    "Stadium": "Pocitos",
    "City": "Montevideo",
    "Home Team Name": "France",
    "Home Team Goals": 4,
    "Away Team Goals": 1,
    "Away Team Name": "Mexico",
    "Win conditions": "",
    "Attendance": 4444,
    "Half-time Home Goals": 3,
    "Half-time Away Goals": 0,
    "Referee": "LOMBARDI Domingo (URU)",
    "Assistant 1": "CRISTOPHE Henry (BEL)",
    "Assistant 2": "REGO Gilberto (BRA)",
    "RoundID": 201,
    "MatchID": 1096,
    "Home Team Initials": "FRA",
    "Away Team Initials": "MEX"
  }

Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const twentyFourteenFinals = fifaData.filter(function(game){
    return game.Stage === 'Final' && game.Year === 2014;
});
console.log(twentyFourteenFinals[0]['Home Team Name']);
console.log(twentyFourteenFinals[0]['Away Team Name']);
console.log(twentyFourteenFinals[0]['Home Team Goals']);
console.log(twentyFourteenFinals[0]['Away Team Goals']);
console.log(twentyFourteenFinals[0]['Win conditions']);





/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data){
    return data.filter(function(item){
        return item.Stage === 'Final'
    })
}
console.log(getFinals(fifaData));







/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback){
    const years = callback.map(function(item){
        return item.Year;
    });
    return years
}
console.log(getYears(getFinals(fifaData)));


// Rip task 4



/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let winners = callback.map(function(item){
        if(item['Home Team Goals'] > item['Away Team Goals']){
            return item['Home Team Name']
        } else {
            return item ['Away Team Name']
        }
    });
    return winners
}
console.log(getWinners(getFinals(fifaData)));





/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbWinners, cbYears) {
    const name = cbWinners.map(function(country, i){
        return `In ${cbYears[i]}, ${country} won the world cup`;
    });
    return name
};
console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));







/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeAverage = data.reduce(function(accumulator, item){
        return accumulator + item['Home Team Goals'];
    },0);
    let awayAverage = data.reduce(function(accumulator, item){
        return accumulator + item['Away Team Goals'];
    },0);
    return {
        'Home Average':(homeAverage / data.length),
        'Away Average': (awayAverage / data.length)
    }
}

console.log(getAverageGoals(fifaData));










/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
