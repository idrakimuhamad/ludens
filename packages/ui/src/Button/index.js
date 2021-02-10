import React from 'react';
import PropTypes from 'prop-types';
import xw from 'xwind';
import styled from '@emotion/styled';
import colors from '../constants/colors';
import { buttonStyles, bgStyles, textStyles, borderStyles } from '../tailwind';

const ButtonStyled = styled.button`
  ${({ styled: { variant } }) => ({
    ...buttonStyles.variant.base.default,
    ...buttonStyles.variant[variant].default,
  })}

  ${({
    styled: { color, bgColor, bgColorHover, colorHover, borderColor, size },
  }) => ({
    ...textStyles.color.default[color],
    ...bgStyles.color.default[bgColor],
    ...textStyles.color.hover[colorHover],
    ...bgStyles.color.hover[bgColorHover],
    ...borderStyles.color[borderColor],
    ...buttonStyles.size[size],
  })}

  &:disabled {
    ${({ styled: { variant } }) => ({
      ...buttonStyles.variant.base.disabled,
      ...buttonStyles.variant[variant].disabled,
    })}
  }

  ${({ styled: { rounded } }) => rounded && buttonStyles.rounded}
`;

const Button = ({
  as,
  onClick,
  className,
  children,
  variant,
  color,
  bgColor,
  bgColorHover,
  colorHover,
  borderColor,
  rounded,
  size,
  ...rest
}) => {
  return (
    <ButtonStyled
      as={as}
      styled={{
        variant,
        color,
        bgColor,
        bgColorHover,
        colorHover,
        borderColor,
        rounded,
        size,
      }}
      className={className}
      onClick={onClick}
      {...rest}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  /**
   * The HTML element to render. Default to "button"
   */
  as: PropTypes.oneOf(['button', 'a', 'span', 'div']),
  /**
   * The size of the button. It will increase the text size.
   */
  size: PropTypes.oneOf(['small', 'default', 'medium', 'large']),
  /**
   * The font family utility. This will follow the Tailwind config
   */
  family: PropTypes.oneOf(['sans', 'serif', 'mono']),
  /**
   * Font weight.
   */
  weight: PropTypes.oneOf([
    'thin',
    'extralight',
    'light',
    'normal',
    'medium',
    'semibold',
    'bold',
    'extrabold',
    'black',
  ]),
  /**
   * The background color for the button. This will overwrite the background color of a variant
   */
  bgColor: PropTypes.oneOf([
    'transparent',
    'current',
    'black',
    'white',
    ...colors,
  ]),
  /**
   * The hover state background color for the button. This will overwrite the hovered background color of a variant
   */
  bgColorHover: PropTypes.oneOf([
    'transparent',
    'current',
    'black',
    'white',
    ...colors,
  ]),
  /**
   * The color for the button's text. This will overwrite the text color of a variant
   */
  color: PropTypes.oneOf([
    'transparent',
    'current',
    'black',
    'white',
    ...colors,
  ]),
  /**
   * The hover stat color for the button's text. This will overwrite the text color of a variant
   */
  colorHover: PropTypes.oneOf([
    'transparent',
    'current',
    'black',
    'white',
    ...colors,
  ]),
  /**
   * The border color for the button. This will overwrite the border color of a variant
   */
  borderColor: PropTypes.oneOf([
    'transparent',
    'current',
    'black',
    'white',
    ...colors,
  ]),
  /** Boolean to indicate whether or not this button will be rounded */
  rounded: PropTypes.bool,
  /**
   * Control the letter spacing of an element
   */
  spacing: PropTypes.oneOf([
    'tighter',
    'tight',
    'normal',
    'wide',
    'wider',
    'widest',
  ]),
  /**
   * Control the alignment of the text
   */
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  /**
   * Give an element a relative line-height based on its current font-size.
   * Numerical option represent fixed line height, irrespective of the current font-size.
   */
  leading: PropTypes.oneOf([
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'none',
    'tight',
    'snug',
    'normal',
    'relaxed',
    'loose',
  ]),
  /**
   * Control the opacity of an element's text color.
   * Won't work on text that inherit text color from its parent
   */
  opacity: PropTypes.oneOf([
    '0',
    '5',
    '10',
    '20',
    '25',
    '30',
    '40',
    '50',
    '60',
    '70',
    '75',
    '80',
    '90',
    '95',
    '100',
  ]),
  /**
   * The text decoration
   */
  decoration: PropTypes.oneOf(['underline', 'line-through', 'no-underline']),
  /**
   * Control the text transformation
   */
  transform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalize']),
  /**
   * Control the text overflow
   */
  overflow: PropTypes.oneOf(['truncate', 'overflow-ellipsis', 'overflow-clip']),
  /**
   * Buttons variant
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'base']),
};

Button.defaultProps = {
  size: 'default',
  as: 'button',
  bgColor: null,
  color: null,
  bgColorHover: null,
  colorHover: null,
  variant: 'primary',
  family: 'sans',
  rounded: false,
  weight: 'normal',
  spacing: 'normal',
  leading: 'normal',
  align: 'left',
  opacity: null,
  decoration: null,
  transform: null,
  overflow: null,
  wordBreak: null,
  className: '',
};

export default Button;
