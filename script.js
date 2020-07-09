let list = document.querySelector(".list");

fetch('http://91.121.88.38:3000/api/people')
    .then((response) => {
        return response.json();
    })
    .then((objects) => {
        objects.forEach(object => {

            let newDiv = document.createElement("div");
            newDiv.classList.add("person")
            list.appendChild(newDiv);

            let newh2 = document.createElement("h2");
            newh2.innerText = "Nom : " + object.name;
            newDiv.appendChild(newh2);

            let newP = document.createElement("p");
            newP.innerText = "Age : " + object.age + " ans";
            newDiv.append(newP);

            let newUl = document.createElement("ul");
            let ulParagraph = document.createElement("p");
            ulParagraph.innerText = "Voitures : ";
            newDiv.appendChild(ulParagraph);
            newDiv.appendChild(newUl);

            object.cars.forEach(car => {
                let newLi = document.createElement("li");
                newLi.innerText = car;
                newUl.appendChild(newLi);
            })
        })
    })
    .catch((e) => {
        console.log(e);
    });
