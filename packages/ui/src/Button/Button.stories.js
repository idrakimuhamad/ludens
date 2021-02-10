import React from 'react';
import { action } from '@storybook/addon-actions';
import colors from '../constants/colors';

import ButtonBase from '.';
import Text from '../Text';

export default {
  title: 'Elements/Button',
  component: ButtonBase,
  argTypes: {
    bgColor: {
      control: {
        type: 'select',
        options: ['transparent', 'current', 'black', 'white', ...colors],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['transparent', 'current', 'black', 'white', ...colors],
      },
    },
    bgColorHover: {
      control: {
        type: 'select',
        options: ['transparent', 'current', 'black', 'white', ...colors],
      },
    },
    colorHover: {
      control: {
        type: 'select',
        options: ['transparent', 'current', 'black', 'white', ...colors],
      },
    },
    borderColor: {
      control: {
        type: 'select',
        options: ['transparent', 'current', 'black', 'white', ...colors],
      },
    },
    disabled: {
      description:
        'Control to disable the button. This is not a prop provided by the component, this is the HTML disabled attribute.',
      control: {
        type: 'boolean',
      },
    },
  },
};

const Button = ({ ...rest }) => <ButtonBase {...rest} />;

export const Base = ({ ...rest }) => (
  <Button {...rest} onClick={action('clicked')}>
    Button text
  </Button>
);

export const WithTextComponent = ({ ...rest }) => (
  <>
    <div className="mb-2">
      <Button {...rest} onClick={action('clicked')}>
        <Text color="white">Button text</Text>
      </Button>
    </div>
    <div className="mb-2">
      <Button {...rest} variant="secondary" onClick={action('clicked')}>
        <Text color="green-600" weight="bold" transform="capitalize" size="xl">
          Button text
        </Text>
      </Button>
    </div>
    <div>
      <Button {...rest} variant="base" onClick={action('clicked')}>
        <Text
          color="blue-500"
          size="lg"
          weight="light"
          transform="uppercase"
          spacing="wide">
          Button text
        </Text>
      </Button>
    </div>
  </>
);

export const WithHTMLDisabledAttributes = ({ ...rest }) => (
  <Button {...rest} variant="secondary" onClick={action('clicked')} disabled>
    Disabled button
  </Button>
);

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
