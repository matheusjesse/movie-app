import HomeContainer from "./style"
import CardContainer from "../../components/cardContainer"

function Home() {
  
    return (
      <HomeContainer>
        <h1 className="title-popular">FILMES POPULARES</h1>
        <CardContainer />
      </HomeContainer>
    );
  }
  
  export default Home;