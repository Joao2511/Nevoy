import SplineViewer from "@/components/SplineViewer";

export default function Hero() {
    return (
        <main className="text-white overflow-x-hidden">
            <section className="flex flex-col items-center justify-center text-center pb-14">

                <div className="w-full pointer-events-none pb-12">
                    <SplineViewer/>
                </div>
            </section>
        </main>
    );
}
