import React from "react";
import PropTypes from "prop-types";
import "./NewsListItem.css";
import { displayNewsContent, displayIframes } from "../utils/NewsUtils";

// STYLING
const iframeStyles = {
	border: 0,
	width: "350px",
	height: "470px",
};

const NewsListItemIndividual = ({
	headline,
	postDate,
	bandcampUrl,
	iframeSrc,
	releaseTitle,
	newsContent,
}) => {
	const formatDate = new Date(postDate).toLocaleDateString("en-US");
	const currentNews = {
		headline,
		postDate,
		bandcampUrl,
		iframeSrc,
		releaseTitle,
	};

	const iframeDisplay = displayIframes(currentNews, iframeStyles);

	return (
		<>
			<div className="NewsListItem">
				<h2>{headline}</h2>
				<p className="NewsListDate">{formatDate}</p>
				<p className="NewsListContent">{displayNewsContent(newsContent)}</p>
				<p className="NewsListContent">
					<br />
					STREAM / PURCHASE BELOW
					<br />
					<p className="listen-now">{iframeDisplay}</p>
				</p>
			</div>
		</>
	);
};

const NewsListItem = ({ news }) => {
	const sortedNews = news => {
		return news.sort(
			(dateOne, dateTwo) =>
				new Date(dateTwo.postDate) - new Date(dateOne.postDate),
		);
	};

	const displayAllNews = arr => {
		return arr.map(item => {
			return NewsListItemIndividual(item);
		});
	};

	return (
		<>
			{displayAllNews(sortedNews(news))}
			<div className="NewsListItem">
				<h2>New tapes from Menophilia, Lapsed Baptist, Coumadin</h2>
				<p className="NewsListDate">5/07/2021</p>
				<p className="NewsListContent">
					Three new tapes are now available, each in an edition of 25.
					Menophilia presents “Butchered by Noise,” 3 longform harsh noise
					reworks of classic Floridian death metal. HNW luminary Lapsed Baptist
					offers up “The Fortune Sellers,” an exploration of astrology’s
					origins. American minimal power electronics project Coumadin unleashes
					clinical criticism of for-profit care on “Metabolics in Trust.”
				</p>
				<p className="NewsListContent">
					<br />
					STREAM / PURCHASE BELOW
					<br />
					<p className="listen-now">
						<div className="listen-now-individual">
							LISTEN: <br />
							<iframe
								style={iframeStyles}
								src="https://bandcamp.com/EmbeddedPlayer/album=1923406596/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
								title="menophilia"
								seamless
							>
								<a href="https://glossolaliarecords.bandcamp.com/album/butchered-by-noise">
									Butchered by Noise by Menophilia
								</a>
							</iframe>
						</div>
						<div className="listen-now-individual">
							LISTEN: <br />
							<iframe
								style={iframeStyles}
								src="https://bandcamp.com/EmbeddedPlayer/album=857755232/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
								title="lapsed baptist"
								seamless
							>
								<a href="https://glossolaliarecords.bandcamp.com/album/the-fortune-sellers">
									The Fortune Sellers by Lapsed Baptist
								</a>
							</iframe>
						</div>
					</p>
					<p className="listen-now">
						<div className="listen-now-individual">
							LISTEN: <br />
							<iframe
								style={iframeStyles}
								src="https://bandcamp.com/EmbeddedPlayer/album=2553288512/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
								title="coumadin"
								seamless
							>
								<a href="https://glossolaliarecords.bandcamp.com/album/metabolics-in-trust">
									Metabolics in Trust by Coumadin
								</a>
							</iframe>
						</div>
					</p>
				</p>
			</div>
			<div className="NewsListItem">
				<h2>Jacob streaming in full on Invisible Oranges + LP out now</h2>
				<p className="NewsListDate">3/05/2021</p>
				<p className="NewsListContent">
					The tremendous N + Ehnahre collaborative LP “Jacob” is out now for
					this Bandcamp Friday with fewer than 25 copies remaining from us. To
					commemorate the release, Invisible Oranges{" "}
					<a href="https://www.invisibleoranges.com/n-ehnahre-stream-interview/">
						interviewed Ehnahre’s Ryan McGuire
					</a>{" "}
					about the record’s process, experimental music, and more. Read this
					excerpt from the write-up by Jon Rosenthal then stream/purchase the
					record below:
				</p>
				<p className="NewsListContent">
					&quot;Bringing German experimental artist Hellmut Neidhardt into the
					fold under his N moniker, the N + Ehnahre ensembles Jacob album crafts
					metal with a distinctly Modern flair. Punctuated by extensive bouts of
					free-improvisation, N and Ehnahre play the tension-and-release game,
					building as much discord and discomfort as possible before finally
					unleashing all their potential energy as mammoth, clattering, doomed
					metal.&quot;
					<br />
					<br />
					<iframe
						style={iframeStyles}
						title="Jacob"
						src="https://bandcamp.com/EmbeddedPlayer/album=3064770367/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
						seamless
					>
						<a href="https://glossolaliarecords.bandcamp.com/album/jacob">
							Jacob by N + Ehnahre
						</a>
					</iframe>
				</p>
			</div>
			<div className="NewsListItem">
				<h2>N + Ehnahre collab LP available for pre-order</h2>
				<p className="NewsListDate">2/15/2021</p>
				<p className="NewsListContent">
					GR is proud to present the newest LP from noisemetal collective
					Ehnahre, a collaboration with German experimental artist Hellmut
					Neidhardt under his N alias. The title of this record is “Jacob” and
					it has been pressed in an edition of 100 on black 140g vinyl.
					<br />
					<br />
					<a
						href="https://www.instagram.com/p/CLUggO-Jg7V/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Listen to a passage
					</a>{" "}
					from the track “Regions of a Great Heresy” on Instagram.
					<br />
					<br />
					No tracks available during pre-order period.
				</p>
				<a
					href="https://glossolaliarecords.bandcamp.com/album/jakob"
					target="_blank"
					rel="noopener noreferrer"
				>
					PRE-ORDER JACOB HERE
				</a>
			</div>
			<div className="NewsListItem">
				<h2>New tape from SBTDOH now available</h2>
				<p className="NewsListDate">12/31/2020</p>
				<p className="NewsListContent">
					From the project&apos;s early beginnings as a builder of impenetrable
					walls to the manic, dissolving frenzy of its contemporary harsh noise
					output, SBTDOH has carved a cryptic, unwavering path of singularity
					through the underground. The unique, encompassing nature of his
					perspective is reflected just as much in the curation of Shrouded
					Recordings, home to many of 2020’s best tapes.
					<br />
					<br />
					GR is proud to present the newest full-length from SBDTOH,
					&quot;Space: While Always in Childhood is Foundational Without
					Definition&quot; in an edition of 22.
					<br />
					<br />
					Fuck bloated editions and fuck artificial scarcity and fuck products.
					Labels-that-are-not-labels unite.
				</p>
				<br />
				STREAM / PURCHASE BELOW
				<br />
				<p className="listen-now">
					<div className="listen-now-individual">
						LISTEN: <br />
						<iframe
							style={iframeStyles}
							title="SBDTOH"
							src="https://bandcamp.com/EmbeddedPlayer/album=673549749/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
							seamless
						>
							<a href="https://glossolaliarecords.bandcamp.com/album/space-while-always-in-childhood-is-foundational-without-definition">
								Space: While Always in Childhood is Foundational Without
								Definition by SBTDOH
							</a>
						</iframe>
					</div>
				</p>
			</div>
			<div className="NewsListItem">
				<h2>Releases from SGFF label boss and Henry Duck out now</h2>
				<p className="NewsListDate">12/04/2020</p>
				<p className="NewsListContent">
					Grating, churning, filthy new tapes from both Mallard Theory and
					Systematic Elimination available now at our Bandcamp.
					<br />
					<br />
					A Duck brings the murky weirdness with dank unreleased material
					recorded between 2015 and 2019, personally selected by KRP. Next up is
					Systematic Elimination, harsh noise from SGFF label boss Winter Rose,
					exploring the wretchedness of trench warfare.
					<br />
					<br />
					Each in an edition of 20.
				</p>
				<br />
				STREAM / PURCHASE BELOW
				<br />
				<p className="listen-now">
					<div className="listen-now-individual">
						LISTEN: <br />
						<iframe
							title="algi duck waters"
							style={iframeStyles}
							src="https://bandcamp.com/EmbeddedPlayer/album=2526073556/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
							seamless
						>
							<a href="https://glossolaliarecords.bandcamp.com/album/swamp-lake-pond-algi-duck-waters">
								Swamp Lake Pond / Algi Duck Waters by Mallard Theory
							</a>
						</iframe>
					</div>
					<div className="listen-now-individual">
						LISTEN: <br />
						<iframe
							title="no mans land"
							style={iframeStyles}
							src="https://bandcamp.com/EmbeddedPlayer/album=3948944768/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
							seamless
						>
							<a href="https://glossolaliarecords.bandcamp.com/album/no-mans-land">
								No Man&#39;s Land by Systematic Elimination
							</a>
						</iframe>
					</div>
				</p>
			</div>
			<div className="NewsListItem">
				<h2>Doomed & Stoned premieres new Maestus EP</h2>
				<p className="NewsListDate">11/09/2020</p>
				<p className="NewsListContent">
					<a href="https://glossolaliarecords.bandcamp.com/album/daybreaks-advent">
						Daybreak&apos;s Advent
					</a>{" "}
					is the first new material from Maestus since the PNW collective&apos;s
					second LP{" "}
					<a href="https://maestus.bandcamp.com/album/deliquesce">Deliquesce</a>{" "}
					was released by Italian curators{" "}
					<a href="http://www.code666.net/maestus-sign-with-code666/">
						Code666
					</a>{" "}
					in February of last year. It features photography by SP and boasts the
					band&apos;s first-ever tribute, a cover of My Dying Bride&apos;s
					classic &quot;My Hope, The Destroyer.&quot; Additional violin and
					viola work by Andrea Morgan of Exulansis.
					<br />
					<br />
					<blockquote>
						<em>
							When you listen to the latest EP, &quot;Daybreak&apos;s
							Advent&quot; (2020), for example, you&apos;re bearing witness to
							creation, not simply of a musical composition but of an entire
							reality built upon the foundation of sound. Starting with “Adamacy
							Feigned,” Maestus work methodically, to borrow an old Biblical
							stanza: “line upon line, precept upon precept, here a little and
							there a little.” With each well-appointed note, Maestus unfurls
							the cosmos in intricate strands of sound.
							<br />
							<br />
							True to their name, the world that Maestus reveals to us is
							touched by melancholy. Melancholy is not a singularly dark
							concept, either. It can be (and sometimes is) quite beautiful and
							its mysteries will be experienced differently when met by
							different ears. To my perception, the opening minutes of
							Daybreak’s Advent perfectly conjure a crisp November’s dawn with a
							landscape filled with trees of deep red and gold dancing in the
							early morning breeze, the green grass (yes, it stays green in
							Oregon all year &apos;round, folks!) still damp with the morning
							dew. The winds of drama stir the leaves about and, as the sun
							further makes its presence known, a certain worshipful awe
							overtakes the mood, scored by majestic voices layered together for
							warmth.
						</em>
					</blockquote>
					<br />
					Doomed & Stoned has{" "}
					<a
						href="https://doomedandstoned.com/post/634332818690932736/maestus"
						target="_blank"
						rel="noopener noreferrer"
					>
						premiered the 2-track EP in full
					</a>
					, wherein one can preorder the cassette version to be released this
					Friday. Billy Goate has this to say of the record:
				</p>
				<br />
				STREAM / PURCHASE BELOW
				<br />
				<p className="listen-now">
					<div className="listen-now-individual">
						LISTEN: <br />
						<iframe
							title="daybreaks advent"
							style={iframeStyles}
							src="https://bandcamp.com/EmbeddedPlayer/album=2278345818/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
							seamless
						>
							<a href="https://glossolaliarecords.bandcamp.com/album/daybreaks-advent">
								Daybreak&#39;s Advent by Maestus
							</a>
						</iframe>
					</div>
				</p>
			</div>
			<div className="NewsListItem">
				<h2>New material from Eugene Critchley, Sloth, and Willowbrook</h2>
				<p className="NewsListDate">11/06/2020</p>
				<p className="NewsListContent">
					NOW AVAILABLE:
					<br />
					<br />
					GR is proud to present the latest{" "}
					<a
						href="https://glossolaliarecords.bandcamp.com/album/and-when-life-hurts-you-because-it-will"
						target="_blank"
						rel="noopener noreferrer"
					>
						Eugene Critchley
					</a>{" "}
					album, “And When Life Hurts You, Because It Will” on white cassette, a
					masterclass in coarse minimalism. Cover collage by KRP.{" "}
					<a
						href="https://glossolaliarecords.bandcamp.com/album/sloth-willowbrook"
						target="_blank"
						rel="noopener noreferrer"
					>
						Willowbrook joins with the mighty Sloth
					</a>{" "}
					for a split tape featuring new collage work by{" "}
					<a
						href="https://www.discogs.com/artist/4096761-SBTDOH"
						target="_blank"
						rel="noopener noreferrer"
					>
						SBTDOH
					</a>
					. Ten minutes each of dynamic walls and feedback-driven barrages.
				</p>
				<br />
				Editions of 15
				<br />
				<p className="listen-now">
					<div className="listen-now-individual">
						LISTEN:
						<br />
						<iframe
							title="eugene album"
							style={iframeStyles}
							src="https://bandcamp.com/EmbeddedPlayer/album=2055556995/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
							seamless
						>
							<a href="https://glossolaliarecords.bandcamp.com/album/and-when-life-hurts-you-because-it-will">
								And When Life Hurts You, Because It Will by Eugene Critchley
							</a>
						</iframe>
					</div>

					<div className="listen-now-individual">
						LISTEN: <br />
						<iframe
							title="sloth-willow"
							style={iframeStyles}
							src="https://bandcamp.com/EmbeddedPlayer/album=3300872826/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
							seamless
						>
							<a href="https://glossolaliarecords.bandcamp.com/album/sloth-willowbrook">
								Sloth / Willowbrook by Sloth / Willowbrook
							</a>
						</iframe>
					</div>
				</p>
			</div>
			<div className="NewsListItem">
				<h2>Euthanasie Volontaire tape + CHEFKIRK x DVR collaboration</h2>
				<p className="NewsListDate">06/05/2020</p>
				<p className="NewsListContent">
					We’re proud to announce a shredded, brutal new release from{" "}
					<a href="https://glossolaliarecords.bandcamp.com/album/grupo-elite">
						Euthanasie Volontaire
					</a>{" "}
					and the debut of{" "}
					<a href="https://glossolaliarecords.bandcamp.com/album/all-out-destruction">
						Giant Monsters
					</a>
					, a hulking collaborative project between CHEFKIRK (Juice Machine) and
					DVR (Blood Eagle).
				</p>
				<br />
				Euthanasie Volontaire is an edition of 20. Giant Monsters is an edition
				of 25.
				<br />
				<p className="listen-now">
					<div className="listen-now-individual">
						LISTEN:
						<br />
						<iframe
							style={iframeStyles}
							title="all out destruction"
							src="https://bandcamp.com/EmbeddedPlayer/album=3608127396/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
							seamless
						>
							<a href="http://glossolaliarecords.bandcamp.com/album/all-out-destruction">
								All Out Destruction by Giant Monsters
							</a>
						</iframe>
					</div>

					<div className="listen-now-individual">
						LISTEN: <br />
						<iframe
							title="grupo elite"
							style={iframeStyles}
							src="https://bandcamp.com/EmbeddedPlayer/album=833681319/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
							seamless
						>
							<a href="http://glossolaliarecords.bandcamp.com/album/grupo-elite">
								Grupo Elite by Euthanasie Volontaire
							</a>
						</iframe>
					</div>
				</p>
			</div>
			<div className="NewsListItem">
				<h2>Unhinged rawness: new tapes from Hexenight & Moonglum</h2>
				<p className="NewsListDate">06/19/2020</p>
				<p className="NewsListContent">
					Lofi blackened electronics, carnage of the beat:{" "}
					<a href="https://glossolaliarecords.bandcamp.com/album/hell-is-not-a-myth">
						Hexenight
					</a>
					. Dizzying tremolo wash, blown-out arctic blackness:{" "}
					<a href="https://glossolaliarecords.bandcamp.com/album/esoteric-litany">
						Moonglum
					</a>
					. Both tapes available in an edition of 25.
				</p>
				<p className="listen-now">
					<div className="listen-now-individual">
						LISTEN:
						<br />
						<iframe
							title="hellisnot"
							style={iframeStyles}
							src="https://bandcamp.com/EmbeddedPlayer/album=785125548/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
							seamless
						>
							<a href="http://glossolaliarecords.bandcamp.com/album/hell-is-not-a-myth">
								Hell is Not a Myth by Hexenight
							</a>
						</iframe>
					</div>

					<div className="listen-now-individual">
						LISTEN: <br />
						<iframe
							title="esoteric litany"
							style={iframeStyles}
							src="https://bandcamp.com/EmbeddedPlayer/album=1384652722/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
							seamless
						>
							<a href="http://glossolaliarecords.bandcamp.com/album/esoteric-litany">
								Esoteric Litany by Moonglum
							</a>
						</iframe>
					</div>
				</p>
			</div>
			<div className="NewsListItem">
				<h2>Xenoglyph’s mind-altering debut out now</h2>
				<p className="NewsListDate">04/17/2020</p>
				<p className="NewsListContent">
					Xenoglyph’s monumental debut cassette “Mytharc” is now available for
					streaming and purchase. <br />
					<br />
					Due to Covid-19’s grip on our already-throttled world, please be
					patient as we work to save time and ship units in batches of 10 to 15.
				</p>
				<p className="NewsListContent">
					<a href="https://glossolaliarecords.bandcamp.com/album/mytharc">
						STREAM / PURCHASE MYTHARC
					</a>
				</p>
			</div>
			<div className="NewsListItem">
				<h2>Decibel streams Xenoglyph’s “Mytharc” in its entirety</h2>
				<p className="NewsListDate">04/15/2020</p>
				<p className="NewsListContent">
					Shawn Macomber via Decibel presents an introductory exploration of
					Xenoglyph’s “Mytharc” album via the glossolalia records Bandcamp.{" "}
					<br />
					Read the{" "}
					<a href="https://www.decibelmagazine.com/2020/04/15/full-album-stream-xenoglyph-mytharc/">
						Decibel Magazine Mytharc write-up
					</a>
					.
				</p>
				<p className="NewsListContent">
					<a href="https://glossolaliarecords.bandcamp.com/album/mytharc">
						STREAM / PURCHASE MYTHARC
					</a>
				</p>
				<iframe
					title="Xenoglyph2"
					style={iframeStyles}
					src="https://bandcamp.com/EmbeddedPlayer/album=135620156/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
					seamless
				>
					<a href="http://glossolaliarecords.bandcamp.com/album/mytharc">
						Mytharc by Xenoglyph
					</a>
				</iframe>
			</div>
			<div className="NewsListItem">
				<h2> Xenoglyph’s “Mytharc” pre-order + title track stream</h2>
				<p className="NewsListDate">03/19/2020</p>
				<p className="NewsListContent">
					You can now pre-order the debut full-length from the enigmatic duo
					Xenoglyph entitled “MYTHARC.” Listen to the advanced title track
					below.
				</p>
				<iframe
					title="Xenoglyph"
					style={iframeStyles}
					src="https://bandcamp.com/EmbeddedPlayer/album=135620156/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
					seamless
				>
					<a href="http://glossolaliarecords.bandcamp.com/album/mytharc">
						Mytharc by Xenoglyph
					</a>
				</iframe>
			</div>
			<div className="NewsListItem">
				<h2>Preorder &quot;Anti-Vaxxer&quot; from Bacillus</h2>
				<p className="NewsListDate">02/28/2020</p>
				<p className="NewsListContent">
					Available now for pre-order at the embed below: BACILLUS,
					&quot;ANTI-VAXXER&quot; Edition of 75; $12
				</p>
				<p className="NewsListContent">
					Black tape in biohazard bag with:
					<br />
					(4) collage pieces from Bacillus concerning the reemergence of measles
					and the anti-vaxx movement that propels it
					<br />
					(2) 11 x 17 posters of a related nature, also featuring collage work
					from Bacillus
					<br />
					essay from the project & credits sheet
					<br />
					vaccine administration supplies from Glossolalia Labs
					<br />
				</p>
				<iframe
					title="Bacillus"
					style={iframeStyles}
					src="https://bandcamp.com/EmbeddedPlayer/album=3551539458/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
					seamless
				>
					<a href="http://glossolaliarecords.bandcamp.com/album/anti-vaxxer">
						Anti-Vaxxer by Bacillus
					</a>
				</iframe>
			</div>
			<div className="NewsListItem">
				<h2>Flesh Cage / Willowbrook split cassette available now</h2>
				<p className="NewsListDate">01/24/2020</p>
				<p className="NewsListContent">
					Flesh Cage is P. Pawlak. Willowbrook is K. Parker. Design by D.
					Kanowsky. Mastering by Foul Prey. Vicious, thrumming, and discordant
					power electronics from both projects.
					<br />
					<br />
					<a href="https://glossolaliarecords.bandcamp.com/album/flesh-cage-willowbrook">
						STREAM / PURCHASE FLESH CAGE / WILLOWBROOK
					</a>
					<br />
				</p>
				<iframe
					title="FleshCage+Willowbrook"
					style={iframeStyles}
					src="https://bandcamp.com/EmbeddedPlayer/album=1649621517/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
					seamless
				>
					<a href="http://glossolaliarecords.bandcamp.com/album/flesh-cage-willowbrook">
						Flesh Cage / Willowbrook by Flesh Cage / Willowbrook
					</a>
				</iframe>
			</div>
			<div className="NewsListItem">
				<h2>
					Stream two new titles from σοφος / Willowbrook and Rainwashed Sky
				</h2>
				<p className="NewsListDate">01/24/2020</p>
				<p className="NewsListContent">
					σοφος is σοφος. Willowbrook is KRP. Cover photo by σοφος. Additional
					Editing by SP. Mastering & Layout by KRP. Pay-what-you-want download.
					<br />
					<br />
					<a href="https://glossolaliarecords.bandcamp.com/album/willowbrook">
						STREAM / PURCHASE σοφος / WILLOWBROOK
					</a>
					<br />
				</p>
				<iframe
					title="Willowbrook"
					style={iframeStyles}
					src="https://bandcamp.com/EmbeddedPlayer/album=1604055400/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
					seamless
				>
					<a href="http://glossolaliarecords.bandcamp.com/album/willowbrook">
						σοφος / Willowbrook by σοφος / Willowbrook
					</a>
				</iframe>
				<p className="NewsListContent">
					&quot;Dreamt Ascent&quot; was recorded in autumn 2014 in Eugene,
					Oregon, in old lives, older by the second, younger their memory. σοφος
					& KRP collaborate on keyboards and synths for RWS&quot;s first album.
					Pay-what-you-want download.
					<br />
					<br />
					<a href="https://glossolaliarecords.bandcamp.com/album/willowbrook">
						STREAM / PURCHASE RAINWASHED SKY
					</a>
					<br />
				</p>
				<iframe
					title="DreamAscent"
					style={iframeStyles}
					src="https://bandcamp.com/EmbeddedPlayer/album=2955430228/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
					seamless
				>
					<a href="http://glossolaliarecords.bandcamp.com/album/dreamt-ascent">
						Dreamt Ascent by Rainwashed Sky
					</a>
				</iframe>
			</div>
			<div className="NewsListItem">
				<h2>Deathvoid and Joli cassettes now available!</h2>
				<p className="NewsListDate">12/31/2019</p>
				<p className="NewsListContent">
					Deathvoid unleashes its raw black metal on the “Disappear” tape.
					Edition of 25.
					<br />
					<a href="https://glossolaliarecords.bandcamp.com/album/disappear">
						STREAM / PURCHASE DEATHVOID
					</a>
					<br />
				</p>
				<iframe
					title="Deathvoid"
					style={iframeStyles}
					src="https://bandcamp.com/EmbeddedPlayer/album=4137876972/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
					seamless
				>
					<a href="http://glossolaliarecords.bandcamp.com/album/disappear">
						Disappear by Deathvoid
					</a>
				</iframe>
				<p className="NewsListContent">
					Joli pummels listeners with his trademark pensive wall noise on “Why
					Did You Stop Loving Me?” Edition of 25.
					<br />
					<a href="https://glossolaliarecords.bandcamp.com/album/why-did-you-stop-loving-me">
						STREAM / PURCHASE JOLI
					</a>
					<br />
				</p>
				<iframe
					title="Joli"
					style={iframeStyles}
					src="https://bandcamp.com/EmbeddedPlayer/album=1385953292/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
					seamless
				>
					<a href="http://glossolaliarecords.bandcamp.com/album/why-did-you-stop-loving-me">
						Why Did You Stop Loving Me? by Joli
					</a>
				</iframe>
			</div>
			<div className="NewsListItem">
				<h2>New cassettes from J.S.H. and Faggot Front out now</h2>
				<p className="NewsListDate">12/31/2019</p>
				<p className="NewsListContent">
					Master noise wall artist and Ominous Recordings label boss Johan
					Strömvall Hammarstedt serves up two massive slabs of mutilated static
					as J.S.H. on &quot;I Cut Out My Tongue So I Won&apos;t Speak the
					Truth.&quot;
					<br />
					<br />
					Limited to 13 copies on grey c90 Layout & cover design by KRP
					<br />
					<a href="https://glossolaliarecords.bandcamp.com/album/i-cut-out-my-tongue-so-i-wont-speak-the-truth">
						STREAM / PURCHASE J.S.H.
					</a>
					<br />
				</p>
				<iframe
					title="JSH"
					style={iframeStyles}
					src="https://bandcamp.com/EmbeddedPlayer/album=1167007767/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
					seamless
				>
					<a href="http://glossolaliarecords.bandcamp.com/album/i-cut-out-my-tongue-so-i-wont-speak-the-truth">
						I Cut Out My Tongue So I Won&#39;t Speak The Truth by J.S.H.
					</a>
				</iframe>
				<p className="NewsListContent">
					Dom C. returns! Only those who have spent years mastering their craft
					can successfully weave the minimal with the complex, and that’s
					exactly what Faggot Front accomplishes with the engrossingly textured
					“Eyes like Roadkill.” (Words by N. Willsey)
					<br />
					<br />
					Limited to 12 copies on green cassette Layout & cover design by KRP
					<br />
					<a href="https://glossolaliarecords.bandcamp.com/album/eyes-like-roadkill">
						STREAM / PURCHASE FAGGOT FRONT
					</a>
					<br />
				</p>
				<iframe
					title="Faggot Front"
					style={iframeStyles}
					src="https://bandcamp.com/EmbeddedPlayer/album=4032684177/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
					seamless
				>
					<a href="http://glossolaliarecords.bandcamp.com/album/eyes-like-roadkill">
						Eyes Like Roadkill by Faggot Front
					</a>
				</iframe>
			</div>
			<div className="NewsListItem">
				<h2>Cowardice / Grst split cassette available now</h2>
				<p className="NewsListDate">5/1/2019</p>
				<p className="NewsListContent">
					Glossolalia Records is proud to announce a new split between Cowardice
					and Grst, to be made available digitally and on cassette May 1, 2019.
					The is available for streaming and ordering{" "}
					<a
						href="https://glossolaliarecords.bandcamp.com/album/cowardice-grst"
						target="_blank"
						rel="noopener noreferrer"
					>
						HERE
					</a>
					.
					<br />
					<br />
					Hailing from the east coast,{" "}
					<a
						href="https://cowardicedoom.bandcamp.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Cowardice
					</a>{" "}
					debuted forcefully in 2016 and has enraptured ears with their
					distinctive sludge via several significant releases in the intervening
					years. This most recent expulsion is the consequence of a long
					conspiracy with diffuse black metallers and Glossolalia alumni,{" "}
					<a
						href="https://grst.bandcamp.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Grst
					</a>
					. The resulting block of music is a challengingly dour 40 minutes
					worthy of its state-spanning efforts.
					<br />
				</p>
				<iframe
					title="GRST and Cowardice"
					style={iframeStyles}
					src="https://bandcamp.com/EmbeddedPlayer/album=735274379/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
					seamless
					className="mobile-hide"
				>
					<a href="http://glossolaliarecords.bandcamp.com/album/cowardice-grst">
						Cowardice / Grst by Cowardice / Grst
					</a>
				</iframe>
			</div>
		</>
	);
};

NewsListItemIndividual.propTypes = {
	headline: PropTypes.string,
	postDate: PropTypes.string,
	bandcampUrl: PropTypes.string,
	iframeSrc: PropTypes.array,
	releaseTitle: PropTypes.string,
	newsContent: PropTypes.array,
};

NewsListItem.propTypes = {
	news: PropTypes.array,
};

export default NewsListItem;
