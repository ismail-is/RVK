import React from 'react';
import CountUp from 'react-countup';

// images
import icon1 from '../../images/feature/1.svg';
import icon2 from '../../images/feature/2.svg';
import icon3 from '../../images/feature/3.svg';
import icon4 from '../../images/feature/4.svg';

const FunFact = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="wraper">
                <div className="item">
                    <div className="icon">
                        <img src={icon1} alt="" />
                    </div>
                    <div className="content">
                        <h2><CountUp end={500} enableScrollSpy/>+</h2>
                        <h3>Successfully</h3>
                        <span>completed projects</span>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <img src={ icon2 } alt="" />
                    </div>
                    <div className="content">
                        <h2><CountUp end={300} enableScrollSpy/>+</h2>
                        <h3>Highly</h3>
                        <span>specialised employees</span>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <img src={ icon3 } alt="" />
                    </div>
                    <div className="content">
                        <h2><CountUp end={226} enableScrollSpy/>+</h2>
                        <h3>Countries</h3>
                        <span>around the world</span>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <img src={ icon4 } alt="" />
                    </div>
                    <div className="content">
                        <h2><CountUp end={25} enableScrollSpy/>+</h2>
                        <h3>Historical</h3>
                        <span>Award Winning</span>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default FunFact;