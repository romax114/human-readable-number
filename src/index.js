module.exports = function toReadable (number) {
    const libr = [
        ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', "thirteen", 'fourteen'],
        ['twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine']
      ]
    
      if (number < 15)  return libr[0][number];
      else if (number < 20)  return libr[1][(number - 10) - 2] + 'teen';
      else if (number < 100) {
        let res = libr[1][Math.floor(number / 10) - 2] + 'ty'
        return (number%10 === 0) ? res : res + ' ' + libr[0][number % 10];
        
      } else if (number < 1000) {
        let res = libr[0][Math.floor(number / 100)] + ' hundred';
        return (number%100 === 0) ? res : res + ' ' + toReadable(number % 100);
    }
}
