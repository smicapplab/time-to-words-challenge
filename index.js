// expecting time to be a string in the format like '8:15' or '12:30'

/**
 Conditions: No need to validate, time is always valid in terms value and format
 */

// Integer to word hashmap 
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

// Special cases for quarter and half past]
const specialCase = {
  "15": "quarter past",
  "30": "half past",
  "45": "quarter to"
}

function convertTimeToWords(time) {
  
  // First we handle midnight and midday which requires no parsing of time string
  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }


  // Extract hous and minutes from time string
  const timeSplit = time.split(":");
  const hour = parseInt(timeSplit[0])
  const min = parseInt(timeSplit[1])

  // If start of hour return hour and o'clock 
  if (min == "00") {
    return `${numberToWords[hour]} o'clock`
  }

  // Handle the special cases hald and quarter. 
  if (specialCase[min]) { 
    return `${specialCase[min]} ${min === 45 ? numberToWords[hour + 1] : numberToWords[hour]}`
  }

  // Rest of the case and staright conversion of time to words
  if (min < 30) {
    return `${numberToWords[min]} past ${numberToWords[hour]}`
  } else  {
    return `${numberToWords[60 - min]} to ${numberToWords[hour + 1]}`
  }

}

module.exports = { convertTimeToWords };
