import React from 'react';

const WhyChoose = () => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-4 g-4 mt-5 container-fluid text-center">
                <div class="col">
                    <div class="card h-100 border-0">
                    <i class="fas fa-hospital-symbol fs-1"></i>
                        <div class="card-body">
                            <h5 class="card-title">CMore experience</h5>
                            <p class="card-text">Every year, more than a million people come to Mayo Clinic for care. Our highly specialized experts are deeply experienced in treating rare and complex conditions.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0">
                    <i class="fas fa-user-md fs-1"></i>
                        <div class="card-body">
                            <h5 class="card-title">The right answers</h5>
                            <p class="card-text">Successful treatment starts with an accurate diagnosis, and our experts take the time to get it right. A team of specialists will listen to your needs and evaluate your condition from every angle to make the very best plan for you.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0">
                    <i class="fas fa-heartbeat fs-1"></i>
                        <div class="card-body">
                            <h5 class="card-title">Seamless care</h5>
                            <p class="card-text">At Mayo Clinic, every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need. What might take months elsewhere can often be done in days here.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0">
                    <i class="fas fa-stethoscope fs-1"></i>
                        <div class="card-body">
                            <h5 class="card-title">Unparalleled expertise</h5>
                            <p class="card-text">Mayo Clinic experts are some of the best in the world. In the U.S. News & World Report rankings of top hospitals, Mayo Clinic is consistently ranked among the top hospitals in the nation.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center"><button className="disease-btn mt-4">Choose Mayo Clinic for health care</button></div>
        </div>
    );
};

export default WhyChoose;