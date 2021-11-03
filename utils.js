// //normsl export
// export const pi=3.14
// export function add(a,b){
//   console.log(a+b)
// }

//together export
const pi=3.14
  function add(a,b){
  console.log(a+b)
}

//export{pi,add}

//export with alias

export{pi , add as addition}

export default function minus(a,b){
    console.log(a-b)
}