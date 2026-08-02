import './Resume.css';
import resumePDF from '../assets/Nat_Cabrera_Resume.pdf';

function Resume() {
    return (
        <div className="resume-container">
            <h1 className="resume-title">Resume</h1>
            <iframe
                src={resumePDF}
                title="Nat Cabrera Resume"
                className="resume-pdf"
            ></iframe>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-download">
                Open in new tab ↗
            </a>
        </div>
    );
}

export default Resume;