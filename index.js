
function movePlayer(direction){
    return new Promise((resolve) => {
        resolve()
    }).then(data => {
        setTimeout(()=>{
            console.log(direction)
        },2000)
    });
}
movePlayer('up')

function calculatescore (){
   grabscore1().then(score1 => {
       return grabscore2().then(score2 => {
           console.log(`Final Score: ${score1 + score2}`);
       });
   });
}

function grabgetScore1() {
    return new Promise(resolve => setTimeout(() => resolve(50), 100));
}
// no time to finish sigh