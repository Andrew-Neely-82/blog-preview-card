import Image from "../../assets/svg/illustration-article.svg";
import PFP from "../../assets/images/image-avatar.webp";

const Card = () => {
  const tags = {
    learning: "Learning",
    published: "Published 21 Dec 2023",
    title: "HTML & CSS foundations",
    para: "These languages are the backbone of every website, defining structure, content, and presentation",
    img: PFP,
    name: "Greg Hopper",
  };

  return (
    <div className="card">
      <img className="cover-pic" src={Image} alt="cover pic" />
      <span className="learning">{tags.learning}</span>
      <p className="published">{tags.published}</p>
      <h1 className="title">{tags.title}</h1>
      <p className="para">{tags.para}</p>
      <div className="user-container">
        <img src={tags.img} alt={`${tags.name}`} />
        <span className="name">{tags.name}</span>
      </div>
    </div>
  );
};

export default Card;
