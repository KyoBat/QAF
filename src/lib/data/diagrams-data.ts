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
  // FIQH MUAMALAT - SALAM & ISTISNA
  // ─────────────────────────────────────────────────────────
  'salam-contract': {
    type: 'flow',
    title: {
      ar: 'عقد السَّلَم',
      fr: 'Contrat Salam',
      en: 'Salam Contract'
    },
    layout: 'horizontal',
    steps: [
      { title: { ar: 'المشتري (المُسلِم)', fr: 'Acheteur', en: 'Buyer' }, description: { ar: 'يدفع الثمن كاملاً الآن', fr: 'Paie le prix complet maintenant', en: 'Pays full price now' } },
      { title: { ar: 'الثمن معجَّل', fr: 'Prix immédiat', en: 'Immediate payment' }, description: { ar: '💰 الآن', fr: '💰 Maintenant', en: '💰 Now' }, variant: 'success' },
      { title: { ar: 'البائع (المُسلَم إليه)', fr: 'Vendeur', en: 'Seller' }, description: { ar: 'يُسلِّم السلعة الموصوفة لاحقاً', fr: 'Livre les marchandises décrites plus tard', en: 'Delivers described goods later' } }
    ]
  },

  'salam-vs-istisna': {
    type: 'comparison',
    title: {
      ar: 'مقارنة: السَّلَم vs الاستصناع',
      fr: 'Comparaison: Salam vs Istisna',
      en: 'Comparison: Salam vs Istisna'
    },
    columns: [
      {
        title: { ar: 'السَّلَم', fr: 'Salam', en: 'Salam' },
        variant: 'positive',
        items: [
          { ar: 'الثمن يُعجَّل (واجب)', fr: 'Prix avancé (obligatoire)', en: 'Price paid upfront (required)' },
          { ar: 'لا يُشترط العمل', fr: 'Pas de travail requis', en: 'No work required' },
          { ar: 'الأجل شرط صحة', fr: 'Délai est condition de validité', en: 'Term is validity condition' },
          { ar: 'السلعة موجودة عادة', fr: 'Bien existe généralement', en: 'Goods usually exist' },
          { ar: 'مثال: شراء قمح مقدماً', fr: 'Ex: achat blé à l\'avance', en: 'Ex: buying wheat in advance' }
        ]
      },
      {
        title: { ar: 'الاستصناع', fr: 'Istisna', en: 'Istisna' },
        variant: 'neutral',
        items: [
          { ar: 'يجوز تأجيل الثمن', fr: 'Prix peut être différé', en: 'Price can be deferred' },
          { ar: 'يُشترط العمل (الصنع)', fr: 'Travail requis (fabrication)', en: 'Work required (manufacturing)' },
          { ar: 'الأجل ليس شرطاً', fr: 'Délai non obligatoire', en: 'Term not required' },
          { ar: 'السلعة تُصنع خصيصاً', fr: 'Bien fabriqué sur mesure', en: 'Goods custom-made' },
          { ar: 'مثال: طلب صنع أثاث', fr: 'Ex: commande de meubles', en: 'Ex: ordering furniture' }
        ]
      }
    ]
  },

  'salam-istisna-summary': {
    type: 'summary',
    title: {
      ar: '🎯 خلاصة: السَّلَم والاستصناع',
      fr: '🎯 Résumé: Salam et Istisna',
      en: '🎯 Summary: Salam and Istisna'
    },
    rows: [
      { item: { ar: 'السَّلَم = بيع موصوف مؤجل بثمن معجل', fr: 'Salam = vente différée avec paiement avancé', en: 'Salam = deferred sale with upfront payment' }, ruling: 'halal' },
      { item: { ar: 'تعجيل الثمن واجب في السَّلَم', fr: 'Paiement avancé obligatoire en Salam', en: 'Upfront payment required in Salam' }, ruling: 'halal' },
      { item: { ar: 'الأجل واجب في السَّلَم', fr: 'Délai obligatoire en Salam', en: 'Term required in Salam' }, ruling: 'halal' },
      { item: { ar: 'الاستصناع = عقد على صنع شيء', fr: 'Istisna = contrat de fabrication', en: 'Istisna = manufacturing contract' }, ruling: 'halal' },
      { item: { ar: 'الثمن مرن في الاستصناع (تعجيل/تأجيل/أقساط)', fr: 'Prix flexible en Istisna', en: 'Price flexible in Istisna' }, ruling: 'halal' },
      { item: { ar: 'كلاهما مستثنى من "بيع ما ليس عندك"', fr: 'Les deux exemptés de "vendre ce qu\'on ne possède pas"', en: 'Both exempted from "selling what you don\'t own"' }, ruling: 'halal' }
    ]
  },

  'salam-evidences': {
    type: 'tree',
    title: { ar: 'أدلة مشروعية السَّلَم', fr: 'Preuves de la légalité du Salam', en: 'Evidence for Salam Legality' },
    root: { ar: 'السَّلَم مشروع بالاتفاق', fr: 'Salam est légal par consensus', en: 'Salam is lawful by consensus' },
    branches: [
      { label: { ar: 'القرآن', fr: 'Coran', en: 'Quran' }, description: { ar: '﴿إِذَا تَدَايَنتُم بِدَيْنٍ إِلَىٰ أَجَلٍ﴾', fr: 'Quand vous contractez une dette', en: 'When you contract a debt' }, variant: 'success' },
      { label: { ar: 'السنة', fr: 'Sunna', en: 'Sunnah' }, description: { ar: 'حديث ابن عباس في السلف', fr: 'Hadith d\'Ibn Abbas sur le salaf', en: 'Ibn Abbas hadith on salaf' }, variant: 'success' },
      { label: { ar: 'الإجماع', fr: 'Consensus', en: 'Consensus' }, description: { ar: 'اتفاق العلماء على جوازه', fr: 'Accord des savants sur sa licéité', en: 'Scholars agree on its permissibility' }, variant: 'success' }
    ]
  },

  'salam-price-conditions': {
    type: 'ruling',
    title: { ar: 'شروط الثمن (رأس المال)', fr: 'Conditions du prix (capital)', en: 'Price Conditions (Capital)' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      { text: { ar: 'أن يكون معلوماً', fr: 'Doit être connu', en: 'Must be known' }, detail: { ar: 'قدراً وصفة', fr: 'En quantité et qualité', en: 'In quantity and quality' } },
      { text: { ar: 'أن يُقبض في المجلس', fr: 'Doit être reçu dans la séance', en: 'Must be received in session' }, detail: { ar: 'عند الجمهور (أو خلال 3 أيام عند بعضهم)', fr: 'Selon la majorité (ou sous 3 jours pour certains)', en: 'According to majority (or within 3 days for some)' } }
    ],
    footer: { ar: '⚠️ لماذا التعجيل؟ لأنه لو تأخر الثمن والسلعة = بيع دين بدين (محرم)', fr: '⚠️ Pourquoi l\'avance? Si prix et bien différés = dette contre dette (interdit)', en: '⚠️ Why advance? If both deferred = debt for debt (prohibited)' }
  },

  'salam-goods-conditions': {
    type: 'ruling',
    title: { ar: 'شروط السلعة (المُسلَم فيه)', fr: 'Conditions du bien (objet du Salam)', en: 'Goods Conditions (Salam Object)' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      { text: { ar: 'أن يكون موصوفاً', fr: 'Doit être décrit', en: 'Must be described' }, detail: { ar: 'صفة تنفي الجهالة', fr: 'Description qui élimine l\'incertitude', en: 'Description that eliminates uncertainty' } },
      { text: { ar: 'أن يكون ديناً في الذمة', fr: 'Doit être une dette', en: 'Must be a debt' }, detail: { ar: '✗ خطأ: "هذه السيارة بعينها" | ✓ صواب: "سيارة تويوتا موديل 2024"', fr: '✗ Faux: cette voiture | ✓ Correct: Toyota 2024', en: '✗ Wrong: this specific car | ✓ Correct: Toyota 2024 model' } },
      { text: { ar: 'أن يمكن ضبطه بالصفة', fr: 'Doit pouvoir être spécifié', en: 'Must be specifiable' }, detail: { ar: 'كالحبوب والأقمشة | ✗ لا يصح: الجواهر النادرة', fr: 'Comme grains et tissus | ✗ Non: bijoux rares', en: 'Like grains and fabrics | ✗ Not: rare gems' } },
      { text: { ar: 'أن يُذكر جنسه ونوعه وقدره', fr: 'Doit mentionner genre, type et quantité', en: 'Must mention genus, type and quantity' }, detail: { ar: 'مثال: "قمح مصري، ألف كيلو، درجة أولى"', fr: 'Ex: blé égyptien, 1000 kg, grade 1', en: 'Ex: Egyptian wheat, 1000 kg, grade 1' } }
    ]
  },

  'salam-term-conditions': {
    type: 'ruling',
    title: { ar: 'شروط الأجل', fr: 'Conditions du délai', en: 'Term Conditions' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      { text: { ar: 'أن يكون معلوماً', fr: 'Doit être connu', en: 'Must be known' }, detail: { ar: '✓ صواب: "التسليم بعد 6 أشهر" | ✗ خطأ: "التسليم عندما يتيسر"', fr: '✓ Correct: dans 6 mois | ✗ Faux: quand possible', en: '✓ Correct: in 6 months | ✗ Wrong: when convenient' } },
      { text: { ar: 'أن يكون محدداً لا معلقاً', fr: 'Doit être déterminé non suspendu', en: 'Must be determined not contingent' }, detail: { ar: '✓ صواب: "في شهر رمضان القادم" | ✗ خطأ: "عندما يهطل المطر"', fr: '✓ Correct: Ramadan prochain | ✗ Faux: quand il pleut', en: '✓ Correct: next Ramadan | ✗ Wrong: when it rains' } }
    ]
  },

  'salam-invalid-items': {
    type: 'comparison',
    title: { ar: '❌ ما لا يصح فيه السَّلَم', fr: '❌ Ce qui invalide le Salam', en: '❌ What Invalidates Salam' },
    columns: [
      { title: { ar: 'الصنف', fr: 'Type', en: 'Type' }, variant: 'negative', items: [
        { ar: 'المعينات (سلعة بعينها)', fr: 'Biens spécifiques', en: 'Specific items' },
        { ar: 'ما لا ينضبط بالصفة', fr: 'Ce qui ne peut être spécifié', en: 'What cannot be specified' },
        { ar: 'ما يتفاوت كثيراً', fr: 'Ce qui varie beaucoup', en: 'What varies greatly' }
      ]},
      { title: { ar: 'السبب', fr: 'Raison', en: 'Reason' }, variant: 'neutral', items: [
        { ar: 'السَّلَم = موصوف في الذمة لا معين', fr: 'Salam = décrit en dette, pas spécifique', en: 'Salam = described debt, not specific' },
        { ar: 'يؤدي إلى الغرر والنزاع', fr: 'Mène à l\'incertitude et conflit', en: 'Leads to uncertainty and conflict' },
        { ar: 'خلاف: الحيوان عند بعضهم والصحيح جوازه بالصفة', fr: 'Divergence: animaux permis selon certains', en: 'Disagreement: animals allowed by some' }
      ]}
    ]
  },

  'salam-delivery-rules': {
    type: 'summary',
    title: { ar: 'أحكام التسليم في السَّلَم', fr: 'Règles de livraison en Salam', en: 'Delivery Rules in Salam' },
    rows: [
      { item: { ar: 'التسليم في الموعد', fr: 'Livraison à temps', en: 'Timely delivery' }, ruling: 'halal', notes: { ar: 'واجب على البائع', fr: 'Obligatoire pour le vendeur', en: 'Obligatory for seller' } },
      { item: { ar: 'التأخير بعذر مقبول', fr: 'Retard avec excuse valide', en: 'Delay with valid excuse' }, ruling: 'mubah', notes: { ar: 'ينتظر المشتري', fr: 'L\'acheteur attend', en: 'Buyer waits' } },
      { item: { ar: 'العجز الكامل عن التسليم', fr: 'Incapacité totale de livrer', en: 'Complete inability to deliver' }, ruling: 'disputed', notes: { ar: 'للمشتري: الفسخ أو الانتظار', fr: 'L\'acheteur peut annuler ou attendre', en: 'Buyer can cancel or wait' } }
    ]
  },

  'salam-resale-rules': {
    type: 'comparison',
    title: { ar: 'هل يجوز بيع المُسلَم فيه قبل قبضه؟', fr: 'Peut-on revendre le Salam avant réception?', en: 'Can Salam Be Resold Before Receipt?' },
    columns: [
      { title: { ar: '❌ البيع', fr: '❌ Vente', en: '❌ Sale' }, variant: 'negative', items: [
        { ar: 'لا يجوز بيعه قبل قبضه', fr: 'Interdit avant réception', en: 'Forbidden before receipt' },
        { ar: 'لنهي النبي ﷺ عن ربح ما لم يُضمن', fr: 'Le Prophète ﷺ a interdit le profit sans garantie', en: 'Prophet ﷺ forbade profit without liability' }
      ]},
      { title: { ar: '✅ الإقالة', fr: '✅ Annulation', en: '✅ Cancellation' }, variant: 'positive', items: [
        { ar: 'يجوز فسخ العقد', fr: 'Annulation permise', en: 'Cancellation allowed' },
        { ar: 'وإرجاع الثمن للمشتري', fr: 'Et remboursement à l\'acheteur', en: 'And refund to buyer' }
      ]}
    ]
  },

  'salam-substitute': {
    type: 'ruling',
    title: { ar: 'أخذ البدل عند الحنابلة', fr: 'Substitution selon les Hanbalites', en: 'Substitution According to Hanbalis' },
    rulingType: 'conditions',
    items: [
      { text: { ar: 'يجوز أخذ بدل من جنس آخر', fr: 'Substitution d\'un autre type permise', en: 'Substitution of another type allowed' } },
      { text: { ar: 'أن يكون بسعر يومه (لا بسعر العقد)', fr: 'Au prix du jour (pas du contrat)', en: 'At day\'s price (not contract price)' } },
      { text: { ar: 'ألا يربح فيه المشتري (لأنه ربح ما لم يضمن)', fr: 'L\'acheteur ne doit pas profiter', en: 'Buyer must not profit' } }
    ],
    footer: { ar: 'مثال: اشترى سلماً 100 كيلو قمح، فعجز البائع. يجوز أخذ 100 كيلو أرز بسعر اليوم بدلاً منه.', fr: 'Ex: 100 kg blé indisponible, on peut prendre 100 kg riz au prix du jour', en: 'Ex: 100 kg wheat unavailable, can take 100 kg rice at today\'s price' }
  },

  'istisna-contract': {
    type: 'flow',
    title: { ar: 'عقد الاستصناع', fr: 'Contrat Istisna', en: 'Istisna Contract' },
    layout: 'horizontal',
    steps: [
      { title: { ar: 'المستصنِع (الطالب)', fr: 'Demandeur', en: 'Orderer' }, description: { ar: 'يطلب صنع شيء بمواصفات', fr: 'Demande fabrication sur mesure', en: 'Requests custom manufacturing' } },
      { title: { ar: 'الثمن (مرن)', fr: 'Prix (flexible)', en: 'Price (flexible)' }, description: { ar: '💰 قبل / بعد / أقساط', fr: '💰 Avant / après / échelonné', en: '💰 Before / after / installments' }, variant: 'success' },
      { title: { ar: 'الصانع', fr: 'Fabricant', en: 'Manufacturer' }, description: { ar: 'يوفر المواد + يقوم بالعمل', fr: 'Fournit matériaux + travail', en: 'Provides materials + work' } }
    ]
  },

  'istisna-evidences': {
    type: 'ruling',
    title: { ar: 'أدلة مشروعية الاستصناع', fr: 'Preuves de la légalité de l\'Istisna', en: 'Evidence for Istisna Legality' },
    rulingType: 'info',
    numbered: true,
    items: [
      { text: { ar: 'العرف والعادة', fr: 'Usage et coutume', en: 'Custom and usage' }, detail: { ar: 'جرى الناس على طلب صنع الأشياء من عهد النبي ﷺ إلى يومنا', fr: 'Les gens ont commandé des fabrications depuis l\'époque du Prophète ﷺ', en: 'People ordered manufacturing since the Prophet\'s ﷺ time' } },
      { text: { ar: 'الحاجة الماسة', fr: 'Nécessité pressante', en: 'Pressing need' }, detail: { ar: 'لا يمكن الاستغناء عنه في الحياة (من يبني بيته؟ من يصنع أثاثه؟)', fr: 'Indispensable (qui construit sa maison? ses meubles?)', en: 'Indispensable (who builds their house? furniture?)' } },
      { text: { ar: 'الإجماع العملي', fr: 'Consensus pratique', en: 'Practical consensus' }, detail: { ar: 'تعامل الناس به في كل العصور دون إنكار من العلماء', fr: 'Pratiqué à toutes les époques sans objection des savants', en: 'Practiced in all eras without scholars\' objection' } }
    ]
  },

  'istisna-conditions': {
    type: 'ruling',
    title: { ar: 'شروط صحة الاستصناع', fr: 'Conditions de validité de l\'Istisna', en: 'Istisna Validity Conditions' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      { text: { ar: 'بيان جنس المصنوع ونوعه', fr: 'Indiquer le genre et type', en: 'Specify genus and type' }, detail: { ar: 'مثال: سيارة، منزل، ملابس، أثاث', fr: 'Ex: voiture, maison, vêtements, meubles', en: 'Ex: car, house, clothes, furniture' } },
      { text: { ar: 'بيان الأوصاف المؤثرة', fr: 'Indiquer les spécifications', en: 'Specify important attributes' }, detail: { ar: 'المقاسات، المواد المستخدمة، اللون، التصميم', fr: 'Dimensions, matériaux, couleur, design', en: 'Dimensions, materials, color, design' } },
      { text: { ar: 'معرفة الثمن', fr: 'Connaissance du prix', en: 'Knowledge of price' }, detail: { ar: 'أن يكون محدداً (سواء عُجِّل أو أُجِّل)', fr: 'Doit être déterminé (avancé ou différé)', en: 'Must be determined (advanced or deferred)' } },
      { text: { ar: 'معرفة الأجل إن وُجد', fr: 'Connaissance du délai si spécifié', en: 'Knowledge of term if specified' }, detail: { ar: 'ليس شرطاً، لكن إن ذُكر وجب الالتزام به', fr: 'Non obligatoire, mais si mentionné doit être respecté', en: 'Not required, but if mentioned must be respected' } }
    ]
  },

  'istisna-forms': {
    type: 'tree',
    title: { ar: 'صور عقد الاستصناع', fr: 'Formes du contrat Istisna', en: 'Forms of Istisna Contract' },
    branches: [
      { label: { ar: 'الاستصناع المباشر', fr: 'Istisna direct', en: 'Direct Istisna' }, description: { ar: 'المستصنِع → الصانع (مباشرة)', fr: 'Demandeur → Fabricant (direct)', en: 'Orderer → Manufacturer (direct)' }, examples: [{ ar: 'طلب صنع أثاث من النجار مباشرة', fr: 'Commander des meubles directement au menuisier', en: 'Order furniture directly from carpenter' }], variant: 'success' },
      { label: { ar: 'الاستصناع الموازي', fr: 'Istisna parallèle', en: 'Parallel Istisna' }, description: { ar: 'المستصنِع → الصانع (وسيط) → صانع آخر', fr: 'Demandeur → Intermédiaire → Fabricant', en: 'Orderer → Intermediary → Manufacturer' }, examples: [{ ar: 'شركة عقارية تبني لعملائها بالتعاقد مع مقاولين', fr: 'Promoteur construit via sous-traitants', en: 'Developer builds via contractors' }], variant: 'default' }
    ]
  },

  'istisna-binding': {
    type: 'comparison',
    title: { ar: 'هل الاستصناع لازم؟', fr: 'L\'Istisna est-il contraignant?', en: 'Is Istisna Binding?' },
    columns: [
      { title: { ar: 'المذهب الحنفي (المفتى به)', fr: 'École Hanafite (avis adopté)', en: 'Hanafi School (adopted view)' }, variant: 'positive', items: [
        { ar: '✅ لازم للطرفين بعد العقد', fr: '✅ Contraignant pour les deux parties', en: '✅ Binding for both parties' },
        { ar: 'وهو الأصح للمصلحة', fr: 'C\'est le plus correct pour l\'intérêt', en: 'Most correct for benefit' }
      ]},
      { title: { ar: 'قول آخر', fr: 'Autre avis', en: 'Another view' }, variant: 'neutral', items: [
        { ar: 'جائز الفسخ قبل الشروع في العمل', fr: 'Annulable avant de commencer', en: 'Can be cancelled before starting' }
      ]}
    ]
  },

  'istisna-delay-rules': {
    type: 'summary',
    title: { ar: 'أحكام التأخير في الاستصناع', fr: 'Règles de retard en Istisna', en: 'Delay Rules in Istisna' },
    rows: [
      { item: { ar: 'تأخير الصانع بلا عذر', fr: 'Retard du fabricant sans excuse', en: 'Manufacturer delay without excuse' }, ruling: 'haram', notes: { ar: 'للمستصنِع: الفسخ أو الانتظار مع التعويض', fr: 'Le demandeur peut annuler ou attendre avec compensation', en: 'Orderer can cancel or wait with compensation' } },
      { item: { ar: 'تأخير لعذر مقبول', fr: 'Retard avec excuse valide', en: 'Delay with valid excuse' }, ruling: 'mubah', notes: { ar: 'ينتظر المستصنِع (لا تعويض)', fr: 'Le demandeur attend (pas de compensation)', en: 'Orderer waits (no compensation)' } }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - QARD & RAHN (Prêt et Gage)
  // ─────────────────────────────────────────────────────────
  'qard-contract': {
    type: 'flow',
    title: { ar: 'عقد القرض الحسن', fr: 'Contrat de prêt bienveillant', en: 'Benevolent Loan Contract' },
    layout: 'horizontal',
    steps: [
      { title: { ar: 'المُقرِض', fr: 'Prêteur', en: 'Lender' }, description: { ar: 'يدفع المال', fr: 'Verse l\'argent', en: 'Provides money' } },
      { title: { ar: '💰 المال', fr: '💰 Argent', en: '💰 Money' }, description: { ar: 'الآن', fr: 'Maintenant', en: 'Now' }, variant: 'success' },
      { title: { ar: 'المقترض', fr: 'Emprunteur', en: 'Borrower' }, description: { ar: 'يرد المثل (بلا زيادة)', fr: 'Rend l\'équivalent (sans surplus)', en: 'Returns equivalent (no surplus)' } }
    ]
  },

  'qard-virtue': {
    type: 'ruling',
    title: { ar: 'فضل القرض الحسن', fr: 'Mérite du prêt bienveillant', en: 'Virtue of Benevolent Loan' },
    rulingType: 'recommended',
    items: [
      { text: { ar: 'القرض مرتين = الصدقة مرة واحدة', fr: 'Prêter 2 fois = 1 aumône', en: 'Lending twice = 1 charity' } },
      { text: { ar: 'يسد الحاجة مع حفظ الكرامة', fr: 'Comble le besoin en préservant la dignité', en: 'Fills need while preserving dignity' } },
      { text: { ar: 'المال يعود فيُقرض غيره', fr: 'L\'argent revient pour être prêté à d\'autres', en: 'Money returns to be lent to others' } },
      { text: { ar: 'يُنشئ التكافل في المجتمع', fr: 'Crée la solidarité sociale', en: 'Creates social solidarity' } },
      { text: { ar: 'يُغني عن أبواب الربا', fr: 'Évite les portes de l\'usure', en: 'Avoids doors of usury' } }
    ]
  },

  'qard-rulings-lender': {
    type: 'summary',
    title: { ar: 'حكم القرض على المُقرِض', fr: 'Statut du prêt pour le prêteur', en: 'Loan Ruling for Lender' },
    rows: [
      { item: { ar: 'إقراض المحتاج', fr: 'Prêter au nécessiteux', en: 'Lending to needy' }, ruling: 'mustahab', notes: { ar: 'الأصل', fr: 'Principe', en: 'Principle' } },
      { item: { ar: 'إقراض من يستخدمه في إسراف', fr: 'Prêter à qui gaspille', en: 'Lending to spendthrift' }, ruling: 'makruh' },
      { item: { ar: 'إقراض من يستخدمه في محرم', fr: 'Prêter pour usage illicite', en: 'Lending for unlawful use' }, ruling: 'haram', notes: { ar: 'كشراء خمر', fr: 'Ex: acheter alcool', en: 'Ex: buying alcohol' } }
    ]
  },

  'qard-rulings-borrower': {
    type: 'summary',
    title: { ar: 'حكم القرض على المقترض', fr: 'Statut du prêt pour l\'emprunteur', en: 'Loan Ruling for Borrower' },
    rows: [
      { item: { ar: 'الاقتراض للحاجة مع القدرة على السداد', fr: 'Emprunter par besoin avec capacité de rembourser', en: 'Borrowing for need with ability to repay' }, ruling: 'mubah' },
      { item: { ar: 'الاقتراض بلا حاجة', fr: 'Emprunter sans besoin', en: 'Borrowing without need' }, ruling: 'makruh' },
      { item: { ar: 'الاقتراض مع علم عدم السداد', fr: 'Emprunter sachant ne pas pouvoir rembourser', en: 'Borrowing knowing cannot repay' }, ruling: 'haram', notes: { ar: 'أكل أموال الناس بالباطل', fr: 'Dévorer les biens d\'autrui', en: 'Consuming others\' wealth wrongfully' } }
    ]
  },

  'qard-pillars': {
    type: 'tree',
    title: { ar: 'أركان القرض', fr: 'Piliers du prêt', en: 'Pillars of Loan' },
    branches: [
      { label: { ar: 'المُقرِض', fr: 'Prêteur', en: 'Lender' }, description: { ar: 'أهل للتبرع، مختار', fr: 'Apte à donner, consentant', en: 'Capable of giving, willing' }, variant: 'success' },
      { label: { ar: 'المقترض', fr: 'Emprunteur', en: 'Borrower' }, description: { ar: 'أهل للالتزام، يقبل', fr: 'Apte à s\'engager, accepte', en: 'Capable of commitment, accepts' }, variant: 'success' },
      { label: { ar: 'المال', fr: 'Bien', en: 'Money' }, description: { ar: 'مال مباح، معلوم', fr: 'Bien licite, connu', en: 'Lawful, known amount' }, variant: 'success' },
      { label: { ar: 'الصيغة', fr: 'Formule', en: 'Formula' }, description: { ar: 'إيجاب وقبول', fr: 'Offre et acceptation', en: 'Offer and acceptance' }, variant: 'default' }
    ]
  },

  'qard-lender-conditions': {
    type: 'ruling',
    title: { ar: 'شروط المُقرِض', fr: 'Conditions du prêteur', en: 'Lender Conditions' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      { text: { ar: 'أن يكون أهلاً للتبرع', fr: 'Être apte à donner', en: 'Being capable of giving' }, detail: { ar: 'مالك للمال، بالغ عاقل رشيد', fr: 'Propriétaire, majeur, sain d\'esprit', en: 'Owner, adult, sane, mature' } },
      { text: { ar: 'أن يكون مختاراً', fr: 'Être consentant', en: 'Being willing' }, detail: { ar: 'غير مُكرَه، لا يصح إقراض المُكرَه', fr: 'Non contraint', en: 'Not coerced' } }
    ]
  },

  'qard-money-conditions': {
    type: 'ruling',
    title: { ar: 'شروط المال المقترَض', fr: 'Conditions du bien emprunté', en: 'Borrowed Money Conditions' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      { text: { ar: 'أن يكون مالاً مباحاً', fr: 'Être un bien licite', en: 'Be lawful property' }, detail: { ar: '✗ لا يجوز إقراض الخمر أو الخنزير', fr: '✗ Pas d\'alcool ni porc', en: '✗ No alcohol or pork' } },
      { text: { ar: 'أن يكون معلوماً قدراً وصفة', fr: 'Être connu en quantité et qualité', en: 'Be known in quantity and quality' }, detail: { ar: 'مثال: "أُقرضك 10,000 ريال"', fr: 'Ex: "Je te prête 10 000 riyals"', en: 'Ex: "I lend you 10,000 riyals"' } },
      { text: { ar: 'أن يكون مما له مثل (المثليات)', fr: 'Être fongible', en: 'Be fungible' }, detail: { ar: 'النقود، الحبوب، المصنوعات المتماثلة', fr: 'Argent, grains, produits identiques', en: 'Money, grains, identical products' } }
    ]
  },

  'qard-repayment-timing': {
    type: 'summary',
    title: { ar: 'وقت السداد', fr: 'Délai de remboursement', en: 'Repayment Timing' },
    rows: [
      { item: { ar: 'القرض مؤجل (بأجل معلوم)', fr: 'Prêt à terme (délai connu)', en: 'Term loan (known deadline)' }, ruling: 'halal', notes: { ar: 'يجب السداد عند حلول الأجل', fr: 'Rembourser à échéance', en: 'Repay at due date' } },
      { item: { ar: 'القرض حالّ (غير مؤجل)', fr: 'Prêt immédiat (sans délai)', en: 'Immediate loan (no term)' }, ruling: 'halal', notes: { ar: 'يجب السداد عند الطلب', fr: 'Rembourser sur demande', en: 'Repay on demand' } },
      { item: { ar: 'لم يُحدد أجل', fr: 'Délai non spécifié', en: 'Unspecified term' }, ruling: 'mubah', notes: { ar: 'يُرجع للعرف', fr: 'Selon l\'usage', en: 'According to custom' } }
    ]
  },

  'qard-surplus-rules': {
    type: 'comparison',
    title: { ar: 'الزيادة في السداد', fr: 'Surplus au remboursement', en: 'Surplus in Repayment' },
    columns: [
      { title: { ar: '❌ زيادة مشروطة = ربا', fr: '❌ Surplus conditionné = usure', en: '❌ Conditional surplus = usury' }, variant: 'negative', items: [
        { ar: '"أُقرضك 1000 على أن ترد 1100"', fr: '"Je te prête 1000 contre 1100"', en: '"I lend 1000 for 1100"' },
        { ar: 'كل قرض جرَّ نفعاً فهو ربا', fr: 'Tout prêt à profit est usure', en: 'Any loan with profit is usury' }
      ]},
      { title: { ar: '✅ زيادة تطوعية = حُسن القضاء', fr: '✅ Surplus volontaire = bon remboursement', en: '✅ Voluntary surplus = good repayment' }, variant: 'positive', items: [
        { ar: '"خذ هذا زيادة على ما لك"', fr: '"Prends ce surplus volontairement"', en: '"Take this extra voluntarily"' },
        { ar: 'إن خياركم أحسنكم قضاء', fr: 'Les meilleurs d\'entre vous sont les meilleurs payeurs', en: 'The best of you are the best in repaying' }
      ]}
    ]
  },

  'qard-forbidden-benefits': {
    type: 'ruling',
    title: { ar: 'صور الانتفاع المحرم من القرض', fr: 'Formes d\'avantages interdits du prêt', en: 'Forbidden Loan Benefits' },
    rulingType: 'prohibitions',
    numbered: true,
    items: [
      { text: { ar: 'الزيادة المشروطة في المال', fr: 'Surplus conditionné', en: 'Conditional surplus' }, detail: { ar: '"أُقرضك ألفاً على أن ترد ألفاً ومائة"', fr: '"Prête 1000 contre 1100"', en: '"Lend 1000 for 1100"' } },
      { text: { ar: 'الانتفاع بالعين المملوكة للمقترض', fr: 'Profiter des biens de l\'emprunteur', en: 'Using borrower\'s property' }, detail: { ar: '"أُقرضك على أن تُسكنني بيتك"', fr: '"Prête si tu m\'héberges"', en: '"Lend if you house me"' } },
      { text: { ar: 'الهدية المشروطة', fr: 'Cadeau conditionné', en: 'Conditional gift' }, detail: { ar: '"أُقرضك على أن تهديني"', fr: '"Prête si tu m\'offres un cadeau"', en: '"Lend if you gift me"' } },
      { text: { ar: 'الخدمة المشروطة', fr: 'Service conditionné', en: 'Conditional service' }, detail: { ar: '"أُقرضك على أن تعمل عندي أسبوعاً"', fr: '"Prête si tu travailles pour moi"', en: '"Lend if you work for me"' } }
    ]
  },

  'qard-allowed-benefits': {
    type: 'ruling',
    title: { ar: 'ما يجوز في القرض', fr: 'Ce qui est permis dans le prêt', en: 'What Is Allowed in Loans' },
    rulingType: 'conditions',
    items: [
      { text: { ar: 'الزيادة غير المشروطة عند السداد', fr: 'Surplus non conditionné au remboursement', en: 'Unconditional surplus at repayment' }, detail: { ar: 'حُسن القضاء', fr: 'Bon remboursement', en: 'Good repayment' } },
      { text: { ar: 'الهدية غير المشروطة من المقترض', fr: 'Cadeau non conditionné de l\'emprunteur', en: 'Unconditional gift from borrower' }, detail: { ar: 'إذا لم تكن لأجل القرض', fr: 'Si pas lié au prêt', en: 'If not for the loan' } },
      { text: { ar: 'رد أجود مما اقترض بلا شرط', fr: 'Rendre mieux sans condition', en: 'Returning better without condition' } }
    ]
  },

  'rahn-contract': {
    type: 'flow',
    title: { ar: 'عقد الرهن', fr: 'Contrat de gage', en: 'Pledge Contract' },
    layout: 'horizontal',
    steps: [
      { title: { ar: 'الراهن (المدين)', fr: 'Débiteur', en: 'Debtor' }, description: { ar: 'يقدم العين المرهونة', fr: 'Fournit le gage', en: 'Provides pledge' } },
      { title: { ar: '🏠 العين المرهونة', fr: '🏠 Gage', en: '🏠 Pledge' }, description: { ar: 'ضمان', fr: 'Garantie', en: 'Collateral' }, variant: 'warning' },
      { title: { ar: 'المرتهن (الدائن)', fr: 'Créancier', en: 'Creditor' }, description: { ar: 'يحفظها حتى السداد', fr: 'La garde jusqu\'au remboursement', en: 'Keeps until repayment' } }
    ]
  },

  'rahn-pillars': {
    type: 'tree',
    title: { ar: 'أركان الرهن', fr: 'Piliers du gage', en: 'Pillars of Pledge' },
    branches: [
      { label: { ar: 'الراهن (المدين)', fr: 'Débiteur', en: 'Debtor' }, description: { ar: 'أهل تبرع، مالك أو مأذون', fr: 'Apte à donner, propriétaire ou autorisé', en: 'Capable of giving, owner or authorized' }, variant: 'success' },
      { label: { ar: 'المرتهن (الدائن)', fr: 'Créancier', en: 'Creditor' }, description: { ar: 'صاحب الدين', fr: 'Détenteur de la dette', en: 'Debt holder' }, variant: 'success' },
      { label: { ar: 'المرهون (العين)', fr: 'Gage (bien)', en: 'Pledge (item)' }, description: { ar: 'يصح بيعه، معين معلوم، مقدور على تسليمه', fr: 'Vendable, déterminé, livrable', en: 'Sellable, specified, deliverable' }, variant: 'success' },
      { label: { ar: 'المرهون به + الصيغة', fr: 'Dette + Formule', en: 'Debt + Formula' }, description: { ar: 'الدين + إيجاب وقبول', fr: 'Dette + offre et acceptation', en: 'Debt + offer and acceptance' }, variant: 'default' }
    ]
  },

  'rahn-pledged-conditions': {
    type: 'ruling',
    title: { ar: 'شروط العين المرهونة', fr: 'Conditions du bien gagé', en: 'Pledged Item Conditions' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      { text: { ar: 'أن يكون مالاً يصح بيعه', fr: 'Être un bien vendable', en: 'Be sellable property' }, detail: { ar: '✅ سيارة، منزل، ذهب، أسهم | ❌ خمر، خنزير، مال مسروق', fr: '✅ Voiture, maison, or | ❌ Alcool, porc, vol', en: '✅ Car, house, gold | ❌ Alcohol, pork, stolen' } },
      { text: { ar: 'أن يكون معيناً معلوماً', fr: 'Être déterminé et connu', en: 'Be specified and known' }, detail: { ar: '✅ "هذه السيارة" | ❌ "إحدى سياراتي" (مجهول)', fr: '✅ "Cette voiture" | ❌ "Une de mes voitures"', en: '✅ "This car" | ❌ "One of my cars"' } },
      { text: { ar: 'أن يكون مقدوراً على تسليمه', fr: 'Pouvoir être livré', en: 'Be deliverable' }, detail: { ar: '❌ رهن طائر في الهواء، مال غائب لا يُعرف مكانه', fr: '❌ Oiseau en vol, bien disparu', en: '❌ Bird in flight, missing property' } }
    ]
  },

  'rahn-binding': {
    type: 'summary',
    title: { ar: 'لزوم عقد الرهن', fr: 'Force contraignante du gage', en: 'Binding Nature of Pledge' },
    rows: [
      { item: { ar: 'الراهن (المدين)', fr: 'Débiteur', en: 'Debtor' }, ruling: 'halal', notes: { ar: 'لازم في حقه، لا يسترد الرهن حتى يسدد', fr: 'Contraignant, ne récupère le gage qu\'après remboursement', en: 'Binding, cannot retrieve pledge until repayment' } },
      { item: { ar: 'المرتهن (الدائن)', fr: 'Créancier', en: 'Creditor' }, ruling: 'mubah', notes: { ar: 'جائز، له فسخه متى شاء', fr: 'Peut annuler quand il veut', en: 'Can cancel anytime' } }
    ]
  },

  'rahn-disposal': {
    type: 'comparison',
    title: { ar: 'التصرف في العين المرهونة', fr: 'Disposition du bien gagé', en: 'Disposal of Pledged Item' },
    columns: [
      { title: { ar: 'الراهن (المالك)', fr: 'Débiteur (propriétaire)', en: 'Debtor (owner)' }, variant: 'neutral', items: [
        { ar: 'البيع: ❌ إلا بإذن', fr: 'Vente: ❌ sauf autorisation', en: 'Sale: ❌ except with permission' },
        { ar: 'الإجارة: ❌ إلا بإذن', fr: 'Location: ❌ sauf autorisation', en: 'Rental: ❌ except with permission' },
        { ar: 'الانتفاع: ✅ بما لا يضر', fr: 'Usage: ✅ sans nuire', en: 'Use: ✅ if no harm' }
      ]},
      { title: { ar: 'المرتهن (الحافظ)', fr: 'Créancier (gardien)', en: 'Creditor (keeper)' }, variant: 'negative', items: [
        { ar: 'البيع: ❌ لا يجوز مطلقاً', fr: 'Vente: ❌ jamais', en: 'Sale: ❌ never' },
        { ar: 'الإجارة: ❌ لا يجوز مطلقاً', fr: 'Location: ❌ jamais', en: 'Rental: ❌ never' },
        { ar: 'الانتفاع: ❌ إلا بإذن', fr: 'Usage: ❌ sauf autorisation', en: 'Use: ❌ except with permission' }
      ]}
    ]
  },

  'rahn-mortgagee-use': {
    type: 'summary',
    title: { ar: 'هل يجوز للمرتهن الانتفاع بالرهن؟', fr: 'Le créancier peut-il utiliser le gage?', en: 'Can Creditor Use the Pledge?' },
    rows: [
      { item: { ar: 'بدون إذن الراهن', fr: 'Sans autorisation du débiteur', en: 'Without debtor permission' }, ruling: 'haram', notes: { ar: 'حرام قطعاً', fr: 'Absolument interdit', en: 'Absolutely forbidden' } },
      { item: { ar: 'بإذن الراهن مجاناً', fr: 'Avec autorisation gratuite', en: 'With free permission' }, ruling: 'haram', notes: { ar: 'قرض جر نفعاً', fr: 'Prêt à profit = usure', en: 'Loan with profit = usury' } },
      { item: { ar: 'المركوب والمحلوب فقط', fr: 'Monture et laitière seulement', en: 'Riding and milking animals only' }, ruling: 'halal', notes: { ar: 'بقدر النفقة مقابل إطعامها', fr: 'À hauteur des frais d\'entretien', en: 'To extent of feeding costs' } }
    ]
  },

  'rahn-destruction': {
    type: 'summary',
    title: { ar: 'من يتحمل خسارة هلاك الرهن؟', fr: 'Qui supporte la perte du gage?', en: 'Who Bears Pledge Loss?' },
    rows: [
      { item: { ar: 'هلك بتعدي المرتهن (استعمله فتلف)', fr: 'Détruit par abus du créancier', en: 'Destroyed by creditor misuse' }, ruling: 'haram', notes: { ar: 'يضمن المرتهن', fr: 'Le créancier est responsable', en: 'Creditor is liable' } },
      { item: { ar: 'هلك بتفريط المرتهن (لم يحفظه فسُرق)', fr: 'Détruit par négligence du créancier', en: 'Destroyed by creditor negligence' }, ruling: 'haram', notes: { ar: 'يضمن المرتهن', fr: 'Le créancier est responsable', en: 'Creditor is liable' } },
      { item: { ar: 'هلك بلا تعدٍّ ولا تفريط (حريق، كارثة)', fr: 'Détruit sans faute (incendie, catastrophe)', en: 'Destroyed without fault (fire, disaster)' }, ruling: 'mubah', notes: { ar: 'يهلك على الراهن (لأنه المالك)', fr: 'Le débiteur supporte (propriétaire)', en: 'Debtor bears loss (owner)' } }
    ]
  },

  'qard-rahn-summary': {
    type: 'summary',
    title: { ar: '🎯 ملخص: القرض والرهن', fr: '🎯 Résumé: Prêt et Gage', en: '🎯 Summary: Loan and Pledge' },
    rows: [
      { item: { ar: 'القرض الحسن = دفع مال يُرد بدله', fr: 'Prêt bienveillant = argent remboursable', en: 'Benevolent loan = repayable money' }, ruling: 'halal' },
      { item: { ar: 'كل قرض جرَّ نفعاً = ربا', fr: 'Tout prêt à profit = usure', en: 'Any loan with profit = usury' }, ruling: 'haram' },
      { item: { ar: 'الزيادة التطوعية عند السداد = حُسن القضاء', fr: 'Surplus volontaire = bon remboursement', en: 'Voluntary surplus = good repayment' }, ruling: 'mustahab' },
      { item: { ar: 'الرهن = توثيق دين بعين', fr: 'Gage = garantie par un bien', en: 'Pledge = securing debt with property' }, ruling: 'halal' },
      { item: { ar: 'المرهون ملك الراهن وإن كان عند المرتهن', fr: 'Le gage reste propriété du débiteur', en: 'Pledge remains debtor\'s property' }, ruling: 'halal' },
      { item: { ar: 'لا يجوز للمرتهن الانتفاع بالرهن', fr: 'Le créancier ne peut utiliser le gage', en: 'Creditor cannot use the pledge' }, ruling: 'haram' }
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
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - TAAMIN (Assurance)
  // ─────────────────────────────────────────────────────────
  'taamin-mechanism': {
    type: 'flow',
    title: { ar: 'آلية عقد التأمين', fr: 'Mécanisme du contrat d\'assurance', en: 'Insurance Contract Mechanism' },
    layout: 'vertical',
    steps: [
      {
        title: { ar: 'المؤمَّن له (العميل)', fr: 'L\'assuré (client)', en: 'The insured (client)' },
        description: { ar: 'يدفع أقساطاً شهرية للشركة', fr: 'Paie des primes mensuelles à la compagnie', en: 'Pays monthly premiums to company' },
        variant: 'current'
      },
      {
        title: { ar: 'شركة التأمين', fr: 'Compagnie d\'assurance', en: 'Insurance Company' },
        description: { ar: 'تجمع الأقساط من العملاء', fr: 'Collecte les primes des clients', en: 'Collects premiums from clients' },
        variant: 'default'
      },
      {
        title: { ar: 'إذا وقع الخطر', fr: 'En cas de sinistre', en: 'If risk occurs' },
        description: { ar: 'الشركة تدفع التعويض للعميل', fr: 'La compagnie paie l\'indemnité', en: 'Company pays compensation' },
        variant: 'success'
      },
      {
        title: { ar: 'إذا لم يقع الخطر', fr: 'Sans sinistre', en: 'If no risk occurs' },
        description: { ar: 'الشركة تحتفظ بالأقساط كلها', fr: 'La compagnie garde toutes les primes', en: 'Company keeps all premiums' },
        variant: 'warning'
      }
    ]
  },

  'taamin-types': {
    type: 'ruling',
    title: { ar: 'أنواع التأمين التجاري', fr: 'Types d\'assurance commerciale', en: 'Types of Commercial Insurance' },
    rulingType: 'info',
    numbered: true,
    items: [
      {
        text: { ar: 'التأمين الصحي', fr: 'Assurance maladie', en: 'Health insurance' },
        detail: { ar: 'تغطية تكاليف العلاج والأدوية والعمليات', fr: 'Couverture des frais médicaux', en: 'Coverage of medical expenses' }
      },
      {
        text: { ar: 'التأمين على الحياة', fr: 'Assurance vie', en: 'Life insurance' },
        detail: { ar: 'أقساط تُدفع، مبلغ يُصرف للورثة عند الوفاة', fr: 'Primes payées, montant versé aux héritiers', en: 'Premiums paid, amount given to heirs' }
      },
      {
        text: { ar: 'التأمين على السيارات', fr: 'Assurance automobile', en: 'Car insurance' },
        detail: { ar: 'ضد الحوادث والسرقة والأضرار للغير', fr: 'Contre accidents, vol, dommages tiers', en: 'Against accidents, theft, third-party damage' }
      },
      {
        text: { ar: 'التأمين على الممتلكات', fr: 'Assurance biens', en: 'Property insurance' },
        detail: { ar: 'ضد الحريق والسرقة والكوارث الطبيعية', fr: 'Contre incendie, vol, catastrophes', en: 'Against fire, theft, disasters' }
      },
      {
        text: { ar: 'التأمين على السفر', fr: 'Assurance voyage', en: 'Travel insurance' },
        detail: { ar: 'ضد إلغاء الرحلة والحوادث والمرض في السفر', fr: 'Contre annulation, accidents, maladie', en: 'Against cancellation, accidents, illness' }
      }
    ]
  },

  'taamin-prohibition-reasons': {
    type: 'ruling',
    title: { ar: 'علل تحريم التأمين التجاري', fr: 'Raisons de l\'interdiction de l\'assurance', en: 'Reasons for Insurance Prohibition' },
    rulingType: 'prohibitions',
    numbered: true,
    items: [
      {
        text: { ar: 'الغرر الفاحش', fr: 'Incertitude excessive (Gharar)', en: 'Excessive uncertainty (Gharar)' },
        detail: { ar: 'لا يعلم العميل هل سيحصل على تعويض أم لا', fr: 'Le client ne sait pas s\'il sera indemnisé', en: 'Client doesn\'t know if compensated' }
      },
      {
        text: { ar: 'الربا', fr: 'Usure (Riba)', en: 'Usury (Riba)' },
        detail: { ar: 'مبادلة المال بالمال مع التفاوت والتأجيل', fr: 'Échange d\'argent avec disparité', en: 'Money exchange with disparity' }
      },
      {
        text: { ar: 'القمار (الميسر)', fr: 'Jeu de hasard (Maysir)', en: 'Gambling (Maysir)' },
        detail: { ar: 'أحد الطرفين رابح والآخر خاسر حتماً', fr: 'Un gagnant et un perdant inévitables', en: 'One wins, one loses inevitably' }
      },
      {
        text: { ar: 'أكل أموال الناس بالباطل', fr: 'Consommation illicite des biens', en: 'Consuming wealth unlawfully' },
        detail: { ar: 'الأقساط تذهب للشركة دون مقابل حقيقي', fr: 'Primes vont sans contrepartie réelle', en: 'Premiums go without real return' }
      }
    ]
  },

  'taamin-gharar': {
    type: 'comparison',
    title: { ar: 'الغرر في التأمين', fr: 'L\'incertitude dans l\'assurance', en: 'Uncertainty in Insurance' },
    columns: [
      {
        title: { ar: 'الجهة', fr: 'Partie', en: 'Party' },
        variant: 'neutral',
        items: [
          { ar: 'المؤمَّن له', fr: 'L\'assuré', en: 'The insured' },
          { ar: 'المؤمَّن له', fr: 'L\'assuré', en: 'The insured' },
          { ar: 'شركة التأمين', fr: 'Compagnie', en: 'Company' }
        ]
      },
      {
        title: { ar: 'وجه الغرر', fr: 'Aspect d\'incertitude', en: 'Uncertainty aspect' },
        variant: 'negative',
        items: [
          { ar: 'لا يعلم هل سيحصل على تعويض أم لا', fr: 'Ne sait pas s\'il sera indemnisé', en: 'Doesn\'t know if compensated' },
          { ar: 'لا يعلم كم سيدفع من أقساط', fr: 'Ne sait pas combien il paiera', en: 'Doesn\'t know how much to pay' },
          { ar: 'لا تعلم كم ستدفع من تعويضات', fr: 'Ne sait pas combien elle paiera', en: 'Doesn\'t know compensation amount' }
        ]
      }
    ]
  },

  'taamin-riba': {
    type: 'ruling',
    title: { ar: 'الربا في التأمين', fr: 'L\'usure dans l\'assurance', en: 'Usury in Insurance' },
    rulingType: 'info',
    numbered: false,
    items: [
      {
        text: { ar: 'الأقساط = مال ← التعويض = مال', fr: 'Primes = argent ← Indemnité = argent', en: 'Premiums = money ← Compensation = money' }
      },
      {
        text: { ar: 'المبادلة بينهما دون تساوٍ = ربا فضل', fr: 'Échange sans égalité = Riba al-Fadl', en: 'Exchange without equality = Riba al-Fadl' }
      },
      {
        text: { ar: 'المبادلة بينهما مع التأجيل = ربا نسيئة', fr: 'Échange avec délai = Riba al-Nasiah', en: 'Exchange with delay = Riba al-Nasiah' }
      }
    ],
    footer: { ar: 'مثال: دفعتُ ٦٠٠٠ ريال ← حصلتُ على ١٠٠,٠٠٠ ريال = ٩٤,٠٠٠ بلا مقابل مشروع', fr: 'Exemple: J\'ai payé 6000 ← J\'ai reçu 100 000 = 94 000 sans contrepartie licite', en: 'Example: Paid 6000 ← Received 100,000 = 94,000 without lawful return' }
  },

  'taamin-gambling-comparison': {
    type: 'comparison',
    title: { ar: 'وجه الشبه بين التأمين والقمار', fr: 'Similitude entre assurance et jeu', en: 'Similarity between Insurance and Gambling' },
    columns: [
      {
        title: { ar: 'القمار', fr: 'Jeu de hasard', en: 'Gambling' },
        variant: 'negative',
        items: [
          { ar: 'أدفع مبلغاً', fr: 'Je paie un montant', en: 'I pay an amount' },
          { ar: 'أنتظر النتيجة', fr: 'J\'attends le résultat', en: 'I wait for result' },
          { ar: 'إما أربح أو أخسر', fr: 'Je gagne ou je perds', en: 'I win or lose' },
          { ar: 'النتيجة احتمالية', fr: 'Résultat probabiliste', en: 'Probabilistic result' }
        ]
      },
      {
        title: { ar: 'التأمين', fr: 'Assurance', en: 'Insurance' },
        variant: 'negative',
        items: [
          { ar: 'أدفع أقساطاً', fr: 'Je paie des primes', en: 'I pay premiums' },
          { ar: 'أنتظر وقوع الخطر', fr: 'J\'attends le sinistre', en: 'I wait for risk' },
          { ar: 'إما تعويض أو لا شيء', fr: 'Indemnité ou rien', en: 'Compensation or nothing' },
          { ar: 'النتيجة احتمالية', fr: 'Résultat probabiliste', en: 'Probabilistic result' }
        ]
      }
    ]
  },

  'taamin-commercial-vs-takaful': {
    type: 'comparison',
    title: { ar: 'مقارنة: التأمين التجاري vs التكافلي', fr: 'Comparaison: Commercial vs Takaful', en: 'Comparison: Commercial vs Takaful' },
    columns: [
      {
        title: { ar: 'التأمين التجاري', fr: 'Assurance commerciale', en: 'Commercial Insurance' },
        variant: 'negative',
        items: [
          { ar: 'عقد معاوضة (ربح مقابل مال)', fr: 'Contrat d\'échange (profit contre argent)', en: 'Exchange contract (profit for money)' },
          { ar: 'هدفه الربح للشركة', fr: 'Objectif: profit de la compagnie', en: 'Goal: company profit' },
          { ar: 'الأقساط ملك للشركة', fr: 'Primes appartiennent à la compagnie', en: 'Premiums belong to company' },
          { ar: 'الفائض للشركة', fr: 'Surplus pour la compagnie', en: 'Surplus for company' },
          { ar: 'علاقة تجارية', fr: 'Relation commerciale', en: 'Commercial relationship' },
          { ar: 'غرر وربا وقمار', fr: 'Gharar, Riba et Maysir', en: 'Gharar, Riba and Maysir' }
        ]
      },
      {
        title: { ar: 'التأمين التكافلي', fr: 'Assurance Takaful', en: 'Takaful Insurance' },
        variant: 'positive',
        items: [
          { ar: 'عقد تبرع (تعاون)', fr: 'Contrat de don (coopération)', en: 'Donation contract (cooperation)' },
          { ar: 'هدفه التكافل والتعاون', fr: 'Objectif: solidarité et coopération', en: 'Goal: solidarity and cooperation' },
          { ar: 'الأقساط ملك للمشتركين', fr: 'Primes appartiennent aux participants', en: 'Premiums belong to participants' },
          { ar: 'الفائض للمشتركين', fr: 'Surplus pour les participants', en: 'Surplus for participants' },
          { ar: 'علاقة تكافلية', fr: 'Relation de solidarité', en: 'Solidarity relationship' },
          { ar: 'تبرع وتعاون', fr: 'Don et coopération', en: 'Donation and cooperation' }
        ]
      }
    ]
  },

  'takaful-evidence': {
    type: 'ruling',
    title: { ar: 'أدلة التأمين التكافلي', fr: 'Preuves du Takaful', en: 'Evidence for Takaful' },
    rulingType: 'recommended',
    numbered: false,
    items: [
      {
        text: { ar: 'من القرآن', fr: 'Du Coran', en: 'From Quran' },
        detail: { ar: '﴿وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ﴾', fr: '﴿Entraidez-vous dans la piété﴾', en: '﴿Cooperate in righteousness﴾' }
      },
      {
        text: { ar: 'من السنة', fr: 'De la Sunna', en: 'From Sunnah' },
        detail: { ar: '«المؤمنون كالجسد الواحد» - «المؤمن للمؤمن كالبنيان»', fr: '«Les croyants sont comme un seul corps»', en: '«Believers are like one body»' }
      },
      {
        text: { ar: 'من فعل الصحابة', fr: 'Pratique des Compagnons', en: 'Companions\' practice' },
        detail: { ar: 'نظام العاقلة: تحمل العصبة لدية القتل الخطأ', fr: 'Système Aqilah: clan paie la diya', en: 'Aqilah system: clan pays blood money' }
      }
    ]
  },

  'takaful-pillars': {
    type: 'tree',
    title: { ar: 'أركان التأمين التعاوني', fr: 'Piliers de l\'assurance coopérative', en: 'Pillars of Cooperative Insurance' },
    branches: [
      {
        label: { ar: 'المشتركون', fr: 'Les participants', en: 'Participants' },
        description: { ar: 'المتبرعون والمستفيدون معاً', fr: 'Donateurs et bénéficiaires', en: 'Donors and beneficiaries' },
        variant: 'success'
      },
      {
        label: { ar: 'الصندوق', fr: 'Le fonds', en: 'The fund' },
        description: { ar: 'مملوك للمشتركين، منفصل عن الشركة', fr: 'Propriété des participants, séparé', en: 'Owned by participants, separate' },
        variant: 'success'
      },
      {
        label: { ar: 'الشركة المديرة', fr: 'La société gestionnaire', en: 'Managing company' },
        description: { ar: 'تدير فقط بالوكالة أو المضاربة', fr: 'Gère par Wakala ou Mudaraba', en: 'Manages by Wakala or Mudaraba' },
        variant: 'default'
      },
      {
        label: { ar: 'الاشتراكات', fr: 'Les cotisations', en: 'Contributions' },
        description: { ar: 'على سبيل التبرع لا المعاوضة', fr: 'À titre de don, non d\'échange', en: 'As donation, not exchange' },
        variant: 'success'
      }
    ]
  },

  'takaful-conditions': {
    type: 'ruling',
    title: { ar: 'شروط صحة التأمين التعاوني', fr: 'Conditions de validité du Takaful', en: 'Takaful Validity Conditions' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      {
        text: { ar: 'نية التبرع', fr: 'Intention de don', en: 'Donation intention' },
        detail: { ar: 'الاشتراك تبرع لا معاوضة', fr: 'Participation comme don, non échange', en: 'Participation as donation, not exchange' }
      },
      {
        text: { ar: 'ملكية الصندوق للمشتركين', fr: 'Propriété du fonds aux participants', en: 'Fund owned by participants' },
        detail: { ar: 'الأقساط والأرباح ملك للمشتركين، الشركة مجرد مدير', fr: 'Primes et profits aux participants', en: 'Premiums and profits to participants' }
      },
      {
        text: { ar: 'استثمار الأموال بطرق مشروعة', fr: 'Investissement licite', en: 'Lawful investment' },
        detail: { ar: 'لا يجوز الاستثمار في الربا أو المحرمات', fr: 'Pas d\'investissement dans l\'usure', en: 'No investment in usury' }
      },
      {
        text: { ar: 'الفائض للمشتركين', fr: 'Surplus aux participants', en: 'Surplus to participants' },
        detail: { ar: 'ما زاد عن التعويضات يُوزع أو يُرحَّل', fr: 'L\'excédent est distribué ou reporté', en: 'Excess distributed or carried over' }
      },
      {
        text: { ar: 'وجود هيئة شرعية', fr: 'Comité de charia', en: 'Sharia board' },
        detail: { ar: 'للرقابة والتأكد من موافقة العمليات للشريعة', fr: 'Pour supervision et conformité', en: 'For supervision and compliance' }
      }
    ]
  },

  'takaful-models': {
    type: 'ruling',
    title: { ar: 'نماذج التأمين التكافلي', fr: 'Modèles de Takaful', en: 'Takaful Models' },
    rulingType: 'info',
    numbered: false,
    items: [
      {
        text: { ar: 'نموذج الوكالة', fr: 'Modèle Wakala', en: 'Wakala Model' },
        detail: { ar: 'الشركة = وكيل، الأجر = مقطوع أو نسبة، الفائض = للمشتركين', fr: 'Compagnie = agent, frais fixes ou %', en: 'Company = agent, fixed or % fee' }
      },
      {
        text: { ar: 'نموذج المضاربة', fr: 'Modèle Mudaraba', en: 'Mudaraba Model' },
        detail: { ar: 'الشركة = مضارب، الأجر = نسبة من أرباح الاستثمار', fr: 'Compagnie = mudarib, % des profits', en: 'Company = mudarib, % of profits' }
      },
      {
        text: { ar: 'النموذج المختلط (الوكالة + المضاربة)', fr: 'Modèle mixte', en: 'Mixed Model' },
        detail: { ar: 'وكيل في إدارة التأمين، مضارب في الاستثمار', fr: 'Agent pour gestion, mudarib pour investissement', en: 'Agent for management, mudarib for investment' }
      }
    ]
  },

  'takaful-health': {
    type: 'ruling',
    title: { ar: 'التأمين الصحي التكافلي', fr: 'Assurance santé Takaful', en: 'Takaful Health Insurance' },
    rulingType: 'info',
    numbered: false,
    items: [
      {
        text: { ar: 'الصورة', fr: 'Fonctionnement', en: 'How it works' },
        subitems: [
          { ar: 'المشتركون يدفعون اشتراكات شهرية (تبرع)', fr: 'Participants paient des cotisations (don)', en: 'Participants pay contributions (donation)' },
          { ar: 'الاشتراكات تُجمع في صندوق مشترك', fr: 'Cotisations collectées dans un fonds commun', en: 'Contributions collected in common fund' },
          { ar: 'تُغطى نفقات العلاج من الصندوق', fr: 'Frais médicaux couverts par le fonds', en: 'Medical expenses covered from fund' },
          { ar: 'الفائض يُوزع على المشتركين أو يُرحَّل', fr: 'Surplus distribué ou reporté', en: 'Surplus distributed or carried over' }
        ]
      },
      {
        text: { ar: 'الضوابط', fr: 'Règles', en: 'Rules' },
        subitems: [
          { ar: 'لا تغطية للمحرمات (كالتجميل غير الضروري)', fr: 'Pas de couverture pour l\'illicite', en: 'No coverage for forbidden' },
          { ar: 'لا إسراف في العلاج', fr: 'Pas d\'excès dans le traitement', en: 'No excess in treatment' },
          { ar: 'استثمار الأموال في الحلال', fr: 'Investissement licite', en: 'Lawful investment' }
        ]
      }
    ]
  },

  'takaful-car': {
    type: 'ruling',
    title: { ar: 'تأمين السيارات التكافلي', fr: 'Assurance auto Takaful', en: 'Takaful Car Insurance' },
    rulingType: 'info',
    numbered: false,
    items: [
      {
        text: { ar: 'الصورة', fr: 'Fonctionnement', en: 'How it works' },
        subitems: [
          { ar: 'أصحاب السيارات يدفعون اشتراكات (تبرع)', fr: 'Propriétaires paient des cotisations', en: 'Owners pay contributions' },
          { ar: 'الأضرار تُعوَّض من الصندوق المشترك', fr: 'Dommages indemnisés du fonds', en: 'Damages compensated from fund' },
          { ar: 'الشركة تدير بالوكالة', fr: 'Compagnie gère par Wakala', en: 'Company manages by Wakala' },
          { ar: 'الفائض للمشتركين', fr: 'Surplus aux participants', en: 'Surplus to participants' }
        ]
      },
      {
        text: { ar: 'التحديات', fr: 'Défis', en: 'Challenges' },
        subitems: [
          { ar: 'التأمين الإلزامي في بعض الدول', fr: 'Assurance obligatoire dans certains pays', en: 'Mandatory insurance in some countries' },
          { ar: 'الحل: البحث عن شركة تكافلية مرخصة', fr: 'Solution: chercher une compagnie Takaful', en: 'Solution: find licensed Takaful company' }
        ]
      }
    ]
  },

  'takaful-family': {
    type: 'flow',
    title: { ar: 'التكافل العائلي (بديل التأمين على الحياة)', fr: 'Takaful familial (alternative à l\'assurance vie)', en: 'Family Takaful (life insurance alternative)' },
    layout: 'vertical',
    steps: [
      {
        title: { ar: 'المشترك يدفع قسطين', fr: 'Le participant paie deux parts', en: 'Participant pays two parts' },
        description: { ar: 'قسط تبرع ← لصندوق التكافل | قسط ادخار ← يبقى له ويُستثمر', fr: 'Don → fonds Takaful | Épargne → lui appartient', en: 'Donation → Takaful fund | Savings → stays with him' },
        variant: 'current'
      },
      {
        title: { ar: 'عند الوفاة', fr: 'En cas de décès', en: 'In case of death' },
        description: { ar: 'يُدفع للورثة: مبلغ التكافل + المدخرات + أرباحها', fr: 'Héritiers reçoivent: Takaful + épargne + profits', en: 'Heirs receive: Takaful + savings + profits' },
        variant: 'warning'
      },
      {
        title: { ar: 'عند البقاء (انتهاء المدة)', fr: 'À échéance (survie)', en: 'At maturity (survival)' },
        description: { ar: 'يحصل المشترك على: مدخراته + أرباحها', fr: 'Participant reçoit: épargne + profits', en: 'Participant receives: savings + profits' },
        variant: 'success'
      }
    ]
  },

  'taamin-summary': {
    type: 'summary',
    title: { ar: 'خلاصة أحكام التأمين', fr: 'Résumé des règles d\'assurance', en: 'Summary of Insurance Rules' },
    rows: [
      {
        item: { ar: 'التأمين التجاري', fr: 'Assurance commerciale', en: 'Commercial insurance' },
        ruling: 'haram',
        notes: { ar: 'غرر + ربا + قمار', fr: 'Gharar + Riba + Maysir', en: 'Gharar + Riba + Maysir' }
      },
      {
        item: { ar: 'التأمين التعاوني (التكافلي)', fr: 'Assurance Takaful', en: 'Takaful insurance' },
        ruling: 'halal',
        notes: { ar: 'مبني على التبرع والتعاون', fr: 'Basé sur le don et la coopération', en: 'Based on donation and cooperation' }
      },
      {
        item: { ar: 'التأمين الإلزامي', fr: 'Assurance obligatoire', en: 'Mandatory insurance' },
        ruling: 'conditional',
        notes: { ar: 'ضرورة إذا لم يوجد بديل تكافلي', fr: 'Nécessité si pas d\'alternative Takaful', en: 'Necessity if no Takaful alternative' }
      }
    ]
  },

  'takaful-guidelines': {
    type: 'ruling',
    title: { ar: 'الضوابط الشرعية للتأمين التكافلي', fr: 'Directives charia pour Takaful', en: 'Sharia Guidelines for Takaful' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      {
        text: { ar: 'نية التبرع (لا المعاوضة)', fr: 'Intention de don (pas d\'échange)', en: 'Donation intention (not exchange)' }
      },
      {
        text: { ar: 'فصل أموال المشتركين عن أموال الشركة', fr: 'Séparation des fonds participants/compagnie', en: 'Separation of participant/company funds' }
      },
      {
        text: { ar: 'استثمار الأموال في الحلال فقط', fr: 'Investissement licite uniquement', en: 'Lawful investment only' }
      },
      {
        text: { ar: 'الفائض للمشتركين (لا للشركة)', fr: 'Surplus aux participants (pas à la compagnie)', en: 'Surplus to participants (not company)' }
      },
      {
        text: { ar: 'الرقابة الشرعية من هيئة متخصصة', fr: 'Supervision par comité spécialisé', en: 'Supervision by specialized board' }
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - MASRAFIYYAH (Banking)
  // ─────────────────────────────────────────────────────────
  'bank-functions': {
    type: 'ruling',
    title: { ar: 'وظائف المصارف', fr: 'Fonctions des banques', en: 'Bank Functions' },
    rulingType: 'info',
    numbered: true,
    items: [
      {
        text: { ar: 'قبول الودائع', fr: 'Accepter les dépôts', en: 'Accept deposits' },
        detail: { ar: 'حفظ أموال العملاء وإتاحة السحب', fr: 'Garder l\'argent des clients', en: 'Keep clients\' money' }
      },
      {
        text: { ar: 'تقديم التمويل', fr: 'Fournir le financement', en: 'Provide financing' },
        detail: { ar: 'تمويل المشاريع والأفراد', fr: 'Financer projets et particuliers', en: 'Finance projects and individuals' }
      },
      {
        text: { ar: 'الخدمات المالية', fr: 'Services financiers', en: 'Financial services' },
        detail: { ar: 'التحويلات، البطاقات، خطابات الضمان', fr: 'Transferts, cartes, garanties', en: 'Transfers, cards, guarantees' }
      },
      {
        text: { ar: 'الاستثمار', fr: 'Investissement', en: 'Investment' },
        detail: { ar: 'استثمار الأموال وتنميتها', fr: 'Investir et faire fructifier', en: 'Invest and grow funds' }
      }
    ]
  },

  'banks-comparison': {
    type: 'comparison',
    title: { ar: 'المقارنة: البنوك التقليدية vs الإسلامية', fr: 'Comparaison: Banques conventionnelles vs Islamiques', en: 'Comparison: Conventional vs Islamic Banks' },
    columns: [
      {
        title: { ar: 'البنوك التقليدية', fr: 'Banques conventionnelles', en: 'Conventional Banks' },
        variant: 'negative',
        items: [
          { ar: 'تعمل بالفائدة (الربا)', fr: 'Fonctionnent avec intérêts (usure)', en: 'Work with interest (usury)' },
          { ar: 'الفائدة ثابتة مضمونة', fr: 'Intérêt fixe garanti', en: 'Fixed guaranteed interest' },
          { ar: 'لا رقابة شرعية', fr: 'Pas de supervision charia', en: 'No sharia supervision' },
          { ar: 'التمويل بالإقراض بفائدة', fr: 'Financement par prêt à intérêt', en: 'Financing by interest loan' },
          { ar: 'المال يولّد مالاً', fr: 'L\'argent engendre l\'argent', en: 'Money generates money' },
          { ar: 'حرام بإجماع العلماء', fr: 'Interdit par consensus', en: 'Forbidden by consensus' }
        ]
      },
      {
        title: { ar: 'البنوك الإسلامية', fr: 'Banques islamiques', en: 'Islamic Banks' },
        variant: 'positive',
        items: [
          { ar: 'تعمل بالعقود الشرعية', fr: 'Fonctionnent avec contrats conformes', en: 'Work with sharia contracts' },
          { ar: 'الربح والخسارة مشتركة', fr: 'Profit et perte partagés', en: 'Shared profit and loss' },
          { ar: 'هيئة شرعية للرقابة', fr: 'Comité charia de supervision', en: 'Sharia supervisory board' },
          { ar: 'التمويل بالبيع والإجارة', fr: 'Financement par vente et location', en: 'Financing by sale and lease' },
          { ar: 'المال يُستثمر بالعمل', fr: 'L\'argent investi par le travail', en: 'Money invested through work' },
          { ar: 'حلال بالضوابط الشرعية', fr: 'Licite selon les règles charia', en: 'Lawful with sharia rules' }
        ]
      }
    ]
  },

  'murabaha-conditions': {
    type: 'ruling',
    title: { ar: 'شروط صحة المرابحة', fr: 'Conditions de validité de la Murabaha', en: 'Murabaha Validity Conditions' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      {
        text: { ar: 'ملكية البنك للسلعة', fr: 'Propriété de la banque', en: 'Bank ownership' },
        detail: { ar: 'يجب أن يمتلك البنك السلعة قبل بيعها', fr: 'La banque doit posséder avant de vendre', en: 'Bank must own before selling' }
      },
      {
        text: { ar: 'قبض البنك للسلعة', fr: 'Réception par la banque', en: 'Bank reception' },
        detail: { ar: 'يجب أن يقبض البنك السلعة حقيقة أو حكماً', fr: 'La banque doit recevoir réellement ou virtuellement', en: 'Bank must receive actually or constructively' }
      },
      {
        text: { ar: 'تحمل البنك للمخاطر', fr: 'Risque assumé par la banque', en: 'Bank bears risk' },
        detail: { ar: 'البنك يتحمل مخاطر الهلاك قبل البيع (الخراج بالضمان)', fr: 'La banque assume le risque de perte', en: 'Bank assumes loss risk' }
      },
      {
        text: { ar: 'الوعد غير ملزم', fr: 'Promesse non contraignante', en: 'Promise not binding' },
        detail: { ar: 'الوعد بالشراء غير ملزم شرعاً عند الجمهور', fr: 'Promesse d\'achat non obligatoire', en: 'Purchase promise not obligatory' }
      }
    ]
  },

  'murabaha-prohibitions': {
    type: 'ruling',
    title: { ar: 'محظورات المرابحة', fr: 'Interdits de la Murabaha', en: 'Murabaha Prohibitions' },
    rulingType: 'prohibitions',
    numbered: false,
    items: [
      {
        text: { ar: 'بيع السلعة قبل تملكها', fr: 'Vendre avant de posséder', en: 'Selling before owning' },
        detail: { ar: 'قال ﷺ: "لا تبع ما ليس عندك"', fr: 'Le Prophète ﷺ a dit: "Ne vends pas ce que tu n\'as pas"', en: 'Prophet ﷺ said: "Don\'t sell what you don\'t have"' }
      },
      {
        text: { ar: 'توكيل العميل بالشراء لنفسه', fr: 'Mandater le client pour s\'acheter lui-même', en: 'Client buying for himself' },
        detail: { ar: 'العينة المحرمة: حيلة ربوية', fr: 'Inah interdit: ruse usuraire', en: 'Forbidden Inah: usurious trick' }
      },
      {
        text: { ar: 'إلزام العميل بالشراء قبل التملك', fr: 'Obliger le client avant possession', en: 'Binding client before ownership' },
        detail: { ar: 'الوعد يصير ملزماً فقط بعد تملك البنك', fr: 'Promesse contraignante après possession', en: 'Promise binding after ownership' }
      },
      {
        text: { ar: 'غرامات التأخير الربوية', fr: 'Pénalités de retard usuraires', en: 'Usurious late penalties' },
        detail: { ar: 'الغرامة النسبية على التأخير = ربا', fr: 'Pénalité proportionnelle = usure', en: 'Proportional penalty = usury' }
      }
    ]
  },

  'ijara-muntahiya': {
    type: 'ruling',
    title: { ar: 'صور الإجارة المنتهية بالتمليك', fr: 'Formes de location-vente', en: 'Lease-to-Own Forms' },
    rulingType: 'info',
    numbered: false,
    items: [
      {
        text: { ar: 'الصورة الأولى: الإجارة مع الوعد بالهبة', fr: 'Forme 1: Location avec promesse de don', en: 'Form 1: Lease with gift promise' },
        subitems: [
          { ar: 'عقد إجارة مستقل', fr: 'Contrat de location séparé', en: 'Separate lease contract' },
          { ar: 'وعد بهبة العين في النهاية', fr: 'Promesse de don à la fin', en: 'Gift promise at end' },
          { ar: 'التملك بعقد هبة منفصل', fr: 'Transfert par don séparé', en: 'Transfer by separate gift' }
        ]
      },
      {
        text: { ar: 'الصورة الثانية: الإجارة مع الوعد بالبيع', fr: 'Forme 2: Location avec promesse de vente', en: 'Form 2: Lease with sale promise' },
        subitems: [
          { ar: 'عقد إجارة مستقل', fr: 'Contrat de location séparé', en: 'Separate lease contract' },
          { ar: 'وعد ببيع العين بثمن رمزي في النهاية', fr: 'Promesse de vente à prix symbolique', en: 'Sale promise at symbolic price' },
          { ar: 'التملك بعقد بيع منفصل', fr: 'Transfert par vente séparée', en: 'Transfer by separate sale' }
        ]
      }
    ],
    footer: { ar: 'المفتاح: فصل عقد الإجارة عن عقد التملك', fr: 'Clé: séparer location et transfert', en: 'Key: separate lease and transfer' }
  },

  'ijara-conditions': {
    type: 'ruling',
    title: { ar: 'شروط الإجارة المنتهية بالتمليك', fr: 'Conditions de la location-vente', en: 'Lease-to-Own Conditions' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      {
        text: { ar: 'فصل عقد الإجارة عن عقد التملك', fr: 'Séparer location et transfert', en: 'Separate lease and transfer' },
        detail: { ar: 'عقدان منفصلان، لا عقد واحد', fr: 'Deux contrats séparés', en: 'Two separate contracts' }
      },
      {
        text: { ar: 'تحمل المؤجر لمخاطر الهلاك طوال مدة الإجارة', fr: 'Bailleur assume le risque de perte', en: 'Lessor bears loss risk' },
        detail: { ar: 'العين ملكه، فهو يتحمل مخاطرها', fr: 'Le bien lui appartient, il assume le risque', en: 'Property is his, he bears risk' }
      },
      {
        text: { ar: 'أن يكون الإيجار بأجر المثل', fr: 'Loyer au prix du marché', en: 'Rent at market rate' },
        detail: { ar: 'لا إيجار مُبالغ فيه ليُخفي الفائدة', fr: 'Pas de loyer excessif cachant l\'intérêt', en: 'No excessive rent hiding interest' }
      },
      {
        text: { ar: 'عدم إلزام المستأجر بالشراء', fr: 'Locataire non obligé d\'acheter', en: 'Lessee not obligated to buy' },
        detail: { ar: 'الوعد غير ملزم من جانب المستأجر', fr: 'Promesse non contraignante pour le locataire', en: 'Promise not binding on lessee' }
      }
    ]
  },

  'musharaka-mutanaqisa': {
    type: 'flow',
    title: { ar: 'المشاركة المتناقصة - التطبيق العملي', fr: 'Musharaka dégressive - Application', en: 'Diminishing Partnership - Application' },
    layout: 'vertical',
    steps: [
      {
        title: { ar: 'البداية: البنك 80% | العميل 20%', fr: 'Début: Banque 80% | Client 20%', en: 'Start: Bank 80% | Client 20%' },
        description: { ar: 'شراكة أولية بنسب متفق عليها', fr: 'Partenariat initial avec parts convenues', en: 'Initial partnership with agreed shares' },
        variant: 'default'
      },
      {
        title: { ar: 'السنة 2: البنك 60% | العميل 40%', fr: 'Année 2: Banque 60% | Client 40%', en: 'Year 2: Bank 60% | Client 40%' },
        description: { ar: 'العميل يشتري حصصاً تدريجياً', fr: 'Client achète des parts progressivement', en: 'Client buys shares gradually' },
        variant: 'current'
      },
      {
        title: { ar: 'السنة 5: البنك 20% | العميل 80%', fr: 'Année 5: Banque 20% | Client 80%', en: 'Year 5: Bank 20% | Client 80%' },
        description: { ar: 'حصة البنك تتناقص', fr: 'Part de la banque diminue', en: 'Bank share decreases' },
        variant: 'current'
      },
      {
        title: { ar: 'النهاية: العميل 100% مالك كامل 🏠', fr: 'Fin: Client 100% propriétaire', en: 'End: Client 100% owner' },
        description: { ar: 'أثناء الشراكة: العميل يدفع إيجار حصة البنك', fr: 'Pendant: client paie loyer part banque', en: 'During: client pays rent on bank share' },
        variant: 'success'
      }
    ]
  },

  'musharaka-conditions': {
    type: 'ruling',
    title: { ar: 'شروط المشاركة المتناقصة', fr: 'Conditions de la Musharaka dégressive', en: 'Diminishing Partnership Conditions' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      {
        text: { ar: 'الشراكة حقيقية', fr: 'Partenariat réel', en: 'Real partnership' },
        detail: { ar: 'كلاهما يتحمل الربح والخسارة، ليست قرضاً مُقنّعاً', fr: 'Les deux partagent profit/perte, pas un prêt déguisé', en: 'Both share profit/loss, not disguised loan' }
      },
      {
        text: { ar: 'الإيجار بسعر السوق', fr: 'Loyer au prix du marché', en: 'Rent at market rate' },
        detail: { ar: 'لا يكون صورياً أو مُبالغاً فيه', fr: 'Pas fictif ni excessif', en: 'Not fictitious or excessive' }
      },
      {
        text: { ar: 'البيع بعقد مستقل', fr: 'Vente par contrat séparé', en: 'Sale by separate contract' },
        detail: { ar: 'كل عملية شراء حصة بعقد منفصل', fr: 'Chaque achat de part par contrat séparé', en: 'Each share purchase by separate contract' }
      },
      {
        text: { ar: 'تحمل المخاطر بالنسبة', fr: 'Risque selon la part', en: 'Risk according to share' },
        detail: { ar: 'كل شريك يتحمل بقدر حصته (لو تهدم المنزل: البنك 80%، العميل 20%)', fr: 'Chacun assume selon sa part', en: 'Each bears according to share' }
      }
    ]
  },

  'istisna-banking': {
    type: 'ruling',
    title: { ar: 'الاستصناع المصرفي', fr: 'Istisna bancaire', en: 'Banking Istisna' },
    rulingType: 'info',
    numbered: false,
    items: [
      {
        text: { ar: 'التعريف', fr: 'Définition', en: 'Definition' },
        detail: { ar: 'تعاقد على صناعة شيء بمواصفات محددة', fr: 'Contrat pour fabriquer selon spécifications', en: 'Contract to manufacture per specifications' }
      },
      {
        text: { ar: 'تطبيقه في البنوك', fr: 'Application bancaire', en: 'Banking application' },
        subitems: [
          { ar: 'تمويل بناء العقارات', fr: 'Financement de construction immobilière', en: 'Real estate construction financing' },
          { ar: 'تمويل تصنيع المعدات', fr: 'Financement de fabrication d\'équipements', en: 'Equipment manufacturing financing' },
          { ar: 'تمويل المشاريع الإنشائية', fr: 'Financement de projets de construction', en: 'Construction project financing' }
        ]
      },
      {
        text: { ar: 'آلية العمل', fr: 'Mécanisme', en: 'Mechanism' },
        subitems: [
          { ar: 'العميل ← يطلب بناء مبنى بمواصفات', fr: 'Client → demande construction selon spécifications', en: 'Client → requests building per specs' },
          { ar: 'البنك ← يتعاقد مع المقاول (استصناع موازٍ)', fr: 'Banque → contracte avec entrepreneur', en: 'Bank → contracts with contractor' },
          { ar: 'المقاول ← يُنفذ ويُسلم للبنك', fr: 'Entrepreneur → exécute et livre à la banque', en: 'Contractor → executes and delivers to bank' },
          { ar: 'البنك ← يُسلم للعميل بربح', fr: 'Banque → livre au client avec profit', en: 'Bank → delivers to client with profit' }
        ]
      }
    ]
  },

  'current-account': {
    type: 'ruling',
    title: { ar: 'الحساب الجاري', fr: 'Compte courant', en: 'Current Account' },
    rulingType: 'info',
    numbered: false,
    items: [
      {
        text: { ar: 'آلية العمل', fr: 'Fonctionnement', en: 'How it works' },
        subitems: [
          { ar: 'العميل يودع ماله في البنك', fr: 'Client dépose son argent à la banque', en: 'Client deposits money at bank' },
          { ar: 'يسحب متى شاء', fr: 'Retire quand il veut', en: 'Withdraws when he wants' },
          { ar: 'البنك يستخدمه في عملياته', fr: 'Banque l\'utilise dans ses opérations', en: 'Bank uses it in operations' },
          { ar: 'لا فائدة للعميل ولا على العميل', fr: 'Pas d\'intérêt pour ou contre le client', en: 'No interest for or against client' }
        ]
      },
      {
        text: { ar: 'التكييف الشرعي', fr: 'Qualification juridique', en: 'Legal classification' },
        detail: { ar: 'قرض من العميل للبنك، والبنك يضمن رده عند الطلب', fr: 'Prêt du client à la banque, banque garantit remboursement', en: 'Loan from client to bank, bank guarantees repayment' }
      }
    ],
    footer: { ar: 'الحكم: جائز بشرط عدم أخذ أو إعطاء فائدة', fr: 'Règle: licite sans intérêt', en: 'Ruling: lawful without interest' }
  },

  'investment-account': {
    type: 'flow',
    title: { ar: 'الحساب الاستثماري', fr: 'Compte d\'investissement', en: 'Investment Account' },
    layout: 'vertical',
    steps: [
      {
        title: { ar: 'العميل (رب المال)', fr: 'Client (bailleur de fonds)', en: 'Client (capital provider)' },
        description: { ar: 'يودع أمواله للاستثمار', fr: 'Dépose ses fonds pour investissement', en: 'Deposits funds for investment' },
        variant: 'default'
      },
      {
        title: { ar: 'البنك (المضارب)', fr: 'Banque (gestionnaire)', en: 'Bank (manager)' },
        description: { ar: 'يستثمر الأموال بعقد المضاربة', fr: 'Investit les fonds par Mudaraba', en: 'Invests funds through Mudaraba' },
        variant: 'current'
      },
      {
        title: { ar: 'توزيع الأرباح', fr: 'Distribution des profits', en: 'Profit distribution' },
        description: { ar: 'حسب الاتفاق (مثلاً 70% للعميل، 30% للبنك)', fr: 'Selon accord (ex: 70% client, 30% banque)', en: 'Per agreement (e.g., 70% client, 30% bank)' },
        variant: 'success'
      },
      {
        title: { ar: 'الخسارة', fr: 'Perte', en: 'Loss' },
        description: { ar: 'على رأس المال (العميل) إلا بتعدٍّ من البنك', fr: 'Sur le capital (client) sauf faute de la banque', en: 'On capital (client) except bank negligence' },
        variant: 'warning'
      }
    ]
  },

  'investment-account-conditions': {
    type: 'ruling',
    title: { ar: 'شروط الحساب الاستثماري', fr: 'Conditions du compte d\'investissement', en: 'Investment Account Conditions' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      {
        text: { ar: 'عدم ضمان رأس المال', fr: 'Pas de garantie du capital', en: 'No capital guarantee' },
        detail: { ar: 'لو ضمن البنك رأس المال ← صار قرضاً بفائدة', fr: 'Si banque garantit → devient prêt à intérêt', en: 'If bank guarantees → becomes interest loan' }
      },
      {
        text: { ar: 'عدم ضمان نسبة ربح محددة', fr: 'Pas de taux de profit garanti', en: 'No guaranteed profit rate' },
        detail: { ar: 'الربح قد يزيد أو ينقص أو ينعدم', fr: 'Profit peut augmenter, diminuer ou disparaître', en: 'Profit may increase, decrease or disappear' }
      },
      {
        text: { ar: 'توزيع الربح بنسبة لا بمبلغ مقطوع', fr: 'Profit par pourcentage, pas montant fixe', en: 'Profit by percentage, not fixed amount' },
        detail: { ar: '✅ 70% للعميل، 30% للبنك | ❌ 1000 ريال للعميل شهرياً', fr: '✅ 70% client, 30% banque | ❌ 1000 SAR/mois', en: '✅ 70% client, 30% bank | ❌ 1000 SAR/month' }
      },
      {
        text: { ar: 'استثمار الأموال في الحلال', fr: 'Investissement licite', en: 'Lawful investment' },
        detail: { ar: 'لا يستثمرها البنك في الحرام', fr: 'Banque n\'investit pas dans l\'illicite', en: 'Bank doesn\'t invest in forbidden' }
      }
    ]
  },

  'savings-account': {
    type: 'comparison',
    title: { ar: 'حساب التوفير', fr: 'Compte d\'épargne', en: 'Savings Account' },
    columns: [
      {
        title: { ar: 'إذا كان', fr: 'Si c\'est', en: 'If it is' },
        variant: 'neutral',
        items: [
          { ar: 'قرضاً بفائدة', fr: 'Prêt à intérêt', en: 'Interest loan' },
          { ar: 'قرضاً بلا فائدة', fr: 'Prêt sans intérêt', en: 'Interest-free loan' },
          { ar: 'مضاربة', fr: 'Mudaraba', en: 'Mudaraba' }
        ]
      },
      {
        title: { ar: 'يُعامل', fr: 'Traité comme', en: 'Treated as' },
        variant: 'neutral',
        items: [
          { ar: '❌ حرام (ربا)', fr: '❌ Interdit (usure)', en: '❌ Forbidden (usury)' },
          { ar: '✅ حلال', fr: '✅ Licite', en: '✅ Lawful' },
          { ar: '✅ حلال بشروطها', fr: '✅ Licite avec conditions', en: '✅ Lawful with conditions' }
        ]
      }
    ]
  },

  'atm-card': {
    type: 'ruling',
    title: { ar: 'بطاقة الصراف الآلي (ATM)', fr: 'Carte de retrait (ATM)', en: 'ATM Card' },
    rulingType: 'info',
    numbered: false,
    items: [
      {
        text: { ar: 'تعريفها', fr: 'Définition', en: 'Definition' },
        detail: { ar: 'بطاقة للسحب من الحساب عبر أجهزة الصراف', fr: 'Carte pour retirer via distributeurs', en: 'Card to withdraw via ATMs' }
      },
      {
        text: { ar: 'حقيقتها', fr: 'Nature', en: 'Nature' },
        detail: { ar: 'وسيلة لقبض المال المملوك', fr: 'Moyen de recevoir son propre argent', en: 'Means to receive owned money' }
      },
      {
        text: { ar: 'العمولة', fr: 'Commission', en: 'Fee' },
        detail: { ar: 'جائزة إذا كانت مقابل الخدمة', fr: 'Licite si pour le service', en: 'Lawful if for service' }
      }
    ],
    footer: { ar: 'الحكم: جائزة', fr: 'Règle: licite', en: 'Ruling: lawful' }
  },

  'debit-card': {
    type: 'ruling',
    title: { ar: 'بطاقة الخصم المباشر (Debit Card)', fr: 'Carte de débit', en: 'Debit Card' },
    rulingType: 'info',
    numbered: false,
    items: [
      {
        text: { ar: 'تعريفها', fr: 'Définition', en: 'Definition' },
        detail: { ar: 'بطاقة للدفع تُخصم من الحساب مباشرة', fr: 'Carte qui débite directement le compte', en: 'Card that debits account directly' }
      },
      {
        text: { ar: 'آلية عملها', fr: 'Fonctionnement', en: 'How it works' },
        detail: { ar: 'العميل يشتري ← المحل يمرر البطاقة ← المبلغ يُخصم فوراً', fr: 'Client achète → magasin passe la carte → débit immédiat', en: 'Client buys → store swipes card → immediate debit' }
      },
      {
        text: { ar: 'العمولة', fr: 'Commission', en: 'Fee' },
        detail: { ar: 'جائزة إذا كانت مقابل خدمة حقيقية', fr: 'Licite si pour service réel', en: 'Lawful if for real service' }
      }
    ],
    footer: { ar: 'الحكم: جائزة', fr: 'Règle: licite', en: 'Ruling: lawful' }
  },

  'credit-card-types': {
    type: 'ruling',
    title: { ar: 'بطاقات الائتمان - الأنواع والحكم', fr: 'Cartes de crédit - Types et règles', en: 'Credit Cards - Types and Rules' },
    rulingType: 'info',
    numbered: false,
    items: [
      {
        text: { ar: 'النوع الأول: بطاقة بدون فوائد', fr: 'Type 1: Carte sans intérêts', en: 'Type 1: Card without interest' },
        subitems: [
          { ar: 'السداد الكامل قبل تاريخ الاستحقاق', fr: 'Paiement complet avant échéance', en: 'Full payment before due date' },
          { ar: 'لا فوائد ولا غرامات', fr: 'Pas d\'intérêts ni pénalités', en: 'No interest or penalties' },
          { ar: '✅ الحكم: جائزة', fr: '✅ Règle: licite', en: '✅ Ruling: lawful' }
        ]
      },
      {
        text: { ar: 'النوع الثاني: بطاقة بفوائد', fr: 'Type 2: Carte avec intérêts', en: 'Type 2: Card with interest' },
        subitems: [
          { ar: 'فائدة على التأخير في السداد', fr: 'Intérêt sur retard de paiement', en: 'Interest on late payment' },
          { ar: 'فائدة على التقسيط', fr: 'Intérêt sur échelonnement', en: 'Interest on installments' },
          { ar: '❌ الحكم: محرمة', fr: '❌ Règle: interdite', en: '❌ Ruling: forbidden' }
        ]
      },
      {
        text: { ar: 'البديل الإسلامي', fr: 'Alternative islamique', en: 'Islamic alternative' },
        subitems: [
          { ar: 'بطاقات البنوك الإسلامية', fr: 'Cartes des banques islamiques', en: 'Islamic bank cards' },
          { ar: 'رسوم ثابتة بدلاً من الفوائد', fr: 'Frais fixes au lieu d\'intérêts', en: 'Fixed fees instead of interest' },
          { ar: 'هيئة شرعية تراقب العمليات', fr: 'Comité charia supervise les opérations', en: 'Sharia board supervises operations' }
        ]
      }
    ]
  },

  'money-transfers': {
    type: 'ruling',
    title: { ar: 'التحويلات المالية', fr: 'Transferts d\'argent', en: 'Money Transfers' },
    rulingType: 'info',
    numbered: false,
    items: [
      {
        text: { ar: 'تعريفها', fr: 'Définition', en: 'Definition' },
        detail: { ar: 'نقل الأموال من مكان لآخر أو من عملة لأخرى', fr: 'Transfert d\'argent d\'un lieu à l\'autre ou d\'une devise à l\'autre', en: 'Moving money from place to place or currency to currency' }
      },
      {
        text: { ar: 'التكييف الشرعي', fr: 'Qualification juridique', en: 'Legal classification' },
        subitems: [
          { ar: 'بنفس العملة ← وكالة بأجر', fr: 'Même devise → mandat rémunéré', en: 'Same currency → paid agency' },
          { ar: 'بعملة مختلفة ← صرف ووكالة', fr: 'Devise différente → change et mandat', en: 'Different currency → exchange and agency' }
        ]
      },
      {
        text: { ar: 'الشروط', fr: 'Conditions', en: 'Conditions' },
        subitems: [
          { ar: 'التقابض في تحويل العملات (ولو حكماً)', fr: 'Échange simultané pour devises', en: 'Simultaneous exchange for currencies' },
          { ar: 'أن تكون العمولة مقابل خدمة حقيقية', fr: 'Commission pour service réel', en: 'Fee for real service' },
          { ar: 'عدم تأخير وصول الأموال دون عذر', fr: 'Pas de retard sans excuse', en: 'No delay without excuse' }
        ]
      }
    ],
    footer: { ar: 'الحكم: جائزة بالضوابط', fr: 'Règle: licite avec conditions', en: 'Ruling: lawful with conditions' }
  },

  'letter-of-guarantee': {
    type: 'ruling',
    title: { ar: 'خطابات الضمان', fr: 'Lettres de garantie', en: 'Letters of Guarantee' },
    rulingType: 'info',
    numbered: false,
    items: [
      {
        text: { ar: 'التعريف', fr: 'Définition', en: 'Definition' },
        detail: { ar: 'تعهد كتابي من البنك بدفع مبلغ معين للمستفيد عند المطالبة', fr: 'Engagement écrit de la banque à payer au bénéficiaire', en: 'Written commitment by bank to pay beneficiary' }
      },
      {
        text: { ar: 'التكييف الشرعي', fr: 'Qualification juridique', en: 'Legal classification' },
        detail: { ar: 'كفالة، والبنك كفيل', fr: 'Garantie, la banque est garante', en: 'Surety, bank is guarantor' }
      },
      {
        text: { ar: 'آلية العمل', fr: 'Mécanisme', en: 'Mechanism' },
        subitems: [
          { ar: 'العميل ← يطلب خطاب ضمان من البنك', fr: 'Client → demande lettre de garantie', en: 'Client → requests letter of guarantee' },
          { ar: 'البنك ← يُصدر خطاباً يتعهد فيه بالدفع', fr: 'Banque → émet lettre s\'engageant à payer', en: 'Bank → issues letter committing to pay' },
          { ar: 'المستفيد ← يطمئن أن المبلغ مضمون', fr: 'Bénéficiaire → rassuré que le montant est garanti', en: 'Beneficiary → assured amount is guaranteed' }
        ]
      },
      {
        text: { ar: 'حكم العمولة', fr: 'Règle de la commission', en: 'Fee ruling' },
        subitems: [
          { ar: 'مقابل المصاريف الإدارية ← ✅ جائزة', fr: 'Pour frais administratifs → ✅ licite', en: 'For admin costs → ✅ lawful' },
          { ar: 'نسبة من المبلغ المضمون ← ⚠️ فيها خلاف', fr: 'Pourcentage du montant → ⚠️ contesté', en: 'Percentage of amount → ⚠️ disputed' }
        ]
      }
    ]
  },

  'documentary-credit': {
    type: 'ruling',
    title: { ar: 'الاعتمادات المستندية', fr: 'Crédits documentaires', en: 'Documentary Credits' },
    rulingType: 'info',
    numbered: false,
    items: [
      {
        text: { ar: 'تعريفها', fr: 'Définition', en: 'Definition' },
        detail: { ar: 'تعهد من البنك بالدفع للبائع مقابل تسليم المستندات (في التجارة الدولية)', fr: 'Engagement de la banque à payer le vendeur contre documents', en: 'Bank commitment to pay seller against documents' }
      },
      {
        text: { ar: 'آلية العمل', fr: 'Mécanisme', en: 'Mechanism' },
        subitems: [
          { ar: 'المستورد ← يطلب من البنك فتح اعتماد', fr: 'Importateur → demande ouverture de crédit', en: 'Importer → requests credit opening' },
          { ar: 'البنك ← يتعهد بالدفع للمُصدِّر عند تسليم المستندات', fr: 'Banque → s\'engage à payer l\'exportateur contre documents', en: 'Bank → commits to pay exporter against documents' },
          { ar: 'المُصدِّر ← يُشحن البضاعة ويُسلم المستندات', fr: 'Exportateur → expédie et remet documents', en: 'Exporter → ships and submits documents' },
          { ar: 'البنك ← يدفع للمُصدِّر، ويُحصّل من المستورد', fr: 'Banque → paie exportateur, récupère de l\'importateur', en: 'Bank → pays exporter, collects from importer' }
        ]
      },
      {
        text: { ar: 'التكييف', fr: 'Qualification', en: 'Classification' },
        detail: { ar: 'وكالة بأجر + كفالة', fr: 'Mandat rémunéré + garantie', en: 'Paid agency + surety' }
      }
    ],
    footer: { ar: 'الحكم: جائزة بالضوابط الشرعية', fr: 'Règle: licite avec conditions charia', en: 'Ruling: lawful with sharia conditions' }
  },

  'banking-prohibitions': {
    type: 'ruling',
    title: { ar: 'المحظورات في البنوك الإسلامية', fr: 'Interdits dans les banques islamiques', en: 'Prohibitions in Islamic Banks' },
    rulingType: 'prohibitions',
    numbered: false,
    items: [
      {
        text: { ar: 'أولاً: الفائدة الربوية', fr: 'Premièrement: Intérêt usuraire', en: 'First: Usurious interest' },
        subitems: [
          { ar: 'الفائدة على القروض', fr: 'Intérêt sur prêts', en: 'Interest on loans' },
          { ar: 'الفائدة على التأخير', fr: 'Intérêt sur retard', en: 'Interest on delay' },
          { ar: 'الفائدة على الحسابات', fr: 'Intérêt sur comptes', en: 'Interest on accounts' }
        ],
        detail: { ar: 'محرمة قطعاً بالقرآن والسنة والإجماع', fr: 'Absolument interdit par Coran, Sunna et consensus', en: 'Absolutely forbidden by Quran, Sunnah and consensus' }
      },
      {
        text: { ar: 'ثانياً: الغرر الفاحش', fr: 'Deuxièmement: Incertitude excessive', en: 'Second: Excessive uncertainty' },
        subitems: [
          { ar: 'العقود المبهمة', fr: 'Contrats ambigus', en: 'Ambiguous contracts' },
          { ar: 'الشروط غير الواضحة', fr: 'Conditions non claires', en: 'Unclear conditions' },
          { ar: 'المخاطر غير المحسوبة', fr: 'Risques non calculés', en: 'Uncalculated risks' }
        ]
      },
      {
        text: { ar: 'ثالثاً: التمويل المحرم', fr: 'Troisièmement: Financement illicite', en: 'Third: Forbidden financing' },
        subitems: [
          { ar: 'تمويل مشاريع محرمة (خمور، قمار...)', fr: 'Financer projets illicites (alcool, jeux...)', en: 'Finance forbidden projects (alcohol, gambling...)' },
          { ar: 'شراء أسهم شركات محرمة', fr: 'Acheter actions de sociétés illicites', en: 'Buy shares of forbidden companies' },
          { ar: 'الاستثمار في السندات الربوية', fr: 'Investir dans obligations usuraires', en: 'Invest in usurious bonds' }
        ]
      }
    ]
  },

  'islamic-bank-criteria': {
    type: 'ruling',
    title: { ar: 'معايير اختيار البنك الإسلامي', fr: 'Critères de choix d\'une banque islamique', en: 'Criteria for Choosing Islamic Bank' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      {
        text: { ar: 'وجود هيئة شرعية مستقلة', fr: 'Comité charia indépendant', en: 'Independent sharia board' },
        detail: { ar: 'تراقب العمليات وتُفتي في المسائل', fr: 'Supervise les opérations et émet des fatwas', en: 'Supervises operations and issues fatwas' }
      },
      {
        text: { ar: 'الشفافية في العقود والعمليات', fr: 'Transparence des contrats et opérations', en: 'Transparency in contracts and operations' },
        detail: { ar: 'عقود واضحة، لا شروط مخفية', fr: 'Contrats clairs, pas de conditions cachées', en: 'Clear contracts, no hidden terms' }
      },
      {
        text: { ar: 'الالتزام بالمعايير الشرعية الصادرة عن المجامع', fr: 'Respect des normes charia des académies', en: 'Compliance with sharia standards from academies' },
        detail: { ar: 'معايير أيوفي (AAOIFI) ومجمع الفقه الإسلامي', fr: 'Normes AAOIFI et Académie du Fiqh', en: 'AAOIFI and Islamic Fiqh Academy standards' }
      },
      {
        text: { ar: 'فصل الأموال بين الحسابات المختلفة', fr: 'Séparation des fonds entre comptes', en: 'Separation of funds between accounts' },
        detail: { ar: 'أموال المضاربة منفصلة عن أموال البنك', fr: 'Fonds Mudaraba séparés des fonds de la banque', en: 'Mudaraba funds separate from bank funds' }
      },
      {
        text: { ar: 'التدقيق الشرعي الدوري على العمليات', fr: 'Audit charia périodique', en: 'Periodic sharia audit' },
        detail: { ar: 'مراجعة سنوية من الهيئة الشرعية', fr: 'Révision annuelle par le comité charia', en: 'Annual review by sharia board' }
      }
    ]
  },

  'masrafiyyah-summary': {
    type: 'summary',
    title: { ar: 'خلاصة أحكام المعاملات المصرفية', fr: 'Résumé des règles bancaires', en: 'Summary of Banking Rules' },
    rows: [
      {
        item: { ar: 'المرابحة', fr: 'Murabaha', en: 'Murabaha' },
        ruling: 'conditional',
        notes: { ar: 'بيع بربح، جائزة بشروط', fr: 'Vente avec profit, licite avec conditions', en: 'Sale with profit, lawful with conditions' }
      },
      {
        item: { ar: 'الإجارة المنتهية بالتمليك', fr: 'Location-vente', en: 'Lease-to-own' },
        ruling: 'conditional',
        notes: { ar: 'إجارة + وعد، جائزة بشروط', fr: 'Location + promesse, licite avec conditions', en: 'Lease + promise, lawful with conditions' }
      },
      {
        item: { ar: 'المشاركة المتناقصة', fr: 'Musharaka dégressive', en: 'Diminishing partnership' },
        ruling: 'halal',
        notes: { ar: 'شراكة حقيقية، جائزة', fr: 'Vrai partenariat, licite', en: 'Real partnership, lawful' }
      },
      {
        item: { ar: 'الحساب الجاري', fr: 'Compte courant', en: 'Current account' },
        ruling: 'conditional',
        notes: { ar: 'قرض، جائز بلا فائدة', fr: 'Prêt, licite sans intérêt', en: 'Loan, lawful without interest' }
      },
      {
        item: { ar: 'الحساب الاستثماري', fr: 'Compte d\'investissement', en: 'Investment account' },
        ruling: 'halal',
        notes: { ar: 'مضاربة، جائز', fr: 'Mudaraba, licite', en: 'Mudaraba, lawful' }
      },
      {
        item: { ar: 'بطاقة الائتمان', fr: 'Carte de crédit', en: 'Credit card' },
        ruling: 'conditional',
        notes: { ar: 'قرض، جائز إن خلت من الفوائد', fr: 'Prêt, licite si sans intérêts', en: 'Loan, lawful if interest-free' }
      }
    ]
  },

  'banking-principles': {
    type: 'ruling',
    title: { ar: 'القواعد الأساسية في المعاملات المصرفية', fr: 'Principes fondamentaux bancaires', en: 'Fundamental Banking Principles' },
    rulingType: 'conditions',
    numbered: true,
    items: [
      {
        text: { ar: 'كل ما فيه ربا أو غرر فاحش محرم', fr: 'Tout ce qui contient usure ou incertitude excessive est interdit', en: 'Everything with usury or excessive uncertainty is forbidden' }
      },
      {
        text: { ar: 'البديل الإسلامي متاح لكل معاملة تقريباً', fr: 'L\'alternative islamique existe pour presque toute transaction', en: 'Islamic alternative available for almost every transaction' }
      },
      {
        text: { ar: 'الرقابة الشرعية ضرورية للتأكد من المشروعية', fr: 'Supervision charia nécessaire pour assurer la conformité', en: 'Sharia supervision necessary to ensure compliance' }
      },
      {
        text: { ar: '"الحلال أغلى" ← لكنه أبرك', fr: '"Le licite est plus cher" → mais plus béni', en: '"Halal is more expensive" → but more blessed' }
      },
      {
        text: { ar: 'العبرة بحقيقة العقد لا بالنتيجة المادية', fr: 'Ce qui compte est la réalité du contrat, pas le résultat financier', en: 'What matters is contract reality, not financial result' }
      }
    ],
    footer: { ar: 'قال الله تعالى: ﴿وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا﴾', fr: 'Allah a dit: ﴿Allah a rendu licite le commerce et illicite l\'usure﴾', en: 'Allah said: ﴿Allah has made trade lawful and usury unlawful﴾' }
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - AHKAM BUYU (Lesson 002)
  // ─────────────────────────────────────────────────────────
  'sale-wisdom': {
    type: 'tree',
    title: { ar: '🎯 لماذا شُرع البيع؟', fr: '🎯 Pourquoi la vente a-t-elle été légiférée ?', en: '🎯 Why was sale legislated?' },
    root: { ar: 'التعاون بين الناس', fr: 'Coopération entre les gens', en: 'Cooperation among people' },
    branches: [
      {
        label: { ar: 'تحقيق التبادل', fr: 'Réaliser l\'échange', en: 'Enable exchange' },
        description: { ar: 'ما عندك قد يحتاجه غيرك', fr: 'Ce que tu as peut être utile à autrui', en: 'What you have may be needed by others' },
        variant: 'default'
      },
      {
        label: { ar: 'تسهيل المعيشة', fr: 'Faciliter la vie', en: 'Facilitate living' },
        description: { ar: 'تلبية الحاجات المختلفة', fr: 'Satisfaire les besoins', en: 'Meeting needs' },
        variant: 'default'
      },
      {
        label: { ar: 'تنمية الثروة', fr: 'Développer la richesse', en: 'Develop wealth' },
        description: { ar: 'الحث على العمل والتجارة', fr: 'Encourager le travail', en: 'Encouraging work & trade' },
        variant: 'default'
      }
    ]
  },

  'sale-pillars': {
    type: 'tree',
    title: { ar: '📝 أركان البيع الثلاثة', fr: '📝 Les trois piliers de la vente', en: '📝 The Three Pillars of Sale' },
    branches: [
      {
        label: { ar: 'العاقدان', fr: 'Les contractants', en: 'The Contracting Parties' },
        description: { ar: 'البائع والمشتري', fr: 'Le vendeur et l\'acheteur', en: 'Seller & Buyer' },
        variant: 'default'
      },
      {
        label: { ar: 'الصيغة', fr: 'La formule', en: 'The Formula' },
        description: { ar: 'الإيجاب والقبول', fr: 'L\'offre et l\'acceptation', en: 'Offer and Acceptance' },
        variant: 'default'
      },
      {
        label: { ar: 'المعقود عليه', fr: 'L\'objet du contrat', en: 'The Subject Matter' },
        description: { ar: 'المبيع والثمن', fr: 'La marchandise et le prix', en: 'Goods & Price' },
        variant: 'default'
      }
    ]
  },

  'bargaining-process': {
    type: 'flow',
    title: { ar: '💬 المساومة', fr: '💬 La Négociation', en: '💬 Bargaining' },
    layout: 'horizontal',
    steps: [
      {
        title: { ar: 'البائع لا يُخبر بثمن الشراء', fr: 'Le vendeur ne dit pas le prix d\'achat', en: 'Seller doesn\'t reveal purchase price' },
        variant: 'default'
      },
      {
        title: { ar: 'المشتري يساوم', fr: 'L\'acheteur négocie', en: 'Buyer bargains' },
        variant: 'current'
      },
      {
        title: { ar: 'يتفقان على سعر', fr: 'Ils s\'accordent sur un prix', en: 'They agree on a price' },
        variant: 'success'
      }
    ]
  },

  'murabaha-process': {
    type: 'flow',
    title: { ar: '📈 المرابحة', fr: '📈 La Murabaha', en: '📈 Murabaha' },
    layout: 'horizontal',
    steps: [
      {
        title: { ar: 'البائع يُخبر بثمن الشراء', fr: 'Le vendeur dit le prix d\'achat', en: 'Seller reveals purchase price' },
        description: { ar: '١٠٠', fr: '100', en: '100' },
        variant: 'default'
      },
      {
        title: { ar: 'يُضيف ربحاً معلوماً', fr: 'Il ajoute un profit connu', en: 'Adds a known profit' },
        description: { ar: '٢٠', fr: '20', en: '20' },
        variant: 'current'
      },
      {
        title: { ar: 'الثمن النهائي', fr: 'Le prix final', en: 'Final price' },
        description: { ar: '١٢٠', fr: '120', en: '120' },
        variant: 'success'
      }
    ]
  },

  'sale-formula-types': {
    type: 'tree',
    title: { ar: '📋 أنواع صيغة البيع', fr: '📋 Types de formule de vente', en: '📋 Types of Sale Formula' },
    branches: [
      {
        label: { ar: 'القولية', fr: 'Verbale', en: 'Verbal' },
        description: { ar: 'بعتُ، اشتريتُ', fr: 'J\'ai vendu, j\'ai acheté', en: 'I sold, I bought' },
        variant: 'default'
      },
      {
        label: { ar: 'الفعلية', fr: 'Pratique', en: 'Practical' },
        description: { ar: 'المعاطاة: التبادل بالفعل', fr: 'Mu\'ataat: échange par l\'action', en: 'Mu\'ataat: exchange by action' },
        variant: 'default'
      },
      {
        label: { ar: 'الكتابية', fr: 'Écrite', en: 'Written' },
        description: { ar: 'العقود المكتوبة، المراسلات', fr: 'Contrats écrits, correspondances', en: 'Written contracts, correspondence' },
        variant: 'default'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - SHURUT BAY (Lesson 003)
  // ─────────────────────────────────────────────────────────
  'sale-conditions-categories': {
    type: 'tree',
    title: { ar: '⚖️ أقسام شروط البيع', fr: '⚖️ Catégories des conditions de vente', en: '⚖️ Categories of Sale Conditions' },
    branches: [
      {
        label: { ar: 'شروط الانعقاد', fr: 'Conditions de conclusion', en: 'Conditions of Conclusion' },
        description: { ar: 'ما يتوقف عليه وجود العقد', fr: 'Ce dont dépend l\'existence du contrat', en: 'What the contract\'s existence depends on' },
        variant: 'default',
        children: [
          { label: { ar: 'إذا تخلف: البيع باطل', fr: 'Si absentes: vente nulle', en: 'If absent: sale is void' }, variant: 'danger' }
        ]
      },
      {
        label: { ar: 'شروط الصحة', fr: 'Conditions de validité', en: 'Conditions of Validity' },
        description: { ar: 'ما يتوقف عليه ترتب الآثار', fr: 'Ce dont dépend la production des effets', en: 'What the production of effects depends on' },
        variant: 'default',
        children: [
          { label: { ar: 'إذا تخلف: البيع فاسد', fr: 'Si absentes: vente viciée', en: 'If absent: sale is defective' }, variant: 'warning' }
        ]
      },
      {
        label: { ar: 'شروط اللزوم', fr: 'Conditions de fermeté', en: 'Conditions of Bindingness' },
        description: { ar: 'ما يتوقف عليه ثبوت العقد', fr: 'Ce dont dépend la fermeté du contrat', en: 'What the firmness of contract depends on' },
        variant: 'default',
        children: [
          { label: { ar: 'إذا تخلف: صحيح غير لازم', fr: 'Si absentes: valide mais résiliable', en: 'If absent: valid but revocable' }, variant: 'success' }
        ]
      }
    ]
  },

  'child-dispositions': {
    type: 'tree',
    title: { ar: '📊 تصرفات الصبي', fr: '📊 Les dispositions de l\'enfant', en: '📊 The Child\'s Dispositions' },
    branches: [
      {
        label: { ar: 'صبي غير مميز', fr: 'Enfant non discernant', en: 'Undiscerning Child' },
        description: { ar: 'دون 7 سنوات', fr: 'moins de 7 ans', en: 'under 7 years' },
        variant: 'danger',
        children: [
          { label: { ar: '❌ لا يصح مطلقاً', fr: '❌ Invalide absolument', en: '❌ Absolutely invalid' }, variant: 'danger' }
        ]
      },
      {
        label: { ar: 'صبي مميز', fr: 'Enfant discernant', en: 'Discerning Child' },
        description: { ar: '7-15 سنة', fr: '7-15 ans', en: '7-15 years' },
        variant: 'warning',
        children: [
          { label: { ar: '🔶 يصح في اليسير بإذن الولي', fr: '🔶 Valide pour petites transactions avec permission', en: '🔶 Valid for minor transactions with permission' }, variant: 'warning' }
        ]
      },
      {
        label: { ar: 'بالغ راشد', fr: 'Adulte responsable', en: 'Responsible Adult' },
        description: { ar: 'فوق 15', fr: 'plus de 15', en: 'over 15' },
        variant: 'success',
        children: [
          { label: { ar: '✅ يصح مطلقاً', fr: '✅ Valide absolument', en: '✅ Absolutely valid' }, variant: 'success' }
        ]
      }
    ]
  },

  'unlawful-items': {
    type: 'tree',
    title: { ar: '🚫 ما لا يصح بيعه (غير متقوم)', fr: '🚫 Ce qu\'on ne peut pas vendre (non licite)', en: '🚫 What Cannot Be Sold (Unlawful)' },
    root: { ar: 'كلها محرمة الانتفاع = لا تُباع', fr: 'Tous interdits d\'usage = non vendables', en: 'All forbidden to use = cannot be sold' },
    branches: [
      { label: { ar: 'الخمر', fr: 'Alcool', en: 'Alcohol' }, variant: 'danger' },
      { label: { ar: 'الخنزير', fr: 'Porc', en: 'Pork' }, variant: 'danger' },
      { label: { ar: 'الميتة', fr: 'Charogne', en: 'Carrion' }, variant: 'danger' },
      { label: { ar: 'المخدرات', fr: 'Drogues', en: 'Drugs' }, variant: 'danger' },
      { label: { ar: 'آلات اللهو', fr: 'Instruments de divertissement interdits', en: 'Forbidden entertainment instruments' }, variant: 'danger' }
    ]
  },

  'price-conditions': {
    type: 'tree',
    title: { ar: '💰 شروط الثمن', fr: '💰 Conditions du prix', en: '💰 Conditions of the Price' },
    branches: [
      {
        label: { ar: 'أن يكون معلوماً', fr: 'Être connu', en: 'Being Known' },
        description: { ar: 'الجنس والقدر والصفة', fr: 'nature, quantité, qualité', en: 'type, quantity, quality' },
        variant: 'default'
      },
      {
        label: { ar: 'أن يكون مقدوراً على تسليمه', fr: 'Être livrable', en: 'Being Deliverable' },
        description: { ar: 'القدرة على الدفع', fr: 'capacité de paiement', en: 'ability to pay' },
        variant: 'default'
      },
      {
        label: { ar: 'أن يكون مملوكاً أو يمكن تحصيله', fr: 'Être possédé ou accessible', en: 'Being Owned or Accessible' },
        variant: 'default'
      }
    ]
  },

  'offer-acceptance-correspondence': {
    type: 'comparison',
    title: { ar: 'التوافق بين الإيجاب والقبول', fr: 'Concordance offre/acceptation', en: 'Offer-Acceptance Correspondence' },
    columns: [
      {
        title: { ar: '✅ التوافق', fr: '✅ Concordance', en: '✅ Correspondence' },
        subtitle: { ar: '= بيع صحيح', fr: '= Vente valide', en: '= Valid sale' },
        variant: 'positive',
        items: [
          { ar: 'البائع: أبيعك السيارة بـ ٥٠ ألف', fr: 'Vendeur: Je te vends la voiture pour 50 000', en: 'Seller: I sell you the car for 50,000' },
          { ar: 'المشتري: قبلتُ بـ ٥٠ ألف', fr: 'Acheteur: J\'accepte pour 50 000', en: 'Buyer: I accept for 50,000' }
        ]
      },
      {
        title: { ar: '❌ عدم التوافق', fr: '❌ Discordance', en: '❌ Discrepancy' },
        subtitle: { ar: '= لا ينعقد', fr: '= Pas de contrat', en: '= No contract' },
        variant: 'negative',
        items: [
          { ar: 'البائع: أبيعك السيارة بـ ٥٠ ألف', fr: 'Vendeur: Je te vends la voiture pour 50 000', en: 'Seller: I sell you the car for 50,000' },
          { ar: 'المشتري: قبلتُ بـ ٤٠ ألف', fr: 'Acheteur: J\'accepte pour 40 000', en: 'Buyer: I accept for 40,000' }
        ]
      }
    ]
  },

  'conditions-types': {
    type: 'tree',
    title: { ar: '📋 أنواع الشروط في البيع', fr: '📋 Types de conditions dans la vente', en: '📋 Types of Conditions in Sale' },
    branches: [
      {
        label: { ar: 'شروط صحيحة', fr: 'Conditions valides', en: 'Valid Conditions' },
        description: { ar: 'تُلزم — يجب الوفاء بها', fr: 'obligatoires — doivent être respectées', en: 'binding — must be fulfilled' },
        variant: 'success'
      },
      {
        label: { ar: 'شروط فاسدة', fr: 'Conditions viciées', en: 'Defective Conditions' },
        description: { ar: 'تبطل وحدها — يبطل الشرط ويصح البيع', fr: 's\'annulent seules — la vente reste', en: 'void themselves — sale remains' },
        variant: 'warning'
      },
      {
        label: { ar: 'شروط تُفسد العقد', fr: 'Conditions qui vicient le contrat', en: 'Conditions That Vitiate Contract' },
        description: { ar: 'يبطل البيع كله', fr: 'La vente est nulle', en: 'The sale is void' },
        variant: 'danger'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // FIQH MUAMALAT - BUYU MUHARRAMAH (Lesson 004)
  // ─────────────────────────────────────────────────────────
  'forbidden-sales-reasons': {
    type: 'tree',
    title: { ar: '🚫 أسباب تحريم البيوع', fr: '🚫 Causes de l\'interdiction des ventes', en: '🚫 Causes of Forbidden Sales' },
    branches: [
      {
        label: { ar: 'الربا', fr: 'Usure', en: 'Usury' },
        description: { ar: 'زيادة بدون مقابل', fr: 'Surplus sans contrepartie', en: 'Surplus without counter-value' },
        variant: 'danger'
      },
      {
        label: { ar: 'الغرر', fr: 'Aléa', en: 'Uncertainty' },
        description: { ar: 'الجهالة والمخاطرة غير المحسوبة', fr: 'Ignorance et risque non calculé', en: 'Ignorance and uncalculated risk' },
        variant: 'danger'
      },
      {
        label: { ar: 'الظلم', fr: 'Injustice', en: 'Injustice' },
        description: { ar: 'أكل الأموال بالباطل', fr: 'Spoliation des biens d\'autrui', en: 'Devouring others\' wealth unjustly' },
        variant: 'danger'
      },
      {
        label: { ar: 'حرمة المبيع', fr: 'Objet illicite', en: 'Unlawful Object' },
        description: { ar: 'الخمر، الخنزير، الأصنام', fr: 'Alcool, porc, idoles', en: 'Alcohol, pork, idols' },
        variant: 'danger'
      }
    ]
  },

  'jahiliyyah-sales': {
    type: 'tree',
    title: { ar: '📊 بيوع الجاهلية المنهي عنها', fr: '📊 Ventes de la Jahiliyya interdites', en: '📊 Forbidden Pre-Islamic Sales' },
    root: { ar: 'كلها غرر وجهالة', fr: 'Tout est aléa et ignorance', en: 'All are uncertainty and ignorance' },
    branches: [
      {
        label: { ar: 'الملامسة', fr: 'Mulamasa (toucher)', en: 'Mulamasa (touch)' },
        description: { ar: 'ما لمسته فهو لك بكذا', fr: 'Ce que tu touches est à toi', en: 'Whatever you touch is yours' },
        variant: 'danger'
      },
      {
        label: { ar: 'المنابذة', fr: 'Munabadha (lancer)', en: 'Munabadha (toss)' },
        description: { ar: 'ما نبذته إليك فهو لك', fr: 'Ce que je te lance est à toi', en: 'Whatever I throw to you is yours' },
        variant: 'danger'
      },
      {
        label: { ar: 'الحصاة', fr: 'Hasah (caillou)', en: 'Hasah (pebble)' },
        description: { ar: 'ما وقعت عليه فهو لك', fr: 'Ce sur quoi tombe le caillou', en: 'Whatever the pebble lands on is yours' },
        variant: 'danger'
      }
    ]
  },

  'animal-forbidden-sales': {
    type: 'tree',
    title: { ar: '🐪 ما لا يجوز بيعه من الحيوان', fr: '🐪 Ce qu\'on ne peut pas vendre des animaux', en: '🐪 What Cannot Be Sold from Animals' },
    root: { ar: 'معدوم + مجهول = غرر', fr: 'Inexistant + inconnu = gharar', en: 'Non-existent + unknown = gharar' },
    branches: [
      {
        label: { ar: 'المضامين', fr: 'Madamin', en: 'Madamin' },
        description: { ar: 'ما في ظهور الفحول (المني)', fr: 'Ce qui est dans les reins des mâles (semence)', en: 'What is in the loins of male animals (semen)' },
        variant: 'danger'
      },
      {
        label: { ar: 'الملاقيح', fr: 'Malaqih', en: 'Malaqih' },
        description: { ar: 'ما في بطون الإناث (الأجنة)', fr: 'Ce qui est dans les ventres des femelles (fœtus)', en: 'What is in the wombs of female animals (fetuses)' },
        variant: 'danger'
      }
    ]
  },

  'hoarding-definition': {
    type: 'ruling',
    title: { ar: '📊 متى يكون الاحتكار محرماً؟', fr: '📊 Quand l\'accaparement est-il interdit ?', en: '📊 When is Hoarding Forbidden?' },
    rulingType: 'conditions',
    numbered: false,
    items: [
      { text: { ar: 'شراء الطعام أو الضروريات', fr: 'Acheter nourriture/nécessités', en: 'Buying food/necessities' } },
      { text: { ar: 'في وقت الغلاء والحاجة', fr: 'En temps de cherté', en: 'In times of scarcity' } },
      { text: { ar: 'لرفع السعر على الناس', fr: 'Pour augmenter les prix', en: 'To raise prices on people' } }
    ],
    footer: { ar: '= احتكار محرم', fr: '= Accaparement interdit', en: '= Forbidden hoarding' }
  },

  'inah-sale-reality': {
    type: 'comparison',
    title: { ar: '💰 حقيقة بيع العينة', fr: '💰 La réalité de la vente \'Ina', en: '💰 The Reality of \'Ina Sale' },
    columns: [
      {
        title: { ar: 'الظاهر', fr: 'Apparence', en: 'Appearance' },
        variant: 'neutral',
        items: [
          { ar: 'بيع ثم شراء', fr: 'Vente puis rachat', en: 'Sale then buyback' },
          { ar: '1000 نقداً', fr: '1000 comptant', en: '1000 cash' }
        ]
      },
      {
        title: { ar: 'الحقيقة', fr: 'Réalité', en: 'Reality' },
        subtitle: { ar: '= ربا مقنَّع', fr: '= Usure déguisée', en: '= Disguised usury' },
        variant: 'negative',
        items: [
          { ar: 'قرض بفائدة!', fr: 'Prêt avec intérêt !', en: 'Loan with interest!' },
          { ar: '1200 مؤجلاً', fr: '1200 à terme', en: '1200 on credit' }
        ]
      }
    ]
  },

  'forbidden-goods': {
    type: 'tree',
    title: { ar: '🚫 المبيعات المحرمة لذاتها', fr: '🚫 Objets interdits à la vente', en: '🚫 Objects Forbidden to Sell' },
    branches: [
      { label: { ar: 'الخمر', fr: 'Alcool', en: 'Alcohol' }, description: { ar: 'حرّم شربها وبيعها', fr: 'Il a interdit sa consommation et sa vente', en: 'He forbade drinking and selling' }, variant: 'danger' },
      { label: { ar: 'الميتة', fr: 'Charogne', en: 'Carrion' }, description: { ar: 'محرم للأكل فحُرِّم بيعه', fr: 'Interdit à la consommation donc sa vente', en: 'Forbidden for eating so its sale' }, variant: 'danger' },
      { label: { ar: 'الخنزير', fr: 'Porc', en: 'Pork' }, description: { ar: 'نص وإجماع', fr: 'Texte et consensus', en: 'Text and consensus' }, variant: 'danger' },
      { label: { ar: 'الأصنام', fr: 'Idoles', en: 'Idols' }, description: { ar: 'كل ما يُعبد من دون الله', fr: 'Tout ce qui est adoré en dehors d\'Allah', en: 'Whatever is worshipped besides Allah' }, variant: 'danger' },
      { label: { ar: 'الكلب', fr: 'Chien', en: 'Dog' }, description: { ar: 'نهى عن ثمنه', fr: 'Il a interdit son prix', en: 'He forbade its price' }, variant: 'warning' }
    ]
  },

  'prohibition-effects': {
    type: 'tree',
    title: { ar: '⚖️ آثار التحريم على العقد', fr: '⚖️ Effets de l\'interdiction sur le contrat', en: '⚖️ Effects of Prohibition on the Contract' },
    branches: [
      {
        label: { ar: 'محرم لذاته', fr: 'Interdit en soi', en: 'Forbidden in itself' },
        description: { ar: 'كالربا', fr: 'comme l\'usure', en: 'like usury' },
        variant: 'danger',
        children: [
          { label: { ar: 'باطل — لا أثر له', fr: 'Nul — sans effet', en: 'Void — no effect' }, variant: 'danger' }
        ]
      },
      {
        label: { ar: 'محرم لوصفه', fr: 'Interdit par un attribut', en: 'Forbidden by an attribute' },
        description: { ar: 'كالنجش', fr: 'comme le Najsh', en: 'like Najsh' },
        variant: 'warning',
        children: [
          { label: { ar: 'صحيح مع الإثم', fr: 'Valide avec péché', en: 'Valid with sin' }, variant: 'warning' }
        ]
      },
      {
        label: { ar: 'محرم لأمر خارج', fr: 'Interdit pour cause externe', en: 'Forbidden for external cause' },
        description: { ar: 'كوقت الجمعة', fr: 'comme le vendredi', en: 'like Friday time' },
        variant: 'warning',
        children: [
          { label: { ar: 'صحيح مع الإثم', fr: 'Valide avec péché', en: 'Valid with sin' }, variant: 'warning' }
        ]
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
