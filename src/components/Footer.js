import githubIcon from '../assets/images/github.svg'
import linkedInIcon from '../assets/images/linkedin.svg'
import stackOverflowIcon from '../assets/images/stack-overflow.svg'
import '../styles/Footer.css'

const styles = {
    icon: {
        height: '75px'
    }
}

export default function Footer() {
    return (
        <footer>
            <p>Made with ❤️ in Charlotte, NC</p>

            <div className='iconWrapper'>
                <a target='_blank' rel="noreferrer" href='https://github.com/Cjmoye30'> <img style={styles.icon} src={githubIcon} alt=' ' /> </a>

                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/cambric-moye-30/'> <img style={styles.icon} src={linkedInIcon} alt=' ' /> </a>

                <a target='_blank' rel="noreferrer" href='https://stackoverflow.com/users/22081388/cambric-moye'> <img style={styles.icon} src={stackOverflowIcon} alt=' ' /> </a>
    
            </div>
        </footer>
    )
}