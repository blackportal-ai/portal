import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';

type Props = {
  deltaContent: string;
  nebulaContent: string;
};

export default function GetStartedTabs({ deltaContent, nebulaContent }: Props) {
  return (
    <Tabs className="mx-auto max-w-5xl" defaultValue="delta">
      <TabsList className="mb-6 grid w-full grid-cols-2">
        <TabsTrigger value="delta">Delta</TabsTrigger>
        <TabsTrigger value="nebula">Nebula</TabsTrigger>
      </TabsList>

      <div className="prose prose-sm mx-auto max-w-5xl dark:prose-invert">
        <TabsContent value="delta">
          <div dangerouslySetInnerHTML={{ __html: deltaContent }} />
        </TabsContent>

        <TabsContent value="nebula">
          <div dangerouslySetInnerHTML={{ __html: nebulaContent }} />
        </TabsContent>
      </div>
    </Tabs>
  );
}
