const hw = (arr = []) =>{
    return arr.filter((item, idx)=>{
        // return idx ===1
       return idx >0
    }) 
   };

console.log(hw( [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"}, 
    {id: 3, name: "Маша"}
  ]));