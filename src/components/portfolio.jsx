import React from 'react';
import JobstacleCourse from '../assets/portfolio/JobstacleCourse.png';
import ClickforFlicks from '../assets/portfolio/ClickforFlicks.png'; 
import PokeTrader from '../assets/portfolio/PokeTrader.png';
import WorkDay from '../assets/portfolio/WorkDay.png';
import Weather from '../assets/portfolio/Weather.png';
import CodingQuiz from '../assets/portfolio/CodingQuiz.png';





const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: WorkDay,
            demoUrl:'https://chewytaro.github.io/Work-Day-Calendar/',
            codeUrl: 'https://github.com/chewytaro/Work-Day-Calendar',
            title: "Work Day Scheduler",
            description: 'A handy scheduler program that allows you to plan out your 9-5 workday!'
        },
        {
            id: 2,
            src: Weather,
            demoUrl:'https://chewytaro.github.io/whats-the-weather-/',
            codeUrl:'https://github.com/chewytaro/whats-the-weather-',
            title: 'Whats the Weather',
            description: "Look up a 5-day weather forcast for a city that you want!"
        },
        {
            id: 3,
            src: ClickforFlicks,
            demoUrl:'https://andreaginn.github.io/Click-for-Flicks/',
            codeUrl:'https://github.com/andreaginn/Click-for-Flicks',
            title: "ClickforFlicks",
            description: "A movie generator for those who are indecisive. Click the generate button to watch a random top 100 movie, with a link of where to watch!"
        },
        {
            id: 4,
            src: JobstacleCourse,
            demoUrl:'https://jobstacle-course.herokuapp.com/',
            codeUrl:'https://github.com/chewytaro/Jobstacle-course',
            title: "Jobstacle Course",
            description:'A job application tracking tool that allows user to keep track of all of their job applications'
        },
        {
            id: 5,
            src: PokeTrader,
            demoUrl:'https://poketraderv1.herokuapp.com/',
            codeUrl:'https://github.com/lingeorge88/Poke_Trader',
            title: "Poké Trader",
            description: "A site that allows fellow pokemon card collectors to connect and trade!"
        },
        {
            id: 6,
            src: CodingQuiz,
            demoUrl:'https://chewytaro.github.io/Coding-Quiz/',
            codeUrl:'https://github.com/chewytaro/Coding-Quiz',
            title: 'Coding Quiz',
            description:'A simple coding quiz for those starting out learning how to code!'
        },
    ]
    function handleDemoClick(demoUrl) {
        window.open(demoUrl, "_blank");
      };

      function handleCodeClick(codeUrl) {
        window.open(codeUrl, "_blank");
      };
  return (
    <div name="portfolio" className='font-default text-base bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='mt-20 pb-8 sm:mt-0'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-500'>Portfolio</p>
            <p className='py-6'>Here are some of my favorite projects!</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
        {
            portfolios.map(({id, src, demoUrl, codeUrl,title,description}) =>(
                
            <div key={id} className='shadow-md shadow-purple-500 rounded-lg duration-200 hover:scale-105'>
                <h2 className="text-xl text-center font-bold shadow-md shadow-indigo-500">{title}</h2>
            <p className='text-sm m-2'>{description}</p>
                <img src={src} alt="" className='rounded-md '/>
                <div className='flex item-center justify-center'>
                    <button className='w-1/2 px6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleDemoClick(demoUrl)}>Demo</button>
                    <button className='w-1/2 px6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleCodeClick(codeUrl)}>Code</button>
                </div>
            </div>
        
            ))
        }
    </div>
    </div>
    </div>
  )
}

export default Portfolio;