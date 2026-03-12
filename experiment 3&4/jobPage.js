// Profile Handling
document.getElementById('jobSearchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const targetRole = document.getElementById('targetRole').value;
    const location = document.getElementById('location').value;
    const salary = document.getElementById('salary').value;
    const skills = document.getElementById('skills').value.split(',').map(s => s.trim());

    // Update profile card
    document.getElementById('displayFullName').innerText = fullName;
    document.getElementById('displayRole').innerText = targetRole;
    document.getElementById('displayLocation').innerText = location;
    document.getElementById('displaySalary').innerText = salary;
    document.getElementById('profileImgLetter').innerText = fullName;

    // Update skills
    const skillsContainer = document.getElementById('displaySkills');
    skillsContainer.innerHTML = '';
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.classList.add('skill-tag');
        span.innerText = skill;
        skillsContainer.appendChild(span);
    });
});

// Job Posting Handling
document.getElementById('jobPostingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('jobTitle').value;
    const company = document.getElementById('compName').value;
    const loc = document.getElementById('jobLoc').value;
    const sal = document.getElementById('jobSal').value;
    const type = document.getElementById('jobType').value;
    const initial = document.getElementById('compInitial').value.toUpperCase();

    // Create new job card
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card new-job-card';
    
    const typeClass = type === 'remote' ? 'remote' : 'full';
    const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);

    jobCard.innerHTML = `
        <div class="job-top">
            <div class="company-logo">${initial}</div>
            <span class="job-type ${typeClass}">${typeLabel}</span>
        </div>
        <h3>${title}</h3>
        <p class="company">${company}</p>
        <div class="job-info">
            <span><i class="fas fa-location-dot"></i> ${loc}</span>
            <span><i class="fas fa-briefcase"></i> ${typeLabel}</span>
        </div>
        <div class="job-footer">
            <span class="salary">${sal}</span>
            <button class="apply-btn">Apply</button>
        </div>
    `;

    // Prepend to grid
    const grid = document.querySelector('.job-grid');
    grid.insertBefore(jobCard, grid.firstChild);

    // Reset form
    this.reset();
});
