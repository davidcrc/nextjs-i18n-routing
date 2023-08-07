import { getDictionary } from "@/getDictionary";

type HomeProps = {
  params: { lang: string };
};

export default async function Home({ params }: HomeProps) {
  const lang = await getDictionary(params.lang);

  return (
    <div className="flex flex-col text-white max-w-md">
      <div className="flex flex-col gap-2">
        <label>{lang.form.name}</label>
        <input type="text" />
      </div>

      <div className="flex flex-col gap-2">
        <label>{lang.form.email}</label>
        <input type="text" />
      </div>

      <div className="flex flex-col gap-2">
        <label>{lang.form.city}</label>
        <input type="text" />
      </div>
    </div>
  );
}
