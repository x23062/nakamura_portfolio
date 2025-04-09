import './Header.css';
import GithubImage from './../../assets/images/github_square_logo.png';
import XIcon from './../../assets/images/X_Twitter.png';

function Header() {
  return (
    <header className='header'>
      <h1>Portfolio</h1>
      <div className='header-right'>
      <nav>
        <ul className='nav'>
          <li><a href="#about">profile</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#products">Products</a></li>
        </ul>
      </nav>
      <div className='link-outside'>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={GithubImage} alt="GitHub" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={XIcon} alt="X" />
        </a>
      </div>
      </div>

    </header>
  );
}

export default Header;
