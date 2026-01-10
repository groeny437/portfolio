import { StaticImageData } from "next/image";

export type PortfolioDataProps = {
  data: PortfolioItem;
};

export type WorkListProps = {
  data: PortfolioItem[];
};

export interface PortfolioItem {
  id: number;
  title: string;
  summary: string;
  href: string;
  period: string;
  contribution: string;
  overview: {
    title: string;
    summary: string;
    Image: StaticImageData | string;
  };
  insight: {
    summary: string;
    keywords: string[];
  };
  design: {
    summary: string;
    Images: StaticImageData[] | string[];
  };
  style: {
    summary: string;
    Images: StaticImageData[] | string[];
  };
  mockup: {
    pc: StaticImageData | string;
    mobile: StaticImageData[] | string[];
  };
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "apfel",
    summary: "카페24 기반의 반응형 웹사이트 구축",
    href: "",
    period: "2025.04 ~2025.05",
    contribution: "UI 디자인 80% ･ 인터렉션 디자인 70%",
    overview: {
      title: "NATURE, REFINED INTO EXPERIENCE",
      summary:
        "아펠은 자연 유래 성분을 기반으로 한 프리미엄 뷰티 브랜드입니다. 브랜드의 자연주의 감성과 정제된 분위기를 시각적으로 표현하기 위해, 미니멀한 구조와 잔잔한 인터랙션을 중심으로 온라인 쇼핑 경험을 구축했습니다.",
      Image: "",
    },
    insight: {
      summary:
        "경쟁사 분석과 실무진 요구사항을 종합적으로 검토하며 프로젝트의 현황과 과제를 정리했습니다. 이를 바탕으로 디자인 전반의 방향성과 우선순위를 설정하는 3가지 핵심 인사이트를 도출했습니다.",
      keywords: [
        "브랜드의 자연주의 감성을 모든 화면에서 일관되게 전달",
        "감성을 유지하면서 제품 정보를 쉽게 이해할 수 있는 정보 구조 필요",
        "브랜드 경험 흐름 안에서 자연스럽게 구매로 이어지는 구조가 필요",
      ],
    },
    design: {
      summary:
        "도출된 인사이트를 바탕으로, 브랜드가 전달하고자 하는 인상을 명확히 정의하기 위한 디자인 키워드를 설정했습니다. 각 키워드는 시각적 표현 전반에 일관되게 적용되어, 브랜드 경험의 방향성을 형성합니다.",
      Images: [""],
    },
    style: {
      summary:
        "디자인 키워드를 구체적인 시각 언어로 전환하기 위해 스타일 가이드를 구성했습니다. 타이포그래피와 컬러는 브랜드의 톤을 유지하면서도, 다양한 콘텐츠 환경에서 일관되게 작동하도록 설계되었습니다.",
      Images: [""],
    },
    mockup: {
      pc: "",
      mobile: [""],
    },
  },
  {
    id: 2,
    title: "portfolio",
    summary: "포트폴리오 사이트 구축",
    href: "",
    period: "2025.11 ~ 2025.12",
    contribution: "UI 디자인 100% ･인터렉션 디자인 90%",
    overview: {
      title: "DESIGNING A DEVELOPER’S POINT OF VIEW",
      summary:
        "본 프로젝트는 개발자의 강점을 명확히 전달하기 위해 진행한 개인 포트폴리오 웹사이트 제작 작업입니다. 개발자의 작업 방식과 사고 흐름이 자연스럽게 드러나도록 콘텐츠 구조를 설계하고, 디자인과 개발이 연결되는 경험을 중심으로 정보 구조와 UI를 구성했습니다.",
      Image: "",
    },
    insight: {
      summary:
        "경쟁사 분석과 실무진 요구사항을 종합적으로 검토하며 프로젝트의 현황과 과제를 정리했습니다. 이를 바탕으로 디자인 전반의 방향성과 우선순위를 설정하는 3가지 핵심 인사이트를 도출했습니다.",
      keywords: [
        "개발자의 강점과 전문성이 직관적으로 드러나는 메시지 구조 필요",
        "퍼블리싱 완성도를 보여줄 수 있는 섬세한 인터랙션 설계 필요",
        "프로젝트 디테일 페이지에서 콘텐츠 가독성이 흐려지지 않는 정보 구조 필요",
      ],
    },
    design: {
      summary:
        "도출된 인사이트를 바탕으로, 브랜드가 전달하고자 하는 인상을 명확히 정의하기 위한 디자인 키워드를 설정했습니다. 각 키워드는 시각적 표현 전반에 일관되게 적용되어, 브랜드 경험의 방향성을 형성합니다.",
      Images: [""],
    },
    style: {
      summary:
        "디자인 키워드를 구체적인 시각 언어로 전환하기 위해 스타일 가이드를 구성했습니다. 타이포그래피와 컬러는 브랜드의 톤을 유지하면서도, 다양한 콘텐츠 환경에서 일관되게 작동하도록 설계되었습니다.",
      Images: [""],
    },
    mockup: {
      pc: "",
      mobile: [""],
    },
  },
  {
    id: 3,
    title: "semugo",
    summary: "세무･노무 서비스 웹사이트 리디자인",
    href: "",
    period: "2025.07 ~ 2025.11",
    contribution: "UI 디자인 100% ･ UX 디자인 80% ･ 기획 90%",
    overview: {
      title: "SIMPLIFYING COMPLEX TAX WORKFLOWS",
      summary:
        "세무고는 소상공인과 세무사를 위한 세무 업무 지원 서비스입니다. 기존 세무사 중심의 PC 서비스를 보다 라이트한 형태로 확장해, 소상공인도 직접 세무 업무를 처리할 수 있도록 기획·디자인을 진행했으며, 사용성과 접근성을 중심으로 서비스 경험을 재정비했습니다.",
      Image: "",
    },
    insight: {
      summary:
        "경쟁사 분석과 실무진 요구사항을 종합적으로 검토하며 프로젝트의 현황과 과제를 정리했습니다. 이를 바탕으로 디자인 전반의 방향성과 우선순위를 설정하는 3가지 핵심 인사이트를 도출했습니다.",
      keywords: [
        "소상공인과 세무사는 세무 업무를 처리하는 방식이 다름",
        "정보 이해 수준이 사용자마다 다름",
        "완료 이후 사용자가 다음 행동을 인지하기 어려움",
      ],
    },
    design: {
      summary:
        "도출된 인사이트를 바탕으로, 브랜드가 전달하고자 하는 인상을 명확히 정의하기 위한 디자인 키워드를 설정했습니다. 각 키워드는 시각적 표현 전반에 일관되게 적용되어, 브랜드 경험의 방향성을 형성합니다.",
      Images: [""],
    },
    style: {
      summary:
        "디자인 키워드를 구체적인 시각 언어로 전환하기 위해 스타일 가이드를 구성했습니다. 타이포그래피와 컬러는 브랜드의 톤을 유지하면서도, 다양한 콘텐츠 환경에서 일관되게 작동하도록 설계되었습니다.",
      Images: [""],
    },
    mockup: {
      pc: "",
      mobile: [""],
    },
  },
  {
    id: 4,
    title: "audion",
    summary: "AI 음성 인식 B2B 서비스 대시보드형 디자인",
    href: "",
    period: "2025.05 ~ 2025.06",
    contribution: "UI 디자인 90% ･ UX 디자인 30% ･ 기획 60%",
    overview: {
      title: "BEYOND COMPLEXITY,INTO CLARITY",
      summary:
        "오디온은 AI 음성 인식 기술을 제공하는 B2B API 서비스입니다. 기존의 복잡한 UI를 개선하고, 트렌디한 AI 서비스 이미지를 강화하고자 했습니다. 이에 따라 전체 UI 구조를 재정비하고, 브랜드 경험을 강화하는 방향으로 프로젝트를 진행했습니다.",
      Image: "",
    },
    insight: {
      summary:
        "경쟁사 분석과 실무진 요구사항을 종합적으로 검토하며 프로젝트의 현황과 과제를 정리했습니다. 이를 바탕으로 디자인 전반의 방향성과 우선순위를 설정하는 3가지 핵심 인사이트를 도출했습니다.",
      keywords: [
        "서비스를 한눈에 이해할 수 있는 구조와 사용 흐름 필요",
        "시스템 상태를 명확히 인지할 수 있는 피드백 설계 필요",
        "브랜딩을 통해 B2B 서비스 전달력 강화 필요",
      ],
    },
    design: {
      summary:
        "도출된 인사이트를 바탕으로, 브랜드가 전달하고자 하는 인상을 명확히 정의하기 위한 디자인 키워드를 설정했습니다. 각 키워드는 시각적 표현 전반에 일관되게 적용되어, 브랜드 경험의 방향성을 형성합니다.",
      Images: [""],
    },
    style: {
      summary:
        "디자인 키워드를 구체적인 시각 언어로 전환하기 위해 스타일 가이드를 구성했습니다. 타이포그래피와 컬러는 브랜드의 톤을 유지하면서도, 다양한 콘텐츠 환경에서 일관되게 작동하도록 설계되었습니다.",
      Images: [""],
    },
    mockup: {
      pc: "",
      mobile: [""],
    },
  },
  {
    id: 5,
    title: "ooos",
    summary: "디자인 에이전시 웹사이트 리뉴얼",
    href: "",
    period: "2025.03 ~ 2025.04",
    contribution: "UI 디자인 100% ･ 기획 100%",
    overview: {
      title: "DESIGN BEYOND THE ORDINARY FRAME",
      summary:
        "오오오에스는 브랜드의 메시지를 시각적 경험으로 풀어내는 디자인 스튜디오입니다. 기존 웹사이트의 구조와 콘텐츠 전달 방식을 개선해, 스튜디오의 정체성과 작업 철학이 보다 선명하게 드러나도록 브랜드 메시지를 재정비했습니다.",
      Image: "",
    },
    insight: {
      summary:
        "경쟁사 분석과 실무진 요구사항을 종합적으로 검토하며 프로젝트의 현황과 과제를 정리했습니다. 이를 바탕으로 디자인 전반의 방향성과 우선순위를 설정하는 3가지 핵심 인사이트를 도출했습니다.",
      keywords: [
        "디자인 에이전시의 전문성을 직관적으로 전달할 수 있는 시각적 완성도 필요",
        "UI/UX부터 BI·BX, 개발까지 아우르는 올인원 역량을 명확히 인지시키는 구조 필요",
        "다양한 프로젝트를 일관되게 전달하기 위한 프로젝트 페이지의 템플릿화 필요",
      ],
    },
    design: {
      summary:
        "도출된 인사이트를 바탕으로, 브랜드가 전달하고자 하는 인상을 명확히 정의하기 위한 디자인 키워드를 설정했습니다. 각 키워드는 시각적 표현 전반에 일관되게 적용되어, 브랜드 경험의 방향성을 형성합니다.",
      Images: [""],
    },
    style: {
      summary:
        "디자인 키워드를 구체적인 시각 언어로 전환하기 위해 스타일 가이드를 구성했습니다. 타이포그래피와 컬러는 브랜드의 톤을 유지하면서도, 다양한 콘텐츠 환경에서 일관되게 작동하도록 설계되었습니다.",
      Images: [""],
    },
    mockup: {
      pc: "",
      mobile: [""],
    },
  },
  {
    id: 6,
    title: "younglim",
    summary: "창호 브랜드 반응형 웹사이트 리디자인",
    href: "",
    period: "2025.02 ~ 2025.08",
    contribution: "UI 디자인 95% ･ UX 디자인 95% ･ 기획 70%",
    overview: {
      title: "BEYOND THE FRAME,INTO EXPERIENCE",
      summary:
        "영림프라임창호는 프리미엄 창호 제품을 기반으로 주거 환경의 가치를 확장하는 브랜드입니다. 기존 웹사이트의 노후화와 브랜드 경험 개선 요구에 대응해 브랜드 메시지를 재정비하고, 전반적인 정보 구조와 UI를 개선하는 작업을 수행했습니다.",
      Image: "",
    },
    insight: {
      summary:
        "경쟁사 분석과 실무진 요구사항을 종합적으로 검토하며 프로젝트의 현황과 과제를 정리했습니다. 이를 바탕으로 디자인 전반의 방향성과 우선순위를 설정하는 3가지 핵심 인사이트를 도출했습니다.",
      keywords: [
        "브랜드를 관통하는 일관된 메시지 전달 필요",
        "낮선 제품 정보를 쉽게 이해시키는 구조 필요",
        "다음 행동을 안내하는 ‘연속형 CTA 구조’가 필요",
      ],
    },
    design: {
      summary:
        "도출된 인사이트를 바탕으로, 브랜드가 전달하고자 하는 인상을 명확히 정의하기 위한 디자인 키워드를 설정했습니다. 각 키워드는 시각적 표현 전반에 일관되게 적용되어, 브랜드 경험의 방향성을 형성합니다.",
      Images: [""],
    },
    style: {
      summary:
        "디자인 키워드를 구체적인 시각 언어로 전환하기 위해 스타일 가이드를 구성했습니다. 타이포그래피와 컬러는 브랜드의 톤을 유지하면서도, 다양한 콘텐츠 환경에서 일관되게 작동하도록 설계되었습니다.",
      Images: [""],
    },
    mockup: {
      pc: "",
      mobile: [""],
    },
  },
];
