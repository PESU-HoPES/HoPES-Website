import Button from '@/app/components/Button'
import React from 'react'
import TextAnimation from '../components/TextAnimation'
import Subnavbar from '../components/Subnavbar'

const WorkPage = () => {
  return (
    <>
      <div className='my-[10vmin] flex flex-col mx-auto items-center md:max-w-[900px] sm:max-w-[720px] ss:max-w-[600px] xs:max-w-[400px] max-w-[300px]'>
        <div className='mr-auto'>
          <TextAnimation size='larger'>
            Explore&nbsp;our
          </TextAnimation>
        </div>
        <div className='ml-auto sm:-mt-6 '>
          <TextAnimation size='larger'>
            latest&nbsp;project
          </TextAnimation>
        </div>
      </div>
      <section className='flex justify-center items-center my-5'>

        <Subnavbar />
      </section>
    </>
  )
}

export default WorkPage