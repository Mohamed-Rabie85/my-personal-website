// src/components/Callout.tsx
import { ReactNode } from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react'; // سنستخدم أيقونات جميلة

type CalloutType = 'info' | 'success' | 'warning';

const calloutConfig = {
  info: {
    icon: <Info className="h-5 w-5 text-blue-500" />,
    borderColor: 'border-blue-500',
    backgroundColor: 'bg-blue-50',
  },
  success: {
    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    borderColor: 'border-green-500',
    backgroundColor: 'bg-green-50',
  },
  warning: {
    icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
    borderColor: 'border-yellow-500',
    backgroundColor: 'bg-yellow-50',
  },
};

type CalloutProps = {
  type?: CalloutType;
  children: ReactNode;
};

export default function Callout({ type = 'info', children }: CalloutProps) {
  const { icon, borderColor, backgroundColor } = calloutConfig[type];

  return (
    <div className={`my-6 flex items-start gap-4 rounded-lg border-r-4 p-4 ${borderColor} ${backgroundColor}`}>
      <div className="mt-1">{icon}</div>
      <div className="prose-p:my-0 prose-ul:my-0 prose-li:my-0 text-gray-800">
        {children}
      </div>
    </div>
  );
}