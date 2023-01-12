import popularMovie from "../../mock/popularMock";
import HeaderContainer from "./style";

function Header() {
  
    return (
     <HeaderContainer>
       <img className="header-background" src={`http://image.tmdb.org/t/p/original${popularMovie[0].backdrop_path}`} alt={popularMovie[0].title} />
     </HeaderContainer>
      
    );
  }
  
  export default Header;