import React from 'react';
import '../../../stylesheets/Home/top.css'

const links = (props) => (
  <div className="links">
    <ul>
      <li>
        <div className="twitterLink">
          <a target="_blank" href="https://twitter.com/prooooograming" rel="noreferrer noopener">
            <img src="https://firebasestorage.googleapis.com/v0/b/my-blog-bee05.appspot.com/o/31KluT5nBkL._SL250_.png?alt=media&token=2daa56bb-9253-4d1d-8593-c2fe2c379271" className="twitterIcon" alt=""/>
          </a>
        </div>
      </li>
      <li>
        <div className="githubLink">
          <a target="_blank" href="https://github.com/mochosan" rel="noreferrer noopener">
              <img src="https://firebasestorage.googleapis.com/v0/b/my-blog-bee05.appspot.com/o/no-translate-detected_318-41747.jpg?alt=media&token=1c829bae-53e7-4adb-84d0-e480030f164c" className="githubIcon" alt=""/>

          </a>
      </div>
      </li>
      <li>
        <div className="facebookLink">
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100013421290396" rel="noreferrer noopener">
            <img src="https://firebasestorage.googleapis.com/v0/b/my-blog-bee05.appspot.com/o/512-300x300.jpg?alt=media&token=1826e72d-6f10-4d91-8bca-4ebb2c684b03" className="facebookIcon" alt=""/>
          </a>
        </div>
      </li>
      <li>
        <div className="qiitaLink">
          <a target="_blank" href="https://qiita.com/mochosan" rel="noreferrer noopener">
            <img src="https://firebasestorage.googleapis.com/v0/b/my-blog-bee05.appspot.com/o/qiita.png?alt=media&token=86a6a6a1-e5ed-400e-9fbe-8b4facdb9c4f" className="qiitaIcon" alt="" />
          </a>
        </div>
      </li>
    </ul>
  </div>
)

export default links;