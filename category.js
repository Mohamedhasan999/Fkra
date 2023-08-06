console.log("working");
const registerForm = document.querySelector('.Search-Icon');

registerForm.addEventListener('click', (event) => {

event.preventDefault();
const name = document.querySelector('.Category-Search').value;
    const data = {
        name
    };
    fetch('http://127.0.0.1:8000/api/searchcourse', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        "Accept":'application/json',
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    console.log(data[0].id);
    console.log(data.StatusCode);

      // Handle the response from the API
    if (data[0].id!=null) {
document.querySelector(".Result").style.display="block";
      let parent=  document.createElement("div");
      parent.className="One-result d-flex";
      let name=  document.createElement("div");
      name.className="Result-name";
      name.innerHTML=data[0].name;
      let photo=  document.createElement("div");
      photo.className="Result-logo";
      let image=  document.createElement("img");
      image.setAttribute('src',data[0].image);
      image.className="Resultimg";
      photo.appendChild(image);
      parent.appendChild(photo);
      parent.appendChild(name);
      document.querySelector(".Result").appendChild(parent);
    } else {
        // Handle any errors that occur during the API request
document.querySelector(".Result").style.display="block";
        let parent=  document.createElement("div");
        parent.className="One-result d-flex";
        let name=  document.createElement("div");
        name.className="Result-name";
        name.innerHTML="لا نتائج";
        parent.style.textAlign="center";
        parent.style.justifyContent="center";
        parent.appendChild(name);
        document.querySelector(".Result").appendChild(parent);
    }
    })
    .catch(error => {
    console.error(error);
      // Handle any errors that occur during the API request
    });
}
);