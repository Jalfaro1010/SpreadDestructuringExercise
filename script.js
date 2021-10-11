// 1 A
const mcuShows = ["Loki", "What if...?"];
console.log(mcuShows);

// 1 B
const starWarsShows = ["The Mandalorian", "The Bad Batch"];
console.log(starWarsShows);

// 1 C
const disneyPlusShows = [...mcuShows, ...starWarsShows, "Monsters At Work"]; 

// 1 D
console.log(disneyPlusShows);

// 2 A
const netflixMovies = {
    action: `Extraction`,
    crime: `The Irishman`
};
console.log(netflixMovies);

// 2 B
const amazonPrimeMovies = {
    action: "The Tomorrow War",
    drama: "One Night In Miami"
};
console.log(amazonPrimeMovies);

// 2 C (Not For Sure if I Read The Instructions Right)
const streamingMovies = {...netflixMovies, ...amazonPrimeMovies, musical: "Hamilton"};


// 2 D
console.log(streamingMovies);

// 3 A
const disneyJunior = ["Mickey Mouse Club", "Spidey and His Amazing Friends"]
console.log(disneyJunior);

// 3 B
const [mickey, spidey] = disneyJunior;
console.log(disneyJunior);

// 3 C
console.log(disneyJunior);


// 4 A
const avengers = {
warMachine: "James Rhodes",
theHulk: "Bruce Banner"
};

// 4 B
const {warMachine, theHulk} = avengers;

// 4 C
console.log(avengers);

// 4 D
const moreAvengers = {
    blackWidow: "Natasha Romanoff",
    hawkeye: "Clint Barton",
    ironMan: "Tony Stark"
};

// 4 E
const {blackWidow: nat, ...others} = moreAvengers;


// 4 F
console.log(nat, others);