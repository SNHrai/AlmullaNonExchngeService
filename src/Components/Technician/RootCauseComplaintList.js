import React, { useState } from "react";

function RootCauseComplaintList(props) {

    const {setRootCauseComplaint, rootCauseComplaintList, loseBelt, setLoseBelt, noBelt, setNoBelt,setbeltIssue, beltIssue, changeBelt, setChangeBelt } = props;



  const handleRootCauseComplaintList = (e, fail) => {
    if (!fail) {
        setRootCauseComplaint((prev) => prev.concat(e.target.value));
    } else {
        setRootCauseComplaint((prev) =>
        prev.filter((item) => {
          return e.target.value !== item;
        })
      );
    }
  };



  return (
    <>
   
      <div className="Fail_reason" style={{ marginTop : "10rem"}}>
        <h3 className="freason">Probable Root Cause</h3>
        <div className="Engine_oil_Drain">
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            value="lose Belt"
            className="inpt"
            defaultChecked={loseBelt}
            onClick={() => setLoseBelt(!loseBelt)}
            onChange={(e) => handleRootCauseComplaintList(e, loseBelt)}
          />
          <p className="lable"> lose Belt </p>
        </div>
        <div className="Engine_oil_hose">
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            value="No Belt"
            className="inpt"
            defaultChecked={noBelt}
            onClick={() => setNoBelt(!noBelt)}
            onChange={(e) => handleRootCauseComplaintList(e, noBelt)}
          />
          <p className="lable"> No Belt </p>
        </div>
        <div className="Engine_cylinder_head">
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            value=" Belt issue "
            className="inpt"
            defaultChecked={beltIssue}
            onClick={() => setbeltIssue(!beltIssue)}
            onChange={(e) =>
              handleRootCauseComplaintList(e, beltIssue)
            }
          />
          <p className="lable"> Belt issue </p>
        </div>
        <div className="Engine_oil_filter_leak">
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            value="Changing Belt"
            className="inpt"
            defaultChecked={changeBelt}
            onClick={() => setChangeBelt(!changeBelt)}
            onChange={(e) => handleRootCauseComplaintList(e, changeBelt)}
          />
          <p className="lable"> Changing Belt</p>
        </div>
      </div>
      
    </>
  );
}

export default RootCauseComplaintList;
