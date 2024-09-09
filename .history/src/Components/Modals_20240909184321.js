/** @format */

import { Offcanvas } from "react-bootstrap";
import { userAvatar, verticalLogo } from "../assest";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarLinks } from "../constant/constant";

const MobileBar = ({ show, handleClose }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <section className="sidebar">
          <div className="logo-container">
            <img src={verticalLogo} alt="" />
          </div>

          <div className="links">
            {sidebarLinks.map((i, index) => (
              <div
                className={`item ${pathname === i.link ? "active" : ""}`}
                onClick={() => navigate(i.link)}
                key={index}
              >
                <img src={i.img} alt="" />
                <p> {i.title} </p>
              </div>
            ))}
          </div>

          <div className="admin-detail">
            <div className="profile">
              <img src={userAvatar} alt="" />
              <div>
                <p className="name">Gustavo Xavier</p>
                <p className="admin-badge">Admin</p>
              </div>
            </div>

            <div className="log-out">
              <i className="fa-solid fa-right-from-bracket"></i>
              <p>Log out</p>
            </div>
          </div>
        </section>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export { MobileBar };
