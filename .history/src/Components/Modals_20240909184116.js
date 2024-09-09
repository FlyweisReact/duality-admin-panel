/** @format */

import { Offcanvas } from "react-bootstrap";
import {
  homeLayout,
  userAvatar,
  verticalLogo,
  userIcon,
  bellIcon,
  reportIcon,
  serviceIcon,
  queryIcon,
  termIcon,
  privacyIcon,
  faqIcon,
} from "../assest";
import { useLocation, useNavigate } from "react-router-dom";

const MobileBar = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>

      </Offcanvas.Body>
    </Offcanvas>
  );
};

export { MobileBar };
