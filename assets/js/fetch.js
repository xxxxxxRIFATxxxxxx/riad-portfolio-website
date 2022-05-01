const portfolioParentContainer = document.getElementById("portfolio-parent-container");
const portfolioContainer = document.createElement("div");
const portfolioSpinner = document.getElementById("portfolio-spinner");
portfolioContainer.classList.add("row");
portfolioContainer.classList.add("portfolio-container");

let portfolios = [];
let motionGraphicVideo = [];
let tvc = [];
let htmlCss = [];
let threeDAnimation = [];
let staticDesign = [];
let branding = [];
let printMedia = [];
let uiUx = [];

fetch("https://fast-coast-58840.herokuapp.com/portfolios")
    .then(res => res.json())
    .then(data => {
        portfolios = data.result;
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
                div.innerHTML = `<iframe width="100%" height="auto" src="${portfolio.source}" title="${portfolio.title}" frameborder="0" allow="accelerometer; autoplay="0"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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

        motionGraphicVideo = portfolios.filter(portfolio => portfolio.category === "motion-graphic-video");

        tvc = portfolios.filter(portfolio => portfolio.category === "tvc");

        htmlCss = portfolios.filter(portfolio => portfolio.category === "html-css");

        threeDAnimation = portfolios.filter(portfolio => portfolio.category === "3D-animation");

        staticDesign = portfolios.filter(portfolio => portfolio.category === "static-design");

        branding = portfolios.filter(portfolio => portfolio.category === "branding");

        printMedia = portfolios.filter(portfolio => portfolio.category === "print-media");

        uiUx = portfolios.filter(portfolio => portfolio.category === "ui-ux");

        portfolioParentContainer.appendChild(portfolioContainer);

        setTimeout(() => {
            portfolioSpinner.style.display = "none";
        }, 2000);
    });

const portfolioFlters = document.getElementById("portfolio-flters");
portfolioFlters.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-filter") === ".motion-graphic-video") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";
        motionGraphicVideo.forEach(portfolio => {
            // Create Element For Common
            const div = document.createElement("div");
            div.classList.add("col-lg-4");
            div.classList.add("col-md-6");
            div.classList.add("portfolio-item");
            div.classList.add(portfolio.category);

            if (portfolio.type === "video") {
                // Create Element For Video
                div.innerHTML = `<iframe width="100%" height="auto" src="${portfolio.source}" title="${portfolio.title}" frameborder="0" allow="accelerometer; autoplay="0"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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
            setTimeout(() => {
                portfolioSpinner.style.display = "none";
            }, 2000);
        });
    }

    else if (e.target.getAttribute("data-filter") === ".tvc") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";
        tvc.forEach(portfolio => {
            // Create Element For Common
            const div = document.createElement("div");
            div.classList.add("col-lg-4");
            div.classList.add("col-md-6");
            div.classList.add("portfolio-item");
            div.classList.add(portfolio.category);

            if (portfolio.type === "video") {
                // Create Element For Video
                div.innerHTML = `<iframe width="100%" height="auto" src="${portfolio.source}" title="${portfolio.title}" frameborder="0" allow="accelerometer; autoplay="0"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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
            setTimeout(() => {
                portfolioSpinner.style.display = "none";
            }, 2000);
        });
    }

    else if (e.target.getAttribute("data-filter") === ".html-css") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";
        htmlCss.forEach(portfolio => {
            // Create Element For Common
            const div = document.createElement("div");
            div.classList.add("col-lg-4");
            div.classList.add("col-md-6");
            div.classList.add("portfolio-item");
            div.classList.add(portfolio.category);

            if (portfolio.type === "video") {
                // Create Element For Video
                div.innerHTML = `<iframe width="100%" height="auto" src="${portfolio.source}" title="${portfolio.title}" frameborder="0" allow="accelerometer; autoplay="0"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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
            setTimeout(() => {
                portfolioSpinner.style.display = "none";
            }, 2000);
        });
    }

    else if (e.target.getAttribute("data-filter") === ".3D-animation") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";
        threeDAnimation.forEach(portfolio => {
            // Create Element For Common
            const div = document.createElement("div");
            div.classList.add("col-lg-4");
            div.classList.add("col-md-6");
            div.classList.add("portfolio-item");
            div.classList.add(portfolio.category);

            if (portfolio.type === "video") {
                // Create Element For Video
                div.innerHTML = `<iframe width="100%" height="auto" src="${portfolio.source}" title="${portfolio.title}" frameborder="0" allow="accelerometer; autoplay="0"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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
            setTimeout(() => {
                portfolioSpinner.style.display = "none";
            }, 2000);
        });
    }

    else if (e.target.getAttribute("data-filter") === ".static-design") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";
        staticDesign.forEach(portfolio => {
            // Create Element For Common
            const div = document.createElement("div");
            div.classList.add("col-lg-4");
            div.classList.add("col-md-6");
            div.classList.add("portfolio-item");
            div.classList.add(portfolio.category);

            if (portfolio.type === "video") {
                // Create Element For Video
                div.innerHTML = `<iframe width="100%" height="auto" src="${portfolio.source}" title="${portfolio.title}" frameborder="0" allow="accelerometer; autoplay="0"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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
            setTimeout(() => {
                portfolioSpinner.style.display = "none";
            }, 2000);
        });
    }

    else if (e.target.getAttribute("data-filter") === ".branding") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";
        branding.forEach(portfolio => {
            // Create Element For Common
            const div = document.createElement("div");
            div.classList.add("col-lg-4");
            div.classList.add("col-md-6");
            div.classList.add("portfolio-item");
            div.classList.add(portfolio.category);

            if (portfolio.type === "video") {
                // Create Element For Video
                div.innerHTML = `<iframe width="100%" height="auto" src="${portfolio.source}" title="${portfolio.title}" frameborder="0" allow="accelerometer; autoplay="0"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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
            setTimeout(() => {
                portfolioSpinner.style.display = "none";
            }, 2000);
        });
    }

    else if (e.target.getAttribute("data-filter") === ".print-media") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";
        printMedia.forEach(portfolio => {
            // Create Element For Common
            const div = document.createElement("div");
            div.classList.add("col-lg-4");
            div.classList.add("col-md-6");
            div.classList.add("portfolio-item");
            div.classList.add(portfolio.category);

            if (portfolio.type === "video") {
                // Create Element For Video
                div.innerHTML = `<iframe width="100%" height="auto" src="${portfolio.source}" title="${portfolio.title}" frameborder="0" allow="accelerometer; autoplay="0"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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
            setTimeout(() => {
                portfolioSpinner.style.display = "none";
            }, 2000);
        });
    }

    else if (e.target.getAttribute("data-filter") === ".ui-ux") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";
        uiUx.forEach(portfolio => {
            // Create Element For Common
            const div = document.createElement("div");
            div.classList.add("col-lg-4");
            div.classList.add("col-md-6");
            div.classList.add("portfolio-item");
            div.classList.add(portfolio.category);

            if (portfolio.type === "video") {
                // Create Element For Video
                div.innerHTML = `<iframe width="100%" height="auto" src="${portfolio.source}" title="${portfolio.title}" frameborder="0" allow="accelerometer; autoplay="0"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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
            setTimeout(() => {
                portfolioSpinner.style.display = "none";
            }, 2000);
        });
    }

    else if (e.target.getAttribute("data-filter") === "*") {
        portfolioContainer.innerHTML = "";
        portfolioSpinner.style.display = "block";
        portfolios.forEach(portfolio => {
            // Create Element For Common
            const div = document.createElement("div");
            div.classList.add("col-lg-4");
            div.classList.add("col-md-6");
            div.classList.add("portfolio-item");
            div.classList.add(portfolio.category);

            if (portfolio.type === "video") {
                // Create Element For Video
                div.innerHTML = `<iframe width="100%" height="auto" src="${portfolio.source}" title="${portfolio.title}" frameborder="0" allow="accelerometer; autoplay="0"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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
            setTimeout(() => {
                portfolioSpinner.style.display = "none";
            }, 2000);
        });
    };
});



