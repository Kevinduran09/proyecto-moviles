import React from 'react'
import Card from './Card';
import { IonIcon } from '@ionic/react';
import { leafOutline } from 'ionicons/icons';

interface TodayProgressProps {
    items: number[];
}

const TodayProgress: React.FC<TodayProgressProps> = ({ items }) => {
    const TARGET_ITEMS = 3;
    const progressPercentage = Math.min((items.length / TARGET_ITEMS) * 100, 100);
    return (
        <Card>
            <div className=''>
                <div className='flex items-center justify-between mb-2.5'>
                    <span className='text-md font-bold'>Progreso de Hoy</span>
                    <div className='textsm text-green-500 font-semibold'>
                        {items.length}/{TARGET_ITEMS}
                    </div>
                </div>
                {/* Progress bar */}
                <div className='mb-5'>
                    <div className='w-full h-2 bg-white/20 rounded-full mb-2.5'>
                        <div className='h-full rounded-full bg-green-500' style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                    <span className='block text-sm text-zinc-700 font-normal text-center mt-2.5'>
                        {items.length >= TARGET_ITEMS ? "¡Increíble! Ya cumpliste tu meta diaria 🎉" : `${TARGET_ITEMS - items.length} más para mantener tu racha 🔥`}
                    </span>
                </div>
                {/* Empty State */}
                {items.length === 0 && (
                    <div className='items-center flex flex-col mt-8'>
                        <IonIcon icon={leafOutline} className='text-gray-600/40 size-12'>
                        </IonIcon>
                        <span className='text-md mt-2.5 text-zinc-900/80 font-semibold'>¡Comienza tu día reciclando!</span>
                        <span className='text-sm mt-2.5  text-zinc-500'>Toca el botón de escanear para comenzar</span>
                    </div>
                )}
            </div>
        </Card >
    );
}

export default TodayProgress