import { Button } from '@/components/ui/Button';
import { Card, CardHeader } from '@/components/ui/Card';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  query: z.string().optional(),
});

export default function SearchPanel() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('@searchPanel: ', values);
    // Logic for submit form
  }

  return (
    <Card className="py-4">
      <CardHeader className="gap-0 px-4">
        <Form {...form}>
          <form
            className="flex w-full gap-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormControl>
                    <Input placeholder="Search datasets" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" variant="secondary">
              Search
            </Button>
          </form>
        </Form>
      </CardHeader>
    </Card>
  );
}
