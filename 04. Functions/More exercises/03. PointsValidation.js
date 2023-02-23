function pointsValidation(input){
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    checkDistanceValidity(x1, y1, 0, 0, calculateDistanceBetweebPointAndStart(x1, y1));
    checkDistanceValidity(x2, y2, 0, 0, calculateDistanceBetweebPointAndStart(x2, y2));
    checkDistanceValidity(x1, y1, x2, y2, calculateDistanceBetweenTwoPoints(x1, y1, x2, y2));

    function calculateDistanceBetweenTwoPoints(x1, y1, x2, y2){
        return distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }

    function calculateDistanceBetweebPointAndStart(pointX, pointY){
        return distance = Math.sqrt(Math.pow((0 - pointX), 2) + Math.pow((0 - pointY), 2));
    }

    function checkDistanceValidity(x1, y1, x2, y2, distance){
        if (Number.isInteger(distance)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}