import { paths } from '@/paths';
import {
  IconBrandGoogleAnalytics,
  IconUsersGroup,
  IconArchive,
  IconPackages,
} from '@tabler/icons-react';

import { v4 as uniqueId } from 'uuid';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Inicio',
  },

  {
    id: uniqueId(),
    title: 'Analíticas',
    icon: IconBrandGoogleAnalytics,
    href: paths.dashboard,
  },

  {
    navlabel: true,
    subheader: 'Mi Cuenta',
  },

  {
    navlabel: true,
    subheader: 'Administrar',
  },
  {
    id: uniqueId(),
    title: 'Usuarios',
    icon: IconUsersGroup,
    href: paths.users.list,
  },
  {
    id: uniqueId(),
    title: 'Materiales',
    icon: IconPackages,
    href: paths.businesses.list,
  },
  {
    id: uniqueId(),
    title: 'Prestamos',
    icon: IconArchive,
    href: paths.businesses.list,
  },
];

export default Menuitems;
