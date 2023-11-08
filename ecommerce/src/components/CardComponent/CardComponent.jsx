import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReportText } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/logo.png'


const CardComponent = () => {
  return (
    <WrapperCardStyle
        hoverable
        headStyle={ {width: '200px', height: '200px' }}
        style={{width: 200}}
        bodyStyle={{padding: '10px'}}
        cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}
    >
        <WrapperImageStyle alt='sus' src={logo} />
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
            <span style={{ marginRight: '4px' }}>
                <span>4.96</span> <StarFilled style={{ fontSize: '12px', color: 'yellow'}} />
            </span>
            <span> | Sold 1000+</span>
        </WrapperReportText>
        <WrapperPriceText>
            9,999$
            <WrapperDiscountText>
                -5%
            </WrapperDiscountText>
        </WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent
