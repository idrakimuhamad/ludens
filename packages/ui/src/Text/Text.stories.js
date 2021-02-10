import React from 'react';

import TextBase from '.';
import colors from '../constants/colors';

export default {
  title: 'Elements/Text',
  component: TextBase,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['transparent', 'current', 'black', 'white', ...colors],
      },
    },
  },
};

const Text = ({ ...rest }) => <TextBase {...rest} />;

export function Base({ color, ...rest }) {
  return (
    <Text color={color} {...rest}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia
      temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium
      modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.
    </Text>
  );
}

export function WithTagReplacement({ ...rest }) {
  return (
    <>
      <div>
        <Text {...rest} as="h1">
          Should use the "h1" HTML tag
        </Text>
      </div>
      <div>
        <Text {...rest} as="h3">
          Should use the "h3" HTML tag
        </Text>
      </div>
      <div>
        <Text {...rest} as="strong">
          Should use the "strong" HTML tag
        </Text>
      </div>
      <div>
        <Text {...rest} as="code">
          Should use the "code" HTML tag
        </Text>
      </div>
    </>
  );
}

export function WithOverflow({ ...rest }) {
  return (
    <>
      <div className="px-6 py-4 rounded-lg max-w-xs bg-indigo-400 mb-6">
        <Text {...rest} size="xl" color="indigo-700">
          Overflow truncate
        </Text>
        <Text {...rest} overflow="truncate" color="indigo-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam
          at sed dolorum ratione dolorem nisi velit cum.
        </Text>
      </div>
      <div className="px-6 py-4 rounded-lg max-w-xs bg-green-400 mb-6">
        <Text {...rest} size="xl" color="green-700">
          Overflow Ellipsis
        </Text>
        <Text {...rest} overflow="overflow-ellipsis" color="green-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam
          at sed dolorum ratione dolorem nisi velit cum.
        </Text>
      </div>
      <div className="px-6 py-4 rounded-lg max-w-xs bg-blue-400">
        <Text {...rest} size="xl" color="blue-700">
          Overflow Clip
        </Text>
        <Text {...rest} overflow="overflow-clip" color="blue-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam
          at sed dolorum ratione dolorem nisi velit cum.
        </Text>
      </div>
    </>
  );
}

export function WithWordBreak({ ...rest }) {
  return (
    <>
      <div className="px-6 py-4 rounded-lg max-w-xs bg-blue-400 mb-6">
        <Text {...rest} wordBreak="normal" size="xl" color="blue-700">
          Break normal
        </Text>
        <Text {...rest} wordBreak="normal" color="blue-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam
          at sed dolorum ratione dolorem nisi velit cum.
        </Text>
      </div>
      <div className="px-6 py-4 rounded-lg max-w-xs bg-yellow-500 mb-6">
        <Text {...rest} wordBreak="normal" size="xl" color="yellow-700">
          Break words
        </Text>
        <Text {...rest} wordBreak="words" color="yellow-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam
          at sed dolorum ratione dolorem nisi velit cum.
        </Text>
      </div>
      <div className="px-6 py-4 rounded-lg max-w-xs bg-green-400">
        <Text {...rest} wordBreak="normal" size="xl" color="green-700">
          Break all
        </Text>
        <Text {...rest} wordBreak="all" color="green-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam
          at sed dolorum ratione dolorem nisi velit cum.
        </Text>
      </div>
    </>
  );
}
