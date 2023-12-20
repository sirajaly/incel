import React from "react";
import MemeImage from "../../images/meme-1.png";
import MemeImage2 from "../../images/meme-2.png";
import MemeImage3 from "../../images/meme-3.png";
import MemeImage4 from "../../images/meme-4.png";
import MemeImage5 from "../../images/meme-5.png";
import "./main.css";

function Main() {
	return (
		<div>
			<div>
				<div className="main-section">
					<div className="left-container">
						<div className="text-container">
							<h4 className="heading">We found the</h4>
							<h4 className="sub-heading">$Incel</h4>
							<p className="paragraph">
								Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsumLore ipsum Lore
								ipsum Lore ipsum Lore ipsum
							</p>
						</div>
					</div>
					<div className="right-container">
						<img src={MemeImage} alt="Meme" width="400px" />
					</div>
				</div>
				<div className="bottom-container">
					<h4 className="bottom-heading">What are you doing here?</h4>
				</div>
			</div>
			<div className="incel-section">
				<div className="left-incel">
					<h4 className="left-incel-text">You $Incel?</h4>
					<img src={MemeImage2} alt="memeimage 2" width="300px" />
				</div>
				<div className="right-incel">
					<img src={MemeImage3} alt="memeimage 2" width="300px" />
					<h4 className="right-incel-text">You $Incel?</h4>
				</div>
			</div>

            <div>
				<div className="main-section">
					<div className="left-container">
						<div className="text-container">
							<h4 className="heading">You Noob!</h4>
                            <img src={MemeImage5} alt="memeimage 5" width="300px" />
							<p className="paragraph">
								Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsumLore ipsum Lore
								ipsum Lore ipsum Lore ipsum
							</p>
						</div>
					</div>
					<div className="right-container meme">
						<img src={MemeImage4} alt="Meme" width="400px" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
