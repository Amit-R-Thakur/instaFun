import React, { useEffect } from "react";
import Header from "../header/Header";
import "./database.css";
import axios from "axios";
import { useState } from "react";
export default function Database() {
  const [databaseData, setDatabaseData] = useState([]);

  useEffect(async () => {
    const data = await axios
      .get("http://localhost:4001/datafromdatabase")
      .catch((err) => {
        console.log(err);
      });
    setDatabaseData(data.data);
  }, []);
  console.log(databaseData);

  return (
    <>
      <Header />
      <div className="DatabaseMainDiv">
        <div className="MainData">
          <div className="DatabaseHeader">
            <h1>Data from Database</h1>
          </div>
          <div className="DatabaseContent">
            <table>
              <tr>
                <th>FullName</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Password</th>
              </tr>
              {databaseData.map((e) => (
                <tr>
                  <td>{e.fullname}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile}</td>
                  <td>{e.password}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
