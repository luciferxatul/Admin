import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import { userData } from "../../dummyData.js";
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';



export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart title="User Analytics" data={userData} dataKey="Active User" grid />
        <div className='homeWidge'>
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}
