function distanceBetweenPoints(x1, y1, x2, y2){
    let distance = Math.sqrt(Math.pow((Number(x2) - Number(x1)), 2) + Math.pow((Number(y2) - Number(y1)), 2));
    console.log(distance);
}