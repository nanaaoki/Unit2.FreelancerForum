// Build your website according to this user story:

//A visitor enters the website and finds a list of available freelancers.
//Each freelancer has a name, an occupation,
//and a starting price for their services.
//They observe on the list Alice, the writer with a starting price of $30,
//and Bob, who is a teacher, has a starting price of $50.

//The visitor also finds a message that displays
//the average starting price of all the freelancers.
//In this example, the average starting price is $40.

//A few seconds later, a new listing appears for a freelancer named Carol,
//who is a programmer and has a starting price of $70.
//The average starting price is updated to $50.

//New freelancers continue to appear every few seconds,
//and the average starting price is updated accordingly.

const freelancersArray = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Carol", price: 70, occupation: "programmer" },
  { name: "Derek", price: 25, occupation: "gardener" },
  { name: "Eileen", price: 51, occupation: "artist" },
  { name: "Frank", price: 43, occupation: "nanny" },
  { name: "Gina", price: 81, occupation: "designer" },
  { name: "Harry", price: 43, occupation: "plumber" },
  { name: "Ines", price: 76, occupation: "programmer" },
  { name: "Jorge", price: 47, occupation: "teacher" },
  { name: "Kim", price: 72, occupation: "driver" },
];

const starter = [freelancersArray[0], freelancersArray[1]];

const addFreelancerIntervalId = setInterval(displayNewFreelancer, 2000);

const averageStarting = () => {
  let sum = 0;
  starter.forEach((element) => (sum += element.price));
  return sum / starter.length;
};

renderInitialFreelancers();

function renderFreelancer(freelancer) {
  const freelancersUI = document.querySelector("#freelancers");
  const element = document.createElement("li");
  element.innerHTML = `${freelancer.name} is a ${freelancer.occupation} with a starting price of $${freelancer.price}!`;
  freelancersUI.appendChild(element);
}

function renderInitialFreelancers() {
  starter.map((item) => {
    renderFreelancer(item);
  });
}

function displayNewFreelancer() {
  const newFreelancer = generateFreelancer();
  renderFreelancer(newFreelancer);
  starter.push(newFreelancer)
  const average = document.querySelector("#average");
  const price = averageStarting().toFixed(2);
  const priceElement = document.createElement("p");
  priceElement.innerHTML = `Average Starting Price is $${price}`;
  average.replaceChildren(priceElement);
  if (starter.length >= 7) {
    clearInterval(addFreelancerIntervalId);
  }
}

function generateFreelancer() {
  const ranName = [Math.floor(Math.random() * freelancersArray.length)];
  const ranOccupation = [Math.floor(Math.random() * freelancersArray.length)];
  const ranPrice = [Math.floor(Math.random() * freelancersArray.length)];
  const newFreelancer = {
    name: freelancersArray[ranName].name,
    occupation: freelancersArray[ranOccupation].occupation,
    price: freelancersArray[ranPrice].price,
  };
  return newFreelancer;
}
