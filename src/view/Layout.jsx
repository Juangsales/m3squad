import { Outlet } from "react-router-dom";
import { Navbar, NavbarBrand, Button, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/Layout.module.css";
import Logo from "./media/logo.png";

const Layout = () => {
  return (
    <>
      <Navbar className={styles.header}>
        <Row className={styles.row}>
          <div className={styles.navMenu}>
            <NavbarBrand href="/">
              <img className={styles.navLogo} alt="DevPlay TV" src={Logo} />
            </NavbarBrand>
            <Button className={styles.btn} color="none" href="/" tag="a">
              <a>
              <span style={{ color: "#e91e63" }}>&#123;</span> Home <span style={{ color: "#e91e63" }}>&#125;</span>
              </a>
            </Button>{" "}
            <Button className={styles.btn} color="none" href="/Filmes" tag="a">
              <a><span style={{ color: "#e91e63" }}>&#123;</span> Filmes <span style={{ color: "#e91e63" }}>&#125;</span></a>
            </Button>{" "}
            <Button className={styles.btn} color="none" href="/Sobre" tag="a">
              <a><span style={{ color: "#e91e63" }}>&#123;</span> Sobre <span style={{ color: "#e91e63" }}>&#125;</span></a>
            </Button>{" "}
            <Button className={styles.btn} color="none" href="/Contato" tag="a">
              <a><span style={{ color: "#e91e63" }}>&#123;</span> Contato <span style={{ color: "#e91e63" }}>&#125;</span></a>
            </Button>{" "}
            <div className={styles.searchBox}>
              <input
                className={styles.searchTxt}
                type="text"
                name=""
                placeholder="Search"
              />
              <a className={styles.searchBtn} href="#">
                <i><a></a></i>
              </a>
            </div>
          </div>
        </Row>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;
