function starEnigma(input) {
  let numberMessages = Number(input.shift());

  let attackedPlanets = [];
  let destroyedPlanets = [];

  let patternStar = /[STARstar]/g;
  let patternDecryptedMessage =
    /[^@,\-!:>]*?\@(?<planetName>[A-Z][a-z]+)[^@,\-!:>]*?\:[^@,\-!:>]*?(?<planetPopulation>[0-9]+)[^@,\!:>]*?\!(?<attackType>[AD])\![^@,\!:>]*?\-\>(?<soldierCount>[0-9]+)[^@,\-!:>]/;

  for (let i = 0; i < numberMessages; i++) {
    let encryptedMessage = input[i];
    let decodedMessage = "";

    let resultDecryptedMessage = encryptedMessage.match(
      patternDecryptedMessage
    );
    if (resultDecryptedMessage) {
      decryptMessage(resultDecryptedMessage);
    } else {
      if (encryptedMessage != undefined) {
        let resultPatternStar = encryptedMessage.match(patternStar);
        if (resultPatternStar) {
          let countLetters = resultPatternStar.length;
          for (let j = 0; j < encryptedMessage.length; j++) {
            decodedMessage += String.fromCharCode(
              encryptedMessage.charCodeAt(j) - countLetters
            );
          }
        } else {
          decodedMessage = encryptedMessage;
        }
      }
      resultDecryptedMessage = decodedMessage.match(patternDecryptedMessage);
      if (resultDecryptedMessage) {
        decryptMessage(resultDecryptedMessage);
      }
    }
  }

  let attackedPlanetsSortedByName = attackedPlanets.sort((a, b) =>
    a.localeCompare(b)
  );
  console.log(`Attacked planets: ${attackedPlanetsSortedByName.length}`);
  for (let planet of attackedPlanetsSortedByName) {
    console.log(`-> ${planet}`);
  }
  let destroyedPlanetsSortedByName = destroyedPlanets.sort((a, b) =>
    a.localeCompare(b)
  );
  console.log(`Destroyed planets: ${destroyedPlanetsSortedByName.length}`);
  for (let planet of destroyedPlanetsSortedByName) {
    console.log(`-> ${planet}`);
  }

  function decryptMessage(message) {
    let planetName = message.groups.planetName;
    let attackType = message.groups.attackType;

    if (attackType == "A") {
      attackedPlanets.push(planetName);
    } else if (attackType == "D") {
      destroyedPlanets.push(planetName);
    }
  }
}

starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "@Cantonica:3000!D!->4000NM",
]);
