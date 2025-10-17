import React from 'react'
import Section1 from './components/section1/Section1'

const App = () => {

  const cardDetails = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/34/ac/c4/34acc4884f0af2611a91cdefbe1eda2f.jpg",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestias nobis soluta. Reprehenderit, reiciendis fugiat?",
      tag: "Satisfied",
      color:"blue"
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/cc/63/0f/cc630f35218e05fdfecca23b18b3712f.jpg",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quibusdam dolorum, illo aspernatur numquam expedita.",
      tag: "UnderServed",
      color:"green"
    },
    {
      id: 3,
      img: " https://i.pinimg.com/736x/31/57/f0/3157f01f1117c7440565547187159fb5.jpg",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis temporibus consequuntur nemo optio. Vero..",
      tag: "Underbanked",
      color:"orange"
    },
    {
      id: 4,
      img: " https://i.pinimg.com/736x/e2/8b/78/e28b78f25b555300a95e30cba9cda00d.jpg",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iusto praesentium illo maxime. Quae, aliquam.",
      tag: "Underbanked",
      color:"orangered"
    },
  ]

  return (
    <div >
      <Section1 user={cardDetails} />
    </div>
  )
}

export default App