import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <Image className="rounded-lg" src="/images/selfie_zoome.jpg" width={500} height={500} />
          <div>
            <h2>About Me</h2>
            <p>
            han any competitor, the quality is guaranteed to be the best. Auto-on. Incredibly flexible and convenient order management panel, everything is in your han
            </p>
          </div>
        </div>
    </section>
  )
}

export default AboutSection