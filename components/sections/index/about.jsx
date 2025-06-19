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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section} id="about">
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I'm a Full-Stack Developer crafting dynamic, high-performance web applications with a user-first philosophy and robust systems design architectures, I am a well-rounded digital professional."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/family-photo.jpg" alt="Nelson family photo" />
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock
							title="Soft Skills That Set Me Apart"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fat', 'ear-listen']}
							copy="Beyond code, I excel at clear communication and proactive collaboration. I thrive in Agile teams, balancing speed with precision. As someone who’s collaborated remotely across time zones and led projects from design to deployment, I bring strong communication, ownership, and leadership to every role."
						/>
						<BadgesBlock
							title="Reasearch and planning"
							containerClass={about.container}
							list={methods}
							fullContainer="fullContainer"
							block="methods"
							icon="fingerprint"
							copy="One of my favorite aspects of devloping is planning the architecture of a project, from designing systems to color theory — I enjoy working with the many touch points of user experience."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>
			</Container>
		</Section>
	)
}

const methods = [
	{ key: 'planet-moon', name: 'User Research', type: 'fad' },
	{ key: 'qrcode', name: 'One Page Apps', type: 'fad' },
	{ key: 'window', name: 'Design Systems', type: 'fad' },
	{ key: 'cubes', name: 'Agile Scrums', type: 'far' },
	{ key: 'layer-plus', name: 'Mordern Technology', type: 'fad' },
	{ key: 'solar-system', name: 'API Integration', type: 'fad' },
]