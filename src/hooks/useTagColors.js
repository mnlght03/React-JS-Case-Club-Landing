export default function useTagColors(color) {
  const colors = ['', ''];

  // switch instead of string template for tailwing purgecss
  switch (color) {
    default:
    case 'BLUE':
      colors[0] = 'bg-blue text-white';
      colors[1] = 'bg-blue/20 text-blue';
      break;
    case 'PURPLE':
      colors[0] = 'bg-purple text-white';
      colors[1] = 'bg-purple/20 text-purple';
      break;
    case 'RED':
      colors[0] = 'bg-red text-white';
      colors[1] = 'bg-red/20 text-red';
      break;
    case 'ORANGE':
      colors[0] = 'bg-orange text-white';
      colors[1] = 'bg-orange/20 text-orange';
      break;
  }

  return colors;
}
