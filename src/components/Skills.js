import React from 'react'
import { motion } from "framer-motion"
import {azureDevops,cprogramming,cocos,cplus,csharp,css,dotnet,git,html,javascript,azure,mssql,mysql,react,svn} from './../assets/images'

function Skills() {
    const onHoverSpring = {
        whileHover: { scale: 1.2 },
        transition: { type: "spring", stiffness: 400, damping: 10 },
    };

   return (
    <div >
    <motion.div>
        <motion.h2 className='grid-label'>Languages and Frameworks</motion.h2>
        <motion.ul className='grid'>
            <motion.li className='grid-item' {...onHoverSpring}>{azureDevops} Azure DevOps</motion.li>
            <motion.li className='grid-item' {...onHoverSpring}>{cprogramming} C</motion.li>
            <motion.li className='grid-item' {...onHoverSpring}>{cocos} Cocos</motion.li>
            <motion.li className='grid-item' {...onHoverSpring}>{cplus}C++</motion.li>
            <motion.li className='grid-item' {...onHoverSpring}>{csharp}C#</motion.li>
            <motion.li className='grid-item' {...onHoverSpring}>{css} CSS3</motion.li>
            <motion.li className='grid-item' {...onHoverSpring}>{dotnet} .NET</motion.li>
            <motion.li className='grid-item' {...onHoverSpring}>{git}Git</motion.li>
            <motion.li className='grid-item' {...onHoverSpring}>{html} HTML</motion.li>
            <motion.li className='grid-item' {...onHoverSpring}>{javascript}JavaScript</motion.li>
            <motion.li className='grid-item' {...onHoverSpring}>{azure}Microsoft Azure</motion.li>
            <motion.li className='grid-item' {...onHoverSpring}>{mssql}Microsoft SQL</motion.li>
            <motion.li className='grid-item' {...onHoverSpring}>{mysql}MySQL</motion.li>
            <motion.li className='grid-item' {...onHoverSpring}>{react}React</motion.li>
            <motion.li className='grid-item' {...onHoverSpring}>{svn}SVN</motion.li>
        </motion.ul>
    </motion.div>
    </div>);
}

export default Skills;