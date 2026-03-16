import type { PackageInfo } from '@/types/nebula-registry';
import * as React from 'react';

import { Badge } from '@/components/ui/Badge';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

import nebulaRegistryService from '@/lib/services/nebula-registry';
import { formatBytes } from '@/lib/utils';

type Props = {
  query: string;
};

export default function NebulaRegistryList({ query }: Props) {
  const [packageInfoList, setPackageInfoList] = React.useState<PackageInfo[]>(
    [],
  );

  React.useEffect(() => {
    nebulaRegistryService.search(query).then((data) => {
      setPackageInfoList(data);
    });
  }, [query]);

  return (
    <section className="pb-20">
      <div className="container">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {packageInfoList.map((packageInfo, idx) => (
            <li key={`package-info-${idx}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{packageInfo.name}</CardTitle>
                  <CardDescription>{packageInfo.description}</CardDescription>

                  <CardAction>
                    <Badge variant="secondary">v{packageInfo.version}</Badge>
                  </CardAction>
                </CardHeader>

                <CardContent>
                  <ul>
                    <li>
                      Download size: {formatBytes(packageInfo.download_size)}
                    </li>
                    <li>
                      Installed size: {formatBytes(packageInfo.installed_size)}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
