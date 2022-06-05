import Style from './Header.module.css';

const Header = () => { 

  return (
    <div className={Style.Wrapper}>
      <div className={Style.logo}>StackOverflow - Finder</div>
    </div>
  )
}

export default Header;