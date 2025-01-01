import React from 'react'
import { useTheme } from '../context/ThemeContext';
const Theme = () => {
    const {setTheme} = useTheme();
    const onChange=(e)=>{
        console.log(e.target.checked);
        setTheme(e.target.checked);
    }
    return (
        <div className='theme'>
            <div className="btn-container">
                <i className="fa fa-sun-o" aria-hidden="true"></i>
                <label className="switch btn-color-mode-switch">
                    <input type="checkbox" onChange={onChange} name="color_mode" id="color_mode" value="1" ></input>
                    <label for="color_mode" data-on="Cool" data-off="Warm" className="btn-color-mode-switch-inner"></label>
                </label>
                <i className="fa fa-moon-o" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Theme