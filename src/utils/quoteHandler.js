import quoteData from './quotes'

const getQuote = () => {
    const randomNum = Math.floor(Math.random() * Math.floor(quoteData['quotes'].length));
    // console.log(randomNum);
    // console.log(quoteData['quotes'][randomNum]);
    return quoteData['quotes'][randomNum][1];
}

export default getQuote;