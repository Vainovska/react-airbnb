import "./index.css";
export default function Contacts({ name, src, rate, time, info, phone }) {
  return (
    <div className="contacts">
      <div className="contacts__block">
        <div className="title__item">
          <img src={src} alt="contact" className="contacts__photo" />
        </div>
        <div className="contacts__item">
          <h1 className="contacts__text">Господар - {name}</h1>
          <div className="contacts__sub-block">
            <span className="contacts__sub-value">{phone}</span>
            <span className="contacts__sub-value">{time}</span>
            <span className="contacts__sub-value">
              {rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <div className="contacts__info">{info}</div>
    </div>
  );
}
