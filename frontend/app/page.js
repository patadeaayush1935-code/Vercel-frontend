import Hero from "./components/Hero";
import InstantMatchDemo from "./components/InstantMatchDemo";
import VoiceFeature from "./components/VoiceFeature";
import LiveActivityFeed from "./components/LiveActivityFeed";
import EarnMoreSection from "./components/EarnMoreSection";
import UnicornBackground from "./components/UnicornBackground";

export default function Home() {
  return (
    <main>
      <Hero />
      <UnicornBackground />
      <EarnMoreSection />
      <InstantMatchDemo />
      <VoiceFeature />
      <LiveActivityFeed />
    </main>
  );
}