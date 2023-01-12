import { useEffect } from "react";
import SmallCardContainer from "./style"

function SmallCard({title, posterPath}) {
  
  useEffect(() => {
    console.log(posterPath)
  }, [])
    return (
      <SmallCardContainer>
        <h1 className="popular-title">{title}</h1>
        <img src={`http://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
      </SmallCardContainer>
    );
  }
  
  export default SmallCard;