import React from 'react'
import './list.scss';
import { UserType } from '../../dataTypes/UserType';
import { DataGrid } from '@mui/x-data-grid';


type Props = {
    listHeader: string,
    rows: any,
    columns: any
}

const List = (props: Props) => {
    let rows: UserType[];

    return (
        <div className="list">
            <div className='listContainer' style={{ height: 700, width: '100%' }}>

                <div className="list-header">
                    <div className="listTitle">
                        {props.listHeader}
                    </div>
                    <div className="button-option">
                        <select name="dra" id="" className='button-option btn-3'>
                            <option value="">Download Report As</option>
                        </select>
                    </div>
                </div>
                <div className="add-new">
                    <button className="add-new">
                        ADD NEW
                    </button>
                </div>
                <DataGrid className='table'
                    rows={props.rows}
                    columns={props.columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default List