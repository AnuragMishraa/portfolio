import { useEffect, useState } from 'react'
import { useCallback } from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link'
import ThemeMode from '../utils/theme.util'

import settings from '../../content/_settings.json'
import content  from '../../content/navbar.json'
import css from '../../styles/structure/navbar.module.scss'

export default function Navbar() {

	const router = useRouter()

	const [ menuState, menuToggle ] = useState()

	useEffect( () => {
		menuToggle(false)
	}, [] )

	useEffect( () => {
		class RouteEvents {

			constructor() {
				console.log(
					'%c☰  Navigation Router Events Loaded', 
					'background: #060708; color: #fff; padding: .125rem .75rem; border-radius: 5px; font-weight: 900; '
				)
				this.addEventListeners()
			}

			closeMenu() {
				menuToggle(false)
			}

			addEventListeners() {
				router.events.on('routeChangeComplete', this.closeMenu)
			}

			removeEventListeners() {
				router.events.off('routeChangeComplete', this.closeMenu)
			}
		}

		const routeEvents = new RouteEvents

		return () => {
			routeEvents.removeEventListeners()
		}
	}, [router.events] )

	useEffect(() => {
        class ScrollEvents {
            constructor() {
                window.sticky = {};
                window.sticky.nav = document.querySelector(`nav`);
                this.hideTimeout = null;
                this.lastY = window.scrollY;

                this.maybeHideNav = this.maybeHideNav.bind(this);
                this.handleMouseMove = this.handleMouseMove.bind(this);

                this.addEventListeners();
            }

            addEventListeners() {
                if (window.sticky.nav) {
                    window.addEventListener('DOMContentLoaded', this.maybeHideNav, false);
                    document.addEventListener('scroll', this.maybeHideNav, false);
                    document.addEventListener('mousemove', this.handleMouseMove, false);
                }
            }

            removeEventListeners() {
                if (window.sticky.nav) {
                    window.removeEventListener('DOMContentLoaded', this.maybeHideNav, false);
                    document.removeEventListener('scroll', this.maybeHideNav, false);
                    document.removeEventListener('mousemove', this.handleMouseMove, false);
                }
                if (this.hideTimeout) clearTimeout(this.hideTimeout);
            }

            handleMouseMove(e) {
                const nC = window.sticky.nav.classList;
                if (e.clientY < 60) {
                    nC.remove(css.hidden);
                    if (this.hideTimeout) clearTimeout(this.hideTimeout);
                }
            }

            maybeHideNav() {
                const nC = window.sticky.nav.classList;
                const hiddenAt = window.innerHeight / 2;

                if (window.scrollY > this.lastY && window.scrollY > hiddenAt && !nC.contains(css.hidden)) {
                    // Delay hiding by 3 seconds
                    if (this.hideTimeout) clearTimeout(this.hideTimeout);
                    this.hideTimeout = setTimeout(() => {
                        nC.add(css.hidden);
                    }, 2000);
                } else if (window.scrollY < this.lastY && nC.contains(css.hidden)) {
                    if (this.hideTimeout) clearTimeout(this.hideTimeout);
                    nC.remove(css.hidden);
                }
                this.lastY = window.scrollY;
            }
        }

        const scrollEvents = new ScrollEvents();

        return () => {
            scrollEvents.removeEventListeners();
        };
    }, [] )

	const toggleMenu = () => {
		let bool = ! menuState
		menuToggle(bool)
	}

	return (
		<nav id="Navbar" className={css.container}>
			<ul className={css.menu}>
				<li className={css.menuHeader}>
					<a className={css.logo} href="#home">
						{settings.name}
					</a>
					<button onClick={toggleMenu} className={css.mobileToggle} data-open={menuState}>
						<div>
							<span></span>
							<span></span>
						</div>
					</button>
				</li>
				<li data-open={menuState} className={css.menuContent}>
					<ul>
						<li>
							<a href="#projects" onClick={toggleMenu}>Projects</a>
						</li>
						<li>
							<a href="#about" onClick={toggleMenu}>About Me</a>
						</li>
						<li>
							<a href="#technical" onClick={toggleMenu}>Skills</a>
						</li>
						<li>
							<ThemeMode />
						</li>
					</ul>
				</li>
			</ul>
			<span onClick={toggleMenu} className={css.menuBlackout} data-open={menuState}></span>
		</nav>
	)
}
