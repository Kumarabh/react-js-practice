import './dashboard.scss';
import HeaderTop from './headerTop/HeaderTop';
import FilterPanel from './filter-panel/FilterPanel';
import FilterStatistics from './filter-statistics/FilterStatistics';
import FilterCategories from './filter-categories/FilterCategories';
import DealerWiseClaimChart from './dealer-wise-claims-chart/DealerWiseClaimChart';
import ViolationCategoriesCountChart from './violation-categories-count-chart/ViolationCategoriesCountChart';
import ModelWiseClaimsChart from './model-wise-claims-chart/ModelWiseClaimsChart';
import ViolationTrendOverTime from './violation-tend-over-time/ViolationTrendOverTime';

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <>
      <div className="dashboard">
        <HeaderTop />
        <FilterPanel />
        <FilterStatistics />
        <FilterCategories />
        <div className="charts">
          <div className="chart-1">
            <DealerWiseClaimChart />
          </div>
          <div className="chart-2">
            <ViolationCategoriesCountChart />
          </div>
          <div className="chart-3">
            <ModelWiseClaimsChart />

          </div>
        </div>
        <div className="charts-2">
          <div className="chart-4">
            <ViolationTrendOverTime />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard