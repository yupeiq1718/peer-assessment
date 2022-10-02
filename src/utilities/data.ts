const departments = [
  {
    text: '行政管理部',
    value: '行政管理部'
  },
  {
    text: '品牌公關部',
    value: '品牌公關部'
  },
  {
    text: '研發中心',
    value: '研發中心'
  },
  {
    text: '研發部',
    value: '研發部'
  },
  {
    text: '海外事業部',
    value: '海外事業部'
  },
  {
    text: '財務部',
    value: '財務部'
  },
  {
    text: '商務拓展部',
    value: '商務拓展部'
  },
  {
    text: '產品部',
    value: '產品部'
  },
  {
    text: '業務部',
    value: '業務部'
  },
  {
    text: '設計部',
    value: '設計部'
  }
]

const roleData = [
  {
    value: 1,
    text: '員工'
  },
  {
    value: 2,
    text: '主管'
  },
  {
    value: 3,
    text: '管理員'
  }
]

type QuestionTypes = {
  value: number,
  text: string
}
const questionTypes:QuestionTypes[] = [
  {
    value: 1,
    text: '評分'
  },
  {
    value: 2,
    text: '評分+文字'
  },
  {
    value: 3,
    text: '文字'
  }
]

const systemStatus = [
  {
    value: 0,
    text: '準備中'
  },
  {
    value: 1,
    text: '進行中'
  },
  {
    value: 2,
    text: '暫停中'
  }
]

const getVariants = (index:number) => {
  const variants = ['success', 'alert', 'error', 'info', 'variant1', 'variant2', 'variant3', 'variant4', 'primary', 'secondary']
  const variantIndex = index % variants.length
  return variants[variantIndex]
}

export {
  departments, roleData, questionTypes, systemStatus, getVariants
}
