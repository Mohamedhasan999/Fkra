console.log("working");
function oneachieve() {
    const outerDiv = document.createElement('div');
outerDiv.classList.add('One-achieve', 'd-flex');

// Create the inner div element with class "Achieve-course-logo"
const innerDiv1 = document.createElement('div');
innerDiv1.classList.add('Achieve-course-logo');

// Create the inner div element with class "Course-logo"
const innerDiv2 = document.createElement('div');
innerDiv2.classList.add('Course-logo');

// Append the inner div element with class "Course-logo" to the inner div element with class "Achieve-course-logo"
innerDiv1.appendChild(innerDiv2);

// Create the inner div element with class "Achieve-course-data"
const innerDiv3 = document.createElement('div');
innerDiv3.classList.add('Achieve-course-data');

// Create the inner div element with class "Achieve-nameNnom" and "d-flex"
const innerDiv4 = document.createElement('div');
innerDiv4.classList.add('Achieve-nameNnom', 'd-flex');

// Create the inner div element with class "Achieve-nomber" and "d-flex"
const innerDiv5 = document.createElement('div');
innerDiv5.classList.add('Achieve-nomber', 'd-flex');

// Create the inner div element with class "Achieve-nom-showed" and set its text content to "37"
const innerDiv6 = document.createElement('div');
innerDiv6.classList.add('Achieve-nom-showed');
innerDiv6.textContent = '37';

// Create the inner div element with class "Achieve-nom-total" and set its text content to "81"
const innerDiv7 = document.createElement('div');
innerDiv7.classList.add('Achieve-nom-total');
innerDiv7.textContent = '81';

// Append the inner div elements with class "Achieve-nom-showed" and "Achieve-nom-total" to the inner div element with class "Achieve-nomber"
innerDiv5.appendChild(innerDiv6);
innerDiv5.appendChild(document.createTextNode('/'));
innerDiv5.appendChild(innerDiv7);

// Create the inner div element with class "Achieve-name" and set its text content to "Adobe XD"
const innerDiv8 = document.createElement('div');
innerDiv8.classList.add('Achieve-name');
innerDiv8.textContent = 'Adobe XD';

// Append the inner div elements with class "Achieve-nomber" and "Achieve-name" to the inner div element with class "Achieve-nameNnom"
innerDiv4.appendChild(innerDiv5);
innerDiv4.appendChild(innerDiv8);

// Create the inner div element with class "Achieve-percent"
const innerDiv9 = document.createElement('div');
innerDiv9.classList.add('Achieve-percent');

// Create the inner div element with class "Achieve-total"
const innerDiv10 = document.createElement('div');
innerDiv10.classList.add('Achieve-total');

// Create the inner div element with class "Achieve-done"
const innerDiv11 = document.createElement('div');
innerDiv11.classList.add('Achieve-done');

// Append the inner div elements with class "Achieve-total" and "Achieve-done" to the inner div element with class "Achieve-percent"
innerDiv9.appendChild(innerDiv10);
innerDiv9.appendChild(innerDiv11);

// Append the inner div elements to the outer div element
innerDiv3.appendChild(innerDiv4);
innerDiv3.appendChild(innerDiv9);
outerDiv.appendChild(innerDiv1);
outerDiv.appendChild(innerDiv3);
document.querySelector(".Achieve-container").appendChild(outerDiv);
}
function achive() {
    
const token=localStorage.getItem('token');

    const data = {
        token
    };
    fetch('http://127.0.0.1:8000/api/Archives', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept":'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the API
      console.log(data);
    if (data.status=="success") {
        oneachieve();
    }
    else {
        const divElement = document.createElement('div');
divElement.classList.add('No-sign');
divElement.textContent = 'لم تقم بإضافة أي إنجاز';
document.querySelector(".Achieve-container").appendChild(divElement);

        // Handle any errors that occur during the API request

    }
})
.catch(error => {
    console.error(error);
    // Handle any errors that occur during the API request
});
}


window.onload=achive;