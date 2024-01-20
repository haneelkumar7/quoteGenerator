import * as React from 'react';
// import quotes from './quotes';
import data from './data';
import FancyText from './FancyText';

export default function InspirationGenerator({children}) {
  const [index, setIndex] = React.useState(0);
  const quote = data[index].quote;
  const author = data[index].author;
  const profession = data[index].profession;

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
    };

  const next = () => setIndex (randomNumberInRange(0, data.length-1));

  return (
    <>
      <p>Your inspirational quote is:</p>
      <FancyText text={quote} />
      <button className='logo' onClick={next}>Inspire me again</button>
      <br />
      <br />
      ~ <i>{author}</i> ~
      <br />
      {profession}
    </>
  );
}