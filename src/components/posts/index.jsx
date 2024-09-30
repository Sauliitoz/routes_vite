import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

async function getPosts() {
	const response = await fetch("http://localhost:5173/json/posts.json");
	return await response.json();
}

const PostList = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const posts = await getPosts();
			setPosts(posts.data);
		}
		fetchData();
	}, []);

	return (
		<section>
			{posts.map((posts, index) => (
				<div key={index}>
					<Link to={`/post/${posts.id}`}>
						<img className="image" src={posts.image} alt="" />
						<h2 className="text">{posts.title}</h2>
					</Link>
				</div>
			))}
		</section>
	);
};

export { PostList };
