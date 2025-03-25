export const handleScrollToQuote = () => {
    const quoteSection = document.getElementById("get-a-quote");

    if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: "smooth", block: "center" });

        quoteSection.classList.add("soft-glow");

        setTimeout(() => {
            quoteSection.classList.remove("soft-glow");
        }, 2000);
    }
};

export const handleScrollToPortfolio = () => {
    const quoteSection = document.getElementById("portfolio");

    if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: "smooth", block: "center" });

        quoteSection.classList.add("soft-glow");

        setTimeout(() => {
            quoteSection.classList.remove("soft-glow");
        }, 2000);
    }
};
