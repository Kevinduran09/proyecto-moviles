import React from 'react'
import Title from './ui/Title';
import Text from './ui/Text';

interface LevelStats {
    nivel: number;
    xp: number;
    nextLevel: number;
}

const LevelProgress: React.FC<{ stats: LevelStats }> = ({ stats }) => {
    return (
        <div className='rounded-xl bg-white/20 p-5 mb-5'>
            <div className='flex justify-between items-center mb-2.5'>
                <Title variant="h4" color="white">
                    Nivel {stats.nivel}
                </Title>
                <Title variant="h4" color="white">
                    {stats.xp} xp
                </Title>
            </div>
            <div className='w-full h-2 bg-white/20 rounded-full'>
                <div className='h-full bg-white rounded-full' style={{ width: `${stats.xp / stats.nextLevel * 100}%` }}></div>
            </div>
            <div className='flex justify-center items-center mt-2.5'>
                <Text size="xs" color="white">
                    {stats.nextLevel} xp para el siguiente nivel
                </Text>
            </div>
        </div>
    )
}

export default LevelProgress