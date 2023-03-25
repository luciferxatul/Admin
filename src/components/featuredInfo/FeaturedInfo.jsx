import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import React from 'react'
import "./featuredInfo.css"
export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Revenue</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>₹2,147</span>
                <span className='featuredRate'>-11.2</span>
                <ArrowDownward className='featuredIcon negative'/>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Sales</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>₹4,174</span>
                <span className='featuredRate'>-1.3</span>
                <ArrowDownward className='featuredIcon negative'/>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Costs</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>₹3,147</span>
                <span className='featuredRate'>+2.6</span>
                <ArrowUpward className='featuredIcon'/>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
    </div>
  )
}
