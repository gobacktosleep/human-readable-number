module.exports = function toReadable (number) {
  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let array = [];

  if (number === 0)
  return 'zero';
    
  if (number >= 100) {
      array.push(ones[Math.floor(number / 100)]);
      array.push('hundred');
      number = number % 100;
  }

  if (number >= 20) {
      array.push(tens[Math.floor(number / 10)]);
      number = number % 10;
  }

  if (number >= 10 && number <= 19) {
      array.push(ones[number]);
  }

  if (number >= 1 && number <= 9) {
      array.push(ones[number]);
  }
  return array.join(' ');
}
