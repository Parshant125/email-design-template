import type { EmailTemplate } from '@/types/email';

type EmailPreviewProps = {
  template: EmailTemplate;
};

export function EmailPreview({ template }: EmailPreviewProps) {
  return (
    <section className="overflow-hidden rounded-lg border bg-card">
      <div className="border-b px-5 py-4">
        <h2 className="text-lg font-medium text-card-foreground">{template.name}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{template.subject}</p>
        <p className="mt-2 text-sm text-muted-foreground">{template.description}</p>
      </div>
      <div className="bg-secondary p-6">
        <div className="mx-auto max-w-[600px] rounded-md bg-card p-8 shadow-sm">
          <p className="text-sm text-muted-foreground">Template body goes here.</p>
        </div>
      </div>
    </section>
  );
}
