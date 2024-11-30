//console.log(Date.now())    in milliseconds to convert in second divide by 10
let a=[1,2,3,4,5,6,7]
//console.log(a[2])
// console.log(a.push(18))
// console.log(a)
//console.log(a.pop())
  
  // shallow copy------- properties share the same reffernece

  // deep copy =--------do not share the same refferce

  //console.log(a.unshift(8))
  //console.log(a)


  // slice=--------- array does not changes
  //splice ========= array manuplation takes place

  let batter=["MS","Kholi","Tilak","jaiswal"]
  let bowler=["Bumrah","chahal","jadeja","Ashwin"]

  //let team=batter.concat(bowler)
  //console.log(team)
  let team=[...batter,...bowler] /// spread oopeartor
  //console.log(team)


  