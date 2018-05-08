
/*
 * Deixa a primeira letra das palavras maiúsculas
 * Exemplo: joão => João
 */

const capitalizeFirstLetter = string => {
  return string[0].toUpperCase() + string.slice(1)
}

export default capitalizeFirstLetter