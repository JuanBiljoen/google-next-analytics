//Import nav
import Layout from '../components/Layout'
//about me info and styled jsx
export default () => (
  <Layout>
    <div className="about-me">
      <h2>About Me</h2>
      <p>
        Hi, my name is John Doe and I am a full-stack developer. I have experience in developing web and mobile applications using JavaScript, React, Node.js, and other technologies. I am passionate about using technology to solve problems and create innovative solutions.
      </p>
      <p>
        I have a certificate in Web Development and have worked on various projects throughout my career. I am always seeking to learn new technologies and skills to stay up to date with the latest industry trends.
      </p>
      <p>
        In my free time, I enjoy hiking, reading and playing video games.
      </p>
      <div className="social-links">
        <a href="#">Github</a>
        <a href="#">Linkedin</a>
        <a href="#">Twitter</a>
      </div>
      <style jsx>{`
        .about-me {
            text-align: center;
        }
        h2 {
            margin-bottom: 20px;
        }
        .profile-img {
            border-radius: 50%;
            margin-bottom: 20px;
        }
        p {
            margin-bottom: 20px;
            line-height: 1.5;
        }
        .social-links {
            margin-top: 20px;
        }
        .social-links a {
            margin-right: 10px;
        }
    `}</style>
    </div>
  </Layout>
)