import React, { useState } from "react";

const NestedComments = ({ data }) => {
  const [show, setShow] = useState(true);
  console.log(data);

  /*
  Recursive function to get the text of all objects
  */
  function buildUI(iter) {
    console.log("repl", iter);
    iter.map((item, idx) => {
      if (!iter?.replies) return;
      else {
        console.log("Texts", item.text);
        return buildUI(iter?.replies);
      }
    });
  }

  /* Thought of using the flattening concept of array*/

  //   function flatDeep(arr, d = 1) {
  //     let res =
  //       d > 0
  //         ? arr?.reduce(
  //             (acc, val) =>
  //               acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
  //             []
  //           )
  //         : arr.slice();
  //     return res;
  //   }

  return (
    <>
      <h3>{data.author.name}</h3>
      <p> {data.text}</p>
      <div className="container">
        <div className="outer" onClick={() => setShow((show) => !show)}></div>
        <div className="replies" style={{ display: show ? "block" : "none" }}>
          {data.replies.map((item, idx) => {
            return (
              <div className="child">
                <div className="heading">
                  <img src={item.author.avatar} alt="avatar" />
                  <h3>{item.author.name}</h3>
                </div>
                <p>{item?.text}</p>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NestedComments;
