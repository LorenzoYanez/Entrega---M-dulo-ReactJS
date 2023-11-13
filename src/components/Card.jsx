const Card = ({ title, imageSource, price }) => {
  return (
    <div className="h-100 w-md-75 card p-md-6 p-8">
      <img className="h-75" src={imageSource} alt="" />
      <div className="card-body text-center py-4">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary"> $USD {price}</p>
        <a href="#" className="btn btn-outline-secondary">Comprar</a>
      </div>
    </div>
  );
};

export default Card;
