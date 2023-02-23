function thePyramidOfKingDjoser(base, increment) {
  let stoneCount = 0;
  let marbleCount = 0;
  let lapisLazuliCount = 0;
  let goldCount = 0;

  let lapisLayerCount = 0;

  let outerLayer = base;
  let pyramidHeight = 0;

  while (true) {
    pyramidHeight += increment;
    if (outerLayer == 1) {
        goldCount = outerLayer * increment;
        break;
    } else if (outerLayer == 2){
        goldCount = outerLayer * increment * 2;
        break;
    }

    stoneCount += ((outerLayer - 2) * (outerLayer - 2)) * increment;
    lapisLayerCount++;
    if (lapisLayerCount % 5 == 0) {
      lapisLazuliCount += (((outerLayer - 2) * 4) + 4) * increment;
    } else {
      marbleCount += (((outerLayer - 2) * 4) + 4) * increment;
    }
   
    outerLayer -= 2;
  }
  console.log(`Stone required: ${Math.ceil(stoneCount)}`);
  console.log(`Marble required: ${Math.ceil(marbleCount)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliCount)}`);
  console.log(`Gold required: ${Math.ceil(goldCount)}`);
  console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}