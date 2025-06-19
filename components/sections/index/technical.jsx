// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`} id="technical">
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="Specializing in modern, scalable full-stack web development, I create efficient digital solutions by leveraging frameworks, APIs, and design best practices."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock
							title="Technical Versatility"
							icon={['fat', 'chart-network']}
							copy="Integrating advanced AI tools, robust backend services, and polished frontend designs, I bridge technical depth with intuitive user experiences. My multifaceted skills empower me to manage end-to-end development cycles, consistently balancing creativity with performance optimization."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock
							title="Software I love to work with"
							copy="Through diverse experiences in startups and freelance projects, I've mastered a variety of professional tools that streamline my workflow and enhance productivity. This is just some of the software I have used over that time."
							list={software}
							block="software"
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
						<BadgesBlock
							title="Technologies I love to build with"
							copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. I employ a robust set of technologies to turn innovative ideas into reality!"
							list={tech}
							block="tech"
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'vscode', name: 'VSCode', type: 'devicon' },
	{ key: 'figma', name: 'Figma', type: 'devicon' },
	{ key: 'mailbox', name: 'Postman', type: 'fas' },
	{ key: 'computer-mouse', name: 'Click Up', type: 'fas' },
	{ key: 'firebase', name: 'Firebase', type: 'devicon' },
	{ key: 'computer-mouse', name: 'Jira', type: 'fas' },
	{ key: 'googlecloud', name: 'GCP', type: 'devicon' },
	{ key: 'amazonwebservices', name: 'AWS', type: 'devicon' },
]

const tech = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'tailwindcss', name: 'TailwindCSS', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'redux', name: 'Redux Toolkit', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
]