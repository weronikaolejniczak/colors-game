/* const includesArray = (haystack, needle) => {
    for (const index in haystack) {
      if (haystack[index].length === needle.length) {
        for (const value in haystack[index]) {
            if (haystack[index][value] !== needle[value]) {
                return false;
            }
        }
        return true;
      }
    }
    return false;
} */

const includesArray = (haystack, needle) => {
  let i, j, current;
  for (i = 0; i < haystack.length; ++i) {
    if (haystack[i].length === needle.length) {
      current = haystack[i];
      for (j = 0; j < needle.length && needle[j] === current[j]; ++j);
      if (j === needle.length) {
        return true;
      }
    }
  }
  return false;
}

export default includesArray;
