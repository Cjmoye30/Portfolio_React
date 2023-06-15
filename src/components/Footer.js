import githubIcon from '../assets/images/github.svg'
import linkedInIcon from '../assets/images/linkedin.svg'
import '../styles/Footer.css'

const styles = {
    icon: {
        height: '100px'
    }
}

export default function Footer() {
    return (
        <footer>
            <p>Made with ❤️ in Charlotte, NC</p>

            <div className='iconWrapper'>
                <img style={styles.icon} src={githubIcon} />
                <img style={styles.icon} src={linkedInIcon} />

            </div>
        </footer>
    )
}