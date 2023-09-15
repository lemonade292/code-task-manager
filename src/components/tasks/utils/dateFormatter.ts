export const dateFormatter = (str: string): string => {
  if (str.length > 10) {
    return str;
  }

  // DD/MM/YYYY
  if (str.length === 2 || str.length === 5) {
    str += "/";
  }

  return str;
};
