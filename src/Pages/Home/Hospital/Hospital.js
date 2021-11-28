import React from 'react';
import './Hospital.css'

const Hospital = () => {
    return (
        <div className="hospital-container">
            <div class="row row-cols-1 row-cols-md-4 container-fluid g-4">
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <img src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2019/07/25/00/06/ranked-hospital-tile-520x360.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Mayo Clinic is the No. 1
                                hospital overall</h5>
                            <hr />
                            <a href="">More about our #1 ranking</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <img src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2018/05/25/18/18/international-services-2x-3753028_0001.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">The trusted leader
                                in healthcare worldwide</h5>
                            <hr />
                            <a href="">International Services at Mayo Clinic</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <img src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2021/11/23/15/30/dev-aml-2111-giving-tuesday-tile-ad-520x360.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Your giving will help transform health care.</h5>
                            <hr />
                            <a href="">Give now to support research and care</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <img src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2020/09/04/14/56/coronavirus-map-tile-520x360.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Track the latest COVID-19 trends.</h5>
                            <hr />
                            <a href="">Explore the map</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hospital;