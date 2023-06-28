

export default function ProfileCard({info} ){
    return (
        <div className="container__profile-card">
          <img className='image__profile-card' src={'https://image.tmdb.org/t/p/w500' + info.profile_path} alt='profile photo' />
          <div className="container__profile-info">
          <h3>{info.name}</h3>
          <p>Character: {info.character}</p>
          </div>
         
        </div>
      );
}