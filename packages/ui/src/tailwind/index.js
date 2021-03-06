/**
 * This utilities hold the object styles map to tailwind css,
 * which converted by xwind macro into a object styles
 */
import xw from 'xwind/macro';

export const textStyles = {
  family: {
    sans: xw`font-sans`,
    serif: xw`font-serif`,
    mono: xw`font-mono`,
  },
  size: {
    xs: xw`text-xs`,
    sm: xw`text-sm`,
    base: xw`text-base`,
    lg: xw`text-lg`,
    xl: xw`text-xl`,
    '2xl': xw`text-2xl`,
    '3xl': xw`text-3xl`,
    '4xl': xw`text-4xl`,
    '5xl': xw`text-5xl`,
    '6xl': xw`text-6xl`,
    '7xl': xw`text-7xl`,
    '8xl': xw`text-8xl`,
    '9xl': xw`text-9xl`,
  },
  color: {
    default: {
      transparent: xw`text-transparent`,
      current: xw`text-current`,
      black: xw`text-black`,
      white: xw`text-white`,
      'gray-50': xw`text-gray-50`,
      'gray-100': xw`text-gray-100`,
      'gray-200': xw`text-gray-200`,
      'gray-300': xw`text-gray-300`,
      'gray-400': xw`text-gray-400`,
      'gray-500': xw`text-gray-500`,
      'gray-600': xw`text-gray-600`,
      'gray-700': xw`text-gray-700`,
      'gray-800': xw`text-gray-800`,
      'gray-900': xw`text-gray-900`,
      'red-50': xw`text-red-50`,
      'red-100': xw`text-red-100`,
      'red-200': xw`text-red-200`,
      'red-300': xw`text-red-300`,
      'red-400': xw`text-red-400`,
      'red-500': xw`text-red-500`,
      'red-600': xw`text-red-600`,
      'red-700': xw`text-red-700`,
      'red-800': xw`text-red-800`,
      'red-900': xw`text-red-900`,
      'yellow-50': xw`text-yellow-50`,
      'yellow-100': xw`text-yellow-100`,
      'yellow-200': xw`text-yellow-200`,
      'yellow-300': xw`text-yellow-300`,
      'yellow-400': xw`text-yellow-400`,
      'yellow-500': xw`text-yellow-500`,
      'yellow-600': xw`text-yellow-600`,
      'yellow-700': xw`text-yellow-700`,
      'yellow-800': xw`text-yellow-800`,
      'yellow-900': xw`text-yellow-900`,
      'green-50': xw`text-green-50`,
      'green-100': xw`text-green-100`,
      'green-200': xw`text-green-200`,
      'green-300': xw`text-green-300`,
      'green-400': xw`text-green-400`,
      'green-500': xw`text-green-500`,
      'green-600': xw`text-green-600`,
      'green-700': xw`text-green-700`,
      'green-800': xw`text-green-800`,
      'green-900': xw`text-green-900`,
      'blue-50': xw`text-blue-50`,
      'blue-100': xw`text-blue-100`,
      'blue-200': xw`text-blue-200`,
      'blue-300': xw`text-blue-300`,
      'blue-400': xw`text-blue-400`,
      'blue-500': xw`text-blue-500`,
      'blue-600': xw`text-blue-600`,
      'blue-700': xw`text-blue-700`,
      'blue-800': xw`text-blue-800`,
      'blue-900': xw`text-blue-900`,
      'indigo-50': xw`text-indigo-50`,
      'indigo-100': xw`text-indigo-100`,
      'indigo-200': xw`text-indigo-200`,
      'indigo-300': xw`text-indigo-300`,
      'indigo-400': xw`text-indigo-400`,
      'indigo-500': xw`text-indigo-500`,
      'indigo-600': xw`text-indigo-600`,
      'indigo-700': xw`text-indigo-700`,
      'indigo-800': xw`text-indigo-800`,
      'indigo-900': xw`text-indigo-900`,
      'purple-50': xw`text-purple-50`,
      'purple-100': xw`text-purple-100`,
      'purple-200': xw`text-purple-200`,
      'purple-300': xw`text-purple-300`,
      'purple-400': xw`text-purple-400`,
      'purple-500': xw`text-purple-500`,
      'purple-600': xw`text-purple-600`,
      'purple-700': xw`text-purple-700`,
      'purple-800': xw`text-purple-800`,
      'purple-900': xw`text-purple-900`,
      'pink-50': xw`text-pink-50`,
      'pink-100': xw`text-pink-100`,
      'pink-200': xw`text-pink-200`,
      'pink-300': xw`text-pink-300`,
      'pink-400': xw`text-pink-400`,
      'pink-500': xw`text-pink-500`,
      'pink-600': xw`text-pink-600`,
      'pink-700': xw`text-pink-700`,
      'pink-800': xw`text-pink-800`,
      'pink-900': xw`text-pink-900`,
    },
    hover: {
      transparent: xw`hover:text-transparent`,
      current: xw`hover:text-current`,
      black: xw`hover:text-black`,
      white: xw`hover:text-white`,
      'gray-50': xw`hover:text-gray-50`,
      'gray-100': xw`hover:text-gray-100`,
      'gray-200': xw`hover:text-gray-200`,
      'gray-300': xw`hover:text-gray-300`,
      'gray-400': xw`hover:text-gray-400`,
      'gray-500': xw`hover:text-gray-500`,
      'gray-600': xw`hover:text-gray-600`,
      'gray-700': xw`hover:text-gray-700`,
      'gray-800': xw`hover:text-gray-800`,
      'gray-900': xw`hover:text-gray-900`,
      'red-50': xw`hover:text-red-50`,
      'red-100': xw`hover:text-red-100`,
      'red-200': xw`hover:text-red-200`,
      'red-300': xw`hover:text-red-300`,
      'red-400': xw`hover:text-red-400`,
      'red-500': xw`hover:text-red-500`,
      'red-600': xw`hover:text-red-600`,
      'red-700': xw`hover:text-red-700`,
      'red-800': xw`hover:text-red-800`,
      'red-900': xw`hover:text-red-900`,
      'yellow-50': xw`hover:text-yellow-50`,
      'yellow-100': xw`hover:text-yellow-100`,
      'yellow-200': xw`hover:text-yellow-200`,
      'yellow-300': xw`hover:text-yellow-300`,
      'yellow-400': xw`hover:text-yellow-400`,
      'yellow-500': xw`hover:text-yellow-500`,
      'yellow-600': xw`hover:text-yellow-600`,
      'yellow-700': xw`hover:text-yellow-700`,
      'yellow-800': xw`hover:text-yellow-800`,
      'yellow-900': xw`hover:text-yellow-900`,
      'green-50': xw`hover:text-green-50`,
      'green-100': xw`hover:text-green-100`,
      'green-200': xw`hover:text-green-200`,
      'green-300': xw`hover:text-green-300`,
      'green-400': xw`hover:text-green-400`,
      'green-500': xw`hover:text-green-500`,
      'green-600': xw`hover:text-green-600`,
      'green-700': xw`hover:text-green-700`,
      'green-800': xw`hover:text-green-800`,
      'green-900': xw`hover:text-green-900`,
      'blue-50': xw`hover:text-blue-50`,
      'blue-100': xw`hover:text-blue-100`,
      'blue-200': xw`hover:text-blue-200`,
      'blue-300': xw`hover:text-blue-300`,
      'blue-400': xw`hover:text-blue-400`,
      'blue-500': xw`hover:text-blue-500`,
      'blue-600': xw`hover:text-blue-600`,
      'blue-700': xw`hover:text-blue-700`,
      'blue-800': xw`hover:text-blue-800`,
      'blue-900': xw`hover:text-blue-900`,
      'indigo-50': xw`hover:text-indigo-50`,
      'indigo-100': xw`hover:text-indigo-100`,
      'indigo-200': xw`hover:text-indigo-200`,
      'indigo-300': xw`hover:text-indigo-300`,
      'indigo-400': xw`hover:text-indigo-400`,
      'indigo-500': xw`hover:text-indigo-500`,
      'indigo-600': xw`hover:text-indigo-600`,
      'indigo-700': xw`hover:text-indigo-700`,
      'indigo-800': xw`hover:text-indigo-800`,
      'indigo-900': xw`hover:text-indigo-900`,
      'purple-50': xw`hover:text-purple-50`,
      'purple-100': xw`hover:text-purple-100`,
      'purple-200': xw`hover:text-purple-200`,
      'purple-300': xw`hover:text-purple-300`,
      'purple-400': xw`hover:text-purple-400`,
      'purple-500': xw`hover:text-purple-500`,
      'purple-600': xw`hover:text-purple-600`,
      'purple-700': xw`hover:text-purple-700`,
      'purple-800': xw`hover:text-purple-800`,
      'purple-900': xw`hover:text-purple-900`,
      'pink-50': xw`hover:text-pink-50`,
      'pink-100': xw`hover:text-pink-100`,
      'pink-200': xw`hover:text-pink-200`,
      'pink-300': xw`hover:text-pink-300`,
      'pink-400': xw`hover:text-pink-400`,
      'pink-500': xw`hover:text-pink-500`,
      'pink-600': xw`hover:text-pink-600`,
      'pink-700': xw`hover:text-pink-700`,
      'pink-800': xw`hover:text-pink-800`,
      'pink-900': xw`hover:text-pink-900`,
    },
  },
  weight: {
    thin: xw`font-thin`,
    extralight: xw`font-extralight`,
    light: xw`font-light`,
    normal: xw`font-normal`,
    medium: xw`font-medium`,
    semibold: xw`font-semibold`,
    bold: xw`font-bold`,
    extrabold: xw`font-extrabold`,
    black: xw`font-black`,
  },
  spacing: {
    tighter: xw`tracking-tighter`,
    tight: xw`tracking-tight`,
    normal: xw`tracking-normal`,
    wide: xw`tracking-wide`,
    wider: xw`tracking-wider`,
    widest: xw`tracking-widest`,
  },
  leading: {
    '3': xw`leading-3`,
    '4': xw`leading-4`,
    '5': xw`leading-5`,
    '6': xw`leading-6`,
    '7': xw`leading-7`,
    '8': xw`leading-8`,
    '9': xw`leading-9`,
    '10': xw`leading-10`,
    none: xw`leading-none`,
    tight: xw`leading-tight`,
    snug: xw`leading-snug`,
    normal: xw`leading-normal`,
    relaxed: xw`leading-relaxed`,
    loose: xw`leading-loose`,
  },
  align: {
    left: xw`text-left`,
    center: xw`text-center`,
    right: xw`text-right`,
    justify: xw`text-justify`,
  },
  opacity: {
    '0': xw`text-opacity-0`,
    '5': xw`text-opacity-5`,
    '10': xw`text-opacity-10`,
    '20': xw`text-opacity-20`,
    '25': xw`text-opacity-25`,
    '30': xw`text-opacity-30`,
    '40': xw`text-opacity-40`,
    '50': xw`text-opacity-50`,
    '60': xw`text-opacity-60`,
    '70': xw`text-opacity-70`,
    '75': xw`text-opacity-75`,
    '80': xw`text-opacity-80`,
    '90': xw`text-opacity-90`,
    '95': xw`text-opacity-95`,
    '100': xw`text-opacity-100`,
  },
  italic: xw`italic`,
  decoration: {
    underline: xw`underline`,
    'line-through': xw`line-through`,
    'no-underline': xw`no-underline`,
  },
  transform: {
    uppercase: xw`uppercase`,
    lowercase: xw`lowercase`,
    capitalize: xw`capitalize`,
  },
  overflow: {
    truncate: xw`truncate`,
    'overflow-ellipsis': xw`overflow-ellipsis`,
    'overflow-clip': xw`overflow-clip`,
  },
  wordBreak: {
    normal: xw`break-normal`,
    words: xw`break-words`,
    all: xw`break-all`,
  },
};

export const bgStyles = {
  color: {
    default: {
      transparent: xw`bg-transparent`,
      current: xw`bg-current`,
      black: xw`bg-black`,
      white: xw`bg-white`,
      'gray-50': xw`bg-gray-50`,
      'gray-100': xw`bg-gray-100`,
      'gray-200': xw`bg-gray-200`,
      'gray-300': xw`bg-gray-300`,
      'gray-400': xw`bg-gray-400`,
      'gray-500': xw`bg-gray-500`,
      'gray-600': xw`bg-gray-600`,
      'gray-700': xw`bg-gray-700`,
      'gray-800': xw`bg-gray-800`,
      'gray-900': xw`bg-gray-900`,
      'red-50': xw`bg-red-50`,
      'red-100': xw`bg-red-100`,
      'red-200': xw`bg-red-200`,
      'red-300': xw`bg-red-300`,
      'red-400': xw`bg-red-400`,
      'red-500': xw`bg-red-500`,
      'red-600': xw`bg-red-600`,
      'red-700': xw`bg-red-700`,
      'red-800': xw`bg-red-800`,
      'red-900': xw`bg-red-900`,
      'yellow-50': xw`bg-yellow-50`,
      'yellow-100': xw`bg-yellow-100`,
      'yellow-200': xw`bg-yellow-200`,
      'yellow-300': xw`bg-yellow-300`,
      'yellow-400': xw`bg-yellow-400`,
      'yellow-500': xw`bg-yellow-500`,
      'yellow-600': xw`bg-yellow-600`,
      'yellow-700': xw`bg-yellow-700`,
      'yellow-800': xw`bg-yellow-800`,
      'yellow-900': xw`bg-yellow-900`,
      'green-50': xw`bg-green-50`,
      'green-100': xw`bg-green-100`,
      'green-200': xw`bg-green-200`,
      'green-300': xw`bg-green-300`,
      'green-400': xw`bg-green-400`,
      'green-500': xw`bg-green-500`,
      'green-600': xw`bg-green-600`,
      'green-700': xw`bg-green-700`,
      'green-800': xw`bg-green-800`,
      'green-900': xw`bg-green-900`,
      'blue-50': xw`bg-blue-50`,
      'blue-100': xw`bg-blue-100`,
      'blue-200': xw`bg-blue-200`,
      'blue-300': xw`bg-blue-300`,
      'blue-400': xw`bg-blue-400`,
      'blue-500': xw`bg-blue-500`,
      'blue-600': xw`bg-blue-600`,
      'blue-700': xw`bg-blue-700`,
      'blue-800': xw`bg-blue-800`,
      'blue-900': xw`bg-blue-900`,
      'indigo-50': xw`bg-indigo-50`,
      'indigo-100': xw`bg-indigo-100`,
      'indigo-200': xw`bg-indigo-200`,
      'indigo-300': xw`bg-indigo-300`,
      'indigo-400': xw`bg-indigo-400`,
      'indigo-500': xw`bg-indigo-500`,
      'indigo-600': xw`bg-indigo-600`,
      'indigo-700': xw`bg-indigo-700`,
      'indigo-800': xw`bg-indigo-800`,
      'indigo-900': xw`bg-indigo-900`,
      'purple-50': xw`bg-purple-50`,
      'purple-100': xw`bg-purple-100`,
      'purple-200': xw`bg-purple-200`,
      'purple-300': xw`bg-purple-300`,
      'purple-400': xw`bg-purple-400`,
      'purple-500': xw`bg-purple-500`,
      'purple-600': xw`bg-purple-600`,
      'purple-700': xw`bg-purple-700`,
      'purple-800': xw`bg-purple-800`,
      'purple-900': xw`bg-purple-900`,
      'pink-50': xw`bg-pink-50`,
      'pink-100': xw`bg-pink-100`,
      'pink-200': xw`bg-pink-200`,
      'pink-300': xw`bg-pink-300`,
      'pink-400': xw`bg-pink-400`,
      'pink-500': xw`bg-pink-500`,
      'pink-600': xw`bg-pink-600`,
      'pink-700': xw`bg-pink-700`,
      'pink-800': xw`bg-pink-800`,
      'pink-900': xw`bg-pink-900`,
    },
    hover: {
      transparent: xw`hover:bg-transparent`,
      current: xw`hover:bg-current`,
      black: xw`hover:bg-black`,
      white: xw`hover:bg-white`,
      'gray-50': xw`hover:bg-gray-50`,
      'gray-100': xw`hover:bg-gray-100`,
      'gray-200': xw`hover:bg-gray-200`,
      'gray-300': xw`hover:bg-gray-300`,
      'gray-400': xw`hover:bg-gray-400`,
      'gray-500': xw`hover:bg-gray-500`,
      'gray-600': xw`hover:bg-gray-600`,
      'gray-700': xw`hover:bg-gray-700`,
      'gray-800': xw`hover:bg-gray-800`,
      'gray-900': xw`hover:bg-gray-900`,
      'red-50': xw`hover:bg-red-50`,
      'red-100': xw`hover:bg-red-100`,
      'red-200': xw`hover:bg-red-200`,
      'red-300': xw`hover:bg-red-300`,
      'red-400': xw`hover:bg-red-400`,
      'red-500': xw`hover:bg-red-500`,
      'red-600': xw`hover:bg-red-600`,
      'red-700': xw`hover:bg-red-700`,
      'red-800': xw`hover:bg-red-800`,
      'red-900': xw`hover:bg-red-900`,
      'yellow-50': xw`hover:bg-yellow-50`,
      'yellow-100': xw`hover:bg-yellow-100`,
      'yellow-200': xw`hover:bg-yellow-200`,
      'yellow-300': xw`hover:bg-yellow-300`,
      'yellow-400': xw`hover:bg-yellow-400`,
      'yellow-500': xw`hover:bg-yellow-500`,
      'yellow-600': xw`hover:bg-yellow-600`,
      'yellow-700': xw`hover:bg-yellow-700`,
      'yellow-800': xw`hover:bg-yellow-800`,
      'yellow-900': xw`hover:bg-yellow-900`,
      'green-50': xw`hover:bg-green-50`,
      'green-100': xw`hover:bg-green-100`,
      'green-200': xw`hover:bg-green-200`,
      'green-300': xw`hover:bg-green-300`,
      'green-400': xw`hover:bg-green-400`,
      'green-500': xw`hover:bg-green-500`,
      'green-600': xw`hover:bg-green-600`,
      'green-700': xw`hover:bg-green-700`,
      'green-800': xw`hover:bg-green-800`,
      'green-900': xw`hover:bg-green-900`,
      'blue-50': xw`hover:bg-blue-50`,
      'blue-100': xw`hover:bg-blue-100`,
      'blue-200': xw`hover:bg-blue-200`,
      'blue-300': xw`hover:bg-blue-300`,
      'blue-400': xw`hover:bg-blue-400`,
      'blue-500': xw`hover:bg-blue-500`,
      'blue-600': xw`hover:bg-blue-600`,
      'blue-700': xw`hover:bg-blue-700`,
      'blue-800': xw`hover:bg-blue-800`,
      'blue-900': xw`hover:bg-blue-900`,
      'indigo-50': xw`hover:bg-indigo-50`,
      'indigo-100': xw`hover:bg-indigo-100`,
      'indigo-200': xw`hover:bg-indigo-200`,
      'indigo-300': xw`hover:bg-indigo-300`,
      'indigo-400': xw`hover:bg-indigo-400`,
      'indigo-500': xw`hover:bg-indigo-500`,
      'indigo-600': xw`hover:bg-indigo-600`,
      'indigo-700': xw`hover:bg-indigo-700`,
      'indigo-800': xw`hover:bg-indigo-800`,
      'indigo-900': xw`hover:bg-indigo-900`,
      'purple-50': xw`hover:bg-purple-50`,
      'purple-100': xw`hover:bg-purple-100`,
      'purple-200': xw`hover:bg-purple-200`,
      'purple-300': xw`hover:bg-purple-300`,
      'purple-400': xw`hover:bg-purple-400`,
      'purple-500': xw`hover:bg-purple-500`,
      'purple-600': xw`hover:bg-purple-600`,
      'purple-700': xw`hover:bg-purple-700`,
      'purple-800': xw`hover:bg-purple-800`,
      'purple-900': xw`hover:bg-purple-900`,
      'pink-50': xw`hover:bg-pink-50`,
      'pink-100': xw`hover:bg-pink-100`,
      'pink-200': xw`hover:bg-pink-200`,
      'pink-300': xw`hover:bg-pink-300`,
      'pink-400': xw`hover:bg-pink-400`,
      'pink-500': xw`hover:bg-pink-500`,
      'pink-600': xw`hover:bg-pink-600`,
      'pink-700': xw`hover:bg-pink-700`,
      'pink-800': xw`hover:bg-pink-800`,
      'pink-900': xw`hover:bg-pink-900`,
    },
  },
};

export const borderStyles = {
  color: {
    transparent: xw`border-transparent`,
    current: xw`border-current`,
    black: xw`border-black`,
    white: xw`border-white`,
    'gray-50': xw`border-gray-50`,
    'gray-100': xw`border-gray-100`,
    'gray-200': xw`border-gray-200`,
    'gray-300': xw`border-gray-300`,
    'gray-400': xw`border-gray-400`,
    'gray-500': xw`border-gray-500`,
    'gray-600': xw`border-gray-600`,
    'gray-700': xw`border-gray-700`,
    'gray-800': xw`border-gray-800`,
    'gray-900': xw`border-gray-900`,
    'red-50': xw`border-red-50`,
    'red-100': xw`border-red-100`,
    'red-200': xw`border-red-200`,
    'red-300': xw`border-red-300`,
    'red-400': xw`border-red-400`,
    'red-500': xw`border-red-500`,
    'red-600': xw`border-red-600`,
    'red-700': xw`border-red-700`,
    'red-800': xw`border-red-800`,
    'red-900': xw`border-red-900`,
    'yellow-50': xw`border-yellow-50`,
    'yellow-100': xw`border-yellow-100`,
    'yellow-200': xw`border-yellow-200`,
    'yellow-300': xw`border-yellow-300`,
    'yellow-400': xw`border-yellow-400`,
    'yellow-500': xw`border-yellow-500`,
    'yellow-600': xw`border-yellow-600`,
    'yellow-700': xw`border-yellow-700`,
    'yellow-800': xw`border-yellow-800`,
    'yellow-900': xw`border-yellow-900`,
    'green-50': xw`border-green-50`,
    'green-100': xw`border-green-100`,
    'green-200': xw`border-green-200`,
    'green-300': xw`border-green-300`,
    'green-400': xw`border-green-400`,
    'green-500': xw`border-green-500`,
    'green-600': xw`border-green-600`,
    'green-700': xw`border-green-700`,
    'green-800': xw`border-green-800`,
    'green-900': xw`border-green-900`,
    'blue-50': xw`border-blue-50`,
    'blue-100': xw`border-blue-100`,
    'blue-200': xw`border-blue-200`,
    'blue-300': xw`border-blue-300`,
    'blue-400': xw`border-blue-400`,
    'blue-500': xw`border-blue-500`,
    'blue-600': xw`border-blue-600`,
    'blue-700': xw`border-blue-700`,
    'blue-800': xw`border-blue-800`,
    'blue-900': xw`border-blue-900`,
    'indigo-50': xw`border-indigo-50`,
    'indigo-100': xw`border-indigo-100`,
    'indigo-200': xw`border-indigo-200`,
    'indigo-300': xw`border-indigo-300`,
    'indigo-400': xw`border-indigo-400`,
    'indigo-500': xw`border-indigo-500`,
    'indigo-600': xw`border-indigo-600`,
    'indigo-700': xw`border-indigo-700`,
    'indigo-800': xw`border-indigo-800`,
    'indigo-900': xw`border-indigo-900`,
    'purple-50': xw`border-purple-50`,
    'purple-100': xw`border-purple-100`,
    'purple-200': xw`border-purple-200`,
    'purple-300': xw`border-purple-300`,
    'purple-400': xw`border-purple-400`,
    'purple-500': xw`border-purple-500`,
    'purple-600': xw`border-purple-600`,
    'purple-700': xw`border-purple-700`,
    'purple-800': xw`border-purple-800`,
    'purple-900': xw`border-purple-900`,
    'pink-50': xw`border-pink-50`,
    'pink-100': xw`border-pink-100`,
    'pink-200': xw`border-pink-200`,
    'pink-300': xw`border-pink-300`,
    'pink-400': xw`border-pink-400`,
    'pink-500': xw`border-pink-500`,
    'pink-600': xw`border-pink-600`,
    'pink-700': xw`border-pink-700`,
    'pink-800': xw`border-pink-800`,
    'pink-900': xw`border-pink-900`,
  },
};

export const buttonStyles = {
  variant: {
    primary: {
      default: xw`bg-indigo-500 text-white hover:bg-indigo-600 border-indigo-500`,
      disabled: xw`bg-indigo-300 text-white hover:bg-indigo-300 border-indigo-300 cursor-not-allowed`,
    },
    secondary: {
      default: xw`bg-indigo-100 text-indigo-600 hover:bg-indigo-200 border-indigo-100`,
      disabled: xw`bg-indigo-50 text-indigo-300 hover:bg-indigo-50 border-indigo-50 cursor-not-allowed`,
    },
    base: {
      default: xw`border border-gray-300 bg-white text-gray-500 rounded-md px-4 py-2 transition duration-300 ease-linear select-none hover:bg-gray-100 focus:outline-none focus:ring-4`,
      disabled: xw`border border-gray-100 bg-white text-gray-300 rounded-md px-4 py-2 transition duration-300 ease-linear select-none hover:bg-gray-100 focus:outline-none focus:ring-4 cursor-not-allowed`,
    },
  },
  rounded: xw`rounded-full`,
  size: {
    small: xw`text-xs`,
    default: xw`text-base`,
    medium: xw`text-xl`,
    large: xw`text-2xl`,
  },
};
