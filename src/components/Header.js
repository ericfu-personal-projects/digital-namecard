import avatar from '../images/avatar.png';
import banner from '../images/banner.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import devops from '../images/devops.png';
import solutionsArchitect from '../images/solutionsArchitect.png';
import azure from '../images/microsoft-certified-fundamentals-badge.svg';

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
            <figure className="image is-48x48">
              <img src={avatar} alt="avatar" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Zhongyi Fu</p>
            <p className="subtitle is-6">AWS Cloud / DevOps Engineer</p>
          </div>
        </div>

        <div className="content">
          AWS Cloud / DevOps Engineer, NodeJS Developer, enthusiastic about Cloud Technologies and
          Cyber Security.
        </div>
      </div>
      <div className="card-content">
        <div className="grid media social-media">
          <div className="cell">
            <figure class="image is-48x48">
              <a href="https://www.linkedin.com/in/zyfu90/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin" />
              </a>
            </figure>
          </div>
          <div className="cell">
            <figure class="image is-48x48">
              <a href="https://www.instagram.com/zyfu90" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram" />
              </a>
            </figure>
          </div>
          <div className="cell">
            <figure class="image is-48x48">
              <a
                href="https://www.credly.com/badges/7700af03-4c5f-42da-88c0-c9de97af7454/public_url"
                target="_blank"
                rel="noreferrer"
              >
                <img src={devops} alt="devops" />
              </a>
            </figure>
          </div>
          <div className="cell">
            <figure class="image is-48x48">
              <a
                href="https://www.credly.com/badges/e15f4a79-3611-457c-8d1d-08b9efb5536c/public_url"
                target="_blank"
                rel="noreferrer"
              >
                <img src={solutionsArchitect} alt="solutionsArchitect" />
              </a>
            </figure>
          </div>
          <div className="cell">
            <figure class="image is-48x48">
              <a
                href="https://learn.microsoft.com/en-us/users/zhongyifu-7387/credentials/f226120922a0faec"
                target="_blank"
                rel="noreferrer"
              >
                <img src={azure} alt="azure" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
