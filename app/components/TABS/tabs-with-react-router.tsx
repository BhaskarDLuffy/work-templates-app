import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";

type TabTypes = {
    id: number;
    label: string;
    route: string
}

const TabsWithReactRouter = () => {
    const tabs: TabTypes[] = [
        { id: 1, label: "Home", route: "/tabs" },
        { id: 2, label: "News", route: "/tabs/news" },
        { id: 3, label: "About Us", route: "/tabs/about-us" }
    ];

    return (
        <div className="space-y-2">
            <div className="flex space-x-5">
                {tabs.map((tab: TabTypes) => (
                    <NavLink
                        end
                        key={tab.id}
                        to={tab.route}
                        className={({ isActive }: { isActive: boolean }) =>
                            `${isActive ? "text-green-400" : "text-white hover:text-white/60"} relative font-poppins text-base rounded-full px-3 py-1.5 font-medium outline-sky-400 transition focus-visible:outline-2`
                        }
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {({ isActive }: { isActive: boolean }) => (
                            <>
                                {isActive && (
                                    <motion.span
                                        layoutId="tabbubble"
                                        className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-green-200 rounded-full mix-blend-difference"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {tab.label}
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default TabsWithReactRouter