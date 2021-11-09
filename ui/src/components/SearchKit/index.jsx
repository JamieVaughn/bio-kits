import { useEffect, useState } from 'react'
import './styles.css';
import ListItem from '../ListItem'
import useDebounce from '../../hooks/useDebounce';

const SearchKit = () => {
  const [input, setInput] = useState('')
  const [kit, setKit] = useState('')
  const [message, setMessage] = useState('Search for a kit.')
  const [loading, setLoading] = useState(false)
  const debouncedValue = useDebounce(input, input.length ? 200 : 0)

  const handleInput = e => {
    setKit('')
    setInput(e.target.value)
  }

  useEffect(() => {
    setMessage('')
    if(input.length && Number.isNaN(input)) {
      setMessage('Search for a numerical kit ID.')
      return
    }
    if(input.length) {
      setLoading(true)
      fetch(`http://localhost:9000/kits?id=${input}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.status === 'success') {
            setKit(data.kit)
          } else {
            setKit('')
            setMessage(data.status)
          }
        }).catch(err => {
          console.log(err)
          setKit('')
          setMessage('error')
        }).finally(() => setLoading(false))
      } else {
        setMessage('Search for a kit.')
      }
    }, [debouncedValue])

  return (
    <div>
      <div className="search-container">
        <label className={`kit-label ${loading && 'spin'}`} htmlFor="kits">
          Kit ID:&nbsp;
          <input
          id='kits'
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Search for kits by ID"
          />
        </label>
      </div>
      <div>
        {input.length && kit ? <ListItem kit={kit} /> : message}
      </div>
    </div>
  );
};
export default SearchKit;
