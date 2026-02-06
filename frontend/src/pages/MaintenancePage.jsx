import React, { useState, useEffect } from 'react';
import { Wrench, Clock, Mail, RefreshCw } from 'lucide-react';
import { Button } from '../components/ui/button';
import { personalInfo } from '../data/mock';

const MaintenancePage = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50 px-4">
      <div className="text-center max-w-lg">
        {/* Icon */}
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
          <Wrench className="w-12 h-12 text-primary animate-pulse" />
        </div>

        {/* Message */}
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Site em Manutenção
        </h1>
        <p className="text-lg text-muted-foreground mb-2">
          Estamos a melhorar a sua experiência{dots}
        </p>
        <p className="text-muted-foreground mb-8">
          O site estará de volta em breve com novidades. Obrigado pela paciência!
        </p>

        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent mb-8">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            Tempo estimado: Em breve
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button className="gap-2" onClick={() => window.location.reload()}>
            <RefreshCw className="w-4 h-4" />
            Verificar novamente
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <a href={`mailto:${personalInfo.email}`}>
              <Mail className="w-4 h-4" />
              Contactar
            </a>
          </Button>
        </div>

        {/* Progress bar animation */}
        <div className="mt-12 max-w-xs mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '60%' }} />
          </div>
          <p className="text-xs text-muted-foreground mt-2">Progresso da manutenção</p>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
