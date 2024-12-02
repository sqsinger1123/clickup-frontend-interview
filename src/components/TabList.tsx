import { Children, useState } from 'react';

type Tab = {
    id: number;
    title: React.ReactNode;
    content: React.ReactNode;
    isDisabled?: boolean;
}

// Like a ul for our tab components.
function TabList({ tabsData }: { tabsData: Tab[] }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <ul className="w-full tab-titles flex my-2">
                {tabsData.map((tab, index) => (
                    <li
                        key={tab.id}
                    >
                        <button
                            onClick={() => setActiveTab(index)}
                            className={`tab-title flex mx-2 p-2 rounded-md ${activeTab === index ? 'active italic font-bold bg-blue-600 text-white' : ''}`}
                        >
                            {tab.title}
                        </button>
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