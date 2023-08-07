![Frame 5](https://user-images.githubusercontent.com/80504636/231182322-8ed980b0-361c-48bd-8e9d-ddafbf2ccf73.png)

### 🔗 ~~**[배포물 바로가기](https://ticketaka.shop)**~~
<br/>

---
# 📋 프로젝트 개요

- MSA를 활용한 공연 예매 시스템 구축 프로젝트
- 기존 공연 예매 서비스가 가지던 틀을 유지하면서도 불필요한 요소들을 제거하여 한눈에 정보를 표현하기 위해 디자인하기

<br/>

---

# 🧩 Ticketaka 기능 소개

## 🔒 인증

### 회원가입

![회원가입](https://user-images.githubusercontent.com/80504636/231176656-50048c82-0897-4f38-bbd8-f144eeccd9ab.gif)

![인증메일](https://github.com/Project-Ticketaka/Data/assets/68692931/cdb44aef-1667-4662-8198-e5f491b91516)

**⚠️ 테스트를 위해 인증번호 관련 유효성검사는 제외한 상태의 시연영상입니다!**

- 회원가입 창을 구현했습니다.
- 현재 email은 @과 .이 포함될 수 있도록, password는 8자리 이상이 넘어가도록 유효성 검사를 구현해두었습니다.
- 현재 이름은 2글자 이상이 넘어가도록, 생년월일은 yyyyMMdd 포맷에 맞도록 그리고 핸드폰번호는 표준 형식에 맞도록 유효성 검사를 구현해두었습니다.
- email은 기존에 Database에 존재하는 이메일인지 중복 검사를 거칩니다. 중복 체크를 완료해야 회원가입이 가능합니다.
- email 중복체크를 하고 사용가능한 이메일이면, 해당 email로 인증번호를 전송합니다. 
인증번호를 입력 후 인증하기를 완료해야 회원가입이 가능합니다.
- 모든 유효성 검사에 통과하지 않으면 버튼을 클릭할 수 없도록 구현하였습니다.
- 클라이언트단에서 유효성 검사 과정에서 확인된 에러를 출력해줄 수 도록, 에러 영역을 구현했습니다.

### 로그인

![로그인 영상](https://user-images.githubusercontent.com/80504636/231174137-40eef1cc-6a00-4f3d-a293-82e68c9414fb.gif)

- 로그인 할 수 있도록 구현했습니다.
- 현재 api가 JWT를 Cookie에 세팅해주지 않기 때문에 localstorage에 JWT를 저장하고 정보를 가져올 수 있는 유틸 함수를 구현하여 처리하였습니다.
- 클라이언트에서 유효성 검증은 JWT가 존재하는지, 만료시간이 지나지 않았는지만 검증하고 있습니다. JWT가 필요한 백엔드 api에 요청을 보낼 때는 Header에 JWT가 담아서 보내고 있습니다. 해당 응답이 401이면 유효하지 않다고 판단합니다.

<br>

## 🔍 공연 조회

### Top10 조회

![Top10 조회](https://user-images.githubusercontent.com/80504636/231181810-e527444a-5718-41f1-a75b-d33fc8b24a01.png)

- 메인 페이지입니다.
- Header에는 카테고리 별로 조회할 수 있는 메뉴 버튼들과 검색어 입력창 그리고 회원정보와 예매 정보를 조회할 수 있는 마이페이지 버튼으로 구성하였습니다.
- Carousel 형태의 배너를 배치하였고 관리자가 원하는 이미지로 변경 가능합니다.
- 매일 상위 10건의 공연을 확인할 수 있습니다.

### 카테고리 별 공연 목록 조회

![카테고리 별 공연 목록 조회](https://user-images.githubusercontent.com/80504636/231180413-893602ba-1652-45b8-8903-2de6329f90f7.gif)

- Header 메뉴를 클릭하면 해당 카테고리에 해당하는 공연들을 조회할 수 있습니다.
- 한 페이지에 최대 20개 까지 조회 가능합니다.
- 페이지네이션은 무한 스크롤로 구현하였습니다. 스크롤을 페이지 최하단까지 내리면 다음 페이지 데이터가 로드됩니다.

### 키워드 별 공연 목록 조회 (검색)

![키워드 별 공연 목록 조회 (검색)](https://user-images.githubusercontent.com/80504636/231182114-9b1ec13a-8520-485b-83da-3870797d3c83.gif)

- Header의 입력창에 검색어를 입력하면 해당 검색어를 포함하는 공연들을 조회할 수 있습니다.
- 한 페이지에 최대 20개 까지 조회 가능합니다.
- 페이지네이션은 무한 스크롤로 구현하였습니다. 스크롤을 페이지 최하단까지 내리면 다음 페이지 데이터가 로드됩니다.

<br>

## 🧾 공연 예매

![예매는 로그인 필수!](https://user-images.githubusercontent.com/80504636/231174920-67826aa9-bfae-4b29-b866-fc91e92fb10f.gif)


**⚠️ 예매와 관련된 기능은 모두 로그인 후 이용 가능합니다. 만약 로그인이 되어있지 않으면 로그인 페이지로 자동 리다이렉트 됩니다.**

### 공연 예매하기

![공연 예매하기](https://user-images.githubusercontent.com/80504636/231174483-ed1bbd0e-dd88-4018-b13c-573d71254b37.gif)

![예매메일](https://github.com/Project-Ticketaka/Data/assets/68692931/a192763c-214d-40f9-905f-2c167e511348)

- 공연 정보 조회 화면에서 예매가 가능합니다.
- 공연이 있는 날에는 달력에 하이라이트가 되어있습니다. ( 필수 입력 )
- 날짜를 선택하면 회차 정보들이 달력 우측에 표시됩니다. ( 필수 입력 )
- 좌석 종류와 가격정보가 회차 정보 우측에 표시됩니다. ( 필수 입력 )
- 인원 수는 최소 1명 부터 선택가능합니다. 해당 회차의 잔여 좌석보다 많이 예매하려고 하면 경고창이 뜹니다.
- 적절한 날짜, 회차, 좌석, 예매 인원수를 선택하고 예매하기 버튼을 누르면 예매 가능 여부를 알려주고 가능하면 결제창으로 넘어갑니다.
- 현재 따로 결제 모듈을 연동하지 않았습니다.
- 결제 방식을 선택하고 결제하기 버튼을 누르면 예매가 완료됩니다.
- 예매 정보는 마이페이지에서 조회 가능합니다.

### 예매 취소하기

![예매 취소하기](https://user-images.githubusercontent.com/80504636/231175228-d16491d1-034a-4c8f-861c-1bfdbecdf102.gif)

- 예매 정보를 확인하는 모달창을 구현했습니다.
- 조작 실수로 예매가 취소되지 않기 하기 위해 예매 취소 버튼을 누르고 toast 창의 확인을 누르면 예매가 취소되게 하였습니다.
- 예매를 취소하면 예매 취소 표시가 추가될 뿐 바로 목록에서 삭제되지 않습니다.

<br>

---

# 👟 실행 방법

### 코드 실행 방법

```bash
# git clone 후
npm install
npm start
```
**⚠️ 서버 주소가 유효할 때만 실행이 가능합니다 😭 (상태 별도 공지 예정)**

<br>

---

# 🏗 프로젝트 구조

## 🛠 사용한 프레임워크 및 라이브러리 설명

**[🔗 package.json 바로가기](https://github.com/Project-Ticketaka/Frontend/blob/main/package.json)**

### Typescript, eslint, prettier

- 코드 퀄리티와 잠재적인 위험을 줄이기 위해 사용함

### React, Styled-component

- 선언적인 프론트엔드 컴포넌트 프로그래밍을 위해 사용함

### Sass

- 코드의 재활용성을 올리고, 가독성을 올리기 위해 사용함

### React Query, React Query Devtools

- 서버 상태 관리를 통해 상태의 복잡도를 낮추기위해 사용함
- 상태를 확인하기 위해 devtools를 사용함.

<br>

## 📁 폴더 구조 설명

```bash
project-ticketaka-frontend
├─ 📁 public
│  
├─ 📁 src
│  ├─ 📁 api  # api와 통신하는 계층 폴더입니다.
│  │  
│  ├─ 📁 assets  # 번들링 되어야하는 자산을 모아둔 폴더입니다.
│  │  ├─ 📁 fonts
│  │  └─ 📁 images
│  │  
│  ├─ 📁 components  # 공통 컴포넌트들과 전체 Layout 컴포넌트가 있습니다.
│  │  ├─ 📁 Auth
│  │  ├─ 📁 Common
│  │  └─ 📁 Layout
│  │  
│  ├─ 📁 pages  # 공통 컴포넌트들과 전체 Layout 컴포넌트가 있습니다.
│  │  ├─ 📁 Auth
│  │  ├─ 📁 Category
│  │  ├─ 📁 Home
│  │  ├─ 📁 My
│  │  ├─ 📁 Search
│  │  └─ types.ts
│  │  
│  ├─ 📁 hooks  # 커스텀 hook이 모여있는 폴더입니다. 현재는 toast mutation과 query가 모여있습니다.
│  │  ├─ 📁 common
│  │  ├─ 📁 mutation
│  │  └─ 📁 query
│  │  
│  ├─ 📁 router  # route의 페이지입니다.
│  │  └─ router.tsx
│  │  
│  ├─ 📁 styles
│  │  └─ GlobalStyle.tsx  # 전역 스타일 파일입니다.
│  │  
│  ├─ 📁 types  # 타입 선언 폴더입니다. api response, request type이 선언되어있습니다.
│  ├─ 📁 utils  # 유틸성 함수를 위한 폴더입니다. 유효성검사, localstorage에서 jwt 가져오기가 있습니다.
│  ├─ index.tsx
│  ├─ App.scss
│  └─ App.tsx  # App 전체를 구성하는 컴포넌트입니다. 내부에 Router가 있습니다.
│
├─ ⚙️ .dockerignore
├─ ⚙️ .gitignore
├─ 🐳 Dockerfile
├─ README.md
├─ ⚙️ babel.config.js
├─ ⚙️ default.conf
├─ ⚙️ package-lock.json
├─ ⚙️ package.json       
└─ ⚙️ tsconfig.json
```

<br>

---

# 💬 회고

## 프로젝트 진행 시 주안점

- typescript 사용
- tailwindcss 등 인라인 스타일이 아닌 sass, styled-component 스타일 적용
- axios 모듈화

<br>

## 한계점 및 개선 사항

- typescript를 처음 사용해 봤는데 완벽하게 타입을 지정하지 못한 것이 아쉽다.
- 중복되는 부분을 공통으로 빼고 상속으로 구현해야 하는데 설계를 완벽하게 하지 못하고 개발에 들어가서 해당 부분은 개선이 필요하다.
- skeleton ui를 적용하려고 했으나 React-Query 사용 미숙으로 인해 100% 구현하지 못했다.
- 무한 스크롤 부분을 구현하는데 있어서 React-Query를 완벽하게 활용하지 못한 점이 아쉽다.
- mui, styled-component, sass등 여러가지 디자인 요소를 위한 라이브러리를 활용하려 했지만
시간적인 한계로 인해 인라인 스타일도 많이 사용했다. 이 부분은 코드 가독성이나 컴포넌트 재사용성을 위해 리팩토링이 필요하다.
