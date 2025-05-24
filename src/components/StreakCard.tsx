import { IonIcon } from '@ionic/react';
import React from 'react'
import { flame } from 'ionicons/icons';
import Card from './Card';
// import Title from './ui/Title';
import Text from './ui/Text';

interface StreakCardProps {
    streak: number;
}

const StreakCard = ({ streak }: StreakCardProps) => {
    return (
        <Card className='py-4 px-3' >
            <div className="flex justify-center items-center space-x-2.5">
                <IonIcon icon={flame} className='text-[#FF6B35] size-8 bg-[#FF6B35]/20 rounded-full p-2'></IonIcon>
                <div className=''>
                    <Text  color='black' className='!font-bold !text-3xl'>{streak}</Text>
                    <Text size="base" color="gray">Días de racha</Text>
                </div>
            </div>
        </Card>
    )
}

export default StreakCard