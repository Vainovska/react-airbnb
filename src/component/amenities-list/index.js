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
          <ListItem imageSrc={Pool}>
            {pool}
            Басейн
          </ListItem>
          <ListItem imageSrc={Gym}>{gym} Спортивний зал</ListItem>
          <ListItem imageSrc={Breakfast}>
            {breakfast} Безкоштовний сніданок
          </ListItem>
          <ListItem imageSrc={Wifi}>{wifi} Безкоштовний Wi-Fi</ListItem>
          <ListItem imageSrc={Parking}>
            {parking} Безкоштовний вуличний паркінг
          </ListItem>
          <ListItem imageSrc={Pet}>
            {pets} Дозволено розміщення з домашніми тваринами
          </ListItem>
          <ListItem imageSrc={Airpot}>
            {airport} Трансфер до/з аеропорту
          </ListItem>
          <ListItem imageSrc={Security}>{security} Консьєрж-сервіс</ListItem>
          <ListItem imageSrc={Room}>
            {room_servis}
            Обслуговування номерів
          </ListItem>
          <ListItem imageSrc={Child}>{child} Підходить для дітей</ListItem>
        </ul>
      </div>
    </Box>
  );
}
