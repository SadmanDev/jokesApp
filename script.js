// GET https://icanhazdadjoke.com
const jokes= document.querySelector('#joke');
const jokeBtn= document.querySelector('#jokeBtn');

const generateJokes = ()  => {

	const setHeader = {
		headers: {
			Accept: "application/json" 
		}
	}

	fetch('https://icanhazdadjoke.com', setHeader)
	.then((res) => res.json())
	.then((data) => {
		jokes.innerHTML = data.joke;
	}).catch((error) => {
		console.log(error);
	})
}



jokeBtn.addEventListener('click', generateJokes);
generateJokes();


// VanillaTilt start



VanillaTilt.init(document.querySelector(".container"), {
		max: 15,
		speed: 400,
		scale: 1.1 ,
		easing: "cubic-bezier(.03,.98,.52,.99)",
	});