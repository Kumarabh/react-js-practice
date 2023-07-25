import './filterPanel.scss';
import SelectComponent from '../../../components/select-component/SelectComponent';

type Props = {}

const FilterPanel = (props: Props) => {

    return (

        <div className="filterPanel">
            <SelectComponent componentName='Make' />
            <SelectComponent componentName='Model' />
            <SelectComponent componentName='Variants' />
            <SelectComponent componentName='Year' />
            <div className="panel-buttons">
                <button className='btn-1'>
                    GO
                </button>
                <button className='btn-2'>
                    MORE FILTERS
                </button>
            </div>
        </div>
    )
}

export default FilterPanel