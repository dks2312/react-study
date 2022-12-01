밸로퍼트와 함꼐하는 모던 리액트  
바로가기 링크 : https://react.vlpt.us/basic/  
기간 : 2022-12-01 ~ toDay  
OS : Window10  
NPM : 8.19.2v    
Yarn : 1.22.19v    



# 1장 리액트 입문


## 1-1. 리액트의 탄생 배경


### 사건의 발단

JavaScript만으로 큰 규모의 웹 어플리케이션을 개발한다면 DOM을 직접 건드리기 때문에 코드가 난잡해지기 쉬운 단점이 있다
이런 단점을 보완하기 위해 많은 프레임워크들이 나왔지만 리액트만은 조금 달랐다  


### 대부분의 프레임워크의 작동방식

대부분 공통적으로 자바스크립트의 특정 값이 바뀌면 특정 DOM의 속성이 바뀌도록 연결을 해주어서, 업데이트하는 작업을 간소화하는 방식이다  
ex) Ember, Backbone, AngularJS 등등..


### 리액트의 작동방식

하지만 리액트는 어떠한 상태가 바뀌었을 때, 그 상태에 따라 DOM을 아예 처음부터 새로 만들고, 이전과 다른 부분만 바꿔서 보여주는 방식이다

일반적으로 리액트가 느리다고 생각하겠지만 Virtual DOM과 리액트 개발팀의 노력으로 성능은 빠르다


## 1-2. 작업환경 준비


### 4가지 준비물

+ **Node.js :** Webpack과 Babel 도구들을 사용하기 위함.  
 각각 특징은  Webpack은 여러가지의 파일을 한개로 결합, Babel은 JSX를 비롯한 새로운 자바스크립트 문법 사용을 도움

+ **Yarn :** 라이브러리 관리  
 프로젝트에서 사용되는 라이브러리를 설치하고 해당 라이브러리들의 버전 관리를 한다. Node.js를 설치하면 딸려오는 npm과 비슷하지만 더 빠르고 성능이 좋다.

+ **Code editer :** 코드 작성  
 코드 작성하기 편한걸로 취향껏 고르기 (저는 vsCode)

+ **Git bash :** 명령 프롬프트  
 왜 쓰는지 정확히 모르겠지만 진행하다가 오류를 일으키는 명령 프롬프트가 있기 때문에 원활한 진행을 원한다면 얌전히 따르는게 신상에 좋다


#### 다운로드

[Node.js 설치 - 공식 홈페이지](https://nodejs.org/)  
[Yarn 설치 - install yarn](https://yarnpkg.com/en/docs/install)  
[vsCode 공식 홈페이지](https://code.visualstudio.com/)  


## 새 프로젝트 생성

1. git bash를 열고, 원하는 폴더에 리액트 프로젝트 생성
``` 
$ npx create-react-app begin-react 
```

2. 생성된 begin-react폴더로 이동한 후 프로젝트 실행
```
$ cd begin-react
$ yarn start
```

3. 브라우저에서 실행된 결과 확인
```
http://localhost:3000/
```



## 1-3. 리액트 컴포넌트 (함수형)

예제
+ src> Hello.js 추가
+ src> App.js 수정


### 리액트 컴포넌트 기본 구조

Hello.js
```js
// 리액트 불러오기
import React from 'react';

// 리액트 컴포넌트 내용
function Hello() {
  return <div>안녕하세요</div>
}

// 리액트 컴포넌트 반환
export default Hello;
```

### 특징
+ **JSX 반환**

  리액트 컴포넌트에서는 XML형식의 반환 값을 JSX라고 부른다


+ **코드의 재사용성**

  위에 코드에서 Hello라는 컴포넌트를 반환하는데, 해당 컴포넌트는 다른 컴포넌트에서 불러와서 사용할 수 있다 


### 기본 동작방식

각 파일들의 역할&의미
```
Hello.js, App.js : 리액트 컴포넌트이다
index.js : 리액트 컴포넌트를 렌더링하고, 출력함
index.html : 실제 DOM을 의미한다
```