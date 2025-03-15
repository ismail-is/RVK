import React, { useEffect, useState } from 'react'

const About = (props) => {
    const [aboutData, setAboutData] = useState({
        images: {
            image1: '',
            image2: '',
            ceoImage: ''
        },
        title: '',
        subtitle: '',
        paragraphs: [],
        ceoName: '',
        ceoTitle: ''
    });
    
    useEffect(() => {
        fetch('/about.json')
            .then(response => response.json())
            .then(data => {
                setAboutData({
                    images: {
                        image1: data.image1,
                        image2: data.image2,
                        ceoImage: data.ceoImage
                    },
                    title: data.title,
                    subtitle: data.subtitle,
                    paragraphs: data.paragraphs || [],
                    ceoName: data.ceoName,
                    ceoTitle: data.ceoTitle
                });
            });

    }, []);



    return (
        <section className="wpo-about-section section-padding" >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-left-image">
                            <img src='https://sailo-next.vercel.app/images/ab-1.jpg' alt="" />
                            <div className="ab-2">
                                <img src='https://sailo-next.vercel.app/images/ab-2.jpg' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>About Company</h2>
                            <h3>We Are Solving All of <br/>Your Business Problem</h3>
                            {/* {aboutData.paragraphs.map((paragraph, index) => ( */}
                            <p>Our industry's business policy encompasses the strategies, guidelines, and practices that technology companies use to achieve their goals and objectives. The policies may vary depending on the company's size, market position, and competitive landscape. Commodo erat amet vitae consectetur consectetur feugiat.</p>
                                <p >Tellus viverra eu risus ut ipsum magna sed odio elit. Sed sem purus tincidunt condimentum amet condimentum massa. Nunc vel nascetur id cras.</p>
                    
                            <div className="ceo-content">
                                {/* <div className="text">
                                    <h2>{aboutData.ceoName}</h2>
                                    <span>{aboutData.ceoTitle}</span>
                                </div> */}
                                {/* <div className="image">
                                    <img src={aboutData.images.ceoImage} alt="" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;


