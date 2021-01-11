const colors=['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'lightpurple', 'salmon'];
const cholor2=['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'lightpurple', 'salmon'];
const random=['red','blue','plum', 'salmon', 'blue', 'yellow','purple','green', 'green','orange','red','yellow', 'orange', 'purple', 'plum', 'salmon'];

let turn = 0;
const red = [];
const blue = [];
const wrapper = document.querySelector('#wrapper');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const ten = document.querySelector('#ten');
const eleven = document.querySelector('#eleven');
const twelve = document.querySelector('#twelve');
const thirteen = document.querySelector('#thirteen');
const fourteen = document.querySelector('#fourteen');
const fifteen = document.querySelector('#fifteen');
const sixteen = document.querySelector('#sixteen');
const clearBoard = document.querySelector('clearBoard');


clearBoard.addEventListener('click', startGame)
    
function startGame() {
    pick1.length = 0;
    pick2.length = 0;
    console.log('new game');
}


// document.querySelector('#reset').addEventListener('click', startGame);
  // function startGame() {
    // pick1.length = 0;
    // pick2.length = 0;
// };


//setTimeout

function ClearArrays() {
    
    pick1.length = 0;
    pick2.length = 0;
};

one.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
          one.classList.add('red');
          pick1.push['red']
          console.log(turn);
    } 
      else if (pick1.length == pick2.length) {
      one.classList.add('red');
      pick2.push['red'];
      if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        return;
    } else {
        pick1.pop;
        pick2.pop;
        //change square background back to white.
    }
  }
  });
  two.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        two.classList.add('blue');
        pick1.push['blue']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    two.classList.add('blue');
    pick2.push['blue'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });
  three.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        three.classList.add('plum');
        pick1.push['plum']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    three.classList.add('plum');
    pick2.push['plum'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });
  four.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        four.classList.add('salmon');
        pick1.push['salmon']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    four.classList.add('salmon');
    pick2.push['salmon'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });
  five.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        five.classList.add('blue');
        pick1.push['blue']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    five.classList.add('blue');
    pick2.push['blue'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });
  six.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        six.classList.add('yellow');
        pick1.push['yellow']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    six.classList.add('yellow');
    pick2.push['yellow'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });
  seven.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        seven.classList.add('purple');
        pick1.push['purple']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    seven.classList.add('purple');
    pick2.push['purple'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });
  eight.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        eight.classList.add('green');
        pick1.push['green']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    eight.classList.add('green');
    pick2.push['green'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });
  nine.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        nine.classList.add('green');
        pick1.push['green']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    nine.classList.add('green');
    pick2.push['green'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });
  ten.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        ten.classList.add('orange');
        pick1.push['orange']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    ten.classList.add('orange');
    pick2.push['orange'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });
  eleven.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        eleven.classList.add('red');
        pick1.push['red']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    eleven.classList.add('red');
    pick2.push['red'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });
  twelve.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        twelve.classList.add('yellow');
        pick1.push['yellow']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    twelve.classList.add('yellow');
    pick2.push['yellow'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });
  thirteen.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        thirteen.classList.add('orange');
        pick1.push['orange']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    thirteen.classList.add('orange');
    pick2.push['orange'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });
  fourteen.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        fourteen.classList.add('purple');
        pick1.push['purple']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    fourteen.classList.add('purple');
    pick2.push['purple'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });
  fifteen.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        fifteen.classList.add('plum');
        pick1.push['plum']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    fifteen.classList.add('plum');
    pick2.push['plum'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });
  sixteen.addEventListener("click", function() {
    if (pick1.length !== pick2.length) {
        sixteen.classList.add('salmon');
        pick1.push['salmon']
        console.log(turn);
    } 
     else if (pick1.length == pick2.length) {
    sixteen.classList.add('salmon');
    pick2.push['salmon'];
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
      return;
  } else {
      pick1.pop;
      pick2.pop;
      //change square background back to white.
  }
  }
  });





























































































































































































































































































