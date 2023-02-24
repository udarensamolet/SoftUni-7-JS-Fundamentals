function bombNumbers(list, conditions){
    let specialNumber = conditions[0];
    let power = conditions[1];
    let sum = 0;

    while (list.includes(specialNumber)){
        for (let i = 0; i < list.length; i++){
            if (list[i] == specialNumber){
                if (i - power >= 0 && i + power < list.length){
                    list.splice(i - power, (power * 2) + 1);
                } else if (i - power < 0 && i + power >= list.length){
                    list.splice(0, list.length);
                } else if (i - power < 0 && i + power < list.length){
                    list.splice(0, power + i + 1);
                } else if (i - power >= 0 && i + power >= list.length){
                    list.splice(i - power, list.length - (i - power));
                }
            }
        }
    }

    for (let i = 0; i < list.length; i++){
        sum += list[i];
    }

    console.log(sum);
}