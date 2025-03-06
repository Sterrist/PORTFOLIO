'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.css'

export default function Page() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = document.getElementById('audio');
    
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      if (!isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('loadeddata', updateDuration);

    const handleEnd = () => {
      audio.currentTime = 0;
      setIsPlaying(false);
    };

    audio.addEventListener('ended', handleEnd);

    updateDuration();

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('durationchange', updateDuration);
      audio.removeEventListener('loadeddata', updateDuration);
      audio.removeEventListener('ended', handleEnd);
    };
  }, []);

  const togglePlay = () => {
    const audio = document.getElementById('audio');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.top_title}>
          <h1 style={{fontSize: '150px'}}>STERRIST DEV </h1>
          <h2 style={{fontSize: '100px'}}>МНОГО КОДА</h2>
          <h3 style={{fontSize: '40px'}}>ЩЕПОТКУ ДИЗАЙНА</h3>
          <h4 style={{fontSize: '20px'}}>БЕЗ БАГОВ</h4>
        </div>

        <div className={styles.top_hello}>
          <h1 style={{fontSize: '40px'}}>Привет, %NAME%!</h1>
          <h4>Меня зовут STERRIST, пишу код, пью чай и иногда сплю</h4>
          <h4>Делаю бек, ботов и фронт</h4>
          <h4>Люблю <a className='link' href="https://ru.wikipedia.org/wiki/Панна-котта" rel="noopener noreferrer" target="_blank" >панна коту</a></h4>
          <h5 style={{fontSize: '20px', marginTop: '20px'}}>Пролистай ниже немного</h5>
        </div>
      </div>

      <div className={styles.bottom}>
        <h1 style={{fontSize: '100px'}}>Портфолио</h1>
        <div className={styles.portfolio}>

          <h4>TELEGRAM</h4>

          <div className={styles.portfolio_items}>
            <a className={styles.portfolio_item} href="https://t.me/CHO_STORE_BOT" rel="noopener noreferrer" target="_blank" >
              <b>ЧоБОТ</b>
              <span>Продажа доната в наши любимые игры</span>
            </a>
            <a className={styles.portfolio_item} href="https://t.me/twinkleonedefender_bot" rel="noopener noreferrer" target="_blank" >
              <b>Twinkle Defender</b>
              <span>Модерация чатов агентства TwinkleOne</span>
            </a>
            <a className={styles.portfolio_item} href="https://t.me/hb_predlog_bot" rel="noopener noreferrer" target="_blank" >
              <b>HB PREDLOG</b>
              <span>Предложка для Twitch стримерши HEBESHECHKA</span>
            </a>
            <a className={styles.portfolio_item} href="https://t.me/twinkleone_scout_bot" rel="noopener noreferrer" target="_blank" >
              <b>TwinkleOne Scout</b>
              <span>Бот для подачи заявок в агентство TwinkleOne</span>
            </a>
            <a className={styles.portfolio_item} href="https://t.me/twinkleone_support_bot" rel="noopener noreferrer" target="_blank" >
              <b>TwinkleOne Support</b>
              <span>Бот для поддержки блогеров в агентстве TwinkleOne</span>
            </a>
          </div>

          <h4>WEB</h4>

          <div className={styles.portfolio_items}>
            <a className={styles.portfolio_item} href="https://cho-bot.ru" rel="noopener noreferrer" target="_blank" >
              <b>Сайт ЧоБОТ</b>
              <span>Сайт для магазина ЧоБОТ</span>
            </a>
            <a className={styles.portfolio_item} href="https://github.com/Sterrist/PORTFOLIO" rel="noopener noreferrer" target="_blank" >
              <b>Портфолио</b>
              <span>Вы кстати сейчас смотрите на него</span>
            </a>
          </div>

          <h4>MOBILE</h4>

          <div className={styles.portfolio_items}>
            <a className={styles.portfolio_item} href="https://github.com/Sterrist/TODO-List" rel="noopener noreferrer" target="_blank" >
              <b>TODO-LIST</b>
              <span>Список задач на Kotlin</span>
            </a>
          </div>

          <h4>DESKTOP</h4>

          <div className={styles.portfolio_items}>
            <a className={styles.portfolio_item} href="https://t.me/CHO_STORE_BOT" rel="noopener noreferrer" target="_blank" >
              <b>CHOBYPASS</b>
              <span>Обход блокировок РКН</span>
            </a>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <h1>Контакты</h1>
        <div className={styles.footer_links}>
          <a className='link' href="https://t.me/sterrist_dev" rel="noopener noreferrer" target="_blank" >
            <b>TELEGRAM</b>
          </a>
          <a className='link' href="https://vk.com/sterrist" rel="noopener noreferrer" target="_blank" >
            <b>VK</b>
          </a>
          <a className='link' href="https://github.com/Sterrist" rel="noopener noreferrer" target="_blank" >
            <b>GITHUB</b>
          </a>
        </div>
      </footer>

      <div className={styles.player}>
        <audio id="audio" src="/music.mp3"></audio>
        <div className={styles.playerControls}>
          <button className={styles.playButton} onClick={togglePlay}>
            <img 
              src={isPlaying ? "/pause.png" : "/play.png"} 
              alt={isPlaying ? "Pause" : "Play"}
              width={24}
              height={24}
            />
          </button>
          <div className={styles.timeDisplay}>
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
