import React from 'react';
import { PageHero } from '../components/PageHero';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Heart, 
  Eye, 
  MessageSquare, 
  Award, 
  ArrowRight, 
  Users
} from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="animate-fade-in">
      
      {/* Internal Hero */}
      <PageHero
        title="Sobre a Dias Pintura & Decoração"
        description="Serviços profissionais de pintura, decoração e reformas focados em qualidade, cuidado e atenção aos detalhes."
        currentPage="Sobre Nós"
      />

      {/* Institutional Story */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
                Nossa História e Compromisso
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Uma empresa familiar de pintura com mais de 25 anos de experiência.
              </h2>

              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Com mais de 25 anos de experiência, somos uma empresa familiar de pintura dedicada a oferecer mão de obra de alta qualidade e atendimento excepcional ao cliente.
                </p>
                <p>
                  Somos especializados em pintura residencial e comercial, oferecendo serviços profissionais de pintura interna e externa com atenção a cada detalhe. Nosso objetivo é valorizar e proteger seu imóvel, garantindo um acabamento impecável e duradouro.
                </p>
                <p>
                  Fundamentados na honestidade, confiabilidade e valores familiares, orgulhamo-nos de tratar cada projeto como se fosse nosso. Desde a primeira consulta até a última demão de tinta, estamos empenhados em superar as suas expectativas e criar resultados belos e duradouros.
                </p>
                <p>
                  Sua satisfação é nossa prioridade, e nossa reputação foi construída um cliente satisfeito de cada vez.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-md overflow-hidden shadow-2xl border border-brand-border">
                <img 
                  src="/Fotos 02/WhatsApp Image 2026-08-05 at 19.20.19.jpeg" 
                  alt="Dias Pintura e Decoração - Trabalho profissional" 
                  className="w-full h-auto block"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mission */}
          <div className="bg-brand-dark text-white p-8 sm:p-12 rounded-md mb-16 shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl relative z-10">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
                Nossa Missão
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
                Transformar espaços residenciais e comerciais através de preparação cuidadosa, serviço confiável e acabamentos de alta qualidade.
              </h3>
            </div>
          </div>

          {/* Values Grid */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
              O que nos motiva
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-dark">
              Nossos princípios fundamentais
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-light p-6 rounded border border-brand-border hover:border-brand-accent transition-colors">
              <ShieldCheck className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">Qualidade</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Padrões de qualidade intransigentes em cada camada, linha e superfície acabada que entregamos.
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded border border-brand-border hover:border-brand-accent transition-colors">
              <CheckCircle2 className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">Confiabilidade</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Inícios pontuais, cronogramas claros e execução confiável do começo ao fim.
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded border border-brand-border hover:border-brand-accent transition-colors">
              <Heart className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">Respeito</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Tratar sua casa, propriedade, pertences e agenda com o máximo cuidado.
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded border border-brand-border hover:border-brand-accent transition-colors">
              <Eye className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">Atenção aos detalhes</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Com foco em acabamento preciso nos cantos, lixamento suave e aplicação de fita protetora limpa.
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded border border-brand-border hover:border-brand-accent transition-colors">
              <MessageSquare className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">Comunicação clara</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Mantemos você informado em todas as etapas do projeto com atualizações honestas e transparentes.
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded border border-brand-border hover:border-brand-accent transition-colors">
              <Award className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">Padrões profissionais</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ambientes de trabalho limpos, equipamentos profissionais e procedimentos de segurança adequados.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Our Systematic Approach */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
              Metodologia
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Nossa abordagem profissional
            </h2>
            <p className="text-gray-600 text-base">
              Um método estruturado em 7 etapas que garante a execução consistente e impecável do projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded border border-brand-border">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">Passo 1</span>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-2">Avaliação inicial</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Avaliação minuciosa da propriedade, das superfícies, do estado do substrato e das preferências do cliente.
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-brand-border">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">Passo 2</span>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-2">Proteção do Meio Ambiente</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Proteger pisos, móveis, acessórios e áreas adjacentes com fita adesiva para evitar danos causados por respingos ou poeira.
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-brand-border">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">Etapa 3</span>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-2">Preparação da superfície</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Raspagem, preenchimento de fissuras, lixamento fino e aplicação de primers bloqueadores de manchas.
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-brand-border">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">Passo 4</span>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-2">Seleção de Materiais</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Utilizando tintas de alta qualidade adequadas às condições específicas de cada ambiente (tinta antimofo para cozinha, tinta lavável com acabamento acetinado para hall de entrada, etc.).
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-brand-border">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">Etapa 5</span>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-2">Execução Organizada</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Aplicação sistemática de camadas de base, subcamadas e camadas de acabamento com intervalos de secagem ideais.
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-brand-border">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">Passo 6</span>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-2">Limpeza da área</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Remover a lona de proteção, aspirar o pó e recolocar os móveis em suas posições originais.
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-brand-border col-span-1 md:col-span-2 lg:col-span-2">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">Passo 7</span>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-2">Análise e revisão final</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Inspeção detalhada com o cliente para verificar se cada parede, acabamento e canto atende aos nossos rigorosos padrões de qualidade.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Structured Placeholder for Future Team Photography */}
      <section className="py-16 bg-white border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 rounded-md bg-brand-light border border-dashed border-gray-300">
            <Users className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">Nossa equipe de profissionais</h3>
            <p className="text-xs text-gray-500 max-w-lg mx-auto leading-relaxed">
              Temos orgulho de nossa equipe dedicada e experiente que atende Londres. As fotos oficiais da equipe serão atualizadas em breve, assim que as fotos com o cliente forem concluídas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Vamos conversar sobre o seu projeto.</h2>
          <p className="text-gray-300 text-base mb-8 max-w-xl mx-auto">
            Pronto para dar um acabamento profissional ao seu imóvel? Entre em contato hoje mesmo para uma consulta inicial.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3.5 rounded font-semibold text-sm transition-all shadow flex items-center gap-2"
            >
              <span>Solicite um orçamento</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/447833779462"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded font-semibold text-sm transition-all shadow flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Entre em contato conosco pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

