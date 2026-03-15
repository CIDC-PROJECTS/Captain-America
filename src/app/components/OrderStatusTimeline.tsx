import React from 'react';

export interface TimelineStep {
  id: number;
  title: string;
  desc: string;
  time: string;
  icon: React.ReactNode;
}

interface OrderStatusTimelineProps {
  steps: TimelineStep[];
  currentStep: number;
}

export function OrderStatusTimeline({ steps, currentStep }: OrderStatusTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-100"></div>
      
      <div className="space-y-8 relative">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          
          return (
            <div key={step.id} className="flex gap-4 items-start relative">
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${
                  isCompleted ? 'bg-[#FF6B35] border-white text-white shadow-md' : 
                  isCurrent ? 'bg-white border-[#FF6B35] text-[#FF6B35] shadow-sm' : 
                  'bg-white border-gray-100 text-gray-300'
                }`}>
                  {step.icon}
                </div>
                {/* Connection Line highlight for completed steps */}
                {isCompleted && index < steps.length - 1 && (
                   <div className="absolute top-12 left-1/2 w-0.5 h-12 bg-[#FF6B35] -translate-x-1/2 -z-10"></div>
                )}
              </div>
              
              <div className="flex-1 pt-1.5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`font-bold ${isCurrent || isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                    {step.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-400">{step.time}</span>
                </div>
                <p className={`text-sm ${isCurrent ? 'text-[#FF6B35] font-medium' : 'text-gray-500'}`}>
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
