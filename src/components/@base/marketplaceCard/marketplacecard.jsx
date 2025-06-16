
const MarketplaceCard = ({
  logo,
  name,
  isLinked = false,
  disabled = false,
  onClick,
  customContent,
  comingSoon = false
}) => {
  const cardClasses = `
    flex flex-col items-center 
    w-full h-[130px] py-3 
    bg-[rgba(255,_255,_255,_1)] 
    rounded-xl 
    ${disabled || isLinked ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer hover:shadow-md transition-all duration-300'}
  `;

  if (customContent) {
    return (
      <div className={cardClasses}>
        {customContent}
      </div>
    );
  }

 
  const renderLogo = (logo) => {
    if (comingSoon) {
      return (
        <div className="relative">
          <div className="w-[48px] h-[48px] rounded-full bg-[#f5f5f5] flex items-center justify-center">
            <span className="text-xs font-medium text-gray-400">
            <Image 
          src={logo} 
          alt={`${name} logo`} 
          className="w-[48px] h-[48px] rounded-full"
        />
            </span>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-500 text-white text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">
            Coming Soon
          </div>
        </div>
      );
    }
  
    if (logo) {
      return (
        <Image 
          src={logo} 
          alt={`${name} logo`} 
          className="w-[48px] h-[48px] rounded-full"
        />
      );
    }
  
    return (
      <div className="w-[48px] h-[48px] rounded-full bg-[#f5f5f5] flex items-center justify-center">
        <span className="text-xs font-medium text-gray-400">Logo</span>
      </div>
    );
  };
  return (
    <div 
      className={cardClasses}
      // onClick={() => !disabled && !isLinked && onClick?.()}
      onClick={() => !disabled && !isLinked && onClick?.()}
    >
      {renderLogo(logo)}

      <div className="h-6 mt-4">
        <span className="font-bold text-[16px] leading-[17px] text-[rgba(0,_0,_0,_0.7)]">
          {name}
        </span>
      </div>

      {isLinked && (
        <div className="flex items-center mt-2">
          <span className="text-green-500">Linked</span>
        </div>
      )}
    </div>
  );
};

export default MarketplaceCard; 