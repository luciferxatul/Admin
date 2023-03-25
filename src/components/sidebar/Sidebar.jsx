import { BarChartOutlined, CurrencyRupeeOutlined, DynamicFeedOutlined, Inventory2Outlined, LineStyle, MailOutlined, MessageOutlined, Person2Outlined, Report, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <Link to="/" className='link'>
                        <li className='sidebarListItem active'>
                            <LineStyle className='sidebarIcon'/>
                            Home
                        </li>
                    </Link>
                    <li className='sidebarListItem'>
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <TrendingUp className='sidebarIcon'/>
                        Analytics
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Quick Menu</h3>
                <ul className='sidebarList'>
                    <Link to="/users" className='link'>
                        <li className='sidebarListItem active'>
                            <Person2Outlined className='sidebarIcon'/>
                            Users
                        </li>
                    </Link>
                    <Link to="/products" className='link'>
                        <li className='sidebarListItem'>
                            <Inventory2Outlined className='sidebarIcon'/>
                            Products
                        </li>
                    </Link>
                    <li className='sidebarListItem'>
                        <CurrencyRupeeOutlined className='sidebarIcon'/>
                        Transactions
                    </li>
                    <li className='sidebarListItem'>
                        <BarChartOutlined className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Notification</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem active'>
                        <MailOutlined className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className='sidebarListItem'>
                        <DynamicFeedOutlined className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className='sidebarListItem'>
                        <MessageOutlined className='sidebarIcon'/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Staff</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem active'>
                        <WorkOutline className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className='sidebarListItem'>
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <Report className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
