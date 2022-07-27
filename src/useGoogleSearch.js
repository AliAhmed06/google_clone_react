// This is a custom hook file
import { useState, useEffect} from 'react'
import API_KEY from './Keys';

const CONTEXT_KEY = '843a57ca0a75013d0';
// This is the search engine id from https://cse.google.com/cse/create/new

function useGoogleSearch(term) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
        .then(response => response.json())
        .then(result => {
            setData(result)
        })
    }

    fetchData();
  }, [term])

  return { data }
  
}

export default useGoogleSearch