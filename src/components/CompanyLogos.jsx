import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping Businesses Grow with Technology & AI
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[19.5rem] rounded-lg bg-n-8/10"
            key={index}
          >
            <img src={logo} width={350} height={70} alt={logo} />
          </li>
        ))}
      </ul>    </div>
  );
};

export default CompanyLogos;
