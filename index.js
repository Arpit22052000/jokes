let data1 = []


let allJokes = [] // this contains all the jokes, even after concatinating
let allJokes1 = [] // this contains the new jokes which are added newly

let generalJokesFinal = [] // this contains the final general jokes after all the filteration
let programJokesFinal = [] // this contains the final program jokes after all the filteration
let otherJokesFinal = [] // this contains the final other jokes after all the filteration


// this initially gives 10 random jokes on the page
document.addEventListener("DOMContentLoaded", function () {
    try {
        fetch("https://official-joke-api.appspot.com/random_ten")
            .then((response) => {
                return response.json();
            })
            .then((jokes) => {

                allJokes = jokes
                console.log('alljokes : ', allJokes);

                // this is responsible for making the card
                let postContainer = document.querySelector('.card-container')

                const postMethods = () => {
                    allJokes.map((postData) => {
                        const postElement = document.createElement('div');
                        postElement.classList.add('.card');
                        postElement.innerHTML = `
                                <h3 class="card-type" >${postData.type}</h3 >
                                <p class="card-joke">${postData.setup}</p>

                                <p class="card-punchline">${postData.punchline}</p>
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




// this reload the api and here allJokes are being updated through concatenation with allJokes1

function reload() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    console.log(scrollable)
    console.log(scrolled)

    if (Math.ceil(scrollable === scrolled)) {
        try {
            fetch("https://official-joke-api.appspot.com/random_ten")
                .then((response) => {
                    return response.json();
                })
                .then((jokes) => {
                    // reload function
                    function reload() {

                        // since we are reloading the api, so it's necessary to clear the previous input so that, the next value get's appended to the previous values, and the previous values does not repeats two times
                        let postContainer = document.querySelector('.card-container');
                        postContainer.innerHTML = '';

                        allJokes1 = jokes
                        console.log("alljokes1: ", allJokes1)

                        allJokes = allJokes.concat(allJokes1)
                        console.log(allJokes)

                        // this is responsible for making the card
                        const postMethods = () => {
                            allJokes.map((postData) => {
                                const postElement = document.createElement('div');
                                postElement.classList.add('.card');
                                postElement.innerHTML = `
                                <h3 class="card-type" >${postData.type}</h3 >
                                <p class="card-joke">${postData.setup}</p>
                                <p class="card-punchline">${postData.punchline}</p>
                        `
                                postContainer.appendChild(postElement);
                            })
                        }
                        postMethods();
                    }
                    reload()
                })
        } catch (error) {
            console.log(error)
        }
    }
}


// this function filters the general jokes from allJokes
function filterGeneral() {

    // this filters the types of object the api contain and add those into respective types of jokes
    const generalJokes = allJokes.filter(function (genJokes) {
        return genJokes.type == "general";
    });

    console.log(generalJokes)

    generalJokesFinal = []
    generalJokesFinal = generalJokesFinal.concat(generalJokes)

    console.log("general Jokes: ", generalJokesFinal)


    // this vanishes the allJokes and then create a container and contains the general jokes
    let postContainer = document.querySelector('.card-container');
    postContainer.innerHTML = '';
    const postMethods = () => {
        generalJokesFinal.map((postData) => {
            const postElement = document.createElement('div');
            postElement.classList.add('.card');
            postElement.innerHTML = `
                                <h3 class="card-type" >${postData.type}</h3 >
                                <p class="card-joke">${postData.setup}</p>
                                <p class="card-punchline">${postData.punchline}</p>
                        `
            postContainer.appendChild(postElement);
        })
    }
    postMethods();
}



// this function filters the programming jokes from allJokes
function filterProgramming() {

    // this filters the types of object the api contain and add those into respective types of jokes
    const programJokes = allJokes.filter(function (proJokes) {
        return proJokes.type == "programming";
    });

    console.log(programJokes)

    programJokesFinal = []

    programJokesFinal = programJokesFinal.concat(programJokes)
    console.log("program Jokes", programJokesFinal)


    // this vanishes the allJokes and then create a container and contains the programming jokes
    let postContainer = document.querySelector('.card-container');
    postContainer.innerHTML = '';
    const postMethods = () => {
        programJokesFinal.map((postData) => {
            const postElement = document.createElement('div');
            postElement.classList.add('.card');
            postElement.innerHTML = `
                                <h3 class="card-type" >${postData.type}</h3 >
                                <p class="card-joke">${postData.setup}</p>
                                <p class="card-punchline">${postData.punchline}</p>
                        `
            postContainer.appendChild(postElement);
        })
    }
    postMethods();
}



// this function filters the jokes which are neither general nor programming from allJokes
function filterOthers() {

    // this filters the types of object the api contain and add those into respective types of jokes
    const otherJokes = allJokes.filter(function (otherJokes) {
        return otherJokes.type !== "programming" && otherJokes.type !== "general";
    });

    console.log(otherJokes)
    otherJokesFinal = []

    otherJokesFinal = otherJokesFinal.concat(otherJokes)
    console.log("other Jokes", otherJokesFinal)


    // this vanishes the allJokes and then create a container and contains other jokes
    let postContainer = document.querySelector('.card-container');
    postContainer.innerHTML = '';
    const postMethods = () => {
        otherJokesFinal.map((postData) => {
            const postElement = document.createElement('div');
            postElement.classList.add('.card');
            postElement.innerHTML = `
                                <h3 class="card-type" >${postData.type}</h3 >
                                <p class="card-joke">${postData.setup}</p>
                                <p class="card-punchline">${postData.punchline}</p>
                        `
            postContainer.appendChild(postElement);
        })
    }
    postMethods();
}