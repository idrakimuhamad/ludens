import React from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import colors from '../constants/colors';
import { textStyles } from '../tailwind';

const TextStyled = styled.p`
  ${xw`subpixel-antialiased`}
  ${({ styled: { family, size, color, weight, spacing, leading, align } }) => ({
    ...textStyles.family[family],
    ...textStyles.size[size],
    ...textStyles.color.default[color],
    ...textStyles.weight[weight],
    ...textStyles.spacing[spacing],
    ...textStyles.leading[leading],
    ...textStyles.align[align],
  })}
  ${({ styled: { opacity } }) => opacity && textStyles.opacity[opacity]}
  ${({ styled: { italic } }) => italic && textStyles.italic}
  ${({ styled: { transform } }) => transform && textStyles.transform[transform]}
  ${({ styled: { overflow } }) => {
    if (overflow) {
      let ov = textStyles.overflow[overflow];
      if (['overflow-ellipsis', 'overflow-clip'].includes(overflow)) {
        return {
          ...ov,
          ...xw`overflow-hidden`,
        };
      }

      return ov;
    }
  }}
  ${({ styled: { decoration } }) =>
    decoration && textStyles.decoration[decoration]}
  ${({ styled: { wordBreak } }) => wordBreak && textStyles.wordBreak[wordBreak]}
`;

const Text = ({
  as,
  children,
  className,
  family,
  size,
  color,
  weight,
  spacing,
  leading,
  transform,
  align,
  ...rest
}) => (
  <TextStyled
    as={as}
    styled={{
      family,
      size,
      color,
      weight,
      spacing,
      leading,
      transform,
      align,
    }}
    className={className}
    children={children}
    {...rest}
  />
);

Text.propTypes = {
  /**
   * The HTML element to render. Default to "p"
   */
  as: PropTypes.oneOf([
    'p',
    'a',
    'span',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'strong',
    'b',
    'em',
    'code',
  ]),
  /**
   * The font size of the text. Default to "base" (1rem)
   */
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'base',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
    '8xl',
    '9xl',
  ]),
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
   * The color for the text. This is based on the TailwindCSS color shades.
   */
  color: PropTypes.oneOf([
    'transparent',
    'current',
    'black',
    'white',
    ...colors,
  ]),
  /** Boolean to indicate whether or not this component will be style in italic */
  italic: PropTypes.bool,
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
   * Control the word breaks in an element
   */
  wordBreak: PropTypes.oneOf(['normal', 'words', 'all']),
};

Text.defaultProps = {
  size: null,
  as: 'p',
  color: 'black',
  family: 'sans',
  italic: false,
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

export default Text;
