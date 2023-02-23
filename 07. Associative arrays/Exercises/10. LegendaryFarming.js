function legendaryFarming(input) {
  let materials = new Map();
  materials.set("shards", 0);
  materials.set("fragments", 0);
  materials.set("motes", 0);

  let junks = new Map();

  let obtainedMaterial = "";
  let isObtained = false;

  let tokens = input.split(" ");

  for (let i = 1; i < tokens.length; i += 2) {
    let currentMaterial = tokens[i].toLowerCase();
    if (currentMaterial == "shards" || currentMaterial == "shard") {
      let currentQuantity = Number(materials.get("shards"));
      let newQuantity = currentQuantity + Number(tokens[i - 1]);
      materials.delete("shards");
      materials.set("shards", newQuantity);
    } else if (
      currentMaterial == "fragments" ||
      currentMaterial == "fragment"
    ) {
      let currentQuantity = Number(materials.get("fragments"));
      let newQuantity = currentQuantity + Number(tokens[i - 1]);
      materials.delete("fragments");
      materials.set("fragments", newQuantity);
    } else if (
      currentMaterial == "motes" ||
      currentMaterial == "mote" ||
      currentMaterial == "mot"
    ) {
      let currentQuantity = Number(materials.get("motes"));
      let newQuantity = currentQuantity + Number(tokens[i - 1]);
      materials.delete("motes");
      materials.set("motes", newQuantity);
    } else {
      if (!junks.has(currentMaterial)) {
        junks.set(currentMaterial, Number(tokens[i - 1]));
      } else {
        let currentQuantity = Number(junks.get(currentMaterial));
        let newQuantity = currentQuantity + Number(tokens[i - 1]);
        junks.delete(currentMaterial.toLowerCase());
        junks.set(currentMaterial.toLowerCase(), newQuantity);
      }
    }

    for (let material of materials) {
      if (Number(material[1]) >= 250) {
        if (material[0] == "shards") {
          obtainedMaterial = "shards";
          isObtained = true;
          console.log("Shadowmourne obtained!");
          break;
        } else if (material[0] == "fragments") {
          obtainedMaterial = "fragments";
          isObtained = true;
          console.log("Valanyr obtained!");
          break;
        } else if (material[0] == "motes") {
          obtainedMaterial = "motes";
          isObtained = true;
          console.log("Dragonwrath obtained!");
          break;
        }
      }
    }

    if (isObtained) {
      break;
    }
  }

  let currentQuantity = Number(materials.get(obtainedMaterial));
  let newQuantity = currentQuantity - 250;
  materials.delete(obtainedMaterial);
  materials.set(obtainedMaterial, newQuantity);

  let sortedMaterials = Array.from(materials.entries()).sort((a, b) => {
    if (b[1] - a[1] != 0) {
      return b[1] - a[1];
    } else {
      return a[0].localeCompare(b[0]);
    }
  });
  for (let material of sortedMaterials) {
    console.log(`${material[0]}: ${material[1]}`);
  }

  let sortedJunks = Array.from(junks.entries()).sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });
  for (let junk of sortedJunks) {
    console.log(`${junk[0]}: ${junk[1]}`);
  }
}