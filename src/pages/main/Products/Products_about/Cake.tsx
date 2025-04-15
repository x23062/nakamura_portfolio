import { Link } from 'react-router-dom';
import './Products_about.css';
import CakeImg from './../../../../assets/images/cake.png'; 


function Cake () {
  return (
    <div className='productsPage'>
      <div className='ProductsCard'>
        <div className='ProductsCardTitle'>
          <h2>ケーキチャレンジ</h2>
          <img src={CakeImg} alt="Cakeの写真" className='productsCardImg'/>
        </div>
        <div className='productsCardText'>
          <div className='productsCardText_content'>
            <h3>概要</h3>
            <p>
               プロジェクターで床に投影されたコース上を、ケーキの空箱を持って走ります。 走っている際、箱の角度が閾値を超えるとカウントされ、カウントが一定数よりも多くなると挑戦失敗となります。 ケーキの空箱をインターフェースにし、底にM5Stickを取り付けることで加速度や各軸の加速度を検出するシステムを構築しました。 <br/>
               身近な道具をインターフェースとして活用し、インタラクティブな映像コンテンツを制作する講義を履修した際に制作したゲームです。開発期間は３週間、個人開発でした。 <br/>
               ケーキの傾き具合をリアルタイムで描画することで、ユーザーが傾きを実感しやすくし、ゲームへの没入感を向上させました。さらにレベル1〜4までの難易度を設定し、コースや制限時間を変えることで、ゲーム性を高めました。
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>技術構成</h3>
            <p>
              ・C++<br/>
              （OpenGL / OpenAL / OpenCV）
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>担当部分</h3>
            <p>すべて</p>
          </div>
          <div className='productsCardText_content'>
            <h3>感想</h3>
            <p>
              3週間という短い期間で、実際に動くものを作ることができたのはとても良い経験でした。<br/>
              ただ、時間が足りず、実装したい機能をすべて盛り込むことができなかったので、次回はもっと早くから取り組みたいと思います。<br/>
              また、M5Stickのセンサーを使用したことで、リアルタイムで傾きを描画することができたので、今後もこのようなインタラクティブな要素を取り入れた作品を制作していきたいです。
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>関連リンク</h3>
            <a href="https://www.canva.com/design/DAGcnZY2sEo/PspSVksZukJ_0a94k8Waeg/edit?utm_content=DAGcnZY2sEo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">発表スライド</a>
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

export default Cake;