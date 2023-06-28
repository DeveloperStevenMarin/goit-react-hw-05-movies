import ProfileCard from "components/ProfileCard/ProfileCard";


export default function Cast({data}){

        
  if (data === null) {
    return null; // Si no hay información de reparto, se oculta el componente
  }else{
    console.log(data)
    return (
    
        <div className="container__cast">
          <h3 className="title__cast">Cast:</h3>
          <ul>
            {data.cast.map((actor) => (
             <ProfileCard info={actor}/>
            ))}
          </ul>
        </div>
      );
  }


};

