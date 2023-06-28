

export default function Reviews ({data}){
        
    if (data === null) {
        return null; // Si no hay información de reparto, se oculta el componente
      }else{
        console.log(data)
        return (
            <div className='container__reviews'>
              <h2 className="title__reviews">Movie Reviews</h2>
              {data.length > 0 ? (
                <ul>
                   
                  {data.map(review => (
                     
                    <li key={review.id}>
                        <div className="container__data-review">
                      <h3>{review.author}</h3>
                      <p>{review.content}</p>
                      </div>
                    </li>
                    
                  ))}
                 
                </ul>
              ) : (
                <p>We don't have reviews for this movie.</p>
              )}
            </div>
          );
      }
    
    
    };
    
