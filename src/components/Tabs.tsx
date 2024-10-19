'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('marshrutnoe_taxi');

  return (
    <div className="tabs-container">
      {/* Заголовки табов */}
      <div className="tabs-header">
        <button
        
          className={activeTab === 'marshrutnoe_taxi' ? 'active' : ''}
          onClick={() => setActiveTab('marshrutnoe_taxi')}
        >
          Маршрутное Такси
        </button>
        <button
          className={activeTab === 'transfer' ? 'active' : ''}
          onClick={() => setActiveTab('transfer')}
        >
          Трансфер
        </button>
        <button
          className={activeTab === 'route' ? 'active' : ''}
          onClick={() => setActiveTab('route')}
        >
          Проложить Маршрут
        </button>
      </div>

      {/* Содержимое табов */}
      <div className="tabs-content">
        {activeTab === 'marshrutnoe_taxi' && (
          <div className='flex justify-between'>
            <Image width={400} height={200} src={"/image/avtobus.png"} alt='334123'/>
            <Image width={600} height={131} src={"/image/mappppp.png"} alt='map'/>
          </div>
        )}

        {activeTab === 'transfer' && (
          <div>
            <p>Информация о трансфере...</p>
          </div>
        )}

        {activeTab === 'route' && (
          <div>
            <p>Схема маршрута и карта...</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .tabs-header {
          display: flex;
          gap: 10px;
        }
        button {
            background-color: #FFC64F;
            border-radius: 100px;
            height: 32px;
            padding: 9px 32px;
            justify-content: center;
            display: flex;
            align-items: center;
            color: rgb(255, 255, 255);
        }
        button.active {
          background-color: #1F1F1F;
        }
        .tabs-content {
          margin-top: 20px;
          color: white;
        }
      `}</style>
    </div>
  );
}
