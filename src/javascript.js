const quoteElement = document.getElementsByClassName('quote')[0];
const HeisenbergBtn = document.getElementById('heisenbergBtn')


async function breakingBad() {
    try {
        const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');

        if (!res.ok) {
            throw new Error('Network response was note ok');
        }


        const badJson = await res.json();
        const quoteBad = badJson[0].quote;
        const authorBad = badJson[0].author;

        quoteElement.innerHTML = `"${quoteBad}" <strong> - ${authorBad}`;


    } catch (error) {
        console.error('There has been a problem with you fetch operation', error);
    }
}

HeisenbergBtn.addEventListener("click", breakingBad);

breakingBad()



