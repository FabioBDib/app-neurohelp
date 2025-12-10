"use client"

import { useState } from "react"
import { Brain, FileText, ClipboardList, BarChart3, FileCheck, Users, Settings, LogOut, Home, Search, Plus, TrendingUp, Calendar, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-xl shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  NeuroHelp
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" className="gap-2">
                <LogOut className="w-4 h-4" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <Card className="sticky top-24">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "overview" ? "default" : "ghost"}
                    className={`w-full justify-start gap-3 ${activeTab === "overview" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""}`}
                    onClick={() => setActiveTab("overview")}
                  >
                    <Home className="w-5 h-5" />
                    Visão Geral
                  </Button>
                  <Button
                    variant={activeTab === "materials" ? "default" : "ghost"}
                    className={`w-full justify-start gap-3 ${activeTab === "materials" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""}`}
                    onClick={() => setActiveTab("materials")}
                  >
                    <FileText className="w-5 h-5" />
                    Materiais
                  </Button>
                  <Button
                    variant={activeTab === "assessments" ? "default" : "ghost"}
                    className={`w-full justify-start gap-3 ${activeTab === "assessments" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""}`}
                    onClick={() => setActiveTab("assessments")}
                  >
                    <ClipboardList className="w-5 h-5" />
                    Avaliações
                  </Button>
                  <Button
                    variant={activeTab === "analysis" ? "default" : "ghost"}
                    className={`w-full justify-start gap-3 ${activeTab === "analysis" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""}`}
                    onClick={() => setActiveTab("analysis")}
                  >
                    <BarChart3 className="w-5 h-5" />
                    Análises
                  </Button>
                  <Button
                    variant={activeTab === "reports" ? "default" : "ghost"}
                    className={`w-full justify-start gap-3 ${activeTab === "reports" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""}`}
                    onClick={() => setActiveTab("reports")}
                  >
                    <FileCheck className="w-5 h-5" />
                    Laudos
                  </Button>
                  <Button
                    variant={activeTab === "patients" ? "default" : "ghost"}
                    className={`w-full justify-start gap-3 ${activeTab === "patients" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""}`}
                    onClick={() => setActiveTab("patients")}
                  >
                    <Users className="w-5 h-5" />
                    Pacientes
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Bem-vindo de volta!</h1>
                  <p className="text-gray-600">Aqui está um resumo da sua atividade clínica</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="border-2 border-purple-100 hover:shadow-lg transition-all">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-gray-600">Pacientes Ativos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-gray-900">24</div>
                      <p className="text-xs text-green-600 flex items-center gap-1 mt-2">
                        <TrendingUp className="w-3 h-3" />
                        +12% este mês
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-100 hover:shadow-lg transition-all">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-gray-600">Avaliações</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-gray-900">48</div>
                      <p className="text-xs text-green-600 flex items-center gap-1 mt-2">
                        <TrendingUp className="w-3 h-3" />
                        +8% este mês
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-100 hover:shadow-lg transition-all">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-gray-600">Laudos Gerados</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-gray-900">32</div>
                      <p className="text-xs text-green-600 flex items-center gap-1 mt-2">
                        <TrendingUp className="w-3 h-3" />
                        +15% este mês
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-orange-100 hover:shadow-lg transition-all">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-gray-600">Materiais Usados</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-gray-900">156</div>
                      <p className="text-xs text-green-600 flex items-center gap-1 mt-2">
                        <TrendingUp className="w-3 h-3" />
                        +20% este mês
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Atividade Recente</CardTitle>
                    <CardDescription>Suas últimas ações na plataforma</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { action: "Laudo gerado", patient: "Maria Silva", time: "Há 2 horas", icon: FileCheck, color: "text-green-600" },
                        { action: "Avaliação concluída", patient: "João Santos", time: "Há 4 horas", icon: ClipboardList, color: "text-blue-600" },
                        { action: "Material acessado", patient: "Ana Costa", time: "Há 6 horas", icon: FileText, color: "text-purple-600" },
                        { action: "Análise realizada", patient: "Pedro Oliveira", time: "Ontem", icon: BarChart3, color: "text-orange-600" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className={`p-2 rounded-lg bg-gray-100 ${item.color}`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{item.action}</p>
                            <p className="text-sm text-gray-600">{item.patient}</p>
                          </div>
                          <span className="text-sm text-gray-500">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Ações Rápidas</CardTitle>
                    <CardDescription>Acesse rapidamente as funcionalidades principais</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button className="h-auto py-4 justify-start gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                        <Plus className="w-5 h-5" />
                        <div className="text-left">
                          <div className="font-semibold">Nova Avaliação</div>
                          <div className="text-xs opacity-90">Iniciar protocolo de avaliação</div>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-auto py-4 justify-start gap-3 border-2 hover:bg-purple-50">
                        <FileCheck className="w-5 h-5 text-purple-600" />
                        <div className="text-left">
                          <div className="font-semibold">Gerar Laudo</div>
                          <div className="text-xs text-gray-600">Criar laudo profissional</div>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-auto py-4 justify-start gap-3 border-2 hover:bg-blue-50">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <div className="text-left">
                          <div className="font-semibold">Buscar Material</div>
                          <div className="text-xs text-gray-600">Acessar biblioteca de recursos</div>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-auto py-4 justify-start gap-3 border-2 hover:bg-green-50">
                        <Users className="w-5 h-5 text-green-600" />
                        <div className="text-left">
                          <div className="font-semibold">Adicionar Paciente</div>
                          <div className="text-xs text-gray-600">Cadastrar novo paciente</div>
                        </div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "materials" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Materiais de Apoio</h1>
                    <p className="text-gray-600">Biblioteca completa de recursos terapêuticos</p>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Novo Material
                  </Button>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input placeholder="Buscar materiais..." className="w-full" />
                  </div>
                  <Button variant="outline">
                    <Search className="w-4 h-4 mr-2" />
                    Filtrar
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "Exercícios de Memória", category: "Cognição", items: 24, color: "purple" },
                    { title: "Atividades de Atenção", category: "Cognição", items: 18, color: "blue" },
                    { title: "Treino de Linguagem", category: "Linguagem", items: 32, color: "green" },
                    { title: "Funções Executivas", category: "Cognição", items: 28, color: "orange" },
                    { title: "Percepção Visual", category: "Percepção", items: 15, color: "pink" },
                    { title: "Habilidades Sociais", category: "Social", items: 21, color: "cyan" },
                  ].map((material, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-purple-300">
                      <CardHeader>
                        <div className={`w-12 h-12 bg-gradient-to-br from-${material.color}-500 to-${material.color}-600 rounded-lg flex items-center justify-center mb-3`}>
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-lg">{material.title}</CardTitle>
                        <CardDescription>{material.category} • {material.items} itens</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full">Acessar</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "assessments" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Avaliações</h1>
                    <p className="text-gray-600">Protocolos de avaliação neuropsicológica</p>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Nova Avaliação
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Maria Silva", date: "15/01/2024", status: "Concluída", progress: 100 },
                    { name: "João Santos", date: "14/01/2024", status: "Em andamento", progress: 65 },
                    { name: "Ana Costa", date: "13/01/2024", status: "Pendente", progress: 0 },
                    { name: "Pedro Oliveira", date: "12/01/2024", status: "Concluída", progress: 100 },
                  ].map((assessment, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{assessment.name}</CardTitle>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            assessment.status === "Concluída" ? "bg-green-100 text-green-700" :
                            assessment.status === "Em andamento" ? "bg-blue-100 text-blue-700" :
                            "bg-gray-100 text-gray-700"
                          }`}>
                            {assessment.status}
                          </span>
                        </div>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {assessment.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Progresso</span>
                            <span className="font-medium">{assessment.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all"
                              style={{ width: `${assessment.progress}%` }}
                            ></div>
                          </div>
                          <Button variant="outline" className="w-full mt-4">
                            {assessment.status === "Concluída" ? "Ver Resultados" : "Continuar"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "analysis" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Análises Clínicas</h1>
                  <p className="text-gray-600">Gráficos e análises dos resultados</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Análise de Desempenho</CardTitle>
                    <CardDescription>Comparativo de resultados por domínio cognitivo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                      <div className="text-center">
                        <BarChart3 className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                        <p className="text-gray-600">Gráficos e análises serão exibidos aqui</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Memória</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                      <p className="text-sm text-gray-600">Acima da média</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Atenção</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-600 mb-2">72%</div>
                      <p className="text-sm text-gray-600">Média</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Linguagem</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-green-600 mb-2">91%</div>
                      <p className="text-sm text-gray-600">Muito acima da média</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "reports" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Laudos Profissionais</h1>
                    <p className="text-gray-600">Geração e gerenciamento de laudos técnicos</p>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Gerar Laudo
                  </Button>
                </div>

                <div className="space-y-4">
                  {[
                    { patient: "Maria Silva", date: "15/01/2024", type: "Avaliação Completa", status: "Finalizado" },
                    { patient: "João Santos", date: "14/01/2024", type: "Reavaliação", status: "Em revisão" },
                    { patient: "Ana Costa", date: "13/01/2024", type: "Avaliação Inicial", status: "Finalizado" },
                    { patient: "Pedro Oliveira", date: "12/01/2024", type: "Avaliação Completa", status: "Finalizado" },
                  ].map((report, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                              <FileCheck className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{report.patient}</h3>
                              <p className="text-sm text-gray-600">{report.type} • {report.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              report.status === "Finalizado" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                            }`}>
                              {report.status}
                            </span>
                            <Button variant="outline" size="sm">Visualizar</Button>
                            <Button variant="outline" size="sm">Download</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "patients" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Pacientes</h1>
                    <p className="text-gray-600">Gerenciamento de pacientes ativos</p>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Novo Paciente
                  </Button>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input placeholder="Buscar pacientes..." className="w-full" />
                  </div>
                  <Button variant="outline">
                    <Search className="w-4 h-4 mr-2" />
                    Filtrar
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Maria Silva", age: 45, sessions: 12, lastVisit: "15/01/2024" },
                    { name: "João Santos", age: 38, sessions: 8, lastVisit: "14/01/2024" },
                    { name: "Ana Costa", age: 52, sessions: 15, lastVisit: "13/01/2024" },
                    { name: "Pedro Oliveira", age: 41, sessions: 6, lastVisit: "12/01/2024" },
                    { name: "Carla Mendes", age: 35, sessions: 10, lastVisit: "11/01/2024" },
                    { name: "Lucas Ferreira", age: 29, sessions: 4, lastVisit: "10/01/2024" },
                  ].map((patient, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {patient.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{patient.name}</CardTitle>
                            <CardDescription>{patient.age} anos</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Sessões:</span>
                            <span className="font-medium">{patient.sessions}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Última visita:</span>
                            <span className="font-medium">{patient.lastVisit}</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full mt-4">Ver Perfil</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
