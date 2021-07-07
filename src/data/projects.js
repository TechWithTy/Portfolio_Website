import { faReact,faSass,faBootstrap } from '@fortawesome/free-brands-svg-icons';

export const projects = [
  {
    title: 'Cyber-Oni',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem sequi molestias impedit, placeat tenetur vitae atque earum modi saepe debitis iusto, labore fugit? Atque repellendus sed ipsum consequatur quisquam.',
    img: process.env.PUBLIC_URL + `/images/image-1.webp`,
    icons: [
      {
        title: 'React',
        icon: faReact,
        color: '#00d1f7',
      },
      {
        title: 'Sass',
        icon: faSass,
        color: '#c66394',
      },
      {
        title: 'Bootstrap',
        icon: faBootstrap,
        color: '#8812fc',
      },
    ],
  },
];
