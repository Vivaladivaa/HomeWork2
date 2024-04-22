import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

function Card(props){
  return (
      <div className='Card'>
        <h1 className={props.p}>{props.text}</h1>
        <div className="object">
        <img src={props.src} className={props.img}/>
        </div>
        <p className={props.par}>{props.para}</p>
      </div>
  )
}

function Txt(props){
  return (
      <div className='Txtt'>
        <h1>{props.text}</h1>
      </div>
  )
}
function App() {
  return (
    <>
    <div className="div">
      <Card text='Тербенинина Виктория Александовна'  p='p' src='https://sun9-76.userapi.com/impg/YF4pepnXxSqHrCg4M6rr97T_FzY6HL_YI04U6Q/qiTRhCi_6bU.jpg?size=1620x2160&quality=95&sign=5e1c5297159890c26c93e1d26859162a&type=album' img='img'/>
    </div>
    <Txt text='Компетенции:'/>
    <div className="space">
      <Card text='Знание HTML' p='p' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' para='Cтандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.' par='para' img='img'/>
      <Card text='Знание CSS' p='p'src='https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png' img='img' para='Формальный язык декодирования и описания внешнего вида документа, написанного с использованием языка разметки.' par='para'/>
      <Card text='Знание JS' p='p'src='https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg' img='img' para='Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.' par='para'/>
      <Card text='Знание python'p='p' src='https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp' img='img' para='Высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью.' par='para'/>
    </div>
    <Txt text='Что хочется изучить:'/>
    <div className="space">
      <Card text='React' p='p'src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' img='img' para='JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.' par='para'/>
      <Card text='Vue' p='p'src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png' img='img'para='JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. ' par='para'/>
      <Card text='Angular' p='p'src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png' img='img' para='Открытая и свободная платформа для разработки веб-приложений, написанная на языке.' par='para'/>
      <Card text='Node' p='p'src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png' img='img' para='программная платформа, основанная на движке V8, превращающая JavaScript из узкоспециализированного языка в язык общего назначения.' par='para'/>
      <Card text='PHP' p='p'src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png' img='img' para='C-подобный скриптовый язык общего назначения, интенсивно применяемый для разработки веб-приложений.' par='para'/>
    </div>
    <div className="space">
      <Card text='JQuery' p='p'src='https://cdn.iconscout.com/icon/free/png-256/free-jquery-10-1175155.png' img='img' para='Набор функций JavaScript, фокусирующийся на взаимодействии JavaScript и HTML. ' par='para'/>
      <Card text='JSON' p='p'src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/1024px-JSON_vector_logo.svg.png' img='img' para='Текстовый формат обмена данными, основанный на JavaScript. ' par='para'/>
      <Card text='Nuxt'p='p'src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/2560px-Nuxt_logo.svg.png' img='img' para='Переведено с английского языка.-Nuxt — это бесплатная библиотека JavaScript с открытым исходным кодом, основанная на Vue.js,' par='para'/>
      <Card text='Ember' p='p'src='https://seeklogo.com/images/E/ember-logo-A8672B4054-seeklogo.com.png' img='img' para='Свободный веб-фреймворк на JavaScript, реализующий шаблон MVC и нацеленный на упрощение создания масштабируемых одностраничных веб-приложений.' par='para'/>
      <Card text='Flask' p='p'src='https://static-00.iconduck.com/assets.00/flask-icon-1594x2048-84mjydzf.png' img='img' para='Фреймворк для создания веб-приложений на языке программирования Python.' par='para'/>
    </div>
    </>
  )
}

export default App
