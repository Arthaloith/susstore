import React from 'react'
import { Col } from 'antd';
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from './style'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>AMOGUS SUS</WrapperTextHeader>
        </Col>
        <Col span={12}>
        <ButtonInputSearch
          size="large"
          textButton="Search"
          placeholder='input search text...'
        />
        </Col>
        <Col span={6} style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px'}}/>
            <div>
              <WrapperTextHeaderSmall>Login/Register</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Account</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{ fontSize: '30px', color: 'white'}}/>
            <WrapperTextHeaderSmall>Cart</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent