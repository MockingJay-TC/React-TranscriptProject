import "./Navbar.css";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
       
        <a className="active_link" href="#">
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <a href="#!">
          <img width="30" src='/assets/avatar.svg' alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
