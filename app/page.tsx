const services = [
  {
    title: "Full Social",
    text: "מעטפת מלאה לניהול הסושיאל שלכם — מתכנון חודשי ועד צילום, עריכה, פוסטים, תזמון וניהול שוטף.",
    items: ["גאנט ותכנון חודשי", "יום צילום ותסריטים", "רילסים, פוסטים ועריכה", "ניהול ותזמון התוכן"],
  },
  {
    title: "Social Lite",
    text: "נוכחות מקצועית ועקבית בכמות תוכן מדויקת יותר, עם אותה חשיבה, שפה וליווי אישי.",
    items: ["תכנון תוכן", "יום צילום", "יצירת רילסים ופוסטים", "תזמון והעלאה"],
  },
];

const works = ["REELS", "CONTENT", "VIDEO", "SOCIAL", "BRAND", "STORY", "POSTS", "CREATIVE"];

const testimonials = [
  ["העבודה עם נועה עשתה לנו סדר בכל הסושיאל והפכה את העמוד להרבה יותר מקצועי ועקבי.", "לקוח/ה • עסק במרכז"],
  ["יש תמיד מענה, רעיונות ותחושה שמישהו באמת מכיר את העסק וחושב איתנו קדימה.", "לקוח/ה • עסק מקומי"],
  ["מהר מאוד הרגשנו שהעמוד נראה חי, מדויק ונכון יותר למותג שלנו.", "לקוח/ה • בעל/ת עסק"],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top">Social by Noa</a>
        <nav>
          <a href="#about">אודות</a>
          <a href="#work">עבודות</a>
          <a href="#services">חבילות</a>
          <a href="#contact">יצירת קשר</a>
        </nav>
      </header>

      <section className="hero dark" id="top">
        <p className="script">Social by Noa</p>
        <h1>אם כבר לגלול —<br />שיעצרו אצלכם.</h1>
        <p className="hero-copy">אני לוקחת את כל מה שטוב בעסק שלכם והופכת אותו לתוכן שאנשים עוצרים בשבילו.</p>
        <div className="hero-actions">
          <a className="btn light" href="#contact">קבעו שיחת היכרות</a>
          <a className="text-link" href="https://wa.me/?text=%D7%94%D7%99%D7%99%20%D7%A0%D7%95%D7%A2%D7%94%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%93%D7%A8%D7%9A%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%A0%D7%99%D7%94%D7%95%D7%9C%20%D7%94%D7%A1%D7%95%D7%A9%D7%99%D7%90%D7%9C%20%D7%9C%D7%A2%D7%A1%D7%A7%20%D7%A9%D7%9C%D7%99.">שלחו לי הודעה בוואטסאפ</a>
        </div>
        <div className="marquee" aria-label="portfolio preview">
          <div className="marquee-track">
            {[...works, ...works].map((item, i) => <div className={`reel-card tone-${(i % 4) + 1}`} key={`${item}-${i}`}><span>0{i % 9 + 1}</span><strong>{item}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="fact-strip cream">
        <div className="frame-card"><div className="phone-mock"><span>YOUR<br/>CONTENT</span></div></div>
        <div className="fact-copy"><p className="kicker">DID YOU</p><h2>KNOW <em>that...</em></h2><div className="rule"/><p>הסושיאל לא צריך רק להיראות יפה.</p><strong>הוא צריך לעבוד בשביל העסק שלכם.</strong></div>
      </section>

      <section className="about dark" id="about">
        <div className="about-copy">
          <p className="section-label">ABOUT <em>me</em></p>
          <h2>אני נועה, מנהלת סושיאל שאוהבת לקחת את האופי של העסק שלכם ולהפוך אותו לנוכחות שמרגישים גם דרך המסך.</h2>
          <p>מבחינתי, סושיאל טוב מתחיל בהיכרות אמיתית עם העסק, ביחס אישי ובתוכן שמרגיש בדיוק כמוהו — לא עוד תבנית גנרית, אלא נוכחות שנראית ומרגישה שלכם.</p>
          <div className="stats"><div><b>100%</b><span>יחס אישי</span></div><div><b>360°</b><span>מעטפת תוכן</span></div><div><b>01</b><span>כתובת אחת לסושיאל</span></div></div>
        </div>
        <div className="portrait-placeholder"><span>NOA</span><small>portrait</small></div>
      </section>

      <section className="portfolio cream" id="work">
        <div className="section-heading"><span>MY VIDEO</span><em>portfolio</em></div>
        <div className="phones-grid">
          {works.map((item, i) => <article className="phone" key={item}><div className={`screen tone-${(i % 4) + 1}`}><span className="tiny">SOCIAL BY NOA</span><b>{item}</b></div><small>{["SKINCARE","LIFESTYLE","HOME","FOOD","DETAILS","BEAUTY","DESIGN","BRAND"][i]}</small></article>)}
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading"><span>שתי חבילות.</span><em>אותה רמה של דיוק.</em></div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.title}><span className="service-index">Social by Noa</span><h3>{service.title}</h3><p>{service.text}</p><ul>{service.items.map((item)=><li key={item}>{item}</li>)}</ul><a className="btn dark-btn" href="#contact">לקבלת הצעת מחיר</a></article>)}
        </div>
      </section>

      <section className="process dark">
        <div className="section-heading light-heading"><span>איך זה</span><em>עובד?</em></div>
        <div className="steps">
          {["שיחת היכרות והבנת העסק", "התאמת חבילה ובניית כיוון", "רעיונות, תסריטים ויום צילום", "עריכה, פוסטים ותזמון לחודש"].map((step, i)=><div className="step" key={step}><span>0{i+1}</span><p>{step}</p></div>)}
        </div>
      </section>

      <section className="clients cream">
        <p className="section-label center">עסקים שעבדתי איתם</p>
        <div className="logos"><div>FREEZER</div><div>נוני</div><div>PIZZA NINJA</div></div>
      </section>

      <section className="testimonials">
        <div className="section-heading"><span>מה אומרים</span><em>עליי</em></div>
        <div className="quotes">{testimonials.map(([quote, name]) => <figure key={quote}><blockquote>“{quote}”</blockquote><figcaption>{name}</figcaption></figure>)}</div>
      </section>

      <section className="cta dark" id="contact">
        <p className="script">Social by Noa</p>
        <h2>העסק שלכם כבר עובד קשה.<br/>הגיע הזמן שגם הסושיאל יעשה את שלו.</h2>
        <div className="contact-grid">
          <form><input placeholder="שם"/><input placeholder="טלפון / אימייל"/><input placeholder="שם העסק"/><textarea placeholder="ספרו לי קצת על העסק" rows={4}/><button className="btn light" type="submit">קבעו שיחת היכרות</button></form>
          <div className="contact-copy"><p>רוצים להבין איזו מעטפת מתאימה לכם? השאירו פרטים ונמשיך משם.</p><a className="text-link" href="mailto:hello@socialbynoa.co.il">hello@socialbynoa.co.il</a><a className="text-link" href="https://wa.me/?text=%D7%94%D7%99%D7%99%20%D7%A0%D7%95%D7%A2%D7%94%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%93%D7%A8%D7%9A%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%A0%D7%99%D7%94%D7%95%D7%9C%20%D7%94%D7%A1%D7%95%D7%A9%D7%99%D7%90%D7%9C%20%D7%9C%D7%A2%D7%A1%D7%A7%20%D7%A9%D7%9C%D7%99.">WhatsApp</a></div>
        </div>
      </section>

      <a className="whatsapp" href="https://wa.me/?text=%D7%94%D7%99%D7%99%20%D7%A0%D7%95%D7%A2%D7%94%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%93%D7%A8%D7%9A%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%A0%D7%99%D7%94%D7%95%D7%9C%20%D7%94%D7%A1%D7%95%D7%A9%D7%99%D7%90%D7%9C%20%D7%9C%D7%A2%D7%A1%D7%A7%20%D7%A9%D7%9C%D7%99." aria-label="WhatsApp">WA</a>
    </main>
  );
}
