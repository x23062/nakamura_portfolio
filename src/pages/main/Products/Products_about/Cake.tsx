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
            <p>詳細文</p>
          </div>
          <div className='productsCardText_content'>
            <h3>技術構成</h3>
            <p>詳細文</p>
          </div>
          <div className='productsCardText_content'>
            <h3>担当部分</h3>
            <p>詳細文</p>
          </div>
          <div className='productsCardText_content'>
            <h3>感想</h3>
            <p>詳細文</p>
          </div>
          <div className='productsCardText_content'>
            <h3>関連リンク</h3>
            <p>詳細文</p>
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