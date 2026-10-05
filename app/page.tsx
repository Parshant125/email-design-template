import { EmailPreview } from '@/components/email-preview';
import { emailTemplates } from '@/lib/templates';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
        <header>
          <h1 className="text-3xl font-semibold text-foreground">Email templates</h1>
          <p className="mt-2 text-muted-foreground">
            Add a template in <code className="text-foreground">components/templates</code> and
            register it in <code className="text-foreground">lib/templates.ts</code>.
          </p>
        </header>

        <div className="grid gap-6">
          {emailTemplates.map((template) => (
            <EmailPreview key={template.id} template={template} />
          ))}
        </div>
      </div>
    </main>
  );
}
