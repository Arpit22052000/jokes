let data1 = []
let allJokes = []
let allJokes1 = []

let generalJokesFinal = []
let programJokesFinal = []

document.addEventListener("DOMContentLoaded", function () {
    try {
        fetch("https://official-joke-api.appspot.com/random_ten")
            .then((response) => {
                return response.json();
            })
            .then((jokes) => {
                allJokes = jokes
                console.log('alljokes : ', allJokes);
                let postContainer = document.querySelector('.card-container')

                const postMethods = () => {
                    allJokes.map((postData) => {
                        const postElement = document.createElement('div');
                        postElement.classList.add('.card');
                        postElement.innerHTML = `
                                <h3 class="card-type" >${postData.type}</h3 >
                                <p class="card-joke">${postData.setup}</p>
                        `
                        postContainer.appendChild(postElement);
                    })
                }

                postMethods();
            })
    } catch (error) {
        console.log(error)
    }
})


function reload() {
    try {
        fetch("https://official-joke-api.appspot.com/random_ten")
            .then((response) => {
                return response.json();
            })
            .then((jokes) => {
                // reload function
                function reload() {
                    let postContainer = document.querySelector('.card-container');
                    postContainer.innerHTML = '';
                    allJokes1 = jokes
                    console.log("alljokes1: ", allJokes1)
                    allJokes = allJokes.concat(allJokes1)
                    console.log(allJokes)
                    const postMethods = () => {
                        allJokes.map((postData) => {
                            const postElement = document.createElement('div');
                            postElement.classList.add('.card');
                            postElement.innerHTML = `
                                <h3 class="card-type" >${postData.type}</h3 >
                                <p class="card-joke">${postData.setup}</p>
                        `
                            postContainer.appendChild(postElement);
                        })
                    }
                    postMethods();
                }
                reload()

                // filter general function
            })
    } catch (error) {
        console.log(error)
    }
}

const id = ["general", "programming", "knock-knock"];

function filterGeneral() {
    const generalJokes = allJokes.filter(function (genJokes) {
        return genJokes.type == "general";
    });
    console.log(generalJokes)
    generalJokesFinal = []
    generalJokesFinal = generalJokesFinal.concat(generalJokes)
    console.log("general Jokes: ", generalJokesFinal)

    let postContainer = document.querySelector('.card-container');
    postContainer.innerHTML = '';
    const postMethods = () => {
        generalJokesFinal.map((postData) => {
            const postElement = document.createElement('div');
            postElement.classList.add('.card');
            postElement.innerHTML = `
                                <h3 class="card-type" >${postData.type}</h3 >
                                <p class="card-joke">${postData.setup}</p>
                        `
            postContainer.appendChild(postElement);
        })
    }
    postMethods();
}
function filterProgramming() {
    const programJokes = allJokes.filter(function (proJokes) {
        return proJokes.type == "programming";
    });
    console.log(programJokes)
    programJokesFinal = []

    programJokesFinal = programJokesFinal.concat(programJokes)
    console.log("program Jokes", programJokesFinal)

    let postContainer = document.querySelector('.card-container');
    postContainer.innerHTML = '';
    const postMethods = () => {
        programJokesFinal.map((postData) => {
            const postElement = document.createElement('div');
            postElement.classList.add('.card');
            postElement.innerHTML = `
                                <h3 class="card-type" >${postData.type}</h3 >
                                <p class="card-joke">${postData.setup}</p>
                        `
            postContainer.appendChild(postElement);
        })
    }
    postMethods();
}
