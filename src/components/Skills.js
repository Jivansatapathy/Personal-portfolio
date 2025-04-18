import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Over the past few years, I have honed my abilities in Python development, content creation, and web application development. My focus on delivering efficient solutions, automating processes, and crafting compelling user-centric content sets me apart. I take pride in creating SEO-optimized, audience-engaging content while developing innovative, high-performing applications that solve real-world problems.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Python" />
                                <h5>Python Development & Automation</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Content" />
                                <h5>Content Writing & SEO Optimization</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Web" />
                                <h5>Web Development & User-Centric Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Leader" />
                                <h5>Leadership & Collaboration</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Descriptive" />
    </section>
  )
}
