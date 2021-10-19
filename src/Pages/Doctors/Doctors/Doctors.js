import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <div className="container mt-5">
                <h2>FIND YOUR DOCTOR</h2>
                <hr className="w-25" />
                <p className="text-danger fs-5">Choose a department or type doctors name.</p>
                <form>
                    <div class="mb-3">
                        <label class="form-label fw-bold">Department</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold">Doctor Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <button type="submit" class="btn btn-primary">Search Doctor</button>
                </form>
                <h1 className="mt-5 text-center text-danger">Our Doctors</h1>
                <hr className="w-25 mx-auto" />
            </div>
            <div className="row row-cols-1 row-cols-md-2 mx-auto gx-2 gy-1 container">
                
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;