// expecting time to be a string in the format like '8:15' or '12:30'

/**
  input time 00:00 a/p default : a 
  time in words
*/

const numberToWords = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine',
}

const specialCase = {
  "15": "quarter past",
  "30": "half past",
  "45": "quarter to"
}

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }

  const timeSplit = time.split(":");
  // const hour = parseInt(timeSplit[0])
  // const min = parseInt(timeSplit[1])
  const hour = parseInt(timeSplit[0])
  const min = parseInt(timeSplit[1])

  if (min == "00") {
    return `${numberToWords[hour]} o'clock`
  }

  if (specialCase[min]) {
    // > 30
    return `${specialCase[min]} ${min === 45 ? numberToWords[hour + 1] : numberToWords[hour]}`
  }

  if( min < 30 ){
    return `${numberToWords[min]} past ${numberToWords[hour]}`
  }else{
    //'five to three'
    return `${numberToWords[60-min]} to ${numberToWords[hour+1]}`
  }

  //return 'half past eight';
}

const word = convertTimeToWords("2:00");
console.log(word);

const word1 = convertTimeToWords("2:15");
console.log(word1);

const word2 = convertTimeToWords("2:45");
console.log(word2);

const word3 = convertTimeToWords("2:05");
console.log(word3);

const word4 = convertTimeToWords("2:55");
console.log(word4);

module.exports = { convertTimeToWords };
