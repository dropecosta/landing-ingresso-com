import React from 'react';
import { Container, Filters } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/img/logo.svg';

interface IProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<IProps> = ({ setLocation, setSearch }) => {
  function handleChange(event: any) {
    setLocation(event.target.value);
  }

  return (
    <Container>
        <img src={logo} alt="logo" />
        <Filters>
          <div> 
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <input type="text" placeholder="busca" onChange={event => setSearch(event.target.value)} />
          </div>
          <div>
            <select defaultValue="São Paulo" onChange={handleChange} className="location">
              <option value="">Localidade...</option>
              <option>São Paulo</option>
              <option>Rio de Janeiro</option>
            </select>
          </div>
        </Filters>
    </Container>
  );
};

export default Header;
