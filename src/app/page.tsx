"use client"

import { useState } from "react"
import { Brain, FileText, ClipboardList, BarChart3, Users, CheckCircle, ArrowRight, Menu, X, Star, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 sm:p-2.5 rounded-xl shadow-lg">
                <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                NeuroHelp
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#recursos" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Recursos
              </a>
              <a href="#planos" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Planos
              </a>
              <a href="#dashboard" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Dashboard
              </a>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all">
                Começar Agora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-purple-100">
              <a href="#recursos" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Recursos
              </a>
              <a href="#planos" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Planos
              </a>
              <a href="#dashboard" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Dashboard
              </a>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg">
                Começar Agora
              </Button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
            <Star className="w-4 h-4" />
            Plataforma Profissional de Neuropsicologia
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Transforme seu
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> atendimento clínico</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Materiais de apoio, avaliações neuropsicológicas, análises clínicas e laudos profissionais em uma única plataforma inteligente.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-purple-500/50 transition-all text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              Começar Teste Grátis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              Ver Demonstração
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-6 sm:pt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>14 dias grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Ferramentas profissionais para otimizar seu trabalho clínico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <Card className="border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur">
            <CardHeader>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Materiais de Apoio</CardTitle>
              <CardDescription className="text-base">
                Biblioteca completa com exercícios, atividades e recursos terapêuticos atualizados
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur">
            <CardHeader>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <ClipboardList className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Avaliações</CardTitle>
              <CardDescription className="text-base">
                Protocolos de avaliação neuropsicológica validados e personalizáveis
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur">
            <CardHeader>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Análises Clínicas</CardTitle>
              <CardDescription className="text-base">
                Gráficos e análises automáticas dos resultados das avaliações
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur">
            <CardHeader>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Laudos Profissionais</CardTitle>
              <CardDescription className="text-base">
                Geração automática de laudos técnicos completos e personalizados
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center text-white space-y-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">100% Seguro</h3>
              <p className="text-purple-100 text-sm sm:text-base">
                Dados criptografados e conformidade com LGPD
              </p>
            </div>

            <div className="text-center text-white space-y-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Rápido e Eficiente</h3>
              <p className="text-purple-100 text-sm sm:text-base">
                Economize até 70% do tempo em tarefas administrativas
              </p>
            </div>

            <div className="text-center text-white space-y-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Suporte Dedicado</h3>
              <p className="text-purple-100 text-sm sm:text-base">
                Equipe especializada disponível para ajudar você
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Planos que se adaptam a você
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Escolha o plano ideal para sua prática clínica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Plano Básico */}
          <Card className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl sm:text-3xl mb-2">Básico</CardTitle>
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                R$ 97
                <span className="text-lg sm:text-xl text-gray-500 font-normal">/mês</span>
              </div>
              <CardDescription className="text-base">Ideal para profissionais iniciantes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Até 20 pacientes ativos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Materiais de apoio básicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Avaliações padronizadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Laudos básicos</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white">
                Começar Agora
              </Button>
            </CardContent>
          </Card>

          {/* Plano Profissional */}
          <Card className="border-4 border-purple-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
              POPULAR
            </div>
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-2xl sm:text-3xl mb-2">Profissional</CardTitle>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                R$ 197
                <span className="text-lg sm:text-xl text-gray-500 font-normal">/mês</span>
              </div>
              <CardDescription className="text-base">Para profissionais estabelecidos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Pacientes ilimitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Biblioteca completa de materiais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Avaliações personalizáveis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Análises clínicas avançadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Laudos profissionais completos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Suporte prioritário</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg">
                Começar Agora
              </Button>
            </CardContent>
          </Card>

          {/* Plano Clínica */}
          <Card className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl sm:text-3xl mb-2">Clínica</CardTitle>
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                R$ 397
                <span className="text-lg sm:text-xl text-gray-500 font-normal">/mês</span>
              </div>
              <CardDescription className="text-base">Para clínicas e equipes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tudo do Profissional +</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Até 5 profissionais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Gestão de equipe</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Relatórios administrativos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">API para integrações</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white">
                Falar com Vendas
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 shadow-2xl">
          <CardContent className="text-center py-12 sm:py-16 px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Pronto para transformar sua prática clínica?
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de profissionais que já otimizaram seu trabalho com o NeuroHelp
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-2xl text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-bold"
            >
              Começar Teste Grátis de 14 Dias
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">NeuroHelp</span>
              </div>
              <p className="text-sm text-gray-400">
                Plataforma profissional de apoio neuropsicológico
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#recursos" className="hover:text-purple-400 transition-colors">Recursos</a></li>
                <li><a href="#planos" className="hover:text-purple-400 transition-colors">Planos</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Demonstração</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">LGPD</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 NeuroHelp. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
