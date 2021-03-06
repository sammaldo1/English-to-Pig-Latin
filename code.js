// To run the code, open it in the browser using the VS Code Live Server
// Then open the console.  You can directly call these function in the console to test.

/*  --------------------------------------------------------
    encodeVowelWord()

    Encode words that begin with a vowel sound from english to pig latin
    For words that begin with vowel sounds, one just adds "yay" to the end.

    For example:
        "eat" becomes "eat-yay"
        "omelet" becomes "omelet-yay" 
*/

const vowels = ["a", "e", "i", "o", "u"];
let wordTranslated = "";
let wordTranslatedToPigLatin = "";
let wordSliced = "";
function encodeVowelWord(word) {
  if (vowels.includes(word[0])) {
    wordTranslated = `${word}-yay`;
    return wordTranslated;
  }
}

//unit tests here
const testVowelWords = {
  eat: "eat-yay",
  omelet: "omelet-yay",
  are: "are-yay",
  egg: "egg-yay",
  explain: "explain-yay",
  always: "always-yay",
  ends: "ends-yay",
  every: "every-yay",
  another: "another-yay",
  under: "under-yay",
  island: "island-yay",
  elegant: "elegant-yay",
};

console.assert(
  "under-yay" == encodeVowelWord("under"),
  JSON.stringify({
    test: "should return under-yay",
    expected: "under-yay",
    result: encodeVowelWord("under"),
  })
);
console.assert(
  "are-yay" == encodeVowelWord("are"),
  JSON.stringify({
    test: "should return are-yay",
    expected: "are-yay",
    result: encodeVowelWord("are"),
  })
);
/*  --------------------------------------------------------
    encodeConsonantWord()
 
    Encode words that begin with a consonant sound from english to pig latin.
    For words that begin with consonant sounds, all letters before the initial vowel 
    are placed at the end of the word sequence, preceded by a hyphen "-". Then, "ay" is added. 
    
    For example:
        "latin" becomes "atin-lay"
        "cheers" becomes "eers-chay"
*/
function encodeConsonantWord(word) {
  if (vowels.includes(word[1])) {
    wordTranslated = word.slice(0, 1);
    wordSliced = word.slice(1);
    wordTranslatedToPigLatin = `${wordSliced}-${wordTranslated}ay`;
    return wordTranslatedToPigLatin;
  } else if (vowels.includes(word[2])) {
    wordTranslated = word.slice(0, 2);
    wordSliced = word.slice(2);
    wordTranslatedToPigLatin = `${wordSliced}-${wordTranslated}ay`;
    return wordTranslatedToPigLatin;
  } else {
    wordTranslated = word.slice(0, 3);
    wordSliced = word.slice(3);
    wordTranslatedToPigLatin = `${wordSliced}-${wordTranslated}ay`;
    return wordTranslatedToPigLatin;
  }
}
// unit tests
const testSimpleConsonantWords = {
  latin: "atin-lay",
  banana: "anana-bay",
  trash: "ash-tray",
  happy: "appy-hay",
  duck: "uck-day",
  dopest: "opest-day",
  me: "e-may",
  too: "oo-tay",
  will: "ill-way",
  moist: "oist-may",
  wet: "et-way",
  real: "eal-ray",
  simple: "imple-say",
  say: "ay-say",
  bagel: "agel-bay",
  you: "ou-yay",
};
console.assert(
  "ash-tray" === encodeConsonantWord("trash"),
  JSON.stringify({
    test: "should return ash-tray",
    expected: "ash-tray",
    result: encodeConsonantWord("trash"),
  })
);
console.assert(
  "ay-say" === encodeConsonantWord("say"),
  JSON.stringify({
    test: "should return ay-say",
    expected: "ay-say",
    result: encodeConsonantWord("say"),
  })
);
/*  --------------------------------------------------------
    encodeWord()
 
    Decide whether a given word starts with a vowel sound or consonant sound,
    and call encodeVowelWord(word) or encodeConsonantWord(word) when relevant.
 
    For example:
        "eat" becomes "eatyay" because it starts with a vowel "e"
        "omelet" becomes "omeletyay" because it starts with a vowel "o"
        "latin" becomes "atin-lay" because it starts with a consonant "l""
        "cheers" becomes "eers-chay" because it starts with a consonant cluster "ch"
        "you" becomes "ou-yay" because it starts with a consonant "y"
*/
function encodeWord(word) {
  if (vowels.includes(word[0])) {
    return encodeVowelWord(word);
  }
  if (vowels.includes(word[1]) || vowels.includes(word[2])) {
    return encodeConsonantWord(word);
  }
}
// unit tests here
const testClusteredConsonantWords = {
  cheers: "eers-chay",
  shesh: "esh-shay",
  smile: "ile-smay",
  string: "ing-stray",
  thanks: "anks-thay",
  stupid: "upid-stay",
  glove: "ove-glay",
  eat: "eat-yay",
};

console.assert(
  "eat-yay" === encodeWord("eat"),
  JSON.stringify({
    test: "should return eat-yay",
    expected: "eat-yay",
    result: encodeWord("eat"),
  })
);

console.assert(
  "anks-thay" === encodeWord("thanks"),
  JSON.stringify({
    test: "should return anks-thay",
    expected: "anks-thay",
    result: encodeWord("thanks"),
  })
);
/*  --------------------------------------------------------
    encodeText()    
 
    Encode a full sentence or paragraph from english to pig latin.
*/
function encodeText(text) {
  let wordBeingTranslated = text.split(" ");
  let wordTranslated = [];
  for (let i = 0; i < wordBeingTranslated.length; i += 1) {
    if (vowels.includes(wordBeingTranslated[i][0])) {
      wordTranslated.push(encodeVowelWord(wordBeingTranslated[i]));
    } else {
      wordTranslated.push(encodeConsonantWord(wordBeingTranslated[i]));
    }
  }

  return wordTranslated.join(" ").toLowerCase();
}

//unit tests
console.assert(
  "ow-hay are-yay ou-yay" === encodeText("How are you"),
  JSON.stringify({
    test: "should return ow-hay are-yay ou-yay",
    expected: "ow-hay are-yay ou-yay",
    result: encodeText("How are you"),
  })
);

console.assert(
  "is-thay as-way ard-hay" === encodeText("this was hard"),
  JSON.stringify({
    test: "should return is-thay as-way ard-hay",
    expected: "is-thay as-way ard-hay",
    result: encodeText("this was hard"),
  })
);
