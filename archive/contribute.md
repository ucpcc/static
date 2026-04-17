---
layout: default
title: 아카이브 기여 방법
---

# 소속 단체 개최 대회 자료 아카이브 기여 방법

소속 단체 개최 대회 자료 아카이브에 기여해 주셔서 감사합니다.

전국 대학생 프로그래밍 대회 동아리 연합은 "연합은 프로그래밍 대회를 준비하는 동아리의 교류와 화합을 목적으로 한다."라는 목적을 이루기 위해 노력하겠습니다.

## 기여 방법

1. Pull Request를 올려 주세요.
   `.github/PULL_REQUEST_TEMPLATE.md` 템플릿에 맞춰 변경 내용을 정리해 주시면, 임원진이 리뷰 후 머지합니다.
2. 직접 PR을 열기 어렵다면 메일로 자료를 보내 주세요.
   아카이브 관련 문의 및 자료 전달 메일은 `archive@ucpc.me` 입니다. 대회 자료를 메일로 보내 주시면 임원진이 확인 후 업로드할 수 있습니다.

## 무엇을 어떻게 수정하나요?

### 1. 기존 단체 설명을 수정하려는 경우

- `archive/{org}/index.md`를 수정해 주세요.
- 단체 소개, 설명, 링크, 대회 목록 등을 여기에서 관리합니다.

예시:

- `archive/ucpc/index.md`

### 2. 새 단체를 추가하려는 경우

1. `archive/{org}/index.md`를 만듭니다.
2. 단체 설명을 적습니다.
3. 필요하면 그 아래에 대회 디렉터리를 추가합니다.
4. `archive/index.md`에 새 단체 링크를 추가합니다.

예시:

```text
archive/
  example-club/
    index.md
```

### 3. 기존 대회 자료를 수정하거나 추가하려는 경우

1. `archive/{org}/{contest}/` 디렉터리로 들어갑니다.
2. 필요한 파일을 추가하거나 수정합니다.
3. `archive/{org}/{contest}/index.md`에서 설명과 링크를 함께 정리합니다.

예시:

- `archive/ucpc/ucpc-2025/`

### 4. 새 대회 아카이브를 추가하려는 경우

1. `archive/{org}/{contest}/` 디렉터리를 만듭니다.
2. 그 안에 `index.md`를 만듭니다.
3. 문제, 해설, 테스트데이터, 스코어보드 등 대회 자료를 넣습니다.
4. `archive/{org}/index.md`에 대회 링크를 추가합니다.

예시:

```text
archive/
  ucpc/
    ucpc-2025/
      index.md
      qualifier/
        problem-ko.pdf
        problem-en.pdf
        editorial.pdf
      final/
        editorial.pdf
```

## 규칙

### 기본 원칙

- 아카이브 기본 경로는 `/archive/{소속단체 소문자 영문명}/{대회 소문자 영문명}/` 입니다.
- 하나의 단체는 하나의 디렉터리를 갖고, 그 아래에 대회별 디렉터리를 둡니다.
- 각 대회 디렉터리에는 `index.md`가 있어야 합니다.
- `index.md`에는 대회 설명과 파일 링크가 명확하게 적혀 있어야 합니다.

### 이름 규칙

- 단체명과 대회명 디렉터리는 영어 소문자와 `-`만 사용합니다.
- 공백, 대문자, 한글, 특수문자 대신 `-`로 정리해 주세요.
- 가능하면 짧고 일관된 이름을 사용해 주세요.

예시:

- `ucpc`
- `ucpc-2025`
- `sogang-icpc-2024`

### 브랜치 이름 규칙

- 브랜치 이름은 자유롭게 정하셔도 됩니다.
- 다만 가능하면 어떤 단체나 대회를 수정하는지 드러나게 해 주세요.

예시:

- `org-ucpc`
- `ucpc-2025`
- `ucpc-2025-scoreboard`

### 단체와 대회 구조

예시는 다음과 같습니다.

```text
archive/
  {org}/
    index.md
    {contest}/
      index.md
      ...
```

- `{org}` 는 단체 단위입니다.
- `{contest}` 는 대회 단위입니다.
- 단체 설명은 `{org}/index.md`
- 대회 설명과 자료 링크는 `{contest}/index.md`

로 이해하면 됩니다.

## 대회 자료 형식

### 파일 형식

대회 디렉터리 안에 어떤 파일을 둘지에 대한 엄격한 규칙은 없습니다.

- PDF만 있어도 괜찮습니다.
- ZIP 하나만 있어도 괜찮습니다.
- 기존 raw 파일 구조를 유지해도 괜찮습니다.

다만 가능하면 최대한 깔끔하고, 이해하기 쉬운 형태를 권장합니다.

특히 평탄화할 수 있다면 평탄화하는 쪽을 권장합니다.

다만 스코어보드는 예외로 두는 것을 권장합니다. HTML, CSV, JS, CSS, 이미지 등 관련 파일이 함께 오는 경우가 많기 때문에, 이 경우에는 `scoreboard/` 폴더를 두고 그 아래에 파일을 모아 두는 편이 더 자연스럽습니다.

### 예시

```text
archive/
  ucpc/
    index.md
    ucpc-2025/
      index.md
      qualifier/
        problem-ko.pdf
        problem-en.pdf
        editorial.pdf
      final/
        editorial.pdf
      scoreboard/
        index.html
        css/
        js/
```

위처럼 대회 디렉터리 아래에서 예선과 본선을 나누어 정리하면:

- 경로가 짧아지고
- 링크를 걸기 쉽고
- 나중에 자료를 찾기도 쉬워집니다.

예선과 본선을 나눌 필요가 없다면 대회 디렉터리 바로 아래에 파일을 두어도 괜찮습니다.

반대로 이미 폴더가 깊은 raw 구조를 갖고 있어도 올릴 수는 있습니다.  

### 권장 파일 이름 예시

- 단일 문제지: `problem.pdf`
- 다국어 문제지: `problem-ko.pdf`, `problem-en.pdf`
- 해설: `editorial.pdf`
- 코드 묶음: `solution-code.zip`
- 테스트데이터: `testdata.zip`
- 스코어보드: 가능하면 `scoreboard/` 폴더를 두고 `index.html`을 진입점으로 사용
