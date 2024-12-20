import { useState } from "react";
import { useNavigate, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";

type TabTypes = {
    id: string;
    label: string;
    route: string
}

export default function TabsWithOutReactRouter({ tabId }: { tabId: string }) {
    const tabs: TabTypes[] = [
        { id: 'tabs', label: "Home", route: "/tabs" },
        { id: 'tabs/news', label: "News", route: "/tabs/news" },
        { id: 'tabs/about-us', label: "About Us", route: "/tabs/about-us" }
    ];
    const navigate = useNavigate();
    const location = useLocation();

    const defaultTab = tabs.find((t) => (t.id === tabId));
    const [activeTab, setActiveTab] = useState(defaultTab?.id ? defaultTab?.id : tabs?.[0]?.id);

    const handleTabClick = (tab: TabTypes) => {
        setActiveTab(tab?.id);
        return navigate(tab?.route);
    };
    return (
        <div className="space-y-2">
            {/* Main Tabs */}
            <div className="flex space-x-1">
                {tabs.map((tab: TabTypes) => {
                    const isActive = (tab.route)?.replace('/tabs', '') === (location.pathname)?.replace('/tabs', '');
                    return (
                        <button
                            key={tab.id}
                            onClick={() => handleTabClick(tab)}
                            className={`${activeTab === tab.id || isActive ? "" : "hover:text-white/60"
                                } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
                            style={{
                                WebkitTapHighlightColor: "transparent",
                            }}
                        >
                            {(activeTab === tab.id || isActive) && (
                                <motion.span
                                    layoutId="tabbubblewithoutreactrouter"
                                    className="absolute inset-0 z-10 bg-green-300 mix-blend-difference"
                                    style={{ borderRadius: 9999 }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {tab.label}
                        </button>
                    )
                })}
            </div>
        </div>
    );
}