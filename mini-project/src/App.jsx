import React from 'react'
import Card from './components/Card.jsx';

const jobOpenings = [
  {
    brandLogo: "https://img2.freepng.fr/20180326/gte/avj4aturu.webp",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "10 weeks ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Menlo Park, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "6 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    datePosted: "1 week ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Seattle, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    name: "OpenAI",
    datePosted: "4 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Expert Level",
    pay: "$150/hr",
    location: "San Francisco, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    name: "Tesla",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Austin, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    name: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Research Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Santa Clara, USA",
  },
  {
    brandLogo: "https://i.pinimg.com/736x/61/c9/f3/61c9f322e5069e7b6b3c98bb4df88225.jpg",
    name: "Adobe",
    datePosted: "3 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Noida, India",
  },
];

const App = () => {
  return (
    <div className='parent'>
      {
        jobOpenings.map((ind,idx) => {
          return <div key={idx}> 
            <Card logo={ind.brandLogo} companyName={ind.name} postDate={ind.datePosted} post={ind.post} pay={ind.pay} location={ind.location} tag1={ind.tag1} tag2={ind.tag2} />
          </div>
        })
      }

    </div>
  )
}

export default App