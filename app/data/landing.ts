export type CampusCenter = {
  id: string
  name: string
  city: string
  focus: string
  rank: number
  rating: number
}

export type Review = {
  id: string
  author: string
  role: string
  campus: string
  text: string
}

export const campusCenters: CampusCenter[] = [
  {
    id: 'nu',
    name: 'Nazarbayev University',
    city: 'Астана',
    focus: 'Исследования, STEM, международные программы',
    rank: 1,
    rating: 4.9,
  },
  {
    id: 'kbtu',
    name: 'КБТУ',
    city: 'Алматы',
    focus: 'Нефть, IT, инженерия и бизнес',
    rank: 2,
    rating: 4.7,
  },
  {
    id: 'satbayev',
    name: 'Satbayev University',
    city: 'Алматы',
    focus: 'Горное дело, архитектура, прикладные науки',
    rank: 3,
    rating: 4.6,
  },
  {
    id: 'aitu',
    name: 'Astana IT University',
    city: 'Астана',
    focus: 'Цифровые технологии и стартап-культура',
    rank: 4,
    rating: 4.5,
  },
  {
    id: 'sdu',
    name: 'Suleyman Demirel University',
    city: 'Каскелен',
    focus: 'Гуманитарные и IT-программы',
    rank: 5,
    rating: 4.4,
  },
]

export const admissionSteps = [
  {
    title: 'Выбор программы',
    text: 'Сравните направления, языки обучения и требования к гранту или платному месту.',
  },
  {
    title: 'Документы и тесты',
    text: 'ЕНТ / IELTS / внутренние экзамены — сроки и чек-листы собраны в одном месте.',
  },
  {
    title: 'Подача заявки',
    text: 'Отслеживайте дедлайны приёмных комиссий и статус документов онлайн.',
  },
  {
    title: 'Зачисление',
    text: 'Получите понятный план: общежитие, ориентация, первые учебные недели.',
  },
]

export const hubStats = [
  { value: '120+', label: 'учебных центров и кампусов' },
  { value: '48k', label: 'сравнений программ за год' },
  { value: '4.6', label: 'средняя оценка по отзывам' },
  { value: '92%', label: 'находят нужный трек за 2 визита' },
]

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Айгерим С.',
    role: 'абитуриент',
    campus: 'Nazarbayev University',
    text: 'Наконец сравнила грантовые места и дедлайны без хаоса в чатах. Рейтинг и реальные отзывы помогли выбрать спокойнее.',
  },
  {
    id: '2',
    author: 'Данияр К.',
    role: 'студент 2 курса',
    campus: 'КБТУ',
    text: 'Раздел поступления объяснил, какие документы реально нужны. Рецензии старшекурсников оказались честнее рекламных буклетов.',
  },
  {
    id: '3',
    author: 'Мадина Т.',
    role: 'родитель',
    campus: 'AITU',
    text: 'Статистика и топ репутации дали опору для разговора с ребёнком. Понятно, где сильный IT, а где сильнее исследования.',
  },
]
