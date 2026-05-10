import React from 'react';
import { styleVars } from '../common/styleVars';

interface TabContent {
  label: string;
  content: string;
}

interface ProductTabsProps {
  tabs: TabContent[];
}

export default function ProductTabs({ tabs }: ProductTabsProps) {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="mt-lg flex flex-col gap-md">
      {tabs.map((tab, idx) => (
        <details key={idx} className="group border-b border-outline-variant/20 pb-sm">
          <summary
            className="flex justify-between items-center cursor-pointer list-none py-base outline-none"
            onClick={() => setActiveTab(activeTab === idx ? -1 : idx)}
          >
            <span className="font-body-md font-semibold text-on-surface">{tab.label}</span>
            <span className="material-symbols-outlined group-open:rotate-180 ${styleVars.transition}">
              expand_more
            </span>
          </summary>
          {activeTab === idx && (
            <div className="pt-base text-on-surface-variant text-label-sm leading-loose">
              {tab.content}
            </div>
          )}
        </details>
      ))}
    </div>
  );
}
