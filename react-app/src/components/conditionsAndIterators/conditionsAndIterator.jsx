export function ConditionsIterator() {
    var studentDetails = [
    {name: 'Raj', age: 20, gender: 'Male', avg: 45.6},
    {name: 'Teena', age: 20, gender: 'Female', avg: 20},
    {name: 'Meena', age: 20, gender: 'Female',avg: 40},
    {name: 'Krish', age: 20, gender: 'Male', avg: 12},
    {name: 'Suresh', age: 20, gender: 'Male', avg: 90},
    {name: 'Prasad', age: 20, gender: 'Male', avg: 55}
  ];

  var UserProfile = {
    name: 'Prasad',
    location: 'Vizag',
    pincode: 586566,
    gender: 'Male',
    designation: 'Faculty'
  };
  return (
    <>
      <h3>Registered Student details</h3>
      <table className='table table-bordered mycustomtable'>
          <thead>
              <tr>
                  <th>Sno</th>
                  <th>
                      Name
                  </th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Avg</th>
                  <th>Pass/Fail</th>
              </tr>
          </thead>
          <tbody>
              {
                  studentDetails.map((detail, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{detail.name}</td>
                        <td>{detail.age}</td>
                        <td>{detail.gender}</td>
                        <td>{detail.avg}</td>
                        {
                          (detail.avg >= 40) ? 
                            <td>Passed</td>
                            :
                            <td>Failed</td>
                        }
                    </tr>
                  ))
              }
          </tbody>
      </table>

    </>
  )
}