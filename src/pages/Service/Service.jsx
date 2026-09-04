import React from 'react'
import Seo from '../../components/Seo'
import ServiceBanner from './ServiceComponents/ServiceBanner'
import Services from './ServiceComponents/Services'
import Process from './ServiceComponents/Process'
import ManagedIT from './ServiceComponents/ManagedIT'

const Service = () => {
  return (
    <main className='flex flex-col gap-[60px]'>
      <Seo
        title="Web Development, Software & Managed IT Services | SASKA Solutions"
        description="UI/UX design, web and software development, WordPress & e-commerce, plus managed IT — systems administration, cloud, cybersecurity and desktop support."
        path="/services"
      />
      <ServiceBanner />
      <Services />
      <ManagedIT />
      <Process />
    </main>
  )
}

export default Service