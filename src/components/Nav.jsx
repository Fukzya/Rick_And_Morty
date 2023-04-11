import SearchBar from './SearchBar/SearchBar'
import '../App.css'

const Nav = (props) => {
    return(
        <div className='nav'>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

export default Nav;
