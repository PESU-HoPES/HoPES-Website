import Button from '@/app/components/Button'
import React from 'react'
import TextAnimation from '../components/TextAnimation'
import Subnavbar from '../components/Subnavbar'

const WorkPage = () => {
  return (
    <>
      <div className='flex flex-col mx-auto items-center max-w-[700px] '>
        <div className='mr-auto'>
          <TextAnimation size='large'>
            Explore&nbsp;our&nbsp;
          </TextAnimation>
        </div>
        <div className='ml-auto -mt-12'>
          <TextAnimation size='large'>
            Explore&nbsp;our&nbsp;
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