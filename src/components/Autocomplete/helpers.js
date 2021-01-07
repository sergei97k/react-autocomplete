export const filterByExistingWord = (array, word) => {
  const searchWord = word.trim().toLowerCase();

  if (!searchWord) return array;

  return array.filter((element) => element.toLowerCase().includes(searchWord));
};
