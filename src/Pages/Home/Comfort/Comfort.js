import React from 'react';
import './Comfort.css'

const Comfort = () => {
    return (
        <div className="comfort text-light mt-5">
            <div className="p-5">
                <h2>Comfort</h2>
                <hr className="w-50" />
                <p>Our Mission is to provide excellent health care services to all of our clients with dedication to meet their expectation. <br />
                    After inauguration in the year 1993 COMFORT started to take a lead in providing advanced health care services. The professional standard and the expertise on health care facilities are the pillars of success of Comfort. It is noticeable that a gap exists between patient expectations and provided health care services in Bangladesh. As a result, a remarkable number of people go abroad to avail quality medical services. Understanding this phenomenon, Comfort is committed to reduce the gap as much as possible;</p>
                <button className="btn btn-primary">Read More</button>
            </div>
            <div className="p-3">
                <img className="img-fluid" src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
        </div>
    );
};

export default Comfort;