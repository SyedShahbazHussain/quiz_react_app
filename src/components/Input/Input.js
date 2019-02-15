import React from 'react';

const Input = (props) =>{
    const {
        type, value, id, name, label, placeholder, errors, onChange } = props;
        return(
            <div className="inputContainer">
            <div className="inputWrapper">
            <label htmlFor={id}>
            {label}
            <input
             type={type}
             value={value}
             id={id}
             name={name}
             placeholder={placeholder}
             onChange={(ev)=>onChange(ev)} 
             /> 
             </label>  
             </div>
             
             {errors.errorsObj[name] && <div className="error-wrapper">
             <p className="error"> {errors.errorObj[name].message}</p>
             </div>
             }
             </div>
             
        )
        
    }
export {Input}
