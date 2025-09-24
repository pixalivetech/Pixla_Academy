// src/components/PartnersSection.jsx
import Logo1 from "./../../assets/Land/logo1.png";
import Logo2 from "./../../assets/Land/logo2.png";
import Logo3 from "./../../assets/Land/logo3.png";
import Logo4 from "./../../assets/Land/logo4.png";
import Logo5 from "./../../assets/Land/logo5.png";

export default function PartnersSection() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="px-6 md:px-24 flex flex-wrap justify-center items-center gap-8 md:gap-30">
        {/* Logo Items */}
        <img src={Logo1} alt="Partner 1" className="h-10 md:h-30 object-contain" />
        <img src={Logo2} alt="Partner 2" className="h-10 md:h-30 object-contain" />
        <img src={Logo3} alt="Partner 3" className="h-10 md:h-30 object-contain" />
        <img src={Logo4} alt="Partner 4" className="h-10 md:h-30 object-contain" />
        <img src={Logo5} alt="Partner 5" className="h-10 md:h-30 object-contain" />
      </div>
    </section>
  );
}