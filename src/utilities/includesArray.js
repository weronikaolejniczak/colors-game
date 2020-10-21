export const includesArray = (haystack, needle) => {
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
}
