import Head from 'next/head'
import Layout from '../component/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home( {blog} ) {

    return ( 
      <Layout>
        <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={200}
            width={200}
            alt={name}
        />
        <section className={utilStyles.headingMd}>
          <h3 className="font-bold mb-5 mt-3">はじめまして、Hirokiです！</h3>
          <p className="mb-5">
            朝の3時台に起きてプログラムを書く、仙人生活を絶賛実施中。<br/>
            よろしくお願いします。
          </p>
          <div className="about-content-bottom">
            <ul>
                <label className="font-bold">経歴</label>
                <li>出身：東京都</li>
                <li>高校：都立国立高校</li>
                <li>大学：一橋大学</li>
                <li>職業：広告代理店 営業</li>
                <li>ハマっていること：React</li>
                <a className="font-bold text-indigo-500" href="https://chatbot-6eaf8.firebaseapp.com/" target="_blank">＊CHAT BOTでもっと詳しく</a>
            </ul>
            
          </div>
        </section><br/>
        <Link href="/">
            <a>← Back to home</a>
        </Link>
      </Layout>
    )
}
  