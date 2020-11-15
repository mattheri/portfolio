import React from 'react';
import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { Fullpage } from '../Fullpage/Fullpage';
import { FullpageSection } from '../Fullpage/FullpageSection';
import { Home } from '../Home/Home';
import { Portfolio } from '../Portfolio/Portfolio';

type Props = {
    onPageUpdate: (cp: string) => void
}
export function Main({ onPageUpdate }: Props) {
    return (
        <main>
            <Fullpage
                licenseKey="C57C96A0-F99F4BF1-B3F9C943-E10DFA3D"
                options={{
                    onLeave: (origin, destination) => {
                        onPageUpdate(destination.item.classList[1]);
                    },
                    anchors: ["home", "about", "portfolio", "contact"]
                }}
            >
                <FullpageSection className="home" id="home">
                    <Home />
                </FullpageSection>
                <FullpageSection className="about" id="about">
                    <About />
                </FullpageSection>
                <FullpageSection className="portfolio" id="portfolio">
                    <Portfolio />
                </FullpageSection>
                <FullpageSection className="contact" id="contact">
                    <Contact />
                </FullpageSection>
            </Fullpage>
        </main>
    );
}