import NavBar from "./NavBar";

export default function Layout({children}) {
	//children은 react가 제공하는 props. 
	// 하나의 컴포넌트를 또 다른 컴포넌트 안에 넣을 때 쓸 수 있음.
	return(
		<>
			<NavBar/>
			<div>{children}</div>
		</>
	)
}