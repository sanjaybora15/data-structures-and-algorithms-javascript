//example of callback

const something = [
    {'name':'Sanjay','age':23},
    {'name':'Borah','age':33}
  ]
  
  
  function createPost(posts,callback){
   setTimeout(()=>{
     something.push(posts)
     callback()
   },1000)
  }
  
  function getPost(){
  setTimeout(()=>{
     something.forEach(item => {
       console.log(item.name)
     })
   },500)
  }
  
  createPost({'name':'biken'},getPost)