import {ThemeContext} from './ThemeContext'
import { useContext } from 'react';

const Navbar =()=>{
    const {theme, toggleTheme}=useContext(ThemeContext);
    const style={
        padding:"20px",
        height :"200px",
        backgroundColor : theme ==="light"?"#fff":"#222",
        color : theme ==='light'?"#000":"#fff"
    };

  return(
    <>
    <div style={style}>
        <h2>Content Area</h2>
        <p>Current Theme:{theme}</p>
        
    </div>
    </>
  );
};
export default Navbar;