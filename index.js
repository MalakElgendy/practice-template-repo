function movePlayer(direction){
    return new Promise((resolve) => {
        resolve(['B', 'C', 'D'])
    }).then(data => {
        setTimeout(()=>{
            console.log(direction)
        },2000)
    });
}
movePlayer('up')