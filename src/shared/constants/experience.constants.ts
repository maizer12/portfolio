export const getExperienceTabs = (t: (a: string) => string) => ({
  triggers: [
    { name: 'Global Services', value: 'global' },
    { name: 'MAXOPEN', value: 'maxopen' },
    { name: 'DirectHills LLC', value: 'hills' },
  ],
  contents: [
    {
      value: 'global',
      company: t('global.company'),
      date: t('global.date'),
      position: t('global.position'),
      desc: t('global.desc'),
      icons: ['SiVuedotjs', 'SiJavascript', 'SiWebpack', 'SiPhp', 'SiWordpress'],
    },
    {
      value: 'maxopen',
      company: t('maxopen.company'),
      date: t('maxopen.date'),
      position: t('maxopen.position'),
      desc: t('maxopen.desc'),
      icons: ['SiJavascript', 'SiJquery', 'SiGulp', 'SiBootstrap', 'SiWordpress'],
    },
    {
      value: 'hills',
      company: t('hills.company'),
      date: t('hills.date'),
      position: t('hills.position'),
      desc: t('hills.desc'),
      icons: ['FaReact', 'SiTypescript', 'SiRedux', 'SiSwagger', 'FaJava'],
    },
  ],
});
