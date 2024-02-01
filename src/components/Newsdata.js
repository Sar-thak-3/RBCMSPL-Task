import React from "react";
import "./Newsdata.css";
import { useState } from "react";
import {Link,useHistory} from "react-router-dom";
import { useEffect } from "react";

const Newsdata = ({}) => {
    const history = useHistory();
    let p = new URLSearchParams(window.location.search);
    const [username, setUsername] = useState("");
    const [page, setPage] = useState(1);

    if(localStorage.getItem("username")){
        setUsername(localStorage.getItem("username"));
    }
    // console.log(p)
    if(p.get("p") && page !== parseInt(p.get("p"))){
        console.log(p.get("p"));
        setPage(parseInt(p.get("p")));
        console.log(page)
    }

    const hangleLogout = () => {
        localStorage.removeItem("username");
        setUsername("");
        history.push("/");
    }

    useEffect(() => {

    },[]);

    return (
        <>
            {<center>
                <table id="hnmain" style={{border:"0",cellpadding:"0",cellspacing:"0",width:"85%",backgroundColor:"#f6f6ef"}}>
                    <tr>
                        <td style={{backgroundColor:"#ff6600"}}>
                            <table style={{border:"0", cellpadding:"0" ,cellspacing:"0", width:"100%", padding: "2px"}}>
                                {username && <tr>
                                    <td style={{width:"18px",paddingRight:"4px"}}>
                                        <Link to="/">
                                            <img src="https://news.ycombinator.com/y18.svg" width="18" height="18" style={{border:"1px white solid", display:"block"}} />
                                        </Link>
                                    </td>
                                    <td style={{lineHeight:"12pt", height:"10px"}}>
                                        <span className="pagetop">
                                            <b className="hnname">
                                                <Link to="news">Hacker News    |</Link>
                                            </b>
                                            <Link to="/">welcome</Link> |               <Link to="/">new</Link> | <Link to="/">threads</Link> | <Link to="front">past</Link> | <Link to="/">comments</Link> | <Link to="/">ask</Link> | <Link to="/">show</Link> | <Link to="/">jobs</Link> | <Link to="/" rel="nofollow">submit</Link>            
                                        </span>
                                    </td>
                                    <td style={{textAlign:"right",paddingRight:"4px"}}>
                                        <span className="pagetop">
                                            <Link id='me' to="/">{username}</Link> (<span id='karma'>1</span>) | <a id='logout' rel='nofollow' onClick={hangleLogout} href="/">logout</a>                          
                                        </span>
                                    </td>
                                    <td style={{textAlign:"right",paddingRight:"4px"}}>
                                        <span className="pagetop">
                                            <Link to="login?goto=news">login</Link>
                                        </span>
                                    </td>
                                </tr>}
                                {!username && <tr>
                                    <td style={{width:"18px",paddingRight:"4px"}}>
                                        <Link to="/">
                                            <img src="https://news.ycombinator.com/y18.svg" width="18" height="18" style={{border:"1px white solid", display:"block"}} />
                                        </Link>
                                    </td>
                                    <td style={{lineHeight:"12pt", height:"10px"}}>
                                        <span className="pagetop">
                                            <b className="hnname">
                                                <Link to="news">Hacker News    |</Link>
                                            </b>
                                            <Link to="/">new</Link> | <Link to="front">past</Link> | <Link to="/">comments</Link> | <Link to="/">ask</Link> | <Link to="/">show</Link> | <Link to="/">jobs</Link> | <Link to="/" rel="nofollow">submit</Link>            
                                        </span>
                                    </td>
                                    {username && <td style={{textAlign:"right",paddingRight:"4px"}}>
                                        <span className="pagetop">
                                            <Link id='me' to="/">{username}</Link> (<span id='karma'>1</span>) | <a id='logout' rel='nofollow' onClick={hangleLogout} href="/">logout</a>                          
                                        </span>
                                    </td>}
                                    {!username && <td style={{textAlign:"right",paddingRight:"4px"}}>
                                        <span className="pagetop">
                                            <Link to="login?goto=news">login</Link>
                                        </span>
                                    </td>}
                                </tr>}
                            </table>
                        </td>
                    </tr>
                    <tr id="pagespace" title="" style={{height:"10px"}}>
                    </tr>
                    <tr>
                        <td>
                            <table style={{border:"0" ,cellpadding:"0" ,cellspacing:"0"}}>
                                <tr className='athing' id='39214743'>
                                    <td align="right" valign="top" className="title">
                                        <span className="rank">1.</span>
                                    </td>      
                                    <td valign="top" className="votelinks">
                                        <center>
                                            <Link id='up_39214743' className='clicky' to='vote?id=39214743&amp;how=up&amp;auth=cd2b1354db0ac798711035dce313fd0fc2dd73ca&amp;goto=news'>
                                                <div className='votearrow' title='upvote'>
                                                </div>
                                            </Link>
                                        </center>
                                    </td>
                                    <td className="title">
                                        <span className="titleline"><a href="https://words.filippo.io/dispatches/mlkem768/">Show HN: filippo.io&#x2F;mlkem768 – Post-Quantum Cryptography for the Go Ecosystem</a>
                                        <span className="sitebit comhead"> (<Link to="from?site=filippo.io"><span className="sitestr">filippo.io</span></Link>)</span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td className="subtext">
                                        <span className="subline">
                                            <span className="score" id="score_39214743">98 points</span> by <Link to="user?id=FiloSottile" className="hnuser">FiloSottile</Link> <span className="age" title="2024-02-01T11:10:58"><Link to="item?id=39214743">1 hour ago</Link></span> <span id="unv_39214743"></span> | <Link to="hide?id=39214743&amp;auth=cd2b1354db0ac798711035dce313fd0fc2dd73ca&amp;goto=news" className="clicky hider">hide</Link> | <Link to="item?id=39214743">13&nbsp;comments</Link>        
                                        </span>
                                    </td>
                                </tr>
                                <tr className="spacer" style={{height:"5px"}}>

                                </tr>
                                <tr className='athing' id='39215779'>
                                    <td align="right" valign="top" className="title">
                                        <span className="rank">2.</span>
                                    </td>      
                                    <td valign="top" className="votelinks">
                                        <center>
                                            <Link id='up_39215779' className='clicky' to='vote?id=39215779&amp;how=up&amp;auth=7e408fe9a47a557ca38794bf0dbdaf737fd38afa&amp;goto=news'>
                                                <div className='votearrow' title='upvote'>
                                                    </div>
                                            </Link>
                                        </center>
                                    </td>
                                    <td className="title">
                                        <span className="titleline"><Link to="item?id=39215779">Launch HN: Escape (YC W23) – Discover and secure all your APIs</Link>
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                    </td>
                                    <td className="subtext">
                                        <span className="subline">
                                            <span className="score" id="score_39215779">18 points</span> by <Link to="user?id=glimow" className="hnuser">glimow</Link> <span className="age" title="2024-02-01T13:38:42"><Link to="item?id=39215779">16 minutes ago</Link></span> <span id="unv_39215779"></span> | <Link to="hide?id=39215779&amp;auth=7e408fe9a47a557ca38794bf0dbdaf737fd38afa&amp;goto=news" className="clicky hider">hide</Link> | <Link to="item?id=39215779">1&nbsp;comment</Link>        
                                        </span>
                                    </td>
                                </tr>

                                <tr className="spacer" style={{height:"5px"}}>
                                </tr>
                                <tr className="morespace" style={{height:"10px"}}>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                    </td>
                                    <td className='title'>
                                        <a href={`?p=${page+1}`} className='morelink' rel='next'>More</a>
                                    </td>    
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="s.gif" height="10" width="0" />
                                <table style={{width:"100%" ,cellspacing:"0" ,cellpadding:"1"}}>
                                    <tr>
                                        <td style={{backgroundColor:"#ff6600"}}>
                                        </td>
                                    </tr>
                                </table>
                                <br />
                                <center>
                                    <span className="yclinks"><Link to="newsguidelines.html">Guidelines</Link> | <Link to="newsfaq.html">FAQ</Link> | <Link to="lists">Lists</Link> | <Link to="https://github.com/HackerNews/API">API</Link> | <Link to="security.html">Security</Link> | <Link to="https://www.ycombinator.com/legal/">Legal</Link> | <Link to="https://www.ycombinator.com/apply/">Apply to YC</Link> | <Link to="mailto:hn@ycombinator.com">Contact</Link>
                                    </span>
                                    <br /><br />
                                    <form method="get" action="//hn.algolia.com/">Search: <input type="text" name="q" size="17" autoCorrect="off" spellCheck="false" autoCapitalize="off" autoComplete="false" />
                                    </form>
                                </center>
                        </td>
                    </tr>      
                </table>
            </center>}
        </>
    );
}

export default Newsdata;