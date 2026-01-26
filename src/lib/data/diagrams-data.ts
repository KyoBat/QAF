/**
 * Diagrams Data - Données structurées pour les diagrammes visuels
 * 
 * Chaque diagramme est référencé par une clé unique utilisable dans les leçons
 * via le marker <!-- DIAGRAM:key -->
 */

import type { TreeBranch } from '@/components/diagrams/TreeDiagram'
import type { ComparisonColumn } from '@/components/diagrams/ComparisonTable'
import type { FlowStep } from '@/components/diagrams/FlowChart'
import type { RulingType, RulingItem } from '@/components/diagrams/RulingCard'
import type { SummaryRow } from '@/components/diagrams/SummaryTable'

// ============================================================
// Types
// ============================================================

export interface TreeDiagramData {
  type: 'tree'
  title: { ar: string; fr: string; en: string }
  root?: { ar: string; fr: string; en: string }
  branches: {
    label: { ar: string; fr: string; en: string }
    description?: { ar: string; fr: string; en: string }
    examples?: { ar: string; fr: string; en: string }[]
    variant?: 'default' | 'success' | 'warning' | 'danger'
    children?: TreeDiagramData['branches']
  }[]
}

export interface ComparisonTableData {
  type: 'comparison'
  title?: { ar: string; fr: string; en: string }
  columns: [
    {
      title: { ar: string; fr: string; en: string }
      subtitle?: { ar: string; fr: string; en: string }
      variant: 'positive' | 'negative' | 'neutral'
      items: { ar: string; fr: string; en: string }[]
    },
    {
      title: { ar: string; fr: string; en: string }
      subtitle?: { ar: string; fr: string; en: string }
      variant: 'positive' | 'negative' | 'neutral'
      items: { ar: string; fr: string; en: string }[]
    }
  ]
}

export interface FlowChartData {
  type: 'flow'
  title?: { ar: string; fr: string; en: string }
  layout?: 'vertical' | 'horizontal'
  steps: {
    title: { ar: string; fr: string; en: string }
    description?: { ar: string; fr: string; en: string }
    variant?: 'default' | 'success' | 'warning' | 'current' | 'pending'
  }[]
}

export interface RulingCardData {
  type: 'ruling'
  title: { ar: string; fr: string; en: string }
  rulingType: RulingType
  numbered?: boolean
  items: {
    text: { ar: string; fr: string; en: string }
    detail?: { ar: string; fr: string; en: string }
    subitems?: { ar: string; fr: string; en: string }[]
  }[]
  footer?: { ar: string; fr: string; en: string }
}

export interface SummaryTableData {
  type: 'summary'
  title?: { ar: string; fr: string; en: string }
  rows: {
    item: { ar: string; fr: string; en: string }
    ruling: SummaryRow['ruling']
    notes?: { ar: string; fr: string; en: string }
  }[]
}

export type DiagramData = 
  | TreeDiagramData 
  | ComparisonTableData 
  | FlowChartData 
  | RulingCardData
  | SummaryTableData

// ============================================================
// Diagrams Registry
// ============================================================

const diagramsRegistry: Record<string, DiagramData> = {
  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - IJARA (Définition)
  // ─────────────────────────────────────────────────────────
  'ijarah-definition': {
    type: 'ruling',
    title: {
      ar: '📋 عناصر تعريف الإجارة',
      fr: '📋 Éléments de définition de l\'Ijara',
      en: '📋 Elements of Ijara Definition'
    },
    rulingType: 'conditions',
    numbered: false,
    items: [
      {
        text: { ar: 'عقد على منفعة', fr: 'Contrat sur un usufruit', en: 'Contract on a benefit' },
        subitems: [
          { ar: '✓ مباحة — لا إجارة على محرم', fr: '✓ Licite — pas de location pour l\'illicite', en: '✓ Permissible — no lease for forbidden' },
          { ar: '✓ معلومة — بالوصف أو المشاهدة', fr: '✓ Connue — par description ou observation', en: '✓ Known — by description or observation' },
          { ar: '✓ من عين معلومة — كهذه الشقة أو السيارة', fr: '✓ D\'un bien connu — comme cet appartement', en: '✓ From a known item — like this apartment' },
          { ar: '✓ مدة معلومة — سنة، شهر، يوم', fr: '✓ Durée connue — année, mois, jour', en: '✓ Known duration — year, month, day' },
          { ar: '✓ بعوض معلوم — 1000 ريال مثلاً', fr: '✓ Pour une contrepartie connue — 1000 riyals par ex.', en: '✓ For known compensation — 1000 riyals e.g.' }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - IJARA (Piliers du contrat)
  // ─────────────────────────────────────────────────────────
  'ijarah-pillars': {
    type: 'tree',
    title: {
      ar: '🏛️ أركان عقد الإجارة الأربعة',
      fr: '🏛️ Les quatre piliers du contrat de location',
      en: '🏛️ The Four Pillars of the Lease Contract'
    },
    branches: [
      {
        label: { ar: 'المتعاقدان', fr: 'Les contractants', en: 'The Contracting Parties' },
        description: { ar: 'المؤجر والمستأجر', fr: 'Bailleur et locataire', en: 'Lessor and lessee' },
        variant: 'default'
      },
      {
        label: { ar: 'الصيغة', fr: 'La formule', en: 'The Formula' },
        description: { ar: 'إيجاب وقبول', fr: 'Offre et acceptation', en: 'Offer and acceptance' },
        variant: 'default'
      },
      {
        label: { ar: 'المنفعة', fr: 'L\'usufruit', en: 'The Benefit' },
        description: { ar: 'معلومة ومباحة', fr: 'Connu et licite', en: 'Known and permissible' },
        variant: 'default'
      },
      {
        label: { ar: 'الأجرة', fr: 'Le loyer', en: 'The Rent' },
        description: { ar: 'معلومة ومقبوضة', fr: 'Connu et perçu', en: 'Known and received' },
        variant: 'default'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - IJARA (Types de location)
  // ─────────────────────────────────────────────────────────
  'ijara-types': {
    type: 'tree',
    title: {
      ar: 'أنواع عقود الإجارة',
      fr: 'Types de contrats de location',
      en: 'Types of Lease Contracts'
    },
    root: {
      ar: 'الإجارة',
      fr: 'La Location (Ijara)',
      en: 'Lease (Ijara)'
    },
    branches: [
      {
        label: { ar: 'إجارة الأعيان', fr: 'Location de biens', en: 'Property Lease' },
        description: { ar: 'تأجير شيء معين بذاته', fr: 'Location d\'un bien spécifique', en: 'Leasing a specific item' },
        examples: [
          { ar: 'شقة معينة', fr: 'Appartement spécifique', en: 'Specific apartment' },
          { ar: 'سيارة بعينها', fr: 'Voiture précise', en: 'Specific car' },
          { ar: 'أرض محددة', fr: 'Terrain défini', en: 'Defined land' }
        ]
      },
      {
        label: { ar: 'إجارة الذمة', fr: 'Location sur engagement', en: 'Liability Lease' },
        description: { ar: 'تأجير شيء موصوف في الذمة', fr: 'Location d\'un bien décrit en responsabilité', en: 'Leasing something described as an obligation' },
        examples: [
          { ar: 'سيارة موصوفة', fr: 'Voiture décrite', en: 'Described car' },
          { ar: 'غير محددة', fr: 'Non spécifiée', en: 'Unspecified' },
          { ar: 'في الذمة', fr: 'En engagement', en: 'As liability' }
        ]
      },
      {
        label: { ar: 'إجارة العمل', fr: 'Location de services', en: 'Service Lease' },
        description: { ar: 'استئجار عمل شخص', fr: 'Embauche du travail d\'une personne', en: 'Hiring someone\'s work' },
        examples: [
          { ar: 'خدمات الأشخاص', fr: 'Services personnels', en: 'Personal services' },
          { ar: 'عمل محدد', fr: 'Travail défini', en: 'Defined work' },
          { ar: 'أو مدة معينة', fr: 'Ou durée déterminée', en: 'Or fixed duration' }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - Conditions de la prestation louée
  // ─────────────────────────────────────────────────────────
  'benefit-conditions': {
    type: 'ruling',
    title: {
      ar: '✅ شروط المنفعة المستأجر عليها',
      fr: '✅ Conditions de la prestation louée',
      en: '✅ Conditions of the Leased Benefit'
    },
    rulingType: 'conditions',
    numbered: true,
    items: [
      {
        text: { ar: 'أن تكون معلومة', fr: 'Qu\'elle soit connue', en: 'It must be known' },
        subitems: [
          { ar: 'بالوصف: "شقة غرفتين مطبخ حمام"', fr: 'Par description: "appartement 2 pièces cuisine sdb"', en: 'By description: "2-room apartment kitchen bathroom"' },
          { ar: 'بالمشاهدة: رؤية العين المستأجرة', fr: 'Par observation: voir le bien loué', en: 'By observation: seeing the leased item' }
        ]
      },
      {
        text: { ar: 'أن تكون مباحة', fr: 'Qu\'elle soit licite', en: 'It must be permissible' },
        subitems: [
          { ar: '✅ سكن، نقل، عمل مشروع', fr: '✅ Logement, transport, travail licite', en: '✅ Housing, transport, lawful work' },
          { ar: '❌ محل لبيع الخمر، صالة قمار', fr: '❌ Local pour vendre alcool, salle de jeu', en: '❌ Shop for selling alcohol, gambling hall' }
        ]
      },
      {
        text: { ar: 'أن تكون مقدوراً على تسليمها', fr: 'Qu\'elle soit livrable', en: 'It must be deliverable' },
        subitems: [
          { ar: '❌ إيجار سيارة مسروقة', fr: '❌ Location voiture volée', en: '❌ Renting a stolen car' },
          { ar: '❌ إيجار شقة مشغولة بمستأجر آخر', fr: '❌ Location appart occupé par autre locataire', en: '❌ Renting apartment occupied by another tenant' }
        ]
      },
      {
        text: { ar: 'أن تكون للمستأجر لا للمؤجر', fr: 'Qu\'elle soit pour le locataire pas le bailleur', en: 'It must be for the lessee not the lessor' },
        subitems: [
          { ar: 'المنفعة تنتقل للمستأجر', fr: 'L\'usufruit revient au locataire', en: 'The benefit transfers to the lessee' },
          { ar: 'المؤجر يستحق الأجرة فقط', fr: 'Le bailleur ne reçoit que le loyer', en: 'The lessor only receives rent' }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - أقسام الأجير (Types d'employés)
  // ─────────────────────────────────────────────────────────
  'worker-types': {
    type: 'comparison',
    title: {
      ar: '👷 أقسام الأجير في إجارة العمل',
      fr: '👷 Types d\'employés dans le contrat de travail',
      en: '👷 Types of Workers in Work Contracts'
    },
    columns: [
      {
        title: { ar: 'الأجير الخاص', fr: 'Employé privé', en: 'Private Employee' },
        variant: 'neutral',
        items: [
          { ar: 'يعمل لمستأجر واحد', fr: 'Travaille pour un seul employeur', en: 'Works for one employer' },
          { ar: 'مدة معينة (شهر/سنة)', fr: 'Durée déterminée (mois/année)', en: 'Fixed duration (month/year)' },
          { ar: 'مستحق الأجر بالمدة', fr: 'Salaire basé sur la durée', en: 'Salary based on duration' },
          { ar: 'مثال: الموظف الشهري، السائق الخاص', fr: 'Ex: Employé mensuel, chauffeur privé', en: 'Ex: Monthly employee, private driver' }
        ]
      },
      {
        title: { ar: 'الأجير المشترك', fr: 'Employé partagé', en: 'Shared Employee' },
        variant: 'neutral',
        items: [
          { ar: 'يعمل لأكثر من شخص', fr: 'Travaille pour plusieurs personnes', en: 'Works for multiple people' },
          { ar: 'عمل معين لا مدة معينة', fr: 'Travail défini, pas de durée fixe', en: 'Defined work, no fixed duration' },
          { ar: 'مستحق الأجر بإنجاز العمل', fr: 'Salaire à l\'achèvement du travail', en: 'Salary upon work completion' },
          { ar: 'مثال: الخياط، المحامي، الطبيب', fr: 'Ex: Tailleur, avocat, médecin', en: 'Ex: Tailor, lawyer, doctor' }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - ضمان المستأجر (Responsabilité du locataire)
  // ─────────────────────────────────────────────────────────
  'tenant-liability': {
    type: 'comparison',
    title: {
      ar: '⚖️ متى يضمن المستأجر؟',
      fr: '⚖️ Quand le locataire est-il responsable?',
      en: '⚖️ When is the Tenant Liable?'
    },
    columns: [
      {
        title: { ar: 'التعدي', fr: 'Transgression', en: 'Transgression' },
        subtitle: { ar: 'يضمن ✓', fr: 'Responsable ✓', en: 'Liable ✓' },
        variant: 'negative',
        items: [
          { ar: 'استعمال العين في غير ما أُذن له', fr: 'Utiliser le bien autrement que prévu', en: 'Using the property other than agreed' },
          { ar: 'استأجر للسكن فجعلها مخزناً', fr: 'Louer pour habiter, utiliser comme entrepôt', en: 'Rent to live, use as warehouse' },
          { ar: 'استأجر سيارة للمدينة فسافر بها', fr: 'Louer une voiture en ville, voyager', en: 'Rent car for city, travel far' }
        ]
      },
      {
        title: { ar: 'التفريط', fr: 'Négligence', en: 'Negligence' },
        subtitle: { ar: 'يضمن ✓', fr: 'Responsable ✓', en: 'Liable ✓' },
        variant: 'negative',
        items: [
          { ar: 'ترك الحفظ الواجب للعين', fr: 'Ne pas préserver le bien correctement', en: 'Failing to preserve the property' },
          { ar: 'ترك الباب مفتوحاً فسُرقت', fr: 'Laisser la porte ouverte, vol', en: 'Leave door open, theft' },
          { ar: 'إهمال السيارة في الشمس', fr: 'Négliger la voiture au soleil', en: 'Neglecting car in sun' }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - أسباب انتهاء الإجارة
  // ─────────────────────────────────────────────────────────
  'lease-termination': {
    type: 'ruling',
    title: {
      ar: '⏰ أسباب انتهاء عقد الإجارة',
      fr: '⏰ Causes de fin du contrat de location',
      en: '⏰ Causes of Lease Termination'
    },
    rulingType: 'info',
    numbered: true,
    items: [
      {
        text: { ar: 'انتهاء المدة المتفق عليها', fr: 'Fin de la durée convenue', en: 'End of agreed duration' },
        subitems: [
          { ar: 'ينتهي العقد تلقائياً', fr: 'Le contrat prend fin automatiquement', en: 'Contract ends automatically' },
          { ar: 'يجب رد العين للمؤجر', fr: 'Le bien doit être rendu au bailleur', en: 'Property must be returned to lessor' }
        ]
      },
      {
        text: { ar: 'التفاسخ بين الطرفين', fr: 'Résiliation mutuelle', en: 'Mutual termination' },
        subitems: [
          { ar: 'بالاتفاق المتبادل', fr: 'Par accord mutuel', en: 'By mutual agreement' },
          { ar: 'قبل انتهاء المدة', fr: 'Avant la fin de la durée', en: 'Before end of duration' }
        ]
      },
      {
        text: { ar: 'تلف العين المستأجرة', fr: 'Destruction du bien loué', en: 'Destruction of leased property' },
        subitems: [
          { ar: 'تلف كلي = انفساخ العقد', fr: 'Destruction totale = résiliation', en: 'Total destruction = termination' },
          { ar: 'تلف جزئي = خيار للمستأجر', fr: 'Destruction partielle = choix locataire', en: 'Partial destruction = tenant choice' }
        ]
      },
      {
        text: { ar: 'فوات المنفعة المقصودة', fr: 'Perte du bénéfice prévu', en: 'Loss of intended benefit' },
        subitems: [
          { ar: 'استأجر أرضاً للزراعة فانقطع الماء', fr: 'Louer terre pour agriculture, eau coupée', en: 'Rent land for farming, water cut' },
          { ar: 'استأجر محلاً ففُرض الحظر', fr: 'Louer local, confinement imposé', en: 'Rent shop, lockdown imposed' }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - الإجارة المنتهية بالتمليك
  // ─────────────────────────────────────────────────────────
  'lease-to-own': {
    type: 'comparison',
    title: {
      ar: '⚖️ أقوال العلماء في الإجارة المنتهية بالتمليك',
      fr: '⚖️ Avis des savants sur la location-vente',
      en: '⚖️ Scholars\' Views on Lease-to-Own'
    },
    columns: [
      {
        title: { ar: 'القول الأول: الجواز بشروط', fr: 'Premier avis: Permis sous conditions', en: 'First view: Permissible with conditions' },
        variant: 'positive',
        items: [
          { ar: 'فصل الوعد عن عقد الإجارة', fr: 'Séparer la promesse du contrat de location', en: 'Separate promise from lease contract' },
          { ar: 'التمليك بعقد جديد (هبة أو بيع رمزي)', fr: 'Transfert par nouveau contrat (don ou vente symbolique)', en: 'Transfer by new contract (gift or symbolic sale)' },
          { ar: 'المستأجر لا يتحمل هلاك العين', fr: 'Le locataire ne supporte pas la perte du bien', en: 'Tenant not liable for property loss' }
        ]
      },
      {
        title: { ar: 'القول الثاني: المنع', fr: 'Second avis: Interdit', en: 'Second view: Prohibited' },
        variant: 'negative',
        items: [
          { ar: 'اجتماع عقدين في عقد', fr: 'Deux contrats en un', en: 'Two contracts in one' },
          { ar: 'جهالة المآل', fr: 'Issue inconnue', en: 'Unknown outcome' },
          { ar: 'غرر في حقيقة العقد', fr: 'Incertitude sur la nature du contrat', en: 'Uncertainty about contract nature' }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - رسوم التأخير = ربا
  // ─────────────────────────────────────────────────────────
  'late-fees-riba': {
    type: 'ruling',
    title: {
      ar: '⚠️ لماذا رسوم التأخير ربا؟',
      fr: '⚠️ Pourquoi les pénalités de retard sont de l\'usure?',
      en: '⚠️ Why Late Fees are Usury?'
    },
    rulingType: 'prohibitions',
    numbered: false,
    items: [
      { text: { ar: 'الإيجار المتأخر = دَين في ذمة المستأجر', fr: 'Loyer en retard = dette du locataire', en: 'Late rent = debt on tenant' } },
      { text: { ar: 'الزيادة على الدين مقابل التأخير = ربا النسيئة', fr: 'Augmentation sur dette pour retard = usure', en: 'Increase on debt for delay = usury' } },
      { text: { ar: '"كل قرض جر نفعاً فهو ربا"', fr: '"Tout prêt qui génère un profit est usure"', en: '"Every loan that brings benefit is usury"' } }
    ],
    footer: { ar: '❌ محرم شرعاً', fr: '❌ Interdit en Islam', en: '❌ Prohibited in Islam' }
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - ملخص الإجارة
  // ─────────────────────────────────────────────────────────
  'ijarah-summary': {
    type: 'summary',
    title: {
      ar: '🎯 ملخص: أحكام الإجارة',
      fr: '🎯 Résumé: Règles de la location',
      en: '🎯 Summary: Leasing Rules'
    },
    rows: [
      { item: { ar: 'الإجارة = عقد على منفعة بعوض', fr: 'Location = contrat sur usufruit contre paiement', en: 'Lease = contract on benefit for payment' }, ruling: 'halal' },
      { item: { ar: 'الأركان الأربعة: المتعاقدان، الصيغة، المنفعة، الأجرة', fr: '4 piliers: Parties, formule, usufruit, loyer', en: '4 pillars: Parties, formula, benefit, rent' }, ruling: 'halal' },
      { item: { ar: 'إجارة أعيان + إجارة ذمة + إجارة عمل', fr: 'Location de biens + sur engagement + de services', en: 'Property lease + liability lease + work lease' }, ruling: 'halal' },
      { item: { ar: 'لا ضمان إلا بتعدٍّ أو تفريط', fr: 'Pas de responsabilité sauf transgression/négligence', en: 'No liability except for transgression/negligence' }, ruling: 'halal' },
      { item: { ar: 'الإجارة المنتهية بالتمليك: تجوز بشروط', fr: 'Location-vente: permise sous conditions', en: 'Lease-to-own: permissible with conditions' }, ruling: 'halal' },
      { item: { ar: 'رسوم التأخير على الإيجار', fr: 'Pénalités de retard sur le loyer', en: 'Late fees on rent' }, ruling: 'haram' }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - MUDARABAH
  // ─────────────────────────────────────────────────────────
  'mudarabah-formula': {
    type: 'flow',
    title: {
      ar: '💰 معادلة المضاربة',
      fr: '💰 Formule du Moudaraba',
      en: '💰 Mudarabah Formula'
    },
    layout: 'horizontal',
    steps: [
      { title: { ar: 'صاحب المال (رب المال)', fr: 'Propriétaire du capital', en: 'Capital Owner' }, description: { ar: 'يقدم المال والخبرة في التمويل', fr: 'Fournit le capital et l\'expertise financière', en: 'Provides capital and financial expertise' } },
      { title: { ar: 'العامل (المضارب)', fr: 'Travailleur (Moudarib)', en: 'Worker (Mudarib)' }, description: { ar: 'يقدم العمل والجهد في التجارة', fr: 'Fournit le travail et l\'effort commercial', en: 'Provides work and trading effort' } },
      { title: { ar: 'الربح', fr: 'Profit', en: 'Profit' }, description: { ar: 'يُقسم بينهما بنسب متفق عليها', fr: 'Partagé selon les ratios convenus', en: 'Shared according to agreed ratios' }, variant: 'success' }
    ]
  },

  'mudarabah-pillars': {
    type: 'tree',
    title: {
      ar: '🏛️ الأركان الأربعة للمضاربة',
      fr: '🏛️ Les quatre piliers du Moudaraba',
      en: '🏛️ The Four Pillars of Mudarabah'
    },
    branches: [
      { label: { ar: 'رأس المال', fr: 'Capital', en: 'Capital' }, description: { ar: 'نقد معلوم مسلَّم', fr: 'Argent connu et remis', en: 'Known cash delivered' } },
      { label: { ar: 'العمل', fr: 'Travail', en: 'Work' }, description: { ar: 'تجارة مباحة مستقلة', fr: 'Commerce licite indépendant', en: 'Independent lawful trade' } },
      { label: { ar: 'الربح', fr: 'Profit', en: 'Profit' }, description: { ar: 'نسبة معلومة مشتركة', fr: 'Ratio connu partagé', en: 'Known shared ratio' } },
      { label: { ar: 'الصيغة', fr: 'Formule', en: 'Formula' }, description: { ar: 'إيجاب وقبول', fr: 'Offre et acceptation', en: 'Offer and acceptance' } }
    ]
  },

  'mudarabah-profit-conditions': {
    type: 'ruling',
    title: {
      ar: '✅ شروط الربح',
      fr: '✅ Conditions du profit',
      en: '✅ Profit Conditions'
    },
    rulingType: 'conditions',
    numbered: true,
    items: [
      {
        text: { ar: 'أن يكون معلوماً بالنسبة', fr: 'Qu\'il soit connu en pourcentage', en: 'It must be known by percentage' },
        subitems: [
          { ar: 'النصف ✅  الثلث ✅  الربع ✅', fr: 'Moitié ✅  Tiers ✅  Quart ✅', en: 'Half ✅  Third ✅  Quarter ✅' },
          { ar: 'مبلغ مقطوع ❌ (مثل: لك 10,000 ريال)', fr: 'Montant fixe ❌ (ex: 10,000 riyals pour toi)', en: 'Fixed amount ❌ (e.g.: 10,000 riyals for you)' }
        ]
      },
      {
        text: { ar: 'أن يكون مشتركاً', fr: 'Qu\'il soit partagé', en: 'It must be shared' },
        subitems: [
          { ar: 'لا يختص به أحدهما دون الآخر', fr: 'Aucune partie ne peut le monopoliser', en: 'Neither party can monopolize it' },
          { ar: '"لي الربح كله" ❌', fr: '"Tout le profit pour moi" ❌', en: '"All profit for me" ❌' }
        ]
      },
      {
        text: { ar: 'أن يكون من الربح لا من رأس المال', fr: 'Qu\'il provienne du profit pas du capital', en: 'It must be from profit not capital' },
        subitems: [
          { ar: 'نقسم الزيادة على رأس المال', fr: 'On divise le surplus sur le capital', en: 'We divide the increase over capital' },
          { ar: 'رأس المال يُرد أولاً', fr: 'Le capital est rendu d\'abord', en: 'Capital is returned first' }
        ]
      }
    ]
  },

  'mudarabah-types': {
    type: 'comparison',
    title: {
      ar: '📊 أنواع المضاربة',
      fr: '📊 Types de Moudaraba',
      en: '📊 Types of Mudarabah'
    },
    columns: [
      {
        title: { ar: 'المضاربة المطلقة', fr: 'Moudaraba absolu', en: 'Unrestricted Mudarabah' },
        variant: 'positive',
        items: [
          { ar: 'بدون شروط', fr: 'Sans conditions', en: 'Without conditions' },
          { ar: 'أي تجارة', fr: 'Tout commerce', en: 'Any trade' },
          { ar: 'أي مكان', fr: 'Tout endroit', en: 'Any place' },
          { ar: 'أي زمان', fr: 'Tout moment', en: 'Any time' }
        ]
      },
      {
        title: { ar: 'المضاربة المقيدة', fr: 'Moudaraba restreint', en: 'Restricted Mudarabah' },
        variant: 'neutral',
        items: [
          { ar: 'بشروط محددة', fr: 'Avec conditions précises', en: 'With specific conditions' },
          { ar: 'تجارة معينة', fr: 'Commerce spécifique', en: 'Specific trade' },
          { ar: 'مكان محدد', fr: 'Endroit défini', en: 'Defined place' },
          { ar: 'زمان محدد', fr: 'Moment défini', en: 'Defined time' }
        ]
      }
    ]
  },

  'mudarabah-profit-loss': {
    type: 'comparison',
    title: {
      ar: '⚖️ توزيع الربح والخسارة',
      fr: '⚖️ Distribution des profits et pertes',
      en: '⚖️ Profit and Loss Distribution'
    },
    columns: [
      {
        title: { ar: 'الربح', fr: 'Profit', en: 'Profit' },
        subtitle: { ar: 'يُقسم حسب الاتفاق', fr: 'Partagé selon l\'accord', en: 'Shared per agreement' },
        variant: 'positive',
        items: [
          { ar: 'مثال: 60% لرب المال', fr: 'Ex: 60% au propriétaire du capital', en: 'Ex: 60% to capital owner' },
          { ar: '40% للعامل', fr: '40% au travailleur', en: '40% to worker' }
        ]
      },
      {
        title: { ar: 'الخسارة', fr: 'Perte', en: 'Loss' },
        subtitle: { ar: 'على رأس المال فقط', fr: 'Sur le capital uniquement', en: 'On capital only' },
        variant: 'negative',
        items: [
          { ar: 'العامل: أضاع جهده فقط', fr: 'Travailleur: perd son effort seulement', en: 'Worker: loses effort only' },
          { ar: 'لا يضمن إلا بتعدٍّ أو تفريط', fr: 'Pas de garantie sauf transgression', en: 'No liability except for transgression' }
        ]
      }
    ]
  },

  'mudarabah-termination': {
    type: 'ruling',
    title: {
      ar: '⏰ أسباب انتهاء المضاربة',
      fr: '⏰ Causes de fin du Moudaraba',
      en: '⏰ Causes of Mudarabah Termination'
    },
    rulingType: 'info',
    numbered: true,
    items: [
      {
        text: { ar: 'الفسخ من أحد الطرفين', fr: 'Résiliation par une partie', en: 'Termination by one party' },
        subitems: [
          { ar: 'المضاربة عقد جائز يجوز فسخه', fr: 'Le Moudaraba est un contrat résiliable', en: 'Mudarabah is a terminable contract' },
          { ar: 'يجب تصفية الشركة عند الفسخ', fr: 'La société doit être liquidée', en: 'Company must be liquidated' }
        ]
      },
      { text: { ar: 'موت أحد الطرفين', fr: 'Décès d\'une partie', en: 'Death of one party' } },
      { text: { ar: 'جنون أحد الطرفين', fr: 'Folie d\'une partie', en: 'Insanity of one party' } },
      {
        text: { ar: 'تلف رأس المال', fr: 'Destruction du capital', en: 'Destruction of capital' },
        subitems: [
          { ar: 'قبل التصرف: انتهت المضاربة', fr: 'Avant utilisation: fin du Moudaraba', en: 'Before use: Mudarabah ends' },
          { ar: 'بعد التصرف: استمرت بما بقي', fr: 'Après utilisation: continue avec le reste', en: 'After use: continues with remainder' }
        ]
      }
    ]
  },

  'mudarabah-vs-riba': {
    type: 'comparison',
    title: {
      ar: '⚖️ المضاربة الشرعية VS القرض الربوي',
      fr: '⚖️ Moudaraba licite VS Prêt usuraire',
      en: '⚖️ Lawful Mudarabah VS Usurious Loan'
    },
    columns: [
      {
        title: { ar: 'المضاربة الشرعية', fr: 'Moudaraba licite', en: 'Lawful Mudarabah' },
        subtitle: { ar: '✅ حلال', fr: '✅ Licite', en: '✅ Halal' },
        variant: 'positive',
        items: [
          { ar: 'المال للتجارة', fr: 'Argent pour le commerce', en: 'Money for trade' },
          { ar: 'الربح غير مضمون', fr: 'Profit non garanti', en: 'Profit not guaranteed' },
          { ar: 'الخسارة على المال', fr: 'Perte sur le capital', en: 'Loss on capital' },
          { ar: 'شراكة حقيقية', fr: 'Vrai partenariat', en: 'Real partnership' },
          { ar: 'الربح بالنسبة', fr: 'Profit en pourcentage', en: 'Profit by percentage' }
        ]
      },
      {
        title: { ar: 'القرض الربوي', fr: 'Prêt usuraire', en: 'Usurious Loan' },
        subtitle: { ar: '❌ حرام', fr: '❌ Illicite', en: '❌ Haram' },
        variant: 'negative',
        items: [
          { ar: 'القرض للاستهلاك', fr: 'Prêt pour consommation', en: 'Loan for consumption' },
          { ar: 'الفائدة مضمونة', fr: 'Intérêt garanti', en: 'Interest guaranteed' },
          { ar: 'المقترض يضمن كل شيء', fr: 'L\'emprunteur garantit tout', en: 'Borrower guarantees all' },
          { ar: 'علاقة دائن ومدين', fr: 'Relation créancier-débiteur', en: 'Creditor-debtor relation' },
          { ar: 'الفائدة بمبلغ ثابت', fr: 'Intérêt fixe', en: 'Fixed interest' }
        ]
      }
    ]
  },

  'mudarabah-fund-structure': {
    type: 'flow',
    title: {
      ar: '🏦 هيكل الصندوق الاستثماري الإسلامي',
      fr: '🏦 Structure du fonds d\'investissement islamique',
      en: '🏦 Islamic Investment Fund Structure'
    },
    layout: 'horizontal',
    steps: [
      { title: { ar: 'المستثمرون', fr: 'Investisseurs', en: 'Investors' }, description: { ar: 'أرباب المال يقدمون الأموال', fr: 'Propriétaires du capital fournissent les fonds', en: 'Capital owners provide funds' } },
      { title: { ar: 'الصندوق', fr: 'Fonds', en: 'Fund' }, description: { ar: 'المضارب يستثمر في المشاريع', fr: 'Le Moudarib investit dans les projets', en: 'Mudarib invests in projects' } },
      { title: { ar: 'التوزيع', fr: 'Distribution', en: 'Distribution' }, description: { ar: 'أرباح أو خسائر حسب النسب المتفق عليها', fr: 'Profits ou pertes selon les ratios convenus', en: 'Profits or losses per agreed ratios' }, variant: 'success' }
    ]
  },

  'mudarabah-deposit-difference': {
    type: 'ruling',
    title: {
      ar: 'الفرق الجوهري بين الوديعة الإسلامية والربوية',
      fr: 'Différence fondamentale entre dépôt islamique et usuraire',
      en: 'Fundamental Difference Between Islamic and Usurious Deposit'
    },
    rulingType: 'info',
    numbered: false,
    items: [
      {
        text: { ar: 'البنك الإسلامي ✅', fr: 'Banque islamique ✅', en: 'Islamic bank ✅' },
        subitems: [
          { ar: '5% متوقعة وليست مضمونة', fr: '5% attendu et non garanti', en: '5% expected not guaranteed' },
          { ar: 'قد تزيد أو تنقص أو تخسر', fr: 'Peut augmenter, diminuer ou perdre', en: 'May increase, decrease or lose' },
          { ar: 'العلاقة: شراكة (مضاربة)', fr: 'Relation: partenariat (Moudaraba)', en: 'Relation: partnership (Mudarabah)' }
        ]
      },
      {
        text: { ar: 'البنك الربوي ❌', fr: 'Banque usuraire ❌', en: 'Usurious bank ❌' },
        subitems: [
          { ar: '5% مضمونة مهما حدث', fr: '5% garanti quoi qu\'il arrive', en: '5% guaranteed no matter what' },
          { ar: 'لا تتغير ولا تخسر', fr: 'Ne change pas et ne perd pas', en: 'Doesn\'t change or lose' },
          { ar: 'العلاقة: قرض بفائدة', fr: 'Relation: prêt avec intérêt', en: 'Relation: loan with interest' }
        ]
      }
    ],
    footer: { ar: '⚠️ إن كان البنك "الإسلامي" يضمن العائد = ربا مقنّع!', fr: '⚠️ Si la banque "islamique" garantit le rendement = usure déguisée!', en: '⚠️ If "Islamic" bank guarantees return = disguised usury!' }
  },

  'mudarabah-summary': {
    type: 'summary',
    title: {
      ar: '🎯 ملخص: أحكام المضاربة',
      fr: '🎯 Résumé: Règles du Moudaraba',
      en: '🎯 Summary: Mudarabah Rules'
    },
    rows: [
      { item: { ar: 'المضاربة = شراكة بين المال والعمل', fr: 'Moudaraba = partenariat capital et travail', en: 'Mudarabah = partnership of capital and work' }, ruling: 'halal' },
      { item: { ar: 'رأس المال: نقد معلوم مسلَّم للعامل', fr: 'Capital: argent connu remis au travailleur', en: 'Capital: known cash delivered to worker' }, ruling: 'halal' },
      { item: { ar: 'الربح: يُقسم بنسب معلومة لا بمبالغ مقطوعة', fr: 'Profit: divisé par ratios pas par montants fixes', en: 'Profit: divided by ratios not fixed amounts' }, ruling: 'halal' },
      { item: { ar: 'الخسارة: على رأس المال والعامل يخسر جهده', fr: 'Perte: sur le capital, travailleur perd son effort', en: 'Loss: on capital, worker loses effort' }, ruling: 'halal' },
      { item: { ar: 'الضمان: العامل أمين لا يضمن إلا بتعدٍّ', fr: 'Garantie: travailleur fiduciaire sauf transgression', en: 'Guarantee: worker trustee except for transgression' }, ruling: 'halal' },
      { item: { ar: 'العائد الثابت المضمون', fr: 'Rendement fixe garanti', en: 'Guaranteed fixed return' }, ruling: 'haram', notes: { ar: '= ربا!', fr: '= usure!', en: '= usury!' } }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - MUSHARAKAH (Partnerships)
  // ─────────────────────────────────────────────────────────
  'sharikah-definition': {
    type: 'comparison',
    title: {
      ar: 'تعريف الشركة',
      fr: 'Définition de la société',
      en: 'Partnership Definition'
    },
    columns: [
      {
        title: { ar: 'شركة الاستحقاق', fr: 'Société de propriété', en: 'Ownership Partnership' },
        variant: 'neutral',
        items: [
          { ar: 'أن يملك اثنان فأكثر شيئاً واحداً', fr: 'Deux personnes ou plus possèdent une chose', en: 'Two or more own one thing' },
          { ar: 'مثال: ورثة يرثون بيتاً واحداً', fr: 'Ex: héritiers d\'une maison', en: 'Ex: heirs of one house' }
        ]
      },
      {
        title: { ar: 'شركة التصرف', fr: 'Société de gestion', en: 'Management Partnership' },
        variant: 'positive',
        items: [
          { ar: 'أن يتعاقد اثنان فأكثر على التجارة معاً', fr: 'Deux personnes ou plus s\'associent pour le commerce', en: 'Two or more contract to trade together' },
          { ar: 'مثال: شريكان في متجر أو مشروع', fr: 'Ex: partenaires dans un magasin', en: 'Ex: partners in a store' }
        ]
      }
    ]
  },

  'sharikah-blessing': {
    type: 'flow',
    title: {
      ar: 'الله ثالث الشريكين',
      fr: 'Allah est le troisième des deux associés',
      en: 'Allah is the Third of Two Partners'
    },
    layout: 'vertical',
    steps: [
      { title: { ar: 'ما داما صادقين أمينين', fr: 'Tant qu\'ils sont honnêtes et fidèles', en: 'As long as they are honest and faithful' }, description: { ar: 'شريك ◄── أمانة ──► شريك', fr: 'Partenaire ◄── fidélité ──► Partenaire', en: 'Partner ◄── trust ──► Partner' }, variant: 'success' },
      { title: { ar: 'بقيا أمينين', fr: 'Restent fidèles', en: 'Remain faithful' }, description: { ar: 'دام التوفيق والنماء والبركة', fr: 'Succès, croissance et bénédiction continuent', en: 'Success, growth and blessing continue' }, variant: 'success' },
      { title: { ar: 'إذا خان أحدهما', fr: 'Si l\'un trahit', en: 'If one betrays' }, description: { ar: 'خرجت البركة من بينهما', fr: 'La bénédiction les quitte', en: 'Blessing leaves them' }, variant: 'warning' }
    ]
  },

  'sharikah-types': {
    type: 'tree',
    title: {
      ar: 'أنواع الشركات',
      fr: 'Types de sociétés',
      en: 'Types of Partnerships'
    },
    branches: [
      { 
        label: { ar: 'شركات العقود', fr: 'Sociétés contractuelles', en: 'Contract Partnerships' },
        description: { ar: 'العنان، المفاوضة، الأبدان، الوجوه، المضاربة', fr: 'Inan, Mufawada, Abdan, Wujuh, Mudaraba', en: 'Inan, Mufawada, Abdan, Wujuh, Mudaraba' }
      },
      { 
        label: { ar: 'شركات الأملاك', fr: 'Sociétés de propriété', en: 'Property Partnerships' },
        description: { ar: 'الميراث، الهبة المشتركة', fr: 'Héritage, don commun', en: 'Inheritance, joint gift' }
      },
      { 
        label: { ar: 'شركات حديثة', fr: 'Sociétés modernes', en: 'Modern Companies' },
        description: { ar: 'المساهمة، المحدودة، المتناقصة', fr: 'Par actions, SARL, décroissante', en: 'Joint stock, LLC, diminishing' }
      }
    ]
  },

  'sharikah-inan': {
    type: 'flow',
    title: {
      ar: 'شركة العنان — أم الشركات وأصحها عند الجميع',
      fr: 'Société Inan — La plus valide de toutes',
      en: 'Inan Partnership — The Most Valid of All'
    },
    layout: 'horizontal',
    steps: [
      { title: { ar: 'شريك 1', fr: 'Partenaire 1', en: 'Partner 1' }, description: { ar: 'مال + عمل', fr: 'Capital + travail', en: 'Capital + work' } },
      { title: { ar: 'شريك 2', fr: 'Partenaire 2', en: 'Partner 2' }, description: { ar: 'مال + عمل', fr: 'Capital + travail', en: 'Capital + work' } },
      { title: { ar: 'الربح', fr: 'Profit', en: 'Profit' }, description: { ar: 'على ما اشترطا، والخسارة على قدر المال', fr: 'Selon accord, perte au prorata du capital', en: 'Per agreement, loss per capital ratio' }, variant: 'success' }
    ]
  },

  'sharikah-mufawada': {
    type: 'comparison',
    title: {
      ar: 'شركة المفاوضة — المساواة التامة في كل شيء',
      fr: 'Société Mufawada — Égalité totale en tout',
      en: 'Mufawada Partnership — Total Equality in Everything'
    },
    columns: [
      {
        title: { ar: 'شريك 1', fr: 'Partenaire 1', en: 'Partner 1' },
        variant: 'neutral',
        items: [
          { ar: 'رأس المال =', fr: 'Capital =', en: 'Capital =' },
          { ar: 'العمل =', fr: 'Travail =', en: 'Work =' },
          { ar: 'الربح =', fr: 'Profit =', en: 'Profit =' },
          { ar: 'الخسارة =', fr: 'Perte =', en: 'Loss =' },
          { ar: 'الكفالة =', fr: 'Garantie =', en: 'Guarantee =' }
        ]
      },
      {
        title: { ar: 'شريك 2', fr: 'Partenaire 2', en: 'Partner 2' },
        variant: 'neutral',
        items: [
          { ar: 'رأس المال', fr: 'Capital', en: 'Capital' },
          { ar: 'العمل', fr: 'Travail', en: 'Work' },
          { ar: 'الربح', fr: 'Profit', en: 'Profit' },
          { ar: 'الخسارة', fr: 'Perte', en: 'Loss' },
          { ar: 'الكفالة', fr: 'Garantie', en: 'Guarantee' }
        ]
      }
    ]
  },

  'sharikah-abdan': {
    type: 'flow',
    title: {
      ar: 'شركة الأبدان — الاشتراك بالعمل دون المال',
      fr: 'Société Abdan — Association par le travail sans capital',
      en: 'Abdan Partnership — Work Partnership Without Capital'
    },
    layout: 'horizontal',
    steps: [
      { title: { ar: 'شريك 1', fr: 'Partenaire 1', en: 'Partner 1' }, description: { ar: 'عمل (لا مال)', fr: 'Travail (pas de capital)', en: 'Work (no capital)' } },
      { title: { ar: 'شريك 2', fr: 'Partenaire 2', en: 'Partner 2' }, description: { ar: 'عمل (لا مال)', fr: 'Travail (pas de capital)', en: 'Work (no capital)' } },
      { title: { ar: 'إنتاج مشترك', fr: 'Production commune', en: 'Joint Production' }, description: { ar: 'يقتسمان الربح', fr: 'Ils partagent le profit', en: 'They share profit' }, variant: 'success' }
    ]
  },

  'sharikah-wujuh': {
    type: 'flow',
    title: {
      ar: 'شركة الوجوه — الاشتراك بالسمعة والجاه',
      fr: 'Société Wujuh — Association par la réputation',
      en: 'Wujuh Partnership — Reputation Partnership'
    },
    layout: 'vertical',
    steps: [
      { title: { ar: 'شريك 1 + شريك 2', fr: 'Partenaire 1 + Partenaire 2', en: 'Partner 1 + Partner 2' }, description: { ar: 'سمعة + جاه (لا مال)', fr: 'Réputation + prestige (pas de capital)', en: 'Reputation + prestige (no capital)' } },
      { title: { ar: 'شراء بالدين', fr: 'Achat à crédit', en: 'Purchase on Credit' }, description: { ar: 'ثقة البائع في سمعتهما', fr: 'Confiance du vendeur en leur réputation', en: 'Seller trusts their reputation' } },
      { title: { ar: 'البيع بربح', fr: 'Vente avec profit', en: 'Sale with Profit' }, description: { ar: 'سداد الدين + اقتسام الربح', fr: 'Remboursement + partage du profit', en: 'Repayment + profit sharing' }, variant: 'success' }
    ]
  },

  'sharikah-musahama': {
    type: 'ruling',
    title: {
      ar: '🏦 الشركة المساهمة',
      fr: '🏦 Société par actions',
      en: '🏦 Joint Stock Company'
    },
    rulingType: 'info',
    numbered: false,
    items: [
      { text: { ar: 'رأس المال: 1,000,000 ريال', fr: 'Capital: 1,000,000 riyals', en: 'Capital: 1,000,000 riyals' } },
      { text: { ar: 'مقسم إلى: 10,000 سهم', fr: 'Divisé en: 10,000 actions', en: 'Divided into: 10,000 shares' } },
      { text: { ar: 'قيمة السهم: 100 ريال', fr: 'Valeur de l\'action: 100 riyals', en: 'Share value: 100 riyals' } },
      { text: { ar: 'الربح يوزع بنسبة الأسهم', fr: 'Profit distribué au prorata des actions', en: 'Profit distributed by share ratio' } },
      { text: { ar: 'المسؤولية محدودة بقيمة الأسهم', fr: 'Responsabilité limitée à la valeur des actions', en: 'Liability limited to share value' } },
      { text: { ar: 'الأسهم قابلة للبيع والتداول', fr: 'Actions négociables', en: 'Shares are tradable' } }
    ]
  },

  'sharikah-musahama-types': {
    type: 'tree',
    title: {
      ar: 'أنواع الشركات المساهمة من حيث الحكم الشرعي',
      fr: 'Types de sociétés par actions selon le jugement religieux',
      en: 'Types of Joint Stock Companies by Religious Ruling'
    },
    branches: [
      { label: { ar: 'مباحة ✅', fr: 'Licite ✅', en: 'Permissible ✅' }, description: { ar: 'أغذية حلال، بناء وتقنية، صناعة نظيفة', fr: 'Alimentation halal, construction, technologie', en: 'Halal food, construction, technology' }, variant: 'success' },
      { label: { ar: 'محرمة ❌', fr: 'Interdite ❌', en: 'Prohibited ❌' }, description: { ar: 'بنوك ربوية، خمور وقمار، تأمين تقليدي', fr: 'Banques usuraires, alcool, jeux de hasard', en: 'Usury banks, alcohol, gambling' }, variant: 'danger' },
      { label: { ar: 'مختلطة ⚠️', fr: 'Mixte ⚠️', en: 'Mixed ⚠️' }, description: { ar: 'نشاط مباح + معاملات ربوية يسيرة', fr: 'Activité licite + transactions usuraires mineures', en: 'Lawful activity + minor usury transactions' }, variant: 'warning' }
    ]
  },

  'sharikah-llc': {
    type: 'ruling',
    title: {
      ar: 'الشركة ذات المسؤولية المحدودة',
      fr: 'Société à responsabilité limitée (SARL)',
      en: 'Limited Liability Company (LLC)'
    },
    rulingType: 'info',
    numbered: false,
    items: [
      { text: { ar: 'الخاصية الأساسية:', fr: 'Caractéristique principale:', en: 'Main feature:' }, subitems: [{ ar: 'مسؤولية الشريك محدودة بقدر حصته', fr: 'Responsabilité limitée à la part du partenaire', en: 'Partner liability limited to their share' }] },
      { text: { ar: 'مثال:', fr: 'Exemple:', en: 'Example:' }, subitems: [{ ar: 'رأس مال الشركة: 500,000 ريال', fr: 'Capital: 500,000 riyals', en: 'Capital: 500,000 riyals' }, { ar: 'حصة أحمد: 100,000 ريال (20%)', fr: 'Part d\'Ahmed: 100,000 (20%)', en: 'Ahmed\'s share: 100,000 (20%)' }, { ar: 'الشركة خسرت وعليها ديون: 800,000', fr: 'Société a perdu, dettes: 800,000', en: 'Company lost, debts: 800,000' }] },
      { text: { ar: 'ماذا يحدث؟', fr: 'Que se passe-t-il?', en: 'What happens?' }, subitems: [{ ar: 'أحمد يخسر حصته فقط (100,000)', fr: 'Ahmed perd sa part seulement (100,000)', en: 'Ahmed loses only his share (100,000)' }, { ar: 'لا يُطالب بأكثر من ذلك من ماله الخاص', fr: 'Il n\'est pas tenu de payer plus de ses biens personnels', en: 'He\'s not liable for more from personal wealth' }] },
      { text: { ar: 'الحكم الشرعي: جائزة ✅', fr: 'Jugement religieux: Permis ✅', en: 'Religious ruling: Permissible ✅' } }
    ]
  },

  'musharakah-mutanaqisa': {
    type: 'ruling',
    title: {
      ar: 'المشاركة المتناقصة — Diminishing Musharakah',
      fr: 'Participation décroissante — Diminishing Musharakah',
      en: 'Diminishing Partnership — Diminishing Musharakah'
    },
    rulingType: 'info',
    numbered: true,
    items: [
      { text: { ar: 'البداية: البنك 80% — العميل 20%', fr: 'Début: Banque 80% — Client 20%', en: 'Start: Bank 80% — Client 20%' } },
      { text: { ar: 'بعد سنة: البنك 60% — العميل 40%', fr: 'Après 1 an: Banque 60% — Client 40%', en: 'After 1 year: Bank 60% — Client 40%' } },
      { text: { ar: 'بعد سنتين: البنك 40% — العميل 60%', fr: 'Après 2 ans: Banque 40% — Client 60%', en: 'After 2 years: Bank 40% — Client 60%' } },
      { text: { ar: 'في النهاية: العميل 100%', fr: 'À la fin: Client 100%', en: 'In the end: Client 100%' } }
    ],
    footer: { ar: 'حصة البنك تنقص وحصة العميل تزداد حتى التملك الكامل', fr: 'La part de la banque diminue jusqu\'à la propriété complète du client', en: 'Bank share decreases until client full ownership' }
  },

  'sharikah-guarantee-rule': {
    type: 'ruling',
    title: {
      ar: 'قاعدة الضمان في الشركات',
      fr: 'Règle de garantie dans les sociétés',
      en: 'Guarantee Rule in Partnerships'
    },
    rulingType: 'info',
    numbered: false,
    items: [
      { text: { ar: 'كل شريك أمين على مال الشركة، لا يضمن إلا بالتعدي أو التفريط', fr: 'Chaque associé est fiduciaire, ne garantit qu\'en cas de transgression', en: 'Each partner is trustee, only liable for transgression or negligence' } },
      { text: { ar: 'الأصل: الشريك أمين = لا ضمان', fr: 'Principe: L\'associé est fiduciaire = pas de garantie', en: 'Principle: Partner is trustee = no liability' } },
      { text: { ar: 'الاستثناء: تعدٍّ أو تفريط = ضمان', fr: 'Exception: Transgression ou négligence = garantie', en: 'Exception: Transgression or negligence = liability' } }
    ]
  },

  'sharikah-profit-loss-rule': {
    type: 'ruling',
    title: {
      ar: 'القاعدة الذهبية في الشركات',
      fr: 'La règle d\'or dans les sociétés',
      en: 'The Golden Rule in Partnerships'
    },
    rulingType: 'info',
    numbered: false,
    items: [
      { text: { ar: '"الربح على ما شرطا، والوضيعة على قدر المال"', fr: '"Le profit selon l\'accord, la perte au prorata du capital"', en: '"Profit per agreement, loss per capital ratio"' } },
      { text: { ar: 'الربح ← حسب الاتفاق (يجوز التفاوت)', fr: 'Profit ← selon l\'accord (peut varier)', en: 'Profit ← per agreement (may vary)' } },
      { text: { ar: 'الخسارة ← على قدر رأس المال (دائماً بالنسبة)', fr: 'Perte ← au prorata du capital (toujours)', en: 'Loss ← per capital ratio (always)' } }
    ],
    footer: { ar: 'مثال: شريكان (60%-40% رأس مال) اتفقا أن الربح نصفين ✅ — الخسارة تكون (60%-40%) دائماً', fr: 'Ex: partenaires (60%-40% capital) conviennent de 50%-50% profit ✅ — perte toujours 60%-40%', en: 'Ex: partners (60%-40% capital) agree 50%-50% profit ✅ — loss always 60%-40%' }
  },

  'sharikah-termination': {
    type: 'tree',
    title: {
      ar: 'أسباب انتهاء الشركة',
      fr: 'Causes de fin de la société',
      en: 'Causes of Partnership Termination'
    },
    branches: [
      { label: { ar: 'بالزمن', fr: 'Par le temps', en: 'By Time' }, description: { ar: 'انتهاء المدة، تحقق الغرض', fr: 'Fin de la durée, réalisation du but', en: 'End of term, goal achieved' } },
      { label: { ar: 'بالمال', fr: 'Par le capital', en: 'By Capital' }, description: { ar: 'هلاك مال الشركة', fr: 'Destruction du capital', en: 'Destruction of company capital' } },
      { label: { ar: 'بالإرادة', fr: 'Par la volonté', en: 'By Will' }, description: { ar: 'الفسخ بالتراضي، انسحاب شريك، موت شريك', fr: 'Résiliation mutuelle, retrait, décès', en: 'Mutual termination, withdrawal, death' } }
    ]
  },

  'sharikah-badr-lessons': {
    type: 'ruling',
    title: {
      ar: 'دروس من شراكة بدر',
      fr: 'Leçons du partenariat de Badr',
      en: 'Lessons from Badr Partnership'
    },
    rulingType: 'info',
    numbered: true,
    items: [
      { text: { ar: 'شركة الأبدان جائزة', fr: 'La société Abdan est permise', en: 'Abdan partnership is permissible' }, subitems: [{ ar: 'الاشتراك بالعمل دون مال صحيح', fr: 'Association par le travail sans capital est valide', en: 'Work partnership without capital is valid' }] },
      { text: { ar: 'الشراكة تكون قبل العمل', fr: 'Le partenariat se fait avant le travail', en: 'Partnership is made before work' }, subitems: [{ ar: 'لا يجوز اقتسام ما أصابه غيرك بعد العمل', fr: 'On ne peut partager ce qu\'un autre a obtenu après le travail', en: 'Cannot share what another obtained after work' }] },
      { text: { ar: 'الإنصاف بين الشركاء', fr: 'Équité entre associés', en: 'Fairness between partners' }, subitems: [{ ar: 'رغم تفاوت النتائج، الاتفاق يُحترم', fr: 'Malgré les résultats inégaux, l\'accord est respecté', en: 'Despite unequal results, agreement is respected' }] },
      { text: { ar: 'الثقة أساس الشراكة', fr: 'La confiance est la base du partenariat', en: 'Trust is the foundation of partnership' }, subitems: [{ ar: 'كانوا أصحاباً قبل أن يكونوا شركاء', fr: 'Ils étaient amis avant d\'être partenaires', en: 'They were friends before being partners' }] }
    ]
  },

  'sharikah-summary': {
    type: 'summary',
    title: {
      ar: '🎯 ملخص أحكام الشركات',
      fr: '🎯 Résumé des règles des sociétés',
      en: '🎯 Summary of Partnership Rules'
    },
    rows: [
      { item: { ar: 'شركة العنان', fr: 'Société Inan', en: 'Inan Partnership' }, ruling: 'halal', notes: { ar: 'إجماع', fr: 'Consensus', en: 'Consensus' } },
      { item: { ar: 'شركة المفاوضة', fr: 'Société Mufawada', en: 'Mufawada Partnership' }, ruling: 'disputed', notes: { ar: 'خلاف', fr: 'Divergence', en: 'Disagreement' } },
      { item: { ar: 'شركة الأبدان', fr: 'Société Abdan', en: 'Abdan Partnership' }, ruling: 'halal', notes: { ar: 'جمهور', fr: 'Majorité', en: 'Majority' } },
      { item: { ar: 'شركة الوجوه', fr: 'Société Wujuh', en: 'Wujuh Partnership' }, ruling: 'disputed', notes: { ar: 'خلاف', fr: 'Divergence', en: 'Disagreement' } },
      { item: { ar: 'المضاربة', fr: 'Moudaraba', en: 'Mudarabah' }, ruling: 'halal', notes: { ar: 'إجماع', fr: 'Consensus', en: 'Consensus' } },
      { item: { ar: 'المساهمة (نشاط مباح)', fr: 'Par actions (activité licite)', en: 'Joint stock (lawful activity)' }, ruling: 'halal' },
      { item: { ar: 'المساهمة (نشاط محرم)', fr: 'Par actions (activité illicite)', en: 'Joint stock (unlawful activity)' }, ruling: 'haram' },
      { item: { ar: 'المشاركة المتناقصة', fr: 'Participation décroissante', en: 'Diminishing Partnership' }, ruling: 'halal', notes: { ar: 'بشروط', fr: 'Sous conditions', en: 'With conditions' } }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - Conditions de vente valide
  // ─────────────────────────────────────────────────────────
  'bay-conditions': {
    type: 'ruling',
    title: {
      ar: 'شروط صحة البيع',
      fr: 'Conditions de validité de la vente',
      en: 'Conditions for Valid Sale'
    },
    rulingType: 'conditions',
    numbered: true,
    items: [
      {
        text: { ar: 'التراضي بين المتعاقدين', fr: 'Consentement mutuel', en: 'Mutual consent' },
        detail: { ar: 'لا إكراه ولا خداع', fr: 'Sans contrainte ni tromperie', en: 'No coercion or deception' }
      },
      {
        text: { ar: 'أهلية المتعاقدين', fr: 'Capacité des parties', en: 'Capacity of parties' },
        detail: { ar: 'بالغ، عاقل، رشيد', fr: 'Majeur, sain d\'esprit, mature', en: 'Adult, sane, mature' }
      },
      {
        text: { ar: 'أن يكون المبيع مباحاً', fr: 'Bien licite', en: 'Lawful commodity' },
        detail: { ar: 'ليس محرماً في الشرع', fr: 'Non interdit par la Charia', en: 'Not prohibited by Sharia' }
      },
      {
        text: { ar: 'ملك البائع للمبيع', fr: 'Propriété du vendeur', en: 'Seller\'s ownership' },
        detail: { ar: 'أو إذن من المالك', fr: 'Ou autorisation du propriétaire', en: 'Or owner\'s permission' }
      },
      {
        text: { ar: 'القدرة على التسليم', fr: 'Capacité de livraison', en: 'Ability to deliver' },
        detail: { ar: 'لا بيع ما لا يقدر على تسليمه', fr: 'Pas de vente de ce qu\'on ne peut livrer', en: 'No sale of what cannot be delivered' }
      },
      {
        text: { ar: 'معلومية المبيع والثمن', fr: 'Connaissance du bien et du prix', en: 'Knowledge of goods and price' },
        detail: { ar: 'تجنب الغرر الفاحش', fr: 'Éviter l\'incertitude excessive', en: 'Avoid excessive uncertainty' }
      }
    ],
    footer: {
      ar: 'إذا اختل شرط من هذه الشروط بطل البيع',
      fr: 'Si une condition manque, la vente est invalide',
      en: 'If any condition is missing, the sale is invalid'
    }
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - Riba vs Trade comparison
  // ─────────────────────────────────────────────────────────
  'riba-vs-trade': {
    type: 'comparison',
    title: {
      ar: 'الفرق بين البيع والربا',
      fr: 'Différence entre vente et usure',
      en: 'Difference between Sale and Usury'
    },
    columns: [
      {
        title: { ar: 'البيع الحلال', fr: 'Vente licite', en: 'Lawful Sale' },
        subtitle: { ar: '﴿وَأَحَلَّ اللهُ البَيْعَ﴾', fr: 'Allah a permis la vente', en: 'Allah has permitted trade' },
        variant: 'positive',
        items: [
          { ar: 'مال مقابل سلعة', fr: 'Argent contre bien', en: 'Money for commodity' },
          { ar: 'ربح مشروع', fr: 'Profit licite', en: 'Lawful profit' },
          { ar: 'مخاطرة متبادلة', fr: 'Risque partagé', en: 'Shared risk' },
          { ar: 'نفع للطرفين', fr: 'Bénéfice mutuel', en: 'Mutual benefit' },
          { ar: 'تنمية المال بالعمل', fr: 'Croissance par le travail', en: 'Growth through work' }
        ]
      },
      {
        title: { ar: 'الربا المحرم', fr: 'Usure interdite', en: 'Forbidden Usury' },
        subtitle: { ar: '﴿وَحَرَّمَ الرِّبَا﴾', fr: 'Allah a interdit l\'usure', en: 'Allah has forbidden usury' },
        variant: 'negative',
        items: [
          { ar: 'مال مقابل مال', fr: 'Argent contre argent', en: 'Money for money' },
          { ar: 'زيادة مضمونة', fr: 'Surplus garanti', en: 'Guaranteed surplus' },
          { ar: 'ظلم للمقترض', fr: 'Injustice pour l\'emprunteur', en: 'Injustice to borrower' },
          { ar: 'استغلال الحاجة', fr: 'Exploitation du besoin', en: 'Exploitation of need' },
          { ar: 'تنمية بلا عمل', fr: 'Croissance sans travail', en: 'Growth without work' }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - Murabaha steps
  // ─────────────────────────────────────────────────────────
  'murabaha-steps': {
    type: 'flow',
    title: {
      ar: 'خطوات المرابحة للآمر بالشراء',
      fr: 'Étapes de la Murabaha',
      en: 'Steps of Murabaha'
    },
    layout: 'vertical',
    steps: [
      {
        title: { ar: 'طلب العميل', fr: 'Demande du client', en: 'Client request' },
        description: { ar: 'يحدد العميل السلعة المطلوبة', fr: 'Le client spécifie le bien souhaité', en: 'Client specifies the desired item' },
        variant: 'default'
      },
      {
        title: { ar: 'شراء البنك', fr: 'Achat par la banque', en: 'Bank purchase' },
        description: { ar: 'البنك يشتري ويملك السلعة', fr: 'La banque achète et possède le bien', en: 'Bank buys and owns the item' },
        variant: 'current'
      },
      {
        title: { ar: 'بيع للعميل', fr: 'Vente au client', en: 'Sale to client' },
        description: { ar: 'بيع بربح معلوم ومتفق عليه', fr: 'Vente avec marge connue et convenue', en: 'Sale with known and agreed profit' },
        variant: 'default'
      },
      {
        title: { ar: 'السداد', fr: 'Paiement', en: 'Payment' },
        description: { ar: 'العميل يسدد بالتقسيط أو نقداً', fr: 'Le client paie en versements ou comptant', en: 'Client pays in installments or cash' },
        variant: 'success'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - Banking summary
  // ─────────────────────────────────────────────────────────
  'banking-summary': {
    type: 'summary',
    title: {
      ar: 'ملخص أحكام المعاملات البنكية',
      fr: 'Résumé des règles bancaires',
      en: 'Summary of Banking Rules'
    },
    rows: [
      {
        item: { ar: 'المرابحة', fr: 'Murabaha', en: 'Murabaha' },
        ruling: 'conditional',
        notes: { ar: 'بشرط تملك البنك أولاً', fr: 'Si la banque possède d\'abord', en: 'If bank owns first' }
      },
      {
        item: { ar: 'الإجارة المنتهية بالتمليك', fr: 'Location-vente', en: 'Lease-to-own' },
        ruling: 'conditional',
        notes: { ar: 'بشرط فصل العقدين', fr: 'Si contrats séparés', en: 'If contracts separate' }
      },
      {
        item: { ar: 'المشاركة المتناقصة', fr: 'Musharaka dégressive', en: 'Diminishing partnership' },
        ruling: 'halal',
        notes: { ar: 'شراكة حقيقية', fr: 'Vrai partenariat', en: 'Real partnership' }
      },
      {
        item: { ar: 'الحساب الجاري', fr: 'Compte courant', en: 'Current account' },
        ruling: 'halal',
        notes: { ar: 'بدون فوائد', fr: 'Sans intérêts', en: 'Without interest' }
      },
      {
        item: { ar: 'حساب الاستثمار', fr: 'Compte d\'investissement', en: 'Investment account' },
        ruling: 'halal',
        notes: { ar: 'مضاربة شرعية', fr: 'Mudaraba conforme', en: 'Sharia-compliant Mudaraba' }
      },
      {
        item: { ar: 'بطاقة الائتمان بفوائد', fr: 'Carte de crédit avec intérêts', en: 'Credit card with interest' },
        ruling: 'haram',
        notes: { ar: 'ربا صريح', fr: 'Usure explicite', en: 'Explicit usury' }
      },
      {
        item: { ar: 'التورق المصرفي', fr: 'Tawarruq bancaire', en: 'Banking Tawarruq' },
        ruling: 'disputed',
        notes: { ar: 'خلاف بين العلماء', fr: 'Différend entre savants', en: 'Scholarly disagreement' }
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - Forbidden sales
  // ─────────────────────────────────────────────────────────
  'forbidden-sales': {
    type: 'ruling',
    title: {
      ar: 'البيوع المحرمة',
      fr: 'Ventes interdites',
      en: 'Forbidden Sales'
    },
    rulingType: 'prohibitions',
    numbered: false,
    items: [
      {
        text: { ar: 'بيع الغرر', fr: 'Vente aléatoire (Gharar)', en: 'Uncertain sale (Gharar)' },
        detail: { ar: 'البيع مع جهالة فاحشة', fr: 'Vente avec incertitude excessive', en: 'Sale with excessive uncertainty' },
        subitems: [
          { ar: 'بيع السمك في الماء', fr: 'Poisson dans l\'eau', en: 'Fish in water' },
          { ar: 'بيع الطير في الهواء', fr: 'Oiseau dans le ciel', en: 'Bird in the air' }
        ]
      },
      {
        text: { ar: 'بيع الربا', fr: 'Vente usuraire', en: 'Usurious sale' },
        detail: { ar: 'ربا الفضل وربا النسيئة', fr: 'Riba al-Fadl et Riba al-Nasiah', en: 'Riba al-Fadl and Riba al-Nasiah' }
      },
      {
        text: { ar: 'بيع المحرمات', fr: 'Vente d\'interdits', en: 'Sale of forbidden items' },
        detail: { ar: 'الخمر، الخنزير، الميتة', fr: 'Alcool, porc, charogne', en: 'Alcohol, pork, carrion' }
      },
      {
        text: { ar: 'بيع العينة', fr: 'Vente Inah', en: 'Inah sale' },
        detail: { ar: 'حيلة ربوية محرمة', fr: 'Ruse usuraire interdite', en: 'Forbidden usurious trick' }
      },
      {
        text: { ar: 'النجش', fr: 'Enchère factice', en: 'Shill bidding' },
        detail: { ar: 'الزيادة بلا نية الشراء', fr: 'Enchérir sans intention d\'acheter', en: 'Bidding without intent to buy' }
      }
    ]
  }
}

// ============================================================
// Public API
// ============================================================

export function getDiagramData(key: string): DiagramData | null {
  return diagramsRegistry[key] || null
}

export function getAllDiagramKeys(): string[] {
  return Object.keys(diagramsRegistry)
}

// Localized getters for components
export function getLocalizedTreeBranches(
  branches: TreeDiagramData['branches'],
  locale: string
): TreeBranch[] {
  return branches.map(branch => ({
    label: branch.label[locale as keyof typeof branch.label] || branch.label.fr,
    description: branch.description?.[locale as keyof typeof branch.description] || branch.description?.fr,
    examples: branch.examples?.map(ex => ex[locale as keyof typeof ex] || ex.fr),
    variant: branch.variant,
    children: branch.children ? getLocalizedTreeBranches(branch.children, locale) : undefined
  }))
}

export function getLocalizedComparisonColumns(
  columns: ComparisonTableData['columns'],
  locale: string
): [ComparisonColumn, ComparisonColumn] {
  return columns.map(col => ({
    title: col.title[locale as keyof typeof col.title] || col.title.fr,
    subtitle: col.subtitle?.[locale as keyof typeof col.subtitle] || col.subtitle?.fr,
    variant: col.variant,
    items: col.items.map(item => item[locale as keyof typeof item] || item.fr)
  })) as [ComparisonColumn, ComparisonColumn]
}

export function getLocalizedFlowSteps(
  steps: FlowChartData['steps'],
  locale: string
): FlowStep[] {
  return steps.map((step, idx) => ({
    number: idx + 1,
    title: step.title[locale as keyof typeof step.title] || step.title.fr,
    description: step.description?.[locale as keyof typeof step.description] || step.description?.fr,
    variant: step.variant
  }))
}

export function getLocalizedRulingItems(
  items: RulingCardData['items'],
  locale: string
): RulingItem[] {
  return items.map(item => ({
    text: item.text[locale as keyof typeof item.text] || item.text.fr,
    detail: item.detail?.[locale as keyof typeof item.detail] || item.detail?.fr,
    subitems: item.subitems?.map(sub => sub[locale as keyof typeof sub] || sub.fr)
  }))
}

export function getLocalizedSummaryRows(
  rows: SummaryTableData['rows'],
  locale: string
): SummaryRow[] {
  return rows.map(row => ({
    item: row.item[locale as keyof typeof row.item] || row.item.fr,
    ruling: row.ruling,
    notes: row.notes?.[locale as keyof typeof row.notes] || row.notes?.fr
  }))
}

export function getLocalizedString(
  obj: { ar: string; fr: string; en: string } | undefined,
  locale: string
): string | undefined {
  if (!obj) return undefined
  return obj[locale as keyof typeof obj] || obj.fr
}
