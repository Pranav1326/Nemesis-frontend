import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const token = localStorage.getItem("token");

  const getData = () => {
    axios
      .get(
        "https://internship-project-backend.herokuapp.com/home",{headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
              "Content-Type": "application/json",
      }})
      .then((result) => {
        setData(result.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="home">
      <div className="table">
        <table>
          <thead>
            <tr>
              <th> Username </th>
              <th> Email </th>
              <th> Mobile Number </th>
              <th> Address </th>
              <th> Delete Record </th>
            </tr>
          </thead>
          {data.map((user) => {
            return (
              <tbody key={user._id}>
                <tr>
                  <td> {user.username} </td>
                  <td> {user.email} </td>
                  <td> {user.cellnumber} </td>
                  <td> {user.address} </td>
                  <td>
                    <button className="delete-btn" onClick={
                        () => {
                          axios
                            .get(`https://internship-project-backend.herokuapp.com/delete/${user._id}`)
                            .then(() => {
                              getData();
                            })
                            .catch((err) => {
                              console.log("Error occured: " + err);
                            });
                        }
                      } 
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Home;
