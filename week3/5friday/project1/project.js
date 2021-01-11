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


function startGame() {
  pick1.length = 0;
  pick2.length = 0;
  };


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
