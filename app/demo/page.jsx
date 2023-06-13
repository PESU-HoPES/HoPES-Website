import React from 'react'
import Cursor from '../components/Cursor'
import Button from '../components/Button'

const DemoPage = () => {
  return (
    <div>
      <Cursor />
      <div className='my-32 flex justify-center gap-x-1'>
        <Button type='primary' wide={true}>Sarang</Button>
        <Button type='default' wide={true}>Sarang</Button>
        <Button type='primary' wide={false}>Sarang</Button>
        <Button wide={false}>Sarang</Button>
        <Button type='svg' wide={false}>[]</Button>
      </div>
    </div>
  )
}

export default DemoPage