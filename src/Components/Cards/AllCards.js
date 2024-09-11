/** @format */

import { graphDown, graphUp } from "../../assest";

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
          <img src={i} key={`trending${index}`} alt="" />
        ))}
      </div>
    </div>
  );
};

const DashboardCard = ({
  title,
  count,
  percentage,
  isUp,
  bg,
  onClickEvent,
}) => {
  return (
    <div
      className="dashboard-card"
      style={{
        backgroundColor: bg,
        cursor: onClickEvent ? "pointer" : "default",
      }}
      onClick={onClickEvent}
    >
      <div className="counts">
        <p className="sub-heading">{title}</p>
        <p className="heading">{count}</p>
      </div>
      {percentage ? (
        <div className={`up-skill ${isUp ? "up" : "down"}`}>
          <p className="count">{percentage}</p>
          {isUp ? <img src={graphUp} alt="" /> : <img src={graphDown} alt="" />}
        </div>
      ) : (
        <div className="up-skill" />
      )}
    </div>
  );
};

export { TicketCards, TrendingCard, DashboardCard };
