//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (word) => {
  const letters = word.split('').map(letter => letter.toUpperCase());
  const values = {
    1 : ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],    
    2 : ['D', 'G'],                               
    3 : ['B', 'C', 'M', 'P'],                         
    4 : ['F', 'H', 'V', 'W', 'Y'],                      
    5 : ['K'],                                  
    8 : ['J', 'X'],                               
    10 : ['Q', 'Z']          
    };
  const valueKeys = Object.keys(values);
  const finalScore = letters.reduce((total, letter) => {
      valueKeys.forEach(key => {
        if (values[key].includes(letter)) {
          total += Number(key)
        }
      })
      return total
    }, 0)          
  return finalScore        
};
