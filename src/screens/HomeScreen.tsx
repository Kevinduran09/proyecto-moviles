import { IonContent, IonPage, IonTitle, IonText } from '@ionic/react';
import { useState } from 'react';
import '../theme/variables.css';
import LevelProgress from '../components/LevelProgress';
import Card from '../components/Card';
import data from '../data.json'
import StreakCard from '../components/StreakCard';
import StatsCard from '../components/StatsCard';
import TodayProgress from '../components/TodayProgress';
import QuickActions from '../components/QuickActions';
const Tab1: React.FC = () => {
    const { stats, achievements } = data.data;

    const [todayItems] = useState([2, 3, 4]);


    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return '¡Buenos días!';
        if (hour < 18) return '¡Buenas tardes!';
        return '¡Buenas noches!';
    };
    const getMotivationalMessage = () => {
        if (todayItems.length === 0) {
            return '¡Comienza tu día reciclando algo! 🌱';
        }
        if (todayItems.length < 3) {
            return `¡Vas genial! Recicla ${3 - todayItems.length} más para mantener tu racha 🔥`;
        }
        return '¡Increíble! Ya cumpliste tu meta diaria 🎉';
    };
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="gradient-primary flex-1">
                    <div className="flex-1 pt-6 px-6">
                        {/* Header */}
                        <div className='flex justify-between items-center mb-5'>
                            <div className='space-y-1'>
                                <IonTitle className='text-white text-2xl font-bold'>
                                    {getGreeting()}, Jose!
                                </IonTitle>
                                <IonText className='text-white text-md'>
                                    <p>
                                        Reciclador Nivel 1
                                    </p>
                                </IonText>
                            </div>
                            <div className='bg-white rounded-full size-15 flex items-center justify-center'>
                                <span className='text-black text-2xl font-bold'>1</span>
                            </div>
                        </div>

                        {/* Progress level */}
                        <LevelProgress stats={stats} />

                        {/* Motivational Message */}
                        <Card>

                            <div className='flex justify-center items-center font-[600] text-gray-800/90'>
                                <span className='text-md'>
                                    {getMotivationalMessage()}
                                </span>
                            </div>
                        </Card>


                        {/* Daily Goals */}
                        <div className='flex flex-row justify-stretch gap-5'>
                            <StreakCard streak={stats.currentStreak} />
                            <StatsCard title='Logros' value={`${stats.unlockedAchievements}/${achievements.length}`} />
                        </div>
                        {/* progress today */}
                        <TodayProgress items={todayItems} />
                        <QuickActions />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
