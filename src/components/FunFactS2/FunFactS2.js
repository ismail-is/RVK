import React from 'react';
import CountUp from 'react-countup';

import icon5 from '../../images/feature/5.svg';
import icon6 from '../../images/feature/6.svg';
import icon7 from '../../images/feature/7.svg';
import icon8 from '../../images/feature/8.svg';



const FunFactS2 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="wraper">
                <div className="item">
                    <div className="icon">
                        <img src={icon5} alt="" />
                    </div>
                    <div className="content">
                        <h2><CountUp end={500} enableScrollSpy />+</h2>
                        <h3>Successfully</h3>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <img src={icon6} alt="" />
                    </div>
                    <div className="content">
                        <h2><CountUp end={300} enableScrollSpy />+</h2>
                        <h3>Highly</h3>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <img src={icon7} alt="" />
                    </div>
                    <div className="content">
                        <h2><CountUp end={226} enableScrollSpy />+</h2>
                        <h3>Countries</h3>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <img src={icon8} alt="" />
                    </div>
                    <div className="content">
                        <h2><CountUp end={25} enableScrollSpy />+</h2>
                        <h3>Historical</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFactS2;