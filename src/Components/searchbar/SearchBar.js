import React from "react";

function SearchBar(props) {
  return (
    <>
      <div className="Page_two_search_Chooes_box">
        <h2 className="bottom"></h2>
        <div className="page_two_middel_box">
          <div className="page_two_chooes">
            <div className="kt">
              <input type="radio" name="chooes" checked className="choesBTN" />
              <h2>
                <b>KT Number</b>{" "}
              </h2>
            </div>
            <div className="page_two_or">
              <p> O </p>
              <p> R </p>
            </div>
            <div className="chassis">
              <input type="radio" name="chooes" className="choesBTN" />
              <h2>
                <b>Chassis</b>{" "}
              </h2>
            </div>
          </div>
          <div className="page_two_serchbar">
            <input type="text" placeholder="Enter number" onChange={props.ktnum} />
            <button onClick={props.Submit}> Search </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
