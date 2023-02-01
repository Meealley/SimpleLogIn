import React, { useRef, useImperativeHandle, forwardRef } from "react";
import "./Input.css";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <>
      <div className={`control ${props.isValid === false ? "invalid" : ""}`}>
        <label htmlFor={props.id}>{props.label}</label>
        <input
          id={props.id}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={inputRef}
        />
      </div>
    </>
  );
});

export default Input;
