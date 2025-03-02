import React from 'react'


const GenderCheckBox = ({ onBoxChange, selectGender }) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectGender === "male" ? "selected" : ""}`}>
                    <span className='label-text'>Male</span>
                    <input type='checkbox' className="checkbox checkbox-info"
                        checked={selectGender === "male"}
                        onChange={() => onBoxChange("male")} />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectGender === "female" ? "selected" : ""}`} >
                    <span className='label-text'>Female</span>
                    <input type='checkbox' className="checkbox checkbox-info"
                        checked={selectGender === "female"}
                        onChange={() => onBoxChange("female")} />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckBox