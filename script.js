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

    console.log(data);
    console.log(data.records);

    console.log(data.records[0]);
    console.log(data.records[0].fields["Name"]);
}
