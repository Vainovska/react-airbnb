import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
export default function PropertiesList({ ...res }) {
  return (
    <Box shadow>
      <div className="properties-list">
        <Heading border>Додаткові властивості</Heading>
        <List {...res} />
      </div>
    </Box>
  );
}
function List({ house, cancel, transport, languages, special, instructions }) {
  return (
    <ul className="properties-list__block">
      <ListItem title="Правила дому">{house}</ListItem>
      <ListItem title="Політика скасування">{cancel}</ListItem>
      <ListItem title="Місцевий транспорт">{transport}</ListItem>
      <ListItem title="Мови хоста">{languages}</ListItem>
      <ListItem title="Спеціальні пропозиції:">{special}</ListItem>
      <ListItem title="Інструкції щодо реєстрації">{instructions}</ListItem>
    </ul>
  );
}
