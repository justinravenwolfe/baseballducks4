const inquirer =require('inquirer'); 
const questions = [
    // Question 1
    { 
      type: 'list',
      name: 'position',
      message: 'What position would you want to play?',
      choices: [ 'A) Shortstop', 'B) Outfielder', 'C) Outfielder', 'D) Catcher']
    },
    // Question 2
    { 
      type: 'list',
      name: 'minor',
      message: 'Which minor league teams do you like the most?',
      choices: [ "A) Columbus Clippers, Albany-Colonie Yankees, Greensboro Hornets", "B) Columbus Clippers, Nashville Sounds, Indianapolis Indians", "C) Norwich Navigators, Columbus Clippers, Tampa Yankees", "D) Albany-Colonie Yankees, Greensboro Hornets, Columbus Clippers"]
    },
    // Question 3
    { 
      type: 'list',
      name: 'battingStyle',
      message: 'What is your preferred batting style?',
      choices: ['A) Right-handed', 'B) Left-handed', 'D) Switch hitter']
    },
    // Question 4
    { 
      type: 'list',
      name: 'team',
      message: 'How many teams would you want to play for besides the Yankees?',
      choices: ['A) 0', 'B) 1', 'C) 5', 'D) 0']
    }
    ];
    
/*
1. Derek Jeter<- A
2. Paul O'Neill <- B
3. Ricky Ledee <-C
4. Jorge Posada- D

### Question 1: Position
**Which position did each of these players primarily play?**

a) Shortstop  
b) Outfielder  
c) Outfielder  
d) Catcher



### Question 2: Minor League Teams
**Which minor league team did each of these players play for?**

a) Columbus Clippers, Albany-Colonie Yankees, Greensboro Hornets  
b) Columbus Clippers, Nashville Sounds, Indianapolis Indians  
c) Norwich Navigators, Columbus Clippers, Tampa Yankees  
d) Albany-Colonie Yankees, Greensboro Hornets, Columbus Clippers

### Question 3: Batting Style
**What was the batting style of each of these players?**

a) Right-handed  
b) Left-handed  
c) Left-handed  
d) Switch hitter


### Question 4: How many other Major League Teams did each of these players play for besides the New York Yankees?**

a) 0  
b) 1  
c) 5  
d) 0

*/

inquirer.prompt(questions).then(answers => {
 console.log(answers);
 console.log("success"); 
});
