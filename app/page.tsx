import Content from "./_components/content";
import Title from "./_components/title";
import Product from "./_components/product";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 sm:pt-6 font-[family-name:var(--font-geist-sans)]">
      <main className="flex gap-8 items-center ">
        <div className="w-full h-full">
          <Title />
        </div>
        <div className="w-[1100px] h-[600px]">
          <Content />
        </div>
      </main>
      <div className="mt-72 w-full h-fit bg-gray-800">
        <Product />
      </div>
    </div>
  );
}
