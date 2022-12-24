import React, { useState } from "react";
import moment from "moment";

function Table(props) {

  const data = props;
  console.log(data.data[0][0].Chassis);



  return (
    <>
      <span>
        {" "}
        Customer <p> {props.name} </p>
      </span>

      <table>
        <thead className="Vehicle_details">
          <tr>
            <th>
              {" "}
              <input
                type="checkbox"
                className="chck1"
                onChange={(event) => {
                  props.handleCheckedAll();
                  props.selectAll(event.target.checked);
                }}
                checked={props.checkedAllBox}
              />
            </th>
            <th className="Service">Unit Details</th>
            <th className="Service">KT No.</th>
            <th className="Service">Serial No.</th>
            <th className="Service">Chassis</th>
            <th className="Service">Model</th>
            <th className="Service">Date</th>
            <th className="Service">Warranty Start</th>
            <th className="Service">Warranty End</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="tab">
              {" "}
              <input
                type="checkbox"
                name="id"
                className="chck1"
                onChange={() => {
                  props.toggleCheck(data.data[0][0].id);
                  props.handleCheckedFirst();
                }}
                checked={props.checkedFirst}
              />
            </th>
            <td>{data.data[0][0].UnitDetail}</td>
            <td>{data.data[0][0].KTNo}</td>
            <td>{data.data[0][0].SerialNo} </td>
            <td>{data.data[0][0].Chassis} </td>
            <td> {data.data[0][0].Model} </td>
            <td> {data.data[0][0].Date}</td>
            {moment(data.data[0][0].WarrantyStart).unix() <
            moment(data.data[0][0].WarrantyEnd).unix() ? (
              <td style={{ backgroundColor: " rgb(188, 242, 204)" }}>
                {moment(data.data[0][0].WarrantyStart).format("DD.MM.YYYY")}
              </td>
            ) : (
              <td style={{ backgroundColor: "rgb(255, 190, 186)" }}>
                {data.data[0][0].WarrantyStart}
              </td>
            )}
            {data.data[0][0].WarrantyEnd && (
              <td style={{ backgroundColor: "rgb(255, 190, 186)" }}>
                {moment(data.data[0][0].WarrantyEnd).format("DD.MM.YYYY")}
              </td>
            )}
          </tr>

          <tr>
            <th className="tab">
              {" "}
              <input
                type="checkbox"
                name="id"
                className="chck1"
                onChange={() => {
                  props.toggleCheck(data.data[0][1].id);
                  props.handleCheckedSecond();
                }}
                checked={props.checkedSecond}
              />
            </th>
            <td>{data.data[0][1].UnitDetail}</td>
            <td>{data.data[0][1].KTNo}</td>
            <td>{data.data[0][1].SerialNo} </td>
            <td>{data.data[0][1].Chassis} </td>
            <td> {data.data[0][1].Model} </td>
            <td> {data.data[0][1].Date}</td>
            {moment(data.data[0][1].WarrantyStart).unix() <
            moment(data.data[0][1].WarrantyEnd).unix() ? (
              <td style={{ backgroundColor: " rgb(188, 242, 204)" }}>
                {moment(data.data[0][1].WarrantyStart).format("DD.MM.YYYY")}
              </td>
            ) : (
              <td style={{ backgroundColor: "rgb(255, 190, 186)" }}>
                {data.data[0][1].WarrantyStart}
              </td>
            )}
            {data.data[0][1].WarrantyEnd && (
              <td style={{ backgroundColor: "rgb(255, 190, 186)" }}>
                {moment(data.data[0][1].WarrantyEnd).format("DD.MM.YYYY")}
              </td>
            )}
          </tr>
        </tbody>
      </table>
      {/* <span>
        {" "}
        Customer <p> {props.name} </p>
      </span>

      <table>
        <thead className="Vehicle_details">
          <tr>
            <th>
              {" "}
              <input
                type="checkbox"
                className="chck1"
                onChange={(event) => {
                  props.handleCheckedAll();
                  props.selectAll(event.target.checked);
                }}
                checked={props.checkedAllBox}
              />
            </th>
            <th className="Service">Unit Details</th>
            <th className="Service">KT No.</th>
            <th className="Service">Serial No.</th>
            <th className="Service">Chassis</th>
            <th className="Service">Model</th>
            <th className="Service">Date</th>
            <th className="Service">Warranty Start</th>
            <th className="Service">Warranty End</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((items) => {
            return (
              <tr>
                <th className="tab">
                  {" "}
                  <input
                    type="checkbox"
                    name="id"
                    className="chck1"
                    // onChange={() => {
                    //   toggleCheck(data[0].id);
                    //   handleCheckedFirst();
                    // }}
                    // checked={checkedFirst}
                  />
                </th>
                <td>{items.UnitDetail}</td>
                <td>{items.KTNo}</td>
                <td>{items.SerialNo}</td>
                <td>{items.Chassis}</td>
                <td>{items.Model}</td>
                <td>{items.Date}</td>
                {items.WarrantyStart < items.WarrantyEnd ? (
                  <td style={{ backgroundColor: " rgb(188, 242, 204)" }}>
                    {items.WarrantyStart}
                  </td>
                ) : (
                  <td style={{ backgroundColor: "rgb(255, 190, 186)" }}>
                    {items.WarrantyStart}
                  </td>
                )}
                {items.WarrantyEnd >= items.WarrantyStart ? (
                  <td style={{ backgroundColor: "rgb(255, 190, 186)" }}>
                    {items.WarrantyEnd}
                  </td>
                ) : (
                  <td style={{ backgroundColor: "rgb(188, 242, 204)" }}>dsv</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </>
  );
}

export default Table;
