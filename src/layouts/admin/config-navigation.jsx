import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'document',
    path: '/document',
    icon: icon('ic_user'),
  },
  {
    title: 'document',
    path: '/document',
    icon: icon('ic_user'),
  },
];

export default navConfig;
