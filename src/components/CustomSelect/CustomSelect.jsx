import React from 'react';
import CustomInput from '../UI/input/CustomInput';
import './CustomSelect.scss'

const CustomSelect = ({ options, value, defaultValue, onChange }) => {
    return (
        <select
            className='select'
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    )
}

export default CustomSelect;