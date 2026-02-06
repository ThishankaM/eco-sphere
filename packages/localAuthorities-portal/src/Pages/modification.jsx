import { useEffect } from 'react'

function modification() {
  useEffect(() => {
    const button = document.querySelector('button');
    if (button) {
      button.addEventListener('click', function() {
        const table = document.querySelector('table');
        const rows = Array.from(table.querySelectorAll('tr')).slice(1);
        
        rows.sort((a, b) => {
          const scoreA = parseInt(a.cells[1].textContent);
          const scoreB = parseInt(b.cells[1].textContent);
          return scoreB - scoreA;
        });
        
        rows.forEach(row => table.appendChild(row));
      });
    }
  }, []);

  return (
    <div>
      <table border="1">
        <tbody>
          <tr><th>Name</th><th>Score</th></tr>
          <tr><td>Thishanka</td><td>75</td></tr>
          <tr><td>Sanudinee</td><td>85</td></tr>
          <tr><td>Sachira</td><td>80</td></tr>
          <tr><td>Oshadha</td><td>90</td></tr>
          <tr><td>Chethana</td><td>100</td></tr>
        </tbody>
      </table>
      
      <br />
      <button>Decending</button>
    </div>
  )
}

modification.propTypes = {}

export default modification
