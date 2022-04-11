function gameObject() {
    const gameObject = {
        home: {
            teamName : "Brooklyn Nets",
            colors : ["Black", "White"],
            players : {
                "Alan Anderson" : {
                    number : 0,
                    shoe : 16,
                    points : 22,
                    rebounds : 12,
                    assists : 12,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 1,
                },
                "Reggie Evans" : {
                    number : 30,
                    shoe : 14,
                    points : 12,
                    rebounds : 12,
                    assists : 12,
                    steals : 12,
                    blocks : 12,
                    slamDunks : 7,
                },
                "Brook Lopez" : {
                    number : 11,
                    shoe : 17,
                    points : 17,
                    rebounds : 19,
                    assists : 10,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 15,
                },
                "Mason Plumlee" : {
                    number : 1,
                    shoe : 19,
                    points : 26,
                    rebounds : 12,
                    assists : 6,
                    steals : 3,
                    blocks : 8,
                    slamDunks : 5,
                },	
                "Jason Terry" : {
                    number : 31,
                    shoe : 15,
                    points : 19,
                    rebounds : 2,
                    assists : 2,
                    steals : 4,
                    blocks : 11,
                    slamDunks : 1,
                },
            },
        },
        away : {
            teamName : "Charlotte Hornets",
            colors : ["Turquoise", "Purple"],
            players : { 
                "Jeff Adrien" : {
                    number : 4,
                    shoe : 18,
                    points : 10,
                    rebounds : 1,
                    assists : 1,
                    steals : 2,
                    blocks : 7,
                    slamDunks : 2,
                },
                "Bismak Biyombo" : {
                    number : 0,
                    shoe : 16,
                    points : 12,
                    rebounds : 4,
                    assists : 7,
                    steals : 7,
                    blocks : 15,
                    slamDunks : 10,
                },
                "DeSagna Diop" : {
                    number : 2,
                    shoe : 14,
                    points : 24,
                    rebounds : 12,
                    assists : 12,
                    steals : 4,
                    blocks : 5,
                    slamDunks : 5,
                },
                "Ben Gordon" : {
                    number : 8,
                    shoe : 15,
                    points : 33,
                    rebounds : 3,
                    assists : 2,
                    steals : 1,
                    blocks : 1,
                    slamDunks : 0,
                },	
                "Brendan Haywood" : {
                    number : 33,
                    shoe : 15,
                    points : 6,
                    rebounds : 12,
                    assists : 12,
                    steals : 22,
                    blocks : 5,
                    slamDunks : 12,
                },
            },
        },
    }
    return gameObject;
}

console.log(gameObject());

function numPointsScored (name) {
    const game = gameObject();
    if (game.home.players[name]) {
        return game.home.players[name].points;
    } else {
        return game.away.players[name].points;
    }
}

console.log("Jason Terry points scored: ", numPointsScored("Jason Terry"));

function shoeSize(name) {
    const game = gameObject();
    if (game.home.players[name]) {
        return game.home.players[name].shoe;
    } else {
        return game.away.players[name].shoe;
    }
}

console.log("Ben Gordon shoe size: ", shoeSize("Ben Gordon"));

function teamColors(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else {
        return game.away.colors;
    }
}

console.log("Hornets Colors: ", teamColors("Charlotte Hornets"));

function playerStats(name) {
    const game = gameObject();
    if (game.home.players[name]) {
        return game.home.players[name];
    } else {
        return game.away.players[name];
    }
}

console.log("Alan Anderson Stats: ", playerStats("Alan Anderson"));

function bigShoeRebounds () {
    const game = gameObject();
    const allPlayers = {...game.home.players, ...game.away.players} //make an object with all the players as its elements
    let biggestShoe = "Alan Anderson"; //name of player
    for (player in allPlayers) {
        //debugger; debugger won't let you jump right into the conditional below and passively see what the conditional is evaluating to, 
            //but you CAN "step" through a few iterations of the for loop to get to the point you want, then go over to console and copy-
            //paste the  allPlayers[player].shoe value to see what it's evaluating to. Essentially functions the same.
        if (allPlayers[player].shoe > allPlayers[biggestShoe].shoe) {
            biggestShoe = player;
        }
    }
    return allPlayers[biggestShoe].rebounds;
}

console.log("Number of rebounds from the guy with the biggest shoe: ", bigShoeRebounds ());