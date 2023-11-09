import React from 'react'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'

const ProductDetailsPage = () => {
  return (
    <div style={{ padding: '0 120px', height: '1000px', background: '#efefef' }}>
        <h5 style={{ margin: 0, paddingBottom: '10px' }}>Homepage</h5>
        <ProductDetailsComponent />
    </div>
  )
}

export default ProductDetailsPage
