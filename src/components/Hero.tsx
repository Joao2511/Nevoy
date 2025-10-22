import SplineViewer from '@/components/SplineViewer';

export default function Hero() {
  return (
    <main id="hero" className="overflow-x-hidden text-white">
      <section className="flex flex-col items-center justify-center pb-14 text-center">
        <div className="pointer-events-none w-full pb-12">
          <SplineViewer />
        </div>
      </section>
    </main>
  );
}
