import React from "react";
import moment from "moment";
import Table from "./Components/table/Table";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CoolComplaints from "./Components/CoolComplaints";
import FailureReason from "./Components/FailureReason";
import TailComplaint from "./Components/TailComplaint";
import "./Style.css";
import Pagetwocomponent from "./Components/pagetwocomponent";
import PageTwoTailComponent from "./PageTwoTailComponent";

import ErrorModel from "./Components/ThankYouFolder/Error";
import { Button } from "react-bootstrap";
import PhysicalRemark from "./Components/PhysicalRemaks/PhysicalRemark";
import { relativeTimeRounding } from "moment/moment";
import Header from "./Components/header/header";
import SearchBar from "./Components/searchbar/SearchBar";

function VehicleRegister() {
  const [text, settext] = useState();
  const [blackBg, setblackBg] = useState("none");
  const [tailBlackBg, setTailBlackBg] = useState("none");
  const [faillist, setfaillist] = useState("none");
  const [omplistf, setomplistf] = useState("block");
  const [completSubmite, setcompletSubmite] = useState();
  const [omdemo, setomdemo] = useState([]);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [checkedAllBox, setCheckedAllBox] = useState(false);
  const [checkedFirst, setCheckedFirst] = useState(false);
  const [checkedSecond, setCheckedSecond] = useState(false);
  const [searchTextInput, setSearchTextInput] = useState("");
  const [failureComplaints, SetFailureComplaints] = useState("");
  const [customerComplaint, setCustomerComplaint] = useState([]);
  const [failureComplaintsList, setFailureComplaintsList] = useState([]);
  const [TailLiftComplaint, setTailLiftComplaint] = useState([]);
  const [CustComplaint, setCustComplaint] = useState([]);
  const [pagetwocomplaintlist, setpagetwocomplainlist] = useState(false);
  const [msg, setMsg] = useState("");
  const [eValue, setEValue] = useState();
  const [arrayList, setArrayList] = useState([]);
  const [ListArray, setListArray] = useState([]);
  const [tailArrayList, setTailArrayList] = useState([]);
  const [tailCustomerComplaints, setTailCustomerComplaints] = useState();
  const [tailFailureComplaints, setTailFailureComplaints] = useState([]);
  const [close, setClose] = useState(true);

  // This function on Submit popup message .
  function submit() {
    setMsg({
      title: "Job Card Created Successfully.",
    });
  }

  // This function used to delete the complaint (minus button)
  const handleDelete = (index, e) => {
    setArrayList(arrayList.filter((v, i) => i !== index));
    if (index === 0) {
      setFailureComplaintsList([]);
    }
  };

  // This function used to delete the Failure reason (minus button)
  const handleDeleteFun = (index, e) => {
    setFailureComplaintsList(
      failureComplaintsList.filter((v, i) => i !== index)
    );
  };

  // This function used to cancel the customer complaint popup
  const compCancel = () => {
    setClose(false);
  };

  //  function used for multiple checkbox in Customer Catering Service table.
  const handleCheckedAll = () => {
    if (!checkedAllBox) {
      setCheckedAllBox(true);
      setCheckedFirst(true);
      setCheckedSecond(true);
    } else {
      setCheckedAllBox(false);
      setCheckedFirst(false);
      setCheckedSecond(false);
    }
  };

  // function used to click single checkbox in Customer Catering Service table

  const handleCheckedFirst = () => {
    if (!checkedFirst && checkedSecond) {
      setCheckedAllBox(true);
    } else {
      setCheckedAllBox(false);
    }
    setCheckedFirst(!checkedFirst);
  };

  //  function used to click single checkbox in Customer Catering Service table
  const handleCheckedSecond = () => {
    if (!checkedSecond && checkedFirst) {
      setCheckedAllBox(true);
    } else {
      setCheckedAllBox(false);
    }
    setCheckedSecond(!checkedSecond);
  };

  // used to getting the value for kt number
  const ktnum = (e) => {
    settext(e.target.value);
    setSearchTextInput(e.target.value);
    console.log(e.target.value);
  };

  // used to display the customer complaint and failure reason checkbox
  const complaint = () => {
    setblackBg("block");
    setClose(true);
    setomplistf("block");
  };

  const tailComplaint = () => {
    setTailBlackBg("block");
  };

  // const failure = () => {
  //   setblackBg("block")
  //   setTailBlackBg("block")
  //   setfaillist("block")
  // }

  const demooo = (e) => {
    setcompletSubmite(e.target.value);
  };
  // const helomk = (e) => {
  //   var value = e.target.value
  //   var checked = e.target.checked
  //   if (checked) {
  //     setomdemo([...omdemo, value])
  //   } else {
  //     setomdemo(omdemo.filter((e) => e !== value))
  //   }
  // }

  // function used to save the customer complaint to the table for cooling unit.
  const compSubmite = () => {
    if (!arrayList.includes(eValue))
      setArrayList((prev) => prev.concat(eValue));
    console.log(completSubmite);
    setCustomerComplaint(completSubmite);
    setblackBg("none");
    setomplistf("none");
  };

  // function used to save the customer complaint to tbale for tail lift
  const compTailSumbite = () => {
    if (!tailArrayList.includes(eValue))
      setTailArrayList((prev) => prev.concat(eValue));
    setTailBlackBg("none");
  };

  // used for popup after clicking on job card create button
  const errorHandler = () => {
    setMsg("");
  };

  const options = [
    {
      label: "Shabbir",
      value: "Shabbir",
    },
    {
      label: "Hafizullah",
      value: "Hafizullah",
    },
    {
      label: "Faisal",
      value: "Assigned to Foreman - Faisal",
    },
  ];

  const Select_option = [
    {
      id: 1,
      label1: " Shuwaikh Van 1",
      value: "Shuwaikh Van 1",
    },
    {
      id: 2,
      label2: "Shuwaikh Van 2",
      value: "Shuwaikh Van 2",
    },
  ];

  function Submit() {
    const tabledata = [
      {
        id: 1,
        UnitDetail: "Cooling Unit",
        KTNo: "17/30866",
        SerialNo: "VKA94286893",
        Chassis: " NK004102-F",
        Model: "CITIMAX-400",
        Date: "16.10.2022",
        WarrantyStart: "2021-06-27",
        WarrantyEnd: "2022-07-23",
        checked: "true",
      },
      {
        id: 2,
        UnitDetail: "Tail Lift",
        KTNo: "17/30866",
        SerialNo: "21084589",
        Chassis: "9031793-N",
        Model: "ALU,24V,1500KG",
        Date: "16.09.2022",
        WarrantyStart: "2021-06-27",
        WarrantyEnd: "2022-06-28",
        checked: "true",
      },
    ];

    if (searchTextInput === "17/30866") {
      setData(tabledata);
      setShow(true);
    } else {
      alert("Please Enter Correct Number");
    }
  }

  var name = " 915974 - BOUTIQAAT INTERNATIONAL CATERING SERVICES";

  const [checkedAll, setCheckedAll] = useState(false);

  const [checked, setChecked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  /* ################################################ */

  /* #### TOGGLES checK STATE BASED ON inputName #### */

  /* ################################################ */

  // used for checkbox in Customer Catering Service table
  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };

      newState[inputName] = !prevState[inputName];

      return newState;
    });
  };

  /* ###################################################### */

  /* #### CHECKS OR UNCHECKS ALL FROM SELECT ALL CLICK #### */

  /* ###################################################### */

  const selectAll = (value) => {
    setCheckedAll(value);

    setChecked((prevState) => {
      const newState = { ...prevState };

      for (const inputName in newState) {
        newState[inputName] = value;
      }

      return newState;
    });
  }; // IF YOU CHECK BOTH INDIVIDUALLY. IT WILL ACTIVATE THE checkedAll STATE // IF YOU UNCHECK ANY INDIVIDUALLY. IT WILL DE-ACTIVATE THE checkAll STATE

  /* ############################################# */

  /* #### EFFECT TO CONTROL CHECKED_ALL STATE #### */

  /* ############################################# */

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);

  const handleRadioButton = (e) => {
    setEValue(e.target.value);
  };

  const handleTailRadioButton = (e) => {
    setEValue(e.target.value);
  };

  useEffect(() => {
    console.log(TailLiftComplaint, "failureListr");
  }, [TailLiftComplaint]);

  useEffect(() => {
    console.log(failureComplaintsList, "failureList");
  }, [failureComplaintsList]);

  useEffect(() => {
    console.log(CustComplaint, "CustomerComplaint");
  }, [CustComplaint]);

  return (
    <>
      <div className="main_div">
        <Header name={"AnisurRahman"} />

        <SearchBar Submit={Submit} ktnum={ktnum} />
        {show && (
          <div className="hideshow">
            <div className="hideshow">
              <div className="page_two_table">
                <b>Location </b>
                <div className="drop_down_value">
                  <select className="drop_select">
                    {Select_option.map((option) => (
                      <option value={option.value}>
                        <b>{option.value}</b>
                      </option>
                    ))}
                  </select>
                </div>
                <Table
                  data={[data]}
                  toggleCheck={toggleCheck}
                  handleCheckedFirst={handleCheckedFirst}
                  checkedFirst={checkedFirst}
                  handleCheckedAll={handleCheckedAll}
                  selectAll={selectAll}
                  handleCheckedSecond={handleCheckedSecond}
                  checkedAllBox={checkedAllBox}
                  checkedSecond={checkedSecond}
                  name={"915974 - BOUTIQAAT INTERNATIONAL CATERING SERVICES"}
                />
              </div>

              <PhysicalRemark />

              {checkedFirst && (
                <CoolComplaints
                  complaint={complaint}
                  arrayList={arrayList}
                  failureComplaintsList={failureComplaintsList}
                  deleteRow={handleDelete}
                  deleteFailRow={handleDeleteFun}
                />
              )}
            </div>

            {checkedSecond && (
              <TailComplaint
                tailArrayList={tailArrayList}
                tailFailureComplaints={tailFailureComplaints}
                tailComplaint={tailComplaint}
              />
            )}
            {close && (
              <div className="main_black_div" style={{ display: blackBg }}>
                <div
                  className="page_two_complaint_list"
                  onChange={demooo}
                  style={{ display: omplistf }}
                >
                  <Pagetwocomponent
                    compSubmite={compSubmite}
                    failureComplaints={failureComplaints}
                    handleRadioButton={handleRadioButton}
                    compCancel={compCancel}
                    failureComplaintsList={failureComplaintsList}
                    setFailureComplaintsList={setFailureComplaintsList}
                    eValue={eValue}
                  />
                </div>
              </div>
            )}

            <div className="main_black_div" style={{ display: tailBlackBg }}>
              <div className="page_two_complaint_list">
                <PageTwoTailComponent
                  compTailSubmite={compTailSumbite}
                  handleTailRadioButton={handleTailRadioButton}
                  tailFailureComplaints={tailFailureComplaints}
                  setTailFailureComplaints={setTailFailureComplaints}
                  eValue={eValue}
                />
              </div>
            </div>

            <div className="drop_down_values">
              <b>Assign to Foreman - </b>
              <select className="Drop_select">
                {options.map((option) => (
                  <option value={option.value}>
                    <b>{option.label}</b>
                  </option>
                ))}
              </select>
            </div>

            {msg && (
              <ErrorModel
                title={msg.title}
                message={msg.message}
                onClick={errorHandler}
              />
            )}
            <div className="job_card">
              <button className="job_cardbtn" onClick={submit}>
                <b>Create Job Card</b>{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default VehicleRegister;
