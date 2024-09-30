import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Posts } from "./posts";
import { Post } from "./post";


const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="rotas/" element={<Posts />} />
				<Route exact path="rotas/post/:id" element={<Post />} />
			</Routes>
		</BrowserRouter>
	);
};

export { AppRoutes };
