import { Link } from 'react-router-dom';
import './Products_about.css';
import EhhoImg from './../../../../assets/images/ehho.png'; 


function Ehho () {
  return (
    <div className='productsPage'>
      <div className='ProductsCard'>
        <div className='ProductsCardTitle'>
          <h2>Ehho</h2>
          <img src={EhhoImg} alt="Ehhoの写真" className='productsCardImg'/>
        </div>
        <div className='productsCardText'>
          <div className='productsCardText_content'>
            <h3>概要</h3>
            <p>
              本アプリは「トレーニング × かわいい」をテーマにした、運動初心者向けのトレーニングアプリです。<br/>近年のトレーニングアプリはスタイリッシュで本格的なものが多く、初心者には敷居が高いという課題がありました。そこで、話題となった「ポケモンスリープ」のようにかわいらしさを取り入れることで、運動の継続をサポートするアプローチを採用しました。<br/>アイデアの着想は、ネットミームで人気を集めたメンフクロウの「ｴｯﾎｴｯﾎ」という動きから。運動を頑張るメンフクロウの姿をアプリに反映し、ユーザーが一緒に運動したくなるような設計を目指しました。<br/>アプリの機能は「運動時間・距離・カロリー・平均ペース」に絞り、シンプルで親しみやすいUXを追求しました<br/>さらに運動の継続を支えるために、実績解除・メンフクロウの成長などのゲーム的要素も取り入れました。
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>技術構成</h3>
            <p>
              ・フロントエンド：Flutter（Dart）<br/>
              ・バックエンド：Supabase<br/>
              ・認証機能：Google Cloud Authentication<br/>
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>担当部分</h3>
            <p>
              ・UI/UX 設計<br/>
              ・フロントエンド<br/>
              ・アクティビティ計測のロジック
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>感想</h3>
            <p>
              今回のハッカソンは、初対面のメンバーと組んで参加したこともあり、コミュニケーションの工夫が特に重要だと感じました。<br/>
              開発をスムーズに進めるために、質問しやすい環境作りや、こまめなフィードバックのやり取りを徹底しました。そのおかげで、時間の限られた中でもプロジェクトが円滑に進行し、発表準備も余裕をもって行うことができました。<br/>
              また実際に使用してみて、「かわいい×運動」というアプローチが、実際にユーザーのモチベーションを高める可能性を強く実感しました。今後もこのような“楽しく続けられる”設計を意識してプロダクト開発をしていきたいです。
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>関連リンク</h3>
            <a href="https://github.com/watagassa/ehho">GitHub</a>
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

export default Ehho;