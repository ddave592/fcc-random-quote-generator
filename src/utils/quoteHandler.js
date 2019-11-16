import quoteData from './quotes'

const quotes = quoteData.quotes;

const getQuote = () => {
    if (quotes) {
        const randomNum = Math.floor(Math.random() * Math.floor(quotes.length));
        let quoteRemoval = quotes.splice(randomNum, 1);
        return quoteRemoval[0];
    } return {
        "quoteText": null,
        "quoteAuthor": null,
        "id": null
    };
}



export default getQuote;

