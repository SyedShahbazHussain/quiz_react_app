import React from 'react';

const Input = (props) =>{
    const {
        type, value, id, name, errors, onChange } = props;
        return(
            <div className="inputContainer">
            <div className="inputWrapper">
            <input
             type={type}
             value={value}
             id={id}
             name={name}
             onChange={onChange()} /> 
             {errors.errorObj[name] && <div className="error=wrapper">
             <p className="error"> {errors.errorObj[name].message}</p>
             </div>
             }

                </div></div>
        )
        
    }
export {Input}
