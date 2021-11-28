import React from 'react';
import covidImg from '../../../images/covid.jpg'

const CovidTwo = () => {
    return (
        <div>
            <h2 className="text-center mb-4 mt-5">COVID-19 Vaccine Information</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4 container-fluid mx-auto align-items-center">
                <div class="col">
                    <div class="card h-100 border-0">
                        <div class="card-body">
                            <h1 class="card-title">New COVID Variant Drives U.S. Travel Bans</h1>
                            <p class="card-text fs-5">Omicron -- a new “variant of concern” -- could be more contagious, cause more severe disease and reduce the efficacy of vaccines and treatments.</p>
                            <a href="www" alt="">New COVID-19 Cases in Kids Continue to Rise</a><br />
                            <a href="www" alt="">5th COVID Surge Ahead Fuels 'Already Raging Fire’</a>
                            
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0">
                            <img className="img-fluid" src={covidImg} alt="" />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default CovidTwo;