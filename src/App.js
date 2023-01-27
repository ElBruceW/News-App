import {useState,useEffect} from 'react'
import axios from 'axios'

import './App.css';
import Input from './components/Input';
import News from './components/News';

function App() {
  const [search,setSearch] = useState('gaming')
const [news,setNews] = useState([]);

console.log(search)

useEffect( () => {
   getNewsAPI()
},[search])


async function getNewsAPI() {
  const res = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=361fd49172e7442984fa56e019c6a499&width=100&height=100&pageSize=10`)
  if(res.data){
    setNews(res.data.articles)
  }
}

  return (
    <>
    <Input
    inputSearch={setSearch}/>
   {
    news.length >0 ?  <News news={news}/> : <p className='alert-error'>NO HAY RESULTADOS</p>
   }
    </>
    );
}

export default App;
