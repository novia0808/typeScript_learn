enum Role { ADMIN = 5, READ_ONLY, AUTHOR}

const person
// {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
// } 
= {
  name: 'aivon',
  age: 20,
  hobbies: ['Stports', 'Cooking'],
  role: Role.ADMIN
}

let favoriteActivities: string[];
favoriteActivities = ['aaaa']

console.log(person.name)

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
  
}