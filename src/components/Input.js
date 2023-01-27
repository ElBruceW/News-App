import {useState,useEffect} from 'react'

function Input({inputSearch}) {
const [search,setSearch] = useState(''); 

function getValue(e) {
  setTimeout(() => {
    inputSearch(e.target.value)
  }, 1500);
}
  return (
    <>
      <div className="search-container">
        <form>
          <input type="text" placeholder="Search..."  onChange={getValue}/>
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </>
  );
}

export default Input;
