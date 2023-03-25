import React from 'react'
import { Link } from 'react-router-dom'
import "./product.css"
import { productData } from "../../dummyData.js";
import Chart from '../../components/chart/Chart'
import { Upload } from '@mui/icons-material';
 
export default function Product() {
    console.log(productData);
  return (
    <div className='product'>
        <div className='productTitleContainer'>
            <h1 className='productTitle'>Product</h1>
            <Link to="/newproduct">
                <button className='productAddButton'>Create</button>
            </Link>  
        </div>
        <div className='productTop'>
            <div className='productTopLeft'>
                <Chart data={productData} dataKey="Sales" title="Product Performance" />
            </div>
            <div className='productTopRight'>
                <div className='productInfoTop'>
                    <img className='productInfoImg' src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <span className='productName'>Apple Airpods</span>
                </div>
                <div className='productInfoBottom'>
                    <div className='productInfoItem'>
                        <span className='productInfoKey'>id:</span>
                        <span className='productInfoValue'>123</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className='productInfoKey'>price:</span>
                        <span className='productInfoValue'>₹2189</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className='productInfoKey'>active:</span>
                        <span className='productInfoValue'>yes</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className='productInfoKey'>in stock:</span>
                        <span className='productInfoValue'>no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='productBottom'>
            <form className='productForm'>
               <div className='productFormLeft'>
                    <label>Product Name</label>
                    <input type="text" placeholder='Apple Airpods' />
                    <label>In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
               </div>
               <div className='productFormRight'>
                    <div className='productUpload'>
                        <img className='productUploadImg' src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <label for="file">
                            <Upload className='productUploadIcon'/>
                        </label>
                        <input type="file" id="file" style={{ display: "none" }}/> 
                    </div>
                    <button className='productButton'>Update</button>
               </div>
               
            </form>
        </div>
    </div>
  )
}
