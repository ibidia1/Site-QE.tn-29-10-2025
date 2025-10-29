/**
 * Composant d'état vide réutilisable
 */

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '../ui/button';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({ 
  icon: Icon, 
  title,
  message, 
  action,
  className 
}: EmptyStateProps) {
  return (
    <div className={`text-center py-12 px-4 ${className || ''}`}>
      <Icon className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
        {message}
      </p>
      {action && (
        <Button onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
