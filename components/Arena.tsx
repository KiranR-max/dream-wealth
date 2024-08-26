import React from 'react'

const Arena = () => {
    const data = [
        { id: 1, name: 'Entry Fees', age: 30 },
        { id: 2, name: 'Total Slots', age: 25 },
        { id: 3, name: 'Time SLot', age: 35 },
        { id: 4, name: 'Remaining Slots', age: 40 },
      ];
  return (
    <>
    <div>Create Your Arena</div>
    <br></br>
    <div></div>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{row.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    
  )
}

export default Arena;
