import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ColorKey, IconCollection } from "../Types";
import { colors } from "../Theme";

export type IconProps = {
  icon: string | IconDefinition;
  color?: ColorKey;
  classNameT?: string;
  size?: string;
};

const iconsCollections: Record<IconCollection, any> = {
  fa: FontAwesomeIcon,
};

const CustomIcon = React.forwardRef(
  (
    {
      icon,
      color = "black",
      classNameT = "",
      size = "1rem",
    }: IconProps,
    ref
  ) => {
    const IconCollection = iconsCollections["fa"];

    return (
      <IconCollection
        ref={ref}
        color={colors[color]}
        className={classNameT}
        fontSize={size}
        icon={icon as IconDefinition}
      />
    );
  }
);

CustomIcon.displayName = "CustomIcon";

export default CustomIcon;
