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
