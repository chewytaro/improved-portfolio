 import React from 'react'

const About = () => {
  return (
    <div name="about" className='h-130vh font-default text-base font-medium w-full sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Hello! Welcome to my portfolio page! My name is Wendy, I am a web developer who recently graduated from the University of Washington Full Stack coding bootcamp with a degree in Psychology.
            The bootcamp was an amazing introduction to the tech world. Although challenging, I had an amazing experience learning about all of the different forms and components to coding. I look forward to gaining more knowledge and experience with coding!
            I am currently seeking an associate role with a focus on front-end development.
            </p>
            <br />
            <p className='text-xl'> 
            Graduating Cum Laude with a Psychology degree at the Universty of Washington was an amazing and rewarding experience. 
            I want to be able to apply my degree to the tech world as well, building programs and participating in projects that are 
            useful to the the general public.  
            </p>
            </div>
            
            
        
    </div>
  )
}

export default About