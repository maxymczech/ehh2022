export default function getTime(date) {
  const h = date.getHours();
  const m = date.getMinutes();

  return `${h<10 ? '0' : ''}${h}:${m<10 ? '0' : ''}${m}`;
}
