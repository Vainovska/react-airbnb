import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import Guests from "./guests.svg";
import Bedrooms from "./bedroom.svg";
import Beds from "./bed.svg";
import Bathroom from "./bathroom.svg";
export default function DetailsList({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow>
      <div className="details-list">
        <Heading border>Деталі властивості:</Heading>
        <ul className="details-list__block">
          <ListItem imageSrc={Guests}>{guests} гості</ListItem>
          <ListItem imageSrc={Bedrooms}>{bedrooms} спальня</ListItem>
          <ListItem imageSrc={Beds}>{beds} ліжко</ListItem>
          <ListItem imageSrc={Bathroom}>{baths} ванна кімната</ListItem>
        </ul>
      </div>
    </Box>
  );
}
