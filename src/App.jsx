import React from "react"
import Header from "./components/Header"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import CallToAction from "./components/CallToAction"
import WhySection from "./components/WhySection"
import PeopleSection from "./components/PeopleSection"
import peopleImg1 from "./assets/img/testimonials-1.jpg"
import peopleImg2 from "./assets/img/testimonials-2.jpg"
import peopleImg3 from "./assets/img/testimonials-3.jpg"
import Card from "./components/Card"
import showCaseImg1 from './assets/img/bg-showcase-1.jpg'
import showCaseImg2 from './assets/img/bg-showcase-2.jpg'
import showCaseImg3 from './assets/img/bg-showcase-3.jpg'

function App() {
let whyList = [
  {
    icon: 'bi-window m-auto text-primary',
    title: 'Fully Responsive',
    description: 'This theme will look great on any device, no matter the size!'
  },
  {
    icon: 'bi-layers m-auto text-primary',
    title: 'Bootstrap 5 Ready',
    description: 'Featuring the latest build of the new Bootstrap 5 framework!'
  },
  {
    icon: 'bi-terminal m-auto text-primary',
    title: 'Easy to Use',
    description: 'Ready to use with your own content, or customize the source files!'
  },
]
let peoples = [
  {
    profileImg: peopleImg1,
    name: 'Margaret E.',
    description: "This is fantastic! Thanks so much guys!"
  },
  {
    profileImg: peopleImg2,
    name: 'Fred S.',
    description: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
  },
  {
    profileImg: peopleImg3,
    name: 'Sarah W.',
    description: "Thanks so much for making these free resources available to us!"
  }
]

let cardSet = [
  {
    cardImg: showCaseImg1,
    title: "Fully Responsive Design",
    description: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    isReverse: false, 
  },
  {
    cardImg: showCaseImg2,
    title: "Updated For Bootstrap 5",
    description: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    isReverse: true, 
  },
  {
    cardImg: showCaseImg3,
    title: "Easy to Use & Customize",
    description: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    isReverse: false, 
  }
]
  return (
    <>
      <Header />
      <Banner />
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            {
              whyList.map((e, i)=>{
                return <WhySection whyList={e} key={i}/>
              })
            }
            
          </div>
        </div>
      </section>
      <section className="showcase">
        <div className="container-fluid p-0">
          {
            cardSet.map((e, i)=>{
              return <Card cardSet={e} key={i} />
            })
          }
            
        </div>
      </section>
      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">What people are saying...</h2>
          <div className="row">
            {
              peoples.map((e, i)=>{
                return <PeopleSection peoples={e} key={i} />
              })
            }
          </div>
        </div>
        </section>
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
