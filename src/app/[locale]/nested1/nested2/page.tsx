import { getIntl } from "@/lib/intl";

type HomeProps = {
  params: { locale: string };
};

export default function Nested({ params: { locale } }: HomeProps) {
  const intl = await getIntl(locale);
  return (
    <div >
      <main >
        <h1 >
          {intl.formatMessage(
            { id: "page.nested.title" }
          )}
        </h1>
      </main>
    </div>
  );
}
