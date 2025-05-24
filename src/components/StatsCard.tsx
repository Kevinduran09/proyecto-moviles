import { IonIcon } from '@ionic/react';
import React from 'react'
import { trophy } from 'ionicons/icons';
import Card from './Card';
interface StatsCardProps {
    title: string;
    value: string,

}
const StatsCard = ({ title, value }: StatsCardProps) => {
    return (
        <Card>
            <div className="flex  gap-4 justify-center items-center">
                <IonIcon icon={trophy} className='text-[#fdd700] size-8 bg-[#fdd700]/20 rounded-full p-2'  ></IonIcon>
                <div className='flex flex-col'>
                    <span className='text-2xl font-bold'>{value}</span>
                    <span className='text-gray-500 text-sm'> {title}</span>
                </div>
            </div>
        </Card>
    )
}

export default StatsCard