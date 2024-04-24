import React, { useState } from "react";

const Image = ({ src }) => {
  const [style, setStyle] = useState({ width: "200px", height: "200px" });

  const handleMouseOver = () => {
    setStyle({ width: "300px", height: "300px" });
  };

  const handleMouseOut = () => {
    setStyle({ width: "200px", height: "200px" });
  };

  return <img src={src} style={style} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />;
};

const Button = () => {
  const handleDoubleClick = () => {
    alert("Button double clicked!");
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return <button onDoubleClick={handleDoubleClick} onClick={handleClick} />;
};

const TextBox = () => {
  const handleFocus = () => {
    console.log("Focused on the textbox!");
  };

  const handleBlur = () => {
    console.log("Out of the textbox!");
  };

  return <input type="text" onFocus={handleFocus} onBlur={handleBlur} />;
};

const Paragraph = () => {
  const handleCopy = () => {
    alert("Text copied!");
  };

  const handleCut = () => {
    alert("Text cut!");
  };

  const handlePaste = () => {
    alert("Text pasted!");
  };

  return <p onCopy={handleCopy} onCut={handleCut} onPaste={handlePaste} />;
};

const EventHandler = () => {
  return (
    <div>
      <Image src="https://example.com/image.jpg" />
      <Button />
      <TextBox />
      <Paragraph>This is a paragraph.</Paragraph>
    </div>
  );
};

export default EventHandler;