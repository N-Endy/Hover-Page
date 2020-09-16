// function accepted(array) {
//     let result = array.filter(ele => ele.slice(0,1) != "C");
//     return result;
// }

// console.log(accepted(['Ducks', 'Bears', 'Cats', 'cows']));

const accepted = (array) => array.filter(ele => ele.slice(0,1) != "C");


console.log(accepted(['Ducks', 'Bears', 'Cats', 'cows', 'Cv', 'vC']));