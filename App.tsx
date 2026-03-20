import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  StatusBar, 
  SafeAreaView, 
  TouchableOpacity,
  Linking 
} from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const resumeData = {
  header: {
    name: 'Luciano Rodrigues Campos Vitor',
    title: 'Estudante de Desenvolvimento de Software Multiplataforma (Fatec ZL)',
    location: 'SÃO PAULO - SP',
    contact: {
      email: 'luciano.vitor@fatec.sp.gov.br',
      linkedin: 'https://linkedin.com/in/LucianoVitor',
      github: 'https://github.com/LucianoVitor',
    }
  },
  summary: 'Busco oportunidade de estágio na área de desenvolvimento de software, visando aplicar e aprimorar meus conhecimentos em tecnologias web e mobile.',
  experience: [
    {
      role: 'Vendedor',
      company: 'RIOS TERCEIRIZAÇÃO & COWORKING LTDA',
      period: 'Mar/2025 - Out/2025',
      description: '● Venda direta e atendimento personalizado.\n● Treinamentos de comunicação e metas comerciais.',
    },
    {
      role: 'Vendedor',
      company: 'NBA - LOCAÇÃO DE MÃO DE OBRA',
      period: 'Jul/2024 - Jan/2025',
      description: '● Atendimento no setor de estofados.\n● Desenvolvimento de habilidades de negociação.',
    },
    {
      role: 'Auxiliar de Escritório',
      company: 'CHARUTOS E PRESENTES',
      period: 'Dez/2023 - April/2024',
      description: '● Gestão de pedidos e ERP Tiny.\n● Atendimento multicanal e organização de estoque.',
    },
  ],
  education: [
    {
      course: 'Tecnologia em Desenvolvimento de Software Multiplataforma',
      institution: 'Fatec Zona Leste',
      period: 'Cursando (Início: 2024)',
      status: 'ONLINE / CURSANDO',
    },
    {
      course: 'Técnico em Desenvolvimento de Sistemas',
      institution: 'Etec Zona Leste',
      period: 'Concluído em 2023',
      status: 'CONCLUÍDO',
    }
  ],
  skills: {
    hard: ['Node.js', 'React Native', 'JavaScript/TS', 'SQL/NoSQL', 'Git/GitHub'],
    soft: ['Comunicação', 'Trabalho em Equipe', 'Proatividade', 'Resolução de Problemas'],
  },
  academicFuture: {
    goal: 'Interesse em seguir carreira na área de Inteligência Artificial e Ciência de Dados.',
    focus: 'Aprofundamento em algoritmos de Machine Learning e automação.'
  },
  objectives: {
    shortTerm: 'Atuar como desenvolvedor júnior focado em soluções Fullstack.',
    longTerm: 'Tornar-se arquiteto de softwares e liderar times de engenharia.'
  },
  languages: [
    { lang: 'Inglês', level: 'BÁSICO' },
    { lang: 'Espanhol', level: 'BÁSICO' },
  ]
};

// --- COMPONENTES AUXILIARES ---

const TimelineItem = ({ data }: { data: any }) => (
  <View style={styles.timelineItem}>
    <View style={styles.timelineVisual}>
      <View style={styles.timelineDot} />
      <View style={styles.timelineLine} />
    </View>
    <View style={styles.timelineContent}>
      <Text style={styles.roleText}>{data.role}</Text>
      <Text style={styles.companyText}>{data.company}</Text>
      <Text style={styles.periodText}>{data.period}</Text>
      <Text style={styles.descText}>{data.description}</Text>
    </View>
  </View>
);

const SectionTitle = ({ title }: { title: string }) => (
  <Text style={styles.sectionTitle}>{`[ ${title} ]`}</Text>
);

// Componente para a tabela de idiomas
const LanguageTable = ({ data }: { data: any[] }) => (
  <View style={styles.table}>
    {data.map((item, index) => (
      <View key={index} style={styles.tableRow}>
        <Text style={styles.tableCellLabel}>{item.lang}</Text>
        <Text style={styles.tableCellLevel}>:: {item.level} ::</Text>
      </View>
    ))}
  </View>
);

// --- COMPONENTE PRINCIPAL ---

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* HEADER */}
        <View style={styles.headerCard}>
          <View style={styles.profileHexagon}><View style={styles.profileInner} /></View>
          <Text style={styles.nameText}>{resumeData.header.name}</Text>
          <Text style={styles.subTitle}>{resumeData.header.title}</Text>
          <Text style={styles.location}>{resumeData.header.location}</Text>
          
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => Linking.openURL(resumeData.header.contact.github)}>
              <AntDesign name="github" size={30} color="#FF0000" style={styles.socialIcon} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => Linking.openURL(resumeData.header.contact.linkedin)}>
              <AntDesign name="linkedin-square" size={30} color="#FF0000" style={styles.socialIcon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(`mailto:${resumeData.header.contact.email}`)}>
              <MaterialCommunityIcons name="email-fast" size={32} color="#FF0000" style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* RESUMO */}
        <View style={styles.section}>
          <SectionTitle title="RESUMO PROFISSIONAL" />
          <View style={styles.card}>
            <Text style={styles.summaryText}>{resumeData.summary}</Text>
          </View>
        </View>

        {/* EXPERIÊNCIA */}
        <View style={styles.section}>
          <SectionTitle title="EXPERIÊNCIA PROFISSIONAL" />
          {resumeData.experience.map((exp, index) => (
            <TimelineItem key={index} data={exp} />
          ))}
        </View>

        {/* FORMAÇÃO */}
        <View style={styles.section}>
          <SectionTitle title="FORMAÇÃO ACADÊMICA" />
          {resumeData.education.map((edu, index) => (
            <View key={index} style={[styles.card, { marginBottom: 10 }]}>
              <Text style={styles.cardTitle}>{edu.institution}</Text>
              <Text style={styles.cardInfo}>{edu.course}</Text>
              <Text style={styles.cardStatus}>{edu.status}</Text>
            </View>
          ))}
        </View>

        {/* FUTURO ACADÊMICO */}
        <View style={styles.section}>
          <SectionTitle title="FUTURO ACADÊMICO & CARREIRA" />
          <View style={styles.card}>
            <Text style={styles.highlightText}>FOCO:</Text>
            <Text style={styles.summaryText}>{resumeData.academicFuture.goal}</Text>
          </View>
        </View>

        {/* OBJETIVOS */}
        <View style={styles.section}>
          <SectionTitle title="EMPRESAS E OBJETIVOS" />
          <View style={styles.card}>
            <Text style={styles.highlightText}>CURTO PRAZO:</Text>
            <Text style={styles.summaryText}>{resumeData.objectives.shortTerm}</Text>
            <Text style={[styles.highlightText, {marginTop: 10}]}>LONGO PRAZO:</Text>
            <Text style={styles.summaryText}>{resumeData.objectives.longTerm}</Text>
          </View>
        </View>

        {/* SKILLS */}
        <View style={styles.section}>
          <SectionTitle title="SKILLS" />
          <View style={styles.skillsGrid}>
            {resumeData.skills.hard.map(skill => (
              <View key={skill} style={styles.skillBadge}><Text style={styles.skillText}>{skill}</Text></View>
            ))}
          </View>
        </View>

        {/* IDIOMAS */}
        <View style={styles.section}>
          <SectionTitle title="IDIOMAS" />
          <View style={styles.card}>
            <LanguageTable data={resumeData.languages} />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ESTABELECER CONEXÃO (DOWNLOAD PDF)</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

// --- ESTILOS ---

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  scrollContent: { padding: 20, paddingBottom: 40 },
  headerCard: { alignItems: 'center', marginBottom: 30, padding: 20, borderWidth: 1, borderColor: '#FF0000' },
  profileHexagon: { width: 70, height: 70, backgroundColor: '#FF0000', transform: [{ rotate: '45deg' }], marginBottom: 20 },
  profileInner: { width: 60, height: 60, backgroundColor: '#000', margin: 5 },
  nameText: { color: '#FF0000', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  subTitle: { color: '#fff', fontSize: 12, textAlign: 'center', marginTop: 5 },
  location: { color: '#FF0000', fontSize: 11, marginTop: 5, letterSpacing: 2 },
  iconContainer: { flexDirection: 'row', marginTop: 20, justifyContent: 'center', gap: 25 },
  socialIcon: { opacity: 0.9 },
  section: { marginBottom: 25 },
  sectionTitle: { color: '#FF0000', fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  card: { backgroundColor: '#0a0a0a', padding: 15, borderWidth: 0.5, borderColor: '#333', borderLeftWidth: 3, borderLeftColor: '#FF0000' },
  summaryText: { color: '#eee', fontSize: 13, lineHeight: 18 },
  highlightText: { color: '#FF0000', fontWeight: 'bold', fontSize: 11, marginBottom: 2 },
  
  timelineItem: { flexDirection: 'row' },
  timelineVisual: { width: 30, alignItems: 'center' },
  timelineDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#FF0000' },
  timelineLine: { flex: 1, width: 1, backgroundColor: '#FF0000', opacity: 0.3 },
  timelineContent: { flex: 1, paddingLeft: 10, paddingBottom: 20 },
  roleText: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
  companyText: { color: '#FF0000', fontSize: 13 },
  periodText: { color: '#888', fontSize: 11, marginBottom: 5 },
  descText: { color: '#ccc', fontSize: 12, lineHeight: 16 },
  
  cardTitle: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
  cardInfo: { color: '#ccc', fontSize: 13, marginVertical: 2 },
  cardStatus: { color: '#FF0000', fontSize: 10, fontWeight: 'bold' },
  
  skillsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  skillBadge: { paddingHorizontal: 8, paddingVertical: 4, borderWidth: 1, borderColor: '#FF0000' },
  skillText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  
  // Estilos da Tabela de Idiomas
  table: { marginTop: 5 },
  tableRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 },
  tableCellLabel: { color: '#fff', fontSize: 13 },
  tableCellLevel: { color: '#FF0000', fontWeight: 'bold', fontSize: 12 },
  
  button: { backgroundColor: '#FF0000', padding: 16, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#000', fontWeight: 'bold', fontSize: 12 },
});

export default App;
