/** @format */

const TicketCards = ({ className }) => {
  return (
    <div className={`ticket-card ${className}`}>
      <p className="id">#6493</p>
      <div className="flex-cont">
        <div className="content">
          <p className="title">Sub: UK/USA Websites Guest Posting…</p>
          <p className="sub-title">
            Brief:vitae dicta sunt explicabo. Nemo.......{" "}
          </p>
          <p className="author">By : Kwak Seong-Min</p>
        </div>
        <div className="status">
          <p className="open-badge">Open</p>
          <p className="date">10/1/2024</p>
        </div>
      </div>
    </div>
  );
};

const TrendingCard = ({ className, title, subTitle, images = [] }) => {
  return (
    <div className={`trending-photos ${className}`}>
      <div className="head">
        <p className="heading"> {title} </p>
        <select>
          <option>Today</option>
        </select>
      </div>
      <p className="sub-title"> {subTitle} </p>
      <div className="flex-container">
        {images.map((i, index) => (
          <img src={trendingImg1} alt="" />
        ))}
        <img src={trendingImg2} alt="" />
        <img src={trendingImg2} alt="" />
      </div>
    </div>
  );
};

export { TicketCards };
