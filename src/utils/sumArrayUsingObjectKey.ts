/**
 * This function takes an array of objects and a key as parameter to sum
 * all the values using the object key.
 * @param array array with objects to make the sum
 * @param key object key that you want to sum
 * @returns the summed values (number)
 */
export const sumObjectKeyInArray = (array: any[], key: string): number => {
  return array.reduce((value, item) => {
    return value + item[key];
  }, 0);
};
