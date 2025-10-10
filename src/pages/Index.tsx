import { useState } from "react";
import { Scale, Phone, Mail, MapPin, Star, ChevronRight, Target, Eye, Heart, Shield, UserCheck, TrendingUp, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import logoJA from "@/assets/logo-ja.png";
import ctaBackground from "@/assets/cta-background.jpg";
import recepcao from "@/assets/recepcao.jpg";
import teamJuliana from "@/assets/teamJuliana.png";
import teamIngrid from "@/assets/teamIngrid.jpg";
import officeMeeting from "@/assets/officeMeeting.png";
import direitoCivil from "@/assets/direitoCivil.png";
import officeLobby from "@/assets/officeLobby.png";
import direitoEmpresarial from "@/assets/direitoEmpresarial.png";
import direitoConsumerista from "@/assets/direitoConsumerista.png";
import advocaciaTrabalhista from "@/assets/advocaciaTrabalhista.png";
import direitoImobiliario from "@/assets/direitoImobiliario.png";
import direitoSucessorio from "@/assets/direitoSucessorio.png";
import advocaciaFamiliarista from "@/assets/advocaciaFamiliarista.png";
import advocaciaPrevidenciaria from "@/assets/advocaciaPrevidenciaria.png";
import consultoriaJuridica from "@/assets/consultoriaJuridica.png";
import logosemfundo from "@/assets/logosemfundo.png";


const Index = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2.5 text-xs">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3" />
              (31) 99188-4597
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3" />
              (31) 3965-1672
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3 w-3" />
              contato@joelmaalvesadv.com.br
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              Avenida Nova York, 587 - Segundo andar - Capelinha, Betim - MG, 32678-325
            </span>
            <span className="text-accent font-semibold">OAB/MG 11.811</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary backdrop-blur-sm border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logosemfundo} alt="Joelma Alves Logo" className="h-12 w-12 object-contain" />
            <div>
              <h1 className="text-base font-bold text-primary-foreground tracking-wide">Joelma Alves Advocacia</h1>
              <p className="text-xs text-primary-foreground/70">Consultoria e Assessoria Jurídica</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary-foreground hover:text-accent transition-colors text-sm font-medium cursor-pointer">Home</a>
            <a href="#sobre" onClick={(e) => { e.preventDefault(); document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary-foreground hover:text-accent transition-colors text-sm font-medium cursor-pointer">Sobre nós</a>
            <a href="#escritorio" onClick={(e) => { e.preventDefault(); document.getElementById('escritorio')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary-foreground hover:text-accent transition-colors text-sm font-medium cursor-pointer">Nosso escritório</a>
            <a href="#areas" onClick={(e) => { e.preventDefault(); document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary-foreground hover:text-accent transition-colors text-sm font-medium cursor-pointer">Áreas de atuação</a>
            <a href="#contato" onClick={(e) => { e.preventDefault(); document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary-foreground hover:text-accent transition-colors text-sm font-medium cursor-pointer">Contato</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold text-sm px-6 h-10">
            Entrar em contato
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none" style={{
        backgroundImage: `url(${recepcao})`
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary pointer-events-none"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Logo Central */}
          <div className="flex flex-col items-center mb-12">
            <img src={logosemfundo} alt="Logo Joelma Alves" className="w-40 h-40 mb-6" />
          </div>

          {/* Texto Principal */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight max-w-5xl mx-auto">
            Prestamos serviços de Advocacia, Consultoria e Assessoria Jurídica com excelência, dedicação e compromisso com os melhores resultados para nossos clientes.
          </h2>

          {/* Botão */}
          <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold text-sm px-6 py-3 h-auto mb-12">
            Fale conosco <ChevronRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Sobre nossa Advocacia</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Escritório comprometido com excelência e dedicado a oferecer as melhores soluções jurídicas
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Prover serviços jurídicos de qualidade, a fim de auxiliar os clientes a alcançar seus objetivos de forma eficaz,  inovadora e humana, através de advogados e colaboradores qualificados, valorizados e dedicados a preservar a credibilidade construída ao longo dos anos.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent">Visão</h3>
              <p className="text-muted-foreground">
                Ser uma sociedade de advogados que ofereça soluções jurídicas completas a seus clientes em seu mercado de atuação, em âmbito nacional, por meio de uma equipe profissional altamente dedicada e qualificada, que garanta inovação, criatividade, excelência e vanguarda, tanto na prestação de serviços como na implementação de mudanças estruturais e tecnológicas.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent">Valores</h3>
              <p className="text-muted-foreground">
                Ética, lealdade, boa-fé, transparência, honestidade, responsabilidade social e empatia,  primando pela verdade para poder servir à justiça como um de seus elementosessenciais.
              </p>
            </Card>
          </div>
          
          {/* Nossos Diferenciais */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-accent">Nossos Diferenciais</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">Full Legal Assistance</h4>
                    <p className="text-muted-foreground">Atendimento especializado e global em todas as áreas do direito</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">Foco no Cliente</h4>
                    <p className="text-muted-foreground">Dedicação integral e soluções personalizadas para cada caso</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">Excelência Profissional</h4>
                    <p className="text-muted-foreground">Compromisso com a qualidade e ética em nossa atuação</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">Resultados Efetivos</h4>
                    <p className="text-muted-foreground">Histórico comprovado de sucesso em diversos procedimentos</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Escritório Section */}
      <section id="escritorio" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Nosso Escritório</h2>
          <p className="text-center text-muted-foreground mb-16">
            Um ambiente profissional e acolhedor, projetado para oferecer o melhor atendimento e soluções jurídicas com conforto e privacidade completa.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-lg">
              <img src={officeMeeting} alt="Sala de reuniões" className="w-full h-64 object-cover" />
            </Card>
            <Card className="overflow-hidden shadow-lg">
              <img src={officeLobby} alt="Recepção" className="w-full h-64 object-cover" />
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            {/* Juliana */}
            <div className="order-2 md:order-1">
              <img src={teamJuliana} alt="Dra. Joelma Alves" className="w-full h-[500px] object-cover rounded-lg shadow-xl" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-2 text-foreground">Dra. Joelma Alves</h2>
              <p className="text-sm text-accent font-semibold mb-4">OAB/MG 137.678</p>
              <p className="text-base text-muted-foreground mb-6">
                Advogada com ampla experiência em diversas áreas do direito, oferecendo atendimento humanizado e soluções jurídicas modernas.
              </p>
              <Card className="bg-muted p-6">
                <h4 className="font-bold mb-3 text-foreground">Especializações</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Advocacia Empresarial & Consultoria</li>
                  <li>• Direito Civil & Imobiliário</li>
                  <li>• Direito Trabalhista & Previdenciário</li>
                  <li>• Direito de Família & Sucessório</li>
                  <li>• Direito do Consumidor</li>
                </ul>
              </Card>
            </div>

            {/* Ingrid */}
            <div className="order-3">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Ingrid - Estagiária</h2>
              <p className="text-base text-muted-foreground mb-6">
                Graduanda em Direito pela PUC Minas - Campus Betim (7º período), com experiência prática em escritórios de advocacia e no Núcleo de Prática Jurídica (SAJ). Atua no acompanhamento de processos, elaboração de peças, apoio em audiências e atendimento ao público. Participa de projetos de extensão em Direito Civil, Consumista e foi monitora acadêmica no programa PUC Aberta, fortalecendo competências de integração e orientação estudantil. Complementa sua formação com cursos e oficinas em advocacia criminal, oratória, direito constitucional e desportivo.
              </p>
              <Card className="bg-muted p-6">
                <h4 className="font-bold mb-3 text-foreground">Competências Principais</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Atendimento ao cliente Júnior</li>
                  <li>• Processo Judicial e Extrajudicial</li>
                  <li>• Direito Imobiliário e Urbanístico</li>
                  <li>• Direito de Família e Sucessões</li>
                  <li>• Resolução de Conflitos</li>
                </ul>
              </Card>
            </div>
            <div className="order-4">
            <img src={teamIngrid} alt="Ingrid - Estagiária" className="w-full h-[500px] object-cover object-top rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Nossas áreas de atuação</h2>
          <p className="text-center text-muted-foreground mb-16">
            Oferecemos serviços jurídicos especializados em diversas áreas do direito, sempre com foco na excelência e no atendimento personalizado às necessidades de cada cliente.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
            title: "Direito Civil",
            image: direitoCivil,
            items: ["Contratos Civis", "Responsabilidade Civil", "Direitos Reais", "Indenizações"]
          }, {
            title: "Advocacia Empresarial",
            image: direitoEmpresarial,
            items: ["Contratos Empresariais", "Consultoria Corporativa", "Compliance", "Recuperação Judicial"]
          }, {
            title: "Advocacia Consumerista",
            image: direitoConsumerista,
            items: ["Defesa do Consumidor", "Vícios de Produtos", "Publicidade Enganosa", "Danos morais"]
          }, {
            title: "Advocacia Trabalhista",
            image: advocaciaTrabalhista,
            items: ["Ações Trabalhistas", "Negociações Sindicais", "FGTS", "Ações Coletivas"]
          }, {
            title: "Advocacia Imobiliária",
            image: direitoImobiliario,
            items: ["Compra e Venda", "Locação", "Usucapião", "Regularização Fundiária"]
          }, {
            title: "Advocacia Sucessória",
            image: direitoSucessorio,
            items: ["Inventário e Partilha", "Testamentos", "Planejamento Sucessório", "Partilhas"]
          }, {
            title: "Advocacia Familiarista",
            image: advocaciaFamiliarista,
            items: ["Divórcio", "Pensão Alimentícia", "Guarda de Filhos", "União Estável"]
          }, {
            title: "Advocacia Previdenciária",
            image: advocaciaPrevidenciaria,
            items: ["Aposentadorias", "Benefícios", "Revisões", "Auxílios"]
          }, {
            title: "Consultoria Jurídica",
            image: consultoriaJuridica,
            items: ["Análise de Contratos", "Pareceres Jurídicos", "Due Diligence", "Assessoria Preventiva"]
          }].map((area, index) => <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={area.image} alt={area.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item, i) => <li key={i} className="flex items-center text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-accent mr-2" />
                        {item}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${ctaBackground})`
      }}></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
            Precisa de Assessoria Jurídica?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white max-w-3xl mx-auto">
            Entre em contato conosco para uma consulta personalizada. Estamos prontos para atender suas necessidades jurídicas com excelência e dedicação.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-10 py-6 h-auto rounded-md">
            Fale Conosco
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">O que dizem nossos clientes</h2>
          <p className="text-center text-muted-foreground mb-16">
            Depoimentos de quem confia em nosso trabalho
          </p>
          <div className="max-w-5xl mx-auto">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {[{
                  name: "Maikon Silva",
                  text: "Tive uma excelente experiência com a Dra Joelma, é uma profissional dedicada e exemplar. Ela me ajudou a pegar a guarda da minha filha, é nítido o amor que ela tem pelo que faz. Recomendo muito como advogada, além de prestativa, sempre está consultando os processos de seus clientes, nunca perdendo prazos durante os trâmites. Hoje, mais que uma advogada, é uma grande AMIGA"
                }, {
                  name: "Cláudio Henrique",
                  text: "Gostaria de expressar meu sincero elogio à Joelma Alves Advocacia. A competência e dedicação demonstradas pela equipe refletem-se em serviços jurídicos de alta qualidade. Estou impressionado com o profissionalismo e a atenção aos detalhes que caracterizam o trabalho desta advocacia. Recomendo Joelma Alves Advocacia a todos que buscam excelência jurídica."
                }, {
                  name: "Priscilla Ribeiro",
                  text: "Atendimento e profissionalismo que dispensa qualquer tipo de apresentação. Advogada Joelma, um ser humano incrível extremamente ética e de uma grande empatia, sem contar o ambiente organizado e o atendimento da recepção, eficiente e ágil."
                }, {
                  name: "Aline Ferreira Lins",
                  text: "Pessoal, super indico o trabalho da Dra.Joelma. Muito prestativa e ótima profissional. Tenho certeza que, com ela a frente, todos os seus objetivos dentro da esfera jurídica serão alcançados."
                }, {
                  name: "Otacílio de Souza",
                  text: "Uma excelente profissional. Comprometida com a verdade e atenta aos detalhes. Minha experiência com os serviços de advocacia com a profissional Joelma Alves foi a melhor possível. Destaco o dinamismo e a confiança que eu e minha família podemos ter com ela para a resolução de uma problema que nos afetou financeiramente. Só alegria!"
                }, {
                  name: "Silmara Ribeiro",
                  text: "Excelente profissional, de uma competência incrível, sem falar na atenção com o cliente."
                }, {
                  name: "Edmara Rubens",
                  text: "Uma excelente profissional. Resolveu meu trabalho rápido,e com amor e dedicação"
                }, {
                  name: "Josiele Santos",
                  text: "Excelente profissional, me auxiliou desde o inicio ao fim do meu processo, super indico e recomendo!"
                 }, {
                  name: "Felipe Aquino",
                  text: "Excelente profissional, resolveu o que tinha .pra ser feito em tempo ágil"
                 }, {
                  name: "Leonardo Gomes",
                  text: "Ótimo atendimento sempre com transferência e agilidade. Um exemplo de profissional a ser seguido, Parabéns pela dedicação e rapidez."
                }].map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="p-6 shadow-lg h-full">
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
                        </div>
                        <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contato" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Entre em Contato Conosco</h2>
          <p className="text-center text-muted-foreground mb-16">
            Escolha a forma mais prática de falar conosco. Estamos prontos para atender suas necessidades jurídicas com agilidade e dedicação.
          </p>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Informações de contato</h3>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Telefone</p>
                      <p className="text-muted-foreground">(31) 99188-4597</p>
                      <p className="text-muted-foreground">(31) 3965-1672</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">E-mail</p>
                      <p className="text-muted-foreground">contato@joelmaalvesadv.com.br</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Endereço</p>
                      <p className="text-muted-foreground">
                        Avenida Nova York, 587<br />
                        Segundo andar, interfone 02<br />
                        Capelinha, Betim - MG
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Horário de Atendimento</p>
                      <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex gap-4 items-center">
                      <a href="https://www.instagram.com/joelmaalvesadv/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                        <Instagram className="h-6 w-6 text-accent" />
                      </a>
                      <a href="https://www.facebook.com/share/1B4G1mzbxM/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                        <Facebook className="h-6 w-6 text-accent" />
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Redes Sociais</p>
                      <p className="text-muted-foreground">Siga-nos nas redes sociais</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <Card className="p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Nome Completo</label>
                  <Input value={formData.nome} onChange={e => setFormData({
                  ...formData,
                  nome: e.target.value
                })} required className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">E-mail</label>
                  <Input type="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} required className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Telefone</label>
                  <Input value={formData.telefone} onChange={e => setFormData({
                  ...formData,
                  telefone: e.target.value
                })} required className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Mensagem</label>
                  <Textarea value={formData.mensagem} onChange={e => setFormData({
                  ...formData,
                  mensagem: e.target.value
                })} required rows={4} className="w-full" />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-muted">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.8516936859244!2d-44.184687!3d-19.967344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69a3e72f7b665%3A0x8e63c72bc77b0ba3!2sAv.%20Nova%20York%2C%20587%20-%20Capelinha%2C%20Betim%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890" width="100%" height="100%" style={{
        border: 0
      }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização do Escritório"></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logoJA} alt="Logo Joelma Alves" className="h-10 w-10 object-contain" />
                <div>
                  <h3 className="font-bold">Joelma Alves Advocacia</h3>
                  <p className="text-xs">Consultoria e Assessoria Jurídica</p>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/80 mb-2">
                Sociedade Individual de escritório comprometido com a excelência e dedicada a oferecer as melhores soluções jurídicas.
              </p>
              <p className="text-xs text-accent font-semibold">
                OAB/MG 11.811
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Especialidades</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Advocacia Empresarial</li>
                <li>Advocacia Civil</li>
                <li>Advocacia Trabalhista</li>
                <li>Advocacia Familiarista</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>(31) 99188-4597 (WhatsApp)</li>
                <li>(31) 3583-1872</li>
                <li>contato@joelmaalvesadv.com.br</li>
                <li>Avenida Nova York, 587 - Segundo andar, interfone 02 - Capelinha, Betim - MG</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Horário de Atendimento</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Segunda a Sexta</li>
                <li>8h às 18h</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2025 Joelma Alves Advocacia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;