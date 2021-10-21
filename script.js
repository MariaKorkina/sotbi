//3
async function getResponse () {
  let response = await fetch ('http://jsonplaceholder.typicode.com/users')
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
  // delete newArr[(Math.floor(Math.random()*newArr.length)]
  // console.log(newArr);
}


getResponse()

