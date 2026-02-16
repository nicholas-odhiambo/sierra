import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/features">Features</Link>
      <Link to="/integrations">Integrations</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/help">Help</Link>
      <Link to="contact/">Contact</Link>
    </>
  );
};
