import * as Icons from 'lucide-react';
import React from 'react';

export const IconByName = ({ name, ...props }: { name: string, [key: string]: any }) => {
  // @ts-ignore
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent {...props} />;
};
