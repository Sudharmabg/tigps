import React from 'react';
import { Link } from 'react-router-dom';
import { getAllSchools } from '../config/schoolsConfig';

function SchoolsListPage() {
  const schools = getAllSchools();

  return (
    <section className="schools-list-page py-5">
      <div className="container">
        <h1 className="text-center mb-5">All Schools</h1>
        <div className="row g-4">
          {schools.map((school) => (
            <div key={school.id} className="col-md-4">
              <Link to={`/schools/${school.id}`} className="school-card">
                <img src={school.heroImage} alt={school.name} />
                <div className="school-info">
                  <h4>{school.name}</h4>
                  <p>{school.address}</p>
                  <p>Contact: {school.contact}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SchoolsListPage;
