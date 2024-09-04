import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import redtomato from '../assets/redtomato.png'
import greenlogo from '../assets/greenlogo.png'
import blacktomato from '../assets/blacktomato.png'
import freshlogo from '../assets/freshlogo.jpg'
import colourpopcorn from '../assets/colourpopcorn.png'
import tiltedpopcorn from '../assets/tiltedpopcorn.png'
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";


const About = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex '>

          <div className='flex flex-col p-3 gap-5 w-3/4'>
              <div className='flex flex-col p-3 gap-3'>
              <p className='font-bold text-2xl'>About Rotten Tomatoes®</p>
              <p>Rotten Tomatoes and the Tomatometer score are the world’s most trusted recommendation resources for quality entertainment. As the leading online aggregator of movie and TV show reviews from critics, we provide fans with a comprehensive guide to what’s Fresh – and what’s Rotten – in theaters and at home. And the Tomatometer is just the beginning. We also serve movie and TV fans with original editorial content on our site and through social channels, produce fun and informative video series, and hold live events for fans across the country, with our ‘Your Opinion Sucks’ live shows. If you’re an entertainment fan looking for a recommendation, or to share an opinion, you’ve come to the right place.</p>
              </div>

              <div className='flex flex-col p-3 gap-3'>
                <p className='font-bold text-2xl'>What is the Tomatometer®?</p>
                <p>The Tomatometer score – based on the opinions of hundreds of film and television critics – is a trusted measurement of critical recommendation for millions of fans.</p>
                <p>Back in the days of the open theaters, when a play was particularly atrocious, the audience expressed their dissatisfaction by not only booing and hissing at the stage, but also throwing whatever was at hand – vegetables and fruits included.</p>
                <p>The Tomatometer score represents the percentage of professional critic reviews that are positive for a given film or television show. A Tomatometer score is calculated for a movie or TV show after it receives at least five reviews.</p>
              </div>

              <div className='flex gap-2'>
                <img src={redtomato} alt="RT icon"  className='w-[50px] h-[50px]'/>
                <p>When at least 60% of reviews for a movie or TV show are positive, a red tomato is displayed to indicate its Fresh status.</p>
              </div>

              <div className='flex gap-2'>
                <img src={greenlogo} alt="green logo" className='w-[50px] h-[50px]'  />
                <p>When less than 60% of reviews for a movie or TV show are positive, a green splat is displayed to indicate its Rotten status.</p>
              </div>

              <div className=' flex gap-2'>
                <img src={redtomato} alt="blacklogo" className='w-[50px] h-[50px] filter grayscale' />
                <p>When there is no Tomatometer® score available, which could be because the Title hasn’t released yet or there are not enough ratings to generate a score.</p>
              </div>

              <div className='flex flex-col'>
                <p className='font-bold text-2xl'>What is Certified Fresh?</p>
                <div className='flex p-2'>
                  <img src={freshlogo} alt="Fresh" className='w-[60px] h-[50px]'/>
                  <div className='flex-col gap-5 '>
                    <p>Certified Fresh status is a special distinction awarded to the best-reviewed movies and TV shows. In order to qualify, movies or TV shows must meet the following requirements:</p>
                    <p className='list-item list-disc ml-5'>A consistent Tomatometer score of 75% or higher.</p>
                    <p className='list-item list-disc ml-5'>At least five reviews from Top Critics.</p>
                    <p className='list-item list-disc ml-5'>Films in wide release must have a minimum of 80 reviews. This also applies for films going from limited to wide release.</p>
                    <p className='list-item list-disc ml-5'>Films in limited release must have a minimum of 40 reviews.</p>
                    <p className='list-item list-disc ml-5'>Only individual seasons of a TV show are eligible, and each must have a minimum of 20 reviews.</p>
                  </div>
                </div>
                 
                 

              </div>
              <p>The above requirements for Certified Fresh status are only the bare minimum a film must achieve to qualify for the distinction. A film does not automatically become Certified Fresh when it meets those requirements. The Tomatometer score must be consistent and unlikely to deviate significantly before a film or TV show is marked Certified Fresh.</p>
                 <p>A Certified Fresh movie or TV season whose score drops and remains consistently below 70% will lose the Certified Fresh designation. The certification removal might not happen as soon as the score drops below 70%; as with CF designation, removal will take place when the score settles.</p>
                 <p>A movie or TV season that loses Certified Fresh status can regain it by reaching a consistent score of 75% or more and meeting the other minimum requirements.</p>
                <p className='font-bold text-2xl'>Curation</p>
                <p>Rotten Tomatoes has assembled a team of curators whose job it is to read thousands of movie and TV reviews weekly. The team collects movie and TV reviews from Tomatometer-approved critics and publications every day, generating Tomatometer scores. Our curators carefully read these reviews, noting if the reviews are Fresh or Rotten, and choose a representative pull-quote. Tomatometer-approved critics can also self-submit their reviews.</p>
                <p className='font-bold text-2xl'>What is the Audience Score?</p>
                <p>The Audience Score, denoted by a popcorn bucket, represents the percentage of users who have rated a movie or TV show positively. With films for which we can verify users have bought a ticket, the default Audience Score we show is made up of “Verified Ratings,” which represents the percentage of users who have rated a movie or TV show positively who we can verify bought a ticket; it is displayed once enough of those Verified Ratings are in to form a score. For all other titles, we display an “All Audience Score” that includes ratings from people regardless of whether or not we can currently verify they have seen the movie or show. Titles eligible for Verified Ratings have an All Audience Score, too: To see it, just click on the popcorn bucket and you can toggle between both the Verified Audience Score and the All Audience Score. You can read more about recent changes to the score box</p>
               <div className='flex gap-3'>
                <img src={colourpopcorn} alt="colour" className='w-[50px] h-[50px]' />
                <p>When at least 60% of users give a movie or TV show a star rating of 3.5 or higher, a full popcorn bucket is displayed to indicate its Fresh status.</p>
               </div>

               <div className='flex gap-3'>
               <img src={tiltedpopcorn} alt="colour" className='w-[50px] h-[50px]' />
               <p>When less than 60% of users give a movie or TV show a star rating of 3.5 or higher, a tipped over popcorn bucket is displayed to indicate its Rotten status.</p>
               </div>

               <div className='flex gap-3'>
               <img src={colourpopcorn} alt="colour" className='w-[50px] h-[50px] filter grayscale' />
               <p>When there is no Audience Score available, which could be because the Title hasn’t released yet or there are not enough ratings to generate a score.</p>
               </div>

               <div className='flex gap-3'>
               <FaRegCircleCheck size={50}/>
               <p>When you see this next to a review it means we’ve confirmed the user bought a ticket to the movie.</p>
               </div>

               <p className='font-bold text-2xl'>Community Code of Conduct</p>
               <p>We’re all about debate and discussion at Rotten Tomatoes, and want to know what our fans think. For our community code of conduct, <Link to='' className='text-blue-500'> Click Here</Link></p>
          </div>

          <div className='flex flex-col p-3 gap-4 w-1/4'>
            <p className=' font-bold text-2xl'>Contact Us</p>
            <div className='flex flex-col gap-2'>
              <p className='font-bold'>Customer Support</p>
              <p>Visit our <Link to='' className='text-blue-500'> FAQs</Link> or fill out our <Link to='' className='text-blue-500'>Email form</Link></p>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-bold'>Licensing or Partnership Inquiries</p>
              <p>Fill out our <Link to='' className='text-blue-500'>Buisness Proposal Form</Link>.</p>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-bold'>Submit Movie Information</p>
              <p><Link to='' className='text-blue-500'> Tell us</Link> about missing or incorrect movie or TV information.</p>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-bold'>Advertise</p>
              <p>Review <Link to='' className='text-blue-500'> Fandango Advertising Opportunities</Link>.</p>
            </div>
             
             <p className='font-bold'>Follow Us</p>
             <div className='flex py-2 gap-2'>
             <a href="https://www.facebook.com/rottentomatoes"><RiFacebookCircleLine size={30}/></a>
             <a href="https://twitter.com/rottentomatoes"><FaXTwitter size={30}/></a>
             <a href="https://www.instagram.com/rottentomatoes/"><FaInstagram size={30}/></a>
             <a href="https://www.tiktok.com/@rottentomatoes"><FaTiktok size={30}/></a>
             <a href="https://www.youtube.com/user/rottentomatoes"><FiYoutube size={30}/></a>
            </div>
          </div>

          
      </div>
      <br /><br /><br />
      <Footer/>
      
    </div>
  )
}

export default About
