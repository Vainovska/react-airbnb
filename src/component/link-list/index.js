import "./index.css";
import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";
export default function LinkList({ list }) {
  return (
    <Box shadow>
      <div className="link-list">
        <Heading border>Пам'ятки поблизу</Heading>

        <ul className="link-list__block">
          {list.map(({ id, link, name }) => (
            <Fragment key={id}>
              <li>
                <a className="link-list__content" href={link}>
                  {name}
                </a>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </Box>
  );
}
