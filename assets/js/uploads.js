var form = document.getElementById("uploads-form");
const spinner = document.querySelector(".spinner");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    spinner.style.display = "inline-block";
    const status = document.getElementById("my-form-status");

    const title = document.getElementById("title").value;
    const category = document.getElementById('category').value;
    const type = document.getElementById('type').value;
    const serial = document.getElementById('serial').value;
    const source = document.getElementById('source').value;

    const portfolios = {
        title,
        category,
        type,
        serial,
        source
    };

    fetch("https://fast-coast-58840.herokuapp.com/portfolios", {
        method: "POST",
        body: JSON.stringify(portfolios),
        headers: {
            'Content-Type': 'application/json'

        },
    }).then(response => {
        spinner.style.display = "none";
        status.style.display = "block";
        status.classList.add("alert");
        status.classList.add("alert-success");
        status.classList.add("text-center");
        status.innerHTML = "Portfolio Upload Successfully!";
        form.reset();
        setTimeout(() => {
            status.innerHTML = "";
            status.style.display = "none";
        }, 5000);
    }).catch(error => {
        spinner.style.display = "none";
        status.style.display = "block";
        status.innerHTML = "Oops! There was a problem submitting your portfolio";
        status.classList.add("alert");
        status.classList.add("alert-danger");
        status.classList.add("text-center");
        setTimeout(() => {
            status.innerHTML = "";
            status.style.display = "none";
        }, 5000);
    });

});


