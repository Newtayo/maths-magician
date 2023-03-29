import { useEffect, useState } from 'react';
import './Styles/Addquote.css';

const Addquote = () => {
  const [quote, setQuote] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
  const apiKey = 'hIAxl3KceGWkSXpZVss6FJNR7LHPBhBJ6BVgnZ3E';

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
          },
        });

        const reply = await response.json();
        setQuote(reply);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setQuote, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="quotediv">
      <h2 className="quoteHeader">Hello!, Here is a random quote from Ninjas API</h2>
      {quote.map((item) => (
        <article key={item.id} className="quotedisplay">
          <p>
            {item.quote}
            {' '}
            <strong>
              {' '}
              -
              {item.author}
            </strong>
          </p>

        </article>
      ))}
    </div>
  );
};
export default Addquote;
