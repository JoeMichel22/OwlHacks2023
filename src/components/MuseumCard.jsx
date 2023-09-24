import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";

import PropTypes from "prop-types";

const MuseumCard = ({ museum }) => {
  const { name, address, type, price, link } = museum;
  return (
    <Card className="max-w-[400px]" isBlurred>
      <CardHeader>
        <h3 className="font-bold">{name}</h3>
      </CardHeader>
      <Divider />
      <CardBody>
        <address>{address}</address>
        <h5>{type}</h5>
        <p>{price}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={link}>
          {name}
        </Link>
      </CardFooter>
    </Card>
  );
};

MuseumCard.propTypes = {
  museum: PropTypes.object.isRequired,
};

export default MuseumCard;
