


document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    let state = {
        campaigns: [],
        currentView: 'campaigns',
        selectedCampaignId: null,
        selectedSessionId: null,
    };

    // --- DATA MANAGEMENT ---
    const loadData = () => {
        const savedData = localStorage.getItem('daggerheartTracker');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            // Simple migration and data integrity check
            if (parsedData.campaigns) {
                parsedData.campaigns.forEach(campaign => {
                    if (campaign.sessions) {
                        campaign.sessions.forEach(session => {
                            if (session.endingFear !== undefined) {
                                session.fear = session.endingFear;
                                delete session.endingFear;
                            }
                            if (session.fear === undefined) session.fear = 0;
                            if (session.isLocked === undefined) session.isLocked = false;
                            if (session.name === undefined) {
                                session.name = `Session ${new Date(session.date).toLocaleDateString()}`;
                            }
                            if (session.counters === undefined) {
                                session.counters = [];
                            }
                        });
                    }
                });
                state.campaigns = parsedData.campaigns;
            }
        }
    };

    const saveData = () => {
        localStorage.setItem('daggerheartTracker', JSON.stringify({ campaigns: state.campaigns }));
    };

    // --- NAVIGATION ---
    const navigate = (view, campaignId = null, sessionId = null) => {
        state.currentView = view;
        state.selectedCampaignId = campaignId;
        state.selectedSessionId = sessionId;
        render();
    };

    // --- RENDER FUNCTIONS ---
    const render = () => {
        app.innerHTML = '';
        switch (state.currentView) {
            case 'sessions':
                renderSessionListView();
                break;
            case 'sessionDetail':
                renderSessionDetailView();
                break;
            case 'settings':
                renderSettingsView();
                break;
            case 'campaigns':
            default:
                renderCampaignListView();
                break;
        }
    };

    const renderCampaignListView = () => {
        app.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h2>Campaigns</h2>
                <button class="btn btn-primary" id="new-campaign-btn">New Campaign</button>
            </div>
        `;
        
        if (state.campaigns.length === 0) {
            app.innerHTML += '<p>No campaigns found. Create a new one to get started!</p>';
        } else {
            const list = document.createElement('div');
            list.className = 'list-group';
            state.campaigns.forEach(campaign => {
                const item = document.createElement('div');
                item.className = 'list-group-item d-flex justify-content-between align-items-center';
                item.innerHTML = `
                    <button type="button" class="btn btn-link text-start flex-grow-1 p-0 campaign-link" data-campaign-id="${campaign.id}">${campaign.name}</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary rename-campaign-btn" data-campaign-id="${campaign.id}">Rename</button>
                `;
                list.appendChild(item);
            });
            app.appendChild(list);
        }

        // Add event listeners for campaign links, rename buttons, and new campaign button
        app.addEventListener('click', (e) => {
            if (e.target.classList.contains('campaign-link')) {
                const campaignId = e.target.dataset.campaignId;
                navigate('sessions', campaignId);
            }
            if (e.target.classList.contains('rename-campaign-btn')) {
                const campaignId = e.target.dataset.campaignId;
                const campaign = state.campaigns.find(c => c.id === campaignId);
                if (campaign) {
                    const newName = prompt('Enter new campaign name:', campaign.name);
                    if (newName && newName !== campaign.name) {
                        campaign.name = newName;
                        saveData();
                        render();
                    }
                }
            }
            if (e.target.id === 'new-campaign-btn') {
                const campaignName = prompt('Enter campaign name:');
                if (campaignName) {
                    const newCampaign = {
                        id: `c-${new Date().getTime()}`,
                        name: campaignName,
                        created: new Date().toISOString(),
                        sessions: []
                    };
                    state.campaigns.push(newCampaign);
                    saveData();
                    render();
                }
            }
        });
    };

    const renderSessionListView = () => {
        const campaign = state.campaigns.find(c => c.id === state.selectedCampaignId);
        if (!campaign) { return navigate('campaigns'); }

        app.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h2>${campaign.name} - Sessions</h2>
                <div>
                    <button class="btn btn-secondary" id="back-to-campaigns">Back</button>
                    <button class="btn btn-primary" id="new-session-btn">New Session</button>
                </div>
            </div>
        `;

        if (campaign.sessions.length === 0) {
            app.innerHTML += '<p>No sessions yet. Create one to begin!</p>';
        } else {
            const list = document.createElement('div');
            list.className = 'list-group';
            campaign.sessions.forEach(session => {
                const item = document.createElement('a');
                item.href = '#';
                item.className = `list-group-item list-group-item-action ${session.isLocked ? 'text-muted' : ''}`;
                item.innerHTML = `
                    <h5 class="mb-1"><i class="fas ${session.isLocked ? 'fa-lock' : 'fa-lock-open'} me-2"></i>${session.name}</h5>
                    <small>${new Date(session.date).toLocaleDateString()} • Encounters: ${session.encounters.length}</small>
                `;
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    navigate('sessionDetail', campaign.id, session.id);
                });
                list.appendChild(item);
            });
            app.appendChild(list);
        }

        document.getElementById('back-to-campaigns').addEventListener('click', () => navigate('campaigns'));
        document.getElementById('new-session-btn').addEventListener('click', () => {
            const sessionName = prompt('Enter session name:', `Session ${campaign.sessions.length + 1}`);
            if (sessionName === null) return;
            
            // Carry over incomplete counters and fear from previous session
            const previousSession = campaign.sessions[campaign.sessions.length - 1];
            const carriedCounters = previousSession && previousSession.counters ? 
                previousSession.counters.filter(counter => !counter.completed) : [];
            const previousFear = previousSession ? previousSession.fear : 0;
            
            const newSession = {
                id: `s-${new Date().getTime()}`,
                name: sessionName || `Session ${campaign.sessions.length + 1}`,
                date: new Date().toISOString(),
                startingFear: previousFear,
                fear: previousFear,
                characterNotes: '',
                shortRests: 0,
                longRests: 0,
                isLocked: false,
                encounters: [],
                counters: carriedCounters.map(counter => ({
                    ...counter,
                    id: `counter-${new Date().getTime()}-${Math.random().toString(36).substr(2, 9)}`
                }))
            };
            campaign.sessions.push(newSession);
            saveData();
            render();
        });
    };

    const renderSessionDetailView = () => {
        const campaign = state.campaigns.find(c => c.id === state.selectedCampaignId);
        if (!campaign) { return navigate('campaigns'); }
        const session = campaign.sessions.find(s => s.id === state.selectedSessionId);
        if (!session) { return navigate('sessions', campaign.id); }
        const disabled = session.isLocked ? 'disabled' : '';

        app.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h3>Session Details</h3>
                <div>
                    ${session.isLocked ? '<button class="btn btn-danger me-2" id="delete-session-btn"><i class="fas fa-trash"></i> Delete Session</button>' : ''}
                    <button class="btn btn-warning me-2" id="toggle-lock-btn">${session.isLocked ? '<i class="fas fa-lock"></i> Unlock' : '<i class="fas fa-lock-open"></i> Lock'}</button>
                    <button class="btn btn-secondary" id="back-to-sessions">Back to Sessions</button>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <label for="session-name" class="form-label">Session Name</label>
                            <input type="text" class="form-control" id="session-name" value="${session.name}" ${disabled}>
                        </div>
                        <div class="col-md-3">
                            <label for="session-date" class="form-label">Date</label>
                            <input type="date" class="form-control" id="session-date" value="${session.date.split('T')[0]}" ${disabled}>
                        </div>
                        <div class="col-md-3">
                            <label for="startingFear" class="form-label">Starting Fear</label>
                            <input type="number" class="form-control" id="startingFear" value="${session.startingFear}" ${disabled}>
                        </div>
                        <div class="col-md-3">
                            <label for="fear" class="form-label">Fear</label>
                            <div class="input-group">
                                <button class="btn btn-outline-secondary" type="button" id="decrement-fear" ${disabled}>-</button>
                                <input type="number" class="form-control" id="fear" value="${session.fear}" ${disabled}>
                                <button class="btn btn-outline-secondary" type="button" id="increment-fear" ${disabled}>+</button>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">Short Rests</label>
                            <div class="d-flex gap-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="shortRest1" ${session.shortRests >= 1 ? 'checked' : ''} ${disabled}>
                                    <label class="form-check-label" for="shortRest1">1</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="shortRest2" ${session.shortRests >= 2 ? 'checked' : ''} ${disabled}>
                                    <label class="form-check-label" for="shortRest2">2</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="shortRest3" ${session.shortRests >= 3 ? 'checked' : ''} ${disabled}>
                                    <label class="form-check-label" for="shortRest3">3</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <label for="longRests" class="form-label">Long Rests</label>
                            <div class="d-flex gap-2 align-items-center">
                                <input type="number" class="form-control" id="longRests" value="${session.longRests}" ${disabled} readonly>
                                <button class="btn btn-primary" type="button" id="long-rest-btn" ${disabled}>Long Rest</button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <label for="characterNotes" class="form-label">Character Notes</label>
                        <textarea class="form-control" id="characterNotes" rows="5" ${disabled}>${session.characterNotes}</textarea>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Session Counters</h5>
                    <button class="btn btn-sm btn-primary" id="add-counter-btn" ${disabled}>Add Counter</button>
                </div>
                <div class="card-body" id="counters-container">
                    <!-- Counters will be rendered here -->
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h4>Encounters</h4>
                <button class="btn btn-primary" id="new-encounter-btn" ${disabled}>New Encounter</button>
            </div>
            <div id="encounters-list"></div>
        `;

        renderCounters(session);
        renderEncounters(session);

        app.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', (e) => {
                const { id, value } = e.target;
                if (id === 'session-date') session.date = new Date(value).toISOString();
                else if (id === 'session-name') session.name = value;
                else if (id === 'characterNotes') session.characterNotes = value;
                else session[id] = isNaN(Number(value)) ? value : Number(value);
                saveData();
            });
        });

        document.getElementById('decrement-fear').addEventListener('click', () => {
            session.fear = Math.max(0, session.fear - 1);
            saveData();
            render();
        });

        document.getElementById('increment-fear').addEventListener('click', () => {
            session.fear += 1;
            saveData();
            render();
        });

        document.getElementById('long-rest-btn').addEventListener('click', () => {
            session.longRests += 1;
            session.shortRests = 0; // Clear short rests on long rest
            saveData();
            render();
        });

        // Short rest checkbox handlers
        ['shortRest1', 'shortRest2', 'shortRest3'].forEach((id, index) => {
            const checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.addEventListener('change', () => {
                    const restNumber = index + 1;
                    if (checkbox.checked) {
                        // If checking a box, ensure all previous boxes are also checked
                        session.shortRests = Math.max(session.shortRests, restNumber);
                    } else {
                        // If unchecking a box, uncheck all subsequent boxes
                        session.shortRests = Math.min(session.shortRests, index);
                    }
                    saveData();
                    render();
                });
            }
        });

        document.getElementById('toggle-lock-btn').addEventListener('click', () => {
            session.isLocked = !session.isLocked;
            saveData();
            render();
        });

        // Add delete session button listener if the session is locked
        const deleteSessionBtn = document.getElementById('delete-session-btn');
        if (deleteSessionBtn) {
            deleteSessionBtn.addEventListener('click', () => {
                const confirmMessage = `Delete session "${session.name}"? This action cannot be undone.`;
                if (confirm(confirmMessage)) {
                    // Remove the session from the campaign
                    campaign.sessions = campaign.sessions.filter(s => s.id !== session.id);
                    saveData();
                    // Navigate back to sessions list
                    navigate('sessions', campaign.id);
                }
            });
        }

        document.getElementById('back-to-sessions').addEventListener('click', () => navigate('sessions', campaign.id));
        document.getElementById('new-encounter-btn').addEventListener('click', () => {
            const newEncounter = {
                id: `e-${new Date().getTime()}`,
                notes: '',
                adversaries: []
            };
            session.encounters.push(newEncounter);
            saveData();
            renderEncounters(session);
        });

        document.getElementById('add-counter-btn').addEventListener('click', () => {
            const counterName = prompt('Enter counter name:', 'Army arrival countdown');
            if (counterName === null) return;
            
            const startingValue = prompt('Enter starting value:', '5');
            if (startingValue === null) return;
            
            const newCounter = {
                id: `counter-${new Date().getTime()}-${Math.random().toString(36).substr(2, 9)}`,
                name: counterName || 'New Counter',
                currentValue: parseInt(startingValue) || 0,
                startingValue: parseInt(startingValue) || 0,
                completed: false
            };
            
            if (!session.counters) session.counters = [];
            session.counters.push(newCounter);
            saveData();
            renderCounters(session);
        });
    };

    const renderSettingsView = () => {
        app.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Settings</h2>
                <button class="btn btn-secondary" id="back-to-campaigns-btn">Back to Campaigns</button>
            </div>
            
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Data Management</h5>
                        </div>
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col-md-4">
                                    <button class="btn btn-success w-100" id="import-btn">
                                        <i class="fas fa-upload me-2"></i>Import Data
                                    </button>
                                    <small class="text-muted">Import campaigns from a file</small>
                                </div>
                                <div class="col-md-4">
                                    <button class="btn btn-info w-100" id="export-btn">
                                        <i class="fas fa-download me-2"></i>Export Data
                                    </button>
                                    <small class="text-muted">Download your campaigns as a file</small>
                                </div>
                                <div class="col-md-4">
                                    <button class="btn btn-danger w-100" id="delete-storage-btn">
                                        <i class="fas fa-trash me-2"></i>Clear All Data
                                    </button>
                                    <small class="text-muted">Delete all campaigns permanently</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mt-4">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Application Info</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <p><strong>Version:</strong> 1.0.0</p>
                                    <p><strong>SRD Adversaries:</strong> ${typeof srdAdversaries !== 'undefined' ? srdAdversaries.length : 'Loading...'}</p>
                                </div>
                                <div class="col-md-6">
                                    <p><strong>Campaigns:</strong> ${state.campaigns ? state.campaigns.length : 0}</p>
                                    <p><strong>Total Sessions:</strong> ${state.campaigns ? state.campaigns.reduce((total, campaign) => total + (campaign.sessions ? campaign.sessions.length : 0), 0) : 0}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add event listener for back button
        document.getElementById('back-to-campaigns-btn').addEventListener('click', () => {
            navigate('campaigns');
        });
    };

    const showHelpModal = () => {
        const existingModal = document.getElementById('help-modal');
        if (existingModal) existingModal.remove();

        const modalHtml = `
        <div class="modal fade" id="help-modal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-question-circle me-2"></i>Daggerheart Tracker Help</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="accordion" id="help-accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#campaigns-help">
                                        <i class="fas fa-folder me-2"></i>Campaign Management
                                    </button>
                                </h2>
                                <div id="campaigns-help" class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        <ul>
                                            <li><strong>Create Campaign:</strong> Click "New Campaign" to start a new campaign</li>
                                            <li><strong>Rename Campaign:</strong> Use the "Rename" button next to any campaign</li>
                                            <li><strong>Import/Export:</strong> Access data management from Settings to backup or restore campaigns</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sessions-help">
                                        <i class="fas fa-calendar me-2"></i>Session Management
                                    </button>
                                </h2>
                                <div id="sessions-help" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <ul>
                                            <li><strong>Session Continuation:</strong> Fear and incomplete counters automatically carry over to new sessions</li>
                                            <li><strong>Lock Session:</strong> Lock completed sessions to prevent accidental changes</li>
                                            <li><strong>Delete Session:</strong> Delete button only appears when session is locked - requires confirmation</li>
                                            <li><strong>Session Notes:</strong> Use the character notes field for session-specific information</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rests-help">
                                        <i class="fas fa-bed me-2"></i>Rest Tracking
                                    </button>
                                </h2>
                                <div id="rests-help" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <ul>
                                            <li><strong>Short Rests:</strong> Check boxes for up to 3 short rests per day</li>
                                            <li><strong>Long Rest Button:</strong> Increments long rest count by 1 and clears all short rests</li>
                                            <li><strong>Day Tracking:</strong> Long rest count helps track how many days have passed</li>
                                            <li><strong>Starting Fear:</strong> Shows fear level at session start (carries from previous session)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#counters-help">
                                        <i class="fas fa-stopwatch me-2"></i>Session Counters
                                    </button>
                                </h2>
                                <div id="counters-help" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <ul>
                                            <li><strong>Named Counters:</strong> Track events like "Army arrival: 5 days" or "Ritual completion: 3 phases"</li>
                                            <li><strong>Carry Forward:</strong> Only incomplete counters carry over to new sessions</li>
                                            <li><strong>Completion:</strong> Check "Completed" to prevent counter from carrying forward</li>
                                            <li><strong>Reset:</strong> Use reset button to restore counter to starting value</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#adversaries-help">
                                        <i class="fas fa-dragon me-2"></i>Adversary Management
                                    </button>
                                </h2>
                                <div id="adversaries-help" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <ul>
                                            <li><strong>SRD Adversaries:</strong> Choose from 129+ pre-loaded creatures from the official SRD</li>
                                            <li><strong>Custom Adversaries:</strong> Create your own with custom stats and images</li>
                                            <li><strong>HP/Stress Tracking:</strong> Click checkboxes to track damage - background turns red when maxed</li>
                                            <li><strong>Duplicate:</strong> Copy adversaries to reuse similar creatures</li>
                                            <li><strong>Confirmation:</strong> "For real?" confirmation prevents accidental deletions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#data-help">
                                        <i class="fas fa-database me-2"></i>Data Management
                                    </button>
                                </h2>
                                <div id="data-help" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <ul>
                                            <li><strong>Smart Import:</strong> Updates campaigns with same name, adds new ones without deleting existing data</li>
                                            <li><strong>Auto Backup:</strong> Clear data function automatically exports backup before deletion</li>
                                            <li><strong>Local Storage:</strong> All data saved locally in your browser - no account required</li>
                                            <li><strong>Export Format:</strong> JSON format compatible with other tools and backup services</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tips-help">
                                        <i class="fas fa-lightbulb me-2"></i>Pro Tips
                                    </button>
                                </h2>
                                <div id="tips-help" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <ul>
                                            <li><strong>Red Backgrounds:</strong> Indicate maxed out HP/Stress for quick visual reference</li>
                                            <li><strong>Session Flow:</strong> Create session → Track encounters → Lock when complete → Start new session</li>
                                            <li><strong>Counter Examples:</strong> "Royal wedding: 7 days", "Demon portal: 3 rituals", "Plague cure: 5 ingredients"</li>
                                            <li><strong>Fear Management:</strong> Use +/- buttons or direct input for quick fear adjustments</li>
                                            <li><strong>Backup Strategy:</strong> Export campaigns regularly, especially before major sessions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        const modal = new bootstrap.Modal(document.getElementById('help-modal'));
        modal.show();
    };

    const renderCounters = (session) => {
        const countersContainer = document.getElementById('counters-container');
        const disabled = session.isLocked ? 'disabled' : '';
        countersContainer.innerHTML = '';
        
        if (!session.counters || session.counters.length === 0) {
            countersContainer.innerHTML = '<p class="text-muted mb-0">No counters added yet.</p>';
            return;
        }

        session.counters.forEach(counter => {
            const counterDiv = document.createElement('div');
            counterDiv.className = 'counter-item mb-3 p-3 border rounded';
            counterDiv.innerHTML = `
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <input type="text" class="form-control counter-name-input" value="${counter.name}" data-counter-id="${counter.id}" ${disabled}>
                    </div>
                    <div class="col-md-3">
                        <div class="input-group">
                            <button class="btn btn-outline-secondary counter-decrement" type="button" data-counter-id="${counter.id}" ${disabled}>-</button>
                            <input type="number" class="form-control text-center counter-value-input" value="${counter.currentValue}" data-counter-id="${counter.id}" ${disabled}>
                            <button class="btn btn-outline-secondary counter-increment" type="button" data-counter-id="${counter.id}" ${disabled}>+</button>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-check">
                            <input class="form-check-input counter-completed" type="checkbox" data-counter-id="${counter.id}" ${counter.completed ? 'checked' : ''} ${disabled}>
                            <label class="form-check-label">Completed</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <button class="btn btn-sm btn-outline-danger delete-counter-btn" data-counter-id="${counter.id}" ${disabled}>Delete</button>
                        <button class="btn btn-sm btn-outline-secondary reset-counter-btn" data-counter-id="${counter.id}" ${disabled}>Reset</button>
                    </div>
                </div>
            `;
            countersContainer.appendChild(counterDiv);
        });

        // Add event listeners for counter interactions
        countersContainer.addEventListener('click', (e) => {
            const counterId = e.target.dataset.counterId;
            if (!counterId) return;
            
            const counter = session.counters.find(c => c.id === counterId);
            if (!counter) return;

            if (e.target.classList.contains('counter-increment')) {
                counter.currentValue += 1;
                // Update just the input field
                const valueInput = document.querySelector(`input.counter-value-input[data-counter-id="${counterId}"]`);
                if (valueInput) valueInput.value = counter.currentValue;
                saveData();
            } else if (e.target.classList.contains('counter-decrement')) {
                counter.currentValue = Math.max(0, counter.currentValue - 1);
                // Update just the input field
                const valueInput = document.querySelector(`input.counter-value-input[data-counter-id="${counterId}"]`);
                if (valueInput) valueInput.value = counter.currentValue;
                saveData();
            } else if (e.target.classList.contains('delete-counter-btn')) {
                if (confirm(`Delete counter "${counter.name}"?`)) {
                    session.counters = session.counters.filter(c => c.id !== counterId);
                    saveData();
                    renderCounters(session);
                }
            } else if (e.target.classList.contains('reset-counter-btn')) {
                counter.currentValue = counter.startingValue;
                // Update just the input field
                const valueInput = document.querySelector(`input.counter-value-input[data-counter-id="${counterId}"]`);
                if (valueInput) valueInput.value = counter.currentValue;
                saveData();
            }
        });

        // Add event listeners for input changes
        countersContainer.addEventListener('input', (e) => {
            const counterId = e.target.dataset.counterId;
            if (!counterId) return;
            
            const counter = session.counters.find(c => c.id === counterId);
            if (!counter) return;

            if (e.target.classList.contains('counter-name-input')) {
                counter.name = e.target.value;
                saveData();
            } else if (e.target.classList.contains('counter-value-input')) {
                counter.currentValue = parseInt(e.target.value) || 0;
                saveData();
            }
        });

        // Add event listener for completed checkbox
        countersContainer.addEventListener('change', (e) => {
            if (e.target.classList.contains('counter-completed')) {
                const counterId = e.target.dataset.counterId;
                const counter = session.counters.find(c => c.id === counterId);
                if (counter) {
                    counter.completed = e.target.checked;
                    saveData();
                }
            }
        });
    };

    const renderEncounters = (session) => {
        const encountersListDiv = document.getElementById('encounters-list');
        const disabled = session.isLocked ? 'disabled' : '';
        encountersListDiv.innerHTML = '';
        if (session.encounters.length === 0) {
            encountersListDiv.innerHTML = '<p>No encounters for this session yet.</p>';
            return;
        }

        session.encounters.forEach(encounter => {
            const encounterCard = document.createElement('div');
            encounterCard.className = 'card mb-3';
            encounterCard.innerHTML = `
                <div class="card-header d-flex justify-content-between align-items-center">
                    Encounter
                    <div>
                        <button class="btn btn-success btn-sm me-2 add-adversary-btn" data-encounter-id="${encounter.id}" ${disabled}>Add Adversary</button>
                        <button class="btn btn-sm btn-outline-danger delete-encounter-btn" data-encounter-id="${encounter.id}" ${disabled}>Delete Encounter</button>
                    </div>
                </div>
                <div class="card-body">
                    <div id="adversaries-list-${encounter.id}" class="mb-3"></div>
                    <h5>General Encounter Notes</h5>
                    <textarea class="form-control encounter-notes" data-encounter-id="${encounter.id}" placeholder="General notes for the encounter..." ${disabled}>${encounter.notes}</textarea>
                </div>
            `;
            encountersListDiv.appendChild(encounterCard);
            renderAdversaries(encounter, session.isLocked);
        });

        encountersListDiv.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-encounter-btn')) {
                const encounterId = e.target.dataset.encounterId;
                session.encounters = session.encounters.filter(enc => enc.id !== encounterId);
                saveData();
                renderEncounters(session);
            }
            if (e.target.classList.contains('add-adversary-btn')) {
                const encounterId = e.target.dataset.encounterId;
                renderAdversaryModal(session, encounterId);
            }
        });
        encountersListDiv.addEventListener('input', (e) => {
            if (e.target.classList.contains('encounter-notes')) {
                const encounterId = e.target.dataset.encounterId;
                const encounter = session.encounters.find(e => e.id === encounterId);
                encounter.notes = e.target.value;
                saveData();
            }
        });
    };

    const renderAdversaries = (encounter, isLocked) => {
        const adversariesListDiv = document.getElementById(`adversaries-list-${encounter.id}`);
        const disabled = isLocked ? 'disabled' : '';
        adversariesListDiv.innerHTML = '';
        if (encounter.adversaries.length === 0) {
            adversariesListDiv.innerHTML = '<small>No adversaries in this encounter.</small>';
            return;
        }

        encounter.adversaries.forEach(adversary => {
            const adversaryDiv = document.createElement('div');
            adversaryDiv.className = 'adversary-card mb-3 p-3 border rounded';
            adversaryDiv.innerHTML = `
                <div class="row">
                    <div class="col-md-4">
                        <input type="text" class="form-control form-control-lg mb-2 adversary-name-input" value="${adversary.name}" data-adversary-id="${adversary.id}" ${disabled}>
                        <img src="${adversary.imageUrl || ''}" class="adversary-image img-fluid rounded ${!adversary.imageUrl ? 'd-none' : ''}" alt="${adversary.name}">
                        <button class="btn btn-sm btn-secondary w-100 mt-2 set-image-btn" data-adversary-id="${adversary.id}" ${disabled}>Set Image</button>
                    </div>
                    <div class="col-md-8">
                        <div class="row g-2 mb-2">
                            <div class="col">
                                <label class="form-label-sm">Max HP</label>
                                <input type="number" class="form-control form-control-sm adversary-stat-input" value="${adversary.maxHP}" data-adversary-id="${adversary.id}" data-stat="maxHP" ${disabled}>
                            </div>
                            <div class="col">
                                <label class="form-label-sm">Max Stress</label>
                                <input type="number" class="form-control form-control-sm adversary-stat-input" value="${adversary.maxStress}" data-adversary-id="${adversary.id}" data-stat="maxStress" ${disabled}>
                            </div>
                            <div class="col">
                                <label class="form-label-sm">Major</label>
                                <input type="number" class="form-control form-control-sm adversary-stat-input" value="${adversary.majorThreshold || ''}" data-adversary-id="${adversary.id}" data-stat="majorThreshold" ${disabled}>
                            </div>
                            <div class="col">
                                <label class="form-label-sm">Severe</label>
                                <input type="number" class="form-control form-control-sm adversary-stat-input" value="${adversary.severeThreshold || ''}" data-adversary-id="${adversary.id}" data-stat="severeThreshold" ${disabled}>
                            </div>
                        </div>
                        <div class="mb-2 ${adversary.currentHP === adversary.maxHP ? 'maxed-out' : ''}">
                            <strong>HP:</strong> (${adversary.currentHP}/${adversary.maxHP})
                            <div class="hp-trackers">${generateCheckboxes('hp', adversary.id, adversary.maxHP, adversary.currentHP, disabled)}</div>
                        </div>
                        <div class="${adversary.currentStress === adversary.maxStress ? 'maxed-out' : ''}">
                            <strong>Stress:</strong> (${adversary.currentStress}/${adversary.maxStress})
                            <div class="stress-trackers">${generateCheckboxes('stress', adversary.id, adversary.maxStress, adversary.currentStress, disabled)}</div>
                        </div>
                        <details class="mt-2">
                            <summary>Details & Notes</summary>
                            <div class="adversary-notes p-2 bg-light rounded mt-1">
                                <div class="mb-2">
                                    <label class="form-label small">Stats Details</label>
                                    <textarea class="form-control form-control-sm adversary-note" data-adversary-id="${adversary.id}" data-note-type="stats" rows="3" ${disabled}>${adversary.stats || ''}</textarea>
                                </div>
                                <div class="mb-2">
                                    <label class="form-label small">Motives & Tactics</label>
                                    <textarea class="form-control form-control-sm adversary-note" data-adversary-id="${adversary.id}" data-note-type="motives" rows="2" ${disabled}>${adversary.notes.motives || ''}</textarea>
                                </div>
                                <div class="mb-2">
                                    <label class="form-label small">Attacks & Features</label>
                                    <textarea class="form-control form-control-sm adversary-note" data-adversary-id="${adversary.id}" data-note-type="features" rows="4" ${disabled}>${adversary.notes.features || ''}</textarea>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
                 <button class="btn btn-sm btn-secondary duplicate-adversary-btn" data-adversary-id="${adversary.id}" ${disabled}>Duplicate</button>
                 <button class="btn btn-sm btn-danger delete-adversary-btn" data-adversary-id="${adversary.id}" ${disabled}>Delete Adversary</button>
            `;
            adversariesListDiv.appendChild(adversaryDiv);
        });

        adversariesListDiv.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-adversary-btn')) {
                const adversaryId = e.target.dataset.adversaryId;
                const adversary = encounter.adversaries.find(m => m.id === adversaryId);
                const adversaryName = adversary ? adversary.name : 'this adversary';
                
                if (confirm(`Delete ${adversaryName}? For real?`)) {
                    encounter.adversaries = encounter.adversaries.filter(m => m.id !== adversaryId);
                    saveData();
                    renderAdversaries(encounter, isLocked);
                }
            }
            if (e.target.classList.contains('duplicate-adversary-btn')) {
                const adversaryId = e.target.dataset.adversaryId;
                const adversary = encounter.adversaries.find(m => m.id === adversaryId);
                if (adversary) {
                    const duplicatedAdversary = {
                        ...adversary,
                        id: `m-${Date.now()}`,
                        name: `${adversary.name} (Copy)`
                    };
                    encounter.adversaries.push(duplicatedAdversary);
                    saveData();
                    renderAdversaries(encounter, isLocked);
                }
            }
            if (e.target.classList.contains('set-image-btn')) {
                const adversaryId = e.target.dataset.adversaryId;
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = (event) => {
                    const file = event.target.files[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = (readerEvent) => {
                        const adversary = encounter.adversaries.find(m => m.id === adversaryId);
                        adversary.imageUrl = readerEvent.target.result;
                        saveData();
                        renderAdversaries(encounter, isLocked);
                    };
                    reader.readAsDataURL(file);
                };
                input.click();
            }
        });

        adversariesListDiv.addEventListener('input', (e) => {
            const { adversaryId } = e.target.dataset;
            const adversary = encounter.adversaries.find(m => m.id === adversaryId);
            if (!adversary) return;

            if (e.target.classList.contains('adversary-name-input')) {
                adversary.name = e.target.value;
            } else if (e.target.classList.contains('adversary-note')) {
                const { noteType } = e.target.dataset;
                if (noteType === 'stats') {
                    adversary.stats = e.target.value;
                } else {
                    if (!adversary.notes) adversary.notes = {};
                    adversary.notes[noteType] = e.target.value;
                }
            } else if (e.target.classList.contains('adversary-stat-input')) {
                const { stat } = e.target.dataset;
                const newValue = parseInt(e.target.value, 10) || 0;
                adversary[stat] = newValue;
                if (stat === 'maxHP') adversary.currentHP = Math.min(adversary.currentHP, newValue);
                if (stat === 'maxStress') adversary.currentStress = Math.min(adversary.currentStress, newValue);
                renderAdversaries(encounter, isLocked); // Re-render for stat changes
            }
            saveData();
        });

        adversariesListDiv.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const parts = e.target.dataset.id.split('-');
                const type = parts[0];
                const adversaryId = parts.slice(1).join('-');

                // Fetch the latest session and encounter from the state
                const currentCampaign = state.campaigns.find(c => c.id === state.selectedCampaignId);
                const currentSession = currentCampaign ? currentCampaign.sessions.find(s => s.id === state.selectedSessionId) : null;
                const currentEncounter = currentSession ? currentSession.encounters.find(enc => enc.id === encounter.id) : null;

                if (!currentEncounter) {
                    console.error('Error: Current encounter not found in state.');
                    return;
                }

                const adversary = currentEncounter.adversaries.find(m => m.id === adversaryId);

                if (!adversary) {
                    console.error('Error: Adversary with ID', adversaryId, 'not found in current encounter.');
                    return;
                }

                const checkedCount = e.target.parentElement.querySelectorAll('input:checked').length;
                if (type === 'hp') {
                    adversary.currentHP = checkedCount;
                    // Find the hp-trackers div and its parent container
                    const hpTrackers = e.target.closest('.hp-trackers');
                    const hpContainer = hpTrackers.parentElement;
                    
                    // Find and update the text node (everything before the hp-trackers div)
                    const textNodes = [];
                    for (let node of hpContainer.childNodes) {
                        if (node.nodeType === Node.TEXT_NODE || (node.nodeType === Node.ELEMENT_NODE && node !== hpTrackers)) {
                            textNodes.push(node);
                        }
                    }
                    // Remove old text nodes and elements (except trackers)
                    textNodes.forEach(node => node.remove());
                    
                    // Add new text at the beginning
                    const newText = document.createElement('span');
                    newText.innerHTML = `<strong>HP:</strong> (${adversary.currentHP}/${adversary.maxHP})`;
                    hpContainer.insertBefore(newText, hpTrackers);
                    
                    // Update maxed-out class on the parent div
                    if (adversary.currentHP === adversary.maxHP) {
                        hpContainer.classList.add('maxed-out');
                    } else {
                        hpContainer.classList.remove('maxed-out');
                    }
                } else {
                    adversary.currentStress = checkedCount;
                    // Find the stress-trackers div and its parent container
                    const stressTrackers = e.target.closest('.stress-trackers');
                    const stressContainer = stressTrackers.parentElement;
                    
                    // Find and update the text node (everything before the stress-trackers div)
                    const textNodes = [];
                    for (let node of stressContainer.childNodes) {
                        if (node.nodeType === Node.TEXT_NODE || (node.nodeType === Node.ELEMENT_NODE && node !== stressTrackers)) {
                            textNodes.push(node);
                        }
                    }
                    // Remove old text nodes and elements (except trackers)
                    textNodes.forEach(node => node.remove());
                    
                    // Add new text at the beginning
                    const newText = document.createElement('span');
                    newText.innerHTML = `<strong>Stress:</strong> (${adversary.currentStress}/${adversary.maxStress})`;
                    stressContainer.insertBefore(newText, stressTrackers);
                    
                    // Update maxed-out class on the parent div
                    if (adversary.currentStress === adversary.maxStress) {
                        stressContainer.classList.add('maxed-out');
                    } else {
                        stressContainer.classList.remove('maxed-out');
                    }
                }
                saveData();
            }
        });
    };

    const generateCheckboxes = (type, adversaryId, max, current, disabled) => {
        let html = '';
        for (let i = 0; i < max; i++) {
            let isChecked = false;
            if (type === 'hp') {
                isChecked = (i < current);
            } else { // type === 'stress'
                isChecked = (i < current);
            }
            html += `<input type="checkbox" class="form-check-input" data-id="${type}-${adversaryId}" ${isChecked ? 'checked' : ''} ${disabled}>`;
        }
        return html;
    };

    const renderAdversaryModal = (session, encounterId) => {
        const existingModal = document.getElementById('adversary-modal');
        if (existingModal) existingModal.remove();

        const modalHtml = `
        <div class="modal fade" id="adversary-modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Adversary</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <ul class="nav nav-tabs" id="adversary-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="srd-tab" data-bs-toggle="tab" data-bs-target="#srd-panel" type="button">From SRD</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="custom-tab" data-bs-toggle="tab" data-bs-target="#custom-panel" type="button">Custom</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="adversary-tab-content">
                            <div class="tab-pane fade show active p-3" id="srd-panel">
                                <label for="srd-select" class="form-label">Select Adversary</label>
                                <select class="form-select" id="srd-select">
                                    ${srdAdversaries.map(a => `<option value="${a.name}">${a.name}</option>`).join('')}
                                </select>
                            </div>
                            <div class="tab-pane fade p-3" id="custom-panel">
                                <div class="mb-3">
                                    <label for="custom-name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="custom-name" placeholder="e.g., Goblin Boss">
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <label for="custom-hp" class="form-label">Max HP</label>
                                        <input type="number" class="form-control" id="custom-hp" value="10">
                                    </div>
                                    <div class="col">
                                        <label for="custom-stress" class="form-label">Max Stress</label>
                                        <input type="number" class="form-control" id="custom-stress" value="5">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col">
                                        <label for="custom-major" class="form-label">Major</label>
                                        <input type="number" class="form-control" id="custom-major" value="5">
                                    </div>
                                    <div class="col">
                                        <label for="custom-severe" class="form-label">Severe</label>
                                        <input type="number" class="form-control" id="custom-severe" value="10">
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <label for="custom-image" class="form-label">Image</label>
                                    <input type="file" class="form-control" id="custom-image" accept="image/*">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" id="add-adversary-confirm">Add</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        const modal = new bootstrap.Modal(document.getElementById('adversary-modal'));
        modal.show();

        document.getElementById('add-adversary-confirm').addEventListener('click', () => {
            const encounter = session.encounters.find(e => e.id === encounterId);
            const activeTab = document.querySelector('#adversary-tab .active').id;
            let newAdversary;

            if (activeTab === 'srd-tab') {
                const selectedName = document.getElementById('srd-select').value;
                const template = srdAdversaries.find(a => a.name === selectedName);
                
                // Parse stats from the stats string
                const parseStats = (statsString) => {
                    const stats = { maxHP: 0, maxStress: 0, majorThreshold: 0, severeThreshold: 0 };
                    if (statsString) {
                        const hpMatch = statsString.match(/HP:\*?\*?\s*(\d+)/i);
                        const stressMatch = statsString.match(/Stress:\*?\*?\s*(\d+)/i);
                        const thresholdMatch = statsString.match(/Thresholds:\*?\*?\s*(\d+)\/(\d+)/i);
                        
                        if (hpMatch) stats.maxHP = parseInt(hpMatch[1], 10);
                        if (stressMatch) stats.maxStress = parseInt(stressMatch[1], 10);
                        if (thresholdMatch) {
                            stats.majorThreshold = parseInt(thresholdMatch[1], 10);
                            stats.severeThreshold = parseInt(thresholdMatch[2], 10);
                        }
                    }
                    return stats;
                };
                
                const parsedStats = parseStats(template.stats);
                newAdversary = {
                    id: `m-${new Date().getTime()}`,
                    name: template.name,
                    maxHP: parsedStats.maxHP,
                    currentHP: 0,
                    maxStress: parsedStats.maxStress,
                    currentStress: 0,
                    majorThreshold: parsedStats.majorThreshold,
                    severeThreshold: parsedStats.severeThreshold,
                    stats: template.stats || '',
                    notes: {
                        motives: template.notes.motives_and_tactics || '',
                        features: template.notes.features || ''
                    },
                    imageUrl: null
                };
                 encounter.adversaries.push(newAdversary);
                 saveData();
                 renderAdversaries(encounter, session.isLocked);
                 modal.hide();
            } else {
                const maxHP = parseInt(document.getElementById('custom-hp').value, 10) || 10;
                const maxStress = parseInt(document.getElementById('custom-stress').value, 10) || 5;
                newAdversary = {
                    id: `m-${new Date().getTime()}`,
                    name: document.getElementById('custom-name').value || 'Custom Adversary',
                    maxHP: maxHP,
                    currentHP: 0,
                    maxStress: maxStress,
                    currentStress: 0,
                    majorThreshold: parseInt(document.getElementById('custom-major').value, 10) || 5,
                    severeThreshold: parseInt(document.getElementById('custom-severe').value, 10) || 10,
                    stats: '',
                    notes: { motives: '', features: '' },
                    imageUrl: null
                };
                
                const imageFile = document.getElementById('custom-image').files[0];
                if (imageFile) {
                    const reader = new FileReader();
                    reader.onload = (readerEvent) => {
                        newAdversary.imageUrl = readerEvent.target.result;
                        encounter.adversaries.push(newAdversary);
                        saveData();
                        renderAdversaries(encounter, session.isLocked);
                        modal.hide();
                    };
                    reader.readAsDataURL(imageFile);
                } else {
                    encounter.adversaries.push(newAdversary);
                    saveData();
                    renderAdversaries(encounter, session.isLocked);
                    modal.hide();
                }
            }
        });
    };

    // --- GLOBAL EVENT LISTENERS ---

    document.addEventListener('click', (e) => {
        if (e.target.id === 'export-btn') {
            const dataStr = JSON.stringify(state.campaigns, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            const exportFileDefaultName = 'daggerheart_tracker_data.json';
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
        }
        
        if (e.target.id === 'import-btn') {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = e => {
                const file = e.target.files[0];
                if (!file) return;
                
                const reader = new FileReader();
                reader.onload = readerEvent => {
                    try {
                        const content = readerEvent.target.result;
                        const importedCampaigns = JSON.parse(content);
                        if (Array.isArray(importedCampaigns)) {
                            let updatedCount = 0;
                            let addedCount = 0;
                            
                            importedCampaigns.forEach(importedCampaign => {
                                const existingIndex = state.campaigns.findIndex(c => c.name === importedCampaign.name);
                                
                                if (existingIndex !== -1) {
                                    // Update existing campaign with same name
                                    state.campaigns[existingIndex] = importedCampaign;
                                    updatedCount++;
                                } else {
                                    // Add new campaign
                                    state.campaigns.push(importedCampaign);
                                    addedCount++;
                                }
                            });
                            
                            saveData();
                            navigate('campaigns');
                            alert(`Import complete! Updated ${updatedCount} campaigns, added ${addedCount} new campaigns.`);
                        } else {
                            alert('Invalid file format.');
                        }
                    } catch (error) {
                        alert('Error reading or parsing file.');
                        console.error(error);
                    }
                }
                reader.readAsText(file);
            }
            input.click();
        }
        
        if (e.target.id === 'delete-storage-btn') {
            if (confirm('This will export your data as a backup and then clear all local storage. Are you sure you want to continue?')) {
                // First export the data as backup
                const dataStr = JSON.stringify(state.campaigns, null, 2);
                const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
                const exportFileDefaultName = `daggerheart_backup_${new Date().toISOString().split('T')[0]}.json`;
                const linkElement = document.createElement('a');
                linkElement.setAttribute('href', dataUri);
                linkElement.setAttribute('download', exportFileDefaultName);
                linkElement.click();
                
                // Clear local storage after a short delay to ensure download starts
                setTimeout(() => {
                    localStorage.removeItem('daggerheartTracker');
                    state.campaigns = [];
                    render();
                    alert('Local storage cleared successfully. Your data has been exported as a backup.');
                }, 100);
            }
        }
    });


    document.getElementById('help-btn').addEventListener('click', () => {
        showHelpModal();
    });

    document.getElementById('settings-btn').addEventListener('click', () => {
        navigate('settings');
    });

    // --- INITIALIZATION ---
    loadData();
    render();
});


