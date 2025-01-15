
export function getLocalizedString(locale, array = []) {  
  if (array.length === 0) {
    return 'Empty string';
  }

  const localizedItem = array.find(item => item._key === locale);

  if (localizedItem) {
    return localizedItem.value;
  }

  return array[0].value;
}