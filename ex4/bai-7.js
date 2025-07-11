const movies = [
    { title: 'A', year: 2018, rating: 4.5 },
    { title: 'B', year: 2018, rating: 4.7 },
    { title: 'C', year: 2018, rating: 3 },
    { title: 'D', year: 2017, rating: 4.5 }
];
const result = movies
    .filter(m => m.year === 2018 && m.rating > 4)
    .sort((a, b) => b.rating - a.rating)
    .map(m => m.title);

console.log(result.join(", "));