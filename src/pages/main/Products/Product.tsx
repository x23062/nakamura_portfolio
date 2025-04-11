import './Products.css';
import MyIcon from './../../../assets/images/myicon.png';

function Products() {
  return (
    <div className='products'>
      <h2>Products</h2>
      <div className="Products-container">
        <div className="Products-box">
          <div className='Products-peace'>
            <img src={MyIcon} alt="My Icon" className="profile-image" />
            <h3>ehho</h3>
          </div>
          <div className='Products-peace'>
            <img src={MyIcon} alt="My Icon" className="profile-image" />
            <h3>YOFUKASHI</h3>
          </div>
          <div className='Products-peace'>
            <img src={MyIcon} alt="My Icon" className="profile-image" />
            <h3>おまスケ！</h3>
          </div>
          <div className='Products-peace'>
            <img src={MyIcon} alt="My Icon" className="profile-image" />
            <h3>アイデアみっけ</h3>
          </div>
          <div className='Products-peace'>
            <img src={MyIcon} alt="My Icon" className="profile-image" />
            <h3>ケーキチャレンジ</h3>
          </div>
          <div className='Products-peace'>
            <img src={MyIcon} alt="My Icon" className="profile-image" />
            <h3>カラフル漢字マスター</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;