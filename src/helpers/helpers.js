import { faSun, faCloud, faQuestion, faCloudSun, faCloudBolt } from '@fortawesome/free-solid-svg-icons';

export const getIcon = (icon) => {
  switch (icon) {
    case 'Despejado':
      return faCloud;
    case 'Soleado':
      return faSun;
    case 'Lluvia  moderada a intervalos':
      return faCloudSun;

    default:
      return faQuestion;
  }
};
