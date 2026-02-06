import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, Calendar, Building2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { experiences } from '../../data/mock';

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState(1); // Expand first item by default

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experiencia" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
            <Briefcase className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3">Experiência Profissional</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trajetória profissional diversificada com experiência em múltiplos setores
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {/* Experience Items */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background bg-primary z-10" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                      exp.current ? 'border-secondary/50 bg-secondary/5' : ''
                    }`}
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {exp.current && (
                              <Badge variant="secondary" className="text-xs">
                                Atual
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-semibold text-foreground text-lg">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                            <Building2 className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <button className="text-muted-foreground hover:text-primary transition-colors">
                          {expandedId === exp.id ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>

                      {/* Expandable content */}
                      {expandedId === exp.id && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-foreground/80"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
