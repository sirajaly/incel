import Main from "./components/main/main";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header>
				<nav>
					<ul>
						<li>
							<a href="#">Twitter</a>
						</li>
						<li>
							<a href="#">Telegram</a>
						</li>
						<li>
							<a href="#">Coinhall</a>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<section className="meme">
					<Main />
				</section>
			</main>
		</div>
	);
}

export default App;
