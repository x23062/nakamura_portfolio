import { Link } from 'react-router-dom';
import './Products_about.css';
import YofukashiImg from './../../../../assets/images/YOFUKASHI.png'; 


function Yofukashi () {
  return (
    <div className='productsPage'>
      <div className='ProductsCard'>
        <div className='ProductsCardTitle'>
          <h2>YOFUKASHI</h2>
          <img src={YofukashiImg} alt="Yofukashiの写真" className='productsCardImg'/>
        </div>
        <div className='productsCardText'>
          <div className='productsCardText_content'>
            <h3>概要</h3>
            <p>
            このサービスは、エンジニアを対象としたストレス解消支援アプリです。<br/>
            開発のきっかけは、所属サークルで深夜に作業するメンバーが多く、集中力や思考力の低下によってストレスが溜まり、部室の雰囲気が悪化していたことでした。
            そこで、愚痴や叫び声を検知すると、対象者に「変な動き」を促すアプリを作成しました。これにより血行促進や目覚まし、ストレス軽減の効果を狙い、深夜の作業環境を改善することに成功しました。<br/>
            ユーザーがボタンを押すことで背景が暗い夜空に変わる演出や、作業終了後に「お疲れ様！」と書かれたボタンを押すと明るい朝空に変化する演出を取り入れることで、作業時間の流れを視覚的に体感できるUIを実現しました。
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>技術構成</h3>
            <p>
              ・フロントエンド：React<br />
              ・バックエンド：Firebase / Google Cloud
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>担当部分</h3>
            <p>
              ・UI/UX設計
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>感想</h3>
            <p>
              学部1年の11月、サークルのメンバー5人で参加したハッカソンにて本サービスを開発し、企業賞を受賞しました。<br/>
              特に印象深かったのは、「お疲れ様！」の一言がユーザーにポジティブな感情を与えるというフィードバックを受けたことです。細部の演出や文言の選び方一つでも、ユーザーの体験を大きく変えることを実感しました。<br/>
              また、開発を通じて、ユーザーのニーズを理解し、それに応えるためのデザインや機能を考えることの重要性を学びました。特に、ユーザーが求める体験を提供するためには、技術的な知識だけでなく、心理的な側面にも配慮する必要があると感じました。<br/>
              チーム開発では、意見の食い違いが生じた場面でも全員が納得するまで対話を続ける姿勢を大切にし、密なコミュニケーションがスムーズな開発を支えました。この経験を通して、プロダクト開発においてユーザー視点とチーム内の協調がいかに重要かを学びました。
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>関連リンク</h3>
            <a href="https://yofukashi.web.app/">アプリページ</a>
            <a href="https://github.com/geekcamp-2023-11-18">GitHub</a>
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

export default Yofukashi;