export default function getAge(birthDate) {
  const [year] = (birthDate || '2022').split('-').map(Number);
  const currentYear = (new Date()).getFullYear();
  return currentYear - year;
}
