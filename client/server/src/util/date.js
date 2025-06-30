export function getWIBDate() {
  const now = new Date();
  now.setHours(now.getHours() + 7);
  return now;
}