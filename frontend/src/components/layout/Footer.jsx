import React from 'react';
import { Mail, Globe, MapPin, Heart } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-3">{personalInfo.name}</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Navegação</h3>
            <ul className="space-y-2">
              {['Sobre', 'Experiência', 'Competências', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary-foreground transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Globe className="w-4 h-4 flex-shrink-0" />
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  ivo-faria.pt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/20">
          <p className="text-center text-primary-foreground/60 text-sm flex items-center justify-center gap-1">
            © {currentYear} {personalInfo.name}. Feito com
            <Heart className="w-3 h-3 fill-current" />
            em Portugal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
