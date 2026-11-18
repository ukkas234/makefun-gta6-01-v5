/** Applies repeatable showcase states before the main loop's two-paint readiness signal. */
export function stageShot(name, game) {
  game.hideTitle();
  if (name === 'start') game.title();
  if (name === 'drive') game.drive();
  if (name === 'chase') game.chase();
  if (name === 'night') game.night();
}
