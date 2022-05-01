const portfolioParentContainer = document.getElementById("portfolio-parent-container");
const portfolioContainer = document.createElement("div");
portfolioContainer.classList.add("row");
portfolioContainer.classList.add("portfolio-container");

fetch("https://fast-coast-58840.herokuapp.com/portfolios")
    .then(res => res.json())
    .then(data => {
        const portfolios = data.result;
        portfolios.sort(function (a, b) { return a.serial - b.serial });

        portfolios.forEach(portfolio => {
            // Create Element For Common
            const div = document.createElement("div");
            div.classList.add("col-lg-4");
            div.classList.add("col-md-6");
            div.classList.add("portfolio-item");
            div.classList.add(portfolio.category);

            if (portfolio.type === "video") {
                // Create Element For Video
                div.innerHTML = `<iframe  src="${portfolio.source}" title="${portfolio.title}" frameborder="0" allow="accelerometer; autoplay="0"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            }

            else if (portfolio.type === "image") {
                // Create Element For Image
                div.innerHTML = `
                <div class="portfolio-wrap">
                    <img src="${portfolio.source}" class="img-fluid" alt="${portfolio.title}">
                    <div class="portfolio-info">
                        <p>${portfolio.title}</p>
                        <div class="portfolio-links">
                            <a href="${portfolio.source}" data-gallery="portfolioGallery" class="portfolio-lightbox">
                                <i class="bx bx-plus"></i>
                            </a>
                        </div>
                    </div>
                </div>`;
            };

            portfolioContainer.appendChild(div);
        });

        portfolioParentContainer.appendChild(portfolioContainer);
    });




