function Cards({ card }) {
    return (
      <>
      
        <div className="card ">
          <div className=" header text-center">
            
            <p className="paraofcard">{card.header.para}</p>
            <h2 className="headofcard">{card.header.heading}</h2>
            <hr />
          </div>
          <div className="card-body  ">
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
  
  