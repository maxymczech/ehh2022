export default function getName(nameObject) {
  const parts = [];

  if (nameObject?.prefix?.length) {
    parts.push(nameObject.prefix[0]);
  }
  // if (nameObject?.given?.length) {
  //   parts.push(nameObject.given[0]);
  // }
  if (nameObject?.family) {
    parts.push(nameObject.family);
  }

  return parts.join(' ');
}
