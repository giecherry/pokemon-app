import React from "react";

function Button({ onClick, children, className, icon, disabled, type = "button", style }) {
    return (
        <button
            type={type}
            className={`generic-button ${className || ""}`}
            onClick={onClick}
            disabled={disabled}
            style={style} 
        >
            {icon && <img src={icon} alt="" className="button-icon" />}
            {children}
        </button>
    );
}

export default Button;