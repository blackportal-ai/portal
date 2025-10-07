import type { PackageInfo } from '@/types/nebula-registry';

async function search(query: string | null) {
  if (!!query?.length) {
    return data.filter((item) =>
      item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    );
  }

  return data;
}

export default {
  search,
};

const data: PackageInfo[] = [
  {
    name: 'Test title 1',
    version: '1.0.1',
    description: 'Test description',
    download_size: 2809128390,
    installed_size: 2999129390,
    license: '',
  },
  {
    name: 'Test title 2',
    version: '2.0.3',
    description: 'Test description',
    download_size: 1290030,
    installed_size: 1990030,
    license: '',
  },
  {
    name: 'Test title 3',
    version: '0.1.0',
    description: 'Test description',
    download_size: 2809128390,
    installed_size: 2999129390,
    license: '',
  },
  {
    name: 'Test title 4',
    version: '0.9.0',
    description: 'Test description',
    download_size: 1290030,
    installed_size: 1990030,
    license: '',
  },
  {
    name: 'Test title 5',
    version: '1.1.4',
    description: 'Test description',
    download_size: 2809128390,
    installed_size: 2999129390,
    license: '',
  },
  {
    name: 'Test title 6',
    version: '1.0.0',
    description: 'Test description',
    download_size: 1290030,
    installed_size: 1990030,
    license: '',
  },
  {
    name: 'Test title 7',
    version: '5.4.2',
    description: 'Test description',
    download_size: 2809128390,
    installed_size: 2999129390,
    license: '',
  },
  {
    name: 'Test title 8',
    version: '2.0.1',
    description: 'Test description',
    download_size: 1290030,
    installed_size: 1990030,
    license: '',
  },
];
