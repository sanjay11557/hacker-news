import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../Components/Logo/index'
import './style.css'

const Header=(props)=>{
    let leaderlinks;
    if(props.links){
        leaderlinks = props.links.map((link,index) => {
            if(index===props.links.length-1)
                return <Link to="new" key={`link${index}`}> {link}</Link>
            else
                return <Link to="new" key={`link${index}`}> {link} |</Link>
        })
    }
    return(
        <div>
            <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{padding:'2px'}}>
                <tbody>
                    <tr>
                        <td style={{width:'18px', paddingRight:'4px'}}>
                            <Link to="top">
                                <Logo/>
                            </Link>
                        </td>
                        <td style={{lineHeight:'12pt', height:'10px'}}>
                            <span className="pagetop">
                                <b className="hnname">
                                    <Link to="top">Hacker News</Link>
                                </b>
                                {leaderlinks}
                            </span>
                        </td>
                        <td style={{textAlign:'right', paddingRight:'4px'}}>
                            <span className="pagetop"><a href="#">login</a></span>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
    );

}

export default Header

