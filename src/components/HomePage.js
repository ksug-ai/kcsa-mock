import React, { useState } from 'react'; // Import useState

function HomePage({
  numQuestions,
  setNumQuestions,
  startExam,
  maxQuestions,
  availableDomains,
  selectedDomains,
  setSelectedDomains
}) {
  const [showOptions, setShowOptions] = useState(false); // State for options visibility

  const handleDomainChange = (domain) => {
    setSelectedDomains(prevSelected => {
      if (prevSelected.includes(domain)) {
        // Prevent deselecting the last domain
        if (prevSelected.length === 1) {
          return prevSelected;
        }
        return prevSelected.filter(d => d !== domain);
      } else {
        return [...prevSelected, domain];
      }
    });
  };

  return (
    <div className="homepage-container">
      <div className="homepage-inner">
        {/* Removed text-center class from the main wrapper */}
        <div>
          <h1 className="exam-title text-center">Ace the Exam with Practice</h1>
          <hr className="setup-separator" />
          {/* Exam Setup Card */}
          <div className="exam-setup-card">

            {/* Top row: Number input and Start button */}
            <div className="setup-top-row">
              {/* Input Group - Label and Input separated for flex alignment */}
              <div className="number-input-group">
                 <label htmlFor="num-questions-input" className="input-label">Number of questions:</label>
                 <input
                   id="num-questions-input"
                   type="number"
                   value={numQuestions}
                   onChange={(e) => setNumQuestions(Math.max(1, Math.min(maxQuestions, parseInt(e.target.value) || 0)))}
                   className="question-input"
                 />
     {/* Start Button */}
              <button
                onClick={startExam}
                className="start-button"
                disabled={selectedDomains.length === 0}
              >
                Start Exam
              </button>
              </div>
         
            </div>

            {/* Separator (Optional) */}
             <hr className="setup-separator" />

            {/* Extra Options Toggle - Moved below top row */}
            <div className="extra-options-toggle" style={{ textAlign: 'center' }}>
              <button
                onClick={() => setShowOptions(!showOptions)}
                className="options-toggle-button"
                style={{ display: 'inline-block', margin: '0 auto' }}
              >
                {showOptions ? 'Hide Extra Options' : 'Show Extra Options'}
              </button>
            </div>

            {/* Domain Selection Section (Conditional) - Remains below toggle */}
            {showOptions && availableDomains && availableDomains.length > 0 && (
              <div className="domain-options-card">
                {/* Added emoji to title */}
                <h3 className="domain-selection-title">✨ Select Exam Domains</h3>
                <p className="domain-selection-description">
                  Choose specific domains to focus your practice exam. Only questions from the selected domains will be included.
                </p>
                <div className="domain-checkboxes">
                {availableDomains.map(domain => (
                  <div key={domain} className="domain-checkbox-item" style={{ marginBottom: '5px' }}>
                    <input
                      type="checkbox"
                      id={`domain-${domain}`}
                      value={domain}
                      checked={selectedDomains.includes(domain)}
                      onChange={() => handleDomainChange(domain)}
                      className="domain-checkbox"
                    />
                    <label htmlFor={`domain-${domain}`} className="domain-label">
                      {/* Replaced underscore replacement with CSS text-transform potentially */}
                      {domain}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            )}
            {/* End Domain Selection Section */}

          </div>
          {/* End Exam Setup Card */}

        </div> {/* Close the wrapper div */}
        <hr className="setup-separator" />

        {/* Keep About, Creator, Community sections as they were */}
        <div className="about-container">
          <div className="about-header">
            <h2 className="section-title">About the App</h2>
          </div>
          <div className="about-content">
            <p className="about-text">
              This app is a mock exam for the Kubernetes Security (KCSA) certification. It consists of multiple-choice questions to test your knowledge of Kubernetes security concepts.
            </p>
            <p className="about-text">
              The exam is timed, and you will have 1 minute per question. You can flag questions to review later. Once you finish the exam, you can review your answers and see explanations for each question.
            </p>
          </div>
          {/* Invite people to contribute to the project on GitHub. */}
          <div className="about-footer">
            <p className="about-text">
              If you'd like to contribute to this project, please visit the GitHub repository.
            </p>
            <a
              href="https://github.com/thiago4go/kubernetes-security-kcsa-mock"
              className="github-link"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="creator-container">
          <div className="creator-header">
            <h2 className="section-title">About the Creator</h2>
          </div>
          <div className="image-container">
  <img 
    src="/Kubestronaut.png" 
    alt="Kubestronaut" 
    className="responsive-image"
  />
</div>

          <div className="creator-content">
            <dl className="creator-details">
              <div className="detail-row">
                <dt className="detail-label">Name</dt>
                <dd className="detail-content">Thiago S Shimada Ramos</dd>
              </div>
              <div className="detail-row">
                <dt className="detail-label">Bio</dt>
                <dd className="detail-content">
                  Tech Leader driving business growth with AI-powered Cloud-Native solutions working with Kubernetes, Open Source, OpenShift and Champion for Green Software!🍀
                </dd>
              </div>
              <div className="detail-row">
                <dt className="detail-label">About</dt>
                               

                <dd className="detail-content">
               
 
                  <p>Hi, I'm Thiago. I'm a cloud-native developer with a passion for Kubernetes and secure systems. With a background spanning Brazil, Japan, and now Australia, I enjoy tackling complex problems. 💻</p>
                  <p className="mt-2">I'm an active member of the CNCF Security TAG and co-organizer of the Melbourne Kubernetes User Group. When I'm not coding, I'm usually playing Go or solving a Rubik's cube.</p>
            </dd>
              </div>
              <div className="detail-row">
                <dt className="detail-label">Links</dt>
                <dd className="detail-content">
                  <div className="links">
                    <a href="http://thiago4go.github.io/" className="link">Blog</a>
                    <a href="https://www.linkedin.com/in/thiago4go/" className="link">LinkedIn</a>
                    <a href="https://github.com/thiago4go" className="link">GitHub</a>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="community-container">
          <div className="community-header">
            <h2 className="section-title">Community Involvement</h2>
          </div>
          <div className="community-content">
            <dl className="community-details">
              <div className="detail-row">
                <dt className="detail-label">KSUG.AI</dt>
                <dd className="detail-content">
                  <p>Global Volunteer Advocate and Co-host for KSUG.AI</p>
                  <a href="https://www.linkedin.com/company/k8sug/" className="link">Visit KSUG.AI on LinkedIn</a>
                  <div className="community-logo">
                    <img src="https://ksug.ai/assets/Logo-C22ZmRMJ.jpg" alt="KSUG.AI Logo" />
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
