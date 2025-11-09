import { siteContent } from '../data/content';
import { Link } from 'react-router-dom';

const PriceTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-teal-50 border-b-2 border-teal-100">
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Service</th>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Duration</th>
            <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {siteContent.prices.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-gray-900 font-medium">{item.service}</td>
              <td className="px-6 py-4 text-gray-600">{item.duration}</td>
              <td className="px-6 py-4 text-right text-teal-600 font-bold text-lg">
                {item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 p-6 bg-teal-50 rounded-lg">
        <p className="text-sm text-gray-700 mb-4">
          <strong>Note:</strong> All prices are for self-paying patients. Initial appointments
          include a comprehensive assessment and treatment plan.
        </p>
        <Link
          to="/contact#book"
          className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
};

export default PriceTable;
