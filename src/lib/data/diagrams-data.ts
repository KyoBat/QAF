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
