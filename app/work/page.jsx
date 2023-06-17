import Button from '@/app/components/Button'
import React from 'react'
import TextAnimation from '../components/TextAnimation'
import WorkSection from '../components/WorkSection'


const WorkPage = () => {
  return (
    <>
      <div className='mt-[10vmin] flex flex-col mx-auto items-center md:max-w-[900px] sm:max-w-[720px] ss:max-w-[600px] xs:max-w-[400px] max-w-[300px]'>
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

      <WorkSection />
    </>
  )
}

export default WorkPage