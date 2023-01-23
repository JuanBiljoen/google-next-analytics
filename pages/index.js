//import necassary libraries and nav
import Layout from '../components/Layout'
import Image from 'react-bootstrap/Image'
//importing static image and styled jsx
export default () => (
  <Layout>
    <div className="welcome-section">
      <h1 className="welcome-text">Hello, I am Juan Viljoen. Welcome to my portfolio!</h1>
      <Image src="/mePic.jpg" alt="profile pic" width="350" height="550" className="me" />
      <style jsx>{`
    .welcome-section {
      text-align: center;
      padding: 50px;
    }
    .welcome-text {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 30px;
    }
    .me {
      border-radius: 50%;
      box-shadow: 0px 0px 10px #ccc;
    }
  `}</style>
    </div>

  </Layout>
)