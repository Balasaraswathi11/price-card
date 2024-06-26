function Cards({ card }) {
    return (
      <>
      
        <div className="card">
          <div className="card-header text-center">
            <p>{card.header.para}</p>
            <h1>{card.header.heading}</h1>
          </div>
          <div className="card-body ">
          <ul className="card-text" >
            {card.body.map((item, ind) => (
              <li className="list-item p-1" key={ind} style={{ color: item.correct ? 'black' : 'grey' }}> 
                {item.correct ? (//{item.correct?()}
    <>
  <i class="fa fa-check"></i> {item.content}
    </>
  ) : (
    <>
    <i class="fa fa-close"></i>  {item.content}
    </>
  )}
              </li>
              ))}
            </ul>
            <div className="buttondiv">
            <a href="#" className={`${card.card}-button btn btn-primary`}>Button</a>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Cards
  
  