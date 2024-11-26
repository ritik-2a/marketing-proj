export const Cart = () => {
  return (
    <div className="card card-boxes cart-cover">
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
      <img src="p1.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        <a href="#" className="btn btn-primary "></a>
      </div>
      <div className="alert alert-info alertCart" role="alert">
        <p>hey this is the infomrnation</p>
      </div>
    </div>
  );
};
