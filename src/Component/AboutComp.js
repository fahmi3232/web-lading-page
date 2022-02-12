import React from "react";

function AboutComp(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem sdfkjhb sdfjhsd jdhjfbskjd sdkjflksd kjsdnkljsdf ksdjnsfd dfnk
          hjdbjhbhasdf jhdasfbkjhsd jkhasdbfkasdfbkja sudfghahbsdn kjasdbikbsa
          kj. asjhbjhbsd kjasu jasdbikujhjfb asdfbkajsnas kjasdnbjkbnasdghb
          sadbkjsadb. jahsdbhjbasd jasbdjuasd khjasdu has suh sdhashb asd.
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default AboutComp;
