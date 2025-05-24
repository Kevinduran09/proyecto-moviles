import { IonIcon } from '@ionic/react';
import React from 'react'
import { flame } from 'ionicons/icons';
import Card from './Card';
interface StreakCardProps {
    streak: number;
}
const StreakCard = ({ streak }: StreakCardProps) => {
    return (
        <Card>
            <div className="flex flex-1 gap-4 justify-center items-center">
                <IonIcon icon={flame} className='text-[#FF6B35] size-8 bg-[#FF6B35]/20 rounded-full p-2'  ></IonIcon>
                <div className='flex flex-col'>
                    <span className='text-2xl font-bold'>{streak}</span>
                    <span className='text-gray-500 text-sm'> Días de racha</span>
                </div>
            </div>
        </Card>
    )
}

export default StreakCard