import React from 'react';
import './Sealsteam.css'
import img1 from "../../../image/team-1.jpg"
import img2 from "../../../image/t02.jpg"
import img3 from "../../../image/t03.jpg"
import img4 from "../../../image/t04.jpg"
const Sealsteam = () => {
    return (
        <div>
            <h1 className='about-heading'>Our Seals Team </h1>
            <div className="seals-container">
            <div className="card" >
            <img className="card-img-top" src={img1} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Alex Leman</h5>
             <p className="card-text">A business is only as good as its leadership and whilst it takes many hands to make a company work, CEOs hold the majority of the responsibility and power in any organisation.</p>
   
            </div>
            </div>
            <div className="card" >
            <img className="card-img-top" src={img2} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Digeao JohN</h5>
             <p className="card-text">When it comes to healthcare, people have higher and higher standards. They need to be engaged and understood to ensure the treatment process is as smooth as possible. </p>
   
            </div>
            </div>
            <div className="card" >
            <img className="card-img-top" src={img3} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Liza Co-Funder</h5>
             <p className="card-text">The impact of the COVID-19 pandemic left almost no industry sectors unscathed. The increased financial burden on consumers, the rising production costs.</p>
   
            </div>
            </div>
            <div className="card" >
            <img className="card-img-top" src={img4} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Alex Heary</h5>
             <p className="card-text">Automated webinars start at automated times, on a predetermined schedule, playing an interactive webinar that was recorded previously.</p>
   
            </div>
            </div>
             
            </div>
        </div>
    );
};

export default Sealsteam;