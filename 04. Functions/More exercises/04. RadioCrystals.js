function radioCrystals(input) {
  let desiredFinalThickness = Number(input[0]);
  for (let i = 1; i < input.length; i++) {
    let thicknessCurrentChunk = input[i];
    console.log(`Processing chunk ${thicknessCurrentChunk} microns`);

    let counterCut = 0;
    let counterLap = 0;
    let counterGrind = 0;
    let counterEtch = 0;

    while (cut(thicknessCurrentChunk) >= desiredFinalThickness) {
      thicknessCurrentChunk = cut(thicknessCurrentChunk);
      counterCut++;
    }
    if (counterCut > 0){
        console.log(`Cut x${counterCut}`);
        thicknessCurrentChunk = transportAndWash(thicknessCurrentChunk);
    }

    while (lap(thicknessCurrentChunk) >= desiredFinalThickness) {
      thicknessCurrentChunk = lap(thicknessCurrentChunk);
      counterLap++;
    }
    if (counterLap > 0){
        console.log(`Lap x${counterLap}`);
        thicknessCurrentChunk = transportAndWash(thicknessCurrentChunk);
    }
    
    while (grind(thicknessCurrentChunk) >= desiredFinalThickness) {
      thicknessCurrentChunk = grind(thicknessCurrentChunk);
      counterGrind++;
    }
    if(counterGrind > 0){
        console.log(`Grind x${counterGrind}`);
        thicknessCurrentChunk = transportAndWash(thicknessCurrentChunk);
    }
   
    while (etch(thicknessCurrentChunk) >= desiredFinalThickness - 1) {
      thicknessCurrentChunk = etch(thicknessCurrentChunk);
      counterEtch++;
    }
    if (counterEtch > 0){
        console.log(`Etch x${counterEtch}`);
        thicknessCurrentChunk = transportAndWash(thicknessCurrentChunk);
    }
    
    if (thicknessCurrentChunk == desiredFinalThickness - 1){
        thicknessCurrentChunk = xray(thicknessCurrentChunk);
        console.log(`X-ray x1`);
    }

    console.log(`Finished crystal ${thicknessCurrentChunk} microns`);
  }

  function cut(thickness) {
    return (thickness *= 0.25);
  }

  function lap(thickness) {
    return (thickness -= thickness * 0.2);
  }

  function grind(thickness) {
    return (thickness -= 20);
  }

  function etch(thickness) {
    return (thickness -= 2);
  }

  function xray(thickness) {
    return (thickness += 1);
  }

  function transportAndWash(thickness) {
    console.log(`Transporting and washing`);
    return Math.floor(thickness);
  }
}