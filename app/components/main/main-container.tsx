import React from "react";
import { IntroSection } from "./intro-section";
import FeaturedPrompts from "./featured-prompts";
import HottestPrompts from "./hottest-prompts";
import NewestPrompts from "./newest-prompts";
import SectionWrapper from "./section-wrapper";
import PopularWeek from "./popular-week";
import PopularMonth from "./popular-month";
import SectionYoutube from "./section-youtube";
import NewestMidjourney from "./newest-midjourney";
import NewestGpt from "./newest-gpt";
import SectionImage from "./section-image";
import NewestDalle from "./newest-dalle";
import NewestStable from "./newest-stable";
import { Button } from "@nextui-org/react";

export const MainContainer = () => {
    return (
        <div>
            <IntroSection />
            <FeaturedPrompts />
            <HottestPrompts />
            <NewestPrompts />
            <SectionWrapper />
            <PopularWeek />
            <PopularMonth />
            <SectionYoutube />
            <NewestMidjourney />
            <NewestGpt />
            <SectionImage />
            <NewestDalle />
            <NewestStable />
            <div className="text-center px-0 md:px-64 pb-12 mt-10">
                <Button className="text-white" variant="bordered">Browse Marketplace</Button>
            </div>
        </div>
    )
}