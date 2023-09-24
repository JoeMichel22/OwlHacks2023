import {
  Card,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

import PropTypes from "prop-types";

const MuseumCard = ({ museum }) => {
  const { name, address, type, price, link, imageURL } = museum;
  return (
    <Card
      className="max-w-[400px] max-h-[400px] mix-blend-normal bg-background/60"
      isFooterBlurred
      isBlurred
      shadow="sm"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start text-white bg-black/20">
        <h3 className="font-bold pb-4">{name}</h3>
        <address>{address}</address>
        <h5>{type} Museum</h5>
        <p>{price}</p>
      </CardHeader>
      <Image
        src={imageURL}
        alt={name}
        removeWrapper
        isBlurred={true}
        className="z-0 w-full h-full object-cover"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <Link color="foreground" isExternal showAnchorIcon href={link}>
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
