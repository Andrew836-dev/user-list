export function paginate(fullArray, chosenPage, entriesPerPage) {
  const startIndex = (chosenPage * entriesPerPage) - entriesPerPage;
  return fullArray.filter((entry, index) => {
    return (index >= startIndex && index < startIndex + entriesPerPage);
  });
}

export function prettifyHeader(key) {
  if (key === "id") return "ID";
  else {
    let output = [];
    key.split("").forEach((letter, index) => {
      if (index === 0) {
        output.push(letter.toUpperCase());
      } else if (letter === letter.toLowerCase()) {
        output.push(letter);
      } else {
        output.push(" ");
        output.push(letter);
      }
    })
    return output.join("");
  }
}

export async function sortArray(array, field) {
  return array.sort((a, b) => {
    if (typeof a[field] === "string") {
      let length = (a[field].length > b[field.length] ? a[field].length : b[field].length)
      for (let i = 0; i < length; i++) {
        const compareChar = a[field].toLowerCase().charCodeAt(i) - b[field].toLowerCase().charCodeAt(i);
        if (compareChar !== 0) return compareChar;
      }
      return 0;
    } else if (typeof a[field] === "number") {
      return a[field] - b[field];
    } else {
      return 0;
    }
  });
}