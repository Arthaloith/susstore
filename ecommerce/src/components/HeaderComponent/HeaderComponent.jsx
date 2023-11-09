import React from 'react'
import { Badge, Col } from 'antd';
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from './style'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'

const HeaderComponent = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(26, 148, 255)'}}>
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>AMOGUS SUS</WrapperTextHeader>
        </Col>
        <Col span={13}>
        <ButtonInputSearch
          size="large"
          textButton="Search"
          placeholder='input search text...'
        />
        </Col>
        <Col span={6} style={{display: 'flex', gap: '54px', alignItems: 'center'}}>
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
            <Badge count={5} size='small'>
              <ShoppingCartOutlined style={{ fontSize: '30px', color: 'white'}}/>
            </Badge>
            <WrapperTextHeaderSmall>Cart</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent