import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import styles from "./css/Home.module.css";
import Top1 from "./imagens/top1.png";
import Top2 from "./imagens/top2.jpg";
import Top3 from "./imagens/top3.jpg";

const items = [
  {
    src: "https://hbomax-images.warnermediacdn.com/2021-11/hero_dsk_0.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=2800",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "https://i.ytimg.com/vi/8d2EmV46mmo/maxresdefault.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://hbomax-images.warnermediacdn.com/images/GYGP7pwQv_ojDXAEAAAFc/tileburnedin?size=1280x720&partner=hbomaxcom&v=bd4e8b8745a1fcccbb19d76012ae572e&host=art-gallery.api.hbo.com&language=pt-br&w=1280",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

function Home(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          className="d-block w-100 ImageCarousel"
          src={item.src}
          alt={item.altText}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  document.title = "Home";
  return (
    <Row className={styles.homePage}>
      <Row className={styles.slideCarousel}>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Row>
     
      <Row className={styles.spotLight}>
        
        <Card className={styles.cd}>
          <img className={styles.img} alt="Card" src={Top1} />

         
            <h5>Vingadores: Ultimato</h5>
            <div className={styles.cardTxt}>
              <a>
                Após Thanos eliminar metade das criaturas vivas em Vingadores:
                Guerra Infinita, os heróis precisam... Ler mais
              </a>
            </div>
          </Card>
          <Card className={styles.cd}>
          <img className={styles.img} alt="Card" src={Top2} />
          
            <h5>Liga da Justiça</h5>
            <div className={styles.cardTxt}>
              <a>
                impulsionado pela restauração de sua fé na humanidade e
                inspirado pelo ato altruísta do Superman (Henry Cavill), Bruce
                Wayne (Ben Affleck) convoca sua nova aliada Diana Prince (Gal
                Gadot)... Ler mais
              </a>
            </div>
          </Card>
          <Card className={styles.cd}>
          <img className={styles.img} alt="Card" src={Top3} />
          
            <h5>Hereditário</h5>
            <div className={styles.cardTxt}>
              <a>
                Após a morte da reclusa avó, a família Graham começa a desvendar
                algumas coisas. Mesmo após a partida da matriarca... Ler mais
              </a>
            </div>
          </Card>
          </Row>
          </Row>
        
    
  );
}

export default Home;
