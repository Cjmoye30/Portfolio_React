import Button from 'react-bootstrap/Button';
import resume from '../assets/docs/WebDevResume.docx'
import '../styles/Resume.css'


export default function Resume() {
    return (

        <section className='resumeSection'>

            <div className='sectionHeader'>
                <h2>Resume</h2>
            </div>

            <div className='resumeContainer'>
                <iframe src='https://docs.google.com/document/d/e/2PACX-1vQVBG6SpQCDQJAhgPiD9J1DIq682_ylQhgw79mhZBc0-mTOp5mH_YHrr0YQHFC8pm-K44kJsPjNMd7e/pub' frameborder="0"> </iframe>

                <Button className='download'>
                    <a href={resume} download>Download Resume</a>
                </Button>
            </div>

        </section>
    )
}