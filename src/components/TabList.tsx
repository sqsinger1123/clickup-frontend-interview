import { Children, useState } from 'react';

type Tab = {
    id: number;
    title: string;
    content: React.ReactNode;
}

// Like a ul for our tab components.
function TabList({ tabsData }: { tabsData: Tab[] }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <ul className="w-full tab-titles">
                {tabsData.map((tab, index) => (
                    <li
                        key={tab.id}
                        className={`tab-title ${activeTab === index ? 'active italic font-bold' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                {tabsData[activeTab].content}
            </div>
        </>
    );
}

export default TabList;