/**
 * Composant d'affichage d'erreur réutilisable
 */

import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

interface ErrorMessageProps {
  error: Error | string;
  retry?: () => void;
  className?: string;
}

export function ErrorMessage({ error, retry, className }: ErrorMessageProps) {
  const errorMessage = typeof error === 'string' ? error : error.message;

  return (
    <Card className={`border-destructive ${className || ''}`}>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <AlertCircle className="h-12 w-12 text-destructive" />
          <div>
            <h3 className="font-medium text-destructive mb-1">Une erreur est survenue</h3>
            <p className="text-sm text-muted-foreground">{errorMessage}</p>
          </div>
          {retry && (
            <Button onClick={retry} variant="outline">
              Réessayer
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
