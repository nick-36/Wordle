import words from "./words";

export function checkIsLetter(key) {
  return key.match(/^[a-zA-Z]{1}$/) != null;
}

export function checkIsWord(word) {
  if (words.includes(word)) {
    return true;
  }
  return false;
}
