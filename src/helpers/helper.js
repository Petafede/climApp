import { faSun, faCloud, faCloudRain ,faQuestion } from '@fortawesome/free-solid-svg-icons'

export const getIcon = (estadoDelCielo) => {
    switch(estadoDelCielo){
      case "Despejado": 
        return faSun;
      case "Soleado": 
        return faSun;
      case "Nublado":
        return faCloud;
      case "Parcialmente nublado":
        return faCloud;
      case "Lluvia  moderada a intervalos":
        return faCloudRain;
      case "Lluvia moderada":
        return faCloudRain;
      default:
        return faQuestion;
    }
  }
export function redondearEntero(numero) {
  let parteEntera = Math.floor(numero);
  let parteDecimal = numero - parteEntera;
  if (parteDecimal < 0.5) {
    return parteEntera;
  } else {
    return parteEntera + 1;
  }
}

export function obtenerFondo(condicion) {
  switch (condicion) {
    case "Despejado":
      return {
        imagen: "https://img.freepik.com/foto-gratis/nubes-tormenta-cielo-azul-fondo_1232-1130.jpg?w=740&t=st=1684191289~exp=1684191889~hmac=64a07e7b1b35908fe804de8fbf724586b59c13bdcb558c7e19bf7c518b9d06a9",
      };
    case "Soleado":
      return {
        imagen: "https://img.freepik.com/foto-gratis/3d-render-mesa-madera-mirando-fuera-paisaje-verano-arena-mar-cielo-azul_1048-6286.jpg?w=740&t=st=1684191076~exp=1684191676~hmac=0d375274b7d4b53636a1e99d9b28486a9822fcc8e15cb392c58d83aa143eacbcsunny.jpg",
      };
    case "Nublado":
      return {
        imagen: "https://img.freepik.com/foto-gratis/nubes-tormenta_1122-2748.jpg?w=740&t=st=1684191369~exp=1684191969~hmac=bb288324565542f2a4cb6c4ddbbc23552d9cc38f743e45b67eacbc6aff6ca600",
      };
    case "Parcialmente nublado":
      return {
        imagen: "https://img.freepik.com/foto-gratis/nubes-tormenta_1122-2748.jpg?w=740&t=st=1684191369~exp=1684191969~hmac=bb288324565542f2a4cb6c4ddbbc23552d9cc38f743e45b67eacbc6aff6ca600",
      };
    case "Lluvia moderada a intervalos":
      return {
        imagen: "https://img.freepik.com/foto-gratis/gotas-lluvia-fondo-cerrar_23-2148900862.jpg?w=740&t=st=1684191662~exp=1684192262~hmac=ac411b03a768eace07569b426281b386e6b3c69ebf70b2b139a7c35d004954e9",
      };
    case "Lluvia moderada":
      return {
        imagen: "https://img.freepik.com/foto-gratis/gotas-lluvia-fondo-cerrar_23-2148900862.jpg?w=740&t=st=1684191662~exp=1684192262~hmac=ac411b03a768eace07569b426281b386e6b3c69ebf70b2b139a7c35d004954e9",
      };
    default:
      return {
        imagen: "default.jpg",
      }; // Imagen de fondo por defecto y clase vacía si no se encuentra una coincidencia
  }
}


