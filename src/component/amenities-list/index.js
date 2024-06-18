import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import Pool from "./pool.svg";
import Pet from "./pet.svg";
import Gym from "./gym.svg";
import Child from "./child.svg";
import Breakfast from "./breakfast.svg";
import Airpot from "./airport-shuttle.svg";
import Parking from "./parking-location.svg";
import Room from "./room-outline.svg";
import Security from "./security.svg";
import Wifi from "./wifi.svg";
export default function AmenitiesList({
  pool,
  gym,
  breakfast,
  wifi,
  parking,
  pets,
  airport,
  security,
  room_servis,
  child,
}) {
  return (
    <Box shadow>
      <div className="amenities-list">
        <Heading border>Зручності</Heading>
        <ul className="amenities-list__block">
          {pool === true && <ListItem imageSrc={Pool}>Басейн</ListItem>}
          {gym === true && <ListItem imageSrc={Gym}>Спортивний зал</ListItem>}
          {breakfast === true && (
            <ListItem imageSrc={Breakfast}>Безкоштовний сніданок</ListItem>
          )}
          {wifi === true && (
            <ListItem imageSrc={Wifi}>Безкоштовний Wi-Fi</ListItem>
          )}
          {parking === true && (
            <ListItem imageSrc={Parking}>
              Безкоштовний вуличний паркінг
            </ListItem>
          )}
          {pets === true && (
            <ListItem imageSrc={Pet}>
              Дозволено розміщення з домашніми тваринами
            </ListItem>
          )}
          {airport === true && (
            <ListItem imageSrc={Airpot}>Трансфер до/з аеропорту</ListItem>
          )}
          {security === true && (
            <ListItem imageSrc={Security}>Консьєрж-сервіс</ListItem>
          )}
          {room_servis === true && (
            <ListItem imageSrc={Room}>Обслуговування номерів</ListItem>
          )}
          {child === true && (
            <ListItem imageSrc={Child}>Підходить для дітей</ListItem>
          )}
        </ul>
      </div>
    </Box>
  );
}
