import React, { useState, useEffect } from "react";

const GettingStarted = (props) => {
  let script = `<!--// CartLoom v4 Snippet for  //-->
  <script data-cartloom-store="1040">
  if (typeof Cartloom === "undefined") {
  var Cartloom = {};
  (function(){
  var script = document.createElement("script");
  script.src = "https://scrappydew.cartloom.com/cl4/cart.js";
  document.body.appendChild(script);
  })();}
  </script>`;
  useEffect(() => {
    let shopping = document.getElementById("shopping");
    shopping.innerHTML = script;
  }, []);
  return (
    <>
      <h2>Hello from Getting Started!</h2>
      <div id="shopping"></div>
    </>
  );
};

export default GettingStarted;
