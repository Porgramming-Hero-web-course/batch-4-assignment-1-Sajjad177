const countWordOccurrences = (sentence: string, word: string) => {
  const loweCaseSentence = sentence.toLocaleLowerCase();
  const loweCaseWord = word.toLocaleLowerCase();

  const theSentence = loweCaseSentence.split(" ");
  const lastWord = theSentence.pop();

  const modifiedLastWord = lastWord ? lastWord.slice(0, -1) : "";
  if (modifiedLastWord) {
    theSentence.push(modifiedLastWord);
  }
  const modifiedWordsArray = theSentence.join(" ").split(" ");

  const theWord = loweCaseWord.split(" ");

  const result = modifiedWordsArray.filter(
    (value) => -1 !== theWord.indexOf(value)
  );

  return result.length;
};

