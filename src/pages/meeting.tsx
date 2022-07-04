import { InlineWidget } from 'react-calendly';

export default function Meeting() {
  return (
    <div className="relative overflow-hidden bg-white py-16">
      <InlineWidget url="https://calendly.com/suleyman-hanyyev/pomodoro-meeting" />
    </div>
  );
}
