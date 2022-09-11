export default function sortHeroByHealth(heroes) {
  return heroes.sort((a, b) => (a.health > b.health ? -1 : 1));
}
