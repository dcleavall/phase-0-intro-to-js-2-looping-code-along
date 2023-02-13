// Code your solutions in this file
let names = ['Guadalupe', 'Ollie', 'Aki'];
function writeCards(name, eventName) {
    const thankYouArray = []
    for (let i = 0; i < name.length; i++) {
        thankYouArray.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouArray;
}
function countDown(int){
    while (int >= 0 ) {
      console.log(int);
      int--;
    }
  }
  countDown(10);


