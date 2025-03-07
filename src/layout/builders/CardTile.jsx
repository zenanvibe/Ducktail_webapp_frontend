import React, { useEffect } from 'react';
import useDashboardStore from '../../store/builders/useDashboardStore';

const CardTile = () => {
  const { cardTile, isLoading, getCardTile } = useDashboardStore();

  useEffect(() => {
    getCardTile();
  }, [getCardTile]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="relative bg-gradient-to-br rounded-xl shadow-lg p-3 w-96 overflow-hidden" style={{ backgroundColor: "#D0D0D0" }}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <img src="/assets/black logo.png" alt="Ducktail Logo" className="h-6" />
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs font-medium tracking-wide text-gray-800">LICENSE CARD</span>
            <span className={`bg-${cardTile?.status === 'active' ? 'green' : 'red'}-500 text-white text-xs px-3 py-1 rounded-md`}>
              {cardTile?.status || 'Unknown'}
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1 tracking-wide">{cardTile?.company_name || 'N/A'}</h1>
            <p className="text-gray-700 tracking-wider">{cardTile?.company_id || 'N/A'}</p>
          </div>

          <div className="flex items-center gap-6">
            <img src="/assets/Ducktail-02.png" alt="Bottom Left Logo" className="h-10" />
            <p className="text-sm pt-6 text-gray-700 tracking-wide">
              Valid Upto - {cardTile?.validity_end_date ? new Date(cardTile.validity_end_date).toLocaleDateString() : 'N/A'}
            </p>
          </div>

          <div className="absolute top-0 right-0 w-1/2 h-full flex justify-end items-end opacity-85">
            <img src="/assets/image 1.png" alt="Map Design" className="object-contain" style={{ transform: 'scale(1.9) translateX(19%) translateY(10%)' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTile;
