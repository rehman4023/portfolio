import React from 'react';

import { Programingandscripting, CNCFtools, Cicdandiaac, Containerdevandir, Orchestrationandmangement, OtherWebhosting, AWS, Googlecloud, Monitoringandloging, Servicemeshs, DatabasesandFrameworks, Webservers, Azure } from '../SkillData'
const Skill = () => {
  return (
    <div id="Skill">
    <section className='my-28  px-5'>
      <header className='text-2xl font-bold pt-10 mb-5'>
        <h2>Skills & Tools</h2>
      </header>
      {Programingandscripting?.length > 0 &&
        <div className='pl-3'>
          <h2 className='text-xl'> Programing, Scripting and Markup languages </h2>
          <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
            {Programingandscripting.map((x, index) =>
              <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
                <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='200px' height='100px' />
                {x.skill}
              </div>
            )}


          </div>
        </div>
      }

      {DatabasesandFrameworks?.length > 0 &&
        <div className='pl-3'>
          <h2 className='text-xl'> Databases and Frameworks </h2>
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
          {DatabasesandFrameworks.map((x, index) =>
            <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
              <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
              {x.skill}
            </div>
          )}
          


        </div>

        </div>
      }
                  
      {Webservers?.length > 0 &&
        <div className='pl-3'>
          <h2 className='text-xl'> Webservers </h2>
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
          {Webservers.map((x, index) =>
            <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
              <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
              {x.skill}
            </div>
          )}
          


        </div>

        </div>
      }      

{AWS?.length > 0 &&
        <div className='pl-3'>
          <h2 className='text-xl'> AWS skills </h2>
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
          {AWS.map((x, index) =>
            <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
              <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
              {x.skill}
            </div>
          )}
          


        </div>

        </div>
      }
            
            {Azure?.length > 0 &&
        <div className='pl-3'>
          <h2 className='text-xl'> Azure skills </h2>
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
          {Azure.map((x, index) =>
            <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
              <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
              {x.skill}
            </div>
          )}
          


        </div>

        </div>
      }
            
        {Googlecloud?.length > 0 &&
        <div className='pl-3'>
          <h2 className='text-xl'> Googlecloud Skills </h2>
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
          {Googlecloud.map((x, index) =>
            <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
              <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
              {x.skill}
            </div>
          )}
          


        </div>

        </div>
      }




{Containerdevandir?.length > 0 &&
        <div className='pl-3'>
          <h2 className='text-xl'> Container development and Image securing skills </h2>
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
          {Containerdevandir.map((x, index) =>
            <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
              <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
              {x.skill}
            </div>
          )}
          


        </div>

        </div>
      }

      {Cicdandiaac?.length > 0 &&
        <div className='pl-3'>
          <h2 className='text-xl'> CI/CD and IAAC Skills </h2>
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
          {Cicdandiaac.map((x, index) =>
            <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
              <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
              {x.skill}
            </div>
          )}
          


        </div>

        </div>
      }
      {Orchestrationandmangement?.length > 0 &&
        <div className='pl-3'>
          <h2 className='text-xl'> Orchestration and Mangement Skills </h2>
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
          {Orchestrationandmangement.map((x, index) =>
            <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
              <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
              {x.skill}
            </div>
          )}
          


        </div>

        </div>
      }

            

            
{ Monitoringandloging?.length > 0 &&
        <div className='pl-3'>
          <h2 className='text-xl'> Monitoring and Loging Skills </h2>
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
          {Monitoringandloging.map((x, index) =>
            <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
              <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
              {x.skill}
            </div>
          )}
          


        </div>

        </div>
      }
            
      {Servicemeshs?.length > 0 &&
        <div className='pl-3'>
          <h2 className='text-xl'> Service Mesh </h2>
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
          {Servicemeshs.map((x, index) =>
            <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
              <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
              {x.skill}
            </div>
          )}
          


        </div>

        </div>
      }


{CNCFtools?.length > 0 &&
        <div className='pl-3'>
          <h2 className='text-xl'> CNCF Tools </h2>
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
          {CNCFtools.map((x, index) =>
            <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
              <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
              {x.skill}
            </div>
          )}



        </div>

        </div>
      }

      {OtherWebhosting?.length > 0 &&
        <div className='pl-3'>
          <h2 className='text-xl'> Other Web hosting platform tools </h2>
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
          {OtherWebhosting.map((x, index) =>
            <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
              <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
              {x.skill}
            </div>
          )}
          


        </div>

        </div>
      }


      {/* </div> */}
      </section>
    </div>
  );
};

export default Skill;
