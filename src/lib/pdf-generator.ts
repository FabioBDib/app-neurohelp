import jsPDF from 'jspdf'

export type ReportData = {
  patientName: string
  patientAge: number
  assessmentDate: string
  professionalName: string
  professionalCRP?: string
  assessmentType: string
  results: {
    domain: string
    score: number
    interpretation: string
  }[]
  observations?: string
  recommendations?: string
}

export function generatePDFReport(data: ReportData): Blob {
  const doc = new jsPDF()
  
  // Configurações
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 20
  let yPosition = 20

  // Header
  doc.setFontSize(20)
  doc.setTextColor(139, 92, 246) // Purple
  doc.text('NeuroHelp', margin, yPosition)
  
  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100)
  doc.text('Plataforma de Apoio Neuropsicológico', margin, yPosition + 7)
  
  // Linha separadora
  yPosition += 15
  doc.setDrawColor(139, 92, 246)
  doc.line(margin, yPosition, pageWidth - margin, yPosition)
  
  // Título do Laudo
  yPosition += 15
  doc.setFontSize(16)
  doc.setTextColor(0, 0, 0)
  doc.text('LAUDO NEUROPSICOLÓGICO', margin, yPosition)
  
  // Dados do Paciente
  yPosition += 15
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('DADOS DO PACIENTE', margin, yPosition)
  
  yPosition += 8
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.text(`Nome: ${data.patientName}`, margin, yPosition)
  
  yPosition += 6
  doc.text(`Idade: ${data.patientAge} anos`, margin, yPosition)
  
  yPosition += 6
  doc.text(`Data da Avaliação: ${data.assessmentDate}`, margin, yPosition)
  
  yPosition += 6
  doc.text(`Tipo de Avaliação: ${data.assessmentType}`, margin, yPosition)
  
  // Resultados
  yPosition += 15
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.text('RESULTADOS DA AVALIAÇÃO', margin, yPosition)
  
  yPosition += 10
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  
  data.results.forEach((result) => {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    doc.setFont('helvetica', 'bold')
    doc.text(`${result.domain}:`, margin, yPosition)
    doc.setFont('helvetica', 'normal')
    doc.text(`Pontuação: ${result.score}%`, margin + 50, yPosition)
    
    yPosition += 6
    const interpretationLines = doc.splitTextToSize(
      `Interpretação: ${result.interpretation}`,
      pageWidth - 2 * margin
    )
    doc.text(interpretationLines, margin, yPosition)
    yPosition += interpretationLines.length * 5 + 5
  })
  
  // Observações
  if (data.observations) {
    if (yPosition > 230) {
      doc.addPage()
      yPosition = 20
    }
    
    yPosition += 10
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text('OBSERVAÇÕES', margin, yPosition)
    
    yPosition += 8
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    const observationLines = doc.splitTextToSize(data.observations, pageWidth - 2 * margin)
    doc.text(observationLines, margin, yPosition)
    yPosition += observationLines.length * 5
  }
  
  // Recomendações
  if (data.recommendations) {
    if (yPosition > 230) {
      doc.addPage()
      yPosition = 20
    }
    
    yPosition += 10
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text('RECOMENDAÇÕES', margin, yPosition)
    
    yPosition += 8
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    const recommendationLines = doc.splitTextToSize(data.recommendations, pageWidth - 2 * margin)
    doc.text(recommendationLines, margin, yPosition)
    yPosition += recommendationLines.length * 5
  }
  
  // Assinatura
  if (yPosition > 240) {
    doc.addPage()
    yPosition = 20
  }
  
  yPosition += 20
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.text('_'.repeat(50), margin, yPosition)
  
  yPosition += 6
  doc.text(data.professionalName, margin, yPosition)
  
  if (data.professionalCRP) {
    yPosition += 5
    doc.text(`CRP: ${data.professionalCRP}`, margin, yPosition)
  }
  
  yPosition += 10
  doc.setFontSize(8)
  doc.setTextColor(100, 100, 100)
  doc.text(
    `Documento gerado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}`,
    margin,
    yPosition
  )
  
  return doc.output('blob')
}

export function downloadPDF(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
