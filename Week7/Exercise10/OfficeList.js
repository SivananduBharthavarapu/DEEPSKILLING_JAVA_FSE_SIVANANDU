import React from 'react';

// Heading element using JSX
const heading = <h1>🏢 Office Space Rental Listings</h1>;

// Image element using JSX
//onst imageUrl = "https://via.placeholder.com/600x200?text=Office+Space+Rental";
//const imageElement = <img src={imageUrl} alt="Office Space" style={{ width: '100%', borderRadius: '8px' }} />;

// List of office objects
const offices = [
  { name: "WeWork", rent: 45000, address: "Bangalore, MG Road" },
  { name: "Regus", rent: 72000, address: "Hyderabad, Banjara Hills" },
  { name: "91Springboard", rent: 55000, address: "Mumbai, Andheri" },
  { name: "Smartworks", rent: 80000, address: "Delhi, Connaught Place" }
];

function OfficeList() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {heading}
      

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {offices.map((office, index) => {
          // Conditional inline style for rent
          const rentStyle = {
            color: office.rent < 60000 ? 'red' : 'green',
            fontWeight: 'bold'
          };

          return (
            <li key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
              <h3>{office.name}</h3>
              <p><strong>Address:</strong> {office.address}</p>
              <p><strong>Rent:</strong> <span style={rentStyle}>₹{office.rent}</span></p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OfficeList;
