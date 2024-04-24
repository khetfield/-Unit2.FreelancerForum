// structure to hold freelancers
let freelancers = [];

// function to calculate average price
function calculateAveragePrice() {
    let total = 0;
    for (let freelancer of freelancers) {
        total += freelancer.startingPrice;
    }
    const average = total / freelancers.length;
    return average.toFixed(2); // rounding to 2 decimal places
}

// function to update the list of freelancers
function updateFreelancerList() {
    const freelancerList = document.getElementById("freelancer-list");
    freelancerList.innerHTML = ""; // clears previous list
    for (let freelancer of freelancers) {
        const listItem = document.createElement("li");
        listItem.textContent = `${freelancer.name} - ${freelancer.occupation}, Starting price: $${freelancer.startingPrice}`;
        freelancerList.appendChild(listItem);
    }
}

// function to update the average starting price
function updateAveragePrice() {
    const averagePrice = document.getElementById("average-price-value");
    averagePrice.textContent = calculateAveragePrice();
}

// bring in new freelancers every few seconds
setInterval(() => {
    // data for new incoming freelancers
    const newFreelancer = {
        name: "Carol", occupation: "Programmer", startingPrice: 70
    };
    freelancers.push(newFreelancer);
    updateFreelancerList();
    updateAveragePrice();
}, 3000); // adding a new freelancer every 3 seconds

// initial freelancers
const initialFreelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 }
];
freelancers = [...initialFreelancers];

// update initial list and average price
updateFreelancerList();
updateAveragePrice();