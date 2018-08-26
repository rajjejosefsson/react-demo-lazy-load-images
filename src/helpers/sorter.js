// sort array of objects relative to a key,
// in either an ascending or descending order
export const sorter = (data, key, isAsccending = true) => {
  return data.sort((a, b) => {
    if (isAsccending) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
    } else {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
    }
    return 0;
  });
};
