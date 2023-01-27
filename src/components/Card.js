function Card({news}) {
    const {title,author,urlToImage} = news
    return (
      <>
        <div className="col">
          <div className="card">
            <img
              src={urlToImage}
              alt="Avatar"
            />
            <div className="card-text">
              <h4>
                <b>{author}</b>
              </h4>
              <p>{title}</p>
            </div>
            <button type="submit" className="btn btn-read">
              Read
            </button>
          </div>
        </div>
      </>
    );
  }
  
  export default Card;
  