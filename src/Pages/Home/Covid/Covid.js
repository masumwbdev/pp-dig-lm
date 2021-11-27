import React from 'react';

const Covid = () => {
    return (
        <div>
            <h2 className="text-center mb-4 mt-5">COVID-19 Vaccine Information</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4 container-fluid mx-auto">
                <div class="col">
                    <div class="card h-100 border-0 shadow-lg p-2">
                        <div class="card-body">
                            <h3 class="card-title">Vaccination options for Mayo Clinic patients</h3>
                            <p class="card-text fs-5">COVID-19 vaccination options and guidelines vary widely by location and may change over time. See the latest information specific to Mayo Clinic campuses:</p>
                            <a href="www" alt="">Arizona</a><br />
                            <a href="www" alt="">Florida</a><br />
                            <a href="www" alt="">Rochester</a><br />
                            <a href="www" alt="">Mayo Clinic Health System</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow-lg p-2">
                        <div class="card-body">
                            <h3 class="card-title">Not a Mayo Clinic patient?</h3>
                            <p class="card-text fs-5">If you're not a Mayo Clinic patient, check your public health department's website for the most complete information.</p>
                            <select>
                                <option value="tarritory">Choose a state or territory</option>
                                <option value="saab">Mymensingh</option>
                                <option value="opel">Dhaka</option>
                                <option value="audi">Rangpur</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Covid;

