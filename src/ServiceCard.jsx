import { Link } from "react-router-dom";

const ServiceCard = ({ serviceimg, altText, text, description, path, className = "", iconClass = "" }) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-md ${className}`}>
      <div className="p-8 text-center">
        <div className={`mx-auto mb-6 w-20 h-20 p-4 rounded-full bg-opacity-10 ${iconClass} ${iconClass.includes('text-') ? 'bg-current' : 'bg-blue-100'}`}>
          <img 
            src={serviceimg} 
            alt={altText} 
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{text}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <Link 
          to={path}
          className={`inline-block px-6 py-3 rounded-lg font-medium transition-colors ${
            iconClass.includes('text-blue') ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' :
            iconClass.includes('text-purple') ? 'bg-purple-100 text-purple-600 hover:bg-purple-200' :
            'bg-amber-100 text-amber-600 hover:bg-amber-200'
          }`}
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;