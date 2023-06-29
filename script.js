let contestCards = document.getElementById("contestCards")
let inputFilter = document.getElementById("statusContest")
let url = "https://kontests.net/api/v1/all";
fetch(url).then((response) => {
    return response.json();
}).then((contest) => {
    console.log(contest);
    for (let item in contest) {
        // console.log(contest[item]);
        contestCards.innerHTML += `   <div class="card border border-1 border-success rounded-4 p-2" style="width: 25rem;">
        <img src="https://t3.ftcdn.net/jpg/02/80/01/64/360_F_280016453_VkNxKbvtljZxNWa3Y4A41BB6gEp1DIjY.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h4 class="card-title text-success text-uppercase fw-bold">${contest[item].name}</h4>
          <div class="d-flex justify-content-between">
          <p class="card-text"><span class="fw-bold fs-5">Site:</span> ${contest[item].site}</p>
          <p class="card-text"><span class="fw-bold fs-5">Status:</span> ${contest[item].status}</p>
          </div>
          <div class="d-flex justify-content-between">
          <p class="card-text"><span class="fw-bold fs-5">Duration:</span> ${contest[item].duration}</p>
          <p class="card-text"><span class="fw-bold fs-5">In 24 Hours:</span> ${contest[item].in_24_hours}</p>
          </div>
          <p class="card-text"><span class="fw-bold fs-5">Start Time:</span> ${contest[item].start_time}</p>
          <p class="card-text"><span class="fw-bold fs-5">End Time:</span> ${contest[item].end_time}</p>
          <a href="${contest[item].url}" class="btn btn-success w-100">VISIT SITE</a>
        </div>
      </div>`
    }
})


// let filterContest = (item) =>{
//   if(inputFilter.value == 'running'){
//     contest[item].status == 'coding'
//   }

// }