//importing necassary libraries and media
import { Col } from "react-bootstrap";
import Image from "next/image";

//component to display projects
export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
<Col size={4} sm={4} md={6} >
  <div className="proj-txtx" style={{textAlign: 'center'}}>
    <h4>{title}</h4>
    <span>{description}</span>
  </div>
  <div className="proj-imgbx" style={{textAlign: 'center'}}>
    <a className="project-image" href={link} target="_blank" rel="noreferrer">
      <Image src={imgUrl} alt="project pic" width={600} height={400}/>
    </a>
  </div>
</Col>

  )
}