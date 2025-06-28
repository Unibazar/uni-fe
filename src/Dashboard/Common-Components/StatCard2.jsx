import React from 'react';

const StatCard2 = ({ 
  title, 
  count1, count1Label,
  count2, count2Label,
  count3, count3Label,
  count4, count4Label,
  count5, count5Label,
  Icon, 
  bgColor = "#E4E4FF", 
  textColor = "#8280FF"
}) => {
  // Filter only available data
  const analyticsData = [
    { label: count1Label, value: count1 },
    { label: count2Label, value: count2 },
    { label: count3Label, value: count3 },
    { label: count4Label, value: count4 },
    { label: count5Label, value: count5 }
  ].filter(({ value }) => value !== undefined);

  return (
    <div className="flex-1 min-w-[250px] p-4 rounded-lg shadow-sm" style={{ backgroundColor: bgColor }}>
      <div className="flex justify-between items-start">
        <p className="text-gray-600 font-medium">{title}</p>
        {Icon && (
          <div className="p-2 rounded-md" style={{ backgroundColor: `${textColor}20`, color: textColor }}>
            <Icon size={20} />
          </div>
        )}
      </div>

      {/* Render Analytics Data in Grid Format */}
      <div className="grid grid-cols-2 gap-2 mt-3">
        {analyticsData.map(({ label, value }) => (
          <div key={label} className="text-sm font-medium text-gray-700 flex justify-between">
            <span>{label}:</span>
            <span style={{ color: textColor }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCard2;
