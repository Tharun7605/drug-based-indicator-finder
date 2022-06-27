import SearchIcon from '@mui/icons-material/Search';
import "../style/SearchBar.css";
function SearchBar({placeholder, data}) {
	return (
		<div className="search">
			<div className="searchBar">
				<input type="text" placeholder={placeholder} />
				<div className="searchIcon">
					<SearchIcon />
				</div>
			</div>
		</div>
	);
}
export default SearchBar;