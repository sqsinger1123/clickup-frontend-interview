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
                            className={`tab-title flex first:mx-0 mx-2 p-2 rounded-md
                                ${activeTab === index ? 'active font-bold bg-blue-600 text-white' : 'text-blue-600'}
                                ${tab.isDisabled ? 'cursor-not-allowed text-gray-500' : 'cursor-pointer'}
                            `}
                            disabled={tab.isDisabled}
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