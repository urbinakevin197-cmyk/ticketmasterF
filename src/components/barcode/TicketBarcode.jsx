import { useEffect, useRef } from "react";
import bwipjs from "bwip-js";
import "./barcode.css";

export default function TicketBarcode() {

  const canvasRef = useRef(null);

  useEffect(() => {
bwipjs.toCanvas(canvasRef.current, {
  bcid: "pdf417",

  text: "TICKET-834202032566034734-USER-93847293-EVENT-928374923847-SAFE-TIX-39485727887789787897893847",

  scale: 100,   
  height: 2,    

  paddingwidth: 5,
  paddingheight: 0,

  includetext: false
});
  }, []);

  return (
 <div className="barcodeContainer">

<canvas
  ref={canvasRef}
  width="216"
  height="66"
  style={{
    width: "216px",
    height: "48px",
    transform: "scaleY(-1)"
  }}
/>

  <div className="scannerWide"></div>
  <div className="scannerThin"></div>

</div>
  );
}