import React from 'react'
import { SearchOutlined } from '@mui/icons-material';
import './headerTop.scss'
type Props = {}

const HeaderTop = (props: Props) => {
    return (
        <div className='HeaderTop'>
            <div className="header-l">
                Dashboard
            </div>
            <div className="header-r">
                <div className="buttons">
                    <div className="button-option">
                        <button className='btn-1'>Search</button>
                        <SearchOutlined className='search-icon' />
                    </div>
                    <div className="button-option">
                        <select name="actions" id="" className='button-option btn-2'>
                            <option value="">Actions</option>
                        </select>
                    </div>
                    <div className="button-option">
                        <select name="dra" id="" className='button-option btn-3'>
                            <option value="">Download Report As</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeaderTop