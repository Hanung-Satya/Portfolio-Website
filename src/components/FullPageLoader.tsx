import CountUp from "@/components/CountUp";
import GradientText from "./GradientText";

type FullPageLoaderProps = {
  onFinish: () => void;
};

export default function FullPageLoader({ onFinish } : FullPageLoaderProps) {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-poppins">
      <GradientText>
        <CountUp
        from={0}
        to={105}
        duration={3}
        startWhen={true}
        onEnd={onFinish}
        className="text-5xl font-bold"
      />
      </GradientText>
    </div>
  );
}
