import React from 'react';

import '../theme/stories.css';

interface Story {
    id: string;
    username: string;
    imageUrl: string;
}

interface StoriesProps {
    stories: Story[];
}

const Stories: React.FC<StoriesProps> = ({ stories }) => {
    return (
        <div className="stories-container">
            {stories.map((story) => (
                <div key={story.id} className="story-item">
                    <div className="story-image-container">
                        <img src={story.imageUrl} alt={story.username} className="story-image" />
                    </div>
                    <div className="story-username">{story.username}</div>
                </div>
            ))}
        </div>
    );
};

export default Stories;
