import "./SearchBar.Module.css"
import {useState} from "react";

export default function SearchBar({onSearch}) {
const [Id, setId] = useState('');


const handleChange = (event) => {
   setId(event.target.value)
}


   return (
      <div>
         <input className='searchInput' type='search' onChange={handleChange} value={Id}/>
         <button className="searchButton" onClick ={() => {onSearch(Id); setId('') }}>Agregar</button> 
      </div>
   );
}
