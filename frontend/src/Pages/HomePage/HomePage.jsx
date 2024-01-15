import React, { useEffect, useState } from 'react';
import LayoutComp from '../../component/LayoutComp';
import HomeBanner from '../../component/HomeBanner/HomeBanner';
import axios from 'axios';


const HomePage = () => {
  const [data, setData] = useState([]);

  //  useEffect ((history) => {
  //       const userInfo = localStorage.getItem("userInfo");

  //       if (userInfo) {
  //           history.push("/");
  //       }
  //   });


  useEffect(() => {
    fetchBackendApiData();
  }, []);

  const fetchBackendApiData = async () => {
    try {
      const resp = await axios.get('/api/notes/');
      setData(resp.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
      <LayoutComp>
        <HomeBanner />
           <div className='test'>
            <table>
                
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Married</th>
                        <th>Email</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                    <tbody>
                        {data.map((item,i)=>(
                            <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.married}</td>
                            <td>{item.email}</td>
                            <td> {item.designation}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>
               
            </div>
      </LayoutComp>
   
    </>
  );
};

export default HomePage;
