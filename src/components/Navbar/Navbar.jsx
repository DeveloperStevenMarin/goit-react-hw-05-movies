import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() !== '') {
      navigate(`/movies?query=${query}`);
    }
  };
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link className='navbar__item' to="/">Home</Link>
        </li>
      </ul>
      <form className="search_btn-form">
      <input type="text" value={query} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Search</button>
      </form>
    </nav>
  );
}
