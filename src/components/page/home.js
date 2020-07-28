import React ,{ useState, useEffect}from 'react';
import axios from 'axios'
import UserGrid from '../users/userGrid'
import Search from '../ui/search/Search'
import '../../App.css';

const App =()=> {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(()=>{
    const fetchItems = async () =>{
    const _query = query.length > 0 ? `https://api.github.com/search/users?q=${query}` : 'https://api.github.com/users'
    const result = await axios(`${_query}`)
    
    const inner_data =  query.length > 0 ? result.data.items : result.data
      setItems(inner_data)
      setIsLoading(false)
    }
    fetchItems()
  },[query])
  return (
    <div className="App">
      <Search getQuery={(q)=>setQuery(q)} />
      <UserGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
