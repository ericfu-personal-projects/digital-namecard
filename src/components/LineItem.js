const formatPhoneNumber = (s) => {
  var s2 = ('' + s).replace(/\D/g, '');
  var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
  return !m ? null : '+1 (' + m[1] + ') ' + m[2] + '-' + m[3];
};

function LineItem({ name, content, icon, isPhone, isEmail }) {
  let mediaContent = content;

  if (isPhone) {
    mediaContent = (
      <a className="link" href={`tel:${content}`} target="_blank" rel="noreferrer">
        {formatPhoneNumber(content)}
      </a>
    );
  }

  if (isEmail) {
    mediaContent = (
      <a
        className="link"
        href={`mailto:${content}?subject=Hello Zhongyi`}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-32x32">
              <i class="medium material-icons">{icon}</i>
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-6">{mediaContent}</p>
            <p class="subtitle is-7">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LineItem;
