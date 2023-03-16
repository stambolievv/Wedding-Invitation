import { html } from 'lit-html';

export const invitation = (prop, path) => html`
    <section id="invitation">
      <nav>
        <h1 class="heading">Димитрина <span>&</span> Иван</h1>
        <ul class="menu">
          <li><a href="#program">Програма</a></li>
          <li><a href="#contacts">Контакти</a></li>
        </ul>
      </nav>
      <div class="invitation-content">
        <p>Някои казват: „Беше ви време.“,<br>Други пък: „ Имахте време.“</p>
        <p>
          Всъщност има ли значение, щом взето е решение,<br>че дошло е време Иван
          булка да вземе. Нежно Дими я нарича и силно я обича.
        </p>
        <p>И защото много се ОБИЧАТ, Те във вярност ще се ВРИЧАТ.</p>
        <p>
          Скъпи ${prop}, Ние, Иван и
          Димитрина
          заедно с родителите ни, Ви каним да съучаствате в нашето сватбено
          тържество.<br>На 05 юни 2022г. гр. Пловдив
        </p>
        <p>Без много да умуват Дмитрий и Ксения Ще кумуват.</p>
        <p>Ще очакваме вашите потвърждения до <strong>05.05.2022г</strong>.</p>
      </div>
    </section>
    <section id="program">
      <h2>Програма</h2>
      <article>
        <img src="${path}/assets/images/church.png" alt="Венчавка" class="icon">
        <h3>16:00 часа</h3>
        <p class="description">В нашия приказен ден първо пред Бог ще се вречем.</p>
        <p class="location">Храм „св. вмчца Марина“ гр. Пловдив</p>
      </article>
      <article>
        <img src="${path}/assets/images/rings.png" alt="Обет" class="icon">
        <h3>17:30 часа</h3>
        <p class="description">Малко по-късно от любов обзети ще разменим сватбените си обети.</p>
        <p class="location">Комплекс „Garden Weddings“ Индустриален Парк Марково</p>
      </article>
      <article>
        <img src="${path}/assets/images/cheers.png" alt="Питиета" class="icon">
        <h3>18:00 часа</h3>
        <p class="description">Следва, поздравленията ваши, да посрещнем с пълни чаши.</p>
        <p class="location">Комплекс „Garden Weddings“ Индустриален Парк Марково</p>
      </article>
      <article>
        <img src="${path}/assets/images/dinner.png" alt="Вечеря" class="icon">
        <h3>19:00 часа</h3>
        <p class="description">И както си му е реда да продължим с веселба.</p>
        <p class="location">Комплекс „Garden Weddings“ Индустриален Парк Марково</p>
      </article>
      <div class="map-heading">
        <img class="separator" src="${path}/assets/images/border.png" alt="">
        <h3 class="map-name">Карта към Храм „св. вмчца Марина“</h3>
      </div>
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.190619599393!2d24.748221615669515!3d42.146207556571994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1a4a8439773%3A0x11db87c6149d0015!2sSveta%20Marina%20church!5e0!3m2!1sen!2sbg!4v1649541185523!5m2!1sen!2sbg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="map-heading">
        <img class="separator" src="${path}/assets/images/border.png" alt="">
        <h3 class="map-name">Карта към Комплекс „Garden Weddings“</h3>
      </div>
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.6943839349246!2d24.72178401566825!3d42.09259715994216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd168ceffc02d%3A0x10a54e2eef61e9f0!2z0JjQvdC00YPRgdGC0YDQuNCw0LvQtdC9INC_0LDRgNC6INCc0LDRgNC60L7QstC-!5e0!3m2!1sen!2sbg!4v1649541292148!5m2!1sen!2sbg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <img class="separator" src="${path}/assets/images/border.png" alt="">
    </section>
    <section id="contacts">
      <h2>Контакти</h2>
      <div class="contacts-content">
        <div class="row">
          <div class="our-contacts">
            <h4>Нашите Контакти:</h4>
            <div>Дими - 088 405 6084</div>
            <div>Иван &nbsp; - 087 764 4291</div>
          </div>
          <div class="taxi-contacts"></div>
        </div>
        <img class="separator" src="${path}/assets/images/border-white.png" alt="">
        <div class="row">
          <div class="church">
            <h4><a href="http://www.plovdivskamitropolia.bg/hramove/143-mitropolitski-hram-qsv-vlmch-marinaq-gr-plovdiv.html">Храм „Света Великомъченица Марина“</a></h4>
            <div>гр.Пловдив ул."др Георги Валкович" №7</div>
            <div>032 623 276</div>
          </div>
          <div class="complex">
            <h4><a href="https://www.facebook.com/weddingsgarde/">Комплекс „Garden Weddings“</a></h4>
            <div>гр.Пловдив Индустриален Парк Марково</div>
            <div>089 900 0210</div>
          </div>
        </div>
      </div>
    </section>
`;
