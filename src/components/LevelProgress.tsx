import React from 'react'

interface LevelStats {
    nivel: number;
    xp: number;
    nextLevel: number;
}

const LevelProgress: React.FC<{ stats: LevelStats }> = ({ stats }) => {

    return (
        <div className='rounded-xl bg-white/20 p-5 mb-5'>
            <div className='flex justify-between items-center mb-2.5'>
                <span className='text-white text-md font-bold'>
                    Nivel {stats.nivel}
                </span>
                <span className='text-white text-md font-bold'>
                    {stats.xp} xp
                </span>
            </div>
            <div className='w-full h-2 bg-white/20 rounded-full'>
                <div className='h-full bg-white rounded-full' style={{ width: `${stats.xp / stats.nextLevel * 100}%` }}></div>
            </div>
            <div className='flex justify-center items-center mt-2.5'>
                <span className='text-white text-xs'>
                    {stats.nextLevel} xp para el siguiente nivel
                </span>
            </div>
         
        </div>
    )
}

export default LevelProgress