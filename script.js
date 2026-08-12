ScrollReveal().reveal('.container' );
ScrollReveal().reveal('.main', { delay: 500, duration: 500 });
ScrollReveal().reveal('.Country', { delay: 500, duration: 500 });

async function myFunction() {
    const response = await fetch(
        "appaANRWHYEpuYpGy",
        {
            headers: {
                Authorization: "Bearer pat09kjus1llkT9Jg.a54e36b7d79bf51c6d862abdf023276c03a8120cf99a64885bfe2332154e0e06"
            },
            method: "GET"
        }
    );

  const data = await response.json();

const record = data.records[0];
const fields = record.fields;

 const country = fields["Places"];
 const name = fields["Activity Name"];
 const description = fields["Description"];
 const more = fields["More activities"];
 const order = fields["Order Recommendation"];
 const transportation = fields["Best Transportation"];
const best = fields["Best time to go"];
 const worst = fields["Worst time to go"];
const rules = fields["Rules"];

 const picture = fields["Picture"];



 const location = fields["Location Place"];
 const hotels = fields["Closes Hotels"];
const fly = fields["Best place to book a fly"];

document.getElementById("Places").textContent = country;
document.getElementById("Activity Name").textContent = name;
 document.getElementById("Description").textContent = description;
 document.getElementById("More activities").textContent = more;
 document.getElementById("Order Recommendation").textContent = order;
 document.getElementById("Best Transportation").textContent = transportation;
 document.getElementById("Best time to go").textContent = best;
 document.getElementById("Worst time to go").textContent = worst;
 document.getElementById("Rules").textContent = rules;

 if (picture && picture.length > 0) {
document.getElementById("Picture").src = picture[0].url;
}
document.getElementById("Location Place").href = location;
document.getElementById("Closes Hotels").href = hotels;
 document.getElementById("Best place to book a fly").href = fly;
}

myFunction();