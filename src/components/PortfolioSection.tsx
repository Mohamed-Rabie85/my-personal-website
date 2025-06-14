import Link from "next/link"; // للتأكد من وجود Link إذا تم استخدامه
import VerdeVerticalDashboard from "./VerdeVerticalDashboard";

export default function PortfolioSection() {
  return (
    <section className="w-full py-16 bg-[var(--neutral-light)] text-[var(--primary-dark)]">
      {/* <div className="section-container"> */}
        <div className="text-center mb-12">
          <h2 className="text-[var(--primary-medium)] mb-3">خبرة من أرض الواقع</h2>
          <p className="text-xl max-w-3xl mx-auto text-[var(--primary-dark)]">
            من تأسيس شركات تسويق وإعلام، إلى إعادة هيكلة مراكز طبية. هذه بعض المشاريع التي تثبت أن تركيزنا دائمًا على النتائج العملية
          </p>
        </div>
        <VerdeVerticalDashboard />

        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn-secondary">
            المزيد من المشاريع
          </Link>
        </div>
      {/* </div> */}
    </section>
  );
}