let profiles = {
     name:'sanjay',
     age: 20,
     kids:[{
             name:'jilmil',
             age:10,
             kids:[{
                     name:'sumi',
                     age:5
                 },{
                     name:'chitra',
                     age:2
                 }]
         }]
}

let totalAge = profiles.age
function ageCalculate(profile){
     if(Array.isArray(profile.kids)){
         console.log(Array.isArray(profile.kids))
         profile.kids.forEach(i => {
             totalAge = totalAge + i.age
             ageCalculate(i)
         })
     }
     return totalAge
}
console.log(ageCalculate(profiles))