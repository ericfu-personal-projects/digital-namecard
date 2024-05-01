import avatar from '../images/avatar.png';
import banner from '../images/banner.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import devops from '../images/devops.png';
import solutionsArchitect from '../images/solutionsArchitect.png';
import azure from '../images/microsoft-certified-fundamentals-badge.svg';
import CardItem from './CardItem';

const description =
  'AWS Cloud / DevOps Engineer, NodeJS Developer, enthusiastic about Cloud Technologies and Cyber Security.';

function Header() {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by1">
          <img src={banner} alt="background" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={avatar} alt="avatar" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Zhongyi Fu</p>
            <p className="subtitle is-6">
              AWS Cloud / DevOps Engineer
              <br />
              Calgary, AB, Canada
            </p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>
      <div className="card-content">
        <div className="grid media social-media">
          <CardItem image={linkedin} link="https://www.linkedin.com/in/zyfu90/" alt="linkedin" />
          <CardItem image={instagram} link="https://www.instagram.com/zyfu90" alt="instagram" />
          <CardItem
            image={devops}
            link="https://www.credly.com/badges/7700af03-4c5f-42da-88c0-c9de97af7454/public_url"
            alt="devops"
          />
          <CardItem
            image={solutionsArchitect}
            link="https://www.credly.com/badges/e15f4a79-3611-457c-8d1d-08b9efb5536c/public_url"
            alt="solutionsArchitect"
          />
          <CardItem
            image={azure}
            link="https://learn.microsoft.com/en-us/users/zhongyifu-7387/credentials/f226120922a0faec"
            alt="azure"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
