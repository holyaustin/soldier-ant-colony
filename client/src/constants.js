const CONTRACT_ADDRESS = "0x84f8371Ce8AC1Bb8a2DA18C951b68DEadF68861B";
// const CONTRACT_ADDRESS = "0xCB4BBD22F29EC7D45ecaA7Dc8FC52d5622aD039E";

/*
 * Add this method and make sure to export it on the bottom!
 */
const transformCharacterData = (characterData) => ({
  name: characterData.name,
  imageURI: characterData.imageURI,
  hp: characterData.hp.toNumber(),
  maxHp: characterData.maxHp.toNumber(),
  attackDamage: characterData.attackDamage.toNumber(),
});

export { CONTRACT_ADDRESS, transformCharacterData };
