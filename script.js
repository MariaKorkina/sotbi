//3
async function getResponse () {
  let response = await fetch ('https://jsonplaceholder.typicode.com/users')
  let content = await response.json()
  console.log(content); //получили исходный массив пользователей
  
  let newArr = [] //массив, состоящий из name и username
  for(let i=0; i<content.length; i++) {
    newArr.push({
      "name": content[i].name,
      "username": content[i].username
    })
  }
  console.log(newArr);
  let indexDel1 = getRandomIntInclusive(0, newArr.length-1)
  newArr.splice(indexDel1,1);
 console.log(indexDel1);
 
  let indexDel2 = getRandomIntInclusive(0, newArr.length-1)
  newArr.splice(indexDel2,1);
  console.log(indexDel2);
  console.log(newArr);
  
  // delete newArr[(Math.floor(Math.random()*newArr.length)]
  // console.log(newArr);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

 getResponse()

