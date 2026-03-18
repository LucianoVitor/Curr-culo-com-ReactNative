import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  StatusBar, 
  SafeAreaView, 
  TouchableOpacity 
} from 'react-native';

// --- DADOS DO CURRÍCULO CORRIGIDOS ---
const resumeData = {
  header: {
    name: 'Luciano Rodrigues Campos Vitor',
    title: 'Estudante de Desenvolvimento de Software Multiplataforma (Fatec ZL)',
    location: 'SÃO PAULO - SP',
    contact: {
      email: 'luciano.vitor@fatec.sp.gov.br',
      linkedin: 'linkedin.com/in/LucianoVitor',
      github: 'github.com/LucianoVitor',
    }
  },
  summary: 'Busco oportunidade de estágio na área de desenvolvimento de software, visando aplicar e aprimorar meus conhecimentos em tecnologias web e mobile.',
  experience: [
    {
      role: 'Vendedor',
      company: 'RIOS TERCEIRIZAÇÃO & COWORKING LTDA (NET SOFÁS / DDS SOFÁS)',
      period: 'Mar/2025 - Out/2025',
      // CORREÇÃO: Transformamos a descrição em uma única String com quebras de linha (\n)
      description: '● Continuidade nas atividades de venda direta ao cliente.\n● Participação em treinamentos internos para aprimoramento da comunicação e atendimento ao público.\n● Suporte em campanhas promocionais e metas comerciais da loja.\n● Atendimento personalizado, prezando pela experiência do cliente e fidelização.',
    },
    {
      role: 'Vendedor',
      company: 'NBA - LOCAÇÃO DE MÃO DE OBRA ESPECIALIZADA LTDA',
      period: 'Jul/2024 - Jan/2025',
      description: '● Atendimento ao cliente no setor de vendas de sofás e estofados.\n● Auxílio na organização do showroom e na reposição de modelos em exposição.\n● Apoio no processo de venda: demonstração de produtos e finalização de pedidos.\n● Desenvolvimento de habilidades de negociação, escuta ativa e empatia.',
    },
    {
      role: 'Auxiliar de Escritório',
      company: 'CHARUTOS E PRESENTES',
      period: 'Dez/2023 - April/2024',
      description: '● Processo de venda e despacho de pedidos (dúvidas, conferência, embalagem e envio).\n● Experiência em plataformas de ERP como Tiny.\n● Atendimento de clientes via WhatsApp, e-mail e telefone.\n● Organização de estoque, entrada de produtos e limpeza do ambiente.',
    },
  ],
  // CORREÇÃO: Education agora é uma lista [] para suportar Fatec E Etec
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
      period: 'Cursou (Início: 2021)',
      status: 'CONCLUÍDO',
    }
  ],
  skills: {
    hard: ['Node.js', 'React Native', 'JavaScript/TS', 'SQL/NoSQL', 'Git/GitHub', 'Figma', 'Linux'],
    soft: ['Comunicação', 'Trabalho em Equipe', 'Proatividade', 'Resolução de Problemas', 'Adaptabilidade'],
  },
  languages: [
    { lang: 'Inglês', level: 'BÁSICO' },
    { lang: 'Espanhol', level: 'BÁSICO' },
  ]
};

// --- COMPONENTES ---

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

const LanguageTable = ({ data }: { data: any[] }) => (
  <View style={styles.table}>
    {data.map((item, index) => (
      <View key={index} style={styles.tableRow}>
        <Text style={[styles.tableCell, styles.tableCellLabel]}>{item.lang}</Text>
        <Text style={[styles.tableCell, styles.tableCellLevel]}>:: {item.level} ::</Text>
      </View>
    ))}
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.headerCard}>
          <View style={styles.profileHexagon}><View style={styles.profileInner} /></View>
          <Text style={styles.nameText}>{resumeData.header.name}</Text>
          <Text style={styles.subTitle}>{resumeData.header.title}</Text>
          <Text style={styles.location}>{resumeData.header.location}</Text>
          <View style={styles.contactBar}>
            {Object.values(resumeData.header.contact).map((link, i) => (
              <Text key={i} style={styles.contactLink}>{link}</Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>[ RESUMO PROFISSIONAL ]</Text>
          <View style={styles.card}>
            <Text style={styles.summaryText}>{resumeData.summary}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>[ EXPERIENCIA PROFISSIONAL ]</Text>
          {resumeData.experience.map((exp, index) => (
            <TimelineItem key={index} data={exp} />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>[ FORMACAO ACADEMICA ]</Text>
          {/* CORREÇÃO: Mapeando a lista de educação para aparecerem todas */}
          {resumeData.education.map((edu, index) => (
            <View key={index} style={[styles.card, {marginBottom: 10}]}>
              <Text style={styles.cardTitle}>{edu.institution}</Text>
              <Text style={styles.cardInfo}>{edu.course}</Text>
              <Text style={styles.cardPeriod}>{edu.period}</Text>
              <Text style={styles.cardStatus}>{edu.status}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>[ HABILIDADES TÉCNICAS ]</Text>
          <View style={styles.skillsGrid}>
            {resumeData.skills.hard.map(skill => (
              <View key={skill} style={styles.skillBadge}><Text style={styles.skillText}>{skill}</Text></View>
            ))}
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>[ HABILIDADES COMPORTAMENTAIS ]</Text>
          <View style={styles.skillsGrid}>
            {resumeData.skills.soft.map(skill => (
              <View key={skill} style={styles.softSkillBadge}><Text style={styles.softSkillText}>{skill}</Text></View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>[ IDIOMAS ]</Text>
          <View style={styles.card}><LanguageTable data={resumeData.languages} /></View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>DOWNLOAD SYSTEM SPECS (PDF)</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  scrollContent: { padding: 20, paddingBottom: 40 },
  headerCard: { alignItems: 'center', marginBottom: 30, padding: 20, borderWidth: 1, borderColor: '#FF0000', elevation: 5 },
  profileHexagon: { width: 90, height: 90, backgroundColor: '#FF0000', transform: [{ rotate: '45deg' }], marginBottom: 20, justifyContent: 'center', alignItems: 'center' },
  profileInner: { width: 80, height: 80, backgroundColor: '#1a1a1a' },
  nameText: { color: '#FF0000', fontSize: 22, fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center' },
  subTitle: { color: '#fff', fontSize: 13, textAlign: 'center', marginTop: 5 },
  location: { color: '#FF0000', fontSize: 12, marginTop: 5, fontWeight: 'bold' },
  contactBar: { marginTop: 15, alignItems: 'center' },
  contactLink: { color: '#ccc', fontSize: 11, textDecorationLine: 'underline', marginBottom: 2 },
  section: { marginBottom: 30 },
  sectionTitle: { color: '#FF0000', fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  card: { backgroundColor: '#0a0a0a', padding: 15, borderWidth: 0.5, borderColor: '#333', borderLeftWidth: 3, borderLeftColor: '#FF0000' },
  summaryText: { color: '#eee', fontSize: 14, lineHeight: 20 },
  timelineItem: { flexDirection: 'row' },
  timelineVisual: { width: 30, alignItems: 'center' },
  timelineDot: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#FF0000' },
  timelineLine: { flex: 1, width: 2, backgroundColor: '#FF0000', opacity: 0.3 },
  timelineContent: { flex: 1, paddingLeft: 10, paddingBottom: 20 },
  roleText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  companyText: { color: '#FF0000', fontSize: 14, marginVertical: 2 },
  periodText: { color: '#ccc', fontSize: 12, marginBottom: 5 },
  descText: { color: '#eee', fontSize: 13, lineHeight: 18 },
  cardTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  cardInfo: { color: '#ccc', fontSize: 14, marginVertical: 4 },
  cardPeriod: { color: '#aaa', fontSize: 12 },
  cardStatus: { color: '#FF0000', fontSize: 11, fontWeight: 'bold', marginTop: 4 },
  skillsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  skillBadge: { paddingHorizontal: 10, paddingVertical: 6, borderWidth: 1, borderColor: '#FF0000' },
  skillText: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  softSkillBadge: { paddingHorizontal: 10, paddingVertical: 5, borderWidth: 1, borderColor: '#333', borderRadius: 15 },
  softSkillText: { color: '#ccc', fontSize: 11 },
  table: { marginTop: 5 },
  tableRow: { flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: '#333', paddingVertical: 8 },
  tableCell: { fontSize: 13 },
  tableCellLabel: { color: '#fff', width: '40%' },
  tableCellLevel: { color: '#FF0000', fontWeight: 'bold', width: '60%', textAlign: 'right' },
  button: { backgroundColor: '#FF0000', padding: 16, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#000', fontWeight: 'bold', fontSize: 14 },
});

export default App;