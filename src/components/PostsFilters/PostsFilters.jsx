import React from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomInput from '../UI/input/CustomInput';
import './PostsFilters.scss'

const PostsFilters = ({ filters, setFilters }) => {
    const options = [
        { id: 1, name: "Sort by title", value: "title" },
        { id: 2, name: "Sort by body", value: "body" },
        { id: 3, name: "Sort by date", value: "date" }
    ]

    return (
        <div className='filters'>
            <CustomSelect
                options={options}
                value={filters.sort}
                defaultValue='Sort by'
                onChange={sort => setFilters({ ...filters, sort })}
            ></CustomSelect>
            <CustomInput
                style={{ width: '100%' }}
                type='text'
                placeholder='search'
                value={filters.query}
                onChange={e => setFilters({ ...filters, query: e.target.value })}
            ></CustomInput>
        </div>
    )
}

export default PostsFilters;