import {
  cibBootstrap,
  cibCodeClimate,
  cibGulp,
  cibJava,
  cibJquery,
  cibJs,
  cibPhp,
  cibReact,
  cibRedux,
  cibSwagger,
  cibTypescript,
  cibVueJs,
  cibWebpack,
  cibWordpress,
} from '@coreui/icons';
import { cibNextJs, cibNodeJs, cibSocketIo, cibElectron } from '@coreui/icons';
import { cibGithub, cibLinkedin, cibTelegram } from '@coreui/icons';

export const contactsArray = [
  { link: 'https://www.linkedin.com/in/vasil-bazhiv-565a5424b/', icon: cibLinkedin, name: 'Linkedin' },
  { link: 'https://t.me/vasilbazhiv', icon: cibTelegram, name: 'Telegram' },
  { link: 'https://github.com/maizer12', icon: cibGithub, name: 'GitHub' },
];

export const techFilters = [
  { value: '', label: 'All', icon: cibCodeClimate, fill: 'fill-slate-200' },
  { value: 'react', label: 'React', icon: cibReact, fill: 'fill-blue-600' },
  { value: 'next', label: 'Next', icon: cibNextJs, fill: 'fill-white' },
  { value: 'vue', label: 'Vue', icon: cibVueJs, fill: 'fill-green-500' },
  { value: 'ts', label: 'TS', icon: cibTypescript, fill: 'fill-blue-400' },
  { value: 'node', label: 'Node', icon: cibNodeJs, fill: 'fill-green-600' },
  { value: 'websocket', label: 'Websocket', icon: cibSocketIo, fill: 'fill-gray-400' },
  { value: 'electron', label: 'Electron', icon: cibElectron, fill: 'fill-blue-700' },
  { value: 'jquery', label: 'Jquery', icon: cibJquery, fill: 'fill-blue-500' },
];
