import React from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo } from '../../data/mock';
import logo from '../../assets/logo.png';


const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/30" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Avatar/Initial */}
        <div className="mb-8 flex justify-center">
          <img
            src={logo}
            alt="Logo Ivo Faria"
            className="w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-lg"
          />
        </div>



        {/* Name and Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
          {personalInfo.name}
        </h1>
        <p className="text-xl sm:text-2xl text-secondary font-medium mb-4">
          {personalInfo.title}
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="gap-2 px-8"
            onClick={() => scrollToSection('#contacto')}
          >
            <Mail className="w-4 h-4" />
            Contactar
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 px-8"
            onClick={() => scrollToSection('#experiencia')}
          >
            <Download className="w-4 h-4" />
            Ver Currículo
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('#experiencia')}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <span className="text-sm">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
