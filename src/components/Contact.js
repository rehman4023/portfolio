import React from 'react';
import { ADDRESS, EMAIL_ID, FIRST_NAME , LAST_NAME, LINKEDIN_USERNAME, RESUME_PATH, TWITTER_ID } from '../root.link'
const Contact = () => {
  return (
    <section className='my-28' id='contact'>
      <header className='px-5 text-2xl font-bold pt-10'>
        <h2>Contact Me</h2>
        <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
      </header>
      <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
        <div className='md:w-6/12 md:px-0 p-5 my-5'>
          <div>
            <p className='font-bold'>{FIRST_NAME} {LAST_NAME}</p>
            <p className='font-thin'>{ADDRESS}</p>
            <a href={`mailto: ${EMAIL_ID}`} className='border-b-2 mt-3 inline-block border-gray-500'>
              {EMAIL_ID}
            </a>
          </div>
          <a className='border-b-2 mt-3 inline-block border-gray-500' href={RESUME_PATH} target='_blank' rel='noreferrer'>
            Download Resume
          </a>
          <div className='flex flex-row flex-wrap mt-7'>
            <div className='mr-4'>
              <a href={`https://www.linkedin.com/in/${LINKEDIN_USERNAME}`} target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/linkedin.svg' alt='' width='24px' height='24px' className='mr-1' />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className='mr-4'>
              <a href = {`https://cyber-skills.vercel.app/`} target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  Cybersecurity Skills
                </span>
              </a>
            </div>

            <a href={`https://twitter.com/${TWITTER_ID}`} target='_blank' rel='noreferrer'>
              <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                <img src='./images/icons/icons8-twitter (2).svg' alt='' width='24px' height='24px' className='mr-1' />
                 Twitter
              </span>
            </a>
          </div>
        </div>

        
      </div>
      <div className='relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm' onClick={() => window.scroll(0, 0)}>
      </div>
    </section>
  );
};

export default Contact;
