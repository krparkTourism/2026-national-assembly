# KCTI 2026 국정감사 대시보드 (PWA)

한국문화관광연구원(KCTI)의 **2026년 국정감사 대비 기관 현황·주요 현안**을 한 화면에서 확인할 수 있는 **Progressive Web App(PWA)** 대시보드입니다.

## 📱 PWA (Progressive Web App) 특징

한 번 접속하면 **네이티브 앱처럼** 사용할 수 있습니다.

| 기능 | 설명 |
|------|------|
| **홈 화면 설치** | iPhone/Android/PC 모두 앱 아이콘으로 설치 가능 |
| **전체 화면 실행** | 브라우저 UI(주소창·탭) 없이 단독 앱처럼 실행 |
| **오프라인 지원** | 최초 접속 후 인터넷 없어도 열람 가능 (Service Worker) |
| **자체 아이콘** | KCTI 로고 아이콘 자동 표시 |
| **앱 바로가기** | 홈 화면 아이콘 길게 누르면 → 주요 현안 / 예산 / 조직도 바로가기 |

## 📥 설치 방법

### iPhone / iPad (Safari)
1. Safari에서 대시보드 URL 접속
2. 하단 **공유 버튼(⬆︎)** 누름
3. **홈 화면에 추가** 선택 → 아이콘 생성 완료

### Android (Chrome)
1. Chrome에서 대시보드 URL 접속
2. 주소창 옆 **설치 아이콘** 또는 우상단 메뉴 **⋮ → 앱 설치**
3. 상단 헤더 **"앱 설치"** 버튼 클릭도 가능

### PC (Chrome / Edge)
1. Chrome/Edge에서 대시보드 URL 접속
2. 주소창 오른쪽 **⊕ 설치 아이콘** 클릭
3. 별도 창으로 실행되는 데스크톱 앱으로 사용

## 🚀 GitHub Pages 배포

1. 새 GitHub 저장소 생성 (예: `kcti-2026-audit`)
2. ZIP 내 모든 파일을 **저장소 루트**에 업로드:
   ```
   ├── index.html                 (대시보드 본체)
   ├── manifest.json              (PWA 매니페스트)
   ├── sw.js                      (오프라인 서비스 워커)
   ├── icon-192.png               (앱 아이콘 192px)
   ├── icon-512.png               (앱 아이콘 512px)
   ├── apple-touch-icon.png       (iOS 앱 아이콘)
   ├── favicon-32.png             (탭 파비콘)
   ├── KCTI_2026_국정감사.pdf     (원문 PDF)
   └── README.md
   ```
3. **Settings → Pages → Source: Deploy from a branch → `main` / `/(root)` → Save**
4. 1-2분 후 `https://<사용자명>.github.io/<저장소명>/` 에서 접속

> **중요**: PWA는 HTTPS 환경에서만 작동합니다. GitHub Pages는 기본 HTTPS이므로 별도 설정 불필요.

## 🗂 구성 (8개 탭)

| 탭 | 내용 |
|----|------|
| 개요 | KPI, 설립근거, 3대 정보시스템 + KCTI data, 예산 추이 |
| 조직·정원 | 5본부 계층 조직도, 하위 조직표, 임금피크제 |
| 예산 | 2026 수입·지출 도넛, 상세 증감표, 특정목적출연금사업 |
| 연구·사업 | 기본연구 구조, 과제당 예산 추이, 연구관련·지원 |
| 통계·평가 | 국가승인통계 9종, 정책사업 평가 3종 |
| 주요 현안 | ①인력·예산 개편 ②지방이전 ③정보화 인력 |
| 2026 과제 | 39건 검색·필터 (분야·유형별) |
| 타 기관 비교 | 10개 정출연 대비 인건비·경상비 지원율 |

## 🛠 기술 스택

- HTML5 + CSS3 (반응형 · CSS Grid · Flexbox)
- Chart.js 4.4.1 (CDN)
- Noto Sans KR (Google Fonts)
- PWA (manifest.json + Service Worker)

## 라이선스

내부 국정감사 대비 자료 기반 대시보드. 원문: 한국문화관광연구원 2026 국정감사 자료.
