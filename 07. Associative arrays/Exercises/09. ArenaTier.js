function arenaTier(input) {
  let gladiators = new Map();
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "Ave Cesar") {
      break;
    }

    let tokens = input[i].split(" ");
    if (tokens[1] == "->") {
      let name = tokens[0];
      let skill = tokens[2];
      let skillValue = Number(tokens[4]);

      if (!gladiators.has(name)) {
        gladiators.set(name, new Map());
        gladiators.get(name).set(skill, skillValue);
      } else {
        if (!gladiators.get(name).has(skill)) {
          gladiators.get(name).set(skill, skillValue);
        } else {
          let oldSkillValue = gladiators.get(name).has(skill);
          if (oldSkillValue < skill) {
            gladiators.get(name).set(skill, skillValue);
          }
        }
      }
    } else if (tokens[1] == "vs") {
      let gladiator1 = tokens[0];
      let gladiator2 = tokens[2];

      if (gladiators.has(gladiator1) && gladiators.has(gladiator2)) {
        let loser = "";
        for (let skills1 of gladiators.get(gladiator1)) {
          for (let skills2 of gladiators.get(gladiator2)) {
            if (skills1[0] == skills2[0]) {
              if (skills1[1] > skills2[1]) {
                loser = gladiator2;
              } else if (skills1[1] < skills2[1]) {
                loser = gladiator1;
                break;
              }
            }
          }
        }
        gladiators.delete(loser);
      }
    }
  }

  let gladiatorsTotalSkills = new Map();
  for (let gladiator of gladiators) {
    let totalSkillValue = 0;
    for (let skill of gladiator[1]) {
      totalSkillValue += skill[1];
    }
    gladiatorsTotalSkills.set(gladiator[0], totalSkillValue);
  }

  let sortedGladiators = Array.from(gladiatorsTotalSkills.entries()).sort(
    (a, b) => {
      if (b[1] - a[1] != 0) {
        return b[1] - a[1];
      } else {
        return a[0].localeCompare(b[0]);
      }
    }
  );

  for (let gladiator of sortedGladiators) {
    console.log(`${gladiator[0]}: ${gladiator[1]} skill`);
    for (let gladiatorBySkills of gladiators) {
      if (gladiator[0] == gladiatorBySkills[0]) {
        let sortedSkills = Array.from(gladiatorBySkills[1].entries()).sort(
          (a, b) => {
            if (b[1] - a[1] != 0) {
              return b[1] - a[1];
            } else {
              return a[0].localeCompare(b[0]);
            }
          }
        );
        for (let skill of sortedSkills){
            console.log(`- ${skill[0]} <!> ${skill[1]}`);
        }
      }
    }
  }
}