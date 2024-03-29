const portfolioParentContainer = document.getElementById("portfolio-parent-container");
const portfolioContainer = document.createElement("div");
const portfolioSpinner = document.getElementById("portfolio-spinner");
portfolioContainer.classList.add("row");
portfolioContainer.classList.add("portfolio-container");

let portfolios = [];

// const fetchPortfolio = (category) => {
//     fetch(`https://riad-portfolio-website.onrender.com/portfolios?category=${category}`)
//         .then(res => res.json())
//         .then(data => {
//             portfolios = data.result;
//             portfolios.sort(function (a, b) { return a.serial - b.serial });

//             portfolios.forEach(portfolio => {
//                 // Create Element For Common
//                 const div = document.createElement("div");
//                 div.classList.add("col-lg-4");
//                 div.classList.add("col-md-6");
//                 div.classList.add("portfolio-item");
//                 div.classList.add(portfolio.category);

//                 if (portfolio.type === "video") {
//                     // Create Element For Video
//                     div.innerHTML = `<iframe width="100%" height="400px" src="${portfolio.source}" title="${portfolio.title}" frameborder="0" allow="accelerometer; autoplay="0"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
//                 }

//                 else if (portfolio.type === "image") {
//                     // Create Element For Image
//                     div.innerHTML = `
//                 <div class="portfolio-wrap">
//                     <img src="${portfolio.source}" class="img-fluid" alt="${portfolio.title}">
//                     <div class="portfolio-info">
//                         <p>${portfolio.title}</p>
//                         <div class="portfolio-links">
//                             <a href="${portfolio.source}" data-gallery="portfolioGallery" class="portfolio-lightbox">
//                                 <i class="bx bx-plus"></i>
//                             </a>
//                         </div>
//                     </div>
//                 </div>`;
//                 };

//                 portfolioContainer.appendChild(div);
//             });

//             portfolioParentContainer.appendChild(portfolioContainer);
//             portfolioSpinner.style.display = "none";
//         });
// };

// Initial Fetch

const fetchAllPortfolios = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://riad-portfolio-website.onrender.com/portfolios`)
        .then(res => res.json())
        .then(data => {
            portfolios = data.result;
            portfolios.sort(function (a, b) { return a.serial - b.serial })
            resolve();
        });
    });
}

const fetchPortfolio = (portfolios, category) => {
    return new Promise((resolve, reject) => {
        const newPortolios = [];

        portfolios.map((portfolio) => {
            if (portfolio.category === category) {
                newPortolios.push(portfolio);
            }
        })

        newPortolios.forEach(portfolio => {
            // Create Element For Common
            const div = document.createElement("div");
            div.classList.add("col-lg-4");
            div.classList.add("col-md-6");
            div.classList.add("portfolio-item");
            div.classList.add(portfolio.category);

            if (portfolio.type === "video") {
                // Create Element For Video
                div.innerHTML = `<iframe width="100%" height="400px" src="${portfolio.source}" title="${portfolio.title}" frameborder="0" allow="accelerometer; autoplay="0"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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
        portfolioSpinner.style.display = "none";

        resolve();
    })
};

const initFetchPortfolios = async () => {
    await fetchAllPortfolios();
    await fetchPortfolio(portfolios, "motion-graphic-video")
};

initFetchPortfolios();

// fetchPortfolio("motion-graphic-video");

let currentActive = document.querySelector(".filter-active");

const portfolioFlters = document.getElementById("portfolio-flters");
portfolioFlters.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-filter") === ".motion-graphic-video") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";

        currentActive.classList.remove("filter-active");
        e.target.classList.add("filter-active");
        currentActive = e.target;
        fetchPortfolio(portfolios, "motion-graphic-video");
    }

    else if (e.target.getAttribute("data-filter") === ".tvc") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";

        currentActive.classList.remove("filter-active");
        e.target.classList.add("filter-active");
        currentActive = e.target;

        fetchPortfolio(portfolios, "tvc");
    }

    else if (e.target.getAttribute("data-filter") === ".html-css") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";

        currentActive.classList.remove("filter-active");
        e.target.classList.add("filter-active");
        currentActive = e.target;

        fetchPortfolio(portfolios, "html-css");
    }

    else if (e.target.getAttribute("data-filter") === ".3D-animation") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";

        currentActive.classList.remove("filter-active");
        e.target.classList.add("filter-active");
        currentActive = e.target;

        fetchPortfolio(portfolios, "3D-animation");
    }

    else if (e.target.getAttribute("data-filter") === ".static-design") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";

        currentActive.classList.remove("filter-active");
        e.target.classList.add("filter-active");
        currentActive = e.target;

        fetchPortfolio(portfolios, "static-design");
    }

    else if (e.target.getAttribute("data-filter") === ".branding") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";

        currentActive.classList.remove("filter-active");
        e.target.classList.add("filter-active");
        currentActive = e.target;

        fetchPortfolio(portfolios, "branding");
    }

    else if (e.target.getAttribute("data-filter") === ".print-media") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";

        currentActive.classList.remove("filter-active");
        e.target.classList.add("filter-active");
        currentActive = e.target;

        fetchPortfolio(portfolios, "print-media");
    }

    else if (e.target.getAttribute("data-filter") === ".ui-ux") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";

        currentActive.classList.remove("filter-active");
        e.target.classList.add("filter-active");
        currentActive = e.target;

        fetchPortfolio(portfolios, "ui-ux");
    };
});



