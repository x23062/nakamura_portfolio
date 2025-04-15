import { Link } from 'react-router-dom';
import './Products_about.css';
import OmasukeImg from './../../../../assets/images/omasuke.png'; 


function Omasuke () {
  return (
    <div className='productsPage'>
      <div className='ProductsCard'>
        <div className='ProductsCardTitle'>
          <h2>おまスケ！</h2>
          <img src={OmasukeImg} alt="Omasukeの写真" className='productsCardImg'/>
        </div>
        <div className='productsCardText'>
          <div className='productsCardText_content'>
            <h3>概要</h3>
            <p>
              「スケジュール × フリマアプリ」<br/>
              本アプリは、人が考えたスケジュールをメルカリのように共有できるWebアプリです。気になるスケジュールを選んで体験し、その後に感想を投稿することで、他のユーザーと体験を共有できます。<br/>
              このアイデアは、「日常に刺激が足りないと感じたとき、人は新しいことに挑戦したくなる」という心理から着想を得ました。
              新しい体験は楽しく、学びも多いものですが、いざ何かを始めようとすると、時間やお金の制約、アイデア不足などのハードルがあります。
              そこで、他の人が考えたスケジュールを閲覧・参考にできるプラットフォームを作ることで、「やってみたい！」という気持ちを後押しし、実際に行動へとつなげる仕組みを設計しました。<br/>
              新しいことをもっと気軽に始められるきっかけを提供するサービスです。
              <br/>
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>技術構成</h3>
            <p>
              ・フロントエンド：Next.js<br/>
              ・バックエンド：Firebase
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>担当部分</h3>
            <p>
              ・UI/UX設計<br/>
              ・フロントエンド 
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>感想</h3>
            <p>詳細文</p>
          </div>
          <div className='productsCardText_content'>
            <h3>関連リンク</h3>
            {/* <p>詳細文</p> */}
          </div>
        </div>
        <div className='backButtonContainer'>
          <Link to='/'>
          <button className='backButton'>戻る</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Omasuke;