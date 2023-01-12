import HomeContainer from "./style"
import CardContainer from "../../components/cardContainer"
import Header from "../../components/header"

function Home() {
  
    return (
      <>
        <Header />        
        <HomeContainer>
          <h1 className="title-popular">FILMES POPULARES</h1>
          <CardContainer />
        </HomeContainer>
      </>
    );
  }
  
  export default Home;