
//ASSIGNMENT 4: 

//Movie Streaming Platform

////You are working on a movie recommendation system.

//Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


//Tasks:
  //  1. filter() only "Sci-Fi" movies
    //2. map() to return:
 //           "Inception (8.8)"
//
 //   3. reduce() to find average movie rating
 //   4. find() movie "Joker"
  //  5. findIndex() of "Avengers"
  //1
let r1=movies.filter(movies=>movies.genre=="Sci-Fi")
console.log(r1)
//2
let r2=movies.map(movie=>movie.title+"("+movie.rating+")");
console.log("average movie rating are",r2)
//3
let r3=movies.reduce((accumulator,movie)=>accumulator+movie.rating,0)
let avg= r3 /movies.length;
console.log(avg)
//4
let r4=movies.find(movies=>movies.title=="Joker")
console.log(r4)
//5
let r5=movies.findIndex(movies=>movies.title=="Avengers")
console.log(r5)