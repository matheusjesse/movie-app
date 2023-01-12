import GroupCardContainer from "./style"
import SmallCard from "../smallCard"
import requestPopular from "../../pages/api/requestPopular";
import { useEffect, useState } from "react";
import popularMovie from "../../mock/popularMock";

function CardContainer() {

  const [popular, setPopular] = useState([]);

  const requestPopularApi = async () => {
    //const {results} = await requestPopular("movie")
    setPopular(popularMovie)
    localStorage.setItem('popular', JSON.stringify(popularMovie))
  }

  useEffect(() => {
    requestPopularApi();

  }, [])
  
    return (
      <GroupCardContainer>
        {
          popular && popular.map((item, index) => (
            <SmallCard 
              key={index + 1}
              title={item.title}
              posterPath={item.poster_path}
            />
          ))
        }
      </GroupCardContainer>
    );
  }
  
  export default CardContainer;