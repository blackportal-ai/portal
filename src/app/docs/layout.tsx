import { DocsLayout } from 'fumadocs-ui/layouts/docs';

import { baseOptions } from '@/app/layout.config';
import Footer from '@/components/Footer';
import DeltaIcon from '@/components/icons/DeltaIcon';
import HorizonIcon from '@/components/icons/HorizonIcon';
import NebulaIcon from '@/components/icons/NebulaIcon';
import { docsSource } from '@/lib/source';

type Props = {
  children: React.ReactNode;
};

export default function DocsPagesLayout({ children }: Readonly<Props>) {
  return (
    <div>
      <DocsLayout
        tree={docsSource.pageTree}
        sidebar={{
          defaultOpenLevel: 1,
          tabs: [
            {
              title: 'Delta',
              description: 'Machine Learning Framework',
              url: '/docs/delta',
              icon: (
                <SidebarTabWrapper>
                  <DeltaIcon />
                </SidebarTabWrapper>
              ),
            },
            {
              title: 'Nebula',
              description: 'Package Manager for Datasets & Models',
              url: '/docs/nebula',
              icon: (
                <SidebarTabWrapper>
                  <NebulaIcon />
                </SidebarTabWrapper>
              ),
            },
            {
              title: 'Horizon',
              description: 'Decentralized GPU Marketplace',
              url: '/docs/horizon',
              icon: (
                <SidebarTabWrapper>
                  <HorizonIcon />
                </SidebarTabWrapper>
              ),
            },
          ],
        }}
        {...baseOptions}
      >
        {children}

        <Footer isDocs />
      </DocsLayout>
    </div>
  );
}

function SidebarTabWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="shadow-primary rounded-sm p-1.5 shadow-[0_0_6px_1px] [&_svg]:size-6.5 md:[&_svg]:size-5">
      {children}
    </div>
  );
}
