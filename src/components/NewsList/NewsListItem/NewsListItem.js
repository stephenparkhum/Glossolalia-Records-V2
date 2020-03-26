import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import './NewsListItem.css';
import NEWS from '../../../data/news';

const NewsListItem = () => {
    let iframeStyles = {
        border: 0,
        width: '350px',
        height: '470px'
    };

    return (
        <>
        <div className="NewsListItem">
            <h2>Preorder "Anti-Vaxxer" from Bacillus</h2>
            <p className="NewsListDate">02/28/2020</p>
            <p className="NewsListContent">
            Available now for pre-order at the embed below: BACILLUS, "ANTI-VAXXER" Edition of 75; $12
            </p>
            <p className="NewsListContent">
            Black tape in biohazard bag with:
                            <br />(4) collage pieces from Bacillus concerning the reemergence of measles and the
                            anti-vaxx movement that propels it
                            <br />(2) 11 x 17 posters of a related nature, also featuring collage work from Bacillus
                            <br />essay from the project & credits sheet
                            <br />vaccine administration supplies from Glossolalia Labs
                            <br />
            
            </p>
            <iframe title="Bacillus" style={iframeStyles} src="https://bandcamp.com/EmbeddedPlayer/album=3551539458/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://glossolaliarecords.bandcamp.com/album/anti-vaxxer">Anti-Vaxxer by Bacillus</a></iframe>
        </div>
        <div className="NewsListItem">
            <h2>Flesh Cage / Willowbrook split cassette available now</h2>
            <p className="NewsListDate">01/24/2020</p>
            <p className="NewsListContent">
            Flesh Cage is P. Pawlak. Willowbrook is K. Parker. Design by D. Kanowsky. Mastering by Foul
                            Prey. Vicious, thrumming, and discordant power electronics from both projects.
                            <br /><br /><a
                                href="https://glossolaliarecords.bandcamp.com/album/flesh-cage-willowbrook">STREAM
                                / PURCHASE
                                FLESH CAGE / WILLOWBROOK</a>
                            <br />
            </p>
            <iframe title="FleshCage+Willowbrook" style={iframeStyles} 
                                src="https://bandcamp.com/EmbeddedPlayer/album=1649621517/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                                seamless><a
                                    href="http://glossolaliarecords.bandcamp.com/album/flesh-cage-willowbrook">Flesh
                                    Cage / Willowbrook by Flesh Cage / Willowbrook</a></iframe>
        </div>
        <div className="NewsListItem">
            <h2>Stream two new titles from σοφος / Willowbrook and Rainwashed Sky</h2>
            <p className="NewsListDate">01/24/2020</p>
            <p className="NewsListContent">
            σοφος is σοφος. Willowbrook is KRP. Cover photo by σοφος. Additional Editing by SP.
                            Mastering & Layout by KRP. Pay-what-you-want download.
                            <br /><br /><a href="https://glossolaliarecords.bandcamp.com/album/willowbrook">STREAM /
                                PURCHASE σοφος / WILLOWBROOK</a>
                            <br />
            </p>
            <iframe title="Willowbrook" style={iframeStyles}
                                src="https://bandcamp.com/EmbeddedPlayer/album=1604055400/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                                seamless><a href="http://glossolaliarecords.bandcamp.com/album/willowbrook">σοφος /
                                    Willowbrook by σοφος / Willowbrook</a></iframe>
            <p className="NewsListContent">
            "Dreamt Ascent" was recorded in autumn 2014 in Eugene, Oregon, in old lives, older by the
                            second, younger their memory. σοφος & KRP collaborate on keyboards and synths for RWS’s
                            first album. Pay-what-you-want download.
                            <br /><br /><a href="https://glossolaliarecords.bandcamp.com/album/willowbrook">STREAM /
                                PURCHASE RAINWASHED SKY</a>
                            <br />
            </p>
            <iframe title="DreamAscent" style={iframeStyles}
                                src="https://bandcamp.com/EmbeddedPlayer/album=2955430228/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                                seamless><a href="http://glossolaliarecords.bandcamp.com/album/dreamt-ascent">Dreamt
                                    Ascent by Rainwashed Sky</a></iframe>
        </div>
        <div className="NewsListItem">
            <h2>Deathvoid and Joli cassettes now available!</h2>
            <p className="NewsListDate">12/31/2019</p>
            <p className="NewsListContent">
            Deathvoid unleashes its raw black metal on the “Disappear” tape. Edition of 25.
                            <br /><a href="https://glossolaliarecords.bandcamp.com/album/disappear">STREAM / PURCHASE
                                DEATHVOID</a>
                            <br />
            </p>
            <iframe title="Deathvoid" style={iframeStyles} 
                                src="https://bandcamp.com/EmbeddedPlayer/album=4137876972/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                                seamless><a href="http://glossolaliarecords.bandcamp.com/album/disappear">Disappear by
                                    Deathvoid
                                </a>
                            </iframe>
            <p className="NewsListContent">
            Joli pummels listeners with his trademark pensive wall noise on “Why Did You Stop Loving
                            Me?” Edition of 25.
                            <br /><a
                                href="https://glossolaliarecords.bandcamp.com/album/why-did-you-stop-loving-me">STREAM /
                                PURCHASE JOLI</a>
                            <br />
            </p>
            <iframe title="Joli" style={iframeStyles}
                                src="https://bandcamp.com/EmbeddedPlayer/album=1385953292/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                                seamless><a
                                    href="http://glossolaliarecords.bandcamp.com/album/why-did-you-stop-loving-me">Why
                                    Did You Stop Loving Me? by Joli</a></iframe>
        </div>
        <div className="NewsListItem">
            <h2>New cassettes from J.S.H. and Faggot Front out now</h2>
            <p className="NewsListDate">12/31/2019</p>
            <p className="NewsListContent">
            Master noise wall artist and Ominous Recordings label boss Johan Strömvall Hammarstedt
                            serves up two massive slabs of mutilated static as J.S.H. on "I Cut Out My Tongue So I Won't
                            Speak the Truth."
                            <br /><br />
                            Limited to 13 copies on grey c90
                            Layout & cover design by KRP
                            <br /><a
                                href="https://glossolaliarecords.bandcamp.com/album/i-cut-out-my-tongue-so-i-wont-speak-the-truth">STREAM
                                / PURCHASE J.S.H.</a>
                            <br />
            </p>
            <iframe title="JSH" style={iframeStyles}
                                src="https://bandcamp.com/EmbeddedPlayer/album=1167007767/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                                seamless><a
                                    href="http://glossolaliarecords.bandcamp.com/album/i-cut-out-my-tongue-so-i-wont-speak-the-truth">I
                                    Cut Out My Tongue So I Won&#39;t Speak The Truth by J.S.H.</a></iframe>
            <p className="NewsListContent">
            Dom C. returns! Only those who have spent years mastering their craft can successfully weave
                            the minimal with the complex, and that’s exactly what Faggot Front accomplishes with the
                            engrossingly textured “Eyes like Roadkill.” (Words by N. Willsey)
                            <br /><br />
                            Limited to 12 copies on green cassette
                            Layout & cover design by KRP
                            <br /><a href="https://glossolaliarecords.bandcamp.com/album/eyes-like-roadkill">STREAM /
                                PURCHASE FAGGOT FRONT</a>
                            <br />
            </p>
            <iframe title="Faggot Front" style={iframeStyles}
                                src="https://bandcamp.com/EmbeddedPlayer/album=4032684177/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                                seamless><a href="http://glossolaliarecords.bandcamp.com/album/eyes-like-roadkill">Eyes
                                    Like Roadkill by Faggot Front</a></iframe>
        </div>
        <div className="NewsListItem">
            <h2>Cowardice / Grst split cassette available now</h2>
            <p className="NewsListDate">5/1/2019</p>
            <p className="NewsListContent">
            Glossolalia Records is proud to announce a new split between Cowardice and
                            Grst, to be made
                            available digitally and on
                            cassette May 1, 2019. The is available for streaming and ordering <a
                                href="https://glossolaliarecords.bandcamp.com/album/cowardice-grst"
                                target="_blank">HERE</a>.
                            <br /><br />
                            Hailing from the east coast, <a href="https://cowardicedoom.bandcamp.com/"
                                target="_blank">Cowardice</a> debuted forcefully in 2016 and has enraptured ears with
                            their distinctive sludge
                            via several significant releases in the intervening years. This most recent expulsion is the
                            consequence of a long
                            conspiracy with diffuse black metallers and Glossolalia alumni, <a
                                href="https://grst.bandcamp.com/" target="_blank">Grst</a>. The resulting block of music
                            is a challengingly
                            dour 40 minutes worthy of its state-spanning efforts.<br />
            </p>
            <iframe title="GRST and Cowardice" style={iframeStyles}
                                src="https://bandcamp.com/EmbeddedPlayer/album=735274379/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
                                seamless class="mobile-hide"><a
                                    href="http://glossolaliarecords.bandcamp.com/album/cowardice-grst">Cowardice / Grst
                                    by Cowardice /
                                    Grst</a></iframe>
        </div>
        </>
    )
};

export default NewsListItem;