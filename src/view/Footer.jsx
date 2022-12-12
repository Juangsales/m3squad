import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./css/Footer.module.css"
import FacebookIcon from "./media/facebook.png";
import InstagramIcon from "./media/instagram.png";
import TwitterIcon from "./media/twitter.png";
import YoutubeIcon from "./media/youtube.png";


const Footer = () => {
    return (
        <Row className={styles.Footer}>
            <footer className={styles.stickyFooter}>
                <Container className={styles.container}>
                    <Row className={styles.row}>
                        <Col className={styles.footerCol}>
                            <h4>Sobre</h4>
                            <ul>
                                <li><a href="/Sobre">Quem Somos</a></li>
                                <li><a href="/Qst">FAQ</a></li>
                                <li><a href="#">Política de Privacidade</a></li>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                            </ul>
                        </Col>
                        <Col className={styles.footerCol}>
                            <h4>follow us</h4>
                            <Col className={styles.socialLinks}>

                                <a href="#"><img alt="SocialMedia" src={FacebookIcon}
                            style={{
                                height: 25,
                                width: 25,
                            }} /></a> 
                                <a href="#"><img alt="SocialMedia" src={InstagramIcon}
                            style={{
                                height: 25,
                                width: 25,
                            }} /></a>
                                <a href="#"><img alt="SocialMedia" src={TwitterIcon}
                            style={{
                                height: 25,
                                width: 25,
                            }} /></a>
                                <a href="#"><img alt="SocialMedia" src={YoutubeIcon}
                            style={{
                                height: 25,
                                width: 25,
                            }} /></a>
                                {/*<a href="https://www.flaticon.com/free-icons/twitter" title="twitter icons">Twitter icons created by Freepik - Flaticon</a> */}
                            </Col>
                        </Col>
                        <Col className={styles.footerCol}>
                            <a>© DevPlay TV (2022). Todos os direitos reservados.</a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Row>
    )
}
export default Footer;
