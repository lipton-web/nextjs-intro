NextJS는 페이지가 미리 렌더링 되어 정적으로 생성 된다.  
페이지가 next.js를 사용하여 구축된 경우 일부 html을 볼 수 있다.  
리액트로만 만들어진 사이트는 불러오기 전까지 빈 화면.
SEO 가능

NextJS 설치
`npx create-next-app@latest` (최신버전 설치)  
`npx create-next-app@latest --typescript` (타입스크립트 버전)

실행
`npm run dev`  
-> ready - started server on 0.0.0.0:3000, url: http://localhost:3000

pages 폴더 안에 있는 파일명에 따라 route가 결정된다.  
_pages 폴더 안에 index.js가 메인페이지_  
_다른 이름으로 js파일 만들면 파일명이 주소임._ 

pages/about.js 생성 ->  
localhost:3000/about (O)  
localhost:3000/about-us(X)

다만 예외사항으로, index.js의 경우에는 앱이 시작하는 파일이라고 보면 된다.  
즉 localhost:3000 그 자체다 뒤에 /index 로 붙이면 안된다.

js파일 기본 골격은
```jsx
export default function _Home(원하는 이름)_ (){
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
```
import React from "react"를 쓸 필요 없음.  
다만 useState,useEffect, lifecycle method 같은 애들을 써야 할 경우에는 꼭 import를 해줘야 한다.


`<a href="/">Home</a>` a href태그는 사용하지 않는것이 좋다. 페이지가 다시 리로딩 되서 불러 옴  
`import Link from "next/link"` 를 불러 와서 다음과 같은 형식으로 작성 하면 리로딩 되지 않는다.
```jsx
<Link href="/">
	<a>Home</a>
</Link>
```

css style 바로 적용
```jsx
<Link href="/">
	<a style={{color: router. pathname === "/" ? "red": "blue"}}>Home</a>
</Link>
```

# CSS modules  
`파일명.module.css` 로 css파일 생성  
css 사용법  
일반 css와 동일하게 css파일 내용 작성  
css를 적용시킬 파일에 import styles from "./NavBar.module.css"  -> css를 불러 옴  
`<nav className={styles.nav}>`(.nav css내용을 적용. 클래스가{styles.nav}이면 html에서 자동으로 다르게 생성됨)

두 개의 css스타일 적용방법
1. ``으로 감싸기
```jsx
<Link href="/">
	<a className={`
		${styles.link} 
		${router.pathname === "/" ? styles.active : ""}`
	}>
		Home
	</a>
</Link>
```
2. 배열로 만들어서 합치기
```jsx
<Link href="/about">
	<a className={[
		styles.link, 
		router.pathname === "/about" ? styles.active : ""].join(" ")
	}>
		About
	</a>
</Link>
```

# Styles JSX
styled jsx는 NextJS 고유의 방법
html class 이름은 자동으로 만들어 (클래스 이름을 만들지 않아도 됨)
html 태그 이름 그대로 사용
Styles JSX는 작성된 컴포넌트 내부로 범위가 한정 됨.
```jsx
return (
	// jsx 코드 작성..
	// Styles JSX 작성법. 기존파일 내에서 바로 작성
	<style jsx>{`
		nav {
			background-color:tomato;
		}
		a {
			text-decoration: none;
		}
	`}</style>
)
```

```jsx
	return (
		<nav>
			<Link href="/">
				<a className={router.pathname === "/" ? "active":""}>
					Home
				</a>
			</Link>
			<Link href="/about">
				<a className={router.pathname === "/about" ? "active":""}>
					About
				</a>
			</Link>
			<style jsx>{`
				nav {
					background-color:tomato;
				}
				a {
					text-decoration: none;
				}
				.active {
					color: yellow; 
					// color: ${props.color};도 가능
				}
			`}</style>
		</nav>
	);
```

# App Component (Global Style)
App Component는 일종의 어떤 컴포넌트의 청사진



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
