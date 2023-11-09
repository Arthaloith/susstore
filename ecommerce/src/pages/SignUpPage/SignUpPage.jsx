import React from 'react'
import { WrapperContainerLeft, WrapperTextLight } from '../SignInPage/style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useState } from 'react'

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword, isShowConfirmPassword] = useState(false)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh'}}>
      <div style={{ width: '800px', height: '500px', borderRadius: '6px', background: '#fff'}}>
        <WrapperContainerLeft>
            <h1>Welcome!</h1>
            <p>Register to be able to use more functions of our service.</p>
            <InputForm style={{ marginBottom: '10px' }} placeholder="email" />
            <div style={{ position: 'relative' }}>
              <span
                style={{
                  zIndex: 10,
                  position: 'absolute',
                  top: '4px',
                  bottom: '8px',
                }}
              >{
                  isShowPassword ? (
                    <EyeFilled />
                  ) : (
                    <EyeInvisibleFilled />
                  )
              }
              </span>
              <InputForm placeholder="password" type={isShowPassword ? 'text' : 'password'}/>
            </div>
            <div style={{ position: 'relative' }}>
              <span
                style={{
                  zIndex: 10,
                  position: 'absolute',
                  top: '4px',
                  bottom: '8px',
                }}
              >{
                  isShowConfirmPassword ? (
                    <EyeFilled />
                  ) : (
                    <EyeInvisibleFilled />
                  )
              }
              </span>
              <InputForm placeholder="password" type={isShowPassword ? 'text' : 'password'}/>
            </div>
            <ButtonComponent
                size={40}
                styleButton={{
                  background: 'rgb(255, 57, 69)',
                  height: '48px',
                  width: '100%',
                  border: 'none',
                  borderRadius: '4px',
                  margin: '26px 0 10px'
                }}
                textButton={'Sign Up'}
                styleTextButton={{ color: 'white', fontSize: '15px', fontWeight: '700' }}
            ></ButtonComponent>
            <p>Already have an account? <WrapperTextLight>Sign in here</WrapperTextLight></p>
        </WrapperContainerLeft>
        {/* <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px"/>
          <h4>Shopt at LDDT</h4>
        </WrapperContainerRight> */}
      </div>
    </div>
  )
}

export default SignUpPage
