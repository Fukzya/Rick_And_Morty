import "./SearchBar.Module.css"

export default function SearchBar(props) {
   return (
      <div>
         <input className='searchInput' type='search' />
         <button className="searchButton" onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
