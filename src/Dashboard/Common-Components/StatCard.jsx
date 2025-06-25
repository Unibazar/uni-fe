import React from 'react';

const StatCard = ({ 
  title, 
  count, 
  icon: Icon, 
  bgColor = "#E4E4FF", 
  textColor = "#8280FF", 
  description = "Increased from yesterday",
  isLoading = false,
  percentage = "+12.5%"
}) => {
  return (
    <div 
      className="flex-1 min-w-[250px] p-5 rounded-xl" 
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-gray-600 font-medium">{title}</p>
          {isLoading ? (
            <div className="h-8 w-24 animate-pulse bg-gray-200 rounded"></div>
          ) : (
            <h3 className="text-2xl font-bold" style={{ color: textColor }}>
              {count || 0}
            </h3>
          )}
        </div>
        
        {Icon && (
          <div 
            className="p-3 rounded-lg" 
            style={{ 
              backgroundColor: `${textColor}20`,
              color: textColor 
            }}
          >
            <Icon size={24} />
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span 
          className="text-sm font-medium"
          style={{ color: textColor }}
        >
          {percentage}
        </span>
        <span className="text-sm text-gray-500">
          {description}
        </span>
      </div>
    </div>
  );
};

export default StatCard; 