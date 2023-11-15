import React from 'react';

import type { ColorKey, TypographyMap, TypographyProps} from '../../Types/';
import {colors} from '../../Theme';

const typography: TypographyMap = {
  fontSize: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  },
  fontWeight: {
    Light: 'font-light',
    Regular: 'font-regular',
    Medium: 'font-medium',
    SemiBold: 'font-semibold',
    Bold: 'font-bold',
    ExtraBold: 'font-extrabold',
    Black: 'font-black',
  },
  textAlign: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  },
};

const Typography: React.FC<
  React.PropsWithChildren<TypographyProps>
> = props => {
  const {
    fontSize: fontSizeKey = 'base',
    fontFamily: fontFamilyKey = 'Nunito',
    fontWeight: fontWeightKey = 'Medium',
    textAlign: textAlignKey = 'left',
    color: colorKey = 'grayDark',
    classNameT = '',
    style = {},
    children,
    italic,
    element: Element = 'p',
    ellipsis = false,
    ...textProps
  } = props;

  return (
    <Element
      style={{
        color: colors[(colorKey as ColorKey) || 'black'],
        fontFamily: fontFamilyKey,
        fontStyle: italic ? 'italic' : undefined,
        ...style,
      }}
      className={`${ellipsis ? 'truncate' : ''} ${
        typography.fontSize[fontSizeKey]
      } ${typography.textAlign[textAlignKey]} ${
        typography.fontWeight[fontWeightKey]
      } ${classNameT}`}
      {...textProps}>
      {children}
    </Element>
  );
};

export default Typography;
