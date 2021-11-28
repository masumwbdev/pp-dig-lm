import React from 'react';
import './Diseases.css'

const Diseases = () => {
    return (
        <div className="condition-container">
            <div>
                <h1 className="text-center">Find Diseases & Conditions</h1>
                <hr className="horizontal mb-5" />
                <div className="row row-cols-1 row-cols-md-2 g-4 container-fluid mx-auto">
                    <div className="col">
                        <h3 className="mb-4">Find a disease or condition by its first letter</h3>
                        <button className="word-btn">A</button>
                        <button className="word-btn">B</button>
                        <button className="word-btn">C</button>
                        <button className="word-btn">D</button>
                        <button className="word-btn">E</button>
                        <button className="word-btn">F</button>
                        <button className="word-btn">G</button>
                        <button className="word-btn">H</button>
                        <button className="word-btn">I</button>
                        <button className="word-btn">J</button>
                        <button className="word-btn">K</button>
                        <button className="word-btn">L</button>
                        <button className="word-btn">M</button>
                        <button className="word-btn">N</button>
                        <button className="word-btn">O</button>
                        <button className="word-btn">P</button>
                        <button className="word-btn">Q</button>
                        <button className="word-btn">R</button>
                        <button className="word-btn">S</button>
                        <button className="word-btn">T</button>
                        <button className="word-btn">U</button>
                        <button className="word-btn">V</button>
                        <button className="word-btn">W</button>
                        <button className="word-btn">X</button>
                        <button className="word-btn">Y</button>
                        <button className="word-btn">Z</button>
                        <button className="word-btn">#</button>
                        <h4 className="mt-4 mb-4">Check your symptoms to find a possible cause</h4>
                        <button className="disease-btn">Try the Symptom Checker</button>
                    </div>
                    <div className="col">
                        <h4 className="ms-5 mb-4">Featured topics</h4>
                        <div className="d-lg-flex justify-content-around">
                            <div className="ancor-link">
                                <a href="">Bone marrow transplant</a><br />
                                <a href="">Brain aneurysm</a><br />
                                <a href="">Brain tumor</a><br />
                                <a href="">Breast cancer</a><br />
                                <a href="">Colon cancer</a><br />
                                <a href="">Congenital heart disease</a>
                            </div>
                            <div className="ancor-link">
                                <a href="">Glioma</a><br />
                                <a href="">Heart arrhythmia</a><br />
                                <a href="">Heart valve disease</a><br />
                                <a href="">Living donor transplant</a><br />
                                <a href="">Lung transplant</a><br />
                                <a href="">Rectal cancer</a><br />
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button className="disease-btn mt-3">See More Diseases and Conditions</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Diseases;