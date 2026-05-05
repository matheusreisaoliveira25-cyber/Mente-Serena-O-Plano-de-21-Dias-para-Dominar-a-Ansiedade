/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  PlayCircle, 
  Clock, 
  ChevronRight, 
  Zap, 
  Brain, 
  Sparkles, 
  HeartPulse, 
  Moon, 
  ArrowRight,
  TrendingDown,
  Timer,
  UserCheck,
  Quote
} from 'lucide-react';
import { Accordion } from './components/Accordion';
import { cn } from './lib/utils';

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen selection:bg-brand-primary/30 scroll-smooth">
      {/* Sticky Warning Bar */}
      <div className="sticky top-0 z-50 bg-slate-900 text-white py-3 px-4 shadow-xl border-b border-white/5">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-brand-accent">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Oferta Especial: Sua paz mental por menos de R$ 10,00!
            <Sparkles className="w-4 h-4 animate-pulse ml-1" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-secondary/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold mb-6 tracking-wide"
            >
              METODO TESTADO POR MAIS DE 5.000 PESSOAS
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 font-display leading-[1.1] mb-6"
            >
              RECONQUISTE O CONTROLE DA SUA MENTE E SINTA A <span className="gradient-text">PAZ DE UMA VIDA SEM MEDO</span> EM APENAS 21 DIAS
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              Domine ferramentas práticas para frear crises no ato, volte a dormir profundamente e livre-se do peso do julgamento com um <span className="font-bold text-slate-900 underline decoration-brand-primary/40">Guia Completo Passo a Passo</span> de 61 páginas testado para devolver o comando das suas reações e a sua liberdade mental.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="mb-10 inline-flex flex-col items-center bg-white px-8 py-4 rounded-3xl shadow-xl border-2 border-brand-accent/20"
            >
               <p className="text-slate-400 text-sm font-bold line-through">DE R$ 37,00 POR APENAS</p>
               <p className="text-4xl md:text-5xl font-black text-brand-accent font-display">R$ 9,90</p>
               <p className="text-[10px] text-brand-secondary font-black uppercase tracking-widest mt-1 italic">Oferta Válida Apenas para Hoje!</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 px-4">
              {/* High Impact Emotional Image of a Woman with Badge */}
              <motion.div 
                {...fadeIn}
                className="relative"
              >
                {/* Decorative background glow */}
                <div className="absolute -inset-10 bg-brand-primary/10 blur-[100px] rounded-full" />
                
                <div className="relative z-10">
                  <div className="relative w-full max-w-[540px] mx-auto rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                    <img 
                      src="https://images.unsplash.com/photo-1541199249251-f713e6145474?auto=format&fit=crop&q=80&w=1200" 
                      alt="Mulher adulta com forte sobrecarga emocional" 
                      className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
                    
                    {/* Urgency Badge Over Image */}
                    <div className="absolute top-6 right-6 bg-brand-accent text-white px-6 py-2 rounded-full font-black text-sm shadow-xl rotate-12">
                      73% OFF HOJE
                    </div>
                  </div>
                  
                  {/* Strategic Trust Badge */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3 whitespace-nowrap">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => (
                         <img key={i} src={`https://i.pravatar.cc/100?u=${i+20}`} className="w-8 h-8 rounded-full border-2 border-white" />
                       ))}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Resultados Reais</p>
                      <p className="text-sm font-bold text-slate-800">
                        +5.210 vidas transformadas
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="text-left space-y-6">
                <div className="bg-brand-primary/5 p-6 rounded-3xl border border-brand-primary/10 mb-2">
                   <p className="text-brand-primary font-black text-xs uppercase tracking-widest mb-1">Aproveite a Economia</p>
                   <p className="text-slate-900 font-bold text-lg">Você está economizando <span className="text-emerald-600">R$ 27,10</span> comprando agora!</p>
                </div>
                <ul className="space-y-4">
                  {[
                    "Alívio Real e Imediato: Técnicas que acalmam o sistema nervoso nos primeiros minutos.",
                    "Recupere o Foco: Aprenda a silenciar o ruído mental e termine suas tarefas com clareza.",
                    "Liberdade Social: Sinta-se segura para frequentar qualquer lugar sem o medo paralisante.",
                    "Noites de Paz: O método exato para desligar o cérebro e ter um sono profundo e reparador.",
                    "Blindagem Emocional: Como parar de absorver a negatividade dos outros e do ambiente.",
                    "Confiança Renovada: Resgate a certeza de que você é capaz de lidar com qualquer imprevisto."
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 bg-brand-secondary/20 p-0.5 rounded-full">
                        <CheckCircle2 className="w-5 h-5 text-brand-secondary" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="pt-4">
                  <button className="cta-button w-full sm:w-auto bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-6 rounded-2xl text-xl font-bold flex items-center justify-center gap-3">
                    QUERO MEU ACESSO POR R$ 9,90
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  <p className="text-center sm:text-left mt-4 text-slate-400 text-sm flex items-center justify-center sm:justify-start gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Compra 100% segura e acesso imediato
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
              O QUE DIZEM QUEM JÁ RETOMOU O CONTROLE
            </h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Testimonial 1 */}
            <motion.div 
              {...fadeIn}
              className="bg-slate-50 p-8 rounded-[2.5rem] relative border border-slate-100 hover:border-brand-primary/20 transition-all group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors" />
              <p className="text-slate-700 text-lg italic mb-8 leading-relaxed relative z-10">
                "Finalmente dormi a noite toda sem aquela voz me torturando. Com o Mente Serena, recuperei o controle dos meus pensamentos em 21 dias. É como se o barulho na minha cabeça finalmente tivesse silenciado."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="Avatar" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Mariana S.</h4>
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              {...fadeIn}
              className="bg-slate-50 p-8 rounded-[2.5rem] relative border border-slate-100 hover:border-brand-primary/20 transition-all group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors" />
              <p className="text-slate-700 text-lg italic mb-8 leading-relaxed relative z-10">
                "Perdi o medo de ter crises no trabalho ou em público. As ferramentas práticas do plano me deram a segurança que eu não tinha há anos. Hoje saio de casa sentindo que sou dona das minhas emoções novamente."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" alt="Avatar" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Juliana R.</h4>
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              {...fadeIn}
              className="bg-slate-50 p-8 rounded-[2.5rem] relative border border-slate-100 hover:border-brand-primary/20 transition-all group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors" />
              <p className="text-slate-700 text-lg italic mb-8 leading-relaxed relative z-10">
                "Sempre fui cética com 'autoajuda', mas André traz uma base prática que faz sentido. Em uma semana, os batimentos acelerados e a falta de ar ao acordar simplesmente pararam. Gratidão eterna!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" alt="Avatar" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Beatriz L.</h4>
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 4 */}
            <motion.div 
              {...fadeIn}
              className="bg-slate-50 p-8 rounded-[2.5rem] relative border border-slate-100 hover:border-brand-primary/20 transition-all group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors" />
              <p className="text-slate-700 text-lg italic mb-8 leading-relaxed relative z-10">
                "Minha produtividade no trabalho dobrou. Antes eu gastava 4 horas ruminando problemas que nem existiam. O protocolo de alívio rápido é surreal, funciona em qualquer lugar sem ninguém perceber."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Avatar" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Ricardo M.</h4>
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 5 */}
            <motion.div 
              {...fadeIn}
              className="bg-slate-50 p-8 rounded-[2.5rem] relative border border-slate-100 hover:border-brand-primary/20 transition-all group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors" />
              <p className="text-slate-700 text-lg italic mb-8 leading-relaxed relative z-10">
                "O 'Guia da Rotina Blindada' que vem de bônus é o segredo. Minhas manhãs eram um caos de ansiedade, hoje sinto que tenho escudo. De longe o melhor investimento de R$ 9,90 que já fiz."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Avatar" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Camila V.</h4>
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 6 */}
            <motion.div 
              {...fadeIn}
              className="bg-indigo-900 p-8 rounded-[2.5rem] relative border border-white/10 hover:border-brand-accent/30 transition-all group lg:scale-105 shadow-2xl"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 group-hover:text-brand-accent/20 transition-colors" />
              <p className="text-white text-lg italic mb-8 leading-relaxed relative z-10 font-medium">
                "Uso o manual toda vez que sinto o peito apertar. É incrível como o André fala com a gente de forma que acalma. Recomendo para todas as amigas que vivem no 'modo automático' de estresse."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-2xl overflow-hidden shadow-lg border border-white/20">
                  <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=200" alt="Avatar" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Fernanda T.</h4>
                  <div className="flex gap-0.5 text-brand-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Promises Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-primary/20 to-transparent" />
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4 uppercase">
               AS 6 <span className="gradient-text">GRANDES PROMESSAS</span> DESTE GUIA:
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Compromissos reais que André Calman assume com a sua transformação mental</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                promise: "O Fim do Sequestro Emocional",
                detail: "Você nunca mais será pega de surpresa por uma crise sem saber exatamente o que fazer para detê-la no ato.",
                icon: <Zap className="w-6 h-6" />
              },
              {
                promise: "Sono sem Ansiedade Antecipatória",
                detail: "Aprenda a 'desligar' as preocupações do amanhã e volte a dormir em menos de 10 minutos após deitar.",
                icon: <Moon className="w-6 h-6" />
              },
              {
                promise: "Independência de Gatilhos Externos",
                detail: "Ambientes lotados, discussões ou prazos apertados deixarão de ser sentenças de pânico para você.",
                icon: <ShieldCheck className="w-6 h-6" />
              },
              {
                promise: "Clareza Mental Inabalável",
                detail: "A névoa mental e o esquecimento causados pelo estresse darão lugar a um foco nítido e produtivo.",
                icon: <Brain className="w-6 h-6" />
              },
              {
                promise: "Estabilidade Física Real",
                detail: "Redução comprovada de sintomas como taquicardia, falta de ar e tensão muscular crônica.",
                icon: <HeartPulse className="w-6 h-6" />
              },
              {
                promise: "Resgate da Identidade",
                detail: "Você voltará a se reconhecer no espelho como a pessoa decidida e alegre que era antes da ansiedade.",
                icon: <Star className="w-6 h-6" />
              }
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-brand-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-primary mb-6">
                  {p.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{p.promise}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{p.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Logic Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/20 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-extrabold font-display mb-8">
              A LÓGICA POR TRÁS DA MENTE SERENA
            </motion.h2>
            <motion.p {...fadeIn} className="text-xl text-slate-300 leading-relaxed">
              Diferente de dicas genéricas que apenas tentam mascarar os sintomas, este Ebook entrega um plano estratégico para neutralizar a ansiedade na raiz. O método foca na interrupção imediata do fluxo de pensamentos acelerados através de ferramentas práticas que você pode usar em qualquer lugar. Ao combinar o entendimento dos gatilhos com protocolos de alívio rápido, você deixa de ser refém das crises e assume o comando total da sua estabilidade emocional.
            </motion.p>
          </div>
          
          {/* High-Definition Digital Bundle Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto mt-12"
          >
            {/* Background platform/glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
              {/* Tablet Mockup */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 w-[280px] md:w-[400px] aspect-[4/3] bg-slate-800 rounded-[2rem] p-3 shadow-2xl border-4 border-slate-700/50 -rotate-2"
              >
                <div className="w-full h-full bg-slate-900 rounded-[1.5rem] overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800" 
                    alt="Tablet Content" 
                    className="w-full h-full object-cover opacity-40 grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <Sparkles className="w-12 h-12 text-brand-primary mb-4" />
                    <h4 className="text-2xl md:text-3xl font-black font-display text-white">MENTE <span className="text-brand-primary">SERENA</span></h4>
                    <p className="text-xs font-bold tracking-widest text-slate-400 mt-2">GUIA ESTRATÉGICO</p>
                  </div>
                </div>
              </motion.div>

              {/* Smartphone Mockup */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-[5%] md:right-[15%] bottom-0 z-30 w-[140px] md:w-[200px] aspect-[1/2] bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl border-4 border-slate-800 rotate-6"
              >
                <div className="w-full h-full bg-slate-800 rounded-[2.2rem] overflow-hidden relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-slate-900 rounded-full" />
                    <img 
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" 
                      alt="Interface do Protocolo de Alívio Rápido" 
                      className="w-full h-full object-cover opacity-50"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center mb-2">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-[10px] font-black text-white text-center leading-tight">PROTOCOLO DE<br/>ALÍVIO RÁPIDO</p>
                    </div>
                </div>
              </motion.div>

              {/* Ebook / Physical Representation behind */}
              <motion.div 
                className="absolute left-[5%] md:left-[10%] top-10 z-10 w-[240px] md:w-[320px] aspect-[3/4] bg-linear-to-br from-brand-dark to-slate-900 rounded-lg shadow-xl -rotate-12 border border-white/10"
              >
                 <div className="p-8 h-full flex flex-col border-r-8 border-black/20">
                    <Sparkles className="w-8 h-8 text-brand-primary mb-4" />
                    <h3 className="text-xl font-black text-white leading-tight">MENTE<br/>SERENA</h3>
                    <div className="mt-auto">
                       <p className="text-[10px] text-brand-secondary font-bold">BY ANDRÉ CALMAN</p>
                    </div>
                 </div>
              </motion.div>
            </div>
            
            <div className="text-center mt-8">
               <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-bold text-sm">
                 <ShieldCheck className="w-4 h-4" />
                 Compatível com Kindle, iOS, Android e Desktop
               </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 21 Day Plan (Pilares) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
              O PLANO DE 21 DIAS PARA A SUA LIBERDADE
            </h2>
            <p className="text-slate-600 text-lg">Dividido em 4 pilares fundamentais de transformação</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "O CÓDIGO DO INIMIGO",
                desc: "Identifique o gatilho exato que dispara sua ansiedade e aprenda a desarmá-lo antes que ele tome o controle total dos seus pensamentos.",
                icon: <Zap className="w-8 h-8 text-brand-primary" />,
                pilar: "01"
              },
              {
                title: "RESGATE IMEDIATO",
                desc: "Aplique o protocolo de alívio rápido para interromper crises e recuperar a calma física e o controle do seu corpo em menos de 60 segundos.",
                icon: <Timer className="w-8 h-8 text-brand-primary" />,
                pilar: "02"
              },
              {
                title: "COMANDO MENTAL",
                desc: "Desenvolva um filtro mental ultra-eficiente para ignorar preocupações inúteis e manter o foco absoluto no que realmente importa para você.",
                icon: <Brain className="w-8 h-8 text-brand-primary" />,
                pilar: "03"
              },
              {
                title: "BLINDAGEM DIÁRIA",
                desc: "Estabeleça uma rotina blindada que protege sua paz interior de forma automática, transformando a serenidade no seu novo padrão permanente.",
                icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
                pilar: "04"
              }
            ].map((pilar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group h-full flex flex-col"
              >
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 bg-brand-primary/10 rounded-2xl group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    {pilar.icon}
                  </div>
                  <span className="text-slate-200 text-4xl font-black italic">#{pilar.pilar}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">Pilar {pilar.pilar}: {pilar.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {pilar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For You Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-8">
                ESTE EBOOK É PARA VOCÊ QUE…
              </h2>
              <div className="space-y-6">
                {[
                  "Sente que perdeu o controle sobre seus próprios pensamentos e emoções.",
                  "Sofre com a preocupação constante que rouba seu sono e sabota sua rotina.",
                  "Vive com o medo paralisante de ter uma crise de ansiedade em público.",
                  "Está exausta física e mentalmente devido ao peso da tensão e da insônia.",
                  "Alimenta o sentimento de que \"não há saída\" ou que sua condição é permanente."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-brand-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-slate-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200" 
                alt="Mulher adulta sorrindo e vivendo com leveza" 
                className="w-full h-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent flex items-bottom p-12">
                 <p className="text-white text-2xl font-display font-medium italic mt-auto">Você merece viver sem o peso constante da cobrança invisível.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
               PERFIS QUE TRANSFORMAM SUAS VIDAS <span className="gradient-text">COM ESTE MÉTODO</span>
            </h2>
            <p className="text-slate-600 text-lg">Histórias de superação e reconquista da paz interior</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                role: "A Executiva em Burnout",
                desc: "Para a mulher que brilha na carreira, mas não consegue desligar a mente ao deitar.",
                icon: <Moon className="w-6 h-6" />
              },
              {
                role: "A Mãe Sobrecarregada",
                desc: "Para quem sente o peito apertar pela carga mental e precisa de ferramentas rápidas para não explodir.",
                icon: <HeartPulse className="w-6 h-6" />
              },
              {
                role: "A Refém do \"E Se?\"",
                desc: "Feito para quem antecipa tragédias e perde o presente tentando controlar o amanhã.",
                icon: <Brain className="w-6 h-6" />
              },
              {
                role: "A Prisioneira da Insônia",
                desc: "Ideal para quem sente o corpo exausto, mas a mente acelera ao encostar no travesseiro.",
                icon: <Timer className="w-6 h-6" />
              }
            ].map((persona, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:translate-y-[-8px] transition-all"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6">
                  {persona.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">{persona.role}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {persona.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/30 blur-[100px] rounded-full" />
            
            <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-extrabold font-display mb-12 text-center relative z-10">
              AO CONCLUIR ESTA LEITURA, VOCÊ <span className="text-brand-primary italic">SERÁ CAPAZ DE:</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {[
                "Identificar e desarmar gatilhos invisíveis antes que virem crises paralisantes.",
                "Interromper picos de ansiedade em segundos com manobras de respiração tática.",
                "Silenciar o \"ruído mental\" constante e filtrar preocupações tóxicas.",
                "Reduzir drasticamente os níveis de cortisol e combater o esgotamento físico.",
                "Construir uma barreira psicológica impenetrável contra o estresse externo."
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="bg-brand-primary rounded-full p-1 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-slate-300 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <motion.div {...fadeIn} className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden shrink-0 shadow-2xl rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800" 
                alt="André Calman" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div {...fadeIn}>
              <span className="text-brand-primary font-bold tracking-widest text-sm mb-4 block uppercase font-display">Conheça o Mentor</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-6">
                QUEM TE GUIARÁ NESSA JORNADA
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-6 font-medium italic">
                "Minha missão é devolver a você a chave da sua própria mente."
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                André Calman dedica sua vida a ajudar pessoas que vivem presas na ansiedade a encontrarem paz e clareza mental. Com uma abordagem acessível e humana, ensina como desacelerar a mente e voltar a sentir tranquilidade mesmo nos dias mais difíceis, transformando ferramentas complexas em um guia prático de sobrevivência emocional.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                 <p className="text-sm text-slate-500 uppercase tracking-wider font-bold mb-1">Especialista em</p>
                 <p className="text-lg font-bold text-brand-primary">Gestão Emocional e Psicologia Comportamental</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4 uppercase">
               O QUE VOCÊ VAI RECEBER NA PRÁTICA:
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Livro Mente Serena (61 Páginas)",
                tag: "O MATERIAL BASE",
                desc: "O plano completo de 21 dias com 61 páginas de conteúdo puro e prático para dominar a ansiedade.",
                icon: <Sparkles className="w-10 h-10" />
              },
              {
                title: "Guia Completo Passo a Passo",
                tag: "O MÉTODO",
                desc: "Todo o método mastigado para você saber lidar com sua ansiedade em qualquer situação.",
                icon: <ChevronRight className="w-10 h-10" />
              },
              {
                title: "Arsenal de Ferramentas Reais",
                tag: "USO PRÁTICO",
                desc: "Técnicas práticas para aplicar no meio da rotina agitada.",
                icon: <Zap className="w-10 h-10" />
              },
              {
                title: "Protocolo de Alívio Rápido",
                tag: "EMERGÊNCIA",
                desc: "O guia de bolso para silenciar crises em segundos.",
                icon: <Timer className="w-10 h-10" />
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="group relative p-8 rounded-[2.5rem] border bg-slate-50 border-slate-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-150 transition-transform duration-700">
                   {item.icon}
                </div>
                <p className="font-black text-xs tracking-tighter mb-2 text-brand-primary">{item.tag}</p>
                <h4 className="text-xl font-extrabold text-slate-900 mb-4 font-display">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
               POR QUE O MÉTODO <span className="text-brand-primary">MENTE SERENA</span> É A MELHOR ESCOLHA?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-[2.5rem] bg-white shadow-xl border border-slate-200">
            <div className="grid grid-cols-3 bg-slate-900 text-white p-6 font-bold text-lg md:text-xl font-display">
               <div className="col-span-1">Característica</div>
               <div className="col-span-1 text-center text-slate-400">Tradicional</div>
               <div className="col-span-1 text-center text-brand-primary">Mente Serena</div>
            </div>
            
            {[
              { label: "Tempo de Resposta", old: "Meses ou anos", new: "Alívio imediato e plano de 21 dias" },
              { label: "Abordagem", old: "Teorias densas", new: "Ferramentas práticas e acolhedoras" },
              { label: "Foco", old: "Apenas no sintoma", new: "Na raiz do gatilho e blindagem" },
              { label: "Custo", old: "Investimentos altíssimos", new: "Apenas R$ 9,90", highlight: true }
            ].map((row, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "grid grid-cols-3 p-6 items-center border-b border-slate-100 last:border-0",
                  row.highlight && "bg-brand-primary/5"
                )}
              >
                 <div className="col-span-1 font-bold text-slate-900 text-sm md:text-base">{row.label}</div>
                 <div className="col-span-1 text-center text-slate-400 line-through text-xs md:text-sm">{row.old}</div>
                 <div className={cn(
                   "col-span-1 text-center font-black text-sm md:text-base",
                   row.highlight ? "text-brand-accent text-xl" : "text-brand-secondary"
                 )}>{row.new}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer / Pricing Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeIn}
            className="max-w-3xl mx-auto text-center bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative shadow-3xl"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-8 py-3 rounded-full font-black tracking-widest text-lg shadow-xl animate-bounce">
               OFERTA EXCLUSIVA E LIMITADA
            </div>

            <p className="text-slate-400 text-xl font-medium mb-4 line-through">De R$ 37,00 por apenas</p>
            <div className="flex flex-col items-center mb-6">
               <span className="text-7xl md:text-9xl font-black font-display gradient-text drop-shadow-sm">R$ 9,90</span>
               <div className="mt-6 flex flex-col items-center gap-2">
                 <p className="text-brand-accent font-black text-sm uppercase tracking-widest flex items-center gap-2">
                   <Star className="w-4 h-4 fill-current" />
                   OFERTA EXCLUSIVA PARA NOVAS ALUNAS
                 </p>
                 <div className="h-1 w-12 bg-brand-accent/20 rounded-full" />
               </div>
               <p className="text-brand-secondary font-bold text-xl mt-6">Pagamento Único • Sem Mensalidade</p>
            </div>

            <div className="mb-10 p-4 bg-white/5 rounded-2xl border border-white/10">
               <p className="text-brand-accent font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  BÔNUS LIBERADO: GUIA DA ROTINA BLINDADA (GRÁTIS HOJE)
               </p>
            </div>

            <button className="cta-button w-full bg-brand-accent text-white py-6 rounded-[2rem] text-2xl font-black flex items-center justify-center gap-4 hover:bg-brand-accent/90">
               QUERO MEU ACESSO POR R$ 9,90
               <ArrowRight className="w-8 h-8" />
            </button>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-400 text-sm opacity-60">
               <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Gateway Seguro
               </div>
               <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Acesso Imediato
               </div>
               <div className="flex items-center gap-2">
                  <HeartPulse className="w-4 h-4" /> +5k Alunos
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
               PERGUNTAS FREQUENTES
            </h2>
          </motion.div>

          <motion.div {...stagger} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-200">
            <Accordion 
              question="Preciso de muito tempo livre para seguir o plano?" 
              answer="Não. Com apenas 15 minutos por dia você aplica as ferramentas práticas e começa a sentir o alívio, sem sobrecarregar sua rotina." 
            />
            <Accordion 
              question="Como recebo o acesso ao Ebook?" 
              answer="Assim que sua inscrição for confirmada, você receberá o acesso imediato no seu e-mail para ler no celular, tablet ou computador." 
            />
            <Accordion 
              question="Eu já tentei de tudo, por que este guia funcionaria?" 
              answer="Diferente de teorias, este plano foca em ações práticas de interrupção de crises e acolhimento, desenhado para quem precisa de resultados reais." 
            />
          </motion.div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            {...fadeIn}
            className="flex flex-col md:flex-row items-center gap-12 bg-emerald-50 rounded-[3rem] p-8 md:p-16 border-2 border-emerald-100"
          >
            <div className="relative shrink-0">
               <div className="w-40 h-40 md:w-56 md:h-56 bg-brand-secondary rounded-full flex items-center justify-center p-4">
                  <div className="w-full h-full border-4 border-dashed border-white/40 rounded-full flex flex-col items-center justify-center text-white text-center">
                      <span className="text-4xl md:text-6xl font-black font-display">07</span>
                      <span className="text-xs md:text-sm font-bold uppercase tracking-widest">Dias</span>
                  </div>
               </div>
               <div className="absolute -bottom-4 -right-4 bg-brand-accent text-white p-4 rounded-2xl shadow-xl rotate-12 font-black">
                  GARANTIDO!
               </div>
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 font-display mb-6 uppercase">
                GARANTIA BLINDADA DE 7 DIAS
              </h2>
              <p className="text-lg text-emerald-800 leading-relaxed font-medium">
                Sua tranquilidade é nossa prioridade absoluta. Se em até 7 dias você sentir que o plano não ajudou a acalmar sua mente, basta solicitar o reembolso. Devolvemos 100% do seu investimento de forma rápida, sem perguntas e sem burocracia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-8">
                 PRONTO PARA <span className="gradient-text">DOMINAR SUA MENTE?</span>
              </h2>
              <div className="mb-8 flex flex-col items-center">
                 <p className="text-slate-500 font-bold line-through">De R$ 37,00</p>
                 <p className="text-5xl font-black text-brand-accent">POR APENAS R$ 9,90</p>
              </div>
              <button className="cta-button w-full bg-brand-accent text-white py-6 rounded-2xl text-2xl font-black mb-12 shadow-2xl">
                 QUERO COMEÇAR MEU PLANO DE 21 DIAS AGORA
              </button>
              
              <div className="flex flex-col items-center gap-4">
                 <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=100" alt="André" className="w-16 h-16 rounded-full border-2 border-brand-primary" referrerPolicy="no-referrer" />
                 <div>
                    <h5 className="font-bold text-slate-900">André Calman</h5>
                    <p className="text-slate-500 text-sm">Gestor Emocional</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-8 mb-8 font-bold text-xs md:text-sm uppercase tracking-widest text-slate-500">
             <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
             <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
          </div>
          <p className="text-xs md:text-sm max-w-2xl mx-auto opacity-40">
             © {new Date().getFullYear()} Mente Serena - Todos os direitos reservados. 
             Este produto não substitui o acompanhamento médico ou psiquiátrico. As informações contidas aqui são de cunho educacional e prático.
          </p>
        </div>
      </footer>
    </div>
  );
}
