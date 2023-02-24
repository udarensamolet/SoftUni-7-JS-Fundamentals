function vacation(count, type, day){
    if (day == "Friday"){
        if (type == "Students") {
            if (count >= 30){
                totalPrice = count * 8.45;
                totalPrice -= (0.15 * totalPrice);
            } else {
                totalPrice = count * 8.45;
            }
        } else if (type == "Business"){
            if (count >= 100){
                totalPrice = (count - 10) * 10.90;
            } else {
                totalPrice = count * 10.90;
            }
        } else if (type == "Regular"){
            if (count >= 10 && count <= 20){
                totalPrice = count * 15;
                totalPrice -= (totalPrice * 0.05);
            } else {
                totalPrice = count * 15;
            }
        }
    } else if (day == "Saturday"){
        if (type == "Students"){
            if (count >= 30){
                totalPrice = count * 9.80;
                totalPrice -= (0.15 * totalPrice);
            } else {
                totalPrice = count * 9.80;
            }
        } else if (type == "Business"){
            if (count >= 100){
                totalPrice = (count - 10) * 15.60;
            } else {
                totalPrice = count * 15.60;
            }
        } else if (type == "Regular"){
            if (count >= 10 && count <= 20){
                totalPrice = count * 20;
                totalPrice -= (totalPrice * 0.05);
            } else {
                totalPrice = count * 20;
            }
        }
    } else if (day == "Sunday"){
        if (type == "Students"){
            if (count >= 30){
                totalPrice = count * 10.46;
                totalPrice -= (0.15 * totalPrice);
            } else {
                totalPrice = count * 10.46;
            }
        } else if (type == "Business"){
            if (count >= 100){
                totalPrice = (count - 10) * 16;
            } else {
                totalPrice = count * 16;
            }
        } else if (type == "Regular"){
            if (count >= 10 && count <= 20){
                totalPrice = count * 22.50;
                totalPrice -= (totalPrice * 0.05);
            } else {
                totalPrice = count * 22.50;
            }
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}