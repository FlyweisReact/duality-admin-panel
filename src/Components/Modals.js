/** @format */

import { Offcanvas, Modal } from "react-bootstrap";
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
        <section className="sidebar" style={{ width: "100%" }}>
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
            <div
              className="profile"
              onClick={() => navigate("/update-profile")}
            >
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

const EditNotification = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="my-modal">
        <div className="head">
          <p className="title">Edit notification</p>
          <i className="fa-solid fa-xmark" onClick={handleClose}></i>
        </div>
        <section className="update-profile-section space-bg">
          <form>
            <div className="input-div">
              <p>Title</p>
              <input type={"text"} />
            </div>
            <div className="input-div">
              <p>Content</p>
              <textarea />
            </div>
            <div className="input-div">
              <p>Status</p>
              <select>
                <option>Read</option>
                <option>Unread</option>
              </select>
            </div>
            <button className="submit-btn">Update</button>
          </form>
        </section>
      </Modal.Body>
    </Modal>
  );
};

const EditSupport = ({ show, handleClose, isEdit }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="my-modal edit-help-support-mod">
        <div className="head">
          <p className="title">
            {" "}
            {isEdit ? "Edit help & support" : "Add new"}{" "}
          </p>
          <i className="fa-solid fa-xmark" onClick={handleClose}></i>
        </div>
        <section className="update-profile-section space-bg">
          <form>
            <div className="flexbox-container">
              <div className="input-div">
                <p>Mobile No</p>
                <input type={"text"} />
              </div>
              <div className="input-div">
                <p>Email</p>
                <input type={"text"} />
              </div>
              <div className="input-div">
                <p>Address</p>
                <input type={"text"} />
              </div>
            </div>

            <button className="submit-btn">
              {isEdit ? "Update" : "Create new"}
            </button>
          </form>
        </section>
      </Modal.Body>
    </Modal>
  );
};

const EditFaq = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="my-modal edit-help-support-mod">
        <div className="head">
          <p className="title">Edit FAQ</p>
          <i className="fa-solid fa-xmark" onClick={handleClose}></i>
        </div>
        <section className="update-profile-section space-bg">
          <form>
            <div className="input-div">
              <p>Question</p>
              <input
                type={"text"}
                value="Mauris id nibh eu fermentum mattis purus?"
              />
            </div>

            <div className="input-div">
              <p>Answer</p>
              <textarea value="Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. " />
            </div>

            <button className="submit-btn">Update</button>
          </form>
        </section>
      </Modal.Body>
    </Modal>
  );
};

export { MobileBar, EditNotification, EditSupport, EditFaq };
